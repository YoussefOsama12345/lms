const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');
const ROUTES = require('../constants/paths');


router.get(ROUTES.COURSE.GET_ALL_COURSES, courseController.getAllCourses);
router.get(ROUTES.COURSE.GET_COURSE, courseController.getCourseById);
router.post(ROUTES.COURSE.CREATE_COURSE, courseController.createCourse);
router.put(ROUTES.COURSE.UPDATE_COURSE, courseController.updateCourse);
router.delete(ROUTES.COURSE.DELETE_COURSE, courseController.deleteCourse);

module.exports = router;
