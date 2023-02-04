const mongoose = require('mongoose');

const TicketsSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    Usuario: {
    type: String,
    required: true
    },
    Servicio: {
        type: String,
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
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Tickets',TicketsSchema);