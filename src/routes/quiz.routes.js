const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz.controller');
const ROUTES = require('../constants/paths');

router.get(ROUTES.QUIZ.GET_ALL_QUIZZES, quizController.getAllQuizzes);
router.get(ROUTES.QUIZ.GET_QUIZ, quizController.getQuizById);
router.post(ROUTES.QUIZ.CREATE_QUIZ, quizController.createQuiz);
router.put(ROUTES.QUIZ.UPDATE_QUIZ, quizController.updateQuiz);
router.delete(ROUTES.QUIZ.DELETE_QUIZ, quizController.deleteQuiz);

module.exports = router;
