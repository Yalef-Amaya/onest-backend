const bcrypt = require('bcrypt');

function encryptPassword( pass ) {
    const salt = bcrypt.genSaltSync();
    console.log( 'Salt: ', salt );

    const hashPassword = bcrypt.hashSync( pass, salt );
    return hashPassword;
}

module.exports = encryptPassword;