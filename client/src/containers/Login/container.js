import LoginContent from './content';
import withForm from './../../HOC/withForm';
import { compose } from 'redux';
import validate from './../../helpers/validation/login';
import { connect } from 'react-redux';
import { LoginUser, ActSetErrors } from './../../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error,
  process: state.process
})

const withConnect = connect(mapStateToProps, {  
  LoginUser,
  ActSetErrors
})

export default compose(
  withForm({
    form: 'LoginForm',
    field: ['email', 'password'],
    validate
  }),
  withConnect,
  withRouter
)(LoginContent)