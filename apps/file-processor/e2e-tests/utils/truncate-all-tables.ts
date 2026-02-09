import { PrismaService } from "../../src/utils/prisma/prisma.service";

export async function truncateAllTables(prisma: PrismaService) {
   const bankuishTablenames = (
      await prisma.$queryRaw<
         Array<{ tablename: string }>
      >`SELECT tablename FROM pg_tables WHERE schemaname='trips'`
   )
      .map(({ tablename }) => tablename)
      .filter((name) => name !== "_prisma_migrations")
      .map((name) => `"trips"."${name}"`);

   const tableNames = [...bankuishTablenames].join(", ");

   try {
      await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tableNames} CASCADE;`);
   } catch (error) {
      console.log({ error });
   }
}
