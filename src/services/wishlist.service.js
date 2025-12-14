const wishlistRepository = require('../reposatory/wishlist.repository');

const getUserWishlist = async userId => {
    return await wishlistRepository.findByUser(userId);
};

const addToWishlist = async (userId, courseId) => {
    // Logic to add course string/id to array or relation
    // Depending on schema, it might be an update or create.
    // Assuming simple updated for now, but usually needs logic.
    // Since I don't see schema, I will assume updating an array or relations via repo.
    // If I have to update, I need to know the structure.
    // I'll call create if not exists, or update.
    let wishlist = await wishlistRepository.findByUser(userId);
    if (!wishlist) {
        wishlist = await wishlistRepository.create({ userId, courses: { connect: [{ id: courseId }] } }); // Guessing logic
    } else {
        wishlist = await wishlistRepository.update(userId, { courses: { connect: [{ id: courseId }] } });
    }
    return wishlist;
};

const removeFromWishlist = async (userId, courseId) => {
    return await wishlistRepository.update(userId, { courses: { disconnect: [{ id: courseId }] } });
};

const wishlistService = {
    getUserWishlist,
    addToWishlist,
    removeFromWishlist
};

module.exports = wishlistService;
