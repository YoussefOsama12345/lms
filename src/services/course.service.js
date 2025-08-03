const Course = require('../models/Course.model');

const getAllCourses = async () => {
  return await Course.find();
};

const getCourseById = async (courseId) => {
  return await Course.findById(courseId);
};

const createCourse = async (courseData) => {
  const course = new Course(courseData);
  await course.save();
  return course;
};

const updateCourse = async (courseId, courseData) => {
  return await Course.findByIdAndUpdate(courseId, courseData, { new: true });
};

const deleteCourse = async (courseId) => {
  return await Course.findByIdAndDelete(courseId);
};

const courseService = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
};

module.exports = courseService;
