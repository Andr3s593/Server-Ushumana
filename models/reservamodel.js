const mongoose = require('mongoose');
const usuariomodel = require('./usuariomodel');

const ReservaSchema = mongoose.Schema({
    id: {
        type: Number, 
        default: Date.now()
   },
    Usuario: {
    usuario: usuariomodel,
    required: true
    },
    Servicio: {
        servicio: ServicioModel,
        required: true
    },
    Detalle: {
        type: String,
        required: true,
        unique: true
    },
    Numero_adultos: {
        type: Number,
        required: true,
        select: false
    },
    Numero_niños: {
        type: Number,
        required: true,
        select: false
    },
    
    Mascotas: {
        type: Boolean,
        required: true
    }
});
module.exports = mongoose.model('Reserva', ReservaSchema);