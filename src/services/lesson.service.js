const lessonRepository = require('../reposatory/lesson.repository');

const getAllLessons = async () => {
    return await lessonRepository.findAll({
        course: true,
    });
};

const getLessonById = async lessonId => {
    return await lessonRepository.findById(lessonId, {
        course: true,
        quizzes: true,
    });
};

const createLesson = async lessonData => {
    if (lessonData.order) lessonData.order = parseInt(lessonData.order);
    return await lessonRepository.create(lessonData);
};

const updateLesson = async (lessonId, lessonData) => {
    if (lessonData.order) lessonData.order = parseInt(lessonData.order);
    return await lessonRepository.update(lessonId, lessonData);
};

const deleteLesson = async lessonId => {
    return await lessonRepository.remove(lessonId);
};

const lessonService = {
    getAllLessons,
    getLessonById,
    createLesson,
    updateLesson,
    deleteLesson,
};

module.exports = lessonService;
