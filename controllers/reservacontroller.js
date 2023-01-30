const Reserva = require("../models/reservamodel");


exports.crearReserva = async (req, res) => {
    try {
        const exist = await Reserva.findOne({ id: req.body.id });
        if (exist) return res.status(400).send({error: 'La reserva ya existe.'});

        let reserva = new Reserva(req.body);

        // Guardamos el usuario en la base de datos
        await reserva.save();

        // Enviamos la respuesta al cliente
        res.send(reserva);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al crear la reserva.');
    }
}


exports.obtenerReservas = async (req, res) => {

    try {
        
        const reservas = await Reserva.find();
        res.json(reservas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener las reservas.');
        
    }
}

exports.actualizarReserva = async (req, res) => {

    try {
        const { nombres, apellidos, numero_adultos, numero_niños,fechadereserva, mascotas, descripcion} = req.body;

        let reserva = await Reserva.findById(req.params.id);

        if(!reserva) {
            res.status(404).json({ msg: 'No existe la reserva.'})

        }
        reserva.Nombres = nombres;
        reserva.Apellidos = apellidos;
        reserva.Numero_adultos = numero_adultos;
        reserva.Numero_niños = numero_niños;
        reserva.Fechadereserva = fechadereserva;
        reserva.Mascota = mascotas;
        reserva.Descripcion = descripcion;
       


        reserva = await Reserva.findOneAndUpdate({ _id: req.params.id},reserva, {new: true});
        res.json(reserva)


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar la reserva.');
    }

}

exports.obtenerReserva = async (req, res) => {

    try {
        let reserva = await Reserva.findById(req.params.id);
        if(!reserva) {
            res.status(404).json({ msg: 'No existe la reserva.'})

        }
        res.json(reserva)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener la reserva.');
    }
}

exports.eliminarReserva = async (req, res) => {

    try {
        let reserva = await Reserva.findById(req.params.id);

        if(!reserva) {
            res.status(404).json({ msg: 'No existe la reserva.'})

        }
        await Reserva.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Reserva eliminada exitosamente.'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al eliminar la reserva.');
    }

}