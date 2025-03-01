const ProductividadModel = require('../models/productividad.model');

async function dbGetProductividad() {
    return await ProductividadModel.find(
        {},
        { createdAt: 0, updatedAt: 0 });
}

async function dbInsertProductividad( newProductividad ) {
    const dbProductividad = new ProductividadModel( newProductividad );
    console.log( 'dbProductividad: ', dbProductividad );

    await dbProductividad.save();

    const objsProductividad = dbProductividad.toObject();

    delete objsProductividad.createdAt;
    delete objsProductividad.updatedAt;

    return objsProductividad;
}

async function dbGetProductividadById( id ){
    return await ProductividadModel.findById( 
        id,
        { createdAt: 0, updatedAt: 0, _id: 0 }
    );
}

// async function dbDeleteProductividadById(id){
//     return await ProductividadModel.findByIdAndDelete( id );
// }

async function dbUpdateProductividadById( id, newProductividad ){
    return await ProductividadModel.findByIdAndUpdate(
        id,
        newProductividad,
        { new: true }
    );
}

module.exports = {
    dbGetProductividad,
    dbInsertProductividad,
    dbGetProductividadById,
    // dbDeleteProductividadById,
    dbUpdateProductividadById
};
