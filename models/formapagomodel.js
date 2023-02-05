const mongoose = require('mongoose');

const FormaPagoSchema = mongoose.Schema({

    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,        
    },
    tarjeta: {
        type: String,
        required: true,
    },
    numerotarjeta: {
        type: Number,
        required: true,
    },
    fechacaducidad: {
        type: Date,
        required: true
    }
});
module.exports = mongoose.model('FormaPago', FormaPagoSchema);