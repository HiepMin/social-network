// user controller
const Post_Login = require('./user/login.controller');
const Post_Register = require('./user/register.controller');
const Get_CurrentUser = require('./user/currentUser.controller');
const Get_UserById = require('./user/getUserById.controller');
// post controllers
const Post_NewPost = require('./post/postNewPost.controller');
const Get_AllPosts = require('./post/getAllPosts.controller');
const Get_PostById = require('./post/getPostById.controller');
const Get_PostsByUserId = require('./post/getPostsByUserId.controller');
const Post_CommentPost = require('./post/postComment.controller');
const Post_LikePost = require('./post/postLike.controller');
const Post_DislikePost = require('./post/postDislikePost.controller');
const Post_UnlikedPost = require('./post/postUnlikedPost.controller');
const Post_UndislikedPost = require('./post/postUndislikedPost.controller');
const Delete_CommentPost = require('./post/deleteCommentPost.controller');
const Delete_PostById = require('./post/deletePostById.controller');

module.exports = { 
  // user
  Post_Login, 
  Post_Register, 
  Get_CurrentUser,
  Get_UserById,
  // post
  Get_PostsByUserId,
  Post_NewPost,
  Get_AllPosts,
  Get_PostById,
  Post_CommentPost,
  Post_LikePost,
  Post_DislikePost,
  Post_UnlikedPost,
  Post_UndislikedPost,
  Delete_CommentPost,
  Delete_PostById,
};