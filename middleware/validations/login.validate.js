const isEmpty = require('./isEmpty.validate');
const { isEmail } = require('validator');
const ValidateInputField = field => {
  const errors = {};
  let { password, email  } = field;
  email = !isEmpty(email) ? email : '';
  password = !isEmpty(password) ? password : '';
  // check email: empty, format
  if (isEmpty(email)) {
    errors.email = 'Email field is require!!';
  } else {
    if (!isEmail(email)) {
      errors.email = 'Email is not correct, please check it again!!';
    }
  }
  if (isEmpty(password)) {
    errors.password = 'Password field is require!!';
  } 
  // check password: empty
  return {
    isValid: isEmpty(errors),
    errors
  }
}
module.exports = (req, res, next) => {
  const { isValid, errors } = ValidateInputField(req.body);
  if (!isValid) return res.status(400).json(errors);
  next();
}