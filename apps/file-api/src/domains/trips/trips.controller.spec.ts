import { TripsContrller } from './trips.controller';
import { TripsService } from './trips.service';

describe('TripsContrller', () => {
  let controller: TripsContrller;
  let service: jest.Mocked<TripsService>;

  beforeEach(() => {
    service = {
      getWeeklyAverageTrips: jest.fn(),
    } as any;

    controller = new TripsContrller(service);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getWeeklyAverage', () => {
    it('should call service with correct params and return result', async () => {
      service.getWeeklyAverageTrips.mockResolvedValueOnce({
        weeklyAverage: 120,
        weeks: 4,
      });

      const result = await controller.getWeeklyAverage(
        'SP',
        -23.7,
        -23.4,
        -46.8,
        -46.5,
      );

      expect(service.getWeeklyAverageTrips).toHaveBeenCalledWith('SP', {
        minLat: -23.7,
        maxLat: -23.4,
        minLon: -46.8,
        maxLon: -46.5,
      });

      expect(result).toEqual({
        weeklyAverage: 120,
        weeks: 4,
      });
    });

    it('should propagate error when service throws', async () => {
      service.getWeeklyAverageTrips.mockRejectedValueOnce(
        new Error('Service error'),
      );

      await expect(
        controller.getWeeklyAverage(
          'SP',
          0,
          1,
          0,
          1,
        ),
      ).rejects.toThrow('Service error');
    });
  });
});
