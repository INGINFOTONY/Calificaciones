const mongoose = require('mongoose');

const calificacionesSchema = new mongoose.Schema({
  idAlumno: {
    type: Number

  },
  materia: {
    type: String
  },
  calificacion: {
    type: Number
  }
});

mongoose.model('Calificaciones', calificacionesSchema);
