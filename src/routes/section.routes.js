const express = require('express')
const router = express.Router()
const ROUTES = require('../constants/paths')
const sectionController = require('../controllers/section.controller')

router.get('/courses/:courseId/sections', sectionController.getCourseSections);
router.post('/courses/:courseId/create-section', sectionController.addSection);
router.patch('/sections/:sectionId/update-section', sectionController.updateSection);
router.delete('/sections/:sectionId/delete-section', sectionController.deleteSection);

module.exports = router;
