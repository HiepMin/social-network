import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Wrapped from './wrapped';
import Avatar from './../Avatar';
import Button from '../Button';
import Field from './../InputField';
import PostAction from './PostAction';
import moment from 'moment'
import 'moment/locale/vi';
moment.locale('vi');
const formatDate = str => moment(str).fromNow();
class PostComponent extends React.Component {
  state = {
    comment: '',
    displayCommentForm: false,
  }
  render() {
    const {
      // render dom
      renderDivInfo,
      renderDivAction,
      renderDelBtn,
      renderDetailBtn,
      processing,
      processDo,
      processIn,
      requesting,
      isCurrentUserPost,
      // props
      _id: post_id,
      comments,
      createDate,
      likes,
      text,
      username,
      user,
      avatar,
      //func
      onLikePost,
      onUnlikePost,
      onDislikePost,
      dislikes,
      onCommentPost,
      onUndislikePost,
      onClickDelPost,
      liked,
      disliked
    } = this.props;
    return (
      <Wrapped>
        <PostAction>
          {
            renderDelBtn && isCurrentUserPost(post_id) &&
            <Button 
              type="button"
              className="btnAction"
              default
              iconButton 
              onClick={onClickDelPost}>
              <i className="fas fa-times" />
            </Button>
          }
          {
            renderDetailBtn  &&
            <Link to={`post/id=${post_id}`}>
              <Button
                type="button"
                className="btnAction"
                default
                iconButton >
                <i className="fas fa-book" />
              </Button>
            </Link>
          }
        </PostAction>
        <div className="post post--white">
          {
            renderDivInfo &&
            <div className="post__info">
              <div className="authorDesc">
                <Avatar
                  src={avatar}
                  alt={username}
                />
                <div className="authorDesc__NameDate">
                  <Link className="authorName" to={`/profileid=${user._id}`}>
                    <strong>{username}</strong>
                  </Link>
                  <div className="date">{formatDate(createDate)}</div>
                </div>
              </div>
            </div>
          }
          <div className="post__content">
            <p className="post__main">{text}</p>
          </div>
          <div className="post__desc">
            <div className={cn("post__desc--amountLike oneBlockDesc", {
              'is-actived': liked()
            })}>
              <span>{likes.length}</span>
              <i className="far fa-thumbs-up" />
            </div>
            <div className={cn("post__desc--amountLike oneBlockDesc", {
              'is-actived': disliked()
            })}>
              <span>{dislikes.length}</span>
              <i className="far fa-thumbs-down" />
            </div>
            <div className="post__desc--amountComment oneBlockDesc">
              <span>{comments.length}</span>
              <i className="far fa-comment-dots"></i>
            </div>
          </div>
          {
            renderDivAction &&
              <div className="post__action">
              {
                liked() ?
                (
                  <Button 
                    className="btnAction" 
                    style={{ width: "100%", marginBottom: 0 }}
                    onClick={onUnlikePost}
                    disabled={requesting}
                    is-actived>
                    Like
                    { processing && processDo === "unlike post" && processIn === post_id
                      && <i className="fas fa-spinner fa-spin" style={{ marginLeft: 10}} /> 
                    }
                  </Button>
                ) :
                (
                  <Button 
                    className="btnAction" 
                    style={{ width: "100%", marginBottom: 0 }}
                    onClick={onLikePost}
                    disabled={disliked() || requesting}>
                    Like
                    { processing && processDo === "like post" && processIn === post_id  && <i className="fas fa-spinner fa-spin" style={{ marginLeft: 10}} /> }
                  </Button>
                )
              }
              {
                disliked() ?
                (
                  <Button 
                    className="btnAction" 
                    style={{ width: "100%", marginBottom: 0 }}
                    is-actived
                    disabled={requesting}
                    onClick={onUndislikePost}>
                    Dislike
                    { processing && processDo === "undislike post" && processIn === post_id && <i className="fas fa-spinner fa-spin" style={{ marginLeft: 10}} /> }
                  </Button>
                ) :
                (
                  <Button 
                    className="btnAction" 
                    style={{ width: "100%", marginBottom: 0 }} 
                    onClick={onDislikePost}
                    disabled={liked() || requesting}>
                    Dislike
                    { 
                      processing && 
                      processDo === "dislike post" && 
                      processIn === post_id && 
                      <i className="fas fa-spinner fa-spin" style={{ marginLeft: 10}} /> }
                  </Button>
                )
              }
              <Button 
                className="btnAction" 
                style={{ width: "100%", marginBottom: 0 }} 
                onClick={() => {
                  this.setState({
                    displayCommentForm: !this.state.displayCommentForm,
                  }); 
              }}>
                Comment({comments.length})
              </Button>
            </div>
          }
          {
            //post._id
            this.state.displayCommentForm &&
            (
              <div className="post__div-comment">
                <div className="post__form-comment">
                  <Avatar
                    src={user.avatar}
                    alt={user.username}
                  />
                  <form onSubmit={e => onCommentPost(e, this.state.comment)}>
                    <Field
                      name="comment"
                      id="comment"
                      placeholder="comment here..."
                      style={{ marginBottom: "0" }}
                      processing={processing && processDo === "pushing comment" && processIn === post_id}
                      onChange={this.handleChange}
                    />
                    <Button
                      type="submit"
                      style={{ marginBottom: 0, marginLeft: "14px" }}
                      className="btnComment"
                      default
                      iconButton >
                      <i className="fas fa-arrow-right " />
                    </Button>
                  </form>
                </div>
                <div className="TitleComment">
                  { 
                    comments && comments.length > 0 ? 
                      <strong>Comments({comments.length})</strong> :
                      <strong>No comment</strong>
                  }
                </div>
                <div className="post__comments">
                  { 
                    (comments && comments.length > 0) &&
                      <React.Fragment>
                        { this.renderComments(post_id, comments, user) }
                      </React.Fragment>
                  }
                </div>
              </div>
            )
          }
        </div>
      </Wrapped>

    );
  }
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }
  renderComments = (post_id, cmts, user) => {
    const { onClickDelComment, currentUser } = this.props;
    return cmts.map(cmt => {
      return (
        <div className="one-block-comment" key={cmt._id}>
          <div className="avatar">
            <Avatar
              src={cmt.avatar}
              alt={cmt.username}
            />
          </div>
          
          <div className="main">
            <div className="text">
              <Link to={`/profileid=${cmt.user}`}>
                <strong>{cmt.username}</strong>
              </Link>
              <p>{cmt.text}</p>
            </div>
            <div className="commentDate">
              <small>{formatDate(cmt.createDate)}</small>
            </div>
            {
              // chủ post || chủ comment
              (currentUser.id === user._id || currentUser.id === cmt.user) && (
                <PostAction>
                  <Button 
                    type="button"
                    className="btnAction"
                    default
                    iconButton 
                    onClick={() => onClickDelComment(post_id, cmt._id)}
                    >
                    <i className="fas fa-times" />
                  </Button>
                </PostAction>
              )
            }
            
          </div>
        </div>
      )
    })
  }
}
PostComponent.propTypes = {
  renderDivInfo: PropTypes.bool.isRequired,
  renderDivAction: PropTypes.bool.isRequired,
  renderDelBtn: PropTypes.bool.isRequired,
  comments: PropTypes.array,
  createDate: PropTypes.any,
  likes: PropTypes.array,
  text: PropTypes.string.isRequired,
  user: PropTypes.any,
  onLikePost: PropTypes.func,
  onUnlikePost: PropTypes.func,
  onCommentPost: PropTypes.func,
  renderDelBtnCmt: PropTypes.bool
}
export default PostComponent;