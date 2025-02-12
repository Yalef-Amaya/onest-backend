const { dbGetUserByUsername, dbInsertUser } = require("../services/user.service");

async function validateUserExists  (req, res, next) {
    console.log ('Hola, soy wl ');

    const inputdata = req.body;

    try {
        const dataFound = await dbGetUserByUsername( inputdata.username);
        if ( dataFound){
            return res.json({
                ok: false,
                msg: 'El usuario ya existe'
            });
    }
    next();
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al validar el usuario'
        });
    }
    
}


module.exports = validateUserExists;