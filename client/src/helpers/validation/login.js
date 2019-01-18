import isEmpty from './isEmpty';
import { isEmail } from 'validator';

export default data => {
  const errors = {};
  const { email, password } = data;
  if (isEmpty(email)) {
    errors.email = "Email field is required!"
  } else {
    if (!isEmail(email)) {
      errors.email = "Invalid email, please check it again!"
    }
  }
  if (isEmpty(password)) {
    errors.password = "Password field is required!"
  }
  return errors;
}