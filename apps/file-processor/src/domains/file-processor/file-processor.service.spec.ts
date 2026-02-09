import { FileProcessorService } from './file-processor.service';
import { FileProcessorRepository } from './file-processor.repository';
import { ParsedTripRow } from './types/types';

describe('FileProcessorService', () => {
  let service: FileProcessorService;
  let repository: jest.Mocked<FileProcessorRepository>;

  beforeEach(() => {
    repository = {
      createOrUpdateTripsGroup: jest.fn(),
      createOrUpdateFileIngestionStatus: jest.fn(),
    } as any;

    service = new FileProcessorService(repository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('ingestTrips', () => {
    it('should ingest trips successfully and mark as completed', async () => {
      const file = {
        originalname: 'trips.csv',
        buffer: Buffer.from('fake,csv,content'),
      } as Express.Multer.File;

      const rows: ParsedTripRow[] = [
        {
          region: 'SP',
          datasource: 'csv',
          datetime: new Date('2026-02-01T10:00:00Z'),
          originLat: 1,
          originLon: 2,
          destinationLat: 3,
          destinationLon: 4,
          hourOfDay: 10,
        },
      ];

      jest
        .spyOn(service as any, 'parseCSV')
        .mockResolvedValueOnce(rows);

      jest
        .spyOn(service as any, 'processTrips')
        .mockResolvedValueOnce(undefined);

      await expect(service.ingestTrips(file)).resolves.not.toThrow();

      expect(repository.createOrUpdateFileIngestionStatus).toHaveBeenCalledWith(
        'trips.csv',
        expect.objectContaining({
          status: 'processing',
          processedRows: 0,
          totalRows: rows.length,
        }),
      );

      expect(service['processTrips']).toHaveBeenCalledWith(
        'trips.csv',
        rows,
      );

      expect(repository.createOrUpdateFileIngestionStatus).toHaveBeenLastCalledWith(
        'trips.csv',
        expect.objectContaining({
          status: 'completed',
        }),
      );
    });

    it('should mark ingestion as failed when processing throws error', async () => {
      const file = {
        originalname: 'trips.csv',
        buffer: Buffer.from('fake,csv,content'),
      } as Express.Multer.File;

      const rows: ParsedTripRow[] = [];

      jest
        .spyOn(service as any, 'parseCSV')
        .mockResolvedValueOnce(rows);

      jest
        .spyOn(service as any, 'processTrips')
        .mockRejectedValueOnce(new Error('Processing error'));

      await expect(service.ingestTrips(file)).rejects.toThrow(
        'Processing error',
      );

      expect(repository.createOrUpdateFileIngestionStatus).toHaveBeenCalledWith(
        'trips.csv',
        expect.objectContaining({
          status: 'failed',
          errorMessage: 'Processing error',
        }),
      );
    });
  });

  describe('processTrips', () => {
    it('should process rows and periodically update ingestion status', async () => {
      const rows: ParsedTripRow[] = Array.from({ length: 101 }).map(
        (_, index) => ({
          region: 'SP',
          datasource: 'csv',
          datetime: new Date('2026-02-01T10:00:00Z'),
          originLat: index,
          originLon: index,
          destinationLat: index,
          destinationLon: index,
          hourOfDay: 10,
        }),
      );

      await expect(
        (service as any).processTrips('trips.csv', rows),
      ).resolves.not.toThrow();

      expect(repository.createOrUpdateTripsGroup).toHaveBeenCalledTimes(101);

      expect(repository.createOrUpdateFileIngestionStatus).toHaveBeenCalledWith(
        'trips.csv',
        expect.objectContaining({
          status: 'processing',
          processedRows: 100,
        }),
      );

      expect(repository.createOrUpdateFileIngestionStatus).toHaveBeenLastCalledWith(
        'trips.csv',
        expect.objectContaining({
          status: 'processing',
          processedRows: 101,
        }),
      );
    });
  });

  describe('parseWktPoint', () => {
    it('should parse valid WKT point', () => {
      const result = (service as any).parseWktPoint(
        'POINT (30.5 -20.1)',
      );

      expect(result).toEqual({
        lon: 30.5,
        lat: -20.1,
      });
    });

    it('should throw error for invalid WKT point', () => {
      expect(() =>
        (service as any).parseWktPoint('INVALID'),
      ).toThrow('Invalid WKT point');
    });
  });
});
