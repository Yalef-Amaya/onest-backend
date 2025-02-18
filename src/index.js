const express = require( "express" );
const dbConection = require('./config/mongo.config.js');
const app = express ();

dbConection();      

app.use( express.json() );

app.use( '/api/usuario', require( './routes/user.routes.js' ) );
// app.use( '/api/cargo', require( './routes/cargo.routes.js'));
// app.use( '/api/vinculacion', require( './routes/vinculacion.routes.js'));
app.use( '/api/auth', require( './routes/auth.routes.js'));

app.listen( 3000, function() {
    console.log( 'Servidor escuchando en el puerto 3000' );
});
