const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
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