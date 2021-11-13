const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  correctAnswer: {
    type: String,
    trim: true,
    required: true,
  },
  answers: [String],
  difficulty: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Question', questionSchema);
