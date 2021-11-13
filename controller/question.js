const Question = require('../models/Question.js');

exports.getAllQuestions = async (req, res) => {
  try {
    const allQuestions = await Question.find({});
    res.send(allQuestions);
  } catch (err) {
    res.send(err);
  }
};

exports.createQuestion = async (req, res) => {
  const validatedQuestion = req.validated;
  try {
    const newQuestion = await Question.create(validatedQuestion);
    res.send(newQuestion);
  } catch (err) {
    res.send(err);
  }
};

exports.updateQuestion = async (req, res) => {
  const validatedQuestion = req.validated;
  const id = req.params.id;
  try {
    await Question.updateOne({ _id: id }, validatedQuestion);
    res.send(`Question ${id} updated.`);
  } catch (err) {
    res.send(err);
  }
};
