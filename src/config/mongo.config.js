const mongoose = require('mongoose');

async function dbConection() {
    try {
        await mongoose.connect( 'mongodb+srv://yaam2112:Clave1234@onest.ppdonsm.mongodb.net/Onest', {} );
        console.log( 'Base de datos inicializada correctamente');
    } catch (error) {
        console.error(error);
        console.log( 'Error al inicializar la base de datos');
    }
}

module.exports = dbConection;