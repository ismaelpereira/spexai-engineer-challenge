import { Module } from "@nestjs/common";

import { PrismaService } from "src/utils/prisma/prisma.service";
import { FileIngestionController } from "./file-ingestion.controller";
import { FileIngestionRepository } from "./file-ingestion.repository";
import { FileIngestionService } from "./file-ingestion.service";
import { PostgresPool } from "src/utils/pg/client";


@Module({
   controllers: [FileIngestionController],
   providers: [FileIngestionRepository,FileIngestionService,PrismaService,PostgresPool]
})

export class FileIngestionModule { }