import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/utils/prisma/prisma.service";
import { BoundingBox } from "./types/trips.types";

@Injectable()
export class TripsRepository{
   constructor(private readonly prisma:PrismaService){}

   async findByRegionAndBoundingBox(region:string,boundingBox:BoundingBox){
      return this.prisma.$queryRaw<{week:Date,totalTrips,number}[]>`
       SELECT
        date_trunc('week', "firstSeenAt") AS week,
        SUM("tripCount")                 AS "totalTrips"
      FROM trips.trips_group
      WHERE region = ${region}
        AND "originLat" BETWEEN ${boundingBox.minLat} AND ${boundingBox.maxLat}
        AND "originLon" BETWEEN ${boundingBox.minLon} AND ${boundingBox.maxLon}
      GROUP BY week
      ORDER BY week;
      `;
   }
}