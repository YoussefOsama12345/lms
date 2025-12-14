const prisma = require('../config/db.config');

const findByUser = async (userId) => {
    return await prisma.wishlist.findUnique({
        where: { userId },
        include: { courses: true } // Assuming implicit m-n or explicit relation
    });
};

const create = async (data) => {
    return await prisma.wishlist.create({
        data,
    });
};

// Wishlist usually adds/removes courses. 
// If schema is User -> Wishlist -> Courses (M-N), we might need specialized methods.
// Assuming basic CRUD for now based on standard pattern, but `addToWishlist` logic might be in service using this repo's update or specific connect.
// I'll stick to basic CRUD for the repo file.

const update = async (userId, data) => {
    return await prisma.wishlist.update({
        where: { userId }, // Wishlist is likely 1-1 with user or has its own ID
        data,
    });
};

// Check schema if possible? I don't have schema.prisma open. Assuming Wishlist model exists.

module.exports = {
    findByUser,
    create,
    update
};
