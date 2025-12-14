const courseService = require('../services/course.service');
const { validateCourse } = require('../validators/course.validator');
const STATUS_CODES = require('../constants/status.constants');

const createCourse = async (req, res) => {
  try {
    const validatedData = validateCourse(req.body);
    const course = await courseService.createCourse(validatedData);
    res.status(STATUS_CODES.CREATED).json({
      message: 'Course created successfully',
      course,
    });
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      error: 'Failed to create course',
      details: error.message,
    });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await courseService.getAllCourses();
    res.status(STATUS_CODES.OK).json(courses);
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      error: 'Failed to fetch courses',
      details: error.message,
    });
  }
};

const getCourseById = async (req, res) => {
  const { courseId } = req.params;
  try {
    const course = await courseService.getCourseById(courseId);
    if (!course) {
      return res.status(STATUS_CODES.NOT_FOUND).json({ error: 'Course not found' });
    }
    res.status(STATUS_CODES.OK).json({
      message: 'Course fetched successfully',
      course,
    });
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      error: 'Failed to fetch course',
      details: error.message,
    });
  }
};

const updateCourse = async (req, res) => {
  const { courseId } = req.params;
  try {
    const validatedData = validateCourse(req.body);
    validatedData._id = courseId;

    const updatedCourse = await courseService.updateCourse(courseId, validatedData);
    if (!updatedCourse) {
      return res.status(STATUS_CODES.NOT_FOUND).json({ error: 'Course not found' });
    }
    res.status(STATUS_CODES.OK).json({
      message: 'Course updated successfully',
      course: updatedCourse,
    });
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      error: 'Failed to update course',
      details: error.message,
    });
  }
};

const deleteCourse = async (req, res) => {
  const { courseId } = req.params;
  try {
    const deletedCourse = await courseService.deleteCourse(courseId);
    if (!deletedCourse) {
      return res.status(STATUS_CODES.NOT_FOUND).json({ error: 'Course not found' });
    }
    res.status(STATUS_CODES.OK).json({
      message: 'Course deleted successfully',
      course: deletedCourse,
    });
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      error: 'Failed to delete course',
      details: error.message,
    });
  }
};

const courseController = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};

module.exports = courseController;
