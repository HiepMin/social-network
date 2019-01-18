module.exports = (req, res) => {
  const { _id, email, joinDate, username, avatar } = req.user;
  res.json({ id: _id, email, joinDate, username, avatar });
}