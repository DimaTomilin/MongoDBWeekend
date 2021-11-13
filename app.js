const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const morgan = require('morgan');

const questionRoute = require('./routers/questionRouter');
const errorHandlingMiddleware = require('./middlewares/errorHandlingMiddleware');
const unknownEndpoint = require('./middlewares/unknownEndpoint');

app.use(express.json());

morgan.token('body', function (req, res) {
  return JSON.stringify(req.body);
});
app.use(
  morgan(' :method :url :status :res[content-length] - :response-time ms :body')
);

//connecting to database
mongoose
  .connect(process.env.DATABASE)
  .then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.use('/questions', questionRoute);

// unknownEndpoint handling middleware
app.use(unknownEndpoint);

// error handling middleware
app.use(errorHandlingMiddleware);

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`litsening in port ${port}`);
});
