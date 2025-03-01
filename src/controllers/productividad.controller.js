const verifyProperties = require('../helpers/verify-properties.helper');
const { dbGetProductividad, dbInsertProductividad, dbGetProductividadById, dbDeleteProductividad, dbUpdateProductividadById, dbDeleteProductividadById} = require('../services/productividad.service');

async function getProductividad(res, res){
    try {
        const data = await dbGetProductividad();

        res.json({
            ok: true,
            data: data
        });
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener las PodbGetProductividads'
         });
    }
}

async function createProductividad(req, res){
    const inputdata = req.body;
    try {
        const data = await dbInsertProductividad(inputdata);

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

async function getProductividadById(req, res){
    const id = req.params.id;

    try {
        const data = await dbGetProductividadById(id);

        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener las Productividad por id'
        });
    }
}

async function deleteProductividadById(req, res){
   const id  = req.params.id;

   try {
       const data = await dbDeleteProductividadById(id);

       res.json({
           ok: true,
           data: data
       });
   } catch (error) {
       console.error(error);
       res.json({
           ok: false,
           msg: 'Ha ocurrido un error al eliminar las Productividad'
       });
   }
}

async function updateProductividadByIdPut(req, res){
   const id = req.params.id;
   const inputdata = req.body;

   try {
       const data = await dbUpdateProductividadById(id, inputdata);

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
   getProductividad,
   createProductividad,
   getProductividadById,
   deleteProductividadById,
   updateProductividadByIdPut
};