const Usuario = require("../models/usuariomodel");


exports.crearUsuario = async (req, res) => {
    try {
        // Verificar si el correo electrónico ya existe
        const exist = await Usuario.findOne({ email: req.body.email });
        if (exist) return res.status(400).send({error: 'El email que ingresaste ya esta registrado'});

        // Creamos el nuevo usuario
        let usuario = new Usuario(req.body);

        // Guardamos el usuario en la base de datos
        await usuario.save();

        // Enviamos la respuesta al cliente
        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al crear el registro');
    }
}


exports.obtenerUsuarios = async (req, res) => {

    try {
        
        const usuarios = await Usuario.find();
        res.json(usuarios)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al traer los registros');
        
    }
}

exports.actualizarUsuario = async (req, res) => {

    try {
        const { nombres, apellidos, email, password, fechadenacimiento} = req.body;

        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})
        }
        usuario.nombres = nombres;
        usuario.apellidos = apellidos;
        usuario.email = email;
        usuario.password = password;
        usuario.fechadenacimiento = fechadenacimiento;

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id},usuario, {new: true});
        res.json(usuario)


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar');
    }

}

exports.obtenerUsuario = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario) {
            res.status(404).json({ msg: 'No existe el registro'})

        }
        res.json(usuario)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener el registro');
    }
}

exports.eliminarUsuario = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al eliminar el producto');
    }

}