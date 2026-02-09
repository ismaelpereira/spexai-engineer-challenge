import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import request from "supertest";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/utils/prisma/prisma.service";
import { truncateAllTables } from "./utils/truncate-all-tables";
import * as path from "path";

describe("FileProcessorController e2e", () => {
   let app: INestApplication;
   let prisma: PrismaService;

   beforeAll(async () => {
      const moduleRef = await Test.createTestingModule({
         imports: [AppModule],
      }).compile();

      app = moduleRef.createNestApplication();
      await app.init();

      prisma = app.get(PrismaService);
   });

   afterEach(async () => {
      await truncateAllTables(prisma);
      jest.resetAllMocks();
   });

   afterAll(async () => {
      await app.close();
   });

   describe("POST /trips", () => {
      it("should ingest CSV file successfully", async () => {
         const result = await request(app.getHttpServer())
            .post("/trips")
            .attach("file", path.join(__dirname, "fixtures", "valid-trips.csv"));

         expect(result.status).toBe(201);
         expect(result.body).toEqual({
            message: "File Ingestion started",
            filename: "valid-trips.csv",
         });
      });

      it("should return 400 if file is not sent", async () => {
         const result = await request(app.getHttpServer()).post("/trips");

         expect(result.status).toBe(400);
         expect(result.body.message).toBe("CSV File is required");
      });

      it("should return 400 if file is not a CSV", async () => {
         const result = await request(app.getHttpServer())
            .post("/trips")
            .attach("file", path.join(__dirname, "fixtures", "not-a-csv.txt"));

         expect(result.status).toBe(400);
         expect(result.body.message).toBe("File must be a CSV");
      });
   });
});
