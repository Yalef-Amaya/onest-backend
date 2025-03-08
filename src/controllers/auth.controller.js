const { verifyEncriptedPassword} = require("../helpers/bcrypt.helper");
const removePropertiesToObject = require("../helpers/delete-document-properties.helper");
const {generateToken} = require("../helpers/jwt.helper");
const { dbGetUserByUsername } = require("../services/user.service");

async function loginUser (req, res){
    const inputdata = req.body;

    try {
        const userFound = await dbGetUserByUsername(inputdata.username)

        if( !userFound){
            return res.json({
                ok: false,
                msg: 'El usuario no existe'
            });
        }

        const isValidPassword = verifyEncriptedPassword(inputdata.password, userFound.password);

        if( !isValidPassword ){
        return res.json({
            ok: false,
            msg: 'Contraseña incorrecta'
        });
        }

        const payload = {
            name: userFound.name,
            username: userFound.username,
            role: userFound.role,
            id: userFound._id
        };

        const token = generateToken(payload);

        const objUserFound = removePropertiesToObject({
            obj: userFound, properties: [
                'password'
            ]
        });

        res.json({
            ok: true,
            token,
            data: objUserFound
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al iniciar sesión'
        });
    
    }
}

async function reNewToken (req, res){
    const payload = req.authUser;

    try {
        const userFound = await dbGetUserByUsername( payload.username);

        if( !userFound ){
            return res.status( 404 ).json({
                ok: false,
                msg: "El usuario no esta registrado"
            })
        }

        const token = generateToken({
            id: userFound._id,
            username: userFound.username,
            name: userFound.name,
            role: userFound.role
        });

        const objUserFound = removePropertiesToObject({
            obj: userFound, properties: [
                'password'
            ]
        });

        res.json({
            ok: true,
            token,
            data: userFound
        });
    } 
    catch (error) {
        res.status( 500 ).json({
            ok: false,
            msg: "Token invalido",
            error: error
        })
    }
}

module.exports = {
    loginUser,
    reNewToken
};