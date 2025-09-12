
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model curtidas
 * 
 */
export type curtidas = $Result.DefaultSelection<Prisma.$curtidasPayload>
/**
 * Model posts
 * 
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Curtidas
 * const curtidas = await prisma.curtidas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Curtidas
   * const curtidas = await prisma.curtidas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.curtidas`: Exposes CRUD operations for the **curtidas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Curtidas
    * const curtidas = await prisma.curtidas.findMany()
    * ```
    */
  get curtidas(): Prisma.curtidasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    curtidas: 'curtidas',
    posts: 'posts',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "curtidas" | "posts" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      curtidas: {
        payload: Prisma.$curtidasPayload<ExtArgs>
        fields: Prisma.curtidasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.curtidasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curtidasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.curtidasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curtidasPayload>
          }
          findFirst: {
            args: Prisma.curtidasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curtidasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.curtidasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curtidasPayload>
          }
          findMany: {
            args: Prisma.curtidasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curtidasPayload>[]
          }
          create: {
            args: Prisma.curtidasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curtidasPayload>
          }
          createMany: {
            args: Prisma.curtidasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.curtidasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curtidasPayload>[]
          }
          delete: {
            args: Prisma.curtidasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curtidasPayload>
          }
          update: {
            args: Prisma.curtidasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curtidasPayload>
          }
          deleteMany: {
            args: Prisma.curtidasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.curtidasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.curtidasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curtidasPayload>[]
          }
          upsert: {
            args: Prisma.curtidasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curtidasPayload>
          }
          aggregate: {
            args: Prisma.CurtidasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurtidas>
          }
          groupBy: {
            args: Prisma.curtidasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurtidasGroupByOutputType>[]
          }
          count: {
            args: Prisma.curtidasCountArgs<ExtArgs>
            result: $Utils.Optional<CurtidasCountAggregateOutputType> | number
          }
        }
      }
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.postsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.postsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    curtidas?: curtidasOmit
    posts?: postsOmit
    usuarios?: usuariosOmit
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
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    curtidas: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curtidas?: boolean | PostsCountOutputTypeCountCurtidasArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCurtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: curtidasWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    curtidas: number
    posts: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curtidas?: boolean | UsuariosCountOutputTypeCountCurtidasArgs
    posts?: boolean | UsuariosCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountCurtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: curtidasWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model curtidas
   */

  export type AggregateCurtidas = {
    _count: CurtidasCountAggregateOutputType | null
    _avg: CurtidasAvgAggregateOutputType | null
    _sum: CurtidasSumAggregateOutputType | null
    _min: CurtidasMinAggregateOutputType | null
    _max: CurtidasMaxAggregateOutputType | null
  }

  export type CurtidasAvgAggregateOutputType = {
    idusuario: number | null
    idpost: number | null
  }

  export type CurtidasSumAggregateOutputType = {
    idusuario: number | null
    idpost: number | null
  }

  export type CurtidasMinAggregateOutputType = {
    idusuario: number | null
    idpost: number | null
  }

  export type CurtidasMaxAggregateOutputType = {
    idusuario: number | null
    idpost: number | null
  }

  export type CurtidasCountAggregateOutputType = {
    idusuario: number
    idpost: number
    _all: number
  }


  export type CurtidasAvgAggregateInputType = {
    idusuario?: true
    idpost?: true
  }

  export type CurtidasSumAggregateInputType = {
    idusuario?: true
    idpost?: true
  }

  export type CurtidasMinAggregateInputType = {
    idusuario?: true
    idpost?: true
  }

  export type CurtidasMaxAggregateInputType = {
    idusuario?: true
    idpost?: true
  }

  export type CurtidasCountAggregateInputType = {
    idusuario?: true
    idpost?: true
    _all?: true
  }

  export type CurtidasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curtidas to aggregate.
     */
    where?: curtidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curtidas to fetch.
     */
    orderBy?: curtidasOrderByWithRelationInput | curtidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: curtidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned curtidas
    **/
    _count?: true | CurtidasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurtidasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurtidasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurtidasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurtidasMaxAggregateInputType
  }

  export type GetCurtidasAggregateType<T extends CurtidasAggregateArgs> = {
        [P in keyof T & keyof AggregateCurtidas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurtidas[P]>
      : GetScalarType<T[P], AggregateCurtidas[P]>
  }




  export type curtidasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: curtidasWhereInput
    orderBy?: curtidasOrderByWithAggregationInput | curtidasOrderByWithAggregationInput[]
    by: CurtidasScalarFieldEnum[] | CurtidasScalarFieldEnum
    having?: curtidasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurtidasCountAggregateInputType | true
    _avg?: CurtidasAvgAggregateInputType
    _sum?: CurtidasSumAggregateInputType
    _min?: CurtidasMinAggregateInputType
    _max?: CurtidasMaxAggregateInputType
  }

  export type CurtidasGroupByOutputType = {
    idusuario: number
    idpost: number
    _count: CurtidasCountAggregateOutputType | null
    _avg: CurtidasAvgAggregateOutputType | null
    _sum: CurtidasSumAggregateOutputType | null
    _min: CurtidasMinAggregateOutputType | null
    _max: CurtidasMaxAggregateOutputType | null
  }

  type GetCurtidasGroupByPayload<T extends curtidasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurtidasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurtidasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurtidasGroupByOutputType[P]>
            : GetScalarType<T[P], CurtidasGroupByOutputType[P]>
        }
      >
    >


  export type curtidasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idusuario?: boolean
    idpost?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtidas"]>

  export type curtidasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idusuario?: boolean
    idpost?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtidas"]>

  export type curtidasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idusuario?: boolean
    idpost?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtidas"]>

  export type curtidasSelectScalar = {
    idusuario?: boolean
    idpost?: boolean
  }

  export type curtidasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idusuario" | "idpost", ExtArgs["result"]["curtidas"]>
  export type curtidasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
  }
  export type curtidasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
  }
  export type curtidasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
  }

  export type $curtidasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "curtidas"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
      posts: Prisma.$postsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idusuario: number
      idpost: number
    }, ExtArgs["result"]["curtidas"]>
    composites: {}
  }

  type curtidasGetPayload<S extends boolean | null | undefined | curtidasDefaultArgs> = $Result.GetResult<Prisma.$curtidasPayload, S>

  type curtidasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<curtidasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurtidasCountAggregateInputType | true
    }

  export interface curtidasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['curtidas'], meta: { name: 'curtidas' } }
    /**
     * Find zero or one Curtidas that matches the filter.
     * @param {curtidasFindUniqueArgs} args - Arguments to find a Curtidas
     * @example
     * // Get one Curtidas
     * const curtidas = await prisma.curtidas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends curtidasFindUniqueArgs>(args: SelectSubset<T, curtidasFindUniqueArgs<ExtArgs>>): Prisma__curtidasClient<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curtidas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {curtidasFindUniqueOrThrowArgs} args - Arguments to find a Curtidas
     * @example
     * // Get one Curtidas
     * const curtidas = await prisma.curtidas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends curtidasFindUniqueOrThrowArgs>(args: SelectSubset<T, curtidasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__curtidasClient<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curtidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curtidasFindFirstArgs} args - Arguments to find a Curtidas
     * @example
     * // Get one Curtidas
     * const curtidas = await prisma.curtidas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends curtidasFindFirstArgs>(args?: SelectSubset<T, curtidasFindFirstArgs<ExtArgs>>): Prisma__curtidasClient<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curtidas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curtidasFindFirstOrThrowArgs} args - Arguments to find a Curtidas
     * @example
     * // Get one Curtidas
     * const curtidas = await prisma.curtidas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends curtidasFindFirstOrThrowArgs>(args?: SelectSubset<T, curtidasFindFirstOrThrowArgs<ExtArgs>>): Prisma__curtidasClient<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Curtidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curtidasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Curtidas
     * const curtidas = await prisma.curtidas.findMany()
     * 
     * // Get first 10 Curtidas
     * const curtidas = await prisma.curtidas.findMany({ take: 10 })
     * 
     * // Only select the `idusuario`
     * const curtidasWithIdusuarioOnly = await prisma.curtidas.findMany({ select: { idusuario: true } })
     * 
     */
    findMany<T extends curtidasFindManyArgs>(args?: SelectSubset<T, curtidasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curtidas.
     * @param {curtidasCreateArgs} args - Arguments to create a Curtidas.
     * @example
     * // Create one Curtidas
     * const Curtidas = await prisma.curtidas.create({
     *   data: {
     *     // ... data to create a Curtidas
     *   }
     * })
     * 
     */
    create<T extends curtidasCreateArgs>(args: SelectSubset<T, curtidasCreateArgs<ExtArgs>>): Prisma__curtidasClient<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Curtidas.
     * @param {curtidasCreateManyArgs} args - Arguments to create many Curtidas.
     * @example
     * // Create many Curtidas
     * const curtidas = await prisma.curtidas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends curtidasCreateManyArgs>(args?: SelectSubset<T, curtidasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Curtidas and returns the data saved in the database.
     * @param {curtidasCreateManyAndReturnArgs} args - Arguments to create many Curtidas.
     * @example
     * // Create many Curtidas
     * const curtidas = await prisma.curtidas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Curtidas and only return the `idusuario`
     * const curtidasWithIdusuarioOnly = await prisma.curtidas.createManyAndReturn({
     *   select: { idusuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends curtidasCreateManyAndReturnArgs>(args?: SelectSubset<T, curtidasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curtidas.
     * @param {curtidasDeleteArgs} args - Arguments to delete one Curtidas.
     * @example
     * // Delete one Curtidas
     * const Curtidas = await prisma.curtidas.delete({
     *   where: {
     *     // ... filter to delete one Curtidas
     *   }
     * })
     * 
     */
    delete<T extends curtidasDeleteArgs>(args: SelectSubset<T, curtidasDeleteArgs<ExtArgs>>): Prisma__curtidasClient<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curtidas.
     * @param {curtidasUpdateArgs} args - Arguments to update one Curtidas.
     * @example
     * // Update one Curtidas
     * const curtidas = await prisma.curtidas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends curtidasUpdateArgs>(args: SelectSubset<T, curtidasUpdateArgs<ExtArgs>>): Prisma__curtidasClient<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Curtidas.
     * @param {curtidasDeleteManyArgs} args - Arguments to filter Curtidas to delete.
     * @example
     * // Delete a few Curtidas
     * const { count } = await prisma.curtidas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends curtidasDeleteManyArgs>(args?: SelectSubset<T, curtidasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curtidasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Curtidas
     * const curtidas = await prisma.curtidas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends curtidasUpdateManyArgs>(args: SelectSubset<T, curtidasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curtidas and returns the data updated in the database.
     * @param {curtidasUpdateManyAndReturnArgs} args - Arguments to update many Curtidas.
     * @example
     * // Update many Curtidas
     * const curtidas = await prisma.curtidas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Curtidas and only return the `idusuario`
     * const curtidasWithIdusuarioOnly = await prisma.curtidas.updateManyAndReturn({
     *   select: { idusuario: true },
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
    updateManyAndReturn<T extends curtidasUpdateManyAndReturnArgs>(args: SelectSubset<T, curtidasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curtidas.
     * @param {curtidasUpsertArgs} args - Arguments to update or create a Curtidas.
     * @example
     * // Update or create a Curtidas
     * const curtidas = await prisma.curtidas.upsert({
     *   create: {
     *     // ... data to create a Curtidas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curtidas we want to update
     *   }
     * })
     */
    upsert<T extends curtidasUpsertArgs>(args: SelectSubset<T, curtidasUpsertArgs<ExtArgs>>): Prisma__curtidasClient<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curtidasCountArgs} args - Arguments to filter Curtidas to count.
     * @example
     * // Count the number of Curtidas
     * const count = await prisma.curtidas.count({
     *   where: {
     *     // ... the filter for the Curtidas we want to count
     *   }
     * })
    **/
    count<T extends curtidasCountArgs>(
      args?: Subset<T, curtidasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurtidasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurtidasAggregateArgs>(args: Subset<T, CurtidasAggregateArgs>): Prisma.PrismaPromise<GetCurtidasAggregateType<T>>

    /**
     * Group by Curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curtidasGroupByArgs} args - Group by arguments.
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
      T extends curtidasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: curtidasGroupByArgs['orderBy'] }
        : { orderBy?: curtidasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, curtidasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurtidasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the curtidas model
   */
  readonly fields: curtidasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for curtidas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__curtidasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    posts<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the curtidas model
   */
  interface curtidasFieldRefs {
    readonly idusuario: FieldRef<"curtidas", 'Int'>
    readonly idpost: FieldRef<"curtidas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * curtidas findUnique
   */
  export type curtidasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasInclude<ExtArgs> | null
    /**
     * Filter, which curtidas to fetch.
     */
    where: curtidasWhereUniqueInput
  }

  /**
   * curtidas findUniqueOrThrow
   */
  export type curtidasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasInclude<ExtArgs> | null
    /**
     * Filter, which curtidas to fetch.
     */
    where: curtidasWhereUniqueInput
  }

  /**
   * curtidas findFirst
   */
  export type curtidasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasInclude<ExtArgs> | null
    /**
     * Filter, which curtidas to fetch.
     */
    where?: curtidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curtidas to fetch.
     */
    orderBy?: curtidasOrderByWithRelationInput | curtidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for curtidas.
     */
    cursor?: curtidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of curtidas.
     */
    distinct?: CurtidasScalarFieldEnum | CurtidasScalarFieldEnum[]
  }

  /**
   * curtidas findFirstOrThrow
   */
  export type curtidasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasInclude<ExtArgs> | null
    /**
     * Filter, which curtidas to fetch.
     */
    where?: curtidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curtidas to fetch.
     */
    orderBy?: curtidasOrderByWithRelationInput | curtidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for curtidas.
     */
    cursor?: curtidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of curtidas.
     */
    distinct?: CurtidasScalarFieldEnum | CurtidasScalarFieldEnum[]
  }

  /**
   * curtidas findMany
   */
  export type curtidasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasInclude<ExtArgs> | null
    /**
     * Filter, which curtidas to fetch.
     */
    where?: curtidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curtidas to fetch.
     */
    orderBy?: curtidasOrderByWithRelationInput | curtidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing curtidas.
     */
    cursor?: curtidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curtidas.
     */
    skip?: number
    distinct?: CurtidasScalarFieldEnum | CurtidasScalarFieldEnum[]
  }

  /**
   * curtidas create
   */
  export type curtidasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasInclude<ExtArgs> | null
    /**
     * The data needed to create a curtidas.
     */
    data: XOR<curtidasCreateInput, curtidasUncheckedCreateInput>
  }

  /**
   * curtidas createMany
   */
  export type curtidasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many curtidas.
     */
    data: curtidasCreateManyInput | curtidasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * curtidas createManyAndReturn
   */
  export type curtidasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * The data used to create many curtidas.
     */
    data: curtidasCreateManyInput | curtidasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * curtidas update
   */
  export type curtidasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasInclude<ExtArgs> | null
    /**
     * The data needed to update a curtidas.
     */
    data: XOR<curtidasUpdateInput, curtidasUncheckedUpdateInput>
    /**
     * Choose, which curtidas to update.
     */
    where: curtidasWhereUniqueInput
  }

  /**
   * curtidas updateMany
   */
  export type curtidasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update curtidas.
     */
    data: XOR<curtidasUpdateManyMutationInput, curtidasUncheckedUpdateManyInput>
    /**
     * Filter which curtidas to update
     */
    where?: curtidasWhereInput
    /**
     * Limit how many curtidas to update.
     */
    limit?: number
  }

  /**
   * curtidas updateManyAndReturn
   */
  export type curtidasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * The data used to update curtidas.
     */
    data: XOR<curtidasUpdateManyMutationInput, curtidasUncheckedUpdateManyInput>
    /**
     * Filter which curtidas to update
     */
    where?: curtidasWhereInput
    /**
     * Limit how many curtidas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * curtidas upsert
   */
  export type curtidasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasInclude<ExtArgs> | null
    /**
     * The filter to search for the curtidas to update in case it exists.
     */
    where: curtidasWhereUniqueInput
    /**
     * In case the curtidas found by the `where` argument doesn't exist, create a new curtidas with this data.
     */
    create: XOR<curtidasCreateInput, curtidasUncheckedCreateInput>
    /**
     * In case the curtidas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<curtidasUpdateInput, curtidasUncheckedUpdateInput>
  }

  /**
   * curtidas delete
   */
  export type curtidasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasInclude<ExtArgs> | null
    /**
     * Filter which curtidas to delete.
     */
    where: curtidasWhereUniqueInput
  }

  /**
   * curtidas deleteMany
   */
  export type curtidasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curtidas to delete
     */
    where?: curtidasWhereInput
    /**
     * Limit how many curtidas to delete.
     */
    limit?: number
  }

  /**
   * curtidas without action
   */
  export type curtidasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasInclude<ExtArgs> | null
  }


  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    idpost: number | null
    idusuario: number | null
  }

  export type PostsSumAggregateOutputType = {
    idpost: number | null
    idusuario: number | null
  }

  export type PostsMinAggregateOutputType = {
    idpost: number | null
    titulo: string | null
    conteudo: string | null
    data_criacao: Date | null
    idusuario: number | null
  }

  export type PostsMaxAggregateOutputType = {
    idpost: number | null
    titulo: string | null
    conteudo: string | null
    data_criacao: Date | null
    idusuario: number | null
  }

  export type PostsCountAggregateOutputType = {
    idpost: number
    titulo: number
    conteudo: number
    data_criacao: number
    idusuario: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    idpost?: true
    idusuario?: true
  }

  export type PostsSumAggregateInputType = {
    idpost?: true
    idusuario?: true
  }

  export type PostsMinAggregateInputType = {
    idpost?: true
    titulo?: true
    conteudo?: true
    data_criacao?: true
    idusuario?: true
  }

  export type PostsMaxAggregateInputType = {
    idpost?: true
    titulo?: true
    conteudo?: true
    data_criacao?: true
    idusuario?: true
  }

  export type PostsCountAggregateInputType = {
    idpost?: true
    titulo?: true
    conteudo?: true
    data_criacao?: true
    idusuario?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    idpost: number
    titulo: string
    conteudo: string
    data_criacao: Date
    idusuario: number
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idpost?: boolean
    titulo?: boolean
    conteudo?: boolean
    data_criacao?: boolean
    idusuario?: boolean
    curtidas?: boolean | posts$curtidasArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idpost?: boolean
    titulo?: boolean
    conteudo?: boolean
    data_criacao?: boolean
    idusuario?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idpost?: boolean
    titulo?: boolean
    conteudo?: boolean
    data_criacao?: boolean
    idusuario?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    idpost?: boolean
    titulo?: boolean
    conteudo?: boolean
    data_criacao?: boolean
    idusuario?: boolean
  }

  export type postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idpost" | "titulo" | "conteudo" | "data_criacao" | "idusuario", ExtArgs["result"]["posts"]>
  export type postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curtidas?: boolean | posts$curtidasArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type postsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type postsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {
      curtidas: Prisma.$curtidasPayload<ExtArgs>[]
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idpost: number
      titulo: string
      conteudo: string
      data_criacao: Date
      idusuario: number
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postsFindUniqueArgs>(args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postsFindFirstArgs>(args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `idpost`
     * const postsWithIdpostOnly = await prisma.posts.findMany({ select: { idpost: true } })
     * 
     */
    findMany<T extends postsFindManyArgs>(args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends postsCreateArgs>(args: SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postsCreateManyArgs>(args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {postsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `idpost`
     * const postsWithIdpostOnly = await prisma.posts.createManyAndReturn({
     *   select: { idpost: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends postsCreateManyAndReturnArgs>(args?: SelectSubset<T, postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends postsDeleteArgs>(args: SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postsUpdateArgs>(args: SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postsDeleteManyArgs>(args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postsUpdateManyArgs>(args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {postsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `idpost`
     * const postsWithIdpostOnly = await prisma.posts.updateManyAndReturn({
     *   select: { idpost: true },
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
    updateManyAndReturn<T extends postsUpdateManyAndReturnArgs>(args: SelectSubset<T, postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends postsUpsertArgs>(args: SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
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
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curtidas<T extends posts$curtidasArgs<ExtArgs> = {}>(args?: Subset<T, posts$curtidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the posts model
   */
  interface postsFieldRefs {
    readonly idpost: FieldRef<"posts", 'Int'>
    readonly titulo: FieldRef<"posts", 'String'>
    readonly conteudo: FieldRef<"posts", 'String'>
    readonly data_criacao: FieldRef<"posts", 'DateTime'>
    readonly idusuario: FieldRef<"posts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }

  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts createManyAndReturn
   */
  export type postsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * posts updateManyAndReturn
   */
  export type postsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }

  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * posts.curtidas
   */
  export type posts$curtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasInclude<ExtArgs> | null
    where?: curtidasWhereInput
    orderBy?: curtidasOrderByWithRelationInput | curtidasOrderByWithRelationInput[]
    cursor?: curtidasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurtidasScalarFieldEnum | CurtidasScalarFieldEnum[]
  }

  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    idusuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    idusuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    idusuario: number | null
    nome: string | null
    sobrenome: string | null
    email: string | null
    biografia: string | null
    avatar_url: string | null
    senha: string | null
    data_registro: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    idusuario: number | null
    nome: string | null
    sobrenome: string | null
    email: string | null
    biografia: string | null
    avatar_url: string | null
    senha: string | null
    data_registro: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    idusuario: number
    nome: number
    sobrenome: number
    email: number
    biografia: number
    avatar_url: number
    senha: number
    data_registro: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    idusuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    idusuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    idusuario?: true
    nome?: true
    sobrenome?: true
    email?: true
    biografia?: true
    avatar_url?: true
    senha?: true
    data_registro?: true
  }

  export type UsuariosMaxAggregateInputType = {
    idusuario?: true
    nome?: true
    sobrenome?: true
    email?: true
    biografia?: true
    avatar_url?: true
    senha?: true
    data_registro?: true
  }

  export type UsuariosCountAggregateInputType = {
    idusuario?: true
    nome?: true
    sobrenome?: true
    email?: true
    biografia?: true
    avatar_url?: true
    senha?: true
    data_registro?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    idusuario: number
    nome: string
    sobrenome: string
    email: string
    biografia: string | null
    avatar_url: string | null
    senha: string
    data_registro: Date
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idusuario?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    biografia?: boolean
    avatar_url?: boolean
    senha?: boolean
    data_registro?: boolean
    curtidas?: boolean | usuarios$curtidasArgs<ExtArgs>
    posts?: boolean | usuarios$postsArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idusuario?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    biografia?: boolean
    avatar_url?: boolean
    senha?: boolean
    data_registro?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idusuario?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    biografia?: boolean
    avatar_url?: boolean
    senha?: boolean
    data_registro?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    idusuario?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    biografia?: boolean
    avatar_url?: boolean
    senha?: boolean
    data_registro?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idusuario" | "nome" | "sobrenome" | "email" | "biografia" | "avatar_url" | "senha" | "data_registro", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curtidas?: boolean | usuarios$curtidasArgs<ExtArgs>
    posts?: boolean | usuarios$postsArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      curtidas: Prisma.$curtidasPayload<ExtArgs>[]
      posts: Prisma.$postsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idusuario: number
      nome: string
      sobrenome: string
      email: string
      biografia: string | null
      avatar_url: string | null
      senha: string
      data_registro: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `idusuario`
     * const usuariosWithIdusuarioOnly = await prisma.usuarios.findMany({ select: { idusuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `idusuario`
     * const usuariosWithIdusuarioOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { idusuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `idusuario`
     * const usuariosWithIdusuarioOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { idusuario: true },
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
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curtidas<T extends usuarios$curtidasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$curtidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curtidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends usuarios$postsArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly idusuario: FieldRef<"usuarios", 'Int'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly sobrenome: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly biografia: FieldRef<"usuarios", 'String'>
    readonly avatar_url: FieldRef<"usuarios", 'String'>
    readonly senha: FieldRef<"usuarios", 'String'>
    readonly data_registro: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.curtidas
   */
  export type usuarios$curtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curtidas
     */
    select?: curtidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curtidas
     */
    omit?: curtidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curtidasInclude<ExtArgs> | null
    where?: curtidasWhereInput
    orderBy?: curtidasOrderByWithRelationInput | curtidasOrderByWithRelationInput[]
    cursor?: curtidasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurtidasScalarFieldEnum | CurtidasScalarFieldEnum[]
  }

  /**
   * usuarios.posts
   */
  export type usuarios$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
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


  export const CurtidasScalarFieldEnum: {
    idusuario: 'idusuario',
    idpost: 'idpost'
  };

  export type CurtidasScalarFieldEnum = (typeof CurtidasScalarFieldEnum)[keyof typeof CurtidasScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    idpost: 'idpost',
    titulo: 'titulo',
    conteudo: 'conteudo',
    data_criacao: 'data_criacao',
    idusuario: 'idusuario'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    idusuario: 'idusuario',
    nome: 'nome',
    sobrenome: 'sobrenome',
    email: 'email',
    biografia: 'biografia',
    avatar_url: 'avatar_url',
    senha: 'senha',
    data_registro: 'data_registro'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type curtidasWhereInput = {
    AND?: curtidasWhereInput | curtidasWhereInput[]
    OR?: curtidasWhereInput[]
    NOT?: curtidasWhereInput | curtidasWhereInput[]
    idusuario?: IntFilter<"curtidas"> | number
    idpost?: IntFilter<"curtidas"> | number
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    posts?: XOR<PostsScalarRelationFilter, postsWhereInput>
  }

  export type curtidasOrderByWithRelationInput = {
    idusuario?: SortOrder
    idpost?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    posts?: postsOrderByWithRelationInput
  }

  export type curtidasWhereUniqueInput = Prisma.AtLeast<{
    idusuario_idpost?: curtidasIdusuarioIdpostCompoundUniqueInput
    AND?: curtidasWhereInput | curtidasWhereInput[]
    OR?: curtidasWhereInput[]
    NOT?: curtidasWhereInput | curtidasWhereInput[]
    idusuario?: IntFilter<"curtidas"> | number
    idpost?: IntFilter<"curtidas"> | number
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    posts?: XOR<PostsScalarRelationFilter, postsWhereInput>
  }, "idusuario_idpost">

  export type curtidasOrderByWithAggregationInput = {
    idusuario?: SortOrder
    idpost?: SortOrder
    _count?: curtidasCountOrderByAggregateInput
    _avg?: curtidasAvgOrderByAggregateInput
    _max?: curtidasMaxOrderByAggregateInput
    _min?: curtidasMinOrderByAggregateInput
    _sum?: curtidasSumOrderByAggregateInput
  }

  export type curtidasScalarWhereWithAggregatesInput = {
    AND?: curtidasScalarWhereWithAggregatesInput | curtidasScalarWhereWithAggregatesInput[]
    OR?: curtidasScalarWhereWithAggregatesInput[]
    NOT?: curtidasScalarWhereWithAggregatesInput | curtidasScalarWhereWithAggregatesInput[]
    idusuario?: IntWithAggregatesFilter<"curtidas"> | number
    idpost?: IntWithAggregatesFilter<"curtidas"> | number
  }

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    idpost?: IntFilter<"posts"> | number
    titulo?: StringFilter<"posts"> | string
    conteudo?: StringFilter<"posts"> | string
    data_criacao?: DateTimeFilter<"posts"> | Date | string
    idusuario?: IntFilter<"posts"> | number
    curtidas?: CurtidasListRelationFilter
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type postsOrderByWithRelationInput = {
    idpost?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    data_criacao?: SortOrder
    idusuario?: SortOrder
    curtidas?: curtidasOrderByRelationAggregateInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    idpost?: number
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    titulo?: StringFilter<"posts"> | string
    conteudo?: StringFilter<"posts"> | string
    data_criacao?: DateTimeFilter<"posts"> | Date | string
    idusuario?: IntFilter<"posts"> | number
    curtidas?: CurtidasListRelationFilter
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "idpost">

  export type postsOrderByWithAggregationInput = {
    idpost?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    data_criacao?: SortOrder
    idusuario?: SortOrder
    _count?: postsCountOrderByAggregateInput
    _avg?: postsAvgOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
    _sum?: postsSumOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    idpost?: IntWithAggregatesFilter<"posts"> | number
    titulo?: StringWithAggregatesFilter<"posts"> | string
    conteudo?: StringWithAggregatesFilter<"posts"> | string
    data_criacao?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    idusuario?: IntWithAggregatesFilter<"posts"> | number
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    idusuario?: IntFilter<"usuarios"> | number
    nome?: StringFilter<"usuarios"> | string
    sobrenome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    biografia?: StringNullableFilter<"usuarios"> | string | null
    avatar_url?: StringNullableFilter<"usuarios"> | string | null
    senha?: StringFilter<"usuarios"> | string
    data_registro?: DateTimeFilter<"usuarios"> | Date | string
    curtidas?: CurtidasListRelationFilter
    posts?: PostsListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    idusuario?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    biografia?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    senha?: SortOrder
    data_registro?: SortOrder
    curtidas?: curtidasOrderByRelationAggregateInput
    posts?: postsOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    idusuario?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringFilter<"usuarios"> | string
    sobrenome?: StringFilter<"usuarios"> | string
    biografia?: StringNullableFilter<"usuarios"> | string | null
    avatar_url?: StringNullableFilter<"usuarios"> | string | null
    senha?: StringFilter<"usuarios"> | string
    data_registro?: DateTimeFilter<"usuarios"> | Date | string
    curtidas?: CurtidasListRelationFilter
    posts?: PostsListRelationFilter
  }, "idusuario" | "email">

  export type usuariosOrderByWithAggregationInput = {
    idusuario?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    biografia?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    senha?: SortOrder
    data_registro?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    idusuario?: IntWithAggregatesFilter<"usuarios"> | number
    nome?: StringWithAggregatesFilter<"usuarios"> | string
    sobrenome?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    biografia?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    senha?: StringWithAggregatesFilter<"usuarios"> | string
    data_registro?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type curtidasCreateInput = {
    usuarios: usuariosCreateNestedOneWithoutCurtidasInput
    posts: postsCreateNestedOneWithoutCurtidasInput
  }

  export type curtidasUncheckedCreateInput = {
    idusuario: number
    idpost: number
  }

  export type curtidasUpdateInput = {
    usuarios?: usuariosUpdateOneRequiredWithoutCurtidasNestedInput
    posts?: postsUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type curtidasUncheckedUpdateInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    idpost?: IntFieldUpdateOperationsInput | number
  }

  export type curtidasCreateManyInput = {
    idusuario: number
    idpost: number
  }

  export type curtidasUpdateManyMutationInput = {

  }

  export type curtidasUncheckedUpdateManyInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    idpost?: IntFieldUpdateOperationsInput | number
  }

  export type postsCreateInput = {
    titulo: string
    conteudo: string
    data_criacao?: Date | string
    curtidas?: curtidasCreateNestedManyWithoutPostsInput
    usuarios?: usuariosCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateInput = {
    idpost?: number
    titulo: string
    conteudo: string
    data_criacao?: Date | string
    idusuario?: number
    curtidas?: curtidasUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: curtidasUpdateManyWithoutPostsNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateInput = {
    idpost?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    idusuario?: IntFieldUpdateOperationsInput | number
    curtidas?: curtidasUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type postsCreateManyInput = {
    idpost?: number
    titulo: string
    conteudo: string
    data_criacao?: Date | string
    idusuario?: number
  }

  export type postsUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postsUncheckedUpdateManyInput = {
    idpost?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    idusuario?: IntFieldUpdateOperationsInput | number
  }

  export type usuariosCreateInput = {
    nome: string
    sobrenome: string
    email: string
    biografia?: string | null
    avatar_url?: string | null
    senha: string
    data_registro?: Date | string
    curtidas?: curtidasCreateNestedManyWithoutUsuariosInput
    posts?: postsCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    idusuario?: number
    nome: string
    sobrenome: string
    email: string
    biografia?: string | null
    avatar_url?: string | null
    senha: string
    data_registro?: Date | string
    curtidas?: curtidasUncheckedCreateNestedManyWithoutUsuariosInput
    posts?: postsUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: curtidasUpdateManyWithoutUsuariosNestedInput
    posts?: postsUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: curtidasUncheckedUpdateManyWithoutUsuariosNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    idusuario?: number
    nome: string
    sobrenome: string
    email: string
    biografia?: string | null
    avatar_url?: string | null
    senha: string
    data_registro?: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type PostsScalarRelationFilter = {
    is?: postsWhereInput
    isNot?: postsWhereInput
  }

  export type curtidasIdusuarioIdpostCompoundUniqueInput = {
    idusuario: number
    idpost: number
  }

  export type curtidasCountOrderByAggregateInput = {
    idusuario?: SortOrder
    idpost?: SortOrder
  }

  export type curtidasAvgOrderByAggregateInput = {
    idusuario?: SortOrder
    idpost?: SortOrder
  }

  export type curtidasMaxOrderByAggregateInput = {
    idusuario?: SortOrder
    idpost?: SortOrder
  }

  export type curtidasMinOrderByAggregateInput = {
    idusuario?: SortOrder
    idpost?: SortOrder
  }

  export type curtidasSumOrderByAggregateInput = {
    idusuario?: SortOrder
    idpost?: SortOrder
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

  export type CurtidasListRelationFilter = {
    every?: curtidasWhereInput
    some?: curtidasWhereInput
    none?: curtidasWhereInput
  }

  export type curtidasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postsCountOrderByAggregateInput = {
    idpost?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    data_criacao?: SortOrder
    idusuario?: SortOrder
  }

  export type postsAvgOrderByAggregateInput = {
    idpost?: SortOrder
    idusuario?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    idpost?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    data_criacao?: SortOrder
    idusuario?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    idpost?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    data_criacao?: SortOrder
    idusuario?: SortOrder
  }

  export type postsSumOrderByAggregateInput = {
    idpost?: SortOrder
    idusuario?: SortOrder
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

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    idusuario?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    biografia?: SortOrder
    avatar_url?: SortOrder
    senha?: SortOrder
    data_registro?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    idusuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    idusuario?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    biografia?: SortOrder
    avatar_url?: SortOrder
    senha?: SortOrder
    data_registro?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    idusuario?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    biografia?: SortOrder
    avatar_url?: SortOrder
    senha?: SortOrder
    data_registro?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    idusuario?: SortOrder
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

  export type usuariosCreateNestedOneWithoutCurtidasInput = {
    create?: XOR<usuariosCreateWithoutCurtidasInput, usuariosUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCurtidasInput
    connect?: usuariosWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutCurtidasInput = {
    create?: XOR<postsCreateWithoutCurtidasInput, postsUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: postsCreateOrConnectWithoutCurtidasInput
    connect?: postsWhereUniqueInput
  }

  export type usuariosUpdateOneRequiredWithoutCurtidasNestedInput = {
    create?: XOR<usuariosCreateWithoutCurtidasInput, usuariosUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCurtidasInput
    upsert?: usuariosUpsertWithoutCurtidasInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutCurtidasInput, usuariosUpdateWithoutCurtidasInput>, usuariosUncheckedUpdateWithoutCurtidasInput>
  }

  export type postsUpdateOneRequiredWithoutCurtidasNestedInput = {
    create?: XOR<postsCreateWithoutCurtidasInput, postsUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: postsCreateOrConnectWithoutCurtidasInput
    upsert?: postsUpsertWithoutCurtidasInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutCurtidasInput, postsUpdateWithoutCurtidasInput>, postsUncheckedUpdateWithoutCurtidasInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type curtidasCreateNestedManyWithoutPostsInput = {
    create?: XOR<curtidasCreateWithoutPostsInput, curtidasUncheckedCreateWithoutPostsInput> | curtidasCreateWithoutPostsInput[] | curtidasUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: curtidasCreateOrConnectWithoutPostsInput | curtidasCreateOrConnectWithoutPostsInput[]
    createMany?: curtidasCreateManyPostsInputEnvelope
    connect?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
  }

  export type usuariosCreateNestedOneWithoutPostsInput = {
    create?: XOR<usuariosCreateWithoutPostsInput, usuariosUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPostsInput
    connect?: usuariosWhereUniqueInput
  }

  export type curtidasUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<curtidasCreateWithoutPostsInput, curtidasUncheckedCreateWithoutPostsInput> | curtidasCreateWithoutPostsInput[] | curtidasUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: curtidasCreateOrConnectWithoutPostsInput | curtidasCreateOrConnectWithoutPostsInput[]
    createMany?: curtidasCreateManyPostsInputEnvelope
    connect?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type curtidasUpdateManyWithoutPostsNestedInput = {
    create?: XOR<curtidasCreateWithoutPostsInput, curtidasUncheckedCreateWithoutPostsInput> | curtidasCreateWithoutPostsInput[] | curtidasUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: curtidasCreateOrConnectWithoutPostsInput | curtidasCreateOrConnectWithoutPostsInput[]
    upsert?: curtidasUpsertWithWhereUniqueWithoutPostsInput | curtidasUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: curtidasCreateManyPostsInputEnvelope
    set?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    disconnect?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    delete?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    connect?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    update?: curtidasUpdateWithWhereUniqueWithoutPostsInput | curtidasUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: curtidasUpdateManyWithWhereWithoutPostsInput | curtidasUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: curtidasScalarWhereInput | curtidasScalarWhereInput[]
  }

  export type usuariosUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<usuariosCreateWithoutPostsInput, usuariosUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPostsInput
    upsert?: usuariosUpsertWithoutPostsInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutPostsInput, usuariosUpdateWithoutPostsInput>, usuariosUncheckedUpdateWithoutPostsInput>
  }

  export type curtidasUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<curtidasCreateWithoutPostsInput, curtidasUncheckedCreateWithoutPostsInput> | curtidasCreateWithoutPostsInput[] | curtidasUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: curtidasCreateOrConnectWithoutPostsInput | curtidasCreateOrConnectWithoutPostsInput[]
    upsert?: curtidasUpsertWithWhereUniqueWithoutPostsInput | curtidasUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: curtidasCreateManyPostsInputEnvelope
    set?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    disconnect?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    delete?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    connect?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    update?: curtidasUpdateWithWhereUniqueWithoutPostsInput | curtidasUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: curtidasUpdateManyWithWhereWithoutPostsInput | curtidasUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: curtidasScalarWhereInput | curtidasScalarWhereInput[]
  }

  export type curtidasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<curtidasCreateWithoutUsuariosInput, curtidasUncheckedCreateWithoutUsuariosInput> | curtidasCreateWithoutUsuariosInput[] | curtidasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: curtidasCreateOrConnectWithoutUsuariosInput | curtidasCreateOrConnectWithoutUsuariosInput[]
    createMany?: curtidasCreateManyUsuariosInputEnvelope
    connect?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
  }

  export type postsCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<postsCreateWithoutUsuariosInput, postsUncheckedCreateWithoutUsuariosInput> | postsCreateWithoutUsuariosInput[] | postsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsuariosInput | postsCreateOrConnectWithoutUsuariosInput[]
    createMany?: postsCreateManyUsuariosInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type curtidasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<curtidasCreateWithoutUsuariosInput, curtidasUncheckedCreateWithoutUsuariosInput> | curtidasCreateWithoutUsuariosInput[] | curtidasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: curtidasCreateOrConnectWithoutUsuariosInput | curtidasCreateOrConnectWithoutUsuariosInput[]
    createMany?: curtidasCreateManyUsuariosInputEnvelope
    connect?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<postsCreateWithoutUsuariosInput, postsUncheckedCreateWithoutUsuariosInput> | postsCreateWithoutUsuariosInput[] | postsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsuariosInput | postsCreateOrConnectWithoutUsuariosInput[]
    createMany?: postsCreateManyUsuariosInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type curtidasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<curtidasCreateWithoutUsuariosInput, curtidasUncheckedCreateWithoutUsuariosInput> | curtidasCreateWithoutUsuariosInput[] | curtidasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: curtidasCreateOrConnectWithoutUsuariosInput | curtidasCreateOrConnectWithoutUsuariosInput[]
    upsert?: curtidasUpsertWithWhereUniqueWithoutUsuariosInput | curtidasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: curtidasCreateManyUsuariosInputEnvelope
    set?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    disconnect?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    delete?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    connect?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    update?: curtidasUpdateWithWhereUniqueWithoutUsuariosInput | curtidasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: curtidasUpdateManyWithWhereWithoutUsuariosInput | curtidasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: curtidasScalarWhereInput | curtidasScalarWhereInput[]
  }

  export type postsUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<postsCreateWithoutUsuariosInput, postsUncheckedCreateWithoutUsuariosInput> | postsCreateWithoutUsuariosInput[] | postsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsuariosInput | postsCreateOrConnectWithoutUsuariosInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUsuariosInput | postsUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: postsCreateManyUsuariosInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUsuariosInput | postsUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUsuariosInput | postsUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type curtidasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<curtidasCreateWithoutUsuariosInput, curtidasUncheckedCreateWithoutUsuariosInput> | curtidasCreateWithoutUsuariosInput[] | curtidasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: curtidasCreateOrConnectWithoutUsuariosInput | curtidasCreateOrConnectWithoutUsuariosInput[]
    upsert?: curtidasUpsertWithWhereUniqueWithoutUsuariosInput | curtidasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: curtidasCreateManyUsuariosInputEnvelope
    set?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    disconnect?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    delete?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    connect?: curtidasWhereUniqueInput | curtidasWhereUniqueInput[]
    update?: curtidasUpdateWithWhereUniqueWithoutUsuariosInput | curtidasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: curtidasUpdateManyWithWhereWithoutUsuariosInput | curtidasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: curtidasScalarWhereInput | curtidasScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<postsCreateWithoutUsuariosInput, postsUncheckedCreateWithoutUsuariosInput> | postsCreateWithoutUsuariosInput[] | postsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsuariosInput | postsCreateOrConnectWithoutUsuariosInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUsuariosInput | postsUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: postsCreateManyUsuariosInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUsuariosInput | postsUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUsuariosInput | postsUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
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

  export type usuariosCreateWithoutCurtidasInput = {
    nome: string
    sobrenome: string
    email: string
    biografia?: string | null
    avatar_url?: string | null
    senha: string
    data_registro?: Date | string
    posts?: postsCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutCurtidasInput = {
    idusuario?: number
    nome: string
    sobrenome: string
    email: string
    biografia?: string | null
    avatar_url?: string | null
    senha: string
    data_registro?: Date | string
    posts?: postsUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutCurtidasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutCurtidasInput, usuariosUncheckedCreateWithoutCurtidasInput>
  }

  export type postsCreateWithoutCurtidasInput = {
    titulo: string
    conteudo: string
    data_criacao?: Date | string
    usuarios?: usuariosCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutCurtidasInput = {
    idpost?: number
    titulo: string
    conteudo: string
    data_criacao?: Date | string
    idusuario?: number
  }

  export type postsCreateOrConnectWithoutCurtidasInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutCurtidasInput, postsUncheckedCreateWithoutCurtidasInput>
  }

  export type usuariosUpsertWithoutCurtidasInput = {
    update: XOR<usuariosUpdateWithoutCurtidasInput, usuariosUncheckedUpdateWithoutCurtidasInput>
    create: XOR<usuariosCreateWithoutCurtidasInput, usuariosUncheckedCreateWithoutCurtidasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutCurtidasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutCurtidasInput, usuariosUncheckedUpdateWithoutCurtidasInput>
  }

  export type usuariosUpdateWithoutCurtidasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: postsUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutCurtidasInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: postsUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type postsUpsertWithoutCurtidasInput = {
    update: XOR<postsUpdateWithoutCurtidasInput, postsUncheckedUpdateWithoutCurtidasInput>
    create: XOR<postsCreateWithoutCurtidasInput, postsUncheckedCreateWithoutCurtidasInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutCurtidasInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutCurtidasInput, postsUncheckedUpdateWithoutCurtidasInput>
  }

  export type postsUpdateWithoutCurtidasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateOneRequiredWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutCurtidasInput = {
    idpost?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    idusuario?: IntFieldUpdateOperationsInput | number
  }

  export type curtidasCreateWithoutPostsInput = {
    usuarios: usuariosCreateNestedOneWithoutCurtidasInput
  }

  export type curtidasUncheckedCreateWithoutPostsInput = {
    idusuario: number
  }

  export type curtidasCreateOrConnectWithoutPostsInput = {
    where: curtidasWhereUniqueInput
    create: XOR<curtidasCreateWithoutPostsInput, curtidasUncheckedCreateWithoutPostsInput>
  }

  export type curtidasCreateManyPostsInputEnvelope = {
    data: curtidasCreateManyPostsInput | curtidasCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type usuariosCreateWithoutPostsInput = {
    nome: string
    sobrenome: string
    email: string
    biografia?: string | null
    avatar_url?: string | null
    senha: string
    data_registro?: Date | string
    curtidas?: curtidasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutPostsInput = {
    idusuario?: number
    nome: string
    sobrenome: string
    email: string
    biografia?: string | null
    avatar_url?: string | null
    senha: string
    data_registro?: Date | string
    curtidas?: curtidasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutPostsInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutPostsInput, usuariosUncheckedCreateWithoutPostsInput>
  }

  export type curtidasUpsertWithWhereUniqueWithoutPostsInput = {
    where: curtidasWhereUniqueInput
    update: XOR<curtidasUpdateWithoutPostsInput, curtidasUncheckedUpdateWithoutPostsInput>
    create: XOR<curtidasCreateWithoutPostsInput, curtidasUncheckedCreateWithoutPostsInput>
  }

  export type curtidasUpdateWithWhereUniqueWithoutPostsInput = {
    where: curtidasWhereUniqueInput
    data: XOR<curtidasUpdateWithoutPostsInput, curtidasUncheckedUpdateWithoutPostsInput>
  }

  export type curtidasUpdateManyWithWhereWithoutPostsInput = {
    where: curtidasScalarWhereInput
    data: XOR<curtidasUpdateManyMutationInput, curtidasUncheckedUpdateManyWithoutPostsInput>
  }

  export type curtidasScalarWhereInput = {
    AND?: curtidasScalarWhereInput | curtidasScalarWhereInput[]
    OR?: curtidasScalarWhereInput[]
    NOT?: curtidasScalarWhereInput | curtidasScalarWhereInput[]
    idusuario?: IntFilter<"curtidas"> | number
    idpost?: IntFilter<"curtidas"> | number
  }

  export type usuariosUpsertWithoutPostsInput = {
    update: XOR<usuariosUpdateWithoutPostsInput, usuariosUncheckedUpdateWithoutPostsInput>
    create: XOR<usuariosCreateWithoutPostsInput, usuariosUncheckedCreateWithoutPostsInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutPostsInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutPostsInput, usuariosUncheckedUpdateWithoutPostsInput>
  }

  export type usuariosUpdateWithoutPostsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: curtidasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutPostsInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: curtidasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type curtidasCreateWithoutUsuariosInput = {
    posts: postsCreateNestedOneWithoutCurtidasInput
  }

  export type curtidasUncheckedCreateWithoutUsuariosInput = {
    idpost: number
  }

  export type curtidasCreateOrConnectWithoutUsuariosInput = {
    where: curtidasWhereUniqueInput
    create: XOR<curtidasCreateWithoutUsuariosInput, curtidasUncheckedCreateWithoutUsuariosInput>
  }

  export type curtidasCreateManyUsuariosInputEnvelope = {
    data: curtidasCreateManyUsuariosInput | curtidasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutUsuariosInput = {
    titulo: string
    conteudo: string
    data_criacao?: Date | string
    curtidas?: curtidasCreateNestedManyWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutUsuariosInput = {
    idpost?: number
    titulo: string
    conteudo: string
    data_criacao?: Date | string
    curtidas?: curtidasUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutUsuariosInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutUsuariosInput, postsUncheckedCreateWithoutUsuariosInput>
  }

  export type postsCreateManyUsuariosInputEnvelope = {
    data: postsCreateManyUsuariosInput | postsCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type curtidasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: curtidasWhereUniqueInput
    update: XOR<curtidasUpdateWithoutUsuariosInput, curtidasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<curtidasCreateWithoutUsuariosInput, curtidasUncheckedCreateWithoutUsuariosInput>
  }

  export type curtidasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: curtidasWhereUniqueInput
    data: XOR<curtidasUpdateWithoutUsuariosInput, curtidasUncheckedUpdateWithoutUsuariosInput>
  }

  export type curtidasUpdateManyWithWhereWithoutUsuariosInput = {
    where: curtidasScalarWhereInput
    data: XOR<curtidasUpdateManyMutationInput, curtidasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type postsUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutUsuariosInput, postsUncheckedUpdateWithoutUsuariosInput>
    create: XOR<postsCreateWithoutUsuariosInput, postsUncheckedCreateWithoutUsuariosInput>
  }

  export type postsUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutUsuariosInput, postsUncheckedUpdateWithoutUsuariosInput>
  }

  export type postsUpdateManyWithWhereWithoutUsuariosInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type postsScalarWhereInput = {
    AND?: postsScalarWhereInput | postsScalarWhereInput[]
    OR?: postsScalarWhereInput[]
    NOT?: postsScalarWhereInput | postsScalarWhereInput[]
    idpost?: IntFilter<"posts"> | number
    titulo?: StringFilter<"posts"> | string
    conteudo?: StringFilter<"posts"> | string
    data_criacao?: DateTimeFilter<"posts"> | Date | string
    idusuario?: IntFilter<"posts"> | number
  }

  export type curtidasCreateManyPostsInput = {
    idusuario: number
  }

  export type curtidasUpdateWithoutPostsInput = {
    usuarios?: usuariosUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type curtidasUncheckedUpdateWithoutPostsInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
  }

  export type curtidasUncheckedUpdateManyWithoutPostsInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
  }

  export type curtidasCreateManyUsuariosInput = {
    idpost: number
  }

  export type postsCreateManyUsuariosInput = {
    idpost?: number
    titulo: string
    conteudo: string
    data_criacao?: Date | string
  }

  export type curtidasUpdateWithoutUsuariosInput = {
    posts?: postsUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type curtidasUncheckedUpdateWithoutUsuariosInput = {
    idpost?: IntFieldUpdateOperationsInput | number
  }

  export type curtidasUncheckedUpdateManyWithoutUsuariosInput = {
    idpost?: IntFieldUpdateOperationsInput | number
  }

  export type postsUpdateWithoutUsuariosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: curtidasUpdateManyWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutUsuariosInput = {
    idpost?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: curtidasUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateManyWithoutUsuariosInput = {
    idpost?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
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