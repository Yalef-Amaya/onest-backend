const mongoose = require('mongoose');

function isJavaScriptObject (obj){
    return typeof obj === 'object' && obj !== null &&!Array.isArray(obj);
}

function isMongooseObject (obj) {
    return obj instanceof mongoose.Document;
}

function convertBJSONtoJSObj (obj) {
    let newObj;

    if( isMongooseObject (obj))
        newObj = obj.toObject();
    else if ( isJavaScriptObject(obj))
        newObj = {...obj};
    else
        throw new Error("El objeto no es ni JavaScript ni Mongoose");

    return newObj;
}

function removePropertiesToObject({ obj, properties}){
    try {
        const newObj = convertBJSONtoJSObj( obj );

        for (const property of properties) {
            if( newObj.hasOwnProperty(property)){
                delete newObj[property]
            }
        }

        return newObj;

    } catch (error) {
        console.error('Error al eliminar propiedades:', error);
        return null;
    }
}

module.exports = removePropertiesToObject;