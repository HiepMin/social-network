import React from 'react';
import LoadingIndicator from './../../components/LoadingIndicator';
import Post from './../../components/Post';
import Layout from './../../components/Layout';

class PostContent extends React.PureComponent {
  componentDidMount() {
    this.props.GetAllPosts();
  }
  componentWillUnmount() {
    this.props.ActPureSetPosts([]);
  }
  render(){
    const { loading, doWhat } = this.props.process;
    const { posts } = this.props.post;
    if ((loading && doWhat === 'getting posts') || !posts) return <LoadingIndicator />
    return (
        <Layout xs={12} sm={10} md={8} cnCol="mx-auto" style={{ marginTop: "5rem" }}>
          {this.renderPosts(posts)}
        </Layout>
    )
  }
  renderPosts = posts => {
    const { currentUser } = this.props.auth;
    const { loading, doWhat, id: post_id } = this.props.process;
    return posts.map(post => {
      return (
          <Post
            key={post._id}
            currentUser={currentUser}
            {...post} 
            renderDivInfo={true}
            renderDivAction={true}
            renderDelBtn={true}
            renderDetailBtn={true}

            processing={loading}
            processDo={doWhat}
            processIn={post._id}

            requesting={loading}

            onLikePost={() => this.props.LikePost(post._id)}
            onUnlikePost={() => this.props.UnlikePost(post._id, currentUser.id)}
            onDislikePost={() => this.props.DislikePost(post._id)}
            onUndislikePost={() => this.props.UndislikePost(post._id, currentUser.id)}
            onCommentPost={(e, cmt) => this.onCommentPost(e, post._id, cmt)}
            // onClickDelComment={(post_id, cmt_id) => this.props.Act_RemoveComment(post_id, cmt_id)}
            // onClickDelPost={() => this.props.Act_RemovePost(post._id)}

            isCurrentUserPost={post_id => this.checkCurrentUserPost(post_id)}
            liked={() => this.checkLikeAndDislike(post._id, 'likes')}
            disliked={() => this.checkLikeAndDislike(post._id, 'dislikes')}
          />
      )
    })
  }
  checkCurrentUserPost = post_id => {
    const { posts } = this.props.post;
    const { currentUser } = this.props.auth;
    const eachPost = 
      posts
      .filter(post => post._id === post_id)
      .map(item => item.user)
      .filter(item => item._id === currentUser.id);
    if (eachPost.length > 0) return true;
    return false;
  }
  checkLikeAndDislike = (post_id, field) => {
    const { posts } = this.props.post;
    const { currentUser } = this.props.auth;
    const postLiked = posts.filter(post => post._id === post_id);
    const flag = postLiked[0][field].filter(item => item.user === currentUser.id);
    if (flag.length > 0) return true;
    return false;
  }
  onCommentPost = (e, post_id, cmt) => {
    const { currentUser } = this.props.auth;
    const objComment = {
      text: cmt,
      username: currentUser.username,
      nickname: currentUser.nickname,
      avatar: currentUser.avatar,
    }
    this.props.CommentPost(post_id, objComment);
    e.preventDefault();
    console.log(cmt);
  }
}

export default PostContent;