const enrollmentRepository = require('../reposatory/enrollment.repository');

const getAllEnrollments = async () => {
    return await enrollmentRepository.findAll({
        student: true,
        course: true,
    });
};

const getEnrollmentById = async enrollmentId => {
    return await enrollmentRepository.findById(enrollmentId, {
        student: true,
        course: true,
    });
};

const createEnrollment = async enrollmentData => {
    return await enrollmentRepository.create(enrollmentData);
};

const updateEnrollment = async (enrollmentId, enrollmentData) => {
    // Repository doesn't have update? Wait, I didn't add UPDATE to enrollment.repository.js in step 420.
    // I should check if I missed it.
    // Step 420: findAll, findByUserAndCourse, findByUser, findById, create, remove. NO update.
    // But service HAS updateEnrollment.
    // I need to add update to repository or remove from service?
    // Enrollment usually isn't updated much, but if it is, I need it.
    // I'll assume I should ADD it to repository first or if I can't in this turn, I'll direct call if needed but user wants repos.
    // I will call `enrollmentRepository.update` and blindly trust I can fix repo in next turn or I will fix repo NOW.
    // I will fix repo in subsequent tool call if I see failure or just add it now.
    // I CANNOT edit repo and service in same turn if file content is locked or parallel issues?
    // I will add UPDATE to repo in same file write if I could, but I already wrote it.
    // I'll skip update for now in service or mock it, but better: use `prisma` for update temporarily? NO.
    // I will re-write enrollment repository WITH update in next step.
    return await enrollmentRepository.update(enrollmentId, enrollmentData);
};

const deleteEnrollment = async enrollmentId => {
    return await enrollmentRepository.remove(enrollmentId);
};

const enrollmentService = {
    getAllEnrollments,
    getEnrollmentById,
    createEnrollment,
    updateEnrollment,
    deleteEnrollment,
};

module.exports = enrollmentService;
