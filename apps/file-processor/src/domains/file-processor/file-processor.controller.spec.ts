import { BadRequestException } from '@nestjs/common';
import { FileProcessorController } from './file-processor.controller';
import { FileProcessorService } from './file-processor.service';

describe('FileProcessorController', () => {
  let controller: FileProcessorController;
  let service: jest.Mocked<FileProcessorService>;

  beforeEach(() => {
    service = {
      ingestTrips: jest.fn(),
    } as any;

    controller = new FileProcessorController(service);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('uploadFile', () => {
    it('should throw BadRequestException when file is not provided', async () => {
      await expect(
        controller.uploadFile(undefined as any),
      ).rejects.toThrow(BadRequestException);

      await expect(
        controller.uploadFile(undefined as any),
      ).rejects.toThrow('CSV File is required');

      expect(service.ingestTrips).not.toHaveBeenCalled();
    });

    it('should throw BadRequestException when file is not a CSV', async () => {
      const file = {
        originalname: 'file.txt',
        mimetype: 'text/plain',
      } as Express.Multer.File;

      await expect(
        controller.uploadFile(file),
      ).rejects.toThrow(BadRequestException);

      await expect(
        controller.uploadFile(file),
      ).rejects.toThrow('File must be a CSV');

      expect(service.ingestTrips).not.toHaveBeenCalled();
    });

    it('should call ingestTrips and return success response for valid CSV file', async () => {
      const file = {
        originalname: 'trips.csv',
        mimetype: 'text/csv',
        buffer: Buffer.from('fake,csv,content'),
      } as Express.Multer.File;

      service.ingestTrips.mockResolvedValueOnce(undefined);

      const result = await controller.uploadFile(file);

      expect(service.ingestTrips).toHaveBeenCalledWith(file);

      expect(result).toEqual({
        message: 'File Ingestion started',
        filename: 'trips.csv',
      });
    });

    it('should propagate error if ingestTrips throws', async () => {
      const file = {
        originalname: 'trips.csv',
        mimetype: 'text/csv',
        buffer: Buffer.from('fake,csv,content'),
      } as Express.Multer.File;

      service.ingestTrips.mockRejectedValueOnce(
        new Error('Service error'),
      );

      await expect(
        controller.uploadFile(file),
      ).rejects.toThrow('Service error');

      expect(service.ingestTrips).toHaveBeenCalledWith(file);
    });
  });
});
