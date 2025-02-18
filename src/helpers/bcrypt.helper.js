const bcrypt = require('bcrypt');

function encryptPassword( pass ) {
    const salt = bcrypt.genSaltSync();
    console.log( 'Salt: ', salt );

    const hashPassword = bcrypt.hashSync( pass, salt );
    console.log( 'hashPassword: ', hashPassword );
    
    return hashPassword;
}

function verifyEncriptedPassword( pass, hashPass ){

    return bcrypt.compareSync(pass, hashPass);
}

module.exports = {
    encryptPassword,
    verifyEncriptedPassword
};