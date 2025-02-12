const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
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