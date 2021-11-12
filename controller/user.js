const User = require('../models/user');

exports.seeAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
  } catch (error) {}
};
