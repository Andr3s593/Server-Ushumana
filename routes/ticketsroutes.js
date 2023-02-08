//Rutas para producto
const express = require('express');
const router = express.Router();
const ticketcontroller = require('../controllers/ticketscontroller');

//API Usuariocontroller

router.post('/', ticketcontroller.crearTicket);
router.get('/' , ticketcontroller.obtenerTickets);
router.put('/:id' , ticketcontroller.actualizarTicket);
router.get('/:id' ,ticketcontroller.obtenerTicket);
router.delete('/:id' ,ticketcontroller.eliminarTicket);

module.exports = router;