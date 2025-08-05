const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lesson.controller');
const ROUTES = require('../constants/paths');

router.get(ROUTES.LESSON.GET_ALL_LESSONS, lessonController.getAllLessons);
router.get(ROUTES.LESSON.GET_LESSON, lessonController.getLessonById);
router.post(ROUTES.LESSON.CREATE_LESSON, lessonController.createLesson);
router.put(ROUTES.LESSON.UPDATE_LESSON, lessonController.updateLesson);
router.delete(ROUTES.LESSON.DELETE_LESSON, lessonController.deleteLesson);

module.exports = router;
