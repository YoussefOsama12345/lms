const quizRepository = require('../reposatory/quiz.repository');

const getAllQuizzes = async () => {
    return await quizRepository.findAll();
};

const getQuizById = async quizId => {
    return await quizRepository.findById(quizId, {
        questions: true
    });
};

const createQuiz = async quizData => {
    if (quizData.timeLimit) quizData.timeLimit = parseInt(quizData.timeLimit);
    return await quizRepository.create(quizData);
};

const updateQuiz = async (quizId, quizData) => {
    if (quizData.timeLimit) quizData.timeLimit = parseInt(quizData.timeLimit);
    return await quizRepository.update(quizId, quizData);
};

const deleteQuiz = async quizId => {
    return await quizRepository.remove(quizId);
};

const quizService = {
    getAllQuizzes,
    getQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz,
};

module.exports = quizService;
