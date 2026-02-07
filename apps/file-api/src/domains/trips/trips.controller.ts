import { Controller, Get, HttpCode, Query } from "@nestjs/common";
import { TripsService } from "./trips.service";

@Controller("/trips")
export class TripsContrller {
   constructor(private readonly tripsService: TripsService) { }

   @Get("/weekly-average")
   @HttpCode(200)
   async getWeeklyAverage(
      @Query('region') region: string,
      @Query('minLat') minLat: number,
      @Query('maxLat') maxLat: number,
      @Query('minLon') minLon: number,
      @Query('maxLon') maxLon: number) {
      return this.tripsService.getWeeklyAverageTrips(region, {
         maxLat,
         maxLon,
         minLat,
         minLon,
      })
   }
}