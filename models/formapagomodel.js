const mongoose = require('mongoose');

const FormaPagoSchema = mongoose.Schema({ 

Nombres: {
    type: String,
    required: true
    },   


Apellidos: {
    type: String,
    required: true,
   
},


Email: {
    type: String,
    required: true,
    unique: true
},


Tarjeta: {
    type: String,
    required: true,
},

Numero_Tarjeta:{
type: Number,
required: true,
},




Fecha_Caducidad: {
    type: Date,
    required: true
}
});

module.exports = mongoose.model('FormaPago', FormaPagoSchema);