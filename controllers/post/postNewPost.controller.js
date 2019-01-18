const { Post } = require('./../../models/index.model');
// ------------------
// @route   POST /api/post/post
// @decs    POST create post
// @access  private
// -------------------
module.exports = (req, res) => {
  const { id } = req.user;
  const { text, username, avatar, nickname } = req.body;
  const newPost = new Post({
    user: id,
    text,
    username,
    avatar,
    nickname
  });
  newPost
    .save()
    .then(post => res.json({ post, success: true }))
    .catch(err => res.status(400).json(err));
}