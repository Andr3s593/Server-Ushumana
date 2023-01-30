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
    Email: {
        type: String,
        required: true,       
    },
    Telefono: {
        type: Number,
        required: true,
       
    },
    Numero_adultos: {
        type: Number,
        required: true,
       
    },
    Numero_ninos: {
        type: Number,
        required: true,
      
    },
    Fechadereserva: {
        type: Date, 
        required: true,
        unique: true
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