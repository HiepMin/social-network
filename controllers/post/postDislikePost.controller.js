const { Post, Profile } = require('./../../models/index.model');

module.exports = (req, res) => {
  const { post_id } = req.params;
  const { id } = req.user;
  Profile
    .findOne({ user: id })
    .then(() => {
      Post
        .findById({ _id: post_id })  
        .then(post => {
          // check dislike yet
          const checkDisliked = post.dislikes.filter(dis => dis.user.toString() === id);
          if (checkDisliked.length > 0) {
            return res.status(404).json({ msg: 'you has already disliked this post', success: false });
          }
          const checkLiked = post.likes.filter(like => like.user.toString() === id);
          if (checkLiked.length > 0) {
            return res.status(404).json({ msg: 'you liked this post, please remove like', success: false });
          }
          post.dislikes.unshift({ user: id });
          post
            .save()
            .then(result => res.json(result.dislikes))
            .catch(() => res.status(400).json({ msg: 'you can not dislike this post!!' }));
        })
        .catch(() => res.status(404).json({ msg: 'this post is not exist' }))
    })
    .catch(err => res.status(400).json(err));
}
