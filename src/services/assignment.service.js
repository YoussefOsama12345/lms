const assignmentRepository = require('../reposatory/assignment.repository');

const getAllAssignments = async () => {
    return await assignmentRepository.findAll();
};

const getAssignmentById = async assignmentId => {
    return await assignmentRepository.findById(assignmentId);
};

const createAssignment = async assignmentData => {
    return await assignmentRepository.create(assignmentData);
};

const updateAssignment = async (assignmentId, assignmentData) => {
    return await assignmentRepository.update(assignmentId, assignmentData);
};

const deleteAssignment = async assignmentId => {
    return await assignmentRepository.remove(assignmentId);
};

const assignmentService = {
    getAllAssignments,
    getAssignmentById,
    createAssignment,
    updateAssignment,
    deleteAssignment,
};

module.exports = assignmentService;
