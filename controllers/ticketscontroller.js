const Ticket = require("../models/ticketsmodel");


exports.creartickets = async (req, res) => {
    try {
        const exist = await tickets.findOne({ id: req.body.id });
        if (exist) return res.status(400).send({error: 'La tickets ya existe.'});

        let tickets = new Ticket(req.body);

        // Guardamos el usuario en la base de datos
        await tickets.save();

        // Enviamos la respuesta al cliente
        res.send(tickets);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al crear la tickets.');
    }
}


exports.obtenertickets = async (req, res) => {

    try {
        
        const tickets = await Ticket.find();
        res.json(tickets)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener las tickets.');
        
    }
}

exports.actualizartickets = async (req, res) => {

    try {
        const { usuario, servicio, detalle, numero_adultos, numero_niños, mascotas} = req.body;

        let tickets = await tickets.findById(req.params.id);

        if(!tickets) {
            res.status(404).json({ msg: 'No existe la tickets.'})

        }
        tickets.Usuario = usuario;
        tickets.Servicio = servicio;
        tickets.Detalle = detalle;
        tickets.Numero_adultos = numero_adultos;
        tickets.Numero_niños = numero_niños;
        tickets.Mascotas = mascotas;


        tickets = await tickets.findOneAndUpdate({ _id: req.params.id},tickets, {new: true});
        res.json(tickets)


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar la tickets.');
    }

}

exports.obtenertickets = async (req, res) => {

    try {
        let tickets = await tickets.findById(req.params.id);
        if(!tickets) {
            res.status(404).json({ msg: 'No existe la tickets.'})

        }
        res.json(tickets)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener la tickets.');
    }
}

exports.eliminartickets = async (req, res) => {

    try {
        let tickets = await tickets.findById(req.params.id);

        if(!tickets) {
            res.status(404).json({ msg: 'No existe la tickets.'})

        }
        await tickets.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'tickets eliminada exitosamente.'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al eliminar la tickets.');
    }

}