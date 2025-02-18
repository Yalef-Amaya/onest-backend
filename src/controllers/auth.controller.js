const { ok } = require("assert");
const {encryptPassword, verifyEncriptedPassword} = require("../helpers/bcrypt.helper");
const {generateToken} = require("../helpers/jwt.helper");
const { dbGetUserByUsername } = require("../services/user.service");

async function loginUser (req, res){
    const inputdata = req.body;

    try {
        const dataFound = await dbGetUserByUsername(inputdata.username)

        if( !dataFound){
            return res.json({
                ok: false,
                msg: 'El usuario no existe'
            });
        }

        const isValid = verifyEncriptedPassword(inputdata.password, dataFound.password);

        if( !isValid ){
        return res.json({
            ok: false,
            msg: 'Contraseña incorrecta'
        });
        }

        const payload = {
            name: dataFound.name,
            username: dataFound.username,
            role: dataFound.role,
            id: dataFound._id
        };

        const token = generateToken(payload);

        res.json({
            ok: true,
            token,
            data: dataFound
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
    const authUser = req.authUser;

    try {
        const userFound = await dbGetUserByUsername( authUser.username);

        if( !userFound ){
            return res.json({
                ok: false,
                msg: 'El usuario no existe'
            });
        }

        const token = generateToken({
            name: userFound.name,
            username: userFound.username,
            role: userFound.role,
            id: userFound._id
        });

        res.json({
            ok: true,
            token,
            data: authUser
        });
    } 
    catch (error) {
        console.error( error );  
        res.json({
            ok: false,
            msg: 'No se pudo renovar el token'
        });
    }
}

module.exports = {
    loginUser,
    reNewToken
};