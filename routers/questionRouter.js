const express = require('express');
const router = express.Router();

const {
  getAllQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestionById,
  getQuestionsByDifficulty,
} = require('../controller/question.js');

const {
  validateQuestion,
  validateId,
} = require('../middlewares/validation.js');

router.get('/list', getAllQuestions);
router.get('/:id', validateId, getQuestionById);

router.post('/create', validateQuestion, createQuestion);

router.put('/update/:id', validateId, validateQuestion, updateQuestion);

router.delete('/delete/:id', validateId, deleteQuestion);

router.get('/difficulty/:difficulty', getQuestionsByDifficulty);

module.exports = router;
