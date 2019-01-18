const isEmpty = require('./isEmpty.validate');
const ValidateInputField = field => {
  const errors = {};
  let { text } = field;
  text = !isEmpty(text) ? text : '';
  // check email: empty, format
  if (isEmpty(text)) {
    errors.text = 'Text field is require!!';
  } 
  
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