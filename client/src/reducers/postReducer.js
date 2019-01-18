import {
  GET_POSTS,
  LIKE_POST,
  DISLIKE_POST,
  UNLIKE_POST,
  UNDISLIKE_POST,
  COMMENT_POST,
} from './../actions/type';
const initialState = {
  post: {},
  posts: []
};
export default (state=initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
      
    case LIKE_POST:
      const postLiked = state.posts.filter(post => post._id === action.post_id);
      postLiked[0].likes = action.payload;
      return { ...state, post: postLiked[0] }
    case DISLIKE_POST:
      const postDisliked = state.posts.filter(post => post._id === action.post_id);
      postDisliked[0].dislikes = action.payload;
      return { ...state, post: postDisliked[0] }
    case UNLIKE_POST:
      const postUnliked = state.posts.filter(post => post._id === action.post_id);
      const arrAfterUnliked = postUnliked[0].likes.filter(like => like.user !== action.user_id);
      postUnliked[0].likes = arrAfterUnliked;
      return { ...state, post: postUnliked[0] }
    case UNDISLIKE_POST:
      const postUndisliked = state.posts.filter(post => post._id === action.post_id);
      const arrAfterUndisliked = postUndisliked[0].dislikes.filter(dis => dis.user !== action.user_id);
      postUndisliked[0].dislikes = arrAfterUndisliked;
      return { ...state, post: postUndisliked[0] }
    case COMMENT_POST:
      const postCommentted = state.posts.filter(post => post._id === action.post_id);
      postCommentted[0].comments = action.payload
      return {...state, post: postCommentted[0] }

    default:
      return {...state}
  }
}

