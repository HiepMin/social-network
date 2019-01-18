const { Post } = require('./../../models/index.model');

module.exports = (req, res) => {
  const { post_id } = req.params;
  Post
    .findById({ _id: post_id })
    .populate('user', ['username', 'nickname', 'avatar'])
    .then(post => res.json(post))
    .catch(() => res.status(400).json({ msg: 'can not found this post', success: false }));
}