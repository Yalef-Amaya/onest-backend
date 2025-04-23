const mongoose = require('mongoose');

async function dbConection() {
    try {
        await mongoose.connect( 'mongodb+srv://yaam2112:<db_password>@onest.ppdonsm.mongodb.net/?retryWrites=true&w=majority&appName=Onest', {} );
        console.log( 'Base de datos inicializada correctamente');
    } catch (error) {
        console.error(error);
        console.log( 'Error al inicializar la base de datos');
    }
}

module.exports = dbConection;