//Rutas para Forma_de_Pago
const express = require('express');
const router = express.Router();
const formapagocontroller = require('../controllers/formapagocontroller');

//API Usuariocontroller

router.post('/', formapagocontroller.crearFormaPago);
router.get('/' , formapagocontroller.obtenerFormaPagos);
router.put('/:id' , formapagocontroller.actualizarFormaPago);
router.get('/:id' ,formapagocontroller.obtenerFormaPago);
router.delete('/:id' ,formapagocontroller.eliminarFormaPago);

module.exports = router;