const { body } = require('express-validator')

const verifyLoginBody = () => {
    return [
        // username must be an string
        body('email').notEmpty(),
        // password must be at least 5 chars long
        body('password').isLength({ min: 5 }),
    ]
}



const verifySignIn = {
    verifyLoginBody

};

module.exports = verifySignIn;
