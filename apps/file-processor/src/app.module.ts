import { Module } from "@nestjs/common";
import { HealthController } from "./domains/health/health.controller";
import { PrismaService } from "./utils/prisma/prisma.service";

@Module({
   imports: [],
   controllers: [HealthController],
   providers: [PrismaService],
})
export class AppModule {}
