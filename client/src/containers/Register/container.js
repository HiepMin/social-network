import RegisterContent from './content';
import withForm from './../../HOC/withForm';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ActSetErrors, RegisterUser } from './../../actions';
import { withRouter } from 'react-router-dom';
import validate from './../../helpers/validation/register'

const mapStateToProps = state => ({
  auth: state.auth,
  process: state.process,
  error: state.error
})
const withConnect = connect(mapStateToProps, {
  ActSetErrors,
  RegisterUser
})

export default compose(
  withRouter,
  withForm({
    form: 'RegisterForm',
    validate,
    field: ['email', 'password', 'username', 'passConfirm']
  }),
  withConnect,
)(RegisterContent)