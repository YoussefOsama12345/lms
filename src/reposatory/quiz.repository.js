const prisma = require('../config/db.config');

const findAll = async (include = {}) => {
    return await prisma.quiz.findMany({
        include: Object.keys(include).length > 0 ? include : undefined
    });
};

const findById = async (id, include = {}) => {
    return await prisma.quiz.findUnique({
        where: { id },
        include: Object.keys(include).length > 0 ? include : undefined
    });
};

const create = async (data) => {
    return await prisma.quiz.create({
        data,
    });
};

const update = async (id, data) => {
    return await prisma.quiz.update({
        where: { id },
        data,
    });
};

const remove = async (id) => {
    return await prisma.quiz.delete({
        where: { id },
    });
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};
