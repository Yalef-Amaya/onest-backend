const { dbGetUser, dbInsertUser, dbGetUserById, dbDeleteUserById, dbUpdateUserByIdPut, dbUpdateUserByIdPatch} = require('../services/user.service');

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

async function createUser(req, res){
    const inputdata = req.body;
    try {
        const data = await dbInsertUser(inputdata);

        res.json({
            ok: true,
            data: data
        });
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al crear el usuario'
        });
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