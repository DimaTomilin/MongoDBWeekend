const express = require('express');
const router = express.Router();

const {
  getAllQuestions,
} = require('../controller/question.js');

const {
  validateQuestion,
  validateId,
} = require('../middlewares/validation.js');

router.get('/list', getAllQuestions);
module.exports = router;
