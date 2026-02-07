import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from "./domains/health/health.module";
import { validate } from './utils/env/env.service';
import { TripsModule } from "./domains/trips/trips.module";
import { FileIngestionModule } from "./domains/file-ingestion/file-ingestion.module";

@Module({
   imports: [
      ConfigModule.forRoot({ validate, isGlobal: true }), 
      HealthModule, 
      TripsModule,
      FileIngestionModule],
   controllers: [],
   providers: [],
})
export class AppModule { }
