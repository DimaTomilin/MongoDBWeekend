const Comment = require('./models/comment');

exports.seeAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    console.log(comments);
  } catch (error) {}
};

exports.allCommentsOfGreg = async (req, res) => {
  try {
    const comments = await Comment.find({ username: 'GoodGuyGreg' });
    console.log(comments);
  } catch (error) {}
};

exports.allCommentsOfSteve = async (req, res) => {
  try {
    const comments = await Comment.find({ username: 'ScumbagSteve' });
    console.log(comments);
  } catch (error) {}
};

exports.allCommentsOfSteve = async (req, res) => {
  try {
    const comments = await Comment.find({ post: 'Reports a bug in your code' });
    console.log(comments);
  } catch (error) {}
};
