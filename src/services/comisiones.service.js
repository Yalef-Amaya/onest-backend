const ComisionesModel = require('../models/comisiones.model');

async function dbGetComisiones() {
    return await ComisionesModel.find(
        {},
        { createdAt: 0, updatedAt: 0 });
}

async function dbInsertComisiones( newComision ) {
    const dbComisiones = new ComisionesModel( newComision );
    console.log( 'dbComisiones: ', dbComisiones );

    await dbComisiones.save();

    const objsComisiones = dbComisiones.toObject();

    delete objsComisiones.createdAt;
    delete objsComisiones.updatedAt;

    return objsComisiones;
}

async function dbGetComisionesById( id ){
    return await ComisionesModel.findById( 
        id,
        { createdAt: 0, updatedAt: 0, _id: 0 }
    );
}

 async function dbDeleteComisionesById(id){
     return await ComisionesModel.findByIdAndDelete( id );
 }

async function dbUpdateComisionesById( id, newComision ){
    return await ComisionesModel.findByIdAndUpdate(
        id,
        newComision,
        { new: true }
    );
}

module.exports = {
    dbGetComisiones,
    dbInsertComisiones,
    dbGetComisionesById,
    dbDeleteComisionesById,
    dbUpdateComisionesById
};
