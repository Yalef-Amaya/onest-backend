const jwt = require('jsonwebtoken');

function generateToken(payload){
    return jwt.sing(payload, 'shakuwie#&jbfkñjdw87W#!"#', { expiresIn: '1h'});
}

function verifyToken( token ){
    return jwt.verify( token, 'shakuwie#&jbfkñjdw87W#!"#' );
}

module.exports = {
    generateToken,
    verifyToken
};