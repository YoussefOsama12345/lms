const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progress.controller');
const ROUTES = require('../constants/paths');

router.get(ROUTES.PROGRESS.GET_COURSE_PROGRESS, progressController.getCourseProgress);
router.post(ROUTES.PROGRESS.SET_MARKDOWN, progressController.setMarkdown);

module.exports = router;
