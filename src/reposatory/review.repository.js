const prisma = require('../config/db.config');

const findAll = async () => {
    return await prisma.review.findMany();
};

const findById = async (id) => {
    return await prisma.review.findUnique({
        where: { id },
    });
};

const create = async (data) => {
    return await prisma.review.create({
        data,
    });
};

const update = async (id, data) => {
    return await prisma.review.update({
        where: { id },
        data,
    });
};

const remove = async (id) => {
    return await prisma.review.delete({
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
