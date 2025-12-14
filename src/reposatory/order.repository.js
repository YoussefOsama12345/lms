const prisma = require('../config/db.config');

const findAll = async () => {
    return await prisma.order.findMany();
};

const findById = async (id) => {
    return await prisma.order.findUnique({
        where: { id },
    });
};

const findByUser = async (userId) => {
    return await prisma.order.findMany({
        where: { userId },
    });
};

const create = async (data) => {
    return await prisma.order.create({
        data,
    });
};

// Orders usually aren't updated except status, but generic update is fine
const update = async (id, data) => {
    return await prisma.order.update({
        where: { id },
        data,
    });
};

const remove = async (id) => {
    return await prisma.order.delete({
        where: { id },
    });
};

module.exports = {
    findAll,
    findById,
    findByUser,
    create,
    update,
    remove
};
