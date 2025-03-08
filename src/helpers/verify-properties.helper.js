const verifyProperties = ( error ) => {
    const errors = {}; 
    for( const [ key, value ] of Object.entries( error.errors ) ) {
        errors[ key ] = value.message;     
    }
    
    return errors;      
}

module.exports = verifyProperties;