const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lesson.controller');

router.get('/lessons/get-all-lessons', lessonController.getAllLessons);
router.get('/lessons/get-lesson/:lessonId', lessonController.getLessonById);
router.post('/lessons/create-lesson', lessonController.createLesson);
router.put('/lessons/update-lesson/:lessonId', lessonController.updateLesson);
router.delete('/lessons/delete-lesson/:lessonId', lessonController.deleteLesson);

module.exports = router;
