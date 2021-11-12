const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    body: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
