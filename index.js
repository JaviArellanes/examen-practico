//Importamos las dependecias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Creamos una constante para el valor del puerto
const PUERTO = process.env.PORT || 3000;

//Emplear las rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y HBS
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials/');
app.use(express.static(__dirname + '/public'));

//vamos a decirle a express la ruta a emplear
app.use('/', pintoresRouter);

/*La conexion con MongoDB*/
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://javi:1234567890@arellanesjavier-braiq.mongodb.net/curso?retryWrites=true&w=majority';
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Conexion establecida');
    })
    .catch(err=> console.log(err));

    /*Arrancar el servidor web*/
    app.listen(PUERTO, ()=>{
        console.log('Escuchando el puerto...')
    });