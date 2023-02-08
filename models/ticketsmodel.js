const mongoose = require('mongoose');

const TicketsSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date,
        default: Date.now()
    },
    imagen: {
        type: String,
        required: true,
    },
    numeroadultos: {
        type: Number,
        required: true,
    },
    numeroninos: {
        type: Number,
        required: true,
    },
    numeroterceraedad: {
        type: Number,
        required: true,
    },
    numerdiscapacitados: {
        type: Number,
        required: true,
    },
    precio: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Tickets', TicketsSchema);