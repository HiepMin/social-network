import React, { Component } from 'react'
import LoadingIndicator from './../../components/LoadingIndicator';
import { path } from './../../config';
import Layout from './../../components/Layout';
import BlockTop from './BlockTop';
import TextAreaField from './../../components/TextAreaField';
import Button from './../../components/Button';
import Post from './../../components/Post';

class UserDetailContent extends Component {
  state={}
  componentDidMount(){
    const { user_id } = this.props.computedMatch.params;
    const { currentUser } = this.props.auth;
    this.props.CheckCurrentUser(currentUser.id, user_id);
    this.props.GetPostsByUserId(user_id);
    this.props.GetUserById(user_id);
  } 
  componentDidUpdate(prevProps) {
    const { user_id } = this.props.computedMatch.params;
    const { currentUser } = this.props.auth;
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.CheckCurrentUser(currentUser.id, user_id);
      this.props.GetPostsByUserId(user_id);
      this.props.GetUserById(user_id);
    }
  } 
  componentWillUnmount(){
    this.props.CheckCurrentUser(null);
    this.props.ActPureSetPosts([]);
    this.props.ActSetErrors({});
  }
  // static getDerivedStateFromProps(newProps) {
  //   if (newProps.error.msg && newProps.error.msg === "This user is not existed") newProps.history.push(path.POSTS_PAGE);
  //   return null
  // }
  render() {
    const { posts } = this.props.post;
    const { user, isCurrentUser } = this.props.auth;
    const { loading, doWhat } = this.props.process;
    if ((loading && doWhat === "getting user by id") || !user) return <LoadingIndicator />
    return (
      <Layout xs={12} sm={10} md={8} cnCol='mx-auto' style={{ marginTop: "4rem" }}>
        <BlockTop {...user}/>
        <Layout xs={12} fluid>
          <div className="block-content">
            { isCurrentUser && this.renderFormPushPost() }
            {
              posts.length > 0 && <div>{this.renderPosts()}</div>
            }
          </div>
        </Layout>
      </Layout>
    )
  }
  renderFormPushPost = () => (
    <form onSubmit={this.props.handleSubmit(this.onPushPost)}>
      <TextAreaField 
        name="text" 
        placeholder="Let share with us whatever you want..."
        />          
        <Button type="submit" default iconButton>
          <i className="fas fa-arrow-right " />
        </Button>
    </form>
  )
  renderPosts = () => {
    const { isCurrentUser } = this.props.auth;
    const { posts } = this.props.post;
    return posts.map(post => {
      return (
        <Post 
          renderDivInfo={false}
          renderDelBtn={true}
          renderDivAction={false}
          renderDetailBtn={true}
          isCurrentUserPost={() => isCurrentUser}
          onClickDelPost={() => this.props.DeletePost(post._id)}
          key={post._id}
          {...post} 
          liked={() => this.checkLikeAndDislike(post._id, 'likes')}
          disliked={() => this.checkLikeAndDislike(post._id, 'dislikes')}
        />
      )
    })
  }
  onPushPost = ({ text }) => {
    const { currentUser } = this.props.auth;
    const newPost = {
      user: currentUser.id,
      text,
      username: currentUser.username,
      avatar: currentUser.avatar,
    }
    this.props.CreateNewPost(newPost);
  }
  checkLikeAndDislike = (post_id, field) => {
    const { posts } = this.props.post;
    const { currentUser } = this.props.auth;
    const postLiked = posts.filter(post => post._id === post_id);
    const flag = postLiked[0][field].filter(item => item.user === currentUser.id);
    if (flag.length > 0) return true;
    return false;
  }
}
export default UserDetailContent