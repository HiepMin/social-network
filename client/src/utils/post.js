import axios from 'axios';
const urlApi = '/api/post';
const ReqAPI = (method, url, data) => axios({ method, url, data });

export const Get_AllPosts = () => ReqAPI("GET", `${urlApi}/all`, null);
export const Get_PostById = id => ReqAPI("GET", `${urlApi}/id=${id}`, null);
export const Get_PostByUserId = id => ReqAPI("GET", `${urlApi}/userid=${id}`, null);
export const Post_Comment = (post_id, comment) => 
  ReqAPI("POST", `${urlApi}/comment/id=${post_id}`, comment);
export const Post_NewPost = post => ReqAPI("POST", `${urlApi}/create`, post);
export const Post_LikePost = post_id => ReqAPI("POST", `${urlApi}/like/id=${post_id}`, null);
export const Post_DislikePost = post_id => ReqAPI("POST", `${urlApi}/dislike/id=${post_id}`, null);
export const Post_UnlikePost = post_id => ReqAPI("POST", `${urlApi}/unlike/id=${post_id}`, null);
export const Post_UndislikePost = post_id => ReqAPI("POST", `${urlApi}/undislike/id=${post_id}`, null);
export const Delete_Comment = (post_id, cmt_id) => 
  ReqAPI("DELETE", `${urlApi}/del/comment/post=${post_id}/cmt=${cmt_id}`, null);
export const Delete_Post = post_id => ReqAPI("DELETE", `${urlApi}/del/post/id=${post_id}`, null);