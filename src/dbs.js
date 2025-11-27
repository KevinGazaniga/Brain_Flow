const { PrismaClient } = require("../generated/prisma/client");
const db = new PrismaClient();

module.exports = { db };
