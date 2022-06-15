const cxn = require('./connection');
const queries = require('./queries');
const jwt = require('jsonwebtoken');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const pool = await cxn.getUserConn();
            const result = await pool.request().query(queries.getAllUsers);
            let users = result.recordset;
            return res.status(200).json(users);
        } catch (error) {
            console.log(error)
            return res.status(403).json({ msg: "Error", error: error.toString() })
        }
    },

    async signin(req, res) {
        let ob = req.body;
        /* const token = req.get('Authorization');
        console.log(token) */
        try {
            const pool = await cxn.getUserConn();
            let result = await pool.request()
                .input('name', ob.user)
                .query(queries.getUserPass);
            if (result.recordset[0].Contrasena === ob.pass) {
                const accessToken = jwt.sign({
                    user: ob.user
                }, cxn.accessToken, {
                    expiresIn: '8h'
                });
                return res.status(200).json({'token' : accessToken});
            } else {
                console.log('Contraseña incorrecta')
                return res.status(403).json({ msg: "Error", error: 'Contraseña incorrecta' })
            }
        } catch (error) {
            console.log(error);
            return res.status(403).json({ msg: "Error", error: error.toString() })
        }
    },

    /*async newUser(req, res) {
        let name = "Alice";
        let email = ""
        let pass = "1234"

        try {
            const pool = await cxn.getConnection();
            let result = await pool.request()
                .input('name', name)
                .input('email', email)
                .input('pass', pass)
                .query(queries.newUser);
            res.json(result)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    },*/

    //Protected routes
    isAuthenticated(req, res, next) {
        const token = req.get('Authorization');
        jwt.verify(token, cxn.accessToken, function(err, decoded) {
            //TODO: Redirige al / de express y no de vue (revisar)
            if (err) res.redirect('/');
            if (decoded !== undefined) {
                //console.log(decoded) //{user, ita, exp}
                req.user = decoded.user;
                if (decoded.empresa) req.empresa = decoded.empresa;
                next();
            }
        });
    },

    async getAllEmpresas(req, res) {
        console.log(req.user);
        try {
            const pool = await cxn.getUserConn();
            let result = await pool.request().query(queries.getAllEmpresas);
            let empresas = result.recordset;
            return res.status(200).json(empresas);
        } catch (error) {
            return res.status(403).json({ msg: "Error", error: 'Contraseña incorrecta' })
        }
    },

    async getAlbaranData(req, res) {
        let user = req.user;
        //req.query = { albaran: '', empresa: '' }
        console.log(req.query.albaran, req.query.empresa)
        try {
            const pool = await cxn.getConnection();
            let result = await pool.request()
                .input('Empresa', req.query.empresa)
                .input('PLE', 'PLC' + req.query.albaran)
                .query(queries.getAlbaranData);
            let lecturas = result.recordset;
            lecturas.forEach(function(item) {
                item.Descripcion = item.Descripcion.trim();
                if (item.NroDS == 'Cargado') {
                    item.NroDS = true;
                }
            });
            let result2 = await pool.request()
                .input('Empresa', req.query.empresa)
                .input('AE', req.query.albaran)
                .query(queries.getAEagencia);
            let agencia = result2.recordset[0];
            
            //Sin coincidencias, devolver a /albaran
            if (lecturas.length == 0) {
                //TODO: Comprobar que funciona en producción
                //res.redirect('/documents') 
                return res.status(404).json({msg: "Error", error: 'Este albarán no tiene un packing de carga o es de otro cliente.'})    
            } else {
                return res.status(200).json({
                    lecturas,
                    agencia
                })
            }
        } catch (error) {
            return res.status(403).json({ msg: "Error", error: error.toString() })
        }
    },

    async cargar(req, res) {
        let user = req.user;
        let ob = req.body;
        try {
            const pool = await cxn.getConnection();
            let result = await pool.request()
                .input('Descripcion', ob.ud)
                .query(queries.putCargadoOnUd);
            await pool.request()
                .input('PLE', 'PLC' + ob.ae)
                .input('Empresa', ob.empresa)
                .input('usuario', user)
                .query(queries.setControlUsuario2);
            res.json(result.rowsAffected);
        } catch (error) {
            return res.status(500).json({ msg: "Error", error: 'Fatal error' })
        }
    },

    async descargar(req, res) {
        let user = req.user;
        let ob = req.body;
        try {
            const pool = await cxn.getConnection();
            let result = await pool.request()
                .input('Descripcion', ob.ud)
                .query(queries.delCargadoOnUd);
            await pool.request()
                .input('PLE', 'PLC' + ob.ae)
                .input('Empresa', ob.empresa)
                .input('usuario', user)
                .query(queries.setControlUsuario2);
            res.json(result.rowsAffected);
        } catch (error) {
            return res.status(500).json({ msg: "Error", error: 'Fatal error' })
        }
    },

    async setAE(req, res) {
        let user = req.user;
        let empresa = req.empresa;
        let ae = req.query['ae'];
        let total = req.query['total'];
        if (total == 100) {
            total = 75 //estilo cargado
        } else if (total > 0) {
            total = 74 //parcialmente cargado
        } else {
            total = null
        }
        try {
            const pool = await cxn.getConnection();
            let result = await pool.request()
                .input('Estilo', total)
                .input('NumeroDePackingList', "PLC" + ae)
                .query(queries.setEstiloAE);
            //Actualizar AE
            await pool.request()
                .input('Estado', total == 75 ? "CARGADO" : null)
                .input('NumeroDeAlbaran', ae)
                .input('Empresa', empresa)
                .query(queries.setCodigoEstadoAE)
            res.json(result.rowsAffected);
        } catch (error) {
            console.log(error)
        }
    },

    async logout(req, res) {
        res.cookie('token', '');
        res.redirect('/');
    }
}