//Rutas para producto
const express = require('express');
const router = express.Router();
const ticketscontroller = require('../controllers/ticketscontroller');

//API Usuariocontroller

router.post('/', ticketsontroller.creartickets);
router.get('/' , ticketscontroller.obtenerticketss);
router.put('/:id' , ticketscontroller.actualizartickets);
router.get('/:id' ,ticketscontroller.obtenertickets);
router.delete('/:id' ,ticketscontroller.eliminartickets);

module.exports = router;