const { Post } = require('./../../models/index.model');
module.exports = (req, res) => {
  Post
    .find()
    .populate('user', ['username', 'nickname', 'avatar'])
    .sort({ createDate: -1 })
    .then(posts => {
      if (!posts) return res.status(404).json({ msg: 'can not get posts', success: false });
      res.json(posts);
    })
    .catch(err => res.status(404).json(err));
}