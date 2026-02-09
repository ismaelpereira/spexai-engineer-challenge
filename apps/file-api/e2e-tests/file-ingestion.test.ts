import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { FileIngestionService } from "../src/domains/file-ingestion/file-ingestion.service";
import { Subject } from "rxjs";
import { EventSource } from "eventsource";

describe("FileIngestionController SSE e2e", () => {
   let app: INestApplication;
   let baseUrl: string;
   let status$ = new Subject<any>();

   beforeAll(async () => {
      const moduleRef = await Test.createTestingModule({
         imports: [AppModule],
      })
         .overrideProvider(FileIngestionService)
         .useValue({
            getCurrentStatus: () => status$.asObservable(),
         })
         .compile();

      app = moduleRef.createNestApplication();

      const server = await app.listen(0);
      const address = server.address();
      baseUrl = `http://127.0.0.1:${address.port}`;
   });

   afterAll(async () => {
      status$.complete();
      await app.close();
   });

   it("should stream ingestion status updates", (done) => {
      const es = new EventSource(`${baseUrl}/files/stream`);

      es.onerror = (err) => {
         es.close();
         done(err);
      };

      es.onopen = () => {
         status$.next({
            filename: "trips.csv",
            status: "processing",
            processedRows: 10,
         });
      };

      es.onmessage = (event) => {
         const data = JSON.parse(event.data);

         expect(data).toEqual({
            filename: "trips.csv",
            status: "processing",
            processedRows: 10,
         });

         es.close();
         done();
      };
   });
});
