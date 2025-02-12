const UserModel = require('../models/user.model');
const encryptPassword = require('../helpers/bcrypt.helper');

async function dbGetUser() {
    return await UserModel.find(
        {},
        { password: 0, createdAt: 0, updatedAt: 0 });
}

async function dbInsertUser( newUser ) {
    const dbUser = new UserModel( newUser );
    console.log( 'dbUser: ', dbUser );

    dbUser.password = encryptPassword( dbUser.password );

    dbUser.save();

    return 0;
}

async function dbGetUserById( id ){
    return await UserModel.findById( 
        id,
        { password: 0, createdAt: 0, updatedAt: 0 }
    );
}

async function dbDeleteUserById( id){
    return await UserModel.findByIdAndDelete( id );
}

async function dbUpdateUserById( id, newUser ){
    return await UserModel.findByIdAndUpdate(
        id,
        newUser,
        { new: true, select: '-password' }
    );
}

async function dbGetUserByUsername (email) {
    await UserModel.findOne({ username: email });
}

module.exports = {
    dbGetUser,
    dbInsertUser,
    dbGetUserById,
    dbDeleteUserById,
    dbUpdateUserById,
    dbGetUserByUsername
};