import React, { Component } from 'react'
import Post from './../../components/Post';
import LoadingIndicator from './../../components/LoadingIndicator';
import Layout from './../../components/Layout';
import { path } from './../../config'
class PostDetailContent extends Component {
  state={}
  componentDidMount() {
    const { post_id } = this.props.computedMatch.params;
    this.props.GetPostById(post_id, this.props.history, path.POSTS_PAGE);
    this.props.GetAllPosts();
  }
  componentWillUnmount() {
    this.props.ActPure_PostById({});
    this.props.ActPureSetPosts([]);
  }
  // shouldComponentUpdate(nextProps) {
  //   if (this.props.post.post !== nextProps.post.post) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    const { post_id } = this.props.computedMatch.params;
    const { post } = this.props.post;
    const { loading, doWhat } = this.props.process;
    const { currentUser } = this.props.auth;
    if ((loading && doWhat === 'getting post by post id') || !post || Object.keys(post).length === 0) return <LoadingIndicator />
    return (
      <Layout xs={12} sm={10} md={8} cnCol="mx-auto" style={{ marginTop: "5rem" }}>
        <Post 
          {...post}
          renderDivInfo={true}
          renderDivAction={true}
          renderDelBtn={true}
          renderDetailBtn={false}
          currentUser={currentUser}
          processing={loading}
          processDo={doWhat}
          processIn={post_id}

          requesting={loading}

          isCurrentUserPost={post_id => post._id === post_id && post.user._id === currentUser.id}
          onLikePost={() => this.props.LikePost(post._id)}
          onUnlikePost={() => this.props.UnlikePost(post._id, currentUser.id)}
          onCommentPost={(e, cmt) => this.onCommentPost(e, post._id, cmt)}
          onDislikePost={() => this.props.DislikePost(post._id)}
          onUndislikePost={() => this.props.UndislikePost(post._id, currentUser.id)}
          onClickDelComment={(post_id, cmt_id) => this.props.DeleteComment(post_id, cmt_id)}
          onClickDelPost={() => this.onDelPost(post._id)}
          liked={() => this.checkLikeAndDislike('likes')}
          disliked={() => this.checkLikeAndDislike('dislikes')}
        />
      </Layout>
    )
  }
  onDelPost = post_id => {
    this.props.DeletePost(post_id);
    this.props.history.push(path.POSTS_PAGE);
  }

  checkLikeAndDislike = field => {
    const { currentUser } = this.props.auth;
    const { post } = this.props.post;
    const flag = post[field].filter(item => item.user === currentUser.id);
    if (flag.length > 0) return true;
    return false;
  }
  onCommentPost = (e, post_id, cmt) => {
    const { currentUser } = this.props.auth;
    const objComment = {
      text: cmt,
      username: currentUser.username,
      avatar: currentUser.avatar,
    }
    this.props.CommentPost(post_id, objComment);
    e.preventDefault();
  }
}


export default PostDetailContent;