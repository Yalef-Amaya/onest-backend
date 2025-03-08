const verifyProperties = require('../helpers/verify-properties.helper');
const { dbGetVinculacion, dbInsertVinculacion, dbGetVinculacionById, dbDeleteVinculacion, dbUpdateVinculacionById, dbDeleteVinculacionById} = require('../services/vinculacion.service');

async function getVinculacion(req, res){
    try {
        const data = await dbGetVinculacion();

        res.json({
            ok: true,
            data: data
        });
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener las vinculaciones'
        });
    }
}

async function createVinculacion(req, res){
    const inputdata = req.body;
    try {
        const data = await dbInsertVinculacion(inputdata);

        res.json({
            ok: true,
            data: data
        });
    } catch (error) {
        console.error(error);

        const errors = verifyProperties(error);

        res.json({
            ok: false,
            errors
        });
    }
}

async function getVinculacionById(req, res){
    const id = req.params.id;

    try {
        const data = await dbGetVinculacionById(id);

        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener la vinculacion por id'
        });
    }
}

async function deleteVinculacionById(req, res){
    const id  = req.params.id;

    try {
        const data = await dbDeleteVinculacionById(id);

        res.json({
            ok: true,
            data: data
        });
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al eliminar la vinculacion'
        });
    }
}

async function updateVinculacionByIdPut(req, res){
    const id = req.params.id;
    const inputdata = req.body;

    try {
        const data = await dbUpdateVinculacionById(id, inputdata);

        res.json({
            ok: true,
            data: data
        });
    } catch (error) {
        console.error(error);

        const errors = verifyProperties(error);

        res.json({
            ok: false,
            errors
        });
    }
}

module.exports = {
    getVinculacion,
    createVinculacion,
    getVinculacionById,
    deleteVinculacionById,
    updateVinculacionByIdPut
};