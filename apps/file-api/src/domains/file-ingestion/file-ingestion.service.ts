import { Injectable } from "@nestjs/common";
import { FileIngestionRepository } from "./file-ingestion.repository";


@Injectable()
export class FileIngestionService{
   constructor(private readonly fileIngestionRepository:FileIngestionRepository){}

    getCurrentStatus(){
      return this.fileIngestionRepository.getStatusStream()
   }
}