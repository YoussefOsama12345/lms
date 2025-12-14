const prisma = require('../config/db.config');

const findAll = async () => {
    return await prisma.user.findMany();
};

const findById = async (id) => {
    return await prisma.user.findUnique({
        where: { id },
    });
};

const findByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email },
    });
};

const create = async (data) => {
    return await prisma.user.create({
        data,
    });
};

const update = async (id, data) => {
    return await prisma.user.update({
        where: { id },
        data,
    });
};

const remove = async (id) => {
    return await prisma.user.delete({
        where: { id },
    });
};

module.exports = {
    findAll,
    findById,
    findByEmail,
    create,
    update,
    remove,
};
