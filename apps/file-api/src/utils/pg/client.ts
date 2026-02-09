import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Client, Pool } from "pg";
import { IEnvService } from "../env/env.service";

@Injectable()
export class PostgresPool implements OnModuleDestroy {
   private readonly pool: Pool;

   constructor(private readonly config: ConfigService<IEnvService>) {
      this.pool = new Pool({
         connectionString: this.config.getOrThrow("DATABASE_URL"),
         max: 10,
         idleTimeoutMillis: 30_000,
         connectionTimeoutMillis: 2_000,
      });
   }

   getPool(): Pool {
      return this.pool;
   }

   createListenerClient(): Client {
      return new Client({
         connectionString: process.env.DATABASE_URL,
      });
   }

   async onModuleDestroy() {
      await this.pool?.end();
   }
}
