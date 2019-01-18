const isEmpty = require('./isEmpty.validate');
const validateField = value => {
  const errors = {};
  let { text } = value;
  text = !isEmpty(text) ? text : '';
  if (isEmpty(text)) {
    errors.text = 'Text field is require';
  }
  return {
    isValid: isEmpty(errors),
    errors
  }
}
module.exports = (req, res, next) => {
  const { isValid, errors } = validateField(req.body);
  if (!isValid) return res.status(400).json(errors);
  next();
}
