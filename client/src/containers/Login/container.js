import LoginContent from './content';
import withForm from './../../HOC/withForm';
import { compose } from 'redux';
export default compose(
  withForm({
    form: 'LoginForm',
    field: ['email', 'password']
  })
)(LoginContent)