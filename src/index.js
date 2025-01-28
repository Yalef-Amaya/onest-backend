const express = require( "express" );
const app = express ();


/** Lanzar servidor */
app.listen( 3000, function() {
    console.log( "Servidor escuchando en el puerto 3000");
});