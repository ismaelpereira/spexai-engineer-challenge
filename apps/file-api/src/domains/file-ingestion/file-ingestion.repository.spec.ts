import { FileIngestionRepository } from './file-ingestion.repository';
import { PostgresPool } from '../../utils/pg/client';
import { Client } from 'pg';

describe('FileIngestionRepository', () => {
  let repository: FileIngestionRepository;
  let pgPool: jest.Mocked<PostgresPool>;
  let pgClient: jest.Mocked<Client>;

  beforeEach(() => {
    pgClient = {
      connect: jest.fn(),
      query: jest.fn(),
      on: jest.fn(),
    } as any;

    pgPool = {
      createListenerClient: jest.fn().mockReturnValue(pgClient),
    } as any;

    repository = new FileIngestionRepository(pgPool);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('onModuleInit', () => {
    it('should call listenIngestionStatus', async () => {
      const spy = jest
        .spyOn(repository, 'listenIngestionStatus')
        .mockResolvedValueOnce(undefined);

      await repository.onModuleInit();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('listenIngestionStatus', () => {
    it('should connect and listen to postgres channel', async () => {
      await repository.listenIngestionStatus();

      expect(pgPool.createListenerClient).toHaveBeenCalled();
      expect(pgClient.connect).toHaveBeenCalled();
      expect(pgClient.query).toHaveBeenCalledWith(
        'LISTEN ingestion_status_changed',
      );

      expect(pgClient.on).toHaveBeenCalledWith(
        'notification',
        expect.any(Function),
      );

      expect(pgClient.on).toHaveBeenCalledWith(
        'error',
        expect.any(Function),
      );
    });

    it('should emit parsed payload on notification', async () => {
      await repository.listenIngestionStatus();

      const notificationHandler = (pgClient.on as jest.Mock).mock.calls.find(
        (c) => c[0] === 'notification',
      )[1];

      const nextSpy = jest.spyOn(
        (repository as any).subject,
        'next',
      );

      const payload = JSON.stringify({ filename: 'file.csv', status: 'done' });

      notificationHandler({ payload });

      expect(nextSpy).toHaveBeenCalledWith({
        filename: 'file.csv',
        status: 'done',
      });
    });

    it('should ignore notification without payload', async () => {
      await repository.listenIngestionStatus();

      const notificationHandler = (pgClient.on as jest.Mock).mock.calls.find(
        (c) => c[0] === 'notification',
      )[1];

      const nextSpy = jest.spyOn(
        (repository as any).subject,
        'next',
      );

      notificationHandler({ payload: null });

      expect(nextSpy).not.toHaveBeenCalled();
    });
  });

  describe('getStatusStream', () => {
    it('should return observable', () => {
      const stream = repository.getStatusStream();

      expect(stream).toBeDefined();
      expect(typeof stream.subscribe).toBe('function');
    });
  });
});
