const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');

router.get('/courses/get-all-courses', courseController.getAllCourses);
router.get('/courses/get-course/:courseId', courseController.getCourseById);
router.post('/courses/create-course', courseController.createCourse);
router.put('/courses/update-course/:courseId', courseController.updateCourse);
router.delete('/courses/delete-course/:courseId', courseController.deleteCourse);

module.exports = router;
