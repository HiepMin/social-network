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
          const checkDisliked = post.dislikes.filter(dis => dis.user.toString() === id);
          if (checkDisliked.length === 0) {
            // this user has already liked this post
            return res.status(400).json({ msg: 'you has not disliked this post yet', success: false });
          }
          const undislike = post.dislikes.filter(dis => dis.user.toString() !== id);
          post.dislikes = undislike;
          post
            .save()
            .then(newPost => res.json({ success: true, newPost }))
            .catch(() => res.status(400).json({ success: false, msg: 'you can undislike this post' }));
        })
        .catch(() => res.status(404).json({ msg: 'can not found this post', success: false }))
    })
    .catch(err => res.status(404).json(err));
}
