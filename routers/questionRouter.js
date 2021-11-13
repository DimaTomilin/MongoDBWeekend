const express = require('express');
const router = express.Router();

const {
  getAllQuestions,
  createQuestion,
  updateQuestion,
} = require('../controller/question.js');

const {
  validateQuestion,
  validateId,
} = require('../middlewares/validation.js');

router.get('/list', getAllQuestions);
router.post('/create', validateQuestion, createQuestion);

router.put('/update/:id', validateId, validateQuestion, updateQuestion);

module.exports = router;
