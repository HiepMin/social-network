const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  avatar: {
      type: String,
  },
  nickname: {
    type: String,
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      username: {
        type: String,
      },
      avatar: {
        type: String
      },
      text: {
        type: String,
        required: true
      },
      nickname: {
        type: String,
      },
      createDate: {
        type: Date,
        default: Date.now
      }
    }
  ],
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  dislikes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  createDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', PostSchema, 'posts');