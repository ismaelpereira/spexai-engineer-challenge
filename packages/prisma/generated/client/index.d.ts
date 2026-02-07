
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model file_ingestion_status
 * 
 */
export type file_ingestion_status = $Result.DefaultSelection<Prisma.$file_ingestion_statusPayload>
/**
 * Model trips_group
 * 
 */
export type trips_group = $Result.DefaultSelection<Prisma.$trips_groupPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more File_ingestion_statuses
 * const file_ingestion_statuses = await prisma.file_ingestion_status.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more File_ingestion_statuses
   * const file_ingestion_statuses = await prisma.file_ingestion_status.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.file_ingestion_status`: Exposes CRUD operations for the **file_ingestion_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more File_ingestion_statuses
    * const file_ingestion_statuses = await prisma.file_ingestion_status.findMany()
    * ```
    */
  get file_ingestion_status(): Prisma.file_ingestion_statusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trips_group`: Exposes CRUD operations for the **trips_group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips_groups
    * const trips_groups = await prisma.trips_group.findMany()
    * ```
    */
  get trips_group(): Prisma.trips_groupDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    file_ingestion_status: 'file_ingestion_status',
    trips_group: 'trips_group'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "file_ingestion_status" | "trips_group"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      file_ingestion_status: {
        payload: Prisma.$file_ingestion_statusPayload<ExtArgs>
        fields: Prisma.file_ingestion_statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.file_ingestion_statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$file_ingestion_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.file_ingestion_statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$file_ingestion_statusPayload>
          }
          findFirst: {
            args: Prisma.file_ingestion_statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$file_ingestion_statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.file_ingestion_statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$file_ingestion_statusPayload>
          }
          findMany: {
            args: Prisma.file_ingestion_statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$file_ingestion_statusPayload>[]
          }
          create: {
            args: Prisma.file_ingestion_statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$file_ingestion_statusPayload>
          }
          createMany: {
            args: Prisma.file_ingestion_statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.file_ingestion_statusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$file_ingestion_statusPayload>[]
          }
          delete: {
            args: Prisma.file_ingestion_statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$file_ingestion_statusPayload>
          }
          update: {
            args: Prisma.file_ingestion_statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$file_ingestion_statusPayload>
          }
          deleteMany: {
            args: Prisma.file_ingestion_statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.file_ingestion_statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.file_ingestion_statusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$file_ingestion_statusPayload>[]
          }
          upsert: {
            args: Prisma.file_ingestion_statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$file_ingestion_statusPayload>
          }
          aggregate: {
            args: Prisma.File_ingestion_statusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile_ingestion_status>
          }
          groupBy: {
            args: Prisma.file_ingestion_statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<File_ingestion_statusGroupByOutputType>[]
          }
          count: {
            args: Prisma.file_ingestion_statusCountArgs<ExtArgs>
            result: $Utils.Optional<File_ingestion_statusCountAggregateOutputType> | number
          }
        }
      }
      trips_group: {
        payload: Prisma.$trips_groupPayload<ExtArgs>
        fields: Prisma.trips_groupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trips_groupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trips_groupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trips_groupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trips_groupPayload>
          }
          findFirst: {
            args: Prisma.trips_groupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trips_groupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trips_groupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trips_groupPayload>
          }
          findMany: {
            args: Prisma.trips_groupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trips_groupPayload>[]
          }
          create: {
            args: Prisma.trips_groupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trips_groupPayload>
          }
          createMany: {
            args: Prisma.trips_groupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.trips_groupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trips_groupPayload>[]
          }
          delete: {
            args: Prisma.trips_groupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trips_groupPayload>
          }
          update: {
            args: Prisma.trips_groupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trips_groupPayload>
          }
          deleteMany: {
            args: Prisma.trips_groupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trips_groupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.trips_groupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trips_groupPayload>[]
          }
          upsert: {
            args: Prisma.trips_groupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trips_groupPayload>
          }
          aggregate: {
            args: Prisma.Trips_groupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrips_group>
          }
          groupBy: {
            args: Prisma.trips_groupGroupByArgs<ExtArgs>
            result: $Utils.Optional<Trips_groupGroupByOutputType>[]
          }
          count: {
            args: Prisma.trips_groupCountArgs<ExtArgs>
            result: $Utils.Optional<Trips_groupCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    file_ingestion_status?: file_ingestion_statusOmit
    trips_group?: trips_groupOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model file_ingestion_status
   */

  export type AggregateFile_ingestion_status = {
    _count: File_ingestion_statusCountAggregateOutputType | null
    _avg: File_ingestion_statusAvgAggregateOutputType | null
    _sum: File_ingestion_statusSumAggregateOutputType | null
    _min: File_ingestion_statusMinAggregateOutputType | null
    _max: File_ingestion_statusMaxAggregateOutputType | null
  }

  export type File_ingestion_statusAvgAggregateOutputType = {
    totalRows: number | null
    processedRows: number | null
  }

  export type File_ingestion_statusSumAggregateOutputType = {
    totalRows: number | null
    processedRows: number | null
  }

  export type File_ingestion_statusMinAggregateOutputType = {
    id: string | null
    filename: string | null
    status: string | null
    totalRows: number | null
    processedRows: number | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type File_ingestion_statusMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    status: string | null
    totalRows: number | null
    processedRows: number | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type File_ingestion_statusCountAggregateOutputType = {
    id: number
    filename: number
    status: number
    totalRows: number
    processedRows: number
    errorMessage: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type File_ingestion_statusAvgAggregateInputType = {
    totalRows?: true
    processedRows?: true
  }

  export type File_ingestion_statusSumAggregateInputType = {
    totalRows?: true
    processedRows?: true
  }

  export type File_ingestion_statusMinAggregateInputType = {
    id?: true
    filename?: true
    status?: true
    totalRows?: true
    processedRows?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type File_ingestion_statusMaxAggregateInputType = {
    id?: true
    filename?: true
    status?: true
    totalRows?: true
    processedRows?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type File_ingestion_statusCountAggregateInputType = {
    id?: true
    filename?: true
    status?: true
    totalRows?: true
    processedRows?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type File_ingestion_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which file_ingestion_status to aggregate.
     */
    where?: file_ingestion_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of file_ingestion_statuses to fetch.
     */
    orderBy?: file_ingestion_statusOrderByWithRelationInput | file_ingestion_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: file_ingestion_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` file_ingestion_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` file_ingestion_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned file_ingestion_statuses
    **/
    _count?: true | File_ingestion_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: File_ingestion_statusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: File_ingestion_statusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: File_ingestion_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: File_ingestion_statusMaxAggregateInputType
  }

  export type GetFile_ingestion_statusAggregateType<T extends File_ingestion_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateFile_ingestion_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile_ingestion_status[P]>
      : GetScalarType<T[P], AggregateFile_ingestion_status[P]>
  }




  export type file_ingestion_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: file_ingestion_statusWhereInput
    orderBy?: file_ingestion_statusOrderByWithAggregationInput | file_ingestion_statusOrderByWithAggregationInput[]
    by: File_ingestion_statusScalarFieldEnum[] | File_ingestion_statusScalarFieldEnum
    having?: file_ingestion_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: File_ingestion_statusCountAggregateInputType | true
    _avg?: File_ingestion_statusAvgAggregateInputType
    _sum?: File_ingestion_statusSumAggregateInputType
    _min?: File_ingestion_statusMinAggregateInputType
    _max?: File_ingestion_statusMaxAggregateInputType
  }

  export type File_ingestion_statusGroupByOutputType = {
    id: string
    filename: string
    status: string
    totalRows: number
    processedRows: number
    errorMessage: string | null
    startedAt: Date
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: File_ingestion_statusCountAggregateOutputType | null
    _avg: File_ingestion_statusAvgAggregateOutputType | null
    _sum: File_ingestion_statusSumAggregateOutputType | null
    _min: File_ingestion_statusMinAggregateOutputType | null
    _max: File_ingestion_statusMaxAggregateOutputType | null
  }

  type GetFile_ingestion_statusGroupByPayload<T extends file_ingestion_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<File_ingestion_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof File_ingestion_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], File_ingestion_statusGroupByOutputType[P]>
            : GetScalarType<T[P], File_ingestion_statusGroupByOutputType[P]>
        }
      >
    >


  export type file_ingestion_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    status?: boolean
    totalRows?: boolean
    processedRows?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["file_ingestion_status"]>

  export type file_ingestion_statusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    status?: boolean
    totalRows?: boolean
    processedRows?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["file_ingestion_status"]>

  export type file_ingestion_statusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    status?: boolean
    totalRows?: boolean
    processedRows?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["file_ingestion_status"]>

  export type file_ingestion_statusSelectScalar = {
    id?: boolean
    filename?: boolean
    status?: boolean
    totalRows?: boolean
    processedRows?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type file_ingestion_statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "status" | "totalRows" | "processedRows" | "errorMessage" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["file_ingestion_status"]>

  export type $file_ingestion_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "file_ingestion_status"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      status: string
      totalRows: number
      processedRows: number
      errorMessage: string | null
      startedAt: Date
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["file_ingestion_status"]>
    composites: {}
  }

  type file_ingestion_statusGetPayload<S extends boolean | null | undefined | file_ingestion_statusDefaultArgs> = $Result.GetResult<Prisma.$file_ingestion_statusPayload, S>

  type file_ingestion_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<file_ingestion_statusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: File_ingestion_statusCountAggregateInputType | true
    }

  export interface file_ingestion_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['file_ingestion_status'], meta: { name: 'file_ingestion_status' } }
    /**
     * Find zero or one File_ingestion_status that matches the filter.
     * @param {file_ingestion_statusFindUniqueArgs} args - Arguments to find a File_ingestion_status
     * @example
     * // Get one File_ingestion_status
     * const file_ingestion_status = await prisma.file_ingestion_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends file_ingestion_statusFindUniqueArgs>(args: SelectSubset<T, file_ingestion_statusFindUniqueArgs<ExtArgs>>): Prisma__file_ingestion_statusClient<$Result.GetResult<Prisma.$file_ingestion_statusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File_ingestion_status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {file_ingestion_statusFindUniqueOrThrowArgs} args - Arguments to find a File_ingestion_status
     * @example
     * // Get one File_ingestion_status
     * const file_ingestion_status = await prisma.file_ingestion_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends file_ingestion_statusFindUniqueOrThrowArgs>(args: SelectSubset<T, file_ingestion_statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__file_ingestion_statusClient<$Result.GetResult<Prisma.$file_ingestion_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File_ingestion_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {file_ingestion_statusFindFirstArgs} args - Arguments to find a File_ingestion_status
     * @example
     * // Get one File_ingestion_status
     * const file_ingestion_status = await prisma.file_ingestion_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends file_ingestion_statusFindFirstArgs>(args?: SelectSubset<T, file_ingestion_statusFindFirstArgs<ExtArgs>>): Prisma__file_ingestion_statusClient<$Result.GetResult<Prisma.$file_ingestion_statusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File_ingestion_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {file_ingestion_statusFindFirstOrThrowArgs} args - Arguments to find a File_ingestion_status
     * @example
     * // Get one File_ingestion_status
     * const file_ingestion_status = await prisma.file_ingestion_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends file_ingestion_statusFindFirstOrThrowArgs>(args?: SelectSubset<T, file_ingestion_statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__file_ingestion_statusClient<$Result.GetResult<Prisma.$file_ingestion_statusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more File_ingestion_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {file_ingestion_statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all File_ingestion_statuses
     * const file_ingestion_statuses = await prisma.file_ingestion_status.findMany()
     * 
     * // Get first 10 File_ingestion_statuses
     * const file_ingestion_statuses = await prisma.file_ingestion_status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const file_ingestion_statusWithIdOnly = await prisma.file_ingestion_status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends file_ingestion_statusFindManyArgs>(args?: SelectSubset<T, file_ingestion_statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$file_ingestion_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File_ingestion_status.
     * @param {file_ingestion_statusCreateArgs} args - Arguments to create a File_ingestion_status.
     * @example
     * // Create one File_ingestion_status
     * const File_ingestion_status = await prisma.file_ingestion_status.create({
     *   data: {
     *     // ... data to create a File_ingestion_status
     *   }
     * })
     * 
     */
    create<T extends file_ingestion_statusCreateArgs>(args: SelectSubset<T, file_ingestion_statusCreateArgs<ExtArgs>>): Prisma__file_ingestion_statusClient<$Result.GetResult<Prisma.$file_ingestion_statusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many File_ingestion_statuses.
     * @param {file_ingestion_statusCreateManyArgs} args - Arguments to create many File_ingestion_statuses.
     * @example
     * // Create many File_ingestion_statuses
     * const file_ingestion_status = await prisma.file_ingestion_status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends file_ingestion_statusCreateManyArgs>(args?: SelectSubset<T, file_ingestion_statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many File_ingestion_statuses and returns the data saved in the database.
     * @param {file_ingestion_statusCreateManyAndReturnArgs} args - Arguments to create many File_ingestion_statuses.
     * @example
     * // Create many File_ingestion_statuses
     * const file_ingestion_status = await prisma.file_ingestion_status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many File_ingestion_statuses and only return the `id`
     * const file_ingestion_statusWithIdOnly = await prisma.file_ingestion_status.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends file_ingestion_statusCreateManyAndReturnArgs>(args?: SelectSubset<T, file_ingestion_statusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$file_ingestion_statusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File_ingestion_status.
     * @param {file_ingestion_statusDeleteArgs} args - Arguments to delete one File_ingestion_status.
     * @example
     * // Delete one File_ingestion_status
     * const File_ingestion_status = await prisma.file_ingestion_status.delete({
     *   where: {
     *     // ... filter to delete one File_ingestion_status
     *   }
     * })
     * 
     */
    delete<T extends file_ingestion_statusDeleteArgs>(args: SelectSubset<T, file_ingestion_statusDeleteArgs<ExtArgs>>): Prisma__file_ingestion_statusClient<$Result.GetResult<Prisma.$file_ingestion_statusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File_ingestion_status.
     * @param {file_ingestion_statusUpdateArgs} args - Arguments to update one File_ingestion_status.
     * @example
     * // Update one File_ingestion_status
     * const file_ingestion_status = await prisma.file_ingestion_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends file_ingestion_statusUpdateArgs>(args: SelectSubset<T, file_ingestion_statusUpdateArgs<ExtArgs>>): Prisma__file_ingestion_statusClient<$Result.GetResult<Prisma.$file_ingestion_statusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more File_ingestion_statuses.
     * @param {file_ingestion_statusDeleteManyArgs} args - Arguments to filter File_ingestion_statuses to delete.
     * @example
     * // Delete a few File_ingestion_statuses
     * const { count } = await prisma.file_ingestion_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends file_ingestion_statusDeleteManyArgs>(args?: SelectSubset<T, file_ingestion_statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more File_ingestion_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {file_ingestion_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many File_ingestion_statuses
     * const file_ingestion_status = await prisma.file_ingestion_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends file_ingestion_statusUpdateManyArgs>(args: SelectSubset<T, file_ingestion_statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more File_ingestion_statuses and returns the data updated in the database.
     * @param {file_ingestion_statusUpdateManyAndReturnArgs} args - Arguments to update many File_ingestion_statuses.
     * @example
     * // Update many File_ingestion_statuses
     * const file_ingestion_status = await prisma.file_ingestion_status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more File_ingestion_statuses and only return the `id`
     * const file_ingestion_statusWithIdOnly = await prisma.file_ingestion_status.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends file_ingestion_statusUpdateManyAndReturnArgs>(args: SelectSubset<T, file_ingestion_statusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$file_ingestion_statusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File_ingestion_status.
     * @param {file_ingestion_statusUpsertArgs} args - Arguments to update or create a File_ingestion_status.
     * @example
     * // Update or create a File_ingestion_status
     * const file_ingestion_status = await prisma.file_ingestion_status.upsert({
     *   create: {
     *     // ... data to create a File_ingestion_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File_ingestion_status we want to update
     *   }
     * })
     */
    upsert<T extends file_ingestion_statusUpsertArgs>(args: SelectSubset<T, file_ingestion_statusUpsertArgs<ExtArgs>>): Prisma__file_ingestion_statusClient<$Result.GetResult<Prisma.$file_ingestion_statusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of File_ingestion_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {file_ingestion_statusCountArgs} args - Arguments to filter File_ingestion_statuses to count.
     * @example
     * // Count the number of File_ingestion_statuses
     * const count = await prisma.file_ingestion_status.count({
     *   where: {
     *     // ... the filter for the File_ingestion_statuses we want to count
     *   }
     * })
    **/
    count<T extends file_ingestion_statusCountArgs>(
      args?: Subset<T, file_ingestion_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], File_ingestion_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File_ingestion_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {File_ingestion_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends File_ingestion_statusAggregateArgs>(args: Subset<T, File_ingestion_statusAggregateArgs>): Prisma.PrismaPromise<GetFile_ingestion_statusAggregateType<T>>

    /**
     * Group by File_ingestion_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {file_ingestion_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends file_ingestion_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: file_ingestion_statusGroupByArgs['orderBy'] }
        : { orderBy?: file_ingestion_statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, file_ingestion_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFile_ingestion_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the file_ingestion_status model
   */
  readonly fields: file_ingestion_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for file_ingestion_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__file_ingestion_statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the file_ingestion_status model
   */
  interface file_ingestion_statusFieldRefs {
    readonly id: FieldRef<"file_ingestion_status", 'String'>
    readonly filename: FieldRef<"file_ingestion_status", 'String'>
    readonly status: FieldRef<"file_ingestion_status", 'String'>
    readonly totalRows: FieldRef<"file_ingestion_status", 'Int'>
    readonly processedRows: FieldRef<"file_ingestion_status", 'Int'>
    readonly errorMessage: FieldRef<"file_ingestion_status", 'String'>
    readonly startedAt: FieldRef<"file_ingestion_status", 'DateTime'>
    readonly completedAt: FieldRef<"file_ingestion_status", 'DateTime'>
    readonly createdAt: FieldRef<"file_ingestion_status", 'DateTime'>
    readonly updatedAt: FieldRef<"file_ingestion_status", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * file_ingestion_status findUnique
   */
  export type file_ingestion_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file_ingestion_status
     */
    select?: file_ingestion_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file_ingestion_status
     */
    omit?: file_ingestion_statusOmit<ExtArgs> | null
    /**
     * Filter, which file_ingestion_status to fetch.
     */
    where: file_ingestion_statusWhereUniqueInput
  }

  /**
   * file_ingestion_status findUniqueOrThrow
   */
  export type file_ingestion_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file_ingestion_status
     */
    select?: file_ingestion_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file_ingestion_status
     */
    omit?: file_ingestion_statusOmit<ExtArgs> | null
    /**
     * Filter, which file_ingestion_status to fetch.
     */
    where: file_ingestion_statusWhereUniqueInput
  }

  /**
   * file_ingestion_status findFirst
   */
  export type file_ingestion_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file_ingestion_status
     */
    select?: file_ingestion_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file_ingestion_status
     */
    omit?: file_ingestion_statusOmit<ExtArgs> | null
    /**
     * Filter, which file_ingestion_status to fetch.
     */
    where?: file_ingestion_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of file_ingestion_statuses to fetch.
     */
    orderBy?: file_ingestion_statusOrderByWithRelationInput | file_ingestion_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for file_ingestion_statuses.
     */
    cursor?: file_ingestion_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` file_ingestion_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` file_ingestion_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of file_ingestion_statuses.
     */
    distinct?: File_ingestion_statusScalarFieldEnum | File_ingestion_statusScalarFieldEnum[]
  }

  /**
   * file_ingestion_status findFirstOrThrow
   */
  export type file_ingestion_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file_ingestion_status
     */
    select?: file_ingestion_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file_ingestion_status
     */
    omit?: file_ingestion_statusOmit<ExtArgs> | null
    /**
     * Filter, which file_ingestion_status to fetch.
     */
    where?: file_ingestion_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of file_ingestion_statuses to fetch.
     */
    orderBy?: file_ingestion_statusOrderByWithRelationInput | file_ingestion_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for file_ingestion_statuses.
     */
    cursor?: file_ingestion_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` file_ingestion_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` file_ingestion_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of file_ingestion_statuses.
     */
    distinct?: File_ingestion_statusScalarFieldEnum | File_ingestion_statusScalarFieldEnum[]
  }

  /**
   * file_ingestion_status findMany
   */
  export type file_ingestion_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file_ingestion_status
     */
    select?: file_ingestion_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file_ingestion_status
     */
    omit?: file_ingestion_statusOmit<ExtArgs> | null
    /**
     * Filter, which file_ingestion_statuses to fetch.
     */
    where?: file_ingestion_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of file_ingestion_statuses to fetch.
     */
    orderBy?: file_ingestion_statusOrderByWithRelationInput | file_ingestion_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing file_ingestion_statuses.
     */
    cursor?: file_ingestion_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` file_ingestion_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` file_ingestion_statuses.
     */
    skip?: number
    distinct?: File_ingestion_statusScalarFieldEnum | File_ingestion_statusScalarFieldEnum[]
  }

  /**
   * file_ingestion_status create
   */
  export type file_ingestion_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file_ingestion_status
     */
    select?: file_ingestion_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file_ingestion_status
     */
    omit?: file_ingestion_statusOmit<ExtArgs> | null
    /**
     * The data needed to create a file_ingestion_status.
     */
    data: XOR<file_ingestion_statusCreateInput, file_ingestion_statusUncheckedCreateInput>
  }

  /**
   * file_ingestion_status createMany
   */
  export type file_ingestion_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many file_ingestion_statuses.
     */
    data: file_ingestion_statusCreateManyInput | file_ingestion_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * file_ingestion_status createManyAndReturn
   */
  export type file_ingestion_statusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file_ingestion_status
     */
    select?: file_ingestion_statusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the file_ingestion_status
     */
    omit?: file_ingestion_statusOmit<ExtArgs> | null
    /**
     * The data used to create many file_ingestion_statuses.
     */
    data: file_ingestion_statusCreateManyInput | file_ingestion_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * file_ingestion_status update
   */
  export type file_ingestion_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file_ingestion_status
     */
    select?: file_ingestion_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file_ingestion_status
     */
    omit?: file_ingestion_statusOmit<ExtArgs> | null
    /**
     * The data needed to update a file_ingestion_status.
     */
    data: XOR<file_ingestion_statusUpdateInput, file_ingestion_statusUncheckedUpdateInput>
    /**
     * Choose, which file_ingestion_status to update.
     */
    where: file_ingestion_statusWhereUniqueInput
  }

  /**
   * file_ingestion_status updateMany
   */
  export type file_ingestion_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update file_ingestion_statuses.
     */
    data: XOR<file_ingestion_statusUpdateManyMutationInput, file_ingestion_statusUncheckedUpdateManyInput>
    /**
     * Filter which file_ingestion_statuses to update
     */
    where?: file_ingestion_statusWhereInput
    /**
     * Limit how many file_ingestion_statuses to update.
     */
    limit?: number
  }

  /**
   * file_ingestion_status updateManyAndReturn
   */
  export type file_ingestion_statusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file_ingestion_status
     */
    select?: file_ingestion_statusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the file_ingestion_status
     */
    omit?: file_ingestion_statusOmit<ExtArgs> | null
    /**
     * The data used to update file_ingestion_statuses.
     */
    data: XOR<file_ingestion_statusUpdateManyMutationInput, file_ingestion_statusUncheckedUpdateManyInput>
    /**
     * Filter which file_ingestion_statuses to update
     */
    where?: file_ingestion_statusWhereInput
    /**
     * Limit how many file_ingestion_statuses to update.
     */
    limit?: number
  }

  /**
   * file_ingestion_status upsert
   */
  export type file_ingestion_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file_ingestion_status
     */
    select?: file_ingestion_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file_ingestion_status
     */
    omit?: file_ingestion_statusOmit<ExtArgs> | null
    /**
     * The filter to search for the file_ingestion_status to update in case it exists.
     */
    where: file_ingestion_statusWhereUniqueInput
    /**
     * In case the file_ingestion_status found by the `where` argument doesn't exist, create a new file_ingestion_status with this data.
     */
    create: XOR<file_ingestion_statusCreateInput, file_ingestion_statusUncheckedCreateInput>
    /**
     * In case the file_ingestion_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<file_ingestion_statusUpdateInput, file_ingestion_statusUncheckedUpdateInput>
  }

  /**
   * file_ingestion_status delete
   */
  export type file_ingestion_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file_ingestion_status
     */
    select?: file_ingestion_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file_ingestion_status
     */
    omit?: file_ingestion_statusOmit<ExtArgs> | null
    /**
     * Filter which file_ingestion_status to delete.
     */
    where: file_ingestion_statusWhereUniqueInput
  }

  /**
   * file_ingestion_status deleteMany
   */
  export type file_ingestion_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which file_ingestion_statuses to delete
     */
    where?: file_ingestion_statusWhereInput
    /**
     * Limit how many file_ingestion_statuses to delete.
     */
    limit?: number
  }

  /**
   * file_ingestion_status without action
   */
  export type file_ingestion_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file_ingestion_status
     */
    select?: file_ingestion_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file_ingestion_status
     */
    omit?: file_ingestion_statusOmit<ExtArgs> | null
  }


  /**
   * Model trips_group
   */

  export type AggregateTrips_group = {
    _count: Trips_groupCountAggregateOutputType | null
    _avg: Trips_groupAvgAggregateOutputType | null
    _sum: Trips_groupSumAggregateOutputType | null
    _min: Trips_groupMinAggregateOutputType | null
    _max: Trips_groupMaxAggregateOutputType | null
  }

  export type Trips_groupAvgAggregateOutputType = {
    originLat: number | null
    originLon: number | null
    destinationLat: number | null
    destinationLon: number | null
    hourOfDay: number | null
    tripCount: number | null
  }

  export type Trips_groupSumAggregateOutputType = {
    originLat: number | null
    originLon: number | null
    destinationLat: number | null
    destinationLon: number | null
    hourOfDay: number | null
    tripCount: number | null
  }

  export type Trips_groupMinAggregateOutputType = {
    id: string | null
    region: string | null
    originLat: number | null
    originLon: number | null
    destinationLat: number | null
    destinationLon: number | null
    hourOfDay: number | null
    tripCount: number | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Trips_groupMaxAggregateOutputType = {
    id: string | null
    region: string | null
    originLat: number | null
    originLon: number | null
    destinationLat: number | null
    destinationLon: number | null
    hourOfDay: number | null
    tripCount: number | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Trips_groupCountAggregateOutputType = {
    id: number
    region: number
    originLat: number
    originLon: number
    destinationLat: number
    destinationLon: number
    hourOfDay: number
    tripCount: number
    datasources: number
    firstSeenAt: number
    lastSeenAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Trips_groupAvgAggregateInputType = {
    originLat?: true
    originLon?: true
    destinationLat?: true
    destinationLon?: true
    hourOfDay?: true
    tripCount?: true
  }

  export type Trips_groupSumAggregateInputType = {
    originLat?: true
    originLon?: true
    destinationLat?: true
    destinationLon?: true
    hourOfDay?: true
    tripCount?: true
  }

  export type Trips_groupMinAggregateInputType = {
    id?: true
    region?: true
    originLat?: true
    originLon?: true
    destinationLat?: true
    destinationLon?: true
    hourOfDay?: true
    tripCount?: true
    firstSeenAt?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Trips_groupMaxAggregateInputType = {
    id?: true
    region?: true
    originLat?: true
    originLon?: true
    destinationLat?: true
    destinationLon?: true
    hourOfDay?: true
    tripCount?: true
    firstSeenAt?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Trips_groupCountAggregateInputType = {
    id?: true
    region?: true
    originLat?: true
    originLon?: true
    destinationLat?: true
    destinationLon?: true
    hourOfDay?: true
    tripCount?: true
    datasources?: true
    firstSeenAt?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Trips_groupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trips_group to aggregate.
     */
    where?: trips_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips_groups to fetch.
     */
    orderBy?: trips_groupOrderByWithRelationInput | trips_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trips_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trips_groups
    **/
    _count?: true | Trips_groupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Trips_groupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Trips_groupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Trips_groupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Trips_groupMaxAggregateInputType
  }

  export type GetTrips_groupAggregateType<T extends Trips_groupAggregateArgs> = {
        [P in keyof T & keyof AggregateTrips_group]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrips_group[P]>
      : GetScalarType<T[P], AggregateTrips_group[P]>
  }




  export type trips_groupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trips_groupWhereInput
    orderBy?: trips_groupOrderByWithAggregationInput | trips_groupOrderByWithAggregationInput[]
    by: Trips_groupScalarFieldEnum[] | Trips_groupScalarFieldEnum
    having?: trips_groupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Trips_groupCountAggregateInputType | true
    _avg?: Trips_groupAvgAggregateInputType
    _sum?: Trips_groupSumAggregateInputType
    _min?: Trips_groupMinAggregateInputType
    _max?: Trips_groupMaxAggregateInputType
  }

  export type Trips_groupGroupByOutputType = {
    id: string
    region: string
    originLat: number
    originLon: number
    destinationLat: number
    destinationLon: number
    hourOfDay: number
    tripCount: number
    datasources: string[]
    firstSeenAt: Date
    lastSeenAt: Date
    createdAt: Date
    updatedAt: Date
    _count: Trips_groupCountAggregateOutputType | null
    _avg: Trips_groupAvgAggregateOutputType | null
    _sum: Trips_groupSumAggregateOutputType | null
    _min: Trips_groupMinAggregateOutputType | null
    _max: Trips_groupMaxAggregateOutputType | null
  }

  type GetTrips_groupGroupByPayload<T extends trips_groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Trips_groupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Trips_groupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Trips_groupGroupByOutputType[P]>
            : GetScalarType<T[P], Trips_groupGroupByOutputType[P]>
        }
      >
    >


  export type trips_groupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    region?: boolean
    originLat?: boolean
    originLon?: boolean
    destinationLat?: boolean
    destinationLon?: boolean
    hourOfDay?: boolean
    tripCount?: boolean
    datasources?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["trips_group"]>

  export type trips_groupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    region?: boolean
    originLat?: boolean
    originLon?: boolean
    destinationLat?: boolean
    destinationLon?: boolean
    hourOfDay?: boolean
    tripCount?: boolean
    datasources?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["trips_group"]>

  export type trips_groupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    region?: boolean
    originLat?: boolean
    originLon?: boolean
    destinationLat?: boolean
    destinationLon?: boolean
    hourOfDay?: boolean
    tripCount?: boolean
    datasources?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["trips_group"]>

  export type trips_groupSelectScalar = {
    id?: boolean
    region?: boolean
    originLat?: boolean
    originLon?: boolean
    destinationLat?: boolean
    destinationLon?: boolean
    hourOfDay?: boolean
    tripCount?: boolean
    datasources?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type trips_groupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "region" | "originLat" | "originLon" | "destinationLat" | "destinationLon" | "hourOfDay" | "tripCount" | "datasources" | "firstSeenAt" | "lastSeenAt" | "createdAt" | "updatedAt", ExtArgs["result"]["trips_group"]>

  export type $trips_groupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trips_group"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      region: string
      originLat: number
      originLon: number
      destinationLat: number
      destinationLon: number
      hourOfDay: number
      tripCount: number
      datasources: string[]
      firstSeenAt: Date
      lastSeenAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trips_group"]>
    composites: {}
  }

  type trips_groupGetPayload<S extends boolean | null | undefined | trips_groupDefaultArgs> = $Result.GetResult<Prisma.$trips_groupPayload, S>

  type trips_groupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<trips_groupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Trips_groupCountAggregateInputType | true
    }

  export interface trips_groupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trips_group'], meta: { name: 'trips_group' } }
    /**
     * Find zero or one Trips_group that matches the filter.
     * @param {trips_groupFindUniqueArgs} args - Arguments to find a Trips_group
     * @example
     * // Get one Trips_group
     * const trips_group = await prisma.trips_group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trips_groupFindUniqueArgs>(args: SelectSubset<T, trips_groupFindUniqueArgs<ExtArgs>>): Prisma__trips_groupClient<$Result.GetResult<Prisma.$trips_groupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trips_group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trips_groupFindUniqueOrThrowArgs} args - Arguments to find a Trips_group
     * @example
     * // Get one Trips_group
     * const trips_group = await prisma.trips_group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trips_groupFindUniqueOrThrowArgs>(args: SelectSubset<T, trips_groupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trips_groupClient<$Result.GetResult<Prisma.$trips_groupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trips_group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trips_groupFindFirstArgs} args - Arguments to find a Trips_group
     * @example
     * // Get one Trips_group
     * const trips_group = await prisma.trips_group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trips_groupFindFirstArgs>(args?: SelectSubset<T, trips_groupFindFirstArgs<ExtArgs>>): Prisma__trips_groupClient<$Result.GetResult<Prisma.$trips_groupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trips_group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trips_groupFindFirstOrThrowArgs} args - Arguments to find a Trips_group
     * @example
     * // Get one Trips_group
     * const trips_group = await prisma.trips_group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trips_groupFindFirstOrThrowArgs>(args?: SelectSubset<T, trips_groupFindFirstOrThrowArgs<ExtArgs>>): Prisma__trips_groupClient<$Result.GetResult<Prisma.$trips_groupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trips_groupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips_groups
     * const trips_groups = await prisma.trips_group.findMany()
     * 
     * // Get first 10 Trips_groups
     * const trips_groups = await prisma.trips_group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trips_groupWithIdOnly = await prisma.trips_group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends trips_groupFindManyArgs>(args?: SelectSubset<T, trips_groupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trips_groupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trips_group.
     * @param {trips_groupCreateArgs} args - Arguments to create a Trips_group.
     * @example
     * // Create one Trips_group
     * const Trips_group = await prisma.trips_group.create({
     *   data: {
     *     // ... data to create a Trips_group
     *   }
     * })
     * 
     */
    create<T extends trips_groupCreateArgs>(args: SelectSubset<T, trips_groupCreateArgs<ExtArgs>>): Prisma__trips_groupClient<$Result.GetResult<Prisma.$trips_groupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips_groups.
     * @param {trips_groupCreateManyArgs} args - Arguments to create many Trips_groups.
     * @example
     * // Create many Trips_groups
     * const trips_group = await prisma.trips_group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trips_groupCreateManyArgs>(args?: SelectSubset<T, trips_groupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips_groups and returns the data saved in the database.
     * @param {trips_groupCreateManyAndReturnArgs} args - Arguments to create many Trips_groups.
     * @example
     * // Create many Trips_groups
     * const trips_group = await prisma.trips_group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips_groups and only return the `id`
     * const trips_groupWithIdOnly = await prisma.trips_group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends trips_groupCreateManyAndReturnArgs>(args?: SelectSubset<T, trips_groupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trips_groupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trips_group.
     * @param {trips_groupDeleteArgs} args - Arguments to delete one Trips_group.
     * @example
     * // Delete one Trips_group
     * const Trips_group = await prisma.trips_group.delete({
     *   where: {
     *     // ... filter to delete one Trips_group
     *   }
     * })
     * 
     */
    delete<T extends trips_groupDeleteArgs>(args: SelectSubset<T, trips_groupDeleteArgs<ExtArgs>>): Prisma__trips_groupClient<$Result.GetResult<Prisma.$trips_groupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trips_group.
     * @param {trips_groupUpdateArgs} args - Arguments to update one Trips_group.
     * @example
     * // Update one Trips_group
     * const trips_group = await prisma.trips_group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trips_groupUpdateArgs>(args: SelectSubset<T, trips_groupUpdateArgs<ExtArgs>>): Prisma__trips_groupClient<$Result.GetResult<Prisma.$trips_groupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips_groups.
     * @param {trips_groupDeleteManyArgs} args - Arguments to filter Trips_groups to delete.
     * @example
     * // Delete a few Trips_groups
     * const { count } = await prisma.trips_group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trips_groupDeleteManyArgs>(args?: SelectSubset<T, trips_groupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trips_groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips_groups
     * const trips_group = await prisma.trips_group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trips_groupUpdateManyArgs>(args: SelectSubset<T, trips_groupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips_groups and returns the data updated in the database.
     * @param {trips_groupUpdateManyAndReturnArgs} args - Arguments to update many Trips_groups.
     * @example
     * // Update many Trips_groups
     * const trips_group = await prisma.trips_group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips_groups and only return the `id`
     * const trips_groupWithIdOnly = await prisma.trips_group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends trips_groupUpdateManyAndReturnArgs>(args: SelectSubset<T, trips_groupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trips_groupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trips_group.
     * @param {trips_groupUpsertArgs} args - Arguments to update or create a Trips_group.
     * @example
     * // Update or create a Trips_group
     * const trips_group = await prisma.trips_group.upsert({
     *   create: {
     *     // ... data to create a Trips_group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trips_group we want to update
     *   }
     * })
     */
    upsert<T extends trips_groupUpsertArgs>(args: SelectSubset<T, trips_groupUpsertArgs<ExtArgs>>): Prisma__trips_groupClient<$Result.GetResult<Prisma.$trips_groupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trips_groupCountArgs} args - Arguments to filter Trips_groups to count.
     * @example
     * // Count the number of Trips_groups
     * const count = await prisma.trips_group.count({
     *   where: {
     *     // ... the filter for the Trips_groups we want to count
     *   }
     * })
    **/
    count<T extends trips_groupCountArgs>(
      args?: Subset<T, trips_groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Trips_groupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trips_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trips_groupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Trips_groupAggregateArgs>(args: Subset<T, Trips_groupAggregateArgs>): Prisma.PrismaPromise<GetTrips_groupAggregateType<T>>

    /**
     * Group by Trips_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trips_groupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends trips_groupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trips_groupGroupByArgs['orderBy'] }
        : { orderBy?: trips_groupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, trips_groupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrips_groupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trips_group model
   */
  readonly fields: trips_groupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trips_group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trips_groupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the trips_group model
   */
  interface trips_groupFieldRefs {
    readonly id: FieldRef<"trips_group", 'String'>
    readonly region: FieldRef<"trips_group", 'String'>
    readonly originLat: FieldRef<"trips_group", 'Float'>
    readonly originLon: FieldRef<"trips_group", 'Float'>
    readonly destinationLat: FieldRef<"trips_group", 'Float'>
    readonly destinationLon: FieldRef<"trips_group", 'Float'>
    readonly hourOfDay: FieldRef<"trips_group", 'Int'>
    readonly tripCount: FieldRef<"trips_group", 'Int'>
    readonly datasources: FieldRef<"trips_group", 'String[]'>
    readonly firstSeenAt: FieldRef<"trips_group", 'DateTime'>
    readonly lastSeenAt: FieldRef<"trips_group", 'DateTime'>
    readonly createdAt: FieldRef<"trips_group", 'DateTime'>
    readonly updatedAt: FieldRef<"trips_group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * trips_group findUnique
   */
  export type trips_groupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips_group
     */
    select?: trips_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips_group
     */
    omit?: trips_groupOmit<ExtArgs> | null
    /**
     * Filter, which trips_group to fetch.
     */
    where: trips_groupWhereUniqueInput
  }

  /**
   * trips_group findUniqueOrThrow
   */
  export type trips_groupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips_group
     */
    select?: trips_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips_group
     */
    omit?: trips_groupOmit<ExtArgs> | null
    /**
     * Filter, which trips_group to fetch.
     */
    where: trips_groupWhereUniqueInput
  }

  /**
   * trips_group findFirst
   */
  export type trips_groupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips_group
     */
    select?: trips_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips_group
     */
    omit?: trips_groupOmit<ExtArgs> | null
    /**
     * Filter, which trips_group to fetch.
     */
    where?: trips_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips_groups to fetch.
     */
    orderBy?: trips_groupOrderByWithRelationInput | trips_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trips_groups.
     */
    cursor?: trips_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips_groups.
     */
    distinct?: Trips_groupScalarFieldEnum | Trips_groupScalarFieldEnum[]
  }

  /**
   * trips_group findFirstOrThrow
   */
  export type trips_groupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips_group
     */
    select?: trips_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips_group
     */
    omit?: trips_groupOmit<ExtArgs> | null
    /**
     * Filter, which trips_group to fetch.
     */
    where?: trips_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips_groups to fetch.
     */
    orderBy?: trips_groupOrderByWithRelationInput | trips_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trips_groups.
     */
    cursor?: trips_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips_groups.
     */
    distinct?: Trips_groupScalarFieldEnum | Trips_groupScalarFieldEnum[]
  }

  /**
   * trips_group findMany
   */
  export type trips_groupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips_group
     */
    select?: trips_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips_group
     */
    omit?: trips_groupOmit<ExtArgs> | null
    /**
     * Filter, which trips_groups to fetch.
     */
    where?: trips_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips_groups to fetch.
     */
    orderBy?: trips_groupOrderByWithRelationInput | trips_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trips_groups.
     */
    cursor?: trips_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips_groups.
     */
    skip?: number
    distinct?: Trips_groupScalarFieldEnum | Trips_groupScalarFieldEnum[]
  }

  /**
   * trips_group create
   */
  export type trips_groupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips_group
     */
    select?: trips_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips_group
     */
    omit?: trips_groupOmit<ExtArgs> | null
    /**
     * The data needed to create a trips_group.
     */
    data: XOR<trips_groupCreateInput, trips_groupUncheckedCreateInput>
  }

  /**
   * trips_group createMany
   */
  export type trips_groupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trips_groups.
     */
    data: trips_groupCreateManyInput | trips_groupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trips_group createManyAndReturn
   */
  export type trips_groupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips_group
     */
    select?: trips_groupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trips_group
     */
    omit?: trips_groupOmit<ExtArgs> | null
    /**
     * The data used to create many trips_groups.
     */
    data: trips_groupCreateManyInput | trips_groupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trips_group update
   */
  export type trips_groupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips_group
     */
    select?: trips_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips_group
     */
    omit?: trips_groupOmit<ExtArgs> | null
    /**
     * The data needed to update a trips_group.
     */
    data: XOR<trips_groupUpdateInput, trips_groupUncheckedUpdateInput>
    /**
     * Choose, which trips_group to update.
     */
    where: trips_groupWhereUniqueInput
  }

  /**
   * trips_group updateMany
   */
  export type trips_groupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trips_groups.
     */
    data: XOR<trips_groupUpdateManyMutationInput, trips_groupUncheckedUpdateManyInput>
    /**
     * Filter which trips_groups to update
     */
    where?: trips_groupWhereInput
    /**
     * Limit how many trips_groups to update.
     */
    limit?: number
  }

  /**
   * trips_group updateManyAndReturn
   */
  export type trips_groupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips_group
     */
    select?: trips_groupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trips_group
     */
    omit?: trips_groupOmit<ExtArgs> | null
    /**
     * The data used to update trips_groups.
     */
    data: XOR<trips_groupUpdateManyMutationInput, trips_groupUncheckedUpdateManyInput>
    /**
     * Filter which trips_groups to update
     */
    where?: trips_groupWhereInput
    /**
     * Limit how many trips_groups to update.
     */
    limit?: number
  }

  /**
   * trips_group upsert
   */
  export type trips_groupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips_group
     */
    select?: trips_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips_group
     */
    omit?: trips_groupOmit<ExtArgs> | null
    /**
     * The filter to search for the trips_group to update in case it exists.
     */
    where: trips_groupWhereUniqueInput
    /**
     * In case the trips_group found by the `where` argument doesn't exist, create a new trips_group with this data.
     */
    create: XOR<trips_groupCreateInput, trips_groupUncheckedCreateInput>
    /**
     * In case the trips_group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trips_groupUpdateInput, trips_groupUncheckedUpdateInput>
  }

  /**
   * trips_group delete
   */
  export type trips_groupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips_group
     */
    select?: trips_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips_group
     */
    omit?: trips_groupOmit<ExtArgs> | null
    /**
     * Filter which trips_group to delete.
     */
    where: trips_groupWhereUniqueInput
  }

  /**
   * trips_group deleteMany
   */
  export type trips_groupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trips_groups to delete
     */
    where?: trips_groupWhereInput
    /**
     * Limit how many trips_groups to delete.
     */
    limit?: number
  }

  /**
   * trips_group without action
   */
  export type trips_groupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips_group
     */
    select?: trips_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips_group
     */
    omit?: trips_groupOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const File_ingestion_statusScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    status: 'status',
    totalRows: 'totalRows',
    processedRows: 'processedRows',
    errorMessage: 'errorMessage',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type File_ingestion_statusScalarFieldEnum = (typeof File_ingestion_statusScalarFieldEnum)[keyof typeof File_ingestion_statusScalarFieldEnum]


  export const Trips_groupScalarFieldEnum: {
    id: 'id',
    region: 'region',
    originLat: 'originLat',
    originLon: 'originLon',
    destinationLat: 'destinationLat',
    destinationLon: 'destinationLon',
    hourOfDay: 'hourOfDay',
    tripCount: 'tripCount',
    datasources: 'datasources',
    firstSeenAt: 'firstSeenAt',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Trips_groupScalarFieldEnum = (typeof Trips_groupScalarFieldEnum)[keyof typeof Trips_groupScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type file_ingestion_statusWhereInput = {
    AND?: file_ingestion_statusWhereInput | file_ingestion_statusWhereInput[]
    OR?: file_ingestion_statusWhereInput[]
    NOT?: file_ingestion_statusWhereInput | file_ingestion_statusWhereInput[]
    id?: StringFilter<"file_ingestion_status"> | string
    filename?: StringFilter<"file_ingestion_status"> | string
    status?: StringFilter<"file_ingestion_status"> | string
    totalRows?: IntFilter<"file_ingestion_status"> | number
    processedRows?: IntFilter<"file_ingestion_status"> | number
    errorMessage?: StringNullableFilter<"file_ingestion_status"> | string | null
    startedAt?: DateTimeFilter<"file_ingestion_status"> | Date | string
    completedAt?: DateTimeNullableFilter<"file_ingestion_status"> | Date | string | null
    createdAt?: DateTimeFilter<"file_ingestion_status"> | Date | string
    updatedAt?: DateTimeFilter<"file_ingestion_status"> | Date | string
  }

  export type file_ingestion_statusOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    totalRows?: SortOrder
    processedRows?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type file_ingestion_statusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    filename?: string
    AND?: file_ingestion_statusWhereInput | file_ingestion_statusWhereInput[]
    OR?: file_ingestion_statusWhereInput[]
    NOT?: file_ingestion_statusWhereInput | file_ingestion_statusWhereInput[]
    status?: StringFilter<"file_ingestion_status"> | string
    totalRows?: IntFilter<"file_ingestion_status"> | number
    processedRows?: IntFilter<"file_ingestion_status"> | number
    errorMessage?: StringNullableFilter<"file_ingestion_status"> | string | null
    startedAt?: DateTimeFilter<"file_ingestion_status"> | Date | string
    completedAt?: DateTimeNullableFilter<"file_ingestion_status"> | Date | string | null
    createdAt?: DateTimeFilter<"file_ingestion_status"> | Date | string
    updatedAt?: DateTimeFilter<"file_ingestion_status"> | Date | string
  }, "id" | "filename">

  export type file_ingestion_statusOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    totalRows?: SortOrder
    processedRows?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: file_ingestion_statusCountOrderByAggregateInput
    _avg?: file_ingestion_statusAvgOrderByAggregateInput
    _max?: file_ingestion_statusMaxOrderByAggregateInput
    _min?: file_ingestion_statusMinOrderByAggregateInput
    _sum?: file_ingestion_statusSumOrderByAggregateInput
  }

  export type file_ingestion_statusScalarWhereWithAggregatesInput = {
    AND?: file_ingestion_statusScalarWhereWithAggregatesInput | file_ingestion_statusScalarWhereWithAggregatesInput[]
    OR?: file_ingestion_statusScalarWhereWithAggregatesInput[]
    NOT?: file_ingestion_statusScalarWhereWithAggregatesInput | file_ingestion_statusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"file_ingestion_status"> | string
    filename?: StringWithAggregatesFilter<"file_ingestion_status"> | string
    status?: StringWithAggregatesFilter<"file_ingestion_status"> | string
    totalRows?: IntWithAggregatesFilter<"file_ingestion_status"> | number
    processedRows?: IntWithAggregatesFilter<"file_ingestion_status"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"file_ingestion_status"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"file_ingestion_status"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"file_ingestion_status"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"file_ingestion_status"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"file_ingestion_status"> | Date | string
  }

  export type trips_groupWhereInput = {
    AND?: trips_groupWhereInput | trips_groupWhereInput[]
    OR?: trips_groupWhereInput[]
    NOT?: trips_groupWhereInput | trips_groupWhereInput[]
    id?: StringFilter<"trips_group"> | string
    region?: StringFilter<"trips_group"> | string
    originLat?: FloatFilter<"trips_group"> | number
    originLon?: FloatFilter<"trips_group"> | number
    destinationLat?: FloatFilter<"trips_group"> | number
    destinationLon?: FloatFilter<"trips_group"> | number
    hourOfDay?: IntFilter<"trips_group"> | number
    tripCount?: IntFilter<"trips_group"> | number
    datasources?: StringNullableListFilter<"trips_group">
    firstSeenAt?: DateTimeFilter<"trips_group"> | Date | string
    lastSeenAt?: DateTimeFilter<"trips_group"> | Date | string
    createdAt?: DateTimeFilter<"trips_group"> | Date | string
    updatedAt?: DateTimeFilter<"trips_group"> | Date | string
  }

  export type trips_groupOrderByWithRelationInput = {
    id?: SortOrder
    region?: SortOrder
    originLat?: SortOrder
    originLon?: SortOrder
    destinationLat?: SortOrder
    destinationLon?: SortOrder
    hourOfDay?: SortOrder
    tripCount?: SortOrder
    datasources?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type trips_groupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    region_originLat_originLon_destinationLat_destinationLon_hourOfDay?: trips_groupRegionOriginLatOriginLonDestinationLatDestinationLonHourOfDayCompoundUniqueInput
    AND?: trips_groupWhereInput | trips_groupWhereInput[]
    OR?: trips_groupWhereInput[]
    NOT?: trips_groupWhereInput | trips_groupWhereInput[]
    region?: StringFilter<"trips_group"> | string
    originLat?: FloatFilter<"trips_group"> | number
    originLon?: FloatFilter<"trips_group"> | number
    destinationLat?: FloatFilter<"trips_group"> | number
    destinationLon?: FloatFilter<"trips_group"> | number
    hourOfDay?: IntFilter<"trips_group"> | number
    tripCount?: IntFilter<"trips_group"> | number
    datasources?: StringNullableListFilter<"trips_group">
    firstSeenAt?: DateTimeFilter<"trips_group"> | Date | string
    lastSeenAt?: DateTimeFilter<"trips_group"> | Date | string
    createdAt?: DateTimeFilter<"trips_group"> | Date | string
    updatedAt?: DateTimeFilter<"trips_group"> | Date | string
  }, "id" | "region_originLat_originLon_destinationLat_destinationLon_hourOfDay">

  export type trips_groupOrderByWithAggregationInput = {
    id?: SortOrder
    region?: SortOrder
    originLat?: SortOrder
    originLon?: SortOrder
    destinationLat?: SortOrder
    destinationLon?: SortOrder
    hourOfDay?: SortOrder
    tripCount?: SortOrder
    datasources?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: trips_groupCountOrderByAggregateInput
    _avg?: trips_groupAvgOrderByAggregateInput
    _max?: trips_groupMaxOrderByAggregateInput
    _min?: trips_groupMinOrderByAggregateInput
    _sum?: trips_groupSumOrderByAggregateInput
  }

  export type trips_groupScalarWhereWithAggregatesInput = {
    AND?: trips_groupScalarWhereWithAggregatesInput | trips_groupScalarWhereWithAggregatesInput[]
    OR?: trips_groupScalarWhereWithAggregatesInput[]
    NOT?: trips_groupScalarWhereWithAggregatesInput | trips_groupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"trips_group"> | string
    region?: StringWithAggregatesFilter<"trips_group"> | string
    originLat?: FloatWithAggregatesFilter<"trips_group"> | number
    originLon?: FloatWithAggregatesFilter<"trips_group"> | number
    destinationLat?: FloatWithAggregatesFilter<"trips_group"> | number
    destinationLon?: FloatWithAggregatesFilter<"trips_group"> | number
    hourOfDay?: IntWithAggregatesFilter<"trips_group"> | number
    tripCount?: IntWithAggregatesFilter<"trips_group"> | number
    datasources?: StringNullableListFilter<"trips_group">
    firstSeenAt?: DateTimeWithAggregatesFilter<"trips_group"> | Date | string
    lastSeenAt?: DateTimeWithAggregatesFilter<"trips_group"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"trips_group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"trips_group"> | Date | string
  }

  export type file_ingestion_statusCreateInput = {
    id?: string
    filename: string
    status: string
    totalRows?: number
    processedRows?: number
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type file_ingestion_statusUncheckedCreateInput = {
    id?: string
    filename: string
    status: string
    totalRows?: number
    processedRows?: number
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type file_ingestion_statusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    processedRows?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type file_ingestion_statusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    processedRows?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type file_ingestion_statusCreateManyInput = {
    id?: string
    filename: string
    status: string
    totalRows?: number
    processedRows?: number
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type file_ingestion_statusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    processedRows?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type file_ingestion_statusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    processedRows?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trips_groupCreateInput = {
    id?: string
    region: string
    originLat: number
    originLon: number
    destinationLat: number
    destinationLon: number
    hourOfDay: number
    tripCount?: number
    datasources?: trips_groupCreatedatasourcesInput | string[]
    firstSeenAt: Date | string
    lastSeenAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type trips_groupUncheckedCreateInput = {
    id?: string
    region: string
    originLat: number
    originLon: number
    destinationLat: number
    destinationLon: number
    hourOfDay: number
    tripCount?: number
    datasources?: trips_groupCreatedatasourcesInput | string[]
    firstSeenAt: Date | string
    lastSeenAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type trips_groupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    originLat?: FloatFieldUpdateOperationsInput | number
    originLon?: FloatFieldUpdateOperationsInput | number
    destinationLat?: FloatFieldUpdateOperationsInput | number
    destinationLon?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    tripCount?: IntFieldUpdateOperationsInput | number
    datasources?: trips_groupUpdatedatasourcesInput | string[]
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trips_groupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    originLat?: FloatFieldUpdateOperationsInput | number
    originLon?: FloatFieldUpdateOperationsInput | number
    destinationLat?: FloatFieldUpdateOperationsInput | number
    destinationLon?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    tripCount?: IntFieldUpdateOperationsInput | number
    datasources?: trips_groupUpdatedatasourcesInput | string[]
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trips_groupCreateManyInput = {
    id?: string
    region: string
    originLat: number
    originLon: number
    destinationLat: number
    destinationLon: number
    hourOfDay: number
    tripCount?: number
    datasources?: trips_groupCreatedatasourcesInput | string[]
    firstSeenAt: Date | string
    lastSeenAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type trips_groupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    originLat?: FloatFieldUpdateOperationsInput | number
    originLon?: FloatFieldUpdateOperationsInput | number
    destinationLat?: FloatFieldUpdateOperationsInput | number
    destinationLon?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    tripCount?: IntFieldUpdateOperationsInput | number
    datasources?: trips_groupUpdatedatasourcesInput | string[]
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trips_groupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    originLat?: FloatFieldUpdateOperationsInput | number
    originLon?: FloatFieldUpdateOperationsInput | number
    destinationLat?: FloatFieldUpdateOperationsInput | number
    destinationLon?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    tripCount?: IntFieldUpdateOperationsInput | number
    datasources?: trips_groupUpdatedatasourcesInput | string[]
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type file_ingestion_statusCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    totalRows?: SortOrder
    processedRows?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type file_ingestion_statusAvgOrderByAggregateInput = {
    totalRows?: SortOrder
    processedRows?: SortOrder
  }

  export type file_ingestion_statusMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    totalRows?: SortOrder
    processedRows?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type file_ingestion_statusMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    totalRows?: SortOrder
    processedRows?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type file_ingestion_statusSumOrderByAggregateInput = {
    totalRows?: SortOrder
    processedRows?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type trips_groupRegionOriginLatOriginLonDestinationLatDestinationLonHourOfDayCompoundUniqueInput = {
    region: string
    originLat: number
    originLon: number
    destinationLat: number
    destinationLon: number
    hourOfDay: number
  }

  export type trips_groupCountOrderByAggregateInput = {
    id?: SortOrder
    region?: SortOrder
    originLat?: SortOrder
    originLon?: SortOrder
    destinationLat?: SortOrder
    destinationLon?: SortOrder
    hourOfDay?: SortOrder
    tripCount?: SortOrder
    datasources?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type trips_groupAvgOrderByAggregateInput = {
    originLat?: SortOrder
    originLon?: SortOrder
    destinationLat?: SortOrder
    destinationLon?: SortOrder
    hourOfDay?: SortOrder
    tripCount?: SortOrder
  }

  export type trips_groupMaxOrderByAggregateInput = {
    id?: SortOrder
    region?: SortOrder
    originLat?: SortOrder
    originLon?: SortOrder
    destinationLat?: SortOrder
    destinationLon?: SortOrder
    hourOfDay?: SortOrder
    tripCount?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type trips_groupMinOrderByAggregateInput = {
    id?: SortOrder
    region?: SortOrder
    originLat?: SortOrder
    originLon?: SortOrder
    destinationLat?: SortOrder
    destinationLon?: SortOrder
    hourOfDay?: SortOrder
    tripCount?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type trips_groupSumOrderByAggregateInput = {
    originLat?: SortOrder
    originLon?: SortOrder
    destinationLat?: SortOrder
    destinationLon?: SortOrder
    hourOfDay?: SortOrder
    tripCount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type trips_groupCreatedatasourcesInput = {
    set: string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type trips_groupUpdatedatasourcesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}