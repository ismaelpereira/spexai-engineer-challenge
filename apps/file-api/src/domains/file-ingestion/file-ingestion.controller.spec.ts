import { FileIngestionController } from './file-ingestion.controller';
import { FileIngestionService } from './file-ingestion.service';
import { Subject } from 'rxjs';

describe('FileIngestionController', () => {
  let controller: FileIngestionController;
  let service: jest.Mocked<FileIngestionService>;

  beforeEach(() => {
    service = {
      getCurrentStatus: jest.fn(),
    } as any;

    controller = new FileIngestionController(service);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('streamStatus', () => {
    it('should map repository stream to SSE MessageEvent', (done) => {
      const subject = new Subject<any>();

      service.getCurrentStatus.mockReturnValueOnce(
        subject.asObservable(),
      );

      const observable = controller.streamStatus();

      const received: any[] = [];

      observable.subscribe({
        next: (event) => received.push(event),
      });

      const payload = { filename: 'file.csv', status: 'processing' };

      subject.next(payload);

      expect(service.getCurrentStatus).toHaveBeenCalled();

      expect(received).toEqual([
        {
          data: payload,
        },
      ]);

      done();
    });

    it('should propagate errors from stream', (done) => {
      const subject = new Subject<any>();

      service.getCurrentStatus.mockReturnValueOnce(
        subject.asObservable(),
      );

      const observable = controller.streamStatus();

      observable.subscribe({
        error: (err) => {
          expect(err.message).toBe('Stream error');
          done();
        },
      });

      subject.error(new Error('Stream error'));
    });
  });
});
