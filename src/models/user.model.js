const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del usuario es obligatorio']
    },
    username: {
        type: String,
        lowercase: [true, 'El nombre de usuario debe estar en minúsculas'],
        required: [true, 'El nombre de usuario es obligatorio'],
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },
    role: {
        type: String,
        enum: [ 'registered', 'moderator', 'admin' ],
        default: 'registered'
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