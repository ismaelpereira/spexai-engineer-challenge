import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { Client } from "pg";
import { Subject } from "rxjs";
import { PostgresPool } from "src/utils/pg/client";
@Injectable()
export class FileIngestionRepository implements OnModuleInit, OnModuleDestroy {
   private readonly subject = new Subject<any>();
   private client: Client;
   constructor(private readonly pgPool: PostgresPool) {}

   async onModuleInit() {
      await this.listenIngestionStatus();
   }
   async onModuleDestroy() {
      await this.client?.end();
   }

   async listenIngestionStatus() {
      this.client = this.pgPool.createListenerClient();

      await this.client.connect();
      await this.client.query("LISTEN ingestion_status_changed");

      console.log("[PG] LISTEN ingestion_status_changed");

      this.client.on("notification", (msg) => {
         console.log("[PG] Notification:", msg.payload);
         if (!msg.payload) return;
         this.subject.next(JSON.parse(msg.payload));
      });

      this.client.on("error", (err) => {
         console.error("[PG] Listener error", err);
      });
   }

   getStatusStream() {
      return this.subject.asObservable();
   }
}
