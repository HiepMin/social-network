import PostDetailContent from './content';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import withAuthorization from './../../HOC/withAuthorization';
import withForm from './../../HOC/withForm';
import { connect } from 'react-redux';
import {  
  ActPure_PostById,
  GetPostById,
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
  post: state.post,
  error: state.error,
  process: state.process
});

const withConnect = connect(mapStateToProps, { 
  ActPure_PostById,
  GetPostById,
  ActPureSetPosts,
  GetAllPosts,
  LikePost,
  UnlikePost,
  UndislikePost,
  DislikePost,
  CommentPost,
  DeletePost,
  DeleteComment
})
export default compose(
  withRouter,
  withAuthorization,
  withConnect,
  withForm({
    form: 'PushCommentPostDetailForm',
  })
)(PostDetailContent);