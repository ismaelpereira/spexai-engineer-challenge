import { IsNumber } from "class-validator";

export class WeeklyAverageTripsDTO{
   @IsNumber()
   weeklyAverage!:number
   
   @IsNumber()
   weeks!:number
}