import { Controller, Sse,MessageEvent } from "@nestjs/common";
import { map } from 'rxjs';
import { FileIngestionService } from "./file-ingestion.service";

@Controller("/files")
export class FileIngestionController{
   constructor(private readonly fileIngestionService:FileIngestionService){}

   @Sse("/stream")
   streamStatus(){
      return this.fileIngestionService.getCurrentStatus().pipe(
         map((data): MessageEvent => ({
               data,
         }))
      )
   }
}