const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const config = require("../config/jwt.config");

const signOptions = {
    algorithm: config.algorithm,
    issuer: config.issuer,
    audience: config.audience,
};

const verifyOptions = {
    algorithms: [config.algorithm],
    issuer: config.issuer,
    audience: config.audience,
};

const generateAccessToken = (payload) => {
    return jwt.sign(payload, config.accessTokenSecret, {
        ...signOptions,
        expiresIn: config.accessTokenExpiresIn,
        jwtid: crypto.randomUUID(),
    });
};

const generateRefreshToken = (payload) => {
    return jwt.sign(payload, config.refreshTokenSecret, {
        ...signOptions,
        expiresIn: config.refreshTokenExpiresIn,
        jwtid: crypto.randomUUID(),
    });
};

const verifyAccessToken = (token) => {
    return jwt.verify(token, config.accessTokenSecret, verifyOptions);
};

const verifyRefreshToken = (token) => {
    return jwt.verify(token, config.refreshTokenSecret, verifyOptions);
};

const decodeToken = (token) => {
    return jwt.decode(token);
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken,
    decodeToken,
};