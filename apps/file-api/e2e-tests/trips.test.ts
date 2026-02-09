import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import request from "supertest";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/utils/prisma/prisma.service";
import { TripsService } from "../src/domains/trips/trips.service";
import { truncateAllTables } from "./utils/truncate-all-tables";

describe("TripsController e2e", () => {
   let app: INestApplication;
   let prisma: PrismaService;
   let tripsService: TripsService;

   beforeAll(async () => {
      const moduleRef = await Test.createTestingModule({
         imports: [AppModule],
      }).compile();

      app = moduleRef.createNestApplication();
      await app.init();

      prisma = app.get(PrismaService);
      tripsService = app.get(TripsService);
   });

   afterEach(async () => {
      await truncateAllTables(prisma);
      jest.restoreAllMocks();
   });

   afterAll(async () => {
      await app.close();
   });

   describe("GET /trips/weekly-average", () => {
      it("should return weekly average trips for a region and bounding box", async () => {
         await prisma.trips_group.createMany({
            data: [
               {
                  region: "Prague",
                  originLat: 50.00136875782316,
                  originLon: 14.4973794438195,
                  destinationLat: 50.04052930943246,
                  destinationLon: 14.43109483523328,
                  hourOfDay: 9,
                  tripCount: 1,
                  datasources: ["funny_car"],
                  firstSeenAt: new Date("2018-05-01T09:03:40Z"),
                  lastSeenAt: new Date("2018-05-01T09:03:40Z"),
               },
               {
                  region: "Prague",
                  originLat: 50.00002074358429,
                  originLon: 14.32427345662177,
                  destinationLat: 50.09339790740321,
                  destinationLon: 14.47767895969969,
                  hourOfDay: 8,
                  tripCount: 1,
                  datasources: ["cheap_mobile"],
                  firstSeenAt: new Date("2018-05-02T08:52:25Z"),
                  lastSeenAt: new Date("2018-05-02T08:52:25Z"),
               },
               {
                  region: "Prague",
                  originLat: 50.00136875782316,
                  originLon: 14.4973794438195,
                  destinationLat: 50.04052930943246,
                  destinationLon: 14.43109483523328,
                  hourOfDay: 7,
                  tripCount: 1,
                  datasources: ["funny_car"],
                  firstSeenAt: new Date("2018-05-08T09:03:40Z"),
                  lastSeenAt: new Date("2018-05-08T09:03:40Z"),
               },
               {
                  region: "Prague",
                  originLat: 50.00136875782316,
                  originLon: 14.4973794438195,
                  destinationLat: 50.04052930943246,
                  destinationLon: 14.43109483523328,
                  hourOfDay: 10,
                  tripCount: 1,
                  datasources: ["funny_car"],
                  firstSeenAt: new Date("2018-05-09T10:03:40Z"),
                  lastSeenAt: new Date("2018-05-09T10:03:40Z"),
               },
               {
                  region: "Prague",
                  originLat: 50.00002074358429,
                  originLon: 14.32427345662177,
                  destinationLat: 50.09339790740321,
                  destinationLon: 14.47767895969969,
                  hourOfDay: 11,
                  tripCount: 1,
                  datasources: ["cheap_mobile"],
                  firstSeenAt: new Date("2018-05-10T11:52:25Z"),
                  lastSeenAt: new Date("2018-05-10T11:52:25Z"),
               },
               {
                  region: "Prague",
                  originLat: 50.00002074358429,
                  originLon: 14.32427345662177,
                  destinationLat: 50.09339790740321,
                  destinationLon: 14.47767895969969,
                  hourOfDay: 12,
                  tripCount: 1,
                  datasources: ["cheap_mobile"],
                  firstSeenAt: new Date("2018-05-11T12:52:25Z"),
                  lastSeenAt: new Date("2018-05-11T12:52:25Z"),
               },
               {
                  region: "Hamburg",
                  originLat: 53.62044974829032,
                  originLon: 10.07299025213017,
                  destinationLat: 53.46315765148751,
                  destinationLon: 9.789197601249002,
                  hourOfDay: 5,
                  tripCount: 10,
                  datasources: ["bad_diesel_vehicles"],
                  firstSeenAt: new Date("2018-05-01T09:13:36Z"),
                  lastSeenAt: new Date("2018-05-01T09:13:36Z"),
               },
            ],
         });

         const result = await request(app.getHttpServer())
            .get("/trips/weekly-average")
            .query({
               region: "Prague",
               minLat: 0,
               maxLat: 99,
               minLon: 0,
               maxLon: 99,
            });

         expect(result.status).toBe(200);
         expect(result.body.weeklyAverage).toEqual(3);
      });
   });
});
