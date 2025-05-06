const verifyProperties = require('../helpers/verify-properties.helper');
const { dbGetUser, dbInsertUser, dbGetUserById, dbDeleteUserById} = require('../services/user.service');

async function getUser(req, res) {
    try {
        const data = await dbGetUser();

        res.json({
            ok: true,
            data: data
        });
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener los usuarios'
        });
    }
}

const createUser = async (req, res) => {
    const { name, username, password } = req.body;
    try {
        const data = await dbInsertUser(inputdata);

        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error.errors);

        if( error?.name === 'ValidatorError' ){
            const errors = verifyProperties(error);

            console.error( errors );

            return res.json({
                ok: false,
                errors
            })
        } 
    }
}

async function getUserById(req, res){
    const id = req.params.id;

    try {
        const data = await dbGetUserById(id);

        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener el usuario por id'
        });
    }
}

async function deleteUserById(req, res){
    const id = req.params.id;
    try {
        const data = await dbDeleteUserById(id);
        
        res.json({
            ok: true,
            data: data
        })
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al eliminar el usuario por id'
        });
    }
}

async function updateUserByIdPut(req, res){
    const id = req.params.id;
    const inputdata = req.body;

    try {
        const data = await dbUpdateUserByIdPut(id, inputdata);

        res.json({
            ok: true,
            data: data
        });
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al actualizar el usuario por id'
        });
    }
}

async function updateUserByIdPatch(req, res){
    const id = req.params.id;
    const inputdata = req.body;

    try {
        const data = await dbUpdateUserByIdPatch(id, inputdata);

        res.json({
            ok: true,
            data: data,
        });
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al actualizar el usuario por id'
        });
    }
}

module.exports = {
    getUser,
    createUser,
    getUserById,
    deleteUserById,
    updateUserByIdPut,
    updateUserByIdPatch
};