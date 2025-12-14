const prisma = require('../config/db.config');

const findAll = async () => {
    return await prisma.certificate.findMany();
};

const findById = async (id) => {
    return await prisma.certificate.findUnique({
        where: { id },
    });
};

const create = async (data) => {
    return await prisma.certificate.create({
        data,
    });
};

const update = async (id, data) => {
    return await prisma.certificate.update({
        where: { id },
        data,
    });
};

const remove = async (id) => {
    return await prisma.certificate.delete({
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
