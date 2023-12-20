const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Calificaciones = mongoose.model('Calificaciones');

router.get('/', (req, res) => {
    res.render("calificaciones/agg-eddit", {
        viewTitle: "Insertar calificaciones"
    });
});

router.post('/', async (req, res) => {
    try {
        await insertarCal(req.body);
        res.redirect('calificaciones/list');
    } catch (err) {
        console.log('No se insertó en la base de datos:', err);
        res.status(500).send('Error al insertar en la base de datos');
    }
});

async function insertarCal(data) {
    const cal = new Calificaciones(data);
    return cal.save();
}

router.get('/list', async (req, res) => {
    try {
        const docs = await Calificaciones.find().exec();
        console.log(docs); // Agrega esto para verificar si hay datos en la consola
        res.render("calificaciones/list", {
            list: docs
        });
    } catch (err) {
        console.error('Error al recuperar datos:', err);
        res.status(500).send('Error al recuperar datos');
    }
});




module.exports = router;
