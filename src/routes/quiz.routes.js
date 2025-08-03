const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz.controller');

router.get('/quizzes/get-all-quizzes', quizController.getAllQuizzes);
router.get('/quizzes/get-quiz/:id', quizController.getQuizById);
router.post('/quizzes/create-quiz', quizController.createQuiz);
router.put('/quizzes/update-quiz/:id', quizController.updateQuiz);
router.delete('/quizzes/delete-quiz/:id', quizController.deleteQuiz);

module.exports = router;
