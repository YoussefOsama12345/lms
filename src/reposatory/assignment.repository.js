const prisma = require('../config/db.config');

const findAll = async () => {
    return await prisma.assignment.findMany();
};

const findById = async (id) => {
    return await prisma.assignment.findUnique({
        where: { id },
    });
};

const create = async (data) => {
    return await prisma.assignment.create({
        data,
    });
};

const update = async (id, data) => {
    return await prisma.assignment.update({
        where: { id },
        data,
    });
};

const remove = async (id) => {
    return await prisma.assignment.delete({
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
