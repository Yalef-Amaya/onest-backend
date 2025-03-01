 const verifyProperties = require('../helpers/verify-properties.helper');
 const { dbGetCargo, dbInsertCargo, dbGetCargoById, dbDeleteCargo, dbUpdateCargoById, dbDeleteCargoById} = require('../services/cargo.service');

 async function getCargo(res, res){
     try {
         const data = await dbGetCargo();

         res.json({
             ok: true,
             data: data
         });
     } catch (error) {
         console.error(error);
         res.json({
             ok: false,
             msg: 'Ha ocurrido un error al obtener los cargos'
          });
     }
 }

 async function createCargo(req, res){
     const inputdata = req.body;
     try {
         const data = await dbInsertCargo(inputdata);

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

 async function getCargoById(req, res){
     const id = req.params.id;

     try {
         const data = await dbGetCargoById(id);

         res.json({
             ok: true,
             data: data
         });
     } 
     catch (error) {
         console.error(error);
         res.json({
             ok: false,
             msg: 'Ha ocurrido un error al obtener el cargo por id'
         });
     }
 }

async function deleteCargoById(req, res){
    const id  = req.params.id;

    try {
        const data = await dbDeleteCargoById(id);

        res.json({
            ok: true,
            data: data
        });
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al eliminar el cargo'
        });
    }
}

async function updateCargoByIdPut(req, res){
    const id = req.params.id;
    const inputdata = req.body;

    try {
        const data = await dbUpdateCargoById(id, inputdata);

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
    getCargo,
    createCargo,
    getCargoById,
    deleteCargoById,
    updateCargoByIdPut
};