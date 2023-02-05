const FormaPago = require("../models/formapagomodel");


exports.crearFormaPago = async (req, res) => {
    try {
        let formaPago;
        //Creamos el formaPago
        formaPago = new FormaPago(req.body);

        await formaPago.save();
        res.send(formaPago);

    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error al crear el registro');

    }
}



exports.obtenerFormaPagos = async (req, res) => {

    try {

        const formaPagos = await FormaPago.find();
        res.json(formaPagos)

    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error al obtener los formaPagos.');

    }
}

exports.actualizarFormaPago = async (req, res) => {
    try {
        const { nombres, apellidos, email, tarjeta, numero_Tarjeta, fecha_Caducidad } = req.body;
        let formaPago = await FormaPago.findById(req.params.id);

        if (!formaPago) {
            return res.status(404).json({ msg: 'No se encontró el formaPago.' });
        }

        formaPago.nombres = nombres;
        formaPago.apellidos = apellidos;
        formaPago.email = email;
        formaPago.tarjeta = tarjeta;
        formaPago.numerotarjeta = numero_Tarjeta;
        formaPago.fechacaducidad = fecha_Caducidad;

        formaPago = await FormaPago.findByIdAndUpdate(req.params.id, formaPago, { new: true });
        return res.status(200).json(formaPago);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Hubo un error al actualizar el formaPago.');
    }
};

exports.obtenerFormaPago = async (req, res) => {

    try {
        let formaPago = await FormaPago.findById(req.params.id);
        if (!formaPago) {
            res.status(404).json({ msg: 'No existe el formaPago.' })

        }
        res.json(formaPago)

    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error al obtener el formaPago.');
    }
}

exports.eliminarFormaPago = async (req, res) => {

    try {
        let formaPago = await FormaPago.findById(req.params.id);

        if (!formaPago) {
            res.status(404).json({ msg: 'No existe el formaPago.' })

        }
        await FormaPago.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'FormaPago eliminado exitosamente.' })


    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error al eliminar el formaPago.');
    }

}