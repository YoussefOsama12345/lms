const prisma = require('../config/db.config');

const findAll = async (include = {}) => {
    return await prisma.course.findMany({
        include,
    });
};

const findById = async (id, include = {}) => {
    return await prisma.course.findUnique({
        where: { id },
        include,
    });
};

const create = async (data) => {
    return await prisma.course.create({
        data,
    });
};

const update = async (id, data) => {
    return await prisma.course.update({
        where: { id },
        data,
    });
};

const remove = async (id) => {
    return await prisma.course.delete({
        where: { id },
    });
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
};
