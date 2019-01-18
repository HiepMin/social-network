const express = require('express');
const router = express.Router();

// loading controllers
const { 
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
  Get_PostsByUserId
} = require('./../controllers/index.controller');

// loading middlewares
const {  
  ProtectedRoute,
  ValidatePostField,
  ValidateCommentPostField
} = require('./../middleware/index.middleware');
router.get('/all', ProtectedRoute, Get_AllPosts);
router.get('/id=:post_id', ProtectedRoute, Get_PostById);
router.get('/userid=:user_id', ProtectedRoute, Get_PostsByUserId);
router.post('/comment/id=:post_id', ProtectedRoute, ValidateCommentPostField, Post_CommentPost);
router.post('/create', ProtectedRoute, ValidatePostField, Post_NewPost);
router.post('/like/id=:post_id', ProtectedRoute, Post_LikePost);
router.post('/dislike/id=:post_id', ProtectedRoute, Post_DislikePost);
router.post('/unlike/id=:post_id', ProtectedRoute, Post_UnlikedPost);
router.post('/undislike/id=:post_id', ProtectedRoute, Post_UndislikedPost);
router.delete('/del/comment/post=:post_id/cmt=:cmt_id', ProtectedRoute, Delete_CommentPost);
router.delete('/del/post/id=:post_id', ProtectedRoute, Delete_PostById);

module.exports = router;