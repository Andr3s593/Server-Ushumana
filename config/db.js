module.exports = {
    db: 'mongodb+srv://Andres:1234@andresformularioscrum.l69dd.mongodb.net/Ushumana'
 };

const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const conectarDB = async () => {

    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true, 

            useUnifiedTopology: true 
        })
        console.log('Data-Base....Connect ');
        
    } catch (error) {
        console.log(error);
        process.exit(1); //Detenemos la app
    }
}

module.exports = conectarDB 