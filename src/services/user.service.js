const UserModel = require('../models/user.model');

async function dbGetUser() {
    return await UserModel.find({}).populate([ 'cargo', 'vinculacion' ]);
}

async function dbInsertUser( newUser ) {
    return await UserModel.create( newUser);
}

async function dbGetUserById( id ){
    return await UserModel.findById( id );
}

async function dbDeleteUserById( id){
    return await UserModel.findByIdAndDelete( id );
}

async function dbUpdateUserById( id, newUser ){
    return await UserModel.findByIdAndUpdate(
        id,
        newUser,
        { new: true }
    );
}

module.exports = {
    dbGetUser,
    dbInsertUser,
    dbGetUserById,
    dbDeleteUserById,
    dbUpdateUserById
};