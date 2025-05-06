const express = require("express");
const dbConection = require('./config/mongo.config.js');
const app = express ();
const cors = require( "cors" );

const PORT = process.env.PORT ?? 3001;

dbConection();      

app.use( express.json() );
app.use( cors ());

app.use( '/api/usuario', require( './routes/user.routes.js' ) );
app.use( '/api/cargo', require( './routes/cargo.routes.js'));
app.use( '/api/vinculacion', require( './routes/vinculacion.routes.js'));
app.use( '/api/auth', require( './routes/auth.routes.js'));

app.listen( PORT, () => {
    console.log( `Servidor lanzado en http://localhost:${ PORT }`);
});