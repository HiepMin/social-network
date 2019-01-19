import UserDetailContent from './content';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import withAuthorization from './../../HOC/withAuthorization';
import withForm from './../../HOC/withForm';
import { connect } from 'react-redux';
import {
  GetUserById,
  GetPostsByUserId,
  CheckCurrentUser,
  ActPureSetPosts,
  ActSetErrors,
  DeletePost,
  CreateNewPost
} from './../../actions';
const mapStateToProps = state => ({
  process: state.process,
  post: state.post,
  error: state.error
})
const withConnect = connect(mapStateToProps, {
  GetUserById,
  GetPostsByUserId,
  CheckCurrentUser,
  ActPureSetPosts,
  ActSetErrors,
  DeletePost,
  CreateNewPost
});
export default compose(
  withRouter,
  withConnect,
  withAuthorization,
  withForm({
    form: 'pushCommentForm'
  })
)(UserDetailContent)