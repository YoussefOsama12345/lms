const prisma = require('./db.config');

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log('Prisma Connected Successfully');
    } catch (error) {
        console.error('Prisma Connection Failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
