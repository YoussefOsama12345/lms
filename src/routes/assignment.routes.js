const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignment.controller');

router.get('/assignments/get-all-assignments', assignmentController.getAllAssignments);
router.get('/assignments/get-assignment/:assignmentId', assignmentController.getAssignmentById);
router.post('/assignments/create-assignment', assignmentController.createAssignment);
router.put('/assignments/update-assignment/:assignmentId', assignmentController.updateAssignment);
router.delete('/assignments/delete-assignment/:assignmentId', assignmentController.deleteAssignment);

module.exports = router;
