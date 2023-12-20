const mongoose = require('mongoose');

const alumnosSchema = new mongoose.Schema({
  idAlumno: {
    type: Number // Number es igual a int
  },
  nombre: {
    type: String
  },
  email: {
    type: String
  },
  noctrl: {
    type: String
  },
  grado: {
    type: String
  }
});

mongoose.model('Alumnos', alumnosSchema);
