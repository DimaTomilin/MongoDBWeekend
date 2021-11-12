const Student = require('../models/student.js');

exports.seeAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    console.log(students);
  } catch (error) {}
};

exports.studentsByName = async (req, res) => {
  try {
    const students = await Student.find({ name: 'Ido' });
    console.log(students);
  } catch (error) {}
};

exports.studentsByCourse = async (req, res) => {
  try {
    const students = await Student.find({ courses: 'Law' });
    console.log(students);
  } catch (error) {}
};

exports.girlStudentsByCourse = async (req, res) => {
  try {
    const students = await Student.find({
      $and: [{ courses: 'Java' }, { gender: 'Female' }],
    });
    console.log(students);
  } catch (error) {}
};

exports.studentsYoungerThen = async (req, res) => {
  try {
    const students = await Student.find({
      birth: { $lt: new Date('05-05-1998') },
    });
    console.log(students);
  } catch (error) {}
};

exports.studentsByStartPhone = async (req, res) => {
  try {
    const students = await Student.find({ phone: { $regex: '^054' } });
    console.log(students);
  } catch (error) {}
};

exports.addCourseToStudent = async (req, res) => {
  try {
    await Student.updateMany(
      { name: 'Yahalom' },
      { $push: { courses: 'JavaScript' } }
    );
    console.log('succeded');
  } catch (error) {}
};

exports.updateBirthToStudent = async (req, res) => {
  try {
    await Student.updateMany(
      { name: 'Koren' },
      { $set: { birth: new Date('02-12-1998') } }
    );
    console.log('succeded');
  } catch (error) {}
};

exports.studentsByNameChar = async (req, res) => {
  try {
    const students = await Student.find({ name: { $regex: 'o' } });
    console.log(students);
  } catch (error) {}
};

exports.studentsBySurnameChar = async (req, res) => {
  try {
    const students = await Student.find({
      $or: [{ surName: { $regex: 'h' } }, { surName: { $regex: 'y' } }],
    });

    console.log(students);
  } catch (error) {}
};

exports.deleteByName = async (req, res) => {
  try {
    await Student.deleteMany({ name: 'Ido' });
    console.log('deleted');
  } catch (error) {}
};

exports.deleteByDate = async (req, res) => {
  try {
    await Student.deleteMany({ birth: new Date('04/02/1998') });
    console.log('deleted');
  } catch (error) {}
};
//put all your user functions here :
