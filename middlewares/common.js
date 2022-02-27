const { body, validationResult } = require('express-validator')


const bodyValidate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}



const verifySignUp = {
    bodyValidate,
 
  
};

module.exports = verifySignUp;
