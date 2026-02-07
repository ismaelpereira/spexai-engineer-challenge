import { Module } from "@nestjs/common";
import { FileProcessorController } from "./file-processor.controller";
import { FileProcessorRepository } from "./file-processor.repository";
import { FileProcessorService } from "./file-processor.service";
import { PrismaService } from "src/utils/prisma/prisma.service";

@Module({
   controllers: [FileProcessorController],
   providers: [FileProcessorRepository, FileProcessorService, PrismaService]
})

export class FileProcessorModule { }