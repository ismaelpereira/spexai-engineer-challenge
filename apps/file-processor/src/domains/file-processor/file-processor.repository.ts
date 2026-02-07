import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/utils/prisma/prisma.service";
import { ParsedTripRow } from "./types/types";

@Injectable()
export class FileProcessorRepository {
   constructor(private readonly prisma: PrismaService) { }


   async createOrUpdateFileIngestionStatus(filename: string, data: {
      status: string;
      totalRows?:number;
      startedAt?: Date;
      processedRows?: number;
      errorMessage?: string | null;
      completedAt?:Date,
   }) {
      await this.prisma.file_ingestion_status.upsert({
         where: {
            filename
         },
         update: {
            status: data.status,
            startedAt: data.startedAt,
            processedRows: data.processedRows,
            errorMessage: data.errorMessage ?? null,
            completedAt:data.completedAt??null,
         },
         create: {
            filename,
            status: data.status,
            startedAt: data.startedAt,
            processedRows: data.processedRows ?? 0,
            errorMessage: data.errorMessage ?? null,
            totalRows:data.totalRows
         }
      })
      await this.prisma.$queryRawUnsafe(`NOTIFY ingestion_status_changed, '${JSON.stringify({filename,...data})}'`)
   }

   async createOrUpdateTripsGroup(filename: string, data: ParsedTripRow) {
      await this.prisma.trips_group.upsert({
         where: {
            region_originLat_originLon_destinationLat_destinationLon_hourOfDay: {
               region: data.region,
               originLat: data.originLat,
               originLon: data.originLon,
               destinationLat: data.destinationLat,
               destinationLon: data.destinationLon,
               hourOfDay: data.hourOfDay,
            },
         },
         update: {
            tripCount: { increment: 1 },
            datasources: { push: data.datasource },
            lastSeenAt: data.datetime
         },
         create: {
            region: data.region,
            originLat: data.originLat,
            originLon: data.originLon,
            destinationLat: data.destinationLat,
            destinationLon: data.destinationLon,
            hourOfDay: data.hourOfDay,
            tripCount: 1,
            datasources: [data.datasource],
            firstSeenAt: data.datetime,
            lastSeenAt: data.datetime,
         }
      })
   }
}