const { body } = require('express-validator')

const verifyUpdatePreference = () => {
    return [
      
        body('label').notEmpty(),
        body('color').notEmpty(),
    ]
}
const verifyGetPreference = () => {
    return [
        // username must be an string
        // body('id').notEmpty(),
      
    ]
}




const verifyUserPreference = {
    verifyGetPreference,
    verifyUpdatePreference

};

module.exports = verifyUserPreference;
