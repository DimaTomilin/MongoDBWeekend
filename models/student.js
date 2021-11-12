const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    surName: {
      type: String,
      trim: true,
      required: true,
    },
    birth: {
      type: Date,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      trim: true,
      required: true,
    },
    courses: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', StudentSchema);
