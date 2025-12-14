const prisma = require('../config/db.config');

const findAll = async () => {
    return await prisma.category.findMany();
};

const findById = async (id) => {
    return await prisma.category.findUnique({
        where: { id },
    });
};

const create = async (data) => {
    return await prisma.category.create({
        data,
    });
};

const update = async (id, data) => {
    return await prisma.category.update({
        where: { id },
        data,
    });
};

const remove = async (id) => {
    return await prisma.category.delete({
        where: { id },
    });
};

const findBySlug = async (slug) => {
    return await prisma.category.findUnique({
        where: { slug },
    });
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
    findBySlug
};
