const mongoose = require('mongoose');

const PedidoSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date,
        default: Date.now()
    },
    nombreplatillo: {
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    precioplatillo: {
        type: Number,
        required: true
    },
});
module.exports = mongoose.model('Pedido', PedidoSchema);