const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    nombres: {
    type: String,
    required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    fecha_de_nacimiento: {
        type: Date,
        required: true
    }
});
module.exports = mongoose.model('Usuario', UsuarioSchema);