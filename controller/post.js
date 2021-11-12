const Post = require('./models/post');

exports.seeAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    console.log(posts);
  } catch (error) {}
};

exports.allPostsOfGreg = async (req, res) => {
  try {
    const posts = await Post.find({ username: 'GoodGuyGreg' });
    console.log(posts);
  } catch (error) {}
};

exports.allPostsOfSteve = async (req, res) => {
  try {
    const posts = await Post.find({ username: 'ScumbagSteve' });
    console.log(posts);
  } catch (error) {}
};
