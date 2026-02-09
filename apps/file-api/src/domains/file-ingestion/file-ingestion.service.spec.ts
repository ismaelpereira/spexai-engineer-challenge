import { FileIngestionService } from './file-ingestion.service';
import { FileIngestionRepository } from './file-ingestion.repository';
import { Subject } from 'rxjs';

describe('FileIngestionService', () => {
  let service: FileIngestionService;
  let repository: jest.Mocked<FileIngestionRepository>;

  beforeEach(() => {
    repository = {
      getStatusStream: jest.fn(),
    } as any;

    service = new FileIngestionService(repository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getCurrentStatus', () => {
   it('should return status stream from repository', () => {
  const subject = new Subject<any>();
  const observable = subject.asObservable();

  repository.getStatusStream.mockReturnValueOnce(observable);

  const result = service.getCurrentStatus();

  expect(repository.getStatusStream).toHaveBeenCalled();
  expect(result).toBe(observable); 
});
  });
});
