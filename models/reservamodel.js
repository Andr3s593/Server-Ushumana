const mongoose = require('mongoose');

const ReservaSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    nombres: {
    type: String,
    required: true
    },   
    apellidos: {
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
    fechadereserva: {
        type: Date, 
        required: true,
   },    
    mascotas: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true,       
    }
});
module.exports = mongoose.model('Reserva', ReservaSchema);