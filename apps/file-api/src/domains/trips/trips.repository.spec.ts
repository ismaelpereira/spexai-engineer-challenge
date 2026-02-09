import { TripsRepository } from "./trips.repository";
import { PrismaService } from "../../utils/prisma/prisma.service";
import { BoundingBox } from "./types/trips.types";

describe("TripsRepository", () => {
   let repository: TripsRepository;
   let prisma: jest.Mocked<PrismaService>;

   beforeEach(() => {
      prisma = {
         $queryRaw: jest.fn(),
      } as any;

      repository = new TripsRepository(prisma);
   });

   afterEach(() => {
      jest.clearAllMocks();
   });

   describe("findByRegionAndBoundingBox", () => {
      it("should query trips grouped by week within bounding box", async () => {
         const region = "SP";

         const boundingBox: BoundingBox = {
            minLat: -23.7,
            maxLat: -23.4,
            minLon: -46.8,
            maxLon: -46.5,
         };

         const dbResult = [
            {
               week: new Date("2026-01-01"),
               totalTrips: 120,
            },
         ];

         prisma.$queryRaw.mockResolvedValueOnce(dbResult as any);

         const result = await repository.findByRegionAndBoundingBox(
            region,
            boundingBox,
         );

         expect(prisma.$queryRaw).toHaveBeenCalledTimes(1);

         expect(result).toEqual(dbResult);
      });

      it("should propagate error when prisma query fails", async () => {
         prisma.$queryRaw.mockRejectedValueOnce(new Error("DB query error"));

         await expect(
            repository.findByRegionAndBoundingBox("SP", {
               minLat: 0,
               maxLat: 1,
               minLon: 0,
               maxLon: 1,
            }),
         ).rejects.toThrow("DB query error");
      });
   });
});
