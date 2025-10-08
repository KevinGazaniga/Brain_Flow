const { PrismaClient } = require("../prisma/generated/prisma");
const db = new PrismaClient();

module.exports = { db };