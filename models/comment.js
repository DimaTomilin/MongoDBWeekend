const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    comment: {
      type: String,
      trim: true,
      required: true,
    },
    post: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);
