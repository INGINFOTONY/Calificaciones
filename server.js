require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const calificacionesController = require('./controllers/calificacionesController');
const usuariosController = require('./controllers/usuariosController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));

const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Servicio iniciado en el puerto 3000');
});

app.use('/calificaciones', calificacionesController);
app.use('/usuarios', usuariosController);
