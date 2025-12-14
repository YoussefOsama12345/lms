const prisma = require('../config/db.config');

const findAll = async (include = {}) => {
    return await prisma.enrollment.findMany({
        include: Object.keys(include).length > 0 ? include : undefined
    });
};

const findByUserAndCourse = async (userId, courseId) => {
    return await prisma.enrollment.findUnique({
        where: {
            userId_courseId: {
                userId,
                courseId
            }
        }
    });
};

const findByUser = async (userId, include = {}) => {
    return await prisma.enrollment.findMany({
        where: { userId },
        include: Object.keys(include).length > 0 ? include : undefined
    });
};

const findById = async (id, include = {}) => {
    return await prisma.enrollment.findUnique({
        where: { id },
        include: Object.keys(include).length > 0 ? include : undefined
    });
};

const create = async (data) => {
    return await prisma.enrollment.create({
        data,
    });
};

const update = async (id, data) => {
    return await prisma.enrollment.update({
        where: { id },
        data,
    });
};

const remove = async (id) => {
    return await prisma.enrollment.delete({
        where: { id },
    });
};

module.exports = {
    findAll,
    findByUserAndCourse,
    findByUser,
    findById,
    create,
    update,
    remove
};
