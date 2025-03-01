const mongoose = require('mongoose');

const TecfinanzasSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del cargo es obligatorio']
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'El id del usuario es obligatorio']
    },
    localizacion: {
        type: String,
        required: [true, 'La oficina es obligatoria']
    },
    oficina: {
        type: String,
        required: [true, 'La oficina es obligatoria']
    },
    cargoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cargos',
        required: [true, 'El cargo es obligatorio']
    }
},{
    timestamps: true,
    versionKey: false
});

const TecfinanzasModel = mongoose.model(
    'Tecfinanzas',            
    TecfinanzasSchema          
);

module.exports = TecfinanzasModel;


/**
 * BETA EN CONSIDERACION
 */