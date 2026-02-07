import { Injectable } from "@nestjs/common";
import { TripsRepository } from "./trips.repository";
import { BoundingBox } from "./types/trips.types";
import { WeeklyAverageTripsDTO } from "./dto/trips-weekly-average.dto";

@Injectable()
export class TripsService{
   constructor(private readonly tripsRepository:TripsRepository){}

   async getWeeklyAverageTrips(region:string,boundingBox:BoundingBox):Promise<WeeklyAverageTripsDTO>{
      const weeklyData = await this.tripsRepository.findByRegionAndBoundingBox(region,boundingBox)

      if(weeklyData.length === 0){
         return {
            weeklyAverage:0,
            weeks:0
         }
      }

       const totalTrips = weeklyData.reduce(
      (sum, row) => sum + Number(row.totalTrips),
      0,
    );

    return {
      weeklyAverage: totalTrips / weeklyData.length,
      weeks: weeklyData.length,
    };
   }
}