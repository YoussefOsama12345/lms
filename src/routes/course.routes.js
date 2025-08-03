const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');

router.get('/courses/get-all-courses', courseController.getAllCourses);
router.get('/courses/get-course/:id', courseController.getCourseById);
router.post('/courses/create-course', courseController.createCourse);
router.post('/courses/:id/enroll', courseController.enrollCourse);
router.put('/courses/update-course/:id', courseController.updateCourse);
router.delete('/courses/delete-course/:id', courseController.deleteCourse);
