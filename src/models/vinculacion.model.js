const mongoose = require('mongoose');

const VinculacionSchema = new mongoose.Schema({
    url: [
        String
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'El id del usuario es obligatorio']
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'El id del propietario es obligatorio']
    }
},{
    timestamps: true,
    versionKey: false
});

const VinculacionModel = mongoose.model(
    'vinculaciones',            
    VinculacionSchema          
);

module.exports = VinculacionModel;