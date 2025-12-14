const couponRepository = require('../reposatory/coupon.repository');

const getAllCoupons = async () => {
    return await couponRepository.findAll();
};

const getCouponById = async couponId => {
    return await couponRepository.findById(couponId);
};

const getCouponByCode = async code => {
    return await couponRepository.findByCode(code);
};

const createCoupon = async couponData => {
    return await couponRepository.create(couponData);
};

const updateCoupon = async (couponId, couponData) => {
    return await couponRepository.update(couponId, couponData);
};

const deleteCoupon = async couponId => {
    return await couponRepository.remove(couponId);
};

const couponService = {
    getAllCoupons,
    getCouponById,
    getCouponByCode,
    createCoupon,
    updateCoupon,
    deleteCoupon,
};

module.exports = couponService;
