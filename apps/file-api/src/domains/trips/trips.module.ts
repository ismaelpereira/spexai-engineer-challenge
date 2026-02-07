import { Module } from "@nestjs/common";
import { TripsContrller } from "./trips.controller";
import { TripsService } from "./trips.service";
import { TripsRepository } from "./trips.repository";
import { PrismaService } from "src/utils/prisma/prisma.service";


@Module({
   controllers: [TripsContrller],
   providers: [TripsService,TripsRepository,PrismaService]
})

export class TripsModule { }