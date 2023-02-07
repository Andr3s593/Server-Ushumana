const mongoose = require('mongoose');

const TicketsSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    usuario: {
    type: String,
    required: true
    },
    servicio: {
        type: String,
        required: true
    },
    detalle: {
        type: String,
        required: true,
        unique: true
    },
    numeroadultos: {
        type: Number,
        required: true,
        select: false
    },
    numeroninos: {
        type: Number,
        required: true,
        select: false
    },    
    mascotas: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Tickets',TicketsSchema);