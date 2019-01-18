const { Post, Profile } = require('./../../models/index.model');

module.exports = (req, res) => {
  // kiem tra xem post nay co phai la post cua thang dang login hay khong
  // neu phai thi xoa, con khong thi khong xoa duoc
  const { post_id } = req.params;
  const { id } = req.user;
  Profile
    .findOne({ user: id })
    .then(() => {
      Post
        .findById({ _id: post_id })
        .then(post => {
          if (post.user.toString() !== id) {
            return res.status(400).json({ msg: 'you can not remove the post which is not your!!!', success: false });
          }
          post
            .remove()
            .then(() => res.json({ success: true }))
            .catch(() => res.status(404).json({ msg: 'you can not remove this post', success: false }))
        })
        .catch(() => res.status(404).json({ msg: 'can not found this post', success: false }))
    })
    .catch(err => res.status(400).json(err));
}

