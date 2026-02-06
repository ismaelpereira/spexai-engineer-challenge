import { defineConfig, env } from "prisma/config";

export default defineConfig({
   schema: "./schema/schema.prisma",
   migrations: {
      path: "./migrations",
   },
   datasource: { 
      // url: env("DATABASE_URL") 
      url: "postgresql://postgres:pass@localhost:5432/trips"
   },
});
