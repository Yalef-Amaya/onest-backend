const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema({
    typeDoc: {
        type: String,
        enum: [ 'CC', 'CE', 'Pasaporte' ],
        default: 'CC'
    },
    nDoc: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: [true, 'El nombre del usuario es obligatorio']
    },
    username: {
        type: String,
        lowercase: [true, 'El correo de usuario debe estar en minúsculas'],
        required: [true, 'El correo de usuario es obligatorio'],
        unique: true
    },
    celular: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },
    role: {
        type: String,
        enum: [ 'registered', 'comercial', 'cartera' ,'admin', 'operativo', 'tesoreria' ],
        default: 'registered'
    },
    office: {
        type: String,
        enum: [ 'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena' ]
    }
},{
    timestamps: true,
    versionKey: false
});

const UserModel = mongoose.model(
    'users',            
    UserSchema          
);

module.exports = UserModel;