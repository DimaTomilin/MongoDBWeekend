const mongoose = require('mongoose');
const Student = require('./models/student');
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

for (const student of studentList) {
  Student.create(student)
    .then(function () {
      console.log('Data inserted'); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
}
