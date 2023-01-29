//Rutas para producto
const express = require('express');
const router = express.Router();
const usuariocontroller = require('../controllers/usuariocontroller');

//API Usuariocontroller

router.post('/', usuariocontroller.crearUsuario);
router.get('/' , usuariocontroller.obtenerUsuarios);
router.put('/:id' , usuariocontroller.actualizarUsuario);
router.get('/:id' , usuariocontroller.obtenerUsuario);
router.delete('/:id' , usuariocontroller.eliminarUsuario);

module.exports = router;