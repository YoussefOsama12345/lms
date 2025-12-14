const prisma = require('../config/db.config');

const findAll = async (include = {}) => {
    return await prisma.lesson.findMany({
        include: Object.keys(include).length > 0 ? include : undefined
    });
};

const findById = async (id, include = {}) => {
    return await prisma.lesson.findUnique({
        where: { id },
        include: Object.keys(include).length > 0 ? include : undefined
    });
};

const create = async (data) => {
    return await prisma.lesson.create({
        data,
    });
};

const update = async (id, data) => {
    return await prisma.lesson.update({
        where: { id },
        data,
    });
};

const remove = async (id) => {
    return await prisma.lesson.delete({
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
