const express = require('express');
const router = express.Router();
const pedidocontroller = require('../controllers/pedidocontroller');
//API Usuariocontroller
router.post('/', pedidocontroller.crearPedido);
router.get('/' , pedidocontroller.obtenerPedidos);
router.put('/:id' , pedidocontroller.actualizarPedido);
router.get('/:id' ,pedidocontroller.obtenerPedido);
router.delete('/:id' ,pedidocontroller.eliminarPedido);

module.exports = router;