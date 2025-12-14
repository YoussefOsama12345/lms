const jwt = require('../utils/jwt.util');
const usersRepository = require('../modules/users/users.repository');

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Authorization token required',
            });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verifyToken(token);

        if (!decoded?.id) {
            return res.status(401).json({
                success: false,
                message: 'Invalid or expired token',
            });
        }

        const user = await usersRepository.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized',
            });
        }

        req.user = user;
        next();
    } catch {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized',
        });
    }
};



module.exports = {
    verifyToken,
    authorize
};
