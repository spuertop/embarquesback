const cxn = require('./connection');
const queries = require('./queries');
const jwt = require('jsonwebtoken');
const fs = require('fs');

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
                return res.status(200).json({ 'token': accessToken });
            } else {
                console.log('Contraseña incorrecta')
                return res.status(403).json({ msg: "Error", error: 'Contraseña incorrecta' })
            }
        } catch (error) {
            console.log(error);
            return res.status(403).json({ msg: "Error", error: error.toString() })
        }
    },

    //Protected routes
    isAuthenticated(req, res, next) {
        const token = req.get('Authorization');
        jwt.verify(token, cxn.accessToken, function (err, decoded) {
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
            lecturas.forEach(function (item) {
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
                return res.status(404).json({ msg: "Error", error: 'Este albarán no tiene un packing de carga o es de otro cliente.' })
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
                .input('PLE', 'PLC' + ob.ae)
                .query(queries.putCargadoOnUd);
            await pool.request()
                .input('PLE', 'PLC' + ob.ae)
                .input('Empresa', ob.empresa)
                .input('usuario', user)
                .query(queries.setControlUsuario2);
            setAE(ob);
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
                .input('PLE', 'PLC' + ob.ae)
                .query(queries.delCargadoOnUd);
            await pool.request()
                .input('PLE', 'PLC' + ob.ae)
                .input('Empresa', ob.empresa)
                .input('usuario', user)
                .query(queries.setControlUsuario2);
            setAE(ob);
            res.json(result.rowsAffected);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Error", error: 'Fatal error' })
        }
    },

    async postphoto(req, res) {
        let { customer, aedocument, photo } = req.body;
        let filename = customer + "_" + aedocument + "_" + (new Date().valueOf()) + ".jpg";
        try {
            let dir = "C:\\Apliwin\\Archivo\\Embarques\\" + aedocument + "\\";
            let destiny = "Y:\\Archivo\\Embarques\\" + aedocument + "\\" + filename;
            const buffer = Buffer.from(photo, "base64");
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir)
            }
            fs.writeFileSync(dir + filename, buffer);
            const pool = await cxn.getConnection();
            let result = await pool.request()
                .input('customerbraedocument', customer + '<BR>' + aedocument)
                .input('path', destiny)
                .query(queries.postPhotoLink);
            return res.status(200).json(result.rowsAffected);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Error", error: 'Fatal error' })
        }
    },

    async getPhotos(req, res) {
        let aedocument = req.query.ae;
        let dir = "C:\\Apliwin\\Archivo\\Embarques\\" + aedocument + "\\";
        let result = [];
        try {
            if (fs.existsSync(dir)) {
                result = fs.readdirSync(dir);
            }
            return res.status(200).json(result)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Error", error: 'Fatal error' })
        }
    },
    async logout(req, res) {
        res.cookie('token', '');
        res.redirect('/');
    },

    async delPhoto(req, res) {
        let { customer, aedocument, name } = req.body;
        try {
            let file = "C:\\Apliwin\\Archivo\\Embarques\\" + aedocument + "\\" + name;
            let link = "Y:\\Archivo\\Embarques\\" + aedocument + "\\" + name;
            if (fs.existsSync(file)) {
                fs.unlinkSync(file)
            }

            const pool = await cxn.getConnection();
            let result = await pool.request()
                .input('customerbraedocument', customer + '<BR>' + aedocument)
                .input('path', link)
                .query(queries.deletePhotoLink);

            return res.status(200).json(result.rowsAffected);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Error", error: 'Fatal error' })
        }
    },

    async getAllgds(req, res) {
        try {
            const pool = await cxn.getUserConn();
            const result = await pool.request().query(queries.getAllGDS);
            let users = result.recordset;
            return res.status(200).json(users);
        } catch (error) {
            console.log(error)
            return res.status(403).json({ msg: "Error", error: error.toString() })
        }
    },
    async getItemData(req, res) {
        let user = req.user;
        //req.query = { articulo: '', empresa: '' , codigo: ''}
        let searchBy;
        switch (req.query.codigo) {
            case 'Código de artículo': searchBy = 'CodigoDeArticulo'; break;
            case 'Código de barras': searchBy = 'CodigoDeBarras'; break;
            case 'Código de barras A': searchBy = 'CodigoDeBarrasA'; break;
            default: searchBy = 'CodigoDeArticulo';
        }
        console.log(req.query.articulo, req.query.empresa, searchBy)
        console.log(queries.getItemData + ` ${searchBy} = '${req.query.articulo}'`)
        try {
            const pool = await cxn.getConnection();
            let result = await pool.request()
                .input('Empresa', req.query.empresa)
                .query(queries.getItemData + ` ${searchBy} = '${req.query.articulo}'`);
            let articulos = result.recordset;
            /* articulos.forEach(function (item) {
                item.Descripcion = item.Descripcion.trim();
                if (item.NroDS == 'Cargado') {
                    item.NroDS = true;
                }
            }); */
            /* let result2 = await pool.request()
                .input('Empresa', req.query.empresa)
                .input('AE', req.query.albaran)
                .query(queries.getAEagencia);
            let agencia = result2.recordset[0]; */

            //Sin coincidencias, devolver a /albaran
            if (articulos.length == 0) {
                return res.status(404).json({ msg: "Error", error: 'Este artículo no existe o es de otro cliente.' })
            } else {
                return res.status(200).json({
                    articulos,
                    //agencia
                })
            }
        } catch (error) {
            return res.status(403).json({ msg: "Error", error: error.toString() })
        }
    },
    async getItemExtraData(req, res) {
        try {
            const pool = await cxn.getConnection();
            let resultDept = await pool.request()
                .input('Empresa', req.query.empresa)
                .query(queries.getItemDepartment)
            let departamentos = resultDept.recordset
            departamentos.length == 0 ? departamentos = [''] : null

            let resultFamily = await pool.request()
                .input('Empresa', req.query.empresa)
                .query(queries.getItemFamily)
            let familias = resultFamily.recordset
            familias.length == 0 ? familias = [''] : null

            return res.status(200).json({ departamentos, familias })
        } catch (error) {
            console.log(error)
            return res.status(403).json({ msg: "Error", error: error.toString() })
        }
    },
    async itemPatchDepartment(req, res) {
        try {
            const pool = await cxn.getConnection()
            let result = await pool.request()
                .input('CodigoDeDepartamento', req.body.CodigoDeDepartamento)
                .input('Empresa', req.body.Empresa)
                .input('CodigoDeArticulo', req.body.CodigoDeArticulo)
                .query(queries.itemPatchDepartment)
            return res.status(200).json({ result: result.rowsAffected })
        } catch (error) {
            return res.status(403).json({ msg: "Error", error: error.toString() })
        }
    },
    async patchItemFamily(req, res) {
        try {
            const pool = await cxn.getConnection()
            let result = await pool.request()
                .input('CodigoDeFamilia', req.body.CodigoDeFamilia)
                .input('Empresa', req.body.Empresa)
                .input('CodigoDeArticulo', req.body.CodigoDeArticulo)
                .query(queries.patchItemFamily)
            return res.status(200).json({ result: result.rowsAffected })
        } catch (error) {
            return res.status(403).json({ msg: "Error", error: error.toString() })
        }
    },

    async patchItemDimension(req, res) {
        try {
            const pool = await cxn.getConnection()
            let result = await pool.request()
                .input('Empresa', req.body.Empresa)
                .input('CodigoDeArticulo', req.body.CodigoDeArticulo)
                .input('UnidadDeDimensiones', req.body.UnidadDeDimensiones)
                .input('Ancho', req.body.Ancho)
                .input('Longitud', req.body.Longitud)
                .input('Alto', req.body.Alto)
                .input('Volumen', req.body.Volumen)
                .query(queries.patchItemDimension)
            return res.status(200).json({ result: result.rowsAffected })
        } catch (error) {
            return res.status(403).json({ msg: "Error", error: error.toString() })
        }
    },

    async patchItemPeso(req, res) {
        try {
            const pool = await cxn.getConnection()
            let result = await pool.request()
                .input('PesoNeto', req.body.PesoNeto)
                .input('PesoDeEmbalaje', req.body.PesoDeEmbalaje)
                .input('PesoBruto', req.body.PesoBruto)
                .input('UnidadDePeso', req.body.UnidadDePeso)
                .input('Empresa', req.body.Empresa)
                .input('CodigoDeArticulo', req.body.CodigoDeArticulo)
                .query(queries.patchItemPeso)
            return res.status(200).json({ result: result.rowsAffected })
        } catch (error) {
            return res.status(403).json({ msg: "Error", error: error.toString() })
        }
    },

    async getItemPhotos(req, res) {
        let codigoarticulo = req.query.articulo;
        let empresa = req.query.empresa;
        let dir = "C:\\Apliwin\\APPIA\\Imagenes\\Docs\\Articulos\\" + empresa + "\\" + codigoarticulo + "\\";
        let result = [];
        try {
            const pool = await cxn.getConnection();
            let resultquery = await pool.request()
                .input('DOCID', empresa + '<BR>' + codigoarticulo)
                .query(queries.getItemPhotos);
            let archivosUV = resultquery.recordset; //NOMBRES QUE SON UV
            let UV = archivosUV.map(item => item.FOTORuta.split('\\')[item.FOTORuta.split('\\').length - 1])

            if (fs.existsSync(dir)) {
                result = fs.readdirSync(dir);
            }
            //Y de todos los archivos encontrados filtrar aquellos que si son UV segun BD
            let resultUV = result.filter(item => UV.includes(item))
            return res.status(200).json(resultUV)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Error", error: 'Fatal error' })
        }
    },
    async getItemPhotosua(req, res) {
        let codigoarticulo = req.query.articulo;
        let empresa = req.query.empresa;
        let dir = "C:\\Apliwin\\APPIA\\Imagenes\\Docs\\Articulos\\" + empresa + "\\" + codigoarticulo + "\\";
        let result = [];
        try {
            const pool = await cxn.getConnection();
            let resultquery = await pool.request()
                .input('DOCID', empresa + '<BR>' + codigoarticulo)
                .query(queries.getItemPhotosua);
            let archivosUV = resultquery.recordset; //NOMBRES QUE SON UV
            let UV = archivosUV.map(item => item.FOTORuta.split('\\')[item.FOTORuta.split('\\').length - 1])

            if (fs.existsSync(dir)) {
                result = fs.readdirSync(dir);
            }
            //Y de todos los archivos encontrados filtrar aquellos que si son UV segun BD
            let resultUV = result.filter(item => UV.includes(item))
            return res.status(200).json(resultUV)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Error", error: 'Fatal error' })
        }
    },
    async Itempostphoto(req, res) {
        let { customer, item, photo } = req.body;
        let filename = customer + "_" + item + "_" + (new Date().valueOf()) + ".jpg";
        try {
            let dir0 = "C:\\Apliwin\\APPIA\\Imagenes\\Docs\\Articulos\\" + customer + "\\"
            !fs.existsSync(dir0) ? fs.mkdirSync(dir0) : null
            let dir = "C:\\Apliwin\\APPIA\\Imagenes\\Docs\\Articulos\\" + customer + "\\" + item + "\\";
            !fs.existsSync(dir) ? fs.mkdirSync(dir) : null

            let destiny = "Y:\\APPIA\\Imagenes\\Docs\\Articulos\\" + customer + "\\" + item + "\\" + filename;
            const buffer = Buffer.from(photo, "base64");
            fs.writeFileSync(dir + filename, buffer);
            const pool = await cxn.getConnection();
            let result = await pool.request()
                .input('customerbraedocument', customer + '<BR>' + item)
                .input('path', destiny)
                .query(queries.postItemPhotoLink);
            return res.status(200).json(result.rowsAffected);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Error", error: 'Fatal error' })
        }
    },
    async Itempostphotoua(req, res) {
        let { customer, item, photo } = req.body;
        let filename = customer + "_" + item + "_" + (new Date().valueOf()) + ".jpg";
        try {
            let dir0 = "C:\\Apliwin\\APPIA\\Imagenes\\Docs\\Articulos\\" + customer + "\\"
            !fs.existsSync(dir0) ? fs.mkdirSync(dir0) : null
            let dir = "C:\\Apliwin\\APPIA\\Imagenes\\Docs\\Articulos\\" + customer + "\\" + item + "\\";
            !fs.existsSync(dir) ? fs.mkdirSync(dir) : null

            let destiny = "Y:\\APPIA\\Imagenes\\Docs\\Articulos\\" + customer + "\\" + item + "\\" + filename;
            const buffer = Buffer.from(photo, "base64");
            fs.writeFileSync(dir + filename, buffer);
            const pool = await cxn.getConnection();
            let result = await pool.request()
                .input('customerbraedocument', customer + '<BR>' + item)
                .input('path', destiny)
                .query(queries.postItemPhotoLinkua);
            return res.status(200).json(result.rowsAffected);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Error", error: 'Fatal error' })
        }
    },
    async ItemdelPhoto(req, res) {
        let { customer, item, name } = req.body;
        try {
            let file = "C:\\Apliwin\\APPIA\\Imagenes\\Docs\\Articulos\\" + customer + "\\" + item + "\\" + name;
            let link = "Y:\\APPIA\\Imagenes\\Docs\\Articulos\\" + customer + "\\" + item + "\\" + name;
            if (fs.existsSync(file)) {
                fs.unlinkSync(file)
            }

            const pool = await cxn.getConnection();
            let result = await pool.request()
                .input('customerbraedocument', customer + '<BR>' + item)
                .input('path', link)
                .query(queries.deleteItemPhotoLink);

            return res.status(200).json(result.rowsAffected);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Error", error: 'Fatal error' })
        }
    },
    async ItemdelPhotoua(req, res) {
        let { customer, item, name } = req.body;
        try {
            let file = "C:\\Apliwin\\APPIA\\Imagenes\\Docs\\Articulos\\" + customer + "\\" + item + "\\" + name;
            let link = "Y:\\APPIA\\Imagenes\\Docs\\Articulos\\" + customer + "\\" + item + "\\" + name;
            if (fs.existsSync(file)) {
                fs.unlinkSync(file)
            }

            const pool = await cxn.getConnection();
            let result = await pool.request()
                .input('customerbraedocument', customer + '<BR>' + item)
                .input('path', link)
                .query(queries.deleteItemPhotoLinkua);

            return res.status(200).json(result.rowsAffected);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Error", error: 'Fatal error' })
        }
    },

}


async function setAE(ob) {
    try {
        const pool = await cxn.getConnection();
        //GET como cuantos NRODS hay y cómo están.
        let estadoActual = await pool.request()
            .input('PLE', "PLC" + ob.ae)
            .input('Empresa', ob.empresa)
            .query(queries.getNroDS);
        let total = 0, cargado = 0, nulos = 0;
        estadoActual.recordset.forEach(item => {
            item.NroDS === 'Cargado' ? cargado++ : nulos++;
            total++;
        })
        if (total === cargado) {
            total = 75 //estilo cargado
        } else if (total === nulos) {
            total = null;
        } else {
            total = 74 //parcialmente cargado
        }
        await pool.request()
            .input('Estilo', total)
            .input('NumeroDePackingList', "PLC" + ob.ae)
            .query(queries.setEstiloAE);
        //Actualizar AE
        await pool.request()
            .input('Estado', total === 75 ? "CARGADO" : null)
            .input('NumeroDeAlbaran', ob.ae)
            .input('Empresa', ob.empresa)
            .query(queries.setCodigoEstadoAE)
    } catch (error) {
        console.log(error)
    }
}
