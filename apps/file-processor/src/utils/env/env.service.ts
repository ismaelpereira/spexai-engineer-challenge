import { Expose, plainToInstance } from 'class-transformer';
import { IsString, validateSync } from 'class-validator';

export interface IEnvService {
  DATABASE_URL: string;
}

export class EnvSchema {
  @Expose()
  @IsString()
  DATABASE_URL: string;
}

export function validate(env: Record<string, unknown>): EnvSchema {
  const envService = plainToInstance(EnvSchema, env, {
    excludeExtraneousValues: true,
  });

  const errors = validateSync(envService);

  if (errors.length) {
    throw new Error(errors.toString());
  }

  return envService;
}