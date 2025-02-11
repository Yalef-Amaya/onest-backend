const mongoose = require('mongoose');

async function dbConection() {
    try {
        await mongoose.connect( 'mongodb://localhost:27017/db-onest', {} );
        console.log( 'Base de datos inicializada correctamente');
    } catch (error) {
        console.error(error);
        console.log( 'Error al inicializar la base de datos');
    }
}

module.exports = dbConection;