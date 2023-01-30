const mongoose = require('mongoose');

const ReservaSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    Nombres: {
    type: String,
    required: true
    },   
    Apellidos: {
        type: String,
        required: true,
       
    },
    Numero_adultos: {
        type: Number,
        required: true,
       
    },
    Numero_niños: {
        type: Number,
        required: true,
      
    },
    Fechadereserva: {
        type: Date, 
        required: true,
   },
    
    Mascotas: {
        type: Number,
        required: true
    },
    Descripcion: {
        type: String,
        required: true,
       
    }
});
module.exports = mongoose.model('Reserva', ReservaSchema);