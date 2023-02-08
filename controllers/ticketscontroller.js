const Ticket = require("../models/ticketsmodel");

exports.crearTicket = async (req, res) => {
    try {
        let ticket;
        //Creamos el ticket
        ticket = new Ticket(req.body);
        await ticket.save();
        res.send(ticket);
    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al crear el registro');        
    }
}

exports.obtenerTickets = async (req, res) => {

    try {
        
        const tickets = await Ticket.find();
        res.json(tickets)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener los tickets.');
        
    }
}
exports.actualizarTicket = async (req, res) => {
    try {
        const {imagen, numeroadultos, numeroninos,numeroterceraedad,numerdiscapacitados, precio} = req.body;

        let ticket = await Ticket.findById(req.params.id);

        if (!ticket) {
            return res.status(404).json({ msg: 'No se encontró el ticket.' });
        }
        ticket.imagen = imagen;
        ticket.numeroadultos = numeroadultos;
        ticket.numeroninos = numeroninos;
        ticket.numeroterceraedad = numeroterceraedad;
        ticket.numerdiscapacitados = numerdiscapacitados;
        ticket.precio = precio;        

        ticket = await Ticket.findOneAndUpdate({ _id: req.params.id }, ticket, { new: true });
        return res.status(200).json(ticket);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Hubo un error al actualizar el ticket.');
    }
};


exports.obtenerTicket = async (req, res) => {

    try {
        let ticket = await Ticket.findById(req.params.id);
        if(!ticket) {
            res.status(404).json({ msg: 'No existe el ticket.'})
        }
        res.json(ticket)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener el ticket.');
    }
}

exports.eliminarTicket = async (req, res) => {

    try {
        let ticket = await Ticket.findById(req.params.id);

        if(!ticket) {
            res.status(404).json({ msg: 'No existe el ticket.'})

        }
        await Ticket.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Ticket eliminado exitosamente.'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al eliminar el ticket.');
    }

}