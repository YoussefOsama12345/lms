const prisma = require('../config/db.config');

const findAll = async () => {
    return await prisma.coupon.findMany();
};

const findById = async (id) => {
    return await prisma.coupon.findUnique({
        where: { id },
    });
};

const findByCode = async (code) => {
    return await prisma.coupon.findUnique({
        where: { code },
    });
};

const create = async (data) => {
    return await prisma.coupon.create({
        data,
    });
};

const update = async (id, data) => {
    return await prisma.coupon.update({
        where: { id },
        data,
    });
};

const remove = async (id) => {
    return await prisma.coupon.delete({
        where: { id },
    });
};

module.exports = {
    findAll,
    findById,
    findByCode,
    create,
    update,
    remove
};
