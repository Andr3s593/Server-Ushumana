const FormaPago = require("../models/formapagomodel");


exports.crearFormaPago = async (req, res) => {
    try {
        const exist = await FormaPago.findOne({ id: req.body.id });
        if (exist) return res.status(400).send({error: 'Ya a completado el pago.'});

        let formapago = new FormaPago(req.body);

        // Guardamos el usuario en la base de datos
        await formapago.save();

        // Enviamos la respuesta al cliente
        res.send(formapago);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al Pagar.');
    }
}


exports.obtenerFormasPago = async (req, res) => {

    try {
        
        const formaspago = await FormasPago.find();
        res.json(formaspago)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener las formas de pago.');
        
    }
}

exports.actualizarFormaPago = async (req, res) => {

    try {
        const { nombres, apellidos, email, tarjeta, numero_tarjeta, fecha_caducidad} = req.body;

        let formapago = await FormaPago.findById(req.params.id);

        if(!formapago) {
            res.status(404).json({ msg: 'No se a realizado el pago.'})

        }
        formapago.Nombres = nombres;
        formapago.Apellidos = apellidos;
        formapago.Email = email;
        formapago.Tarjeta = tarjeta;
        formapago.Numero_Tarjeta = numero_tarjeta;
        formapago.Fecha_Caducidad = fecha_caducidad;
      
       


        formapago = await FormaPago.findOneAndUpdate({ _id: req.params.id},formapago, {new: true});
        res.json(formapago)


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el pago');
    }

}

exports.obtenerFormaPago = async (req, res) => {

    try {
        let formapago = await FormaPago.findById(req.params.id);
        if(!formapago) {
            res.status(404).json({ msg: 'No existe el pago'})

        }
        res.json(formapago)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al pagar');
    }
}

exports.eliminarFormaPago = async (req, res) => {

    try {
        let formapago = await FormaPago.findById(req.params.id);

        if(!formapago) {
            res.status(404).json({ msg: 'No existe el pago.'})

        }
        await FormaPago.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Pago eliminada exitosamente.'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al eliminar la pago.');
    }

}