
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
 * Model IngestionStatus
 * 
 */
export type IngestionStatus = $Result.DefaultSelection<Prisma.$IngestionStatusPayload>
/**
 * Model TripGroup
 * 
 */
export type TripGroup = $Result.DefaultSelection<Prisma.$TripGroupPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more IngestionStatuses
 * const ingestionStatuses = await prisma.ingestionStatus.findMany()
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
   * // Fetch zero or more IngestionStatuses
   * const ingestionStatuses = await prisma.ingestionStatus.findMany()
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
   * `prisma.ingestionStatus`: Exposes CRUD operations for the **IngestionStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngestionStatuses
    * const ingestionStatuses = await prisma.ingestionStatus.findMany()
    * ```
    */
  get ingestionStatus(): Prisma.IngestionStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripGroup`: Exposes CRUD operations for the **TripGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripGroups
    * const tripGroups = await prisma.tripGroup.findMany()
    * ```
    */
  get tripGroup(): Prisma.TripGroupDelegate<ExtArgs, ClientOptions>;
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
    IngestionStatus: 'IngestionStatus',
    TripGroup: 'TripGroup'
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
      modelProps: "ingestionStatus" | "tripGroup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      IngestionStatus: {
        payload: Prisma.$IngestionStatusPayload<ExtArgs>
        fields: Prisma.IngestionStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngestionStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngestionStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionStatusPayload>
          }
          findFirst: {
            args: Prisma.IngestionStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngestionStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionStatusPayload>
          }
          findMany: {
            args: Prisma.IngestionStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionStatusPayload>[]
          }
          create: {
            args: Prisma.IngestionStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionStatusPayload>
          }
          createMany: {
            args: Prisma.IngestionStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngestionStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionStatusPayload>[]
          }
          delete: {
            args: Prisma.IngestionStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionStatusPayload>
          }
          update: {
            args: Prisma.IngestionStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionStatusPayload>
          }
          deleteMany: {
            args: Prisma.IngestionStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngestionStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngestionStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionStatusPayload>[]
          }
          upsert: {
            args: Prisma.IngestionStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionStatusPayload>
          }
          aggregate: {
            args: Prisma.IngestionStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngestionStatus>
          }
          groupBy: {
            args: Prisma.IngestionStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngestionStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngestionStatusCountArgs<ExtArgs>
            result: $Utils.Optional<IngestionStatusCountAggregateOutputType> | number
          }
        }
      }
      TripGroup: {
        payload: Prisma.$TripGroupPayload<ExtArgs>
        fields: Prisma.TripGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripGroupPayload>
          }
          findFirst: {
            args: Prisma.TripGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripGroupPayload>
          }
          findMany: {
            args: Prisma.TripGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripGroupPayload>[]
          }
          create: {
            args: Prisma.TripGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripGroupPayload>
          }
          createMany: {
            args: Prisma.TripGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripGroupPayload>[]
          }
          delete: {
            args: Prisma.TripGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripGroupPayload>
          }
          update: {
            args: Prisma.TripGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripGroupPayload>
          }
          deleteMany: {
            args: Prisma.TripGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripGroupPayload>[]
          }
          upsert: {
            args: Prisma.TripGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripGroupPayload>
          }
          aggregate: {
            args: Prisma.TripGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripGroup>
          }
          groupBy: {
            args: Prisma.TripGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripGroupCountArgs<ExtArgs>
            result: $Utils.Optional<TripGroupCountAggregateOutputType> | number
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
    ingestionStatus?: IngestionStatusOmit
    tripGroup?: TripGroupOmit
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
   * Model IngestionStatus
   */

  export type AggregateIngestionStatus = {
    _count: IngestionStatusCountAggregateOutputType | null
    _avg: IngestionStatusAvgAggregateOutputType | null
    _sum: IngestionStatusSumAggregateOutputType | null
    _min: IngestionStatusMinAggregateOutputType | null
    _max: IngestionStatusMaxAggregateOutputType | null
  }

  export type IngestionStatusAvgAggregateOutputType = {
    totalRows: number | null
    processedRows: number | null
  }

  export type IngestionStatusSumAggregateOutputType = {
    totalRows: number | null
    processedRows: number | null
  }

  export type IngestionStatusMinAggregateOutputType = {
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

  export type IngestionStatusMaxAggregateOutputType = {
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

  export type IngestionStatusCountAggregateOutputType = {
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


  export type IngestionStatusAvgAggregateInputType = {
    totalRows?: true
    processedRows?: true
  }

  export type IngestionStatusSumAggregateInputType = {
    totalRows?: true
    processedRows?: true
  }

  export type IngestionStatusMinAggregateInputType = {
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

  export type IngestionStatusMaxAggregateInputType = {
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

  export type IngestionStatusCountAggregateInputType = {
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

  export type IngestionStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestionStatus to aggregate.
     */
    where?: IngestionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestionStatuses to fetch.
     */
    orderBy?: IngestionStatusOrderByWithRelationInput | IngestionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngestionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngestionStatuses
    **/
    _count?: true | IngestionStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngestionStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngestionStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngestionStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngestionStatusMaxAggregateInputType
  }

  export type GetIngestionStatusAggregateType<T extends IngestionStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateIngestionStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngestionStatus[P]>
      : GetScalarType<T[P], AggregateIngestionStatus[P]>
  }




  export type IngestionStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngestionStatusWhereInput
    orderBy?: IngestionStatusOrderByWithAggregationInput | IngestionStatusOrderByWithAggregationInput[]
    by: IngestionStatusScalarFieldEnum[] | IngestionStatusScalarFieldEnum
    having?: IngestionStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngestionStatusCountAggregateInputType | true
    _avg?: IngestionStatusAvgAggregateInputType
    _sum?: IngestionStatusSumAggregateInputType
    _min?: IngestionStatusMinAggregateInputType
    _max?: IngestionStatusMaxAggregateInputType
  }

  export type IngestionStatusGroupByOutputType = {
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
    _count: IngestionStatusCountAggregateOutputType | null
    _avg: IngestionStatusAvgAggregateOutputType | null
    _sum: IngestionStatusSumAggregateOutputType | null
    _min: IngestionStatusMinAggregateOutputType | null
    _max: IngestionStatusMaxAggregateOutputType | null
  }

  type GetIngestionStatusGroupByPayload<T extends IngestionStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngestionStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngestionStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngestionStatusGroupByOutputType[P]>
            : GetScalarType<T[P], IngestionStatusGroupByOutputType[P]>
        }
      >
    >


  export type IngestionStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["ingestionStatus"]>

  export type IngestionStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["ingestionStatus"]>

  export type IngestionStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["ingestionStatus"]>

  export type IngestionStatusSelectScalar = {
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

  export type IngestionStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "status" | "totalRows" | "processedRows" | "errorMessage" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["ingestionStatus"]>

  export type $IngestionStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngestionStatus"
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
    }, ExtArgs["result"]["ingestionStatus"]>
    composites: {}
  }

  type IngestionStatusGetPayload<S extends boolean | null | undefined | IngestionStatusDefaultArgs> = $Result.GetResult<Prisma.$IngestionStatusPayload, S>

  type IngestionStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngestionStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngestionStatusCountAggregateInputType | true
    }

  export interface IngestionStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngestionStatus'], meta: { name: 'IngestionStatus' } }
    /**
     * Find zero or one IngestionStatus that matches the filter.
     * @param {IngestionStatusFindUniqueArgs} args - Arguments to find a IngestionStatus
     * @example
     * // Get one IngestionStatus
     * const ingestionStatus = await prisma.ingestionStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngestionStatusFindUniqueArgs>(args: SelectSubset<T, IngestionStatusFindUniqueArgs<ExtArgs>>): Prisma__IngestionStatusClient<$Result.GetResult<Prisma.$IngestionStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IngestionStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngestionStatusFindUniqueOrThrowArgs} args - Arguments to find a IngestionStatus
     * @example
     * // Get one IngestionStatus
     * const ingestionStatus = await prisma.ingestionStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngestionStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, IngestionStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngestionStatusClient<$Result.GetResult<Prisma.$IngestionStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngestionStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionStatusFindFirstArgs} args - Arguments to find a IngestionStatus
     * @example
     * // Get one IngestionStatus
     * const ingestionStatus = await prisma.ingestionStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngestionStatusFindFirstArgs>(args?: SelectSubset<T, IngestionStatusFindFirstArgs<ExtArgs>>): Prisma__IngestionStatusClient<$Result.GetResult<Prisma.$IngestionStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngestionStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionStatusFindFirstOrThrowArgs} args - Arguments to find a IngestionStatus
     * @example
     * // Get one IngestionStatus
     * const ingestionStatus = await prisma.ingestionStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngestionStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, IngestionStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngestionStatusClient<$Result.GetResult<Prisma.$IngestionStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IngestionStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngestionStatuses
     * const ingestionStatuses = await prisma.ingestionStatus.findMany()
     * 
     * // Get first 10 IngestionStatuses
     * const ingestionStatuses = await prisma.ingestionStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingestionStatusWithIdOnly = await prisma.ingestionStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngestionStatusFindManyArgs>(args?: SelectSubset<T, IngestionStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestionStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IngestionStatus.
     * @param {IngestionStatusCreateArgs} args - Arguments to create a IngestionStatus.
     * @example
     * // Create one IngestionStatus
     * const IngestionStatus = await prisma.ingestionStatus.create({
     *   data: {
     *     // ... data to create a IngestionStatus
     *   }
     * })
     * 
     */
    create<T extends IngestionStatusCreateArgs>(args: SelectSubset<T, IngestionStatusCreateArgs<ExtArgs>>): Prisma__IngestionStatusClient<$Result.GetResult<Prisma.$IngestionStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IngestionStatuses.
     * @param {IngestionStatusCreateManyArgs} args - Arguments to create many IngestionStatuses.
     * @example
     * // Create many IngestionStatuses
     * const ingestionStatus = await prisma.ingestionStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngestionStatusCreateManyArgs>(args?: SelectSubset<T, IngestionStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngestionStatuses and returns the data saved in the database.
     * @param {IngestionStatusCreateManyAndReturnArgs} args - Arguments to create many IngestionStatuses.
     * @example
     * // Create many IngestionStatuses
     * const ingestionStatus = await prisma.ingestionStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngestionStatuses and only return the `id`
     * const ingestionStatusWithIdOnly = await prisma.ingestionStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngestionStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, IngestionStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestionStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IngestionStatus.
     * @param {IngestionStatusDeleteArgs} args - Arguments to delete one IngestionStatus.
     * @example
     * // Delete one IngestionStatus
     * const IngestionStatus = await prisma.ingestionStatus.delete({
     *   where: {
     *     // ... filter to delete one IngestionStatus
     *   }
     * })
     * 
     */
    delete<T extends IngestionStatusDeleteArgs>(args: SelectSubset<T, IngestionStatusDeleteArgs<ExtArgs>>): Prisma__IngestionStatusClient<$Result.GetResult<Prisma.$IngestionStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IngestionStatus.
     * @param {IngestionStatusUpdateArgs} args - Arguments to update one IngestionStatus.
     * @example
     * // Update one IngestionStatus
     * const ingestionStatus = await prisma.ingestionStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngestionStatusUpdateArgs>(args: SelectSubset<T, IngestionStatusUpdateArgs<ExtArgs>>): Prisma__IngestionStatusClient<$Result.GetResult<Prisma.$IngestionStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IngestionStatuses.
     * @param {IngestionStatusDeleteManyArgs} args - Arguments to filter IngestionStatuses to delete.
     * @example
     * // Delete a few IngestionStatuses
     * const { count } = await prisma.ingestionStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngestionStatusDeleteManyArgs>(args?: SelectSubset<T, IngestionStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngestionStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngestionStatuses
     * const ingestionStatus = await prisma.ingestionStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngestionStatusUpdateManyArgs>(args: SelectSubset<T, IngestionStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngestionStatuses and returns the data updated in the database.
     * @param {IngestionStatusUpdateManyAndReturnArgs} args - Arguments to update many IngestionStatuses.
     * @example
     * // Update many IngestionStatuses
     * const ingestionStatus = await prisma.ingestionStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IngestionStatuses and only return the `id`
     * const ingestionStatusWithIdOnly = await prisma.ingestionStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends IngestionStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, IngestionStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestionStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IngestionStatus.
     * @param {IngestionStatusUpsertArgs} args - Arguments to update or create a IngestionStatus.
     * @example
     * // Update or create a IngestionStatus
     * const ingestionStatus = await prisma.ingestionStatus.upsert({
     *   create: {
     *     // ... data to create a IngestionStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngestionStatus we want to update
     *   }
     * })
     */
    upsert<T extends IngestionStatusUpsertArgs>(args: SelectSubset<T, IngestionStatusUpsertArgs<ExtArgs>>): Prisma__IngestionStatusClient<$Result.GetResult<Prisma.$IngestionStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IngestionStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionStatusCountArgs} args - Arguments to filter IngestionStatuses to count.
     * @example
     * // Count the number of IngestionStatuses
     * const count = await prisma.ingestionStatus.count({
     *   where: {
     *     // ... the filter for the IngestionStatuses we want to count
     *   }
     * })
    **/
    count<T extends IngestionStatusCountArgs>(
      args?: Subset<T, IngestionStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngestionStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngestionStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngestionStatusAggregateArgs>(args: Subset<T, IngestionStatusAggregateArgs>): Prisma.PrismaPromise<GetIngestionStatusAggregateType<T>>

    /**
     * Group by IngestionStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionStatusGroupByArgs} args - Group by arguments.
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
      T extends IngestionStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngestionStatusGroupByArgs['orderBy'] }
        : { orderBy?: IngestionStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngestionStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngestionStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngestionStatus model
   */
  readonly fields: IngestionStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngestionStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngestionStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IngestionStatus model
   */
  interface IngestionStatusFieldRefs {
    readonly id: FieldRef<"IngestionStatus", 'String'>
    readonly filename: FieldRef<"IngestionStatus", 'String'>
    readonly status: FieldRef<"IngestionStatus", 'String'>
    readonly totalRows: FieldRef<"IngestionStatus", 'Int'>
    readonly processedRows: FieldRef<"IngestionStatus", 'Int'>
    readonly errorMessage: FieldRef<"IngestionStatus", 'String'>
    readonly startedAt: FieldRef<"IngestionStatus", 'DateTime'>
    readonly completedAt: FieldRef<"IngestionStatus", 'DateTime'>
    readonly createdAt: FieldRef<"IngestionStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"IngestionStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IngestionStatus findUnique
   */
  export type IngestionStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionStatus
     */
    select?: IngestionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionStatus
     */
    omit?: IngestionStatusOmit<ExtArgs> | null
    /**
     * Filter, which IngestionStatus to fetch.
     */
    where: IngestionStatusWhereUniqueInput
  }

  /**
   * IngestionStatus findUniqueOrThrow
   */
  export type IngestionStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionStatus
     */
    select?: IngestionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionStatus
     */
    omit?: IngestionStatusOmit<ExtArgs> | null
    /**
     * Filter, which IngestionStatus to fetch.
     */
    where: IngestionStatusWhereUniqueInput
  }

  /**
   * IngestionStatus findFirst
   */
  export type IngestionStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionStatus
     */
    select?: IngestionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionStatus
     */
    omit?: IngestionStatusOmit<ExtArgs> | null
    /**
     * Filter, which IngestionStatus to fetch.
     */
    where?: IngestionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestionStatuses to fetch.
     */
    orderBy?: IngestionStatusOrderByWithRelationInput | IngestionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestionStatuses.
     */
    cursor?: IngestionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestionStatuses.
     */
    distinct?: IngestionStatusScalarFieldEnum | IngestionStatusScalarFieldEnum[]
  }

  /**
   * IngestionStatus findFirstOrThrow
   */
  export type IngestionStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionStatus
     */
    select?: IngestionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionStatus
     */
    omit?: IngestionStatusOmit<ExtArgs> | null
    /**
     * Filter, which IngestionStatus to fetch.
     */
    where?: IngestionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestionStatuses to fetch.
     */
    orderBy?: IngestionStatusOrderByWithRelationInput | IngestionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestionStatuses.
     */
    cursor?: IngestionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestionStatuses.
     */
    distinct?: IngestionStatusScalarFieldEnum | IngestionStatusScalarFieldEnum[]
  }

  /**
   * IngestionStatus findMany
   */
  export type IngestionStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionStatus
     */
    select?: IngestionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionStatus
     */
    omit?: IngestionStatusOmit<ExtArgs> | null
    /**
     * Filter, which IngestionStatuses to fetch.
     */
    where?: IngestionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestionStatuses to fetch.
     */
    orderBy?: IngestionStatusOrderByWithRelationInput | IngestionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngestionStatuses.
     */
    cursor?: IngestionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestionStatuses.
     */
    skip?: number
    distinct?: IngestionStatusScalarFieldEnum | IngestionStatusScalarFieldEnum[]
  }

  /**
   * IngestionStatus create
   */
  export type IngestionStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionStatus
     */
    select?: IngestionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionStatus
     */
    omit?: IngestionStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a IngestionStatus.
     */
    data: XOR<IngestionStatusCreateInput, IngestionStatusUncheckedCreateInput>
  }

  /**
   * IngestionStatus createMany
   */
  export type IngestionStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngestionStatuses.
     */
    data: IngestionStatusCreateManyInput | IngestionStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngestionStatus createManyAndReturn
   */
  export type IngestionStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionStatus
     */
    select?: IngestionStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionStatus
     */
    omit?: IngestionStatusOmit<ExtArgs> | null
    /**
     * The data used to create many IngestionStatuses.
     */
    data: IngestionStatusCreateManyInput | IngestionStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngestionStatus update
   */
  export type IngestionStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionStatus
     */
    select?: IngestionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionStatus
     */
    omit?: IngestionStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a IngestionStatus.
     */
    data: XOR<IngestionStatusUpdateInput, IngestionStatusUncheckedUpdateInput>
    /**
     * Choose, which IngestionStatus to update.
     */
    where: IngestionStatusWhereUniqueInput
  }

  /**
   * IngestionStatus updateMany
   */
  export type IngestionStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngestionStatuses.
     */
    data: XOR<IngestionStatusUpdateManyMutationInput, IngestionStatusUncheckedUpdateManyInput>
    /**
     * Filter which IngestionStatuses to update
     */
    where?: IngestionStatusWhereInput
    /**
     * Limit how many IngestionStatuses to update.
     */
    limit?: number
  }

  /**
   * IngestionStatus updateManyAndReturn
   */
  export type IngestionStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionStatus
     */
    select?: IngestionStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionStatus
     */
    omit?: IngestionStatusOmit<ExtArgs> | null
    /**
     * The data used to update IngestionStatuses.
     */
    data: XOR<IngestionStatusUpdateManyMutationInput, IngestionStatusUncheckedUpdateManyInput>
    /**
     * Filter which IngestionStatuses to update
     */
    where?: IngestionStatusWhereInput
    /**
     * Limit how many IngestionStatuses to update.
     */
    limit?: number
  }

  /**
   * IngestionStatus upsert
   */
  export type IngestionStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionStatus
     */
    select?: IngestionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionStatus
     */
    omit?: IngestionStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the IngestionStatus to update in case it exists.
     */
    where: IngestionStatusWhereUniqueInput
    /**
     * In case the IngestionStatus found by the `where` argument doesn't exist, create a new IngestionStatus with this data.
     */
    create: XOR<IngestionStatusCreateInput, IngestionStatusUncheckedCreateInput>
    /**
     * In case the IngestionStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngestionStatusUpdateInput, IngestionStatusUncheckedUpdateInput>
  }

  /**
   * IngestionStatus delete
   */
  export type IngestionStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionStatus
     */
    select?: IngestionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionStatus
     */
    omit?: IngestionStatusOmit<ExtArgs> | null
    /**
     * Filter which IngestionStatus to delete.
     */
    where: IngestionStatusWhereUniqueInput
  }

  /**
   * IngestionStatus deleteMany
   */
  export type IngestionStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestionStatuses to delete
     */
    where?: IngestionStatusWhereInput
    /**
     * Limit how many IngestionStatuses to delete.
     */
    limit?: number
  }

  /**
   * IngestionStatus without action
   */
  export type IngestionStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionStatus
     */
    select?: IngestionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionStatus
     */
    omit?: IngestionStatusOmit<ExtArgs> | null
  }


  /**
   * Model TripGroup
   */

  export type AggregateTripGroup = {
    _count: TripGroupCountAggregateOutputType | null
    _avg: TripGroupAvgAggregateOutputType | null
    _sum: TripGroupSumAggregateOutputType | null
    _min: TripGroupMinAggregateOutputType | null
    _max: TripGroupMaxAggregateOutputType | null
  }

  export type TripGroupAvgAggregateOutputType = {
    originLat: number | null
    originLon: number | null
    destinationLat: number | null
    destinationLon: number | null
    hourOfDay: number | null
    tripCount: number | null
  }

  export type TripGroupSumAggregateOutputType = {
    originLat: number | null
    originLon: number | null
    destinationLat: number | null
    destinationLon: number | null
    hourOfDay: number | null
    tripCount: number | null
  }

  export type TripGroupMinAggregateOutputType = {
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

  export type TripGroupMaxAggregateOutputType = {
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

  export type TripGroupCountAggregateOutputType = {
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


  export type TripGroupAvgAggregateInputType = {
    originLat?: true
    originLon?: true
    destinationLat?: true
    destinationLon?: true
    hourOfDay?: true
    tripCount?: true
  }

  export type TripGroupSumAggregateInputType = {
    originLat?: true
    originLon?: true
    destinationLat?: true
    destinationLon?: true
    hourOfDay?: true
    tripCount?: true
  }

  export type TripGroupMinAggregateInputType = {
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

  export type TripGroupMaxAggregateInputType = {
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

  export type TripGroupCountAggregateInputType = {
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

  export type TripGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripGroup to aggregate.
     */
    where?: TripGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripGroups to fetch.
     */
    orderBy?: TripGroupOrderByWithRelationInput | TripGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripGroups
    **/
    _count?: true | TripGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripGroupMaxAggregateInputType
  }

  export type GetTripGroupAggregateType<T extends TripGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateTripGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripGroup[P]>
      : GetScalarType<T[P], AggregateTripGroup[P]>
  }




  export type TripGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripGroupWhereInput
    orderBy?: TripGroupOrderByWithAggregationInput | TripGroupOrderByWithAggregationInput[]
    by: TripGroupScalarFieldEnum[] | TripGroupScalarFieldEnum
    having?: TripGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripGroupCountAggregateInputType | true
    _avg?: TripGroupAvgAggregateInputType
    _sum?: TripGroupSumAggregateInputType
    _min?: TripGroupMinAggregateInputType
    _max?: TripGroupMaxAggregateInputType
  }

  export type TripGroupGroupByOutputType = {
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
    _count: TripGroupCountAggregateOutputType | null
    _avg: TripGroupAvgAggregateOutputType | null
    _sum: TripGroupSumAggregateOutputType | null
    _min: TripGroupMinAggregateOutputType | null
    _max: TripGroupMaxAggregateOutputType | null
  }

  type GetTripGroupGroupByPayload<T extends TripGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupGroupByOutputType[P]>
        }
      >
    >


  export type TripGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["tripGroup"]>

  export type TripGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["tripGroup"]>

  export type TripGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["tripGroup"]>

  export type TripGroupSelectScalar = {
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

  export type TripGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "region" | "originLat" | "originLon" | "destinationLat" | "destinationLon" | "hourOfDay" | "tripCount" | "datasources" | "firstSeenAt" | "lastSeenAt" | "createdAt" | "updatedAt", ExtArgs["result"]["tripGroup"]>

  export type $TripGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripGroup"
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
    }, ExtArgs["result"]["tripGroup"]>
    composites: {}
  }

  type TripGroupGetPayload<S extends boolean | null | undefined | TripGroupDefaultArgs> = $Result.GetResult<Prisma.$TripGroupPayload, S>

  type TripGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripGroupCountAggregateInputType | true
    }

  export interface TripGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripGroup'], meta: { name: 'TripGroup' } }
    /**
     * Find zero or one TripGroup that matches the filter.
     * @param {TripGroupFindUniqueArgs} args - Arguments to find a TripGroup
     * @example
     * // Get one TripGroup
     * const tripGroup = await prisma.tripGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripGroupFindUniqueArgs>(args: SelectSubset<T, TripGroupFindUniqueArgs<ExtArgs>>): Prisma__TripGroupClient<$Result.GetResult<Prisma.$TripGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripGroupFindUniqueOrThrowArgs} args - Arguments to find a TripGroup
     * @example
     * // Get one TripGroup
     * const tripGroup = await prisma.tripGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, TripGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripGroupClient<$Result.GetResult<Prisma.$TripGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupFindFirstArgs} args - Arguments to find a TripGroup
     * @example
     * // Get one TripGroup
     * const tripGroup = await prisma.tripGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripGroupFindFirstArgs>(args?: SelectSubset<T, TripGroupFindFirstArgs<ExtArgs>>): Prisma__TripGroupClient<$Result.GetResult<Prisma.$TripGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupFindFirstOrThrowArgs} args - Arguments to find a TripGroup
     * @example
     * // Get one TripGroup
     * const tripGroup = await prisma.tripGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, TripGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripGroupClient<$Result.GetResult<Prisma.$TripGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripGroups
     * const tripGroups = await prisma.tripGroup.findMany()
     * 
     * // Get first 10 TripGroups
     * const tripGroups = await prisma.tripGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripGroupWithIdOnly = await prisma.tripGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripGroupFindManyArgs>(args?: SelectSubset<T, TripGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripGroup.
     * @param {TripGroupCreateArgs} args - Arguments to create a TripGroup.
     * @example
     * // Create one TripGroup
     * const TripGroup = await prisma.tripGroup.create({
     *   data: {
     *     // ... data to create a TripGroup
     *   }
     * })
     * 
     */
    create<T extends TripGroupCreateArgs>(args: SelectSubset<T, TripGroupCreateArgs<ExtArgs>>): Prisma__TripGroupClient<$Result.GetResult<Prisma.$TripGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripGroups.
     * @param {TripGroupCreateManyArgs} args - Arguments to create many TripGroups.
     * @example
     * // Create many TripGroups
     * const tripGroup = await prisma.tripGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripGroupCreateManyArgs>(args?: SelectSubset<T, TripGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripGroups and returns the data saved in the database.
     * @param {TripGroupCreateManyAndReturnArgs} args - Arguments to create many TripGroups.
     * @example
     * // Create many TripGroups
     * const tripGroup = await prisma.tripGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripGroups and only return the `id`
     * const tripGroupWithIdOnly = await prisma.tripGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, TripGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripGroup.
     * @param {TripGroupDeleteArgs} args - Arguments to delete one TripGroup.
     * @example
     * // Delete one TripGroup
     * const TripGroup = await prisma.tripGroup.delete({
     *   where: {
     *     // ... filter to delete one TripGroup
     *   }
     * })
     * 
     */
    delete<T extends TripGroupDeleteArgs>(args: SelectSubset<T, TripGroupDeleteArgs<ExtArgs>>): Prisma__TripGroupClient<$Result.GetResult<Prisma.$TripGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripGroup.
     * @param {TripGroupUpdateArgs} args - Arguments to update one TripGroup.
     * @example
     * // Update one TripGroup
     * const tripGroup = await prisma.tripGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripGroupUpdateArgs>(args: SelectSubset<T, TripGroupUpdateArgs<ExtArgs>>): Prisma__TripGroupClient<$Result.GetResult<Prisma.$TripGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripGroups.
     * @param {TripGroupDeleteManyArgs} args - Arguments to filter TripGroups to delete.
     * @example
     * // Delete a few TripGroups
     * const { count } = await prisma.tripGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripGroupDeleteManyArgs>(args?: SelectSubset<T, TripGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripGroups
     * const tripGroup = await prisma.tripGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripGroupUpdateManyArgs>(args: SelectSubset<T, TripGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripGroups and returns the data updated in the database.
     * @param {TripGroupUpdateManyAndReturnArgs} args - Arguments to update many TripGroups.
     * @example
     * // Update many TripGroups
     * const tripGroup = await prisma.tripGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripGroups and only return the `id`
     * const tripGroupWithIdOnly = await prisma.tripGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends TripGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, TripGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripGroup.
     * @param {TripGroupUpsertArgs} args - Arguments to update or create a TripGroup.
     * @example
     * // Update or create a TripGroup
     * const tripGroup = await prisma.tripGroup.upsert({
     *   create: {
     *     // ... data to create a TripGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripGroup we want to update
     *   }
     * })
     */
    upsert<T extends TripGroupUpsertArgs>(args: SelectSubset<T, TripGroupUpsertArgs<ExtArgs>>): Prisma__TripGroupClient<$Result.GetResult<Prisma.$TripGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupCountArgs} args - Arguments to filter TripGroups to count.
     * @example
     * // Count the number of TripGroups
     * const count = await prisma.tripGroup.count({
     *   where: {
     *     // ... the filter for the TripGroups we want to count
     *   }
     * })
    **/
    count<T extends TripGroupCountArgs>(
      args?: Subset<T, TripGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripGroupAggregateArgs>(args: Subset<T, TripGroupAggregateArgs>): Prisma.PrismaPromise<GetTripGroupAggregateType<T>>

    /**
     * Group by TripGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupGroupByArgs} args - Group by arguments.
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
      T extends TripGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripGroup model
   */
  readonly fields: TripGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TripGroup model
   */
  interface TripGroupFieldRefs {
    readonly id: FieldRef<"TripGroup", 'String'>
    readonly region: FieldRef<"TripGroup", 'String'>
    readonly originLat: FieldRef<"TripGroup", 'Float'>
    readonly originLon: FieldRef<"TripGroup", 'Float'>
    readonly destinationLat: FieldRef<"TripGroup", 'Float'>
    readonly destinationLon: FieldRef<"TripGroup", 'Float'>
    readonly hourOfDay: FieldRef<"TripGroup", 'Int'>
    readonly tripCount: FieldRef<"TripGroup", 'Int'>
    readonly datasources: FieldRef<"TripGroup", 'String[]'>
    readonly firstSeenAt: FieldRef<"TripGroup", 'DateTime'>
    readonly lastSeenAt: FieldRef<"TripGroup", 'DateTime'>
    readonly createdAt: FieldRef<"TripGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"TripGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripGroup findUnique
   */
  export type TripGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripGroup
     */
    select?: TripGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripGroup
     */
    omit?: TripGroupOmit<ExtArgs> | null
    /**
     * Filter, which TripGroup to fetch.
     */
    where: TripGroupWhereUniqueInput
  }

  /**
   * TripGroup findUniqueOrThrow
   */
  export type TripGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripGroup
     */
    select?: TripGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripGroup
     */
    omit?: TripGroupOmit<ExtArgs> | null
    /**
     * Filter, which TripGroup to fetch.
     */
    where: TripGroupWhereUniqueInput
  }

  /**
   * TripGroup findFirst
   */
  export type TripGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripGroup
     */
    select?: TripGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripGroup
     */
    omit?: TripGroupOmit<ExtArgs> | null
    /**
     * Filter, which TripGroup to fetch.
     */
    where?: TripGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripGroups to fetch.
     */
    orderBy?: TripGroupOrderByWithRelationInput | TripGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripGroups.
     */
    cursor?: TripGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripGroups.
     */
    distinct?: TripGroupScalarFieldEnum | TripGroupScalarFieldEnum[]
  }

  /**
   * TripGroup findFirstOrThrow
   */
  export type TripGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripGroup
     */
    select?: TripGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripGroup
     */
    omit?: TripGroupOmit<ExtArgs> | null
    /**
     * Filter, which TripGroup to fetch.
     */
    where?: TripGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripGroups to fetch.
     */
    orderBy?: TripGroupOrderByWithRelationInput | TripGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripGroups.
     */
    cursor?: TripGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripGroups.
     */
    distinct?: TripGroupScalarFieldEnum | TripGroupScalarFieldEnum[]
  }

  /**
   * TripGroup findMany
   */
  export type TripGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripGroup
     */
    select?: TripGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripGroup
     */
    omit?: TripGroupOmit<ExtArgs> | null
    /**
     * Filter, which TripGroups to fetch.
     */
    where?: TripGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripGroups to fetch.
     */
    orderBy?: TripGroupOrderByWithRelationInput | TripGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripGroups.
     */
    cursor?: TripGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripGroups.
     */
    skip?: number
    distinct?: TripGroupScalarFieldEnum | TripGroupScalarFieldEnum[]
  }

  /**
   * TripGroup create
   */
  export type TripGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripGroup
     */
    select?: TripGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripGroup
     */
    omit?: TripGroupOmit<ExtArgs> | null
    /**
     * The data needed to create a TripGroup.
     */
    data: XOR<TripGroupCreateInput, TripGroupUncheckedCreateInput>
  }

  /**
   * TripGroup createMany
   */
  export type TripGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripGroups.
     */
    data: TripGroupCreateManyInput | TripGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripGroup createManyAndReturn
   */
  export type TripGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripGroup
     */
    select?: TripGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripGroup
     */
    omit?: TripGroupOmit<ExtArgs> | null
    /**
     * The data used to create many TripGroups.
     */
    data: TripGroupCreateManyInput | TripGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripGroup update
   */
  export type TripGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripGroup
     */
    select?: TripGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripGroup
     */
    omit?: TripGroupOmit<ExtArgs> | null
    /**
     * The data needed to update a TripGroup.
     */
    data: XOR<TripGroupUpdateInput, TripGroupUncheckedUpdateInput>
    /**
     * Choose, which TripGroup to update.
     */
    where: TripGroupWhereUniqueInput
  }

  /**
   * TripGroup updateMany
   */
  export type TripGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripGroups.
     */
    data: XOR<TripGroupUpdateManyMutationInput, TripGroupUncheckedUpdateManyInput>
    /**
     * Filter which TripGroups to update
     */
    where?: TripGroupWhereInput
    /**
     * Limit how many TripGroups to update.
     */
    limit?: number
  }

  /**
   * TripGroup updateManyAndReturn
   */
  export type TripGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripGroup
     */
    select?: TripGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripGroup
     */
    omit?: TripGroupOmit<ExtArgs> | null
    /**
     * The data used to update TripGroups.
     */
    data: XOR<TripGroupUpdateManyMutationInput, TripGroupUncheckedUpdateManyInput>
    /**
     * Filter which TripGroups to update
     */
    where?: TripGroupWhereInput
    /**
     * Limit how many TripGroups to update.
     */
    limit?: number
  }

  /**
   * TripGroup upsert
   */
  export type TripGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripGroup
     */
    select?: TripGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripGroup
     */
    omit?: TripGroupOmit<ExtArgs> | null
    /**
     * The filter to search for the TripGroup to update in case it exists.
     */
    where: TripGroupWhereUniqueInput
    /**
     * In case the TripGroup found by the `where` argument doesn't exist, create a new TripGroup with this data.
     */
    create: XOR<TripGroupCreateInput, TripGroupUncheckedCreateInput>
    /**
     * In case the TripGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripGroupUpdateInput, TripGroupUncheckedUpdateInput>
  }

  /**
   * TripGroup delete
   */
  export type TripGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripGroup
     */
    select?: TripGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripGroup
     */
    omit?: TripGroupOmit<ExtArgs> | null
    /**
     * Filter which TripGroup to delete.
     */
    where: TripGroupWhereUniqueInput
  }

  /**
   * TripGroup deleteMany
   */
  export type TripGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripGroups to delete
     */
    where?: TripGroupWhereInput
    /**
     * Limit how many TripGroups to delete.
     */
    limit?: number
  }

  /**
   * TripGroup without action
   */
  export type TripGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripGroup
     */
    select?: TripGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripGroup
     */
    omit?: TripGroupOmit<ExtArgs> | null
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


  export const IngestionStatusScalarFieldEnum: {
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

  export type IngestionStatusScalarFieldEnum = (typeof IngestionStatusScalarFieldEnum)[keyof typeof IngestionStatusScalarFieldEnum]


  export const TripGroupScalarFieldEnum: {
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

  export type TripGroupScalarFieldEnum = (typeof TripGroupScalarFieldEnum)[keyof typeof TripGroupScalarFieldEnum]


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


  export type IngestionStatusWhereInput = {
    AND?: IngestionStatusWhereInput | IngestionStatusWhereInput[]
    OR?: IngestionStatusWhereInput[]
    NOT?: IngestionStatusWhereInput | IngestionStatusWhereInput[]
    id?: StringFilter<"IngestionStatus"> | string
    filename?: StringFilter<"IngestionStatus"> | string
    status?: StringFilter<"IngestionStatus"> | string
    totalRows?: IntFilter<"IngestionStatus"> | number
    processedRows?: IntFilter<"IngestionStatus"> | number
    errorMessage?: StringNullableFilter<"IngestionStatus"> | string | null
    startedAt?: DateTimeFilter<"IngestionStatus"> | Date | string
    completedAt?: DateTimeNullableFilter<"IngestionStatus"> | Date | string | null
    createdAt?: DateTimeFilter<"IngestionStatus"> | Date | string
    updatedAt?: DateTimeFilter<"IngestionStatus"> | Date | string
  }

  export type IngestionStatusOrderByWithRelationInput = {
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

  export type IngestionStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    filename?: string
    AND?: IngestionStatusWhereInput | IngestionStatusWhereInput[]
    OR?: IngestionStatusWhereInput[]
    NOT?: IngestionStatusWhereInput | IngestionStatusWhereInput[]
    status?: StringFilter<"IngestionStatus"> | string
    totalRows?: IntFilter<"IngestionStatus"> | number
    processedRows?: IntFilter<"IngestionStatus"> | number
    errorMessage?: StringNullableFilter<"IngestionStatus"> | string | null
    startedAt?: DateTimeFilter<"IngestionStatus"> | Date | string
    completedAt?: DateTimeNullableFilter<"IngestionStatus"> | Date | string | null
    createdAt?: DateTimeFilter<"IngestionStatus"> | Date | string
    updatedAt?: DateTimeFilter<"IngestionStatus"> | Date | string
  }, "id" | "filename">

  export type IngestionStatusOrderByWithAggregationInput = {
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
    _count?: IngestionStatusCountOrderByAggregateInput
    _avg?: IngestionStatusAvgOrderByAggregateInput
    _max?: IngestionStatusMaxOrderByAggregateInput
    _min?: IngestionStatusMinOrderByAggregateInput
    _sum?: IngestionStatusSumOrderByAggregateInput
  }

  export type IngestionStatusScalarWhereWithAggregatesInput = {
    AND?: IngestionStatusScalarWhereWithAggregatesInput | IngestionStatusScalarWhereWithAggregatesInput[]
    OR?: IngestionStatusScalarWhereWithAggregatesInput[]
    NOT?: IngestionStatusScalarWhereWithAggregatesInput | IngestionStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IngestionStatus"> | string
    filename?: StringWithAggregatesFilter<"IngestionStatus"> | string
    status?: StringWithAggregatesFilter<"IngestionStatus"> | string
    totalRows?: IntWithAggregatesFilter<"IngestionStatus"> | number
    processedRows?: IntWithAggregatesFilter<"IngestionStatus"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"IngestionStatus"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"IngestionStatus"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"IngestionStatus"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IngestionStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IngestionStatus"> | Date | string
  }

  export type TripGroupWhereInput = {
    AND?: TripGroupWhereInput | TripGroupWhereInput[]
    OR?: TripGroupWhereInput[]
    NOT?: TripGroupWhereInput | TripGroupWhereInput[]
    id?: StringFilter<"TripGroup"> | string
    region?: StringFilter<"TripGroup"> | string
    originLat?: FloatFilter<"TripGroup"> | number
    originLon?: FloatFilter<"TripGroup"> | number
    destinationLat?: FloatFilter<"TripGroup"> | number
    destinationLon?: FloatFilter<"TripGroup"> | number
    hourOfDay?: IntFilter<"TripGroup"> | number
    tripCount?: IntFilter<"TripGroup"> | number
    datasources?: StringNullableListFilter<"TripGroup">
    firstSeenAt?: DateTimeFilter<"TripGroup"> | Date | string
    lastSeenAt?: DateTimeFilter<"TripGroup"> | Date | string
    createdAt?: DateTimeFilter<"TripGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TripGroup"> | Date | string
  }

  export type TripGroupOrderByWithRelationInput = {
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

  export type TripGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    region_originLat_originLon_destinationLat_destinationLon_hourOfDay?: TripGroupRegionOriginLatOriginLonDestinationLatDestinationLonHourOfDayCompoundUniqueInput
    AND?: TripGroupWhereInput | TripGroupWhereInput[]
    OR?: TripGroupWhereInput[]
    NOT?: TripGroupWhereInput | TripGroupWhereInput[]
    region?: StringFilter<"TripGroup"> | string
    originLat?: FloatFilter<"TripGroup"> | number
    originLon?: FloatFilter<"TripGroup"> | number
    destinationLat?: FloatFilter<"TripGroup"> | number
    destinationLon?: FloatFilter<"TripGroup"> | number
    hourOfDay?: IntFilter<"TripGroup"> | number
    tripCount?: IntFilter<"TripGroup"> | number
    datasources?: StringNullableListFilter<"TripGroup">
    firstSeenAt?: DateTimeFilter<"TripGroup"> | Date | string
    lastSeenAt?: DateTimeFilter<"TripGroup"> | Date | string
    createdAt?: DateTimeFilter<"TripGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TripGroup"> | Date | string
  }, "id" | "region_originLat_originLon_destinationLat_destinationLon_hourOfDay">

  export type TripGroupOrderByWithAggregationInput = {
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
    _count?: TripGroupCountOrderByAggregateInput
    _avg?: TripGroupAvgOrderByAggregateInput
    _max?: TripGroupMaxOrderByAggregateInput
    _min?: TripGroupMinOrderByAggregateInput
    _sum?: TripGroupSumOrderByAggregateInput
  }

  export type TripGroupScalarWhereWithAggregatesInput = {
    AND?: TripGroupScalarWhereWithAggregatesInput | TripGroupScalarWhereWithAggregatesInput[]
    OR?: TripGroupScalarWhereWithAggregatesInput[]
    NOT?: TripGroupScalarWhereWithAggregatesInput | TripGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripGroup"> | string
    region?: StringWithAggregatesFilter<"TripGroup"> | string
    originLat?: FloatWithAggregatesFilter<"TripGroup"> | number
    originLon?: FloatWithAggregatesFilter<"TripGroup"> | number
    destinationLat?: FloatWithAggregatesFilter<"TripGroup"> | number
    destinationLon?: FloatWithAggregatesFilter<"TripGroup"> | number
    hourOfDay?: IntWithAggregatesFilter<"TripGroup"> | number
    tripCount?: IntWithAggregatesFilter<"TripGroup"> | number
    datasources?: StringNullableListFilter<"TripGroup">
    firstSeenAt?: DateTimeWithAggregatesFilter<"TripGroup"> | Date | string
    lastSeenAt?: DateTimeWithAggregatesFilter<"TripGroup"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TripGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripGroup"> | Date | string
  }

  export type IngestionStatusCreateInput = {
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

  export type IngestionStatusUncheckedCreateInput = {
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

  export type IngestionStatusUpdateInput = {
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

  export type IngestionStatusUncheckedUpdateInput = {
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

  export type IngestionStatusCreateManyInput = {
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

  export type IngestionStatusUpdateManyMutationInput = {
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

  export type IngestionStatusUncheckedUpdateManyInput = {
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

  export type TripGroupCreateInput = {
    id?: string
    region: string
    originLat: number
    originLon: number
    destinationLat: number
    destinationLon: number
    hourOfDay: number
    tripCount?: number
    datasources?: TripGroupCreatedatasourcesInput | string[]
    firstSeenAt: Date | string
    lastSeenAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripGroupUncheckedCreateInput = {
    id?: string
    region: string
    originLat: number
    originLon: number
    destinationLat: number
    destinationLon: number
    hourOfDay: number
    tripCount?: number
    datasources?: TripGroupCreatedatasourcesInput | string[]
    firstSeenAt: Date | string
    lastSeenAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    originLat?: FloatFieldUpdateOperationsInput | number
    originLon?: FloatFieldUpdateOperationsInput | number
    destinationLat?: FloatFieldUpdateOperationsInput | number
    destinationLon?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    tripCount?: IntFieldUpdateOperationsInput | number
    datasources?: TripGroupUpdatedatasourcesInput | string[]
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    originLat?: FloatFieldUpdateOperationsInput | number
    originLon?: FloatFieldUpdateOperationsInput | number
    destinationLat?: FloatFieldUpdateOperationsInput | number
    destinationLon?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    tripCount?: IntFieldUpdateOperationsInput | number
    datasources?: TripGroupUpdatedatasourcesInput | string[]
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripGroupCreateManyInput = {
    id?: string
    region: string
    originLat: number
    originLon: number
    destinationLat: number
    destinationLon: number
    hourOfDay: number
    tripCount?: number
    datasources?: TripGroupCreatedatasourcesInput | string[]
    firstSeenAt: Date | string
    lastSeenAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    originLat?: FloatFieldUpdateOperationsInput | number
    originLon?: FloatFieldUpdateOperationsInput | number
    destinationLat?: FloatFieldUpdateOperationsInput | number
    destinationLon?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    tripCount?: IntFieldUpdateOperationsInput | number
    datasources?: TripGroupUpdatedatasourcesInput | string[]
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    originLat?: FloatFieldUpdateOperationsInput | number
    originLon?: FloatFieldUpdateOperationsInput | number
    destinationLat?: FloatFieldUpdateOperationsInput | number
    destinationLon?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    tripCount?: IntFieldUpdateOperationsInput | number
    datasources?: TripGroupUpdatedatasourcesInput | string[]
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

  export type IngestionStatusCountOrderByAggregateInput = {
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

  export type IngestionStatusAvgOrderByAggregateInput = {
    totalRows?: SortOrder
    processedRows?: SortOrder
  }

  export type IngestionStatusMaxOrderByAggregateInput = {
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

  export type IngestionStatusMinOrderByAggregateInput = {
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

  export type IngestionStatusSumOrderByAggregateInput = {
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

  export type TripGroupRegionOriginLatOriginLonDestinationLatDestinationLonHourOfDayCompoundUniqueInput = {
    region: string
    originLat: number
    originLon: number
    destinationLat: number
    destinationLon: number
    hourOfDay: number
  }

  export type TripGroupCountOrderByAggregateInput = {
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

  export type TripGroupAvgOrderByAggregateInput = {
    originLat?: SortOrder
    originLon?: SortOrder
    destinationLat?: SortOrder
    destinationLon?: SortOrder
    hourOfDay?: SortOrder
    tripCount?: SortOrder
  }

  export type TripGroupMaxOrderByAggregateInput = {
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

  export type TripGroupMinOrderByAggregateInput = {
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

  export type TripGroupSumOrderByAggregateInput = {
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

  export type TripGroupCreatedatasourcesInput = {
    set: string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripGroupUpdatedatasourcesInput = {
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