import { FileProcessorRepository } from "./file-processor.repository";
import { PrismaService } from "../../utils/prisma/prisma.service";
import { ParsedTripRow } from "./types/types";

describe("FileProcessorRepository", () => {
   let repository: FileProcessorRepository;
   let prisma: jest.Mocked<PrismaService>;

   beforeEach(() => {
      prisma = {
         file_ingestion_status: {
            upsert: jest.fn(),
         },
         trips_group: {
            upsert: jest.fn(),
         },
         $queryRawUnsafe: jest.fn(),
      } as any;

      repository = new FileProcessorRepository(prisma);
   });

   afterEach(() => {
      jest.clearAllMocks();
   });

   describe("createOrUpdateFileIngestionStatus", () => {
      it("should upsert ingestion status and notify listeners", async () => {
         const filename = "trips.csv";
         const data = {
            status: "PROCESSING",
            totalRows: 100,
            startedAt: new Date("2026-02-01T10:00:00Z"),
            processedRows: 10,
            errorMessage: null,
         };

         prisma.file_ingestion_status.upsert.mockResolvedValueOnce({} as any);
         prisma.$queryRawUnsafe.mockResolvedValueOnce({} as any);

         await expect(
            repository.createOrUpdateFileIngestionStatus(filename, data),
         ).resolves.not.toThrow();

         expect(prisma.file_ingestion_status.upsert).toHaveBeenCalledWith({
            where: { filename },
            update: {
               status: data.status,
               startedAt: data.startedAt,
               processedRows: data.processedRows,
               errorMessage: null,
               completedAt: null,
            },
            create: {
               filename,
               status: data.status,
               startedAt: data.startedAt,
               processedRows: data.processedRows,
               errorMessage: null,
               totalRows: data.totalRows,
            },
         });

         expect(prisma.$queryRawUnsafe).toHaveBeenCalledWith(
            `NOTIFY ingestion_status_changed, '${JSON.stringify({
               filename,
               ...data,
            })}'`,
         );
      });

      it("should propagate error when prisma upsert fails", async () => {
         prisma.file_ingestion_status.upsert.mockRejectedValueOnce(
            new Error("DB error"),
         );

         await expect(
            repository.createOrUpdateFileIngestionStatus("file.csv", {
               status: "FAILED",
            }),
         ).rejects.toThrow("DB error");
      });
   });

   describe("createOrUpdateTripsGroup", () => {
      it("should upsert trips group and increment trip count", async () => {
         const trip: ParsedTripRow = {
            region: "SP",
            originLat: -23.55,
            originLon: -46.63,
            destinationLat: -23.56,
            destinationLon: -46.64,
            hourOfDay: 14,
            datasource: "csv",
            datetime: new Date("2026-02-01T14:10:00Z"),
         };

         prisma.trips_group.upsert.mockResolvedValueOnce({} as any);

         await expect(
            repository.createOrUpdateTripsGroup("file.csv", trip),
         ).resolves.not.toThrow();

         expect(prisma.trips_group.upsert).toHaveBeenCalledWith({
            where: {
               region_originLat_originLon_destinationLat_destinationLon_hourOfDay:
                  {
                     region: trip.region,
                     originLat: trip.originLat,
                     originLon: trip.originLon,
                     destinationLat: trip.destinationLat,
                     destinationLon: trip.destinationLon,
                     hourOfDay: trip.hourOfDay,
                  },
            },
            update: {
               tripCount: { increment: 1 },
               datasources: { push: trip.datasource },
               lastSeenAt: trip.datetime,
            },
            create: {
               region: trip.region,
               originLat: trip.originLat,
               originLon: trip.originLon,
               destinationLat: trip.destinationLat,
               destinationLon: trip.destinationLon,
               hourOfDay: trip.hourOfDay,
               tripCount: 1,
               datasources: [trip.datasource],
               firstSeenAt: trip.datetime,
               lastSeenAt: trip.datetime,
            },
         });
      });

      it("should throw error when prisma upsert fails", async () => {
         prisma.trips_group.upsert.mockRejectedValueOnce(
            new Error("Trips group error"),
         );

         await expect(
            repository.createOrUpdateTripsGroup("file.csv", {} as any),
         ).rejects.toThrow("Trips group error");
      });
   });
});
