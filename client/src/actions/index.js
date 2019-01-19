import { ActSetErrors } from './error';
// auth
import LoginUser from './auth/LoginUser';
import LogoutUser from './auth/LogoutUser';
import RegisterUser from './auth/RegisterUser';
// post
import GetAllPosts, { ActPureSetPosts } from './post/GetAllPosts';
import LikePost from './post/LikePost';
import UnlikePost from './post/UnlikePost';
import UndislikePost from './post/UndislikePost';
import DislikePost from './post/DislikePost';
import CommentPost from './post/CommentPost';
import DeleteComment from './post/DelComent'
import DeletePost from './post/DelPost'
import GetPostById, { ActPure_PostById } from './post/GetPostById';
import GetPostsByUserId from './post/GetPostsByUserId';
import CreateNewPost from './post/CreateNewPost';
// user
import CheckCurrentUser from './User/CheckCurrentUser';
import GetUserById, { ActPure_SetUserById } from './User/GetUserById';
export {
  // error
  ActSetErrors,
  // auth
  LoginUser,
  LogoutUser,
  RegisterUser,
  GetUserById,
  ActPure_SetUserById,
  // post
  GetAllPosts,
  ActPureSetPosts,
  LikePost,
  UnlikePost,
  UndislikePost,
  DislikePost,
  CommentPost,
  DeleteComment,
  DeletePost,
  GetPostById,
  ActPure_PostById,
  GetPostsByUserId,
  CreateNewPost,
  // user
  CheckCurrentUser
}