const CargoModel = require('../models/cargo.model');

async function dbGetCargo() {
    return await CargoModel.find(
        {},
        { createdAt: 0, updatedAt: 0 });
}

async function dbInsertCargo( newCargo ) {
    const dbCargo = new CargoModel( newCargo );
    console.log( 'dbCargo: ', dbCargo );

    await dbCargo.save();

    const objsCargo = dbCargo.toObject();

    delete objsCargo.createdAt;
    delete objsCargo.updatedAt;

    return objsCargo;
}

async function dbGetCargoById( id ){
    return await CargoModel.findById( 
        id,
        { createdAt: 0, updatedAt: 0, _id: 0 }
    );
}

async function dbDeleteCargoById(id){
    return await CargoModel.findByIdAndDelete( id );
}

async function dbUpdateCargoById( id, newCargo ){
    return await CargoModel.findByIdAndUpdate(
        id,
        newCargo,
        { new: true }
    );
}

module.exports = {
    dbGetCargo,
    dbInsertCargo,
    dbGetCargoById,
    dbDeleteCargoById,
    dbUpdateCargoById
};
