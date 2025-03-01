const VinculacionModel = require('../models/vinculacion.model');

async function dbGetVinculacion() {
    return await VinculacionModel.find(
        {},
        { createdAt: 0, updatedAt: 0 });
}

async function dbInsertVinculacion( newVinculacion ) {
    const dbVinculacion = new VinculacionModel( newVinculacion );
    console.log( 'dbVinculacion: ', dbVinculacion );

    await dbVinculacion.save();

    const objsVinculacion = dbVinculacion.toObject();

    delete objsVinculacion.createdAt;
    delete objsVinculacion.updatedAt;

    return objsVinculacion;
}

async function dbGetVinculacionById( id ){
    return await VinculacionModel.findById(
        id,
        { createdAt: 0, updatedAt: 0, _id: 0 }
    );
}

async function dbDeleteVinculacionById(id){
    return await VinculacionModel.findByIdAndDelete( id );
}

async function dbUpdateVinculacionById( id, newVinculacion ){
    return await VinculacionModel.findByIdAndUpdate(
        id,
        newVinculacion,
        { new: true }
    );
}

module.exports = {
    dbGetVinculacion,
    dbInsertVinculacion,
    dbGetVinculacionById,
    dbDeleteVinculacionById,
    dbUpdateVinculacionById
};
