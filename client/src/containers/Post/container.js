import PostContent from './content';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import withForm from './../../HOC/withForm';
import withAuthorization from './../../HOC/withAuthorization';
import { 
  ActPureSetPosts,
  GetAllPosts,
  LikePost,
  UnlikePost,
  UndislikePost,
  DislikePost,
  CommentPost,
  DeletePost,
  DeleteComment
} from './../../actions';

const mapStateToProps = state => ({
  error: state.error.error,
  post: state.post,
  process: state.process,
})
const withConnect = connect(
  mapStateToProps, 
  { 
    ActPureSetPosts,
    GetAllPosts,
    LikePost,
    UnlikePost,
    UndislikePost,
    DislikePost,
    CommentPost,
    DeletePost,
    DeleteComment
  }
);

export default compose(
  withConnect,
  withRouter,
  withAuthorization,
  withForm({
    form: 'PushCommentPostForm',
  })
)(PostContent);