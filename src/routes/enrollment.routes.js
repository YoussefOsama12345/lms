const express = require('express')
const router = express.Router()
const ROUTES = require('../constants/paths')
const enrollmentController = require('../controllers/enrollment.controller')


router.post('/enrollments', enrollmentController.enrollUser);
router.get('/enrollments/my', enrollmentController.getUserEnrollments);
router.get('/enrollments/:courseId/check', enrollmentController.checkEnrollment);

module.exports = router;
