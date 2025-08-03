const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignment.controller');

router.get('/assignments/get-all-assignments', assignmentController.getAllAssignments);
router.get('/assignments/get-assignment/:id', assignmentController.getAssignmentById);
router.post('/assignments/create-assignment', assignmentController.createAssignment);
router.put('/assignments/update-assignment/:id', assignmentController.updateAssignment);
router.delete('/assignments/delete-assignment/:id', assignmentController.deleteAssignment);

module.exports = router;
