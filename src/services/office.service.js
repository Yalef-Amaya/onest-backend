const OfficeModel = require('../models/office.model');

async function dbGetOffice() {
    return await OfficeModel.find(
        {},
        { createdAt: 0, updatedAt: 0 });
}

async function dbInsertOffice( newOffice ) {
    const dbOffice = new OfficeModel( newOffice );
    console.log( 'dbOffice: ', dbOffice );

    await dbOffice.save();

    const objsOffice = dbOffice.toObject();

    delete objsOffice.createdAt;
    delete objsOffice.updatedAt;

    return objsOffice;
}

async function dbGetOfficeById( id ){
    return await OfficeModel.findById( 
        id,
        { createdAt: 0, updatedAt: 0, _id: 0 }
    );
}

async function dbDeleteOfficeById(id){
    return await OfficeModel.findByIdAndDelete( id );
}

async function dbUpdateOfficeById( id, newOffice ){
    return await OfficeModel.findByIdAndUpdate(
        id,
        newCargo,
        { new: true }
    );
}

module.exports = {
    dbGetOffice,
    dbInsertOffice,
    dbGetOfficeById,
    dbDeleteOfficeById,
    dbUpdateOfficeById
};