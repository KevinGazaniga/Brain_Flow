import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    // 💡 Use process.env directly instead of a non-existent 'env' function.
    url: env("DATABASE_URL"),
  },
});
