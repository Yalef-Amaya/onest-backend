const verifyProperties = require('../helpers/verify-properties.helper');
const { dbGetComisiones, dbInsertComisiones, dbGetComisionesById, dbUpdateComisionesById, dbDeleteComisionesById} = require('../services/comisiones.service');

async function getComisiones(res, res){
    try {
        const data = await dbGetComisiones();

        res.json({
            ok: true,
            data: data
        });
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener las Comisioness'
         });
    }
}

async function createComisiones(req, res){
    const inputdata = req.body;
    try {
        const data = await dbInsertComisiones(inputdata);

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

async function getComisionesById(req, res){
    const id = req.params.id;

    try {
        const data = await dbGetComisionesById(id);

        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener las Comisiones por id'
        });
    }
}

async function deleteComisionesById(req, res){
   const id  = req.params.id;

   try {
       const data = await dbDeleteComisionesById(id);

       res.json({
           ok: true,
           data: data
       });
   } catch (error) {
       console.error(error);
       res.json({
           ok: false,
           msg: 'Ha ocurrido un error al eliminar las Comisiones'
       });
   }
}

async function updateComisionesByIdPut(req, res){
   const id = req.params.id;
   const inputdata = req.body;

   try {
       const data = await dbUpdateComisionesById(id, inputdata);

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
   getComisiones,
   createComisiones,
   getComisionesById,
   deleteComisionesById,
   updateComisionesByIdPut
};