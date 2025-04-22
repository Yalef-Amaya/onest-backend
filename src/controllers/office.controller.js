const verifyProperties = require('../helpers/verify-properties.helper');

async function getOffice(req, res){
    try {
        const data = await dbGetOffice();

        res.json({
            ok: true,
            data: data
        });
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener las oficinas'
         });
    }
}

async function createOffice(req, res){
    const inputdata = req.body;
    try {
        const data = await dbInsertOffice(inputdata);

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

async function getOfficeById(req, res){
    const id = req.params.id;

    try {
        const data = await dbGetOfficeById(id);

        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener la oficina por id'
        });
    }
}

async function deleteOfficeById(req, res){
   const id  = req.params.id;

   try {
       const data = await dbDeleteOfficeById(id);

       res.json({
           ok: true,
           data: data
       });
   } catch (error) {
       console.error(error);
       res.json({
           ok: false,
           msg: 'Ha ocurrido un error al eliminar la oficina'
       });
   }
}

async function updateOfficeByIdPut(req, res){
   const id = req.params.id;
   const inputdata = req.body;

   try {
       const data = await dbUpdateOfficeById(id, inputdata);

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
   getOffice,
   createOffice,
   getOfficeById,
   deleteOfficeById,
   updateOfficeByIdPut
};