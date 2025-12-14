const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollment.controller');

router.post('/enrollments/enroll/:courseId', enrollmentController.enrollUser);
router.get('/enrollments/user/:userId', enrollmentController.getUserEnrollments);
router.get('/enrollments/cancel/:courseId', enrollmentController.checkEnrollment); // Keeping controller method checkEnrollment mapped to CANCEL path key as per original file

module.exports = router;
