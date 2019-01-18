const { Post, User } = require('./../../models/index.model');
module.exports = (req, res) => {
  const { post_id } = req.params;
  const { id } = req.user;
  User
    .findById(id)
    .then(() => {
      Post
        .findById(post_id)
        .then(post => { 
          const checkLiked = post.likes.filter(like => like.user.toString() === id);
          if (checkLiked.length === 0) {
            // this user has already liked this post
            return res.status(400).json({ msg: 'you has not liked this post yet', success: false });
          }
          const unlike = post.likes.filter(like => like.user.toString() !== id);
          post.likes = unlike;
          post
            .save()
            .then(newPost => res.json({ success: true, newPost }))
            .catch(() => res.status(400).json({ success: false, msg: 'you can unlike this post' }));
        })
        .catch(() => res.status(404).json({ msg: 'can not found this post', success: false }))
    })
}
