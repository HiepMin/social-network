const { Post, User } = require('./../../models/index.model');

module.exports = (req, res) => {
  const { user_id } = req.params;
  User
    .findById(user_id) 
    .then(() => {
      Post
        .find({ user: user_id })
        .then(posts => {
          if (!posts) return res.status(404).json({ msg: 'This user has no post', success: false });
          res.json(posts);
        })
        .catch(err => res.status(404).json(err))
    })
    .catch(() => res.status(404).json({ msg: 'This user is not existed' }))
}
