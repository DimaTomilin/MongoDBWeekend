const mongoose = require('mongoose');
const Student = require('./models/student');
const Post = require('./models/post');
const Comment = require('./models/comment');
const dotenv = require('dotenv');
dotenv.config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected'));

const studentList = [
  {
    name: 'Ido',
    surName: 'Arbel',
    birth: new Date('01/26/1998'),
    phone: '0526305421',
    gender: 'Male',
    courses: ['Java', 'Math'],
  },
  {
    name: 'Chen',
    surName: 'Halevi',
    birth: new Date('03/11/1997'),
    phone: '0526323421',
    gender: 'Male',
    courses: ['Math', 'Law'],
  },
  {
    name: 'Koren',
    surName: 'Gan-or',
    birth: new Date('01/19/1997'),
    phone: '0526305321',
    gender: 'Male',
    courses: ['JavaScript', 'Finance', 'Law'],
  },
  {
    name: 'Oryan',
    surName: 'Levy',
    birth: new Date('04/02/1998'),
    phone: '0542305321',
    gender: 'Male',
    courses: ['JavaScript', 'Law'],
  },
  {
    name: 'Yahalom',
    surName: 'Cohen',
    birth: new Date('11/03/1993'),
    phone: '0542305392',
    gender: 'Female',
    courses: ['Java', 'Law'],
  },
];

const newPosts = Post.insertMany([
  {
    username: 'GoodGuyGreg',
    title: 'Passes out at party',
    body: 'Wakes up early and cleans house',
  },
  {
    username: 'GoodGuyGreg',
    title: 'Steals your identity',
    body: 'Raises your credit score',
  },
  {
    username: 'GoodGuyGreg',
    title: 'Reports a bug in your code',
    body: 'Sends you a Pull Request',
  },
  { username: 'ScumbagSteve', title: 'Borrows something', body: 'Sells it' },
  { username: 'ScumbagSteve', title: 'Borrows everything', body: 'The end' },
  {
    username: 'ScumbagSteve',
    title: 'Forks your repo on github',
    body: 'Sets to private',
  },
]);

const newComments = Comment.insertMany([
  {
    username: 'GoodGuyGreg',
    comment: 'Hope you got a good deal!',
    post: '618e5143ba4dd92cd88603eb',
  },
  {
    username: 'GoodGuyGreg',
    comment: "What's mine is yours!",
    post: '618e5143ba4dd92cd88603ec',
  },
  {
    username: 'GoodGuyGreg',
    comment: "Don't violate the licensing agreement!",
    post: '618e5143ba4dd92cd88603ed',
  },
  {
    username: 'ScumbagSteve',
    comment: "It still isn't clean",
    post: '618e5143ba4dd92cd88603e8',
  },
  {
    username: 'ScumbagSteve',
    comment: 'Denied your PR cause I found a hack',
    post: '618e5143ba4dd92cd88603ea',
  },
]);

// for (const student of studentList) {
//   Student.create(student)
//     .then(function () {
//       console.log('Data inserted'); // Success
//     })
//     .catch(function (error) {
//       console.log(error); // Failure
//     });
// }
