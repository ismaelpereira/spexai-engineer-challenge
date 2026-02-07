import { BadRequestException, Controller, HttpCode, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileProcessorService } from "./file-processor.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("/trips")
export class FileProcessorController{
   constructor(private readonly fileProcessorService:FileProcessorService){}

   @Post()
   @HttpCode(201)
   @UseInterceptors(FileInterceptor('file'))
   async uploadFile(@UploadedFile() file:Express.Multer.File){
      if(!file){
         console.log('file: ', file);
         throw new BadRequestException("CSV File is required")
      }

      if(file.mimetype !== "text/csv" && !file.originalname.endsWith(".csv")){
         console.log('file.mimetype: ', file.mimetype);
         throw new BadRequestException("File must be a CSV")
      }

      await this.fileProcessorService.ingestTrips(file)

      return {
         message:"File Ingestion started",
         filename: file.originalname
      }
   }
}