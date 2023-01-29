//Rutas para producto
const express = require('express');
const router = express.Router();
const reservacontroller = require('../controllers/reservacontroller');

//API Usuariocontroller

router.post('/', reservaontroller.crearReserva);
router.get('/' , reservacontroller.obtenerReservas);
router.put('/:id' , reservacontroller.actualizarReserva);
router.get('/:id' ,reservacontroller.obtenerReserva);
router.delete('/:id' ,reservacontroller.eliminarReserva);

module.exports = router;