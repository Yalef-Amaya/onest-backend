const mongoose = require('mongoose');

const CargoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del cargo es obligatorio'],
        unique: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'El id del usuario es obligatorio']
    },
    description: {
        type: String,
    },
    bossId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
},{
    timestamps: true,
    versionKey: false
});

const CargoModel = mongoose.model(
    'cargos',            
    CargoSchema          
);

module.exports = CargoModel;