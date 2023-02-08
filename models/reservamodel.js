const mongoose = require('mongoose');

const ReservaSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
   imagen: {
    type: String,
    required: true
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
        type: String, 
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