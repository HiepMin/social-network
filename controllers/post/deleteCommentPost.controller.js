const { Post } = require('./../../models/index.model');

const removeFunc = (res, post, cmt_id) => {
  const removeCmt = post.comments.filter(cmt => cmt._id.toString() !== cmt_id);
  post.comments = removeCmt;
  post
    .save()
    .then(newPost => res.json(newPost.comments))
    .catch(() => res.status(400).json({ msg: 'this comment can not remove', success: false }))
}

module.exports = (req, res) => {
  const { post_id, cmt_id } = req.params;
  const { id } = req.user;
  // 1. kiem tra xem post nay co ton tai hay khong
  // 2. net post ton tai thi kiem tra comment co ton tai hay khong
  // 3. neu comment ton tai thi kiem tra thang nay co phai la chu post hay k
  // neu la chu post thi co the xoa bat cu comment nao
  // neu khong la chu post thi kiem tra xem thang nay co phai la chu cua comment muon xoa hay khong

  Post
    .findById(post_id)
    .then(post => {
      // comment id khong ton tai
      const checkCmt = post.comments.filter(cmt => cmt._id.toString() === cmt_id);
      if (checkCmt.length === 0) {
        return res.status(400).json({ msg: 'this comment is not exist', success: false });
      } else {
        //comment ton tai, xet 2 truong hop
        if (post.user.toString() !== id) { // thang nay khong phai chu post
          if (checkCmt[0].user.toString() === id) {
            // comment nay la comment cua thang user dang login
            removeFunc(res, post, cmt_id);
          } else {
            return res.status(400).json({ msg: 'you can not remove this comment', success: false })
          }
        } else {
          // thang nay la chu post
          removeFunc(res, post, cmt_id);
        }
      }
    })
    .catch(() => res.status(400).json({ msg: 'this post can not found', success: false }));
}
