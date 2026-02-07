import { Injectable } from "@nestjs/common";
import { FileProcessorRepository } from "./file-processor.repository";
import { ParsedTripRow, TripRow } from "./types/types";
import { Readable } from "stream";
import * as csv from "csv-parser"

@Injectable()
export class FileProcessorService {
   constructor(private readonly fileProcessorRespository: FileProcessorRepository) { }

   private parseWktPoint(wkt: string): { lon: number; lat: number } {
      const match = wkt.match(/POINT\s*\(\s*([-\d.]+)\s+([-\d.]+)\s*\)/i);

      if (!match) {
         throw new Error(`Invalid WKT point: ${wkt}`);
      }

      return {
         lon: Number(match[1]),
         lat: Number(match[2]),
      };
   }

   private async parseCSV(file: Express.Multer.File): Promise<ParsedTripRow[]> {
      const rows: ParsedTripRow[] = []
      return new Promise((resolve, reject) => {
         const stream = Readable.from(file.buffer)

         stream.pipe(csv()).on('data', (data: TripRow) => {
            rows.push({
               datasource: data.datasource,
               datetime: new Date(data.datetime),
               destinationLat: this.parseWktPoint(data.destination_coord).lat,
               destinationLon: this.parseWktPoint(data.destination_coord).lon,
               hourOfDay: new Date(data.datetime).getHours(),
               originLat: this.parseWktPoint(data.origin_coord).lat,
               originLon: this.parseWktPoint(data.origin_coord).lon,
               region: data.region
            })
         }).on("end", () => resolve(rows)).on("error", reject)
      })
   }

   private async processTrips(filename: string, rows: ParsedTripRow[]) {
      let processedRows = 0

      for (const row of rows) {
         await this.fileProcessorRespository.createOrUpdateTripsGroup(filename, {
            datasource: row.datasource,
            datetime: row.datetime,
            destinationLat: row.destinationLat,
            destinationLon: row.destinationLon,
            hourOfDay: new Date(row.datetime).getHours(),
            originLat: row.originLat,
            originLon: row.originLon,
            region: row.region
         })

         processedRows++

         if (processedRows % 100 === 0) {
            await this.fileProcessorRespository.createOrUpdateFileIngestionStatus(filename, {
               status: 'processing',
               startedAt: new Date(),
               processedRows,
            });
         }
      }
      await this.fileProcessorRespository.createOrUpdateFileIngestionStatus(filename, {
         status: 'processing',
         startedAt: new Date(),
         processedRows,
      });
   }

   async ingestTrips(file: Express.Multer.File) {
      const filename = file.originalname
      const rows = await this.parseCSV(file)

      await this.fileProcessorRespository.createOrUpdateFileIngestionStatus(filename, {
         status: 'processing',
         startedAt: new Date(),
         processedRows: 0,
         totalRows: rows.length
      })

      try {

         await this.processTrips(filename, rows)

         await this.fileProcessorRespository.createOrUpdateFileIngestionStatus(filename, {
            status: "completed",
            completedAt: new Date()
         })
      } catch (error) {
         await this.fileProcessorRespository.createOrUpdateFileIngestionStatus(filename, {
            status: "failed",
            errorMessage: error.message
         })
         throw error
      }
   }
}