const courseRepository = require('../reposatory/course.repository');

const getAllCourses = async () => {
  return await courseRepository.findAll({
    include: {
      instructor: true,
      // sections: true, 
    }
  });
};

const getCourseById = async courseId => {
  return await courseRepository.findById(courseId, {
    include: {
      instructor: true,
      sections: {
        include: {
          lessons: true
        }
      }
    }
  });
};

const createCourse = async courseData => {
  // Ensure strict types
  if (courseData.price) courseData.price = parseFloat(courseData.price);
  if (courseData.duration) courseData.duration = parseFloat(courseData.duration);

  return await courseRepository.create(courseData);
};

const updateCourse = async (courseId, courseData) => {
  if (courseData.price) courseData.price = parseFloat(courseData.price);
  if (courseData.duration) courseData.duration = parseFloat(courseData.duration);

  return await courseRepository.update(courseId, courseData);
};

const deleteCourse = async courseId => {
  return await courseRepository.remove(courseId);
};

const courseService = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};

module.exports = courseService;
