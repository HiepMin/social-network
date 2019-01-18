const { Post } = require('./../../models/index.model');
// ------------------
// @route   POSt /api/post/comment/id=:post_id
// @decs    POSt comment the post
// @access  private
// -------------------
module.exports = (req, res) => {
  const { post_id } = req.params;
  const { text, username, nickname, avatar } = req.body;
  const { id } = req.user;
  Post
    .findById({ _id: post_id })
    .then(post => {
      const newComent = new Post({ text, username, nickname, avatar, user: id });
      post.comments.unshift(newComent);
      post
        .save()
        .then(createdPost => res.json(createdPost.comments))
        .catch(() => res.status(400).json({ msg: 'can not comment in this post', success: false }))
    })
    .catch(() => res.status(404).json({ msg: 'this post is not exist' }));
}