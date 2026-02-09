import { TripsService } from './trips.service';
import { TripsRepository } from './trips.repository';
import { BoundingBox } from './types/trips.types';

describe('TripsService', () => {
  let service: TripsService;
  let repository: jest.Mocked<TripsRepository>;

  beforeEach(() => {
    repository = {
      findByRegionAndBoundingBox: jest.fn(),
    } as any;

    service = new TripsService(repository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getWeeklyAverageTrips', () => {
    it('should return weekly average and weeks count when data exists', async () => {
      const boundingBox: BoundingBox = {
        minLat: -23.7,
        maxLat: -23.4,
        minLon: -46.8,
        maxLon: -46.5,
      };

      repository.findByRegionAndBoundingBox.mockResolvedValueOnce([
        {
          week: new Date('2026-01-01'),
          totalTrips: 100,
        },
        {
          week: new Date('2026-01-08'),
          totalTrips: 200,
        },
      ] as any);

      const result = await service.getWeeklyAverageTrips(
        'SP',
        boundingBox,
      );

      expect(repository.findByRegionAndBoundingBox).toHaveBeenCalledWith(
        'SP',
        boundingBox,
      );

      expect(result).toEqual({
        weeklyAverage: 150,
        weeks: 2,
      });
    });

    it('should return zero values when no data is found', async () => {
      repository.findByRegionAndBoundingBox.mockResolvedValueOnce([]);

      const result = await service.getWeeklyAverageTrips('SP', {
        minLat: 0,
        maxLat: 1,
        minLon: 0,
        maxLon: 1,
      });

      expect(result).toEqual({
        weeklyAverage: 0,
        weeks: 0,
      });
    });

    it('should convert totalTrips to number before calculating average', async () => {
      repository.findByRegionAndBoundingBox.mockResolvedValueOnce([
        {
          week: new Date(),
          totalTrips: '300', // vem como string do SQL
        },
      ] as any);

      const result = await service.getWeeklyAverageTrips('SP', {
        minLat: 0,
        maxLat: 1,
        minLon: 0,
        maxLon: 1,
      });

      expect(result).toEqual({
        weeklyAverage: 300,
        weeks: 1,
      });
    });

    it('should propagate error when repository throws', async () => {
      repository.findByRegionAndBoundingBox.mockRejectedValueOnce(
        new Error('DB error'),
      );

      await expect(
        service.getWeeklyAverageTrips('SP', {
          minLat: 0,
          maxLat: 1,
          minLon: 0,
          maxLon: 1,
        }),
      ).rejects.toThrow('DB error');
    });
  });
});
