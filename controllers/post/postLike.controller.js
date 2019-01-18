const { Post, User } = require('./../../models/index.model');

module.exports = (req, res) => {
  const { post_id } = req.params;
  const { id } = req.user;
  User
    .findById(id)
    .then(() => {
      Post
      .findById({ _id: post_id })
      .then(post => {
        // check this user has already like this post or not yet ?
        const checkDisliked = post.dislikes.filter(dislike => dislike.user.toString() === id);
        if (checkDisliked.length > 0) {
          return res.status(400).json({ msg: 'you has already disliked this post, please remove dislike', success: false })
        }
        const checkLiked = post.likes.filter(like => like.user.toString() === id);
        if (checkLiked.length > 0) {
          // this user has already liked this post
          return res.status(400).json({ msg: 'you has already liked this post!', success: false })
        }
        post.likes.unshift({ user: id });
        post
          .save()
          .then(newPost => res.json(newPost.likes))
          .catch(() => res.status(400).json({ success: false, msg: 'you can not like this post' }));
      })
      .catch(() => res.status(404).json({ msg: 'this post is not exist' }));
    })
    .catch(err => res.status(400).json(err));
}