const Pedido = require("../models/pedidomodel");


exports.crearPedido = async (req, res) => {
    try {
        let pedido;
        //Creamos el pedido
        pedido = new Pedido(req.body);

        await pedido.save();
        res.send(pedido);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al crear el registro');
        
    }
}



exports.obtenerPedidos = async (req, res) => {

    try {
        
        const pedidos = await Pedido.find();
        res.json(pedidos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener los pedidos.');
        
    }
}

exports.actualizarPedido = async (req, res) => {

    try {
        const { nombreplatillo, cantidad, precioplatillo} = req.body;

        let pedido = await Pedido.findById(req.params.id);

        if(!pedido) {
            res.status(404).json({ msg: 'No existe el pedido.'})

        }
        pedido.nombreplatillo = nombreplatillo;
        pedido.cantidad = cantidad;
        pedido.precioplatillo = precioplatillo;

        pedido = await Pedido.findOneAndUpdate({ _id: req.params.id},pedido, {new: true});
        res.json(pedido)


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el pedido.');
    }

}

exports.obtenerPedido = async (req, res) => {

    try {
        let pedido = await Pedido.findById(req.params.id);
        if(!pedido) {
            res.status(404).json({ msg: 'No existe el pedido.'})

        }
        res.json(pedido)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener el pedido.');
    }
}

exports.eliminarPedido = async (req, res) => {

    try {
        let pedido = await Pedido.findById(req.params.id);

        if(!pedido) {
            res.status(404).json({ msg: 'No existe el pedido.'})

        }
        await Pedido.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Pedido eliminado exitosamente.'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al eliminar el pedido.');
    }

}