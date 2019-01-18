const { User } = require('./../../models/index.model');
module.exports = async (req, res) => {
  const { user_id } = req.params;
  const user = await User.findById(user_id);
  if (!user) return res.status(404).json({ msg: 'this user has not existed yet' })
  res.json(user);
}