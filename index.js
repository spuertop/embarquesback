const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');
const cookieParser = require('cookie-parser');

const app = express();
//const port = 3000;
const port = 4002;

//Conexion a DB

//Middlewares
app.use(morgan('tiny'))
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//Routes
app.use('/api', require('./routes/users.router'));

//Midds para Vue-history
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("C:\\Apliwin\\Archivo\\Embarques\\"));
app.use(express.static("C:\\Apliwin\\APPIA\\Imagenes\\Docs\\"))
//Server ON
app.set('port', process.env.PORT || port);
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'))
})