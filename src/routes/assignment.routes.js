const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignment.controller');
const ROUTES = require('../constants/paths')

router.get(ROUTES.ASSIGNMENT.GET_ALL_ASSIGNMENTS, assignmentController.getAllAssignments);
router.get(ROUTES.ASSIGNMENT.GET_ASSIGNMENT, assignmentController.getAssignmentById);
router.post(ROUTES.ASSIGNMENT.CREATE_ASSIGNMENT, assignmentController.createAssignment);
router.put(ROUTES.ASSIGNMENT.UPDATE_ASSIGNMENT, assignmentController.updateAssignment);
router.delete(ROUTES.ASSIGNMENT.DELETE_ASSIGNMENT, assignmentController.deleteAssignment);

module.exports = router;
