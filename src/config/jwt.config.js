require("dotenv").config();

module.exports = {
    accessTokenSecret: process.env.JWT_ACCESS_SECRET || "access_secret_key",
    accessTokenExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",
    refreshTokenSecret: process.env.JWT_REFRESH_SECRET || "refresh_secret_key",
    refreshTokenExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "30d",
    issuer: process.env.JWT_ISSUER || "SoftwareAgencyBackend",
    audience: process.env.JWT_AUDIENCE || "SoftwareAgencyClient",
    algorithm: process.env.JWT_ALGORITHM || "HS256",
};
