const mongoose = require('mongoose');

const OfficeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del cargo es obligatorio'],
        unique: true,
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

const OfficeModel = mongoose.model(
    'offices',            
    OfficeSchema          
);

module.exports = OfficeModel;