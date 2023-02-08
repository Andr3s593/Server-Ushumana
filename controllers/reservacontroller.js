const Reserva = require("../models/reservamodel");

exports.crearReserva = async (req, res) => {
    try {
        let reserva;
        //Creamos el reserva
        reserva = new Reserva(req.body);
        await reserva.save();
        res.send(reserva);
    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al crear el registro');        
    }
}

exports.obtenerReservas = async (req, res) => {

    try {
        
        const reservas = await Reserva.find();
        res.json(reservas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener los reservas.');
        
    }
}
exports.actualizarReserva = async (req, res) => {
    try {
        const { imagen, nombres, apellidos,numeroadultos,numeroninos, fechadereserva, mascotas, descripcion } = req.body;

        let reserva = await Reserva.findById(req.params.id);

        if (!reserva) {
            return res.status(404).json({ msg: 'No se encontró el reserva.' });
        }
        reserva.imagen = imagen;
        reserva.nombres = nombres;
        reserva.apellidos = apellidos;
        reserva.numeroadultos = numeroadultos;
        reserva.numeroninos = numeroninos;
        reserva.fechadereserva = fechadereserva;
        reserva.mascotas = mascotas;
        reserva.descripcion = descripcion;        

        reserva = await Reserva.findOneAndUpdate({ _id: req.params.id }, reserva, { new: true });
        return res.status(200).json(reserva);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Hubo un error al actualizar el reserva.');
    }
};


exports.obtenerReserva = async (req, res) => {

    try {
        let reserva = await Reserva.findById(req.params.id);
        if(!reserva) {
            res.status(404).json({ msg: 'No existe el reserva.'})
        }
        res.json(reserva)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener el reserva.');
    }
}

exports.eliminarReserva = async (req, res) => {

    try {
        let reserva = await Reserva.findById(req.params.id);

        if(!reserva) {
            res.status(404).json({ msg: 'No existe el reserva.'})

        }
        await Reserva.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Reserva eliminado exitosamente.'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al eliminar el reserva.');
    }

}