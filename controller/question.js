const Question = require('../models/Question.js');

exports.getAllQuestions = async (req, res) => {
  try {
    const allQuestions = await Question.find({});
    res.send(allQuestions);
  } catch (err) {
    res.send(err);
  }
};
