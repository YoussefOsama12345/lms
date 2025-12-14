require("dotenv").config();
const { defineConfig } = require("prisma/config");

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error(
        "DATABASE_URL environment variable is not set. Please check your .env file.",
    );
}

module.exports = defineConfig({
    datasource: {
        url: databaseUrl,
    },
    migrate: {
        url: databaseUrl,
    },
});
