const mongoose = require('mongoose');
const pedidomodel = require('./pedidomodel');

const PedidoSchema = mongoose.Schema({

    Fechadecreacion: {
        type: Date,
        default: Date.now()
    },

    NombrePlatillo: {
        type: String,
        required: true
    },

    Cantidad: {
        type: Number,
        required: true
    },

    PrecioPlatillo: {
        type: Number,
        required: true
    },

});
module.exports = mongoose.model('Pedido', PedidoSchema);