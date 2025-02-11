const mongoose = require( 'mongoose' );

function validateId ( req, res, next ){
    const id = req.params.id;

    console.log( 'Hola soy un middleware validateId' );
    if ( ! mongoose.Types.ObjectId.isValid( id ) )
        return res.json({
            ok: false,
            msg: 'El id proporcionado no es válido'
        });
    next();
}

module.exports = validateId;