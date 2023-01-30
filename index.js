const express = require('express');
const conectarDB = require('./config/db')
const cors = require("cors")
//creamos el servicio 
const app = express();
//Conectamos a la DB
conectarDB();
app.use(cors());
app.use(express.json());
//Usuario// 
app.use('/api/usuario-Ushumana',require('./routes/usuarioroutes'));
//Fin Usuario//
//Reserva// 
app.use('/api/reserva-Ushumana',require('./routes/reservaroutes'));
//Fin Reserva//
app.listen(4000, () => {
    console.log('Connected....Server')
})
