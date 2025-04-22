const mongoose = require('mongoose');

const CargoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del cargo es obligatorio'],
        unique: true
    },
    description: {
        type: String,
    }
},{
    timestamps: true,
    versionKey: false
});

const CargoModel = mongoose.model(
    'cargos',            
    CargoSchema          
);

module.exports = CargoModel;