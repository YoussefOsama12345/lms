const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz.controller');

router.get('/quizzes/get-all-quizzes', quizController.getAllQuizzes);
router.get('/quizzes/get-quiz/:quizId', quizController.getQuizById);
router.post('/quizzes/create-quiz', quizController.createQuiz);
router.put('/quizzes/update-quiz/:quizId', quizController.updateQuiz);
router.delete('/quizzes/delete-quiz/:quizId', quizController.deleteQuiz);

module.exports = router;
