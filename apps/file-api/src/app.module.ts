import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from "./domains/health/health.module";
import { validate } from './utils/env/env.service';
import { TripsModule } from "./domains/trips/trips.module";

@Module({
   imports: [ConfigModule.forRoot({validate,isGlobal:true}),HealthModule,TripsModule],
   controllers: [],
   providers: [],
})
export class AppModule {}
