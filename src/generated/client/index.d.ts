
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
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model Rack
 * 
 */
export type Rack = $Result.DefaultSelection<Prisma.$RackPayload>
/**
 * Model Operation
 * 
 */
export type Operation = $Result.DefaultSelection<Prisma.$OperationPayload>
/**
 * Model PendingInventory
 * 
 */
export type PendingInventory = $Result.DefaultSelection<Prisma.$PendingInventoryPayload>
/**
 * Model TransactionHistory
 * 
 */
export type TransactionHistory = $Result.DefaultSelection<Prisma.$TransactionHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs>;

  /**
   * `prisma.rack`: Exposes CRUD operations for the **Rack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Racks
    * const racks = await prisma.rack.findMany()
    * ```
    */
  get rack(): Prisma.RackDelegate<ExtArgs>;

  /**
   * `prisma.operation`: Exposes CRUD operations for the **Operation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operations
    * const operations = await prisma.operation.findMany()
    * ```
    */
  get operation(): Prisma.OperationDelegate<ExtArgs>;

  /**
   * `prisma.pendingInventory`: Exposes CRUD operations for the **PendingInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendingInventories
    * const pendingInventories = await prisma.pendingInventory.findMany()
    * ```
    */
  get pendingInventory(): Prisma.PendingInventoryDelegate<ExtArgs>;

  /**
   * `prisma.transactionHistory`: Exposes CRUD operations for the **TransactionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionHistories
    * const transactionHistories = await prisma.transactionHistory.findMany()
    * ```
    */
  get transactionHistory(): Prisma.TransactionHistoryDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Organization: 'Organization',
    User: 'User',
    Product: 'Product',
    Category: 'Category',
    Inventory: 'Inventory',
    Rack: 'Rack',
    Operation: 'Operation',
    PendingInventory: 'PendingInventory',
    TransactionHistory: 'TransactionHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "organization" | "user" | "product" | "category" | "inventory" | "rack" | "operation" | "pendingInventory" | "transactionHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      Rack: {
        payload: Prisma.$RackPayload<ExtArgs>
        fields: Prisma.RackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RackPayload>
          }
          findFirst: {
            args: Prisma.RackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RackPayload>
          }
          findMany: {
            args: Prisma.RackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RackPayload>[]
          }
          create: {
            args: Prisma.RackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RackPayload>
          }
          createMany: {
            args: Prisma.RackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RackPayload>[]
          }
          delete: {
            args: Prisma.RackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RackPayload>
          }
          update: {
            args: Prisma.RackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RackPayload>
          }
          deleteMany: {
            args: Prisma.RackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RackPayload>
          }
          aggregate: {
            args: Prisma.RackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRack>
          }
          groupBy: {
            args: Prisma.RackGroupByArgs<ExtArgs>
            result: $Utils.Optional<RackGroupByOutputType>[]
          }
          count: {
            args: Prisma.RackCountArgs<ExtArgs>
            result: $Utils.Optional<RackCountAggregateOutputType> | number
          }
        }
      }
      Operation: {
        payload: Prisma.$OperationPayload<ExtArgs>
        fields: Prisma.OperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findFirst: {
            args: Prisma.OperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findMany: {
            args: Prisma.OperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          create: {
            args: Prisma.OperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          createMany: {
            args: Prisma.OperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          delete: {
            args: Prisma.OperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          update: {
            args: Prisma.OperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          deleteMany: {
            args: Prisma.OperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          aggregate: {
            args: Prisma.OperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperation>
          }
          groupBy: {
            args: Prisma.OperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperationCountArgs<ExtArgs>
            result: $Utils.Optional<OperationCountAggregateOutputType> | number
          }
        }
      }
      PendingInventory: {
        payload: Prisma.$PendingInventoryPayload<ExtArgs>
        fields: Prisma.PendingInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendingInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendingInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingInventoryPayload>
          }
          findFirst: {
            args: Prisma.PendingInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendingInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingInventoryPayload>
          }
          findMany: {
            args: Prisma.PendingInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingInventoryPayload>[]
          }
          create: {
            args: Prisma.PendingInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingInventoryPayload>
          }
          createMany: {
            args: Prisma.PendingInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendingInventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingInventoryPayload>[]
          }
          delete: {
            args: Prisma.PendingInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingInventoryPayload>
          }
          update: {
            args: Prisma.PendingInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingInventoryPayload>
          }
          deleteMany: {
            args: Prisma.PendingInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendingInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PendingInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingInventoryPayload>
          }
          aggregate: {
            args: Prisma.PendingInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendingInventory>
          }
          groupBy: {
            args: Prisma.PendingInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendingInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendingInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<PendingInventoryCountAggregateOutputType> | number
          }
        }
      }
      TransactionHistory: {
        payload: Prisma.$TransactionHistoryPayload<ExtArgs>
        fields: Prisma.TransactionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          findFirst: {
            args: Prisma.TransactionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          findMany: {
            args: Prisma.TransactionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>[]
          }
          create: {
            args: Prisma.TransactionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          createMany: {
            args: Prisma.TransactionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>[]
          }
          delete: {
            args: Prisma.TransactionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          update: {
            args: Prisma.TransactionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TransactionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          aggregate: {
            args: Prisma.TransactionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionHistory>
          }
          groupBy: {
            args: Prisma.TransactionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionHistoryCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    operations: number
    transactionHistories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operations?: boolean | UserCountOutputTypeCountOperationsArgs
    transactionHistories?: boolean | UserCountOutputTypeCountTransactionHistoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionHistoryWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    inventory: number
    operations: number
    pendingInventory: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | ProductCountOutputTypeCountInventoryArgs
    operations?: boolean | ProductCountOutputTypeCountOperationsArgs
    pendingInventory?: boolean | ProductCountOutputTypeCountPendingInventoryArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPendingInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingInventoryWhereInput
  }


  /**
   * Count Type RackCountOutputType
   */

  export type RackCountOutputType = {
    inventory: number
    operations: number
    pendingInventory: number
  }

  export type RackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | RackCountOutputTypeCountInventoryArgs
    operations?: boolean | RackCountOutputTypeCountOperationsArgs
    pendingInventory?: boolean | RackCountOutputTypeCountPendingInventoryArgs
  }

  // Custom InputTypes
  /**
   * RackCountOutputType without action
   */
  export type RackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RackCountOutputType
     */
    select?: RackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RackCountOutputType without action
   */
  export type RackCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * RackCountOutputType without action
   */
  export type RackCountOutputTypeCountOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
  }

  /**
   * RackCountOutputType without action
   */
  export type RackCountOutputTypeCountPendingInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingInventoryWhereInput
  }


  /**
   * Count Type OperationCountOutputType
   */

  export type OperationCountOutputType = {
    pendingInventory: number
    transactionHistories: number
  }

  export type OperationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendingInventory?: boolean | OperationCountOutputTypeCountPendingInventoryArgs
    transactionHistories?: boolean | OperationCountOutputTypeCountTransactionHistoriesArgs
  }

  // Custom InputTypes
  /**
   * OperationCountOutputType without action
   */
  export type OperationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationCountOutputType
     */
    select?: OperationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperationCountOutputType without action
   */
  export type OperationCountOutputTypeCountPendingInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingInventoryWhereInput
  }

  /**
   * OperationCountOutputType without action
   */
  export type OperationCountOutputTypeCountTransactionHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    gstin: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gstin: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    gstin: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    gstin?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    gstin?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    gstin?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    gstin: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gstin?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gstin?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    gstin?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      gstin: string
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Organization model
   */ 
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly gstin: FieldRef<"Organization", 'String'>
    readonly address: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    designation: string | null
    mobileNumber: string | null
    isAdmin: boolean | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    designation: string | null
    mobileNumber: string | null
    isAdmin: boolean | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    designation: number
    mobileNumber: number
    isAdmin: number
    organizationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    designation?: true
    mobileNumber?: true
    isAdmin?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    designation?: true
    mobileNumber?: true
    isAdmin?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    designation?: true
    mobileNumber?: true
    isAdmin?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    name: string
    designation: string
    mobileNumber: string
    isAdmin: boolean
    organizationId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    designation?: boolean
    mobileNumber?: boolean
    isAdmin?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    operations?: boolean | User$operationsArgs<ExtArgs>
    transactionHistories?: boolean | User$transactionHistoriesArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    designation?: boolean
    mobileNumber?: boolean
    isAdmin?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    designation?: boolean
    mobileNumber?: boolean
    isAdmin?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operations?: boolean | User$operationsArgs<ExtArgs>
    transactionHistories?: boolean | User$transactionHistoriesArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      operations: Prisma.$OperationPayload<ExtArgs>[]
      transactionHistories: Prisma.$TransactionHistoryPayload<ExtArgs>[]
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      name: string
      designation: string
      mobileNumber: string
      isAdmin: boolean
      organizationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operations<T extends User$operationsArgs<ExtArgs> = {}>(args?: Subset<T, User$operationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany"> | Null>
    transactionHistories<T extends User$transactionHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly designation: FieldRef<"User", 'String'>
    readonly mobileNumber: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly organizationId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.operations
   */
  export type User$operationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    cursor?: OperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * User.transactionHistories
   */
  export type User$transactionHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    where?: TransactionHistoryWhereInput
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    cursor?: TransactionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    sku: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    sku: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    sku: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    sku?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    sku?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    sku?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: number
    sku: string
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    sku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventory?: boolean | Product$inventoryArgs<ExtArgs>
    operations?: boolean | Product$operationsArgs<ExtArgs>
    pendingInventory?: boolean | Product$pendingInventoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    sku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    sku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | Product$inventoryArgs<ExtArgs>
    operations?: boolean | Product$operationsArgs<ExtArgs>
    pendingInventory?: boolean | Product$pendingInventoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs>[]
      operations: Prisma.$OperationPayload<ExtArgs>[]
      pendingInventory: Prisma.$PendingInventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: number
      sku: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends Product$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany"> | Null>
    operations<T extends Product$operationsArgs<ExtArgs> = {}>(args?: Subset<T, Product$operationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany"> | Null>
    pendingInventory<T extends Product$pendingInventoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$pendingInventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.inventory
   */
  export type Product$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Product.operations
   */
  export type Product$operationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    cursor?: OperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Product.pendingInventory
   */
  export type Product$pendingInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
    where?: PendingInventoryWhereInput
    orderBy?: PendingInventoryOrderByWithRelationInput | PendingInventoryOrderByWithRelationInput[]
    cursor?: PendingInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingInventoryScalarFieldEnum | PendingInventoryScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null
  }

  export type InventorySumAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryMinAggregateOutputType = {
    quantity: number | null
    productId: string | null
    rackId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    quantity: number | null
    productId: string | null
    rackId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    quantity: number
    productId: number
    rackId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    quantity?: true
  }

  export type InventorySumAggregateInputType = {
    quantity?: true
  }

  export type InventoryMinAggregateInputType = {
    quantity?: true
    productId?: true
    rackId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryMaxAggregateInputType = {
    quantity?: true
    productId?: true
    rackId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryCountAggregateInputType = {
    quantity?: true
    productId?: true
    rackId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    quantity: number
    productId: string
    rackId: string
    createdAt: Date
    updatedAt: Date
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quantity?: boolean
    productId?: boolean
    rackId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rack?: boolean | RackDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quantity?: boolean
    productId?: boolean
    rackId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rack?: boolean | RackDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    quantity?: boolean
    productId?: boolean
    rackId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rack?: boolean | RackDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rack?: boolean | RackDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      rack: Prisma.$RackPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      quantity: number
      productId: string
      rackId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `quantity`
     * const inventoryWithQuantityOnly = await prisma.inventory.findMany({ select: { quantity: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `quantity`
     * const inventoryWithQuantityOnly = await prisma.inventory.createManyAndReturn({ 
     *   select: { quantity: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
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
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rack<T extends RackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RackDefaultArgs<ExtArgs>>): Prisma__RackClient<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Inventory model
   */ 
  interface InventoryFieldRefs {
    readonly quantity: FieldRef<"Inventory", 'Int'>
    readonly productId: FieldRef<"Inventory", 'String'>
    readonly rackId: FieldRef<"Inventory", 'String'>
    readonly createdAt: FieldRef<"Inventory", 'DateTime'>
    readonly updatedAt: FieldRef<"Inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model Rack
   */

  export type AggregateRack = {
    _count: RackCountAggregateOutputType | null
    _min: RackMinAggregateOutputType | null
    _max: RackMaxAggregateOutputType | null
  }

  export type RackMinAggregateOutputType = {
    id: string | null
    number: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RackMaxAggregateOutputType = {
    id: string | null
    number: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RackCountAggregateOutputType = {
    id: number
    number: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RackMinAggregateInputType = {
    id?: true
    number?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RackMaxAggregateInputType = {
    id?: true
    number?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RackCountAggregateInputType = {
    id?: true
    number?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rack to aggregate.
     */
    where?: RackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Racks to fetch.
     */
    orderBy?: RackOrderByWithRelationInput | RackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Racks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Racks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Racks
    **/
    _count?: true | RackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RackMaxAggregateInputType
  }

  export type GetRackAggregateType<T extends RackAggregateArgs> = {
        [P in keyof T & keyof AggregateRack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRack[P]>
      : GetScalarType<T[P], AggregateRack[P]>
  }




  export type RackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RackWhereInput
    orderBy?: RackOrderByWithAggregationInput | RackOrderByWithAggregationInput[]
    by: RackScalarFieldEnum[] | RackScalarFieldEnum
    having?: RackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RackCountAggregateInputType | true
    _min?: RackMinAggregateInputType
    _max?: RackMaxAggregateInputType
  }

  export type RackGroupByOutputType = {
    id: string
    number: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: RackCountAggregateOutputType | null
    _min: RackMinAggregateOutputType | null
    _max: RackMaxAggregateOutputType | null
  }

  type GetRackGroupByPayload<T extends RackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RackGroupByOutputType[P]>
            : GetScalarType<T[P], RackGroupByOutputType[P]>
        }
      >
    >


  export type RackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventory?: boolean | Rack$inventoryArgs<ExtArgs>
    operations?: boolean | Rack$operationsArgs<ExtArgs>
    pendingInventory?: boolean | Rack$pendingInventoryArgs<ExtArgs>
    _count?: boolean | RackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rack"]>

  export type RackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rack"]>

  export type RackSelectScalar = {
    id?: boolean
    number?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | Rack$inventoryArgs<ExtArgs>
    operations?: boolean | Rack$operationsArgs<ExtArgs>
    pendingInventory?: boolean | Rack$pendingInventoryArgs<ExtArgs>
    _count?: boolean | RackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rack"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs>[]
      operations: Prisma.$OperationPayload<ExtArgs>[]
      pendingInventory: Prisma.$PendingInventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rack"]>
    composites: {}
  }

  type RackGetPayload<S extends boolean | null | undefined | RackDefaultArgs> = $Result.GetResult<Prisma.$RackPayload, S>

  type RackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RackCountAggregateInputType | true
    }

  export interface RackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rack'], meta: { name: 'Rack' } }
    /**
     * Find zero or one Rack that matches the filter.
     * @param {RackFindUniqueArgs} args - Arguments to find a Rack
     * @example
     * // Get one Rack
     * const rack = await prisma.rack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RackFindUniqueArgs>(args: SelectSubset<T, RackFindUniqueArgs<ExtArgs>>): Prisma__RackClient<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rack that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RackFindUniqueOrThrowArgs} args - Arguments to find a Rack
     * @example
     * // Get one Rack
     * const rack = await prisma.rack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RackFindUniqueOrThrowArgs>(args: SelectSubset<T, RackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RackClient<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackFindFirstArgs} args - Arguments to find a Rack
     * @example
     * // Get one Rack
     * const rack = await prisma.rack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RackFindFirstArgs>(args?: SelectSubset<T, RackFindFirstArgs<ExtArgs>>): Prisma__RackClient<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackFindFirstOrThrowArgs} args - Arguments to find a Rack
     * @example
     * // Get one Rack
     * const rack = await prisma.rack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RackFindFirstOrThrowArgs>(args?: SelectSubset<T, RackFindFirstOrThrowArgs<ExtArgs>>): Prisma__RackClient<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Racks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Racks
     * const racks = await prisma.rack.findMany()
     * 
     * // Get first 10 Racks
     * const racks = await prisma.rack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rackWithIdOnly = await prisma.rack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RackFindManyArgs>(args?: SelectSubset<T, RackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rack.
     * @param {RackCreateArgs} args - Arguments to create a Rack.
     * @example
     * // Create one Rack
     * const Rack = await prisma.rack.create({
     *   data: {
     *     // ... data to create a Rack
     *   }
     * })
     * 
     */
    create<T extends RackCreateArgs>(args: SelectSubset<T, RackCreateArgs<ExtArgs>>): Prisma__RackClient<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Racks.
     * @param {RackCreateManyArgs} args - Arguments to create many Racks.
     * @example
     * // Create many Racks
     * const rack = await prisma.rack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RackCreateManyArgs>(args?: SelectSubset<T, RackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Racks and returns the data saved in the database.
     * @param {RackCreateManyAndReturnArgs} args - Arguments to create many Racks.
     * @example
     * // Create many Racks
     * const rack = await prisma.rack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Racks and only return the `id`
     * const rackWithIdOnly = await prisma.rack.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RackCreateManyAndReturnArgs>(args?: SelectSubset<T, RackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Rack.
     * @param {RackDeleteArgs} args - Arguments to delete one Rack.
     * @example
     * // Delete one Rack
     * const Rack = await prisma.rack.delete({
     *   where: {
     *     // ... filter to delete one Rack
     *   }
     * })
     * 
     */
    delete<T extends RackDeleteArgs>(args: SelectSubset<T, RackDeleteArgs<ExtArgs>>): Prisma__RackClient<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rack.
     * @param {RackUpdateArgs} args - Arguments to update one Rack.
     * @example
     * // Update one Rack
     * const rack = await prisma.rack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RackUpdateArgs>(args: SelectSubset<T, RackUpdateArgs<ExtArgs>>): Prisma__RackClient<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Racks.
     * @param {RackDeleteManyArgs} args - Arguments to filter Racks to delete.
     * @example
     * // Delete a few Racks
     * const { count } = await prisma.rack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RackDeleteManyArgs>(args?: SelectSubset<T, RackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Racks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Racks
     * const rack = await prisma.rack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RackUpdateManyArgs>(args: SelectSubset<T, RackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rack.
     * @param {RackUpsertArgs} args - Arguments to update or create a Rack.
     * @example
     * // Update or create a Rack
     * const rack = await prisma.rack.upsert({
     *   create: {
     *     // ... data to create a Rack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rack we want to update
     *   }
     * })
     */
    upsert<T extends RackUpsertArgs>(args: SelectSubset<T, RackUpsertArgs<ExtArgs>>): Prisma__RackClient<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Racks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackCountArgs} args - Arguments to filter Racks to count.
     * @example
     * // Count the number of Racks
     * const count = await prisma.rack.count({
     *   where: {
     *     // ... the filter for the Racks we want to count
     *   }
     * })
    **/
    count<T extends RackCountArgs>(
      args?: Subset<T, RackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RackAggregateArgs>(args: Subset<T, RackAggregateArgs>): Prisma.PrismaPromise<GetRackAggregateType<T>>

    /**
     * Group by Rack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackGroupByArgs} args - Group by arguments.
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
      T extends RackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RackGroupByArgs['orderBy'] }
        : { orderBy?: RackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rack model
   */
  readonly fields: RackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends Rack$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Rack$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany"> | Null>
    operations<T extends Rack$operationsArgs<ExtArgs> = {}>(args?: Subset<T, Rack$operationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany"> | Null>
    pendingInventory<T extends Rack$pendingInventoryArgs<ExtArgs> = {}>(args?: Subset<T, Rack$pendingInventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Rack model
   */ 
  interface RackFieldRefs {
    readonly id: FieldRef<"Rack", 'String'>
    readonly number: FieldRef<"Rack", 'String'>
    readonly description: FieldRef<"Rack", 'String'>
    readonly createdAt: FieldRef<"Rack", 'DateTime'>
    readonly updatedAt: FieldRef<"Rack", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rack findUnique
   */
  export type RackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rack
     */
    select?: RackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RackInclude<ExtArgs> | null
    /**
     * Filter, which Rack to fetch.
     */
    where: RackWhereUniqueInput
  }

  /**
   * Rack findUniqueOrThrow
   */
  export type RackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rack
     */
    select?: RackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RackInclude<ExtArgs> | null
    /**
     * Filter, which Rack to fetch.
     */
    where: RackWhereUniqueInput
  }

  /**
   * Rack findFirst
   */
  export type RackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rack
     */
    select?: RackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RackInclude<ExtArgs> | null
    /**
     * Filter, which Rack to fetch.
     */
    where?: RackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Racks to fetch.
     */
    orderBy?: RackOrderByWithRelationInput | RackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Racks.
     */
    cursor?: RackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Racks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Racks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Racks.
     */
    distinct?: RackScalarFieldEnum | RackScalarFieldEnum[]
  }

  /**
   * Rack findFirstOrThrow
   */
  export type RackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rack
     */
    select?: RackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RackInclude<ExtArgs> | null
    /**
     * Filter, which Rack to fetch.
     */
    where?: RackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Racks to fetch.
     */
    orderBy?: RackOrderByWithRelationInput | RackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Racks.
     */
    cursor?: RackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Racks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Racks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Racks.
     */
    distinct?: RackScalarFieldEnum | RackScalarFieldEnum[]
  }

  /**
   * Rack findMany
   */
  export type RackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rack
     */
    select?: RackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RackInclude<ExtArgs> | null
    /**
     * Filter, which Racks to fetch.
     */
    where?: RackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Racks to fetch.
     */
    orderBy?: RackOrderByWithRelationInput | RackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Racks.
     */
    cursor?: RackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Racks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Racks.
     */
    skip?: number
    distinct?: RackScalarFieldEnum | RackScalarFieldEnum[]
  }

  /**
   * Rack create
   */
  export type RackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rack
     */
    select?: RackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RackInclude<ExtArgs> | null
    /**
     * The data needed to create a Rack.
     */
    data: XOR<RackCreateInput, RackUncheckedCreateInput>
  }

  /**
   * Rack createMany
   */
  export type RackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Racks.
     */
    data: RackCreateManyInput | RackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rack createManyAndReturn
   */
  export type RackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rack
     */
    select?: RackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Racks.
     */
    data: RackCreateManyInput | RackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rack update
   */
  export type RackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rack
     */
    select?: RackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RackInclude<ExtArgs> | null
    /**
     * The data needed to update a Rack.
     */
    data: XOR<RackUpdateInput, RackUncheckedUpdateInput>
    /**
     * Choose, which Rack to update.
     */
    where: RackWhereUniqueInput
  }

  /**
   * Rack updateMany
   */
  export type RackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Racks.
     */
    data: XOR<RackUpdateManyMutationInput, RackUncheckedUpdateManyInput>
    /**
     * Filter which Racks to update
     */
    where?: RackWhereInput
  }

  /**
   * Rack upsert
   */
  export type RackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rack
     */
    select?: RackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RackInclude<ExtArgs> | null
    /**
     * The filter to search for the Rack to update in case it exists.
     */
    where: RackWhereUniqueInput
    /**
     * In case the Rack found by the `where` argument doesn't exist, create a new Rack with this data.
     */
    create: XOR<RackCreateInput, RackUncheckedCreateInput>
    /**
     * In case the Rack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RackUpdateInput, RackUncheckedUpdateInput>
  }

  /**
   * Rack delete
   */
  export type RackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rack
     */
    select?: RackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RackInclude<ExtArgs> | null
    /**
     * Filter which Rack to delete.
     */
    where: RackWhereUniqueInput
  }

  /**
   * Rack deleteMany
   */
  export type RackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Racks to delete
     */
    where?: RackWhereInput
  }

  /**
   * Rack.inventory
   */
  export type Rack$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Rack.operations
   */
  export type Rack$operationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    cursor?: OperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Rack.pendingInventory
   */
  export type Rack$pendingInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
    where?: PendingInventoryWhereInput
    orderBy?: PendingInventoryOrderByWithRelationInput | PendingInventoryOrderByWithRelationInput[]
    cursor?: PendingInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingInventoryScalarFieldEnum | PendingInventoryScalarFieldEnum[]
  }

  /**
   * Rack without action
   */
  export type RackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rack
     */
    select?: RackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RackInclude<ExtArgs> | null
  }


  /**
   * Model Operation
   */

  export type AggregateOperation = {
    _count: OperationCountAggregateOutputType | null
    _avg: OperationAvgAggregateOutputType | null
    _sum: OperationSumAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  export type OperationAvgAggregateOutputType = {
    quantity: number | null
  }

  export type OperationSumAggregateOutputType = {
    quantity: number | null
  }

  export type OperationMinAggregateOutputType = {
    id: string | null
    type: string | null
    quantity: number | null
    productId: string | null
    userId: string | null
    rackId: string | null
    isApproved: boolean | null
    isCancelled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperationMaxAggregateOutputType = {
    id: string | null
    type: string | null
    quantity: number | null
    productId: string | null
    userId: string | null
    rackId: string | null
    isApproved: boolean | null
    isCancelled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperationCountAggregateOutputType = {
    id: number
    type: number
    quantity: number
    productId: number
    userId: number
    rackId: number
    isApproved: number
    isCancelled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OperationAvgAggregateInputType = {
    quantity?: true
  }

  export type OperationSumAggregateInputType = {
    quantity?: true
  }

  export type OperationMinAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    productId?: true
    userId?: true
    rackId?: true
    isApproved?: true
    isCancelled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperationMaxAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    productId?: true
    userId?: true
    rackId?: true
    isApproved?: true
    isCancelled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperationCountAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    productId?: true
    userId?: true
    rackId?: true
    isApproved?: true
    isCancelled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operation to aggregate.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operations
    **/
    _count?: true | OperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperationMaxAggregateInputType
  }

  export type GetOperationAggregateType<T extends OperationAggregateArgs> = {
        [P in keyof T & keyof AggregateOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperation[P]>
      : GetScalarType<T[P], AggregateOperation[P]>
  }




  export type OperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithAggregationInput | OperationOrderByWithAggregationInput[]
    by: OperationScalarFieldEnum[] | OperationScalarFieldEnum
    having?: OperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperationCountAggregateInputType | true
    _avg?: OperationAvgAggregateInputType
    _sum?: OperationSumAggregateInputType
    _min?: OperationMinAggregateInputType
    _max?: OperationMaxAggregateInputType
  }

  export type OperationGroupByOutputType = {
    id: string
    type: string
    quantity: number
    productId: string
    userId: string
    rackId: string
    isApproved: boolean
    isCancelled: boolean
    createdAt: Date
    updatedAt: Date
    _count: OperationCountAggregateOutputType | null
    _avg: OperationAvgAggregateOutputType | null
    _sum: OperationSumAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  type GetOperationGroupByPayload<T extends OperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperationGroupByOutputType[P]>
            : GetScalarType<T[P], OperationGroupByOutputType[P]>
        }
      >
    >


  export type OperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    productId?: boolean
    userId?: boolean
    rackId?: boolean
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rack?: boolean | RackDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    pendingInventory?: boolean | Operation$pendingInventoryArgs<ExtArgs>
    transactionHistories?: boolean | Operation$transactionHistoriesArgs<ExtArgs>
    _count?: boolean | OperationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    productId?: boolean
    userId?: boolean
    rackId?: boolean
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rack?: boolean | RackDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectScalar = {
    id?: boolean
    type?: boolean
    quantity?: boolean
    productId?: boolean
    userId?: boolean
    rackId?: boolean
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rack?: boolean | RackDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    pendingInventory?: boolean | Operation$pendingInventoryArgs<ExtArgs>
    transactionHistories?: boolean | Operation$transactionHistoriesArgs<ExtArgs>
    _count?: boolean | OperationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rack?: boolean | RackDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operation"
    objects: {
      rack: Prisma.$RackPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      pendingInventory: Prisma.$PendingInventoryPayload<ExtArgs>[]
      transactionHistories: Prisma.$TransactionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      quantity: number
      productId: string
      userId: string
      rackId: string
      isApproved: boolean
      isCancelled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["operation"]>
    composites: {}
  }

  type OperationGetPayload<S extends boolean | null | undefined | OperationDefaultArgs> = $Result.GetResult<Prisma.$OperationPayload, S>

  type OperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OperationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OperationCountAggregateInputType | true
    }

  export interface OperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operation'], meta: { name: 'Operation' } }
    /**
     * Find zero or one Operation that matches the filter.
     * @param {OperationFindUniqueArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperationFindUniqueArgs>(args: SelectSubset<T, OperationFindUniqueArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Operation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OperationFindUniqueOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperationFindUniqueOrThrowArgs>(args: SelectSubset<T, OperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Operation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperationFindFirstArgs>(args?: SelectSubset<T, OperationFindFirstArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Operation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperationFindFirstOrThrowArgs>(args?: SelectSubset<T, OperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Operations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operations
     * const operations = await prisma.operation.findMany()
     * 
     * // Get first 10 Operations
     * const operations = await prisma.operation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operationWithIdOnly = await prisma.operation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperationFindManyArgs>(args?: SelectSubset<T, OperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Operation.
     * @param {OperationCreateArgs} args - Arguments to create a Operation.
     * @example
     * // Create one Operation
     * const Operation = await prisma.operation.create({
     *   data: {
     *     // ... data to create a Operation
     *   }
     * })
     * 
     */
    create<T extends OperationCreateArgs>(args: SelectSubset<T, OperationCreateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Operations.
     * @param {OperationCreateManyArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperationCreateManyArgs>(args?: SelectSubset<T, OperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operations and returns the data saved in the database.
     * @param {OperationCreateManyAndReturnArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operations and only return the `id`
     * const operationWithIdOnly = await prisma.operation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperationCreateManyAndReturnArgs>(args?: SelectSubset<T, OperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Operation.
     * @param {OperationDeleteArgs} args - Arguments to delete one Operation.
     * @example
     * // Delete one Operation
     * const Operation = await prisma.operation.delete({
     *   where: {
     *     // ... filter to delete one Operation
     *   }
     * })
     * 
     */
    delete<T extends OperationDeleteArgs>(args: SelectSubset<T, OperationDeleteArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Operation.
     * @param {OperationUpdateArgs} args - Arguments to update one Operation.
     * @example
     * // Update one Operation
     * const operation = await prisma.operation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperationUpdateArgs>(args: SelectSubset<T, OperationUpdateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Operations.
     * @param {OperationDeleteManyArgs} args - Arguments to filter Operations to delete.
     * @example
     * // Delete a few Operations
     * const { count } = await prisma.operation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperationDeleteManyArgs>(args?: SelectSubset<T, OperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperationUpdateManyArgs>(args: SelectSubset<T, OperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Operation.
     * @param {OperationUpsertArgs} args - Arguments to update or create a Operation.
     * @example
     * // Update or create a Operation
     * const operation = await prisma.operation.upsert({
     *   create: {
     *     // ... data to create a Operation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operation we want to update
     *   }
     * })
     */
    upsert<T extends OperationUpsertArgs>(args: SelectSubset<T, OperationUpsertArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationCountArgs} args - Arguments to filter Operations to count.
     * @example
     * // Count the number of Operations
     * const count = await prisma.operation.count({
     *   where: {
     *     // ... the filter for the Operations we want to count
     *   }
     * })
    **/
    count<T extends OperationCountArgs>(
      args?: Subset<T, OperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperationAggregateArgs>(args: Subset<T, OperationAggregateArgs>): Prisma.PrismaPromise<GetOperationAggregateType<T>>

    /**
     * Group by Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationGroupByArgs} args - Group by arguments.
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
      T extends OperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperationGroupByArgs['orderBy'] }
        : { orderBy?: OperationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operation model
   */
  readonly fields: OperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rack<T extends RackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RackDefaultArgs<ExtArgs>>): Prisma__RackClient<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pendingInventory<T extends Operation$pendingInventoryArgs<ExtArgs> = {}>(args?: Subset<T, Operation$pendingInventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "findMany"> | Null>
    transactionHistories<T extends Operation$transactionHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Operation$transactionHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Operation model
   */ 
  interface OperationFieldRefs {
    readonly id: FieldRef<"Operation", 'String'>
    readonly type: FieldRef<"Operation", 'String'>
    readonly quantity: FieldRef<"Operation", 'Int'>
    readonly productId: FieldRef<"Operation", 'String'>
    readonly userId: FieldRef<"Operation", 'String'>
    readonly rackId: FieldRef<"Operation", 'String'>
    readonly isApproved: FieldRef<"Operation", 'Boolean'>
    readonly isCancelled: FieldRef<"Operation", 'Boolean'>
    readonly createdAt: FieldRef<"Operation", 'DateTime'>
    readonly updatedAt: FieldRef<"Operation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Operation findUnique
   */
  export type OperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findUniqueOrThrow
   */
  export type OperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findFirst
   */
  export type OperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findFirstOrThrow
   */
  export type OperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findMany
   */
  export type OperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operations to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation create
   */
  export type OperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to create a Operation.
     */
    data: XOR<OperationCreateInput, OperationUncheckedCreateInput>
  }

  /**
   * Operation createMany
   */
  export type OperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operation createManyAndReturn
   */
  export type OperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operation update
   */
  export type OperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to update a Operation.
     */
    data: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
    /**
     * Choose, which Operation to update.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation updateMany
   */
  export type OperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationWhereInput
  }

  /**
   * Operation upsert
   */
  export type OperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The filter to search for the Operation to update in case it exists.
     */
    where: OperationWhereUniqueInput
    /**
     * In case the Operation found by the `where` argument doesn't exist, create a new Operation with this data.
     */
    create: XOR<OperationCreateInput, OperationUncheckedCreateInput>
    /**
     * In case the Operation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
  }

  /**
   * Operation delete
   */
  export type OperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter which Operation to delete.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation deleteMany
   */
  export type OperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operations to delete
     */
    where?: OperationWhereInput
  }

  /**
   * Operation.pendingInventory
   */
  export type Operation$pendingInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
    where?: PendingInventoryWhereInput
    orderBy?: PendingInventoryOrderByWithRelationInput | PendingInventoryOrderByWithRelationInput[]
    cursor?: PendingInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingInventoryScalarFieldEnum | PendingInventoryScalarFieldEnum[]
  }

  /**
   * Operation.transactionHistories
   */
  export type Operation$transactionHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    where?: TransactionHistoryWhereInput
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    cursor?: TransactionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * Operation without action
   */
  export type OperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
  }


  /**
   * Model PendingInventory
   */

  export type AggregatePendingInventory = {
    _count: PendingInventoryCountAggregateOutputType | null
    _avg: PendingInventoryAvgAggregateOutputType | null
    _sum: PendingInventorySumAggregateOutputType | null
    _min: PendingInventoryMinAggregateOutputType | null
    _max: PendingInventoryMaxAggregateOutputType | null
  }

  export type PendingInventoryAvgAggregateOutputType = {
    quantity: number | null
  }

  export type PendingInventorySumAggregateOutputType = {
    quantity: number | null
  }

  export type PendingInventoryMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    productId: string | null
    rackId: string | null
    operationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PendingInventoryMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    productId: string | null
    rackId: string | null
    operationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PendingInventoryCountAggregateOutputType = {
    id: number
    quantity: number
    productId: number
    rackId: number
    operationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PendingInventoryAvgAggregateInputType = {
    quantity?: true
  }

  export type PendingInventorySumAggregateInputType = {
    quantity?: true
  }

  export type PendingInventoryMinAggregateInputType = {
    id?: true
    quantity?: true
    productId?: true
    rackId?: true
    operationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PendingInventoryMaxAggregateInputType = {
    id?: true
    quantity?: true
    productId?: true
    rackId?: true
    operationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PendingInventoryCountAggregateInputType = {
    id?: true
    quantity?: true
    productId?: true
    rackId?: true
    operationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PendingInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingInventory to aggregate.
     */
    where?: PendingInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingInventories to fetch.
     */
    orderBy?: PendingInventoryOrderByWithRelationInput | PendingInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendingInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendingInventories
    **/
    _count?: true | PendingInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendingInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendingInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingInventoryMaxAggregateInputType
  }

  export type GetPendingInventoryAggregateType<T extends PendingInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePendingInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendingInventory[P]>
      : GetScalarType<T[P], AggregatePendingInventory[P]>
  }




  export type PendingInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingInventoryWhereInput
    orderBy?: PendingInventoryOrderByWithAggregationInput | PendingInventoryOrderByWithAggregationInput[]
    by: PendingInventoryScalarFieldEnum[] | PendingInventoryScalarFieldEnum
    having?: PendingInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingInventoryCountAggregateInputType | true
    _avg?: PendingInventoryAvgAggregateInputType
    _sum?: PendingInventorySumAggregateInputType
    _min?: PendingInventoryMinAggregateInputType
    _max?: PendingInventoryMaxAggregateInputType
  }

  export type PendingInventoryGroupByOutputType = {
    id: string
    quantity: number
    productId: string
    rackId: string
    operationId: string
    createdAt: Date
    updatedAt: Date
    _count: PendingInventoryCountAggregateOutputType | null
    _avg: PendingInventoryAvgAggregateOutputType | null
    _sum: PendingInventorySumAggregateOutputType | null
    _min: PendingInventoryMinAggregateOutputType | null
    _max: PendingInventoryMaxAggregateOutputType | null
  }

  type GetPendingInventoryGroupByPayload<T extends PendingInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], PendingInventoryGroupByOutputType[P]>
        }
      >
    >


  export type PendingInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    productId?: boolean
    rackId?: boolean
    operationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    operation?: boolean | OperationDefaultArgs<ExtArgs>
    rack?: boolean | RackDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingInventory"]>

  export type PendingInventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    productId?: boolean
    rackId?: boolean
    operationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    operation?: boolean | OperationDefaultArgs<ExtArgs>
    rack?: boolean | RackDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingInventory"]>

  export type PendingInventorySelectScalar = {
    id?: boolean
    quantity?: boolean
    productId?: boolean
    rackId?: boolean
    operationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PendingInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operation?: boolean | OperationDefaultArgs<ExtArgs>
    rack?: boolean | RackDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type PendingInventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operation?: boolean | OperationDefaultArgs<ExtArgs>
    rack?: boolean | RackDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $PendingInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendingInventory"
    objects: {
      operation: Prisma.$OperationPayload<ExtArgs>
      rack: Prisma.$RackPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      productId: string
      rackId: string
      operationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pendingInventory"]>
    composites: {}
  }

  type PendingInventoryGetPayload<S extends boolean | null | undefined | PendingInventoryDefaultArgs> = $Result.GetResult<Prisma.$PendingInventoryPayload, S>

  type PendingInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PendingInventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PendingInventoryCountAggregateInputType | true
    }

  export interface PendingInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendingInventory'], meta: { name: 'PendingInventory' } }
    /**
     * Find zero or one PendingInventory that matches the filter.
     * @param {PendingInventoryFindUniqueArgs} args - Arguments to find a PendingInventory
     * @example
     * // Get one PendingInventory
     * const pendingInventory = await prisma.pendingInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendingInventoryFindUniqueArgs>(args: SelectSubset<T, PendingInventoryFindUniqueArgs<ExtArgs>>): Prisma__PendingInventoryClient<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PendingInventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PendingInventoryFindUniqueOrThrowArgs} args - Arguments to find a PendingInventory
     * @example
     * // Get one PendingInventory
     * const pendingInventory = await prisma.pendingInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendingInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PendingInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendingInventoryClient<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PendingInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingInventoryFindFirstArgs} args - Arguments to find a PendingInventory
     * @example
     * // Get one PendingInventory
     * const pendingInventory = await prisma.pendingInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendingInventoryFindFirstArgs>(args?: SelectSubset<T, PendingInventoryFindFirstArgs<ExtArgs>>): Prisma__PendingInventoryClient<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PendingInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingInventoryFindFirstOrThrowArgs} args - Arguments to find a PendingInventory
     * @example
     * // Get one PendingInventory
     * const pendingInventory = await prisma.pendingInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendingInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PendingInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendingInventoryClient<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PendingInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendingInventories
     * const pendingInventories = await prisma.pendingInventory.findMany()
     * 
     * // Get first 10 PendingInventories
     * const pendingInventories = await prisma.pendingInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingInventoryWithIdOnly = await prisma.pendingInventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendingInventoryFindManyArgs>(args?: SelectSubset<T, PendingInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PendingInventory.
     * @param {PendingInventoryCreateArgs} args - Arguments to create a PendingInventory.
     * @example
     * // Create one PendingInventory
     * const PendingInventory = await prisma.pendingInventory.create({
     *   data: {
     *     // ... data to create a PendingInventory
     *   }
     * })
     * 
     */
    create<T extends PendingInventoryCreateArgs>(args: SelectSubset<T, PendingInventoryCreateArgs<ExtArgs>>): Prisma__PendingInventoryClient<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PendingInventories.
     * @param {PendingInventoryCreateManyArgs} args - Arguments to create many PendingInventories.
     * @example
     * // Create many PendingInventories
     * const pendingInventory = await prisma.pendingInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendingInventoryCreateManyArgs>(args?: SelectSubset<T, PendingInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendingInventories and returns the data saved in the database.
     * @param {PendingInventoryCreateManyAndReturnArgs} args - Arguments to create many PendingInventories.
     * @example
     * // Create many PendingInventories
     * const pendingInventory = await prisma.pendingInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendingInventories and only return the `id`
     * const pendingInventoryWithIdOnly = await prisma.pendingInventory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendingInventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PendingInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PendingInventory.
     * @param {PendingInventoryDeleteArgs} args - Arguments to delete one PendingInventory.
     * @example
     * // Delete one PendingInventory
     * const PendingInventory = await prisma.pendingInventory.delete({
     *   where: {
     *     // ... filter to delete one PendingInventory
     *   }
     * })
     * 
     */
    delete<T extends PendingInventoryDeleteArgs>(args: SelectSubset<T, PendingInventoryDeleteArgs<ExtArgs>>): Prisma__PendingInventoryClient<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PendingInventory.
     * @param {PendingInventoryUpdateArgs} args - Arguments to update one PendingInventory.
     * @example
     * // Update one PendingInventory
     * const pendingInventory = await prisma.pendingInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendingInventoryUpdateArgs>(args: SelectSubset<T, PendingInventoryUpdateArgs<ExtArgs>>): Prisma__PendingInventoryClient<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PendingInventories.
     * @param {PendingInventoryDeleteManyArgs} args - Arguments to filter PendingInventories to delete.
     * @example
     * // Delete a few PendingInventories
     * const { count } = await prisma.pendingInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendingInventoryDeleteManyArgs>(args?: SelectSubset<T, PendingInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendingInventories
     * const pendingInventory = await prisma.pendingInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendingInventoryUpdateManyArgs>(args: SelectSubset<T, PendingInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PendingInventory.
     * @param {PendingInventoryUpsertArgs} args - Arguments to update or create a PendingInventory.
     * @example
     * // Update or create a PendingInventory
     * const pendingInventory = await prisma.pendingInventory.upsert({
     *   create: {
     *     // ... data to create a PendingInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendingInventory we want to update
     *   }
     * })
     */
    upsert<T extends PendingInventoryUpsertArgs>(args: SelectSubset<T, PendingInventoryUpsertArgs<ExtArgs>>): Prisma__PendingInventoryClient<$Result.GetResult<Prisma.$PendingInventoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PendingInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingInventoryCountArgs} args - Arguments to filter PendingInventories to count.
     * @example
     * // Count the number of PendingInventories
     * const count = await prisma.pendingInventory.count({
     *   where: {
     *     // ... the filter for the PendingInventories we want to count
     *   }
     * })
    **/
    count<T extends PendingInventoryCountArgs>(
      args?: Subset<T, PendingInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendingInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendingInventoryAggregateArgs>(args: Subset<T, PendingInventoryAggregateArgs>): Prisma.PrismaPromise<GetPendingInventoryAggregateType<T>>

    /**
     * Group by PendingInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingInventoryGroupByArgs} args - Group by arguments.
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
      T extends PendingInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendingInventoryGroupByArgs['orderBy'] }
        : { orderBy?: PendingInventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PendingInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendingInventory model
   */
  readonly fields: PendingInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendingInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendingInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operation<T extends OperationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperationDefaultArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    rack<T extends RackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RackDefaultArgs<ExtArgs>>): Prisma__RackClient<$Result.GetResult<Prisma.$RackPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PendingInventory model
   */ 
  interface PendingInventoryFieldRefs {
    readonly id: FieldRef<"PendingInventory", 'String'>
    readonly quantity: FieldRef<"PendingInventory", 'Int'>
    readonly productId: FieldRef<"PendingInventory", 'String'>
    readonly rackId: FieldRef<"PendingInventory", 'String'>
    readonly operationId: FieldRef<"PendingInventory", 'String'>
    readonly createdAt: FieldRef<"PendingInventory", 'DateTime'>
    readonly updatedAt: FieldRef<"PendingInventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PendingInventory findUnique
   */
  export type PendingInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
    /**
     * Filter, which PendingInventory to fetch.
     */
    where: PendingInventoryWhereUniqueInput
  }

  /**
   * PendingInventory findUniqueOrThrow
   */
  export type PendingInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
    /**
     * Filter, which PendingInventory to fetch.
     */
    where: PendingInventoryWhereUniqueInput
  }

  /**
   * PendingInventory findFirst
   */
  export type PendingInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
    /**
     * Filter, which PendingInventory to fetch.
     */
    where?: PendingInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingInventories to fetch.
     */
    orderBy?: PendingInventoryOrderByWithRelationInput | PendingInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingInventories.
     */
    cursor?: PendingInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingInventories.
     */
    distinct?: PendingInventoryScalarFieldEnum | PendingInventoryScalarFieldEnum[]
  }

  /**
   * PendingInventory findFirstOrThrow
   */
  export type PendingInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
    /**
     * Filter, which PendingInventory to fetch.
     */
    where?: PendingInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingInventories to fetch.
     */
    orderBy?: PendingInventoryOrderByWithRelationInput | PendingInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingInventories.
     */
    cursor?: PendingInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingInventories.
     */
    distinct?: PendingInventoryScalarFieldEnum | PendingInventoryScalarFieldEnum[]
  }

  /**
   * PendingInventory findMany
   */
  export type PendingInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
    /**
     * Filter, which PendingInventories to fetch.
     */
    where?: PendingInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingInventories to fetch.
     */
    orderBy?: PendingInventoryOrderByWithRelationInput | PendingInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendingInventories.
     */
    cursor?: PendingInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingInventories.
     */
    skip?: number
    distinct?: PendingInventoryScalarFieldEnum | PendingInventoryScalarFieldEnum[]
  }

  /**
   * PendingInventory create
   */
  export type PendingInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PendingInventory.
     */
    data: XOR<PendingInventoryCreateInput, PendingInventoryUncheckedCreateInput>
  }

  /**
   * PendingInventory createMany
   */
  export type PendingInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendingInventories.
     */
    data: PendingInventoryCreateManyInput | PendingInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendingInventory createManyAndReturn
   */
  export type PendingInventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PendingInventories.
     */
    data: PendingInventoryCreateManyInput | PendingInventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PendingInventory update
   */
  export type PendingInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PendingInventory.
     */
    data: XOR<PendingInventoryUpdateInput, PendingInventoryUncheckedUpdateInput>
    /**
     * Choose, which PendingInventory to update.
     */
    where: PendingInventoryWhereUniqueInput
  }

  /**
   * PendingInventory updateMany
   */
  export type PendingInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendingInventories.
     */
    data: XOR<PendingInventoryUpdateManyMutationInput, PendingInventoryUncheckedUpdateManyInput>
    /**
     * Filter which PendingInventories to update
     */
    where?: PendingInventoryWhereInput
  }

  /**
   * PendingInventory upsert
   */
  export type PendingInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PendingInventory to update in case it exists.
     */
    where: PendingInventoryWhereUniqueInput
    /**
     * In case the PendingInventory found by the `where` argument doesn't exist, create a new PendingInventory with this data.
     */
    create: XOR<PendingInventoryCreateInput, PendingInventoryUncheckedCreateInput>
    /**
     * In case the PendingInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendingInventoryUpdateInput, PendingInventoryUncheckedUpdateInput>
  }

  /**
   * PendingInventory delete
   */
  export type PendingInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
    /**
     * Filter which PendingInventory to delete.
     */
    where: PendingInventoryWhereUniqueInput
  }

  /**
   * PendingInventory deleteMany
   */
  export type PendingInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingInventories to delete
     */
    where?: PendingInventoryWhereInput
  }

  /**
   * PendingInventory without action
   */
  export type PendingInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingInventory
     */
    select?: PendingInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInventoryInclude<ExtArgs> | null
  }


  /**
   * Model TransactionHistory
   */

  export type AggregateTransactionHistory = {
    _count: TransactionHistoryCountAggregateOutputType | null
    _min: TransactionHistoryMinAggregateOutputType | null
    _max: TransactionHistoryMaxAggregateOutputType | null
  }

  export type TransactionHistoryMinAggregateOutputType = {
    id: string | null
    operationId: string | null
    userId: string | null
    action: string | null
    timestamp: Date | null
    notes: string | null
  }

  export type TransactionHistoryMaxAggregateOutputType = {
    id: string | null
    operationId: string | null
    userId: string | null
    action: string | null
    timestamp: Date | null
    notes: string | null
  }

  export type TransactionHistoryCountAggregateOutputType = {
    id: number
    operationId: number
    userId: number
    action: number
    timestamp: number
    notes: number
    _all: number
  }


  export type TransactionHistoryMinAggregateInputType = {
    id?: true
    operationId?: true
    userId?: true
    action?: true
    timestamp?: true
    notes?: true
  }

  export type TransactionHistoryMaxAggregateInputType = {
    id?: true
    operationId?: true
    userId?: true
    action?: true
    timestamp?: true
    notes?: true
  }

  export type TransactionHistoryCountAggregateInputType = {
    id?: true
    operationId?: true
    userId?: true
    action?: true
    timestamp?: true
    notes?: true
    _all?: true
  }

  export type TransactionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionHistory to aggregate.
     */
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     */
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionHistories
    **/
    _count?: true | TransactionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionHistoryMaxAggregateInputType
  }

  export type GetTransactionHistoryAggregateType<T extends TransactionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionHistory[P]>
      : GetScalarType<T[P], AggregateTransactionHistory[P]>
  }




  export type TransactionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionHistoryWhereInput
    orderBy?: TransactionHistoryOrderByWithAggregationInput | TransactionHistoryOrderByWithAggregationInput[]
    by: TransactionHistoryScalarFieldEnum[] | TransactionHistoryScalarFieldEnum
    having?: TransactionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionHistoryCountAggregateInputType | true
    _min?: TransactionHistoryMinAggregateInputType
    _max?: TransactionHistoryMaxAggregateInputType
  }

  export type TransactionHistoryGroupByOutputType = {
    id: string
    operationId: string
    userId: string
    action: string
    timestamp: Date
    notes: string | null
    _count: TransactionHistoryCountAggregateOutputType | null
    _min: TransactionHistoryMinAggregateOutputType | null
    _max: TransactionHistoryMaxAggregateOutputType | null
  }

  type GetTransactionHistoryGroupByPayload<T extends TransactionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TransactionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operationId?: boolean
    userId?: boolean
    action?: boolean
    timestamp?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    operation?: boolean | OperationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionHistory"]>

  export type TransactionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operationId?: boolean
    userId?: boolean
    action?: boolean
    timestamp?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    operation?: boolean | OperationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionHistory"]>

  export type TransactionHistorySelectScalar = {
    id?: boolean
    operationId?: boolean
    userId?: boolean
    action?: boolean
    timestamp?: boolean
    notes?: boolean
  }

  export type TransactionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    operation?: boolean | OperationDefaultArgs<ExtArgs>
  }
  export type TransactionHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    operation?: boolean | OperationDefaultArgs<ExtArgs>
  }

  export type $TransactionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      operation: Prisma.$OperationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      operationId: string
      userId: string
      action: string
      timestamp: Date
      notes: string | null
    }, ExtArgs["result"]["transactionHistory"]>
    composites: {}
  }

  type TransactionHistoryGetPayload<S extends boolean | null | undefined | TransactionHistoryDefaultArgs> = $Result.GetResult<Prisma.$TransactionHistoryPayload, S>

  type TransactionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionHistoryCountAggregateInputType | true
    }

  export interface TransactionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionHistory'], meta: { name: 'TransactionHistory' } }
    /**
     * Find zero or one TransactionHistory that matches the filter.
     * @param {TransactionHistoryFindUniqueArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionHistoryFindUniqueArgs>(args: SelectSubset<T, TransactionHistoryFindUniqueArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TransactionHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionHistoryFindUniqueOrThrowArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TransactionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryFindFirstArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionHistoryFindFirstArgs>(args?: SelectSubset<T, TransactionHistoryFindFirstArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TransactionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryFindFirstOrThrowArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TransactionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionHistories
     * const transactionHistories = await prisma.transactionHistory.findMany()
     * 
     * // Get first 10 TransactionHistories
     * const transactionHistories = await prisma.transactionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionHistoryWithIdOnly = await prisma.transactionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionHistoryFindManyArgs>(args?: SelectSubset<T, TransactionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TransactionHistory.
     * @param {TransactionHistoryCreateArgs} args - Arguments to create a TransactionHistory.
     * @example
     * // Create one TransactionHistory
     * const TransactionHistory = await prisma.transactionHistory.create({
     *   data: {
     *     // ... data to create a TransactionHistory
     *   }
     * })
     * 
     */
    create<T extends TransactionHistoryCreateArgs>(args: SelectSubset<T, TransactionHistoryCreateArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TransactionHistories.
     * @param {TransactionHistoryCreateManyArgs} args - Arguments to create many TransactionHistories.
     * @example
     * // Create many TransactionHistories
     * const transactionHistory = await prisma.transactionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionHistoryCreateManyArgs>(args?: SelectSubset<T, TransactionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionHistories and returns the data saved in the database.
     * @param {TransactionHistoryCreateManyAndReturnArgs} args - Arguments to create many TransactionHistories.
     * @example
     * // Create many TransactionHistories
     * const transactionHistory = await prisma.transactionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionHistories and only return the `id`
     * const transactionHistoryWithIdOnly = await prisma.transactionHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TransactionHistory.
     * @param {TransactionHistoryDeleteArgs} args - Arguments to delete one TransactionHistory.
     * @example
     * // Delete one TransactionHistory
     * const TransactionHistory = await prisma.transactionHistory.delete({
     *   where: {
     *     // ... filter to delete one TransactionHistory
     *   }
     * })
     * 
     */
    delete<T extends TransactionHistoryDeleteArgs>(args: SelectSubset<T, TransactionHistoryDeleteArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TransactionHistory.
     * @param {TransactionHistoryUpdateArgs} args - Arguments to update one TransactionHistory.
     * @example
     * // Update one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionHistoryUpdateArgs>(args: SelectSubset<T, TransactionHistoryUpdateArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TransactionHistories.
     * @param {TransactionHistoryDeleteManyArgs} args - Arguments to filter TransactionHistories to delete.
     * @example
     * // Delete a few TransactionHistories
     * const { count } = await prisma.transactionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionHistoryDeleteManyArgs>(args?: SelectSubset<T, TransactionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionHistories
     * const transactionHistory = await prisma.transactionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionHistoryUpdateManyArgs>(args: SelectSubset<T, TransactionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TransactionHistory.
     * @param {TransactionHistoryUpsertArgs} args - Arguments to update or create a TransactionHistory.
     * @example
     * // Update or create a TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.upsert({
     *   create: {
     *     // ... data to create a TransactionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionHistory we want to update
     *   }
     * })
     */
    upsert<T extends TransactionHistoryUpsertArgs>(args: SelectSubset<T, TransactionHistoryUpsertArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TransactionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryCountArgs} args - Arguments to filter TransactionHistories to count.
     * @example
     * // Count the number of TransactionHistories
     * const count = await prisma.transactionHistory.count({
     *   where: {
     *     // ... the filter for the TransactionHistories we want to count
     *   }
     * })
    **/
    count<T extends TransactionHistoryCountArgs>(
      args?: Subset<T, TransactionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionHistoryAggregateArgs>(args: Subset<T, TransactionHistoryAggregateArgs>): Prisma.PrismaPromise<GetTransactionHistoryAggregateType<T>>

    /**
     * Group by TransactionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryGroupByArgs} args - Group by arguments.
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
      T extends TransactionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TransactionHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionHistory model
   */
  readonly fields: TransactionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    operation<T extends OperationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperationDefaultArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TransactionHistory model
   */ 
  interface TransactionHistoryFieldRefs {
    readonly id: FieldRef<"TransactionHistory", 'String'>
    readonly operationId: FieldRef<"TransactionHistory", 'String'>
    readonly userId: FieldRef<"TransactionHistory", 'String'>
    readonly action: FieldRef<"TransactionHistory", 'String'>
    readonly timestamp: FieldRef<"TransactionHistory", 'DateTime'>
    readonly notes: FieldRef<"TransactionHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TransactionHistory findUnique
   */
  export type TransactionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TransactionHistory to fetch.
     */
    where: TransactionHistoryWhereUniqueInput
  }

  /**
   * TransactionHistory findUniqueOrThrow
   */
  export type TransactionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TransactionHistory to fetch.
     */
    where: TransactionHistoryWhereUniqueInput
  }

  /**
   * TransactionHistory findFirst
   */
  export type TransactionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TransactionHistory to fetch.
     */
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     */
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionHistories.
     */
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionHistories.
     */
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * TransactionHistory findFirstOrThrow
   */
  export type TransactionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TransactionHistory to fetch.
     */
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     */
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionHistories.
     */
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionHistories.
     */
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * TransactionHistory findMany
   */
  export type TransactionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TransactionHistories to fetch.
     */
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     */
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionHistories.
     */
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     */
    skip?: number
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * TransactionHistory create
   */
  export type TransactionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionHistory.
     */
    data: XOR<TransactionHistoryCreateInput, TransactionHistoryUncheckedCreateInput>
  }

  /**
   * TransactionHistory createMany
   */
  export type TransactionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionHistories.
     */
    data: TransactionHistoryCreateManyInput | TransactionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionHistory createManyAndReturn
   */
  export type TransactionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TransactionHistories.
     */
    data: TransactionHistoryCreateManyInput | TransactionHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionHistory update
   */
  export type TransactionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionHistory.
     */
    data: XOR<TransactionHistoryUpdateInput, TransactionHistoryUncheckedUpdateInput>
    /**
     * Choose, which TransactionHistory to update.
     */
    where: TransactionHistoryWhereUniqueInput
  }

  /**
   * TransactionHistory updateMany
   */
  export type TransactionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionHistories.
     */
    data: XOR<TransactionHistoryUpdateManyMutationInput, TransactionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TransactionHistories to update
     */
    where?: TransactionHistoryWhereInput
  }

  /**
   * TransactionHistory upsert
   */
  export type TransactionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionHistory to update in case it exists.
     */
    where: TransactionHistoryWhereUniqueInput
    /**
     * In case the TransactionHistory found by the `where` argument doesn't exist, create a new TransactionHistory with this data.
     */
    create: XOR<TransactionHistoryCreateInput, TransactionHistoryUncheckedCreateInput>
    /**
     * In case the TransactionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionHistoryUpdateInput, TransactionHistoryUncheckedUpdateInput>
  }

  /**
   * TransactionHistory delete
   */
  export type TransactionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * Filter which TransactionHistory to delete.
     */
    where: TransactionHistoryWhereUniqueInput
  }

  /**
   * TransactionHistory deleteMany
   */
  export type TransactionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionHistories to delete
     */
    where?: TransactionHistoryWhereInput
  }

  /**
   * TransactionHistory without action
   */
  export type TransactionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
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


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gstin: 'gstin',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    designation: 'designation',
    mobileNumber: 'mobileNumber',
    isAdmin: 'isAdmin',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    sku: 'sku',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    quantity: 'quantity',
    productId: 'productId',
    rackId: 'rackId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const RackScalarFieldEnum: {
    id: 'id',
    number: 'number',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RackScalarFieldEnum = (typeof RackScalarFieldEnum)[keyof typeof RackScalarFieldEnum]


  export const OperationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    quantity: 'quantity',
    productId: 'productId',
    userId: 'userId',
    rackId: 'rackId',
    isApproved: 'isApproved',
    isCancelled: 'isCancelled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OperationScalarFieldEnum = (typeof OperationScalarFieldEnum)[keyof typeof OperationScalarFieldEnum]


  export const PendingInventoryScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    productId: 'productId',
    rackId: 'rackId',
    operationId: 'operationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PendingInventoryScalarFieldEnum = (typeof PendingInventoryScalarFieldEnum)[keyof typeof PendingInventoryScalarFieldEnum]


  export const TransactionHistoryScalarFieldEnum: {
    id: 'id',
    operationId: 'operationId',
    userId: 'userId',
    action: 'action',
    timestamp: 'timestamp',
    notes: 'notes'
  };

  export type TransactionHistoryScalarFieldEnum = (typeof TransactionHistoryScalarFieldEnum)[keyof typeof TransactionHistoryScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    gstin?: StringFilter<"Organization"> | string
    address?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gstin?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    gstin?: StringFilter<"Organization"> | string
    address?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gstin?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    gstin?: StringWithAggregatesFilter<"Organization"> | string
    address?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    designation?: StringFilter<"User"> | string
    mobileNumber?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    organizationId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    operations?: OperationListRelationFilter
    transactionHistories?: TransactionHistoryListRelationFilter
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    mobileNumber?: SortOrder
    isAdmin?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    operations?: OperationOrderByRelationAggregateInput
    transactionHistories?: TransactionHistoryOrderByRelationAggregateInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    designation?: StringFilter<"User"> | string
    mobileNumber?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    organizationId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    operations?: OperationListRelationFilter
    transactionHistories?: TransactionHistoryListRelationFilter
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    mobileNumber?: SortOrder
    isAdmin?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    designation?: StringWithAggregatesFilter<"User"> | string
    mobileNumber?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    organizationId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    sku?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    inventory?: InventoryListRelationFilter
    operations?: OperationListRelationFilter
    pendingInventory?: PendingInventoryListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventory?: InventoryOrderByRelationAggregateInput
    operations?: OperationOrderByRelationAggregateInput
    pendingInventory?: PendingInventoryOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    sku?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    inventory?: InventoryListRelationFilter
    operations?: OperationListRelationFilter
    pendingInventory?: PendingInventoryListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: FloatWithAggregatesFilter<"Product"> | number
    sku?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    quantity?: IntFilter<"Inventory"> | number
    productId?: StringFilter<"Inventory"> | string
    rackId?: StringFilter<"Inventory"> | string
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    rack?: XOR<RackRelationFilter, RackWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type InventoryOrderByWithRelationInput = {
    quantity?: SortOrder
    productId?: SortOrder
    rackId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rack?: RackOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    productId_rackId?: InventoryProductIdRackIdCompoundUniqueInput
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    quantity?: IntFilter<"Inventory"> | number
    productId?: StringFilter<"Inventory"> | string
    rackId?: StringFilter<"Inventory"> | string
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    rack?: XOR<RackRelationFilter, RackWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "productId_rackId">

  export type InventoryOrderByWithAggregationInput = {
    quantity?: SortOrder
    productId?: SortOrder
    rackId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    quantity?: IntWithAggregatesFilter<"Inventory"> | number
    productId?: StringWithAggregatesFilter<"Inventory"> | string
    rackId?: StringWithAggregatesFilter<"Inventory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
  }

  export type RackWhereInput = {
    AND?: RackWhereInput | RackWhereInput[]
    OR?: RackWhereInput[]
    NOT?: RackWhereInput | RackWhereInput[]
    id?: StringFilter<"Rack"> | string
    number?: StringFilter<"Rack"> | string
    description?: StringNullableFilter<"Rack"> | string | null
    createdAt?: DateTimeFilter<"Rack"> | Date | string
    updatedAt?: DateTimeFilter<"Rack"> | Date | string
    inventory?: InventoryListRelationFilter
    operations?: OperationListRelationFilter
    pendingInventory?: PendingInventoryListRelationFilter
  }

  export type RackOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventory?: InventoryOrderByRelationAggregateInput
    operations?: OperationOrderByRelationAggregateInput
    pendingInventory?: PendingInventoryOrderByRelationAggregateInput
  }

  export type RackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RackWhereInput | RackWhereInput[]
    OR?: RackWhereInput[]
    NOT?: RackWhereInput | RackWhereInput[]
    number?: StringFilter<"Rack"> | string
    description?: StringNullableFilter<"Rack"> | string | null
    createdAt?: DateTimeFilter<"Rack"> | Date | string
    updatedAt?: DateTimeFilter<"Rack"> | Date | string
    inventory?: InventoryListRelationFilter
    operations?: OperationListRelationFilter
    pendingInventory?: PendingInventoryListRelationFilter
  }, "id">

  export type RackOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RackCountOrderByAggregateInput
    _max?: RackMaxOrderByAggregateInput
    _min?: RackMinOrderByAggregateInput
  }

  export type RackScalarWhereWithAggregatesInput = {
    AND?: RackScalarWhereWithAggregatesInput | RackScalarWhereWithAggregatesInput[]
    OR?: RackScalarWhereWithAggregatesInput[]
    NOT?: RackScalarWhereWithAggregatesInput | RackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rack"> | string
    number?: StringWithAggregatesFilter<"Rack"> | string
    description?: StringNullableWithAggregatesFilter<"Rack"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Rack"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rack"> | Date | string
  }

  export type OperationWhereInput = {
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    id?: StringFilter<"Operation"> | string
    type?: StringFilter<"Operation"> | string
    quantity?: IntFilter<"Operation"> | number
    productId?: StringFilter<"Operation"> | string
    userId?: StringFilter<"Operation"> | string
    rackId?: StringFilter<"Operation"> | string
    isApproved?: BoolFilter<"Operation"> | boolean
    isCancelled?: BoolFilter<"Operation"> | boolean
    createdAt?: DateTimeFilter<"Operation"> | Date | string
    updatedAt?: DateTimeFilter<"Operation"> | Date | string
    rack?: XOR<RackRelationFilter, RackWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    pendingInventory?: PendingInventoryListRelationFilter
    transactionHistories?: TransactionHistoryListRelationFilter
  }

  export type OperationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    rackId?: SortOrder
    isApproved?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rack?: RackOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    pendingInventory?: PendingInventoryOrderByRelationAggregateInput
    transactionHistories?: TransactionHistoryOrderByRelationAggregateInput
  }

  export type OperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    type?: StringFilter<"Operation"> | string
    quantity?: IntFilter<"Operation"> | number
    productId?: StringFilter<"Operation"> | string
    userId?: StringFilter<"Operation"> | string
    rackId?: StringFilter<"Operation"> | string
    isApproved?: BoolFilter<"Operation"> | boolean
    isCancelled?: BoolFilter<"Operation"> | boolean
    createdAt?: DateTimeFilter<"Operation"> | Date | string
    updatedAt?: DateTimeFilter<"Operation"> | Date | string
    rack?: XOR<RackRelationFilter, RackWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    pendingInventory?: PendingInventoryListRelationFilter
    transactionHistories?: TransactionHistoryListRelationFilter
  }, "id">

  export type OperationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    rackId?: SortOrder
    isApproved?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OperationCountOrderByAggregateInput
    _avg?: OperationAvgOrderByAggregateInput
    _max?: OperationMaxOrderByAggregateInput
    _min?: OperationMinOrderByAggregateInput
    _sum?: OperationSumOrderByAggregateInput
  }

  export type OperationScalarWhereWithAggregatesInput = {
    AND?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    OR?: OperationScalarWhereWithAggregatesInput[]
    NOT?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Operation"> | string
    type?: StringWithAggregatesFilter<"Operation"> | string
    quantity?: IntWithAggregatesFilter<"Operation"> | number
    productId?: StringWithAggregatesFilter<"Operation"> | string
    userId?: StringWithAggregatesFilter<"Operation"> | string
    rackId?: StringWithAggregatesFilter<"Operation"> | string
    isApproved?: BoolWithAggregatesFilter<"Operation"> | boolean
    isCancelled?: BoolWithAggregatesFilter<"Operation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Operation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Operation"> | Date | string
  }

  export type PendingInventoryWhereInput = {
    AND?: PendingInventoryWhereInput | PendingInventoryWhereInput[]
    OR?: PendingInventoryWhereInput[]
    NOT?: PendingInventoryWhereInput | PendingInventoryWhereInput[]
    id?: StringFilter<"PendingInventory"> | string
    quantity?: IntFilter<"PendingInventory"> | number
    productId?: StringFilter<"PendingInventory"> | string
    rackId?: StringFilter<"PendingInventory"> | string
    operationId?: StringFilter<"PendingInventory"> | string
    createdAt?: DateTimeFilter<"PendingInventory"> | Date | string
    updatedAt?: DateTimeFilter<"PendingInventory"> | Date | string
    operation?: XOR<OperationRelationFilter, OperationWhereInput>
    rack?: XOR<RackRelationFilter, RackWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type PendingInventoryOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    rackId?: SortOrder
    operationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    operation?: OperationOrderByWithRelationInput
    rack?: RackOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type PendingInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PendingInventoryWhereInput | PendingInventoryWhereInput[]
    OR?: PendingInventoryWhereInput[]
    NOT?: PendingInventoryWhereInput | PendingInventoryWhereInput[]
    quantity?: IntFilter<"PendingInventory"> | number
    productId?: StringFilter<"PendingInventory"> | string
    rackId?: StringFilter<"PendingInventory"> | string
    operationId?: StringFilter<"PendingInventory"> | string
    createdAt?: DateTimeFilter<"PendingInventory"> | Date | string
    updatedAt?: DateTimeFilter<"PendingInventory"> | Date | string
    operation?: XOR<OperationRelationFilter, OperationWhereInput>
    rack?: XOR<RackRelationFilter, RackWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type PendingInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    rackId?: SortOrder
    operationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PendingInventoryCountOrderByAggregateInput
    _avg?: PendingInventoryAvgOrderByAggregateInput
    _max?: PendingInventoryMaxOrderByAggregateInput
    _min?: PendingInventoryMinOrderByAggregateInput
    _sum?: PendingInventorySumOrderByAggregateInput
  }

  export type PendingInventoryScalarWhereWithAggregatesInput = {
    AND?: PendingInventoryScalarWhereWithAggregatesInput | PendingInventoryScalarWhereWithAggregatesInput[]
    OR?: PendingInventoryScalarWhereWithAggregatesInput[]
    NOT?: PendingInventoryScalarWhereWithAggregatesInput | PendingInventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PendingInventory"> | string
    quantity?: IntWithAggregatesFilter<"PendingInventory"> | number
    productId?: StringWithAggregatesFilter<"PendingInventory"> | string
    rackId?: StringWithAggregatesFilter<"PendingInventory"> | string
    operationId?: StringWithAggregatesFilter<"PendingInventory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PendingInventory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PendingInventory"> | Date | string
  }

  export type TransactionHistoryWhereInput = {
    AND?: TransactionHistoryWhereInput | TransactionHistoryWhereInput[]
    OR?: TransactionHistoryWhereInput[]
    NOT?: TransactionHistoryWhereInput | TransactionHistoryWhereInput[]
    id?: StringFilter<"TransactionHistory"> | string
    operationId?: StringFilter<"TransactionHistory"> | string
    userId?: StringFilter<"TransactionHistory"> | string
    action?: StringFilter<"TransactionHistory"> | string
    timestamp?: DateTimeFilter<"TransactionHistory"> | Date | string
    notes?: StringNullableFilter<"TransactionHistory"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    operation?: XOR<OperationRelationFilter, OperationWhereInput>
  }

  export type TransactionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    operationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    notes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    operation?: OperationOrderByWithRelationInput
  }

  export type TransactionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionHistoryWhereInput | TransactionHistoryWhereInput[]
    OR?: TransactionHistoryWhereInput[]
    NOT?: TransactionHistoryWhereInput | TransactionHistoryWhereInput[]
    operationId?: StringFilter<"TransactionHistory"> | string
    userId?: StringFilter<"TransactionHistory"> | string
    action?: StringFilter<"TransactionHistory"> | string
    timestamp?: DateTimeFilter<"TransactionHistory"> | Date | string
    notes?: StringNullableFilter<"TransactionHistory"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    operation?: XOR<OperationRelationFilter, OperationWhereInput>
  }, "id">

  export type TransactionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    operationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: TransactionHistoryCountOrderByAggregateInput
    _max?: TransactionHistoryMaxOrderByAggregateInput
    _min?: TransactionHistoryMinOrderByAggregateInput
  }

  export type TransactionHistoryScalarWhereWithAggregatesInput = {
    AND?: TransactionHistoryScalarWhereWithAggregatesInput | TransactionHistoryScalarWhereWithAggregatesInput[]
    OR?: TransactionHistoryScalarWhereWithAggregatesInput[]
    NOT?: TransactionHistoryScalarWhereWithAggregatesInput | TransactionHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransactionHistory"> | string
    operationId?: StringWithAggregatesFilter<"TransactionHistory"> | string
    userId?: StringWithAggregatesFilter<"TransactionHistory"> | string
    action?: StringWithAggregatesFilter<"TransactionHistory"> | string
    timestamp?: DateTimeWithAggregatesFilter<"TransactionHistory"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"TransactionHistory"> | string | null
  }

  export type OrganizationCreateInput = {
    id: string
    name: string
    gstin: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id: string
    name: string
    gstin: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gstin?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gstin?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id: string
    name: string
    gstin: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gstin?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gstin?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id: string
    username: string
    password: string
    name: string
    designation: string
    mobileNumber: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: OperationCreateNestedManyWithoutUserInput
    transactionHistories?: TransactionHistoryCreateNestedManyWithoutUserInput
    organization: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    username: string
    password: string
    name: string
    designation: string
    mobileNumber: string
    isAdmin?: boolean
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: OperationUncheckedCreateNestedManyWithoutUserInput
    transactionHistories?: TransactionHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUpdateManyWithoutUserNestedInput
    transactionHistories?: TransactionHistoryUpdateManyWithoutUserNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUncheckedUpdateManyWithoutUserNestedInput
    transactionHistories?: TransactionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    username: string
    password: string
    name: string
    designation: string
    mobileNumber: string
    isAdmin?: boolean
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id: string
    name: string
    description?: string | null
    price: number
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryCreateNestedManyWithoutProductInput
    operations?: OperationCreateNestedManyWithoutProductInput
    pendingInventory?: PendingInventoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    price: number
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedManyWithoutProductInput
    operations?: OperationUncheckedCreateNestedManyWithoutProductInput
    pendingInventory?: PendingInventoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateManyWithoutProductNestedInput
    operations?: OperationUpdateManyWithoutProductNestedInput
    pendingInventory?: PendingInventoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateManyWithoutProductNestedInput
    operations?: OperationUncheckedUpdateManyWithoutProductNestedInput
    pendingInventory?: PendingInventoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id: string
    name: string
    description?: string | null
    price: number
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rack: RackCreateNestedOneWithoutInventoryInput
    product: ProductCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    quantity: number
    productId: string
    rackId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rack?: RackUpdateOneRequiredWithoutInventoryNestedInput
    product?: ProductUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyInput = {
    quantity: number
    productId: string
    rackId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RackCreateInput = {
    id: string
    number: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryCreateNestedManyWithoutRackInput
    operations?: OperationCreateNestedManyWithoutRackInput
    pendingInventory?: PendingInventoryCreateNestedManyWithoutRackInput
  }

  export type RackUncheckedCreateInput = {
    id: string
    number: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedManyWithoutRackInput
    operations?: OperationUncheckedCreateNestedManyWithoutRackInput
    pendingInventory?: PendingInventoryUncheckedCreateNestedManyWithoutRackInput
  }

  export type RackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateManyWithoutRackNestedInput
    operations?: OperationUpdateManyWithoutRackNestedInput
    pendingInventory?: PendingInventoryUpdateManyWithoutRackNestedInput
  }

  export type RackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateManyWithoutRackNestedInput
    operations?: OperationUncheckedUpdateManyWithoutRackNestedInput
    pendingInventory?: PendingInventoryUncheckedUpdateManyWithoutRackNestedInput
  }

  export type RackCreateManyInput = {
    id: string
    number: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationCreateInput = {
    id: string
    type: string
    quantity: number
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rack: RackCreateNestedOneWithoutOperationsInput
    user: UserCreateNestedOneWithoutOperationsInput
    product: ProductCreateNestedOneWithoutOperationsInput
    pendingInventory?: PendingInventoryCreateNestedManyWithoutOperationInput
    transactionHistories?: TransactionHistoryCreateNestedManyWithoutOperationInput
  }

  export type OperationUncheckedCreateInput = {
    id: string
    type: string
    quantity: number
    productId: string
    userId: string
    rackId: string
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pendingInventory?: PendingInventoryUncheckedCreateNestedManyWithoutOperationInput
    transactionHistories?: TransactionHistoryUncheckedCreateNestedManyWithoutOperationInput
  }

  export type OperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rack?: RackUpdateOneRequiredWithoutOperationsNestedInput
    user?: UserUpdateOneRequiredWithoutOperationsNestedInput
    product?: ProductUpdateOneRequiredWithoutOperationsNestedInput
    pendingInventory?: PendingInventoryUpdateManyWithoutOperationNestedInput
    transactionHistories?: TransactionHistoryUpdateManyWithoutOperationNestedInput
  }

  export type OperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingInventory?: PendingInventoryUncheckedUpdateManyWithoutOperationNestedInput
    transactionHistories?: TransactionHistoryUncheckedUpdateManyWithoutOperationNestedInput
  }

  export type OperationCreateManyInput = {
    id: string
    type: string
    quantity: number
    productId: string
    userId: string
    rackId: string
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingInventoryCreateInput = {
    id: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    operation: OperationCreateNestedOneWithoutPendingInventoryInput
    rack: RackCreateNestedOneWithoutPendingInventoryInput
    product: ProductCreateNestedOneWithoutPendingInventoryInput
  }

  export type PendingInventoryUncheckedCreateInput = {
    id: string
    quantity: number
    productId: string
    rackId: string
    operationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendingInventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operation?: OperationUpdateOneRequiredWithoutPendingInventoryNestedInput
    rack?: RackUpdateOneRequiredWithoutPendingInventoryNestedInput
    product?: ProductUpdateOneRequiredWithoutPendingInventoryNestedInput
  }

  export type PendingInventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingInventoryCreateManyInput = {
    id: string
    quantity: number
    productId: string
    rackId: string
    operationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendingInventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingInventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionHistoryCreateInput = {
    id?: string
    action: string
    timestamp?: Date | string
    notes?: string | null
    user: UserCreateNestedOneWithoutTransactionHistoriesInput
    operation: OperationCreateNestedOneWithoutTransactionHistoriesInput
  }

  export type TransactionHistoryUncheckedCreateInput = {
    id?: string
    operationId: string
    userId: string
    action: string
    timestamp?: Date | string
    notes?: string | null
  }

  export type TransactionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTransactionHistoriesNestedInput
    operation?: OperationUpdateOneRequiredWithoutTransactionHistoriesNestedInput
  }

  export type TransactionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionHistoryCreateManyInput = {
    id?: string
    operationId: string
    userId: string
    action: string
    timestamp?: Date | string
    notes?: string | null
  }

  export type TransactionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gstin?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gstin?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gstin?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OperationListRelationFilter = {
    every?: OperationWhereInput
    some?: OperationWhereInput
    none?: OperationWhereInput
  }

  export type TransactionHistoryListRelationFilter = {
    every?: TransactionHistoryWhereInput
    some?: TransactionHistoryWhereInput
    none?: TransactionHistoryWhereInput
  }

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OperationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    mobileNumber?: SortOrder
    isAdmin?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    mobileNumber?: SortOrder
    isAdmin?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    mobileNumber?: SortOrder
    isAdmin?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type PendingInventoryListRelationFilter = {
    every?: PendingInventoryWhereInput
    some?: PendingInventoryWhereInput
    none?: PendingInventoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PendingInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type RackRelationFilter = {
    is?: RackWhereInput
    isNot?: RackWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type InventoryProductIdRackIdCompoundUniqueInput = {
    productId: string
    rackId: string
  }

  export type InventoryCountOrderByAggregateInput = {
    quantity?: SortOrder
    productId?: SortOrder
    rackId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    quantity?: SortOrder
    productId?: SortOrder
    rackId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    quantity?: SortOrder
    productId?: SortOrder
    rackId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    quantity?: SortOrder
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

  export type RackCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RackMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RackMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OperationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    rackId?: SortOrder
    isApproved?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type OperationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    rackId?: SortOrder
    isApproved?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    rackId?: SortOrder
    isApproved?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type OperationRelationFilter = {
    is?: OperationWhereInput
    isNot?: OperationWhereInput
  }

  export type PendingInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    rackId?: SortOrder
    operationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendingInventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type PendingInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    rackId?: SortOrder
    operationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendingInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    rackId?: SortOrder
    operationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendingInventorySumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type TransactionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    operationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    notes?: SortOrder
  }

  export type TransactionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    operationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    notes?: SortOrder
  }

  export type TransactionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    operationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    notes?: SortOrder
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OperationCreateNestedManyWithoutUserInput = {
    create?: XOR<OperationCreateWithoutUserInput, OperationUncheckedCreateWithoutUserInput> | OperationCreateWithoutUserInput[] | OperationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutUserInput | OperationCreateOrConnectWithoutUserInput[]
    createMany?: OperationCreateManyUserInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type TransactionHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionHistoryCreateWithoutUserInput, TransactionHistoryUncheckedCreateWithoutUserInput> | TransactionHistoryCreateWithoutUserInput[] | TransactionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutUserInput | TransactionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TransactionHistoryCreateManyUserInputEnvelope
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OperationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OperationCreateWithoutUserInput, OperationUncheckedCreateWithoutUserInput> | OperationCreateWithoutUserInput[] | OperationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutUserInput | OperationCreateOrConnectWithoutUserInput[]
    createMany?: OperationCreateManyUserInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type TransactionHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionHistoryCreateWithoutUserInput, TransactionHistoryUncheckedCreateWithoutUserInput> | TransactionHistoryCreateWithoutUserInput[] | TransactionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutUserInput | TransactionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TransactionHistoryCreateManyUserInputEnvelope
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OperationUpdateManyWithoutUserNestedInput = {
    create?: XOR<OperationCreateWithoutUserInput, OperationUncheckedCreateWithoutUserInput> | OperationCreateWithoutUserInput[] | OperationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutUserInput | OperationCreateOrConnectWithoutUserInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutUserInput | OperationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OperationCreateManyUserInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutUserInput | OperationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutUserInput | OperationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type TransactionHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionHistoryCreateWithoutUserInput, TransactionHistoryUncheckedCreateWithoutUserInput> | TransactionHistoryCreateWithoutUserInput[] | TransactionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutUserInput | TransactionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TransactionHistoryUpsertWithWhereUniqueWithoutUserInput | TransactionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionHistoryCreateManyUserInputEnvelope
    set?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    disconnect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    delete?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    update?: TransactionHistoryUpdateWithWhereUniqueWithoutUserInput | TransactionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionHistoryUpdateManyWithWhereWithoutUserInput | TransactionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionHistoryScalarWhereInput | TransactionHistoryScalarWhereInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OperationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OperationCreateWithoutUserInput, OperationUncheckedCreateWithoutUserInput> | OperationCreateWithoutUserInput[] | OperationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutUserInput | OperationCreateOrConnectWithoutUserInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutUserInput | OperationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OperationCreateManyUserInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutUserInput | OperationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutUserInput | OperationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type TransactionHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionHistoryCreateWithoutUserInput, TransactionHistoryUncheckedCreateWithoutUserInput> | TransactionHistoryCreateWithoutUserInput[] | TransactionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutUserInput | TransactionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TransactionHistoryUpsertWithWhereUniqueWithoutUserInput | TransactionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionHistoryCreateManyUserInputEnvelope
    set?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    disconnect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    delete?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    update?: TransactionHistoryUpdateWithWhereUniqueWithoutUserInput | TransactionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionHistoryUpdateManyWithWhereWithoutUserInput | TransactionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionHistoryScalarWhereInput | TransactionHistoryScalarWhereInput[]
  }

  export type InventoryCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OperationCreateNestedManyWithoutProductInput = {
    create?: XOR<OperationCreateWithoutProductInput, OperationUncheckedCreateWithoutProductInput> | OperationCreateWithoutProductInput[] | OperationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutProductInput | OperationCreateOrConnectWithoutProductInput[]
    createMany?: OperationCreateManyProductInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type PendingInventoryCreateNestedManyWithoutProductInput = {
    create?: XOR<PendingInventoryCreateWithoutProductInput, PendingInventoryUncheckedCreateWithoutProductInput> | PendingInventoryCreateWithoutProductInput[] | PendingInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PendingInventoryCreateOrConnectWithoutProductInput | PendingInventoryCreateOrConnectWithoutProductInput[]
    createMany?: PendingInventoryCreateManyProductInputEnvelope
    connect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OperationUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OperationCreateWithoutProductInput, OperationUncheckedCreateWithoutProductInput> | OperationCreateWithoutProductInput[] | OperationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutProductInput | OperationCreateOrConnectWithoutProductInput[]
    createMany?: OperationCreateManyProductInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type PendingInventoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PendingInventoryCreateWithoutProductInput, PendingInventoryUncheckedCreateWithoutProductInput> | PendingInventoryCreateWithoutProductInput[] | PendingInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PendingInventoryCreateOrConnectWithoutProductInput | PendingInventoryCreateOrConnectWithoutProductInput[]
    createMany?: PendingInventoryCreateManyProductInputEnvelope
    connect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutProductInput | InventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutProductInput | InventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutProductInput | InventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OperationUpdateManyWithoutProductNestedInput = {
    create?: XOR<OperationCreateWithoutProductInput, OperationUncheckedCreateWithoutProductInput> | OperationCreateWithoutProductInput[] | OperationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutProductInput | OperationCreateOrConnectWithoutProductInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutProductInput | OperationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OperationCreateManyProductInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutProductInput | OperationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutProductInput | OperationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type PendingInventoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<PendingInventoryCreateWithoutProductInput, PendingInventoryUncheckedCreateWithoutProductInput> | PendingInventoryCreateWithoutProductInput[] | PendingInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PendingInventoryCreateOrConnectWithoutProductInput | PendingInventoryCreateOrConnectWithoutProductInput[]
    upsert?: PendingInventoryUpsertWithWhereUniqueWithoutProductInput | PendingInventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PendingInventoryCreateManyProductInputEnvelope
    set?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    disconnect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    delete?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    connect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    update?: PendingInventoryUpdateWithWhereUniqueWithoutProductInput | PendingInventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PendingInventoryUpdateManyWithWhereWithoutProductInput | PendingInventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PendingInventoryScalarWhereInput | PendingInventoryScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutProductInput | InventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutProductInput | InventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutProductInput | InventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OperationUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OperationCreateWithoutProductInput, OperationUncheckedCreateWithoutProductInput> | OperationCreateWithoutProductInput[] | OperationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutProductInput | OperationCreateOrConnectWithoutProductInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutProductInput | OperationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OperationCreateManyProductInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutProductInput | OperationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutProductInput | OperationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type PendingInventoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PendingInventoryCreateWithoutProductInput, PendingInventoryUncheckedCreateWithoutProductInput> | PendingInventoryCreateWithoutProductInput[] | PendingInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PendingInventoryCreateOrConnectWithoutProductInput | PendingInventoryCreateOrConnectWithoutProductInput[]
    upsert?: PendingInventoryUpsertWithWhereUniqueWithoutProductInput | PendingInventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PendingInventoryCreateManyProductInputEnvelope
    set?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    disconnect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    delete?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    connect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    update?: PendingInventoryUpdateWithWhereUniqueWithoutProductInput | PendingInventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PendingInventoryUpdateManyWithWhereWithoutProductInput | PendingInventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PendingInventoryScalarWhereInput | PendingInventoryScalarWhereInput[]
  }

  export type RackCreateNestedOneWithoutInventoryInput = {
    create?: XOR<RackCreateWithoutInventoryInput, RackUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: RackCreateOrConnectWithoutInventoryInput
    connect?: RackWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutInventoryInput = {
    create?: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryInput
    connect?: ProductWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RackUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<RackCreateWithoutInventoryInput, RackUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: RackCreateOrConnectWithoutInventoryInput
    upsert?: RackUpsertWithoutInventoryInput
    connect?: RackWhereUniqueInput
    update?: XOR<XOR<RackUpdateToOneWithWhereWithoutInventoryInput, RackUpdateWithoutInventoryInput>, RackUncheckedUpdateWithoutInventoryInput>
  }

  export type ProductUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryInput
    upsert?: ProductUpsertWithoutInventoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInventoryInput, ProductUpdateWithoutInventoryInput>, ProductUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryCreateNestedManyWithoutRackInput = {
    create?: XOR<InventoryCreateWithoutRackInput, InventoryUncheckedCreateWithoutRackInput> | InventoryCreateWithoutRackInput[] | InventoryUncheckedCreateWithoutRackInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutRackInput | InventoryCreateOrConnectWithoutRackInput[]
    createMany?: InventoryCreateManyRackInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OperationCreateNestedManyWithoutRackInput = {
    create?: XOR<OperationCreateWithoutRackInput, OperationUncheckedCreateWithoutRackInput> | OperationCreateWithoutRackInput[] | OperationUncheckedCreateWithoutRackInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutRackInput | OperationCreateOrConnectWithoutRackInput[]
    createMany?: OperationCreateManyRackInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type PendingInventoryCreateNestedManyWithoutRackInput = {
    create?: XOR<PendingInventoryCreateWithoutRackInput, PendingInventoryUncheckedCreateWithoutRackInput> | PendingInventoryCreateWithoutRackInput[] | PendingInventoryUncheckedCreateWithoutRackInput[]
    connectOrCreate?: PendingInventoryCreateOrConnectWithoutRackInput | PendingInventoryCreateOrConnectWithoutRackInput[]
    createMany?: PendingInventoryCreateManyRackInputEnvelope
    connect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutRackInput = {
    create?: XOR<InventoryCreateWithoutRackInput, InventoryUncheckedCreateWithoutRackInput> | InventoryCreateWithoutRackInput[] | InventoryUncheckedCreateWithoutRackInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutRackInput | InventoryCreateOrConnectWithoutRackInput[]
    createMany?: InventoryCreateManyRackInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OperationUncheckedCreateNestedManyWithoutRackInput = {
    create?: XOR<OperationCreateWithoutRackInput, OperationUncheckedCreateWithoutRackInput> | OperationCreateWithoutRackInput[] | OperationUncheckedCreateWithoutRackInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutRackInput | OperationCreateOrConnectWithoutRackInput[]
    createMany?: OperationCreateManyRackInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type PendingInventoryUncheckedCreateNestedManyWithoutRackInput = {
    create?: XOR<PendingInventoryCreateWithoutRackInput, PendingInventoryUncheckedCreateWithoutRackInput> | PendingInventoryCreateWithoutRackInput[] | PendingInventoryUncheckedCreateWithoutRackInput[]
    connectOrCreate?: PendingInventoryCreateOrConnectWithoutRackInput | PendingInventoryCreateOrConnectWithoutRackInput[]
    createMany?: PendingInventoryCreateManyRackInputEnvelope
    connect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
  }

  export type InventoryUpdateManyWithoutRackNestedInput = {
    create?: XOR<InventoryCreateWithoutRackInput, InventoryUncheckedCreateWithoutRackInput> | InventoryCreateWithoutRackInput[] | InventoryUncheckedCreateWithoutRackInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutRackInput | InventoryCreateOrConnectWithoutRackInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutRackInput | InventoryUpsertWithWhereUniqueWithoutRackInput[]
    createMany?: InventoryCreateManyRackInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutRackInput | InventoryUpdateWithWhereUniqueWithoutRackInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutRackInput | InventoryUpdateManyWithWhereWithoutRackInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OperationUpdateManyWithoutRackNestedInput = {
    create?: XOR<OperationCreateWithoutRackInput, OperationUncheckedCreateWithoutRackInput> | OperationCreateWithoutRackInput[] | OperationUncheckedCreateWithoutRackInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutRackInput | OperationCreateOrConnectWithoutRackInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutRackInput | OperationUpsertWithWhereUniqueWithoutRackInput[]
    createMany?: OperationCreateManyRackInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutRackInput | OperationUpdateWithWhereUniqueWithoutRackInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutRackInput | OperationUpdateManyWithWhereWithoutRackInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type PendingInventoryUpdateManyWithoutRackNestedInput = {
    create?: XOR<PendingInventoryCreateWithoutRackInput, PendingInventoryUncheckedCreateWithoutRackInput> | PendingInventoryCreateWithoutRackInput[] | PendingInventoryUncheckedCreateWithoutRackInput[]
    connectOrCreate?: PendingInventoryCreateOrConnectWithoutRackInput | PendingInventoryCreateOrConnectWithoutRackInput[]
    upsert?: PendingInventoryUpsertWithWhereUniqueWithoutRackInput | PendingInventoryUpsertWithWhereUniqueWithoutRackInput[]
    createMany?: PendingInventoryCreateManyRackInputEnvelope
    set?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    disconnect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    delete?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    connect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    update?: PendingInventoryUpdateWithWhereUniqueWithoutRackInput | PendingInventoryUpdateWithWhereUniqueWithoutRackInput[]
    updateMany?: PendingInventoryUpdateManyWithWhereWithoutRackInput | PendingInventoryUpdateManyWithWhereWithoutRackInput[]
    deleteMany?: PendingInventoryScalarWhereInput | PendingInventoryScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutRackNestedInput = {
    create?: XOR<InventoryCreateWithoutRackInput, InventoryUncheckedCreateWithoutRackInput> | InventoryCreateWithoutRackInput[] | InventoryUncheckedCreateWithoutRackInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutRackInput | InventoryCreateOrConnectWithoutRackInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutRackInput | InventoryUpsertWithWhereUniqueWithoutRackInput[]
    createMany?: InventoryCreateManyRackInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutRackInput | InventoryUpdateWithWhereUniqueWithoutRackInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutRackInput | InventoryUpdateManyWithWhereWithoutRackInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OperationUncheckedUpdateManyWithoutRackNestedInput = {
    create?: XOR<OperationCreateWithoutRackInput, OperationUncheckedCreateWithoutRackInput> | OperationCreateWithoutRackInput[] | OperationUncheckedCreateWithoutRackInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutRackInput | OperationCreateOrConnectWithoutRackInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutRackInput | OperationUpsertWithWhereUniqueWithoutRackInput[]
    createMany?: OperationCreateManyRackInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutRackInput | OperationUpdateWithWhereUniqueWithoutRackInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutRackInput | OperationUpdateManyWithWhereWithoutRackInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type PendingInventoryUncheckedUpdateManyWithoutRackNestedInput = {
    create?: XOR<PendingInventoryCreateWithoutRackInput, PendingInventoryUncheckedCreateWithoutRackInput> | PendingInventoryCreateWithoutRackInput[] | PendingInventoryUncheckedCreateWithoutRackInput[]
    connectOrCreate?: PendingInventoryCreateOrConnectWithoutRackInput | PendingInventoryCreateOrConnectWithoutRackInput[]
    upsert?: PendingInventoryUpsertWithWhereUniqueWithoutRackInput | PendingInventoryUpsertWithWhereUniqueWithoutRackInput[]
    createMany?: PendingInventoryCreateManyRackInputEnvelope
    set?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    disconnect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    delete?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    connect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    update?: PendingInventoryUpdateWithWhereUniqueWithoutRackInput | PendingInventoryUpdateWithWhereUniqueWithoutRackInput[]
    updateMany?: PendingInventoryUpdateManyWithWhereWithoutRackInput | PendingInventoryUpdateManyWithWhereWithoutRackInput[]
    deleteMany?: PendingInventoryScalarWhereInput | PendingInventoryScalarWhereInput[]
  }

  export type RackCreateNestedOneWithoutOperationsInput = {
    create?: XOR<RackCreateWithoutOperationsInput, RackUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: RackCreateOrConnectWithoutOperationsInput
    connect?: RackWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOperationsInput = {
    create?: XOR<UserCreateWithoutOperationsInput, UserUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOperationsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOperationsInput = {
    create?: XOR<ProductCreateWithoutOperationsInput, ProductUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOperationsInput
    connect?: ProductWhereUniqueInput
  }

  export type PendingInventoryCreateNestedManyWithoutOperationInput = {
    create?: XOR<PendingInventoryCreateWithoutOperationInput, PendingInventoryUncheckedCreateWithoutOperationInput> | PendingInventoryCreateWithoutOperationInput[] | PendingInventoryUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: PendingInventoryCreateOrConnectWithoutOperationInput | PendingInventoryCreateOrConnectWithoutOperationInput[]
    createMany?: PendingInventoryCreateManyOperationInputEnvelope
    connect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
  }

  export type TransactionHistoryCreateNestedManyWithoutOperationInput = {
    create?: XOR<TransactionHistoryCreateWithoutOperationInput, TransactionHistoryUncheckedCreateWithoutOperationInput> | TransactionHistoryCreateWithoutOperationInput[] | TransactionHistoryUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutOperationInput | TransactionHistoryCreateOrConnectWithoutOperationInput[]
    createMany?: TransactionHistoryCreateManyOperationInputEnvelope
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
  }

  export type PendingInventoryUncheckedCreateNestedManyWithoutOperationInput = {
    create?: XOR<PendingInventoryCreateWithoutOperationInput, PendingInventoryUncheckedCreateWithoutOperationInput> | PendingInventoryCreateWithoutOperationInput[] | PendingInventoryUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: PendingInventoryCreateOrConnectWithoutOperationInput | PendingInventoryCreateOrConnectWithoutOperationInput[]
    createMany?: PendingInventoryCreateManyOperationInputEnvelope
    connect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
  }

  export type TransactionHistoryUncheckedCreateNestedManyWithoutOperationInput = {
    create?: XOR<TransactionHistoryCreateWithoutOperationInput, TransactionHistoryUncheckedCreateWithoutOperationInput> | TransactionHistoryCreateWithoutOperationInput[] | TransactionHistoryUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutOperationInput | TransactionHistoryCreateOrConnectWithoutOperationInput[]
    createMany?: TransactionHistoryCreateManyOperationInputEnvelope
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
  }

  export type RackUpdateOneRequiredWithoutOperationsNestedInput = {
    create?: XOR<RackCreateWithoutOperationsInput, RackUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: RackCreateOrConnectWithoutOperationsInput
    upsert?: RackUpsertWithoutOperationsInput
    connect?: RackWhereUniqueInput
    update?: XOR<XOR<RackUpdateToOneWithWhereWithoutOperationsInput, RackUpdateWithoutOperationsInput>, RackUncheckedUpdateWithoutOperationsInput>
  }

  export type UserUpdateOneRequiredWithoutOperationsNestedInput = {
    create?: XOR<UserCreateWithoutOperationsInput, UserUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOperationsInput
    upsert?: UserUpsertWithoutOperationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOperationsInput, UserUpdateWithoutOperationsInput>, UserUncheckedUpdateWithoutOperationsInput>
  }

  export type ProductUpdateOneRequiredWithoutOperationsNestedInput = {
    create?: XOR<ProductCreateWithoutOperationsInput, ProductUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOperationsInput
    upsert?: ProductUpsertWithoutOperationsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOperationsInput, ProductUpdateWithoutOperationsInput>, ProductUncheckedUpdateWithoutOperationsInput>
  }

  export type PendingInventoryUpdateManyWithoutOperationNestedInput = {
    create?: XOR<PendingInventoryCreateWithoutOperationInput, PendingInventoryUncheckedCreateWithoutOperationInput> | PendingInventoryCreateWithoutOperationInput[] | PendingInventoryUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: PendingInventoryCreateOrConnectWithoutOperationInput | PendingInventoryCreateOrConnectWithoutOperationInput[]
    upsert?: PendingInventoryUpsertWithWhereUniqueWithoutOperationInput | PendingInventoryUpsertWithWhereUniqueWithoutOperationInput[]
    createMany?: PendingInventoryCreateManyOperationInputEnvelope
    set?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    disconnect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    delete?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    connect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    update?: PendingInventoryUpdateWithWhereUniqueWithoutOperationInput | PendingInventoryUpdateWithWhereUniqueWithoutOperationInput[]
    updateMany?: PendingInventoryUpdateManyWithWhereWithoutOperationInput | PendingInventoryUpdateManyWithWhereWithoutOperationInput[]
    deleteMany?: PendingInventoryScalarWhereInput | PendingInventoryScalarWhereInput[]
  }

  export type TransactionHistoryUpdateManyWithoutOperationNestedInput = {
    create?: XOR<TransactionHistoryCreateWithoutOperationInput, TransactionHistoryUncheckedCreateWithoutOperationInput> | TransactionHistoryCreateWithoutOperationInput[] | TransactionHistoryUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutOperationInput | TransactionHistoryCreateOrConnectWithoutOperationInput[]
    upsert?: TransactionHistoryUpsertWithWhereUniqueWithoutOperationInput | TransactionHistoryUpsertWithWhereUniqueWithoutOperationInput[]
    createMany?: TransactionHistoryCreateManyOperationInputEnvelope
    set?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    disconnect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    delete?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    update?: TransactionHistoryUpdateWithWhereUniqueWithoutOperationInput | TransactionHistoryUpdateWithWhereUniqueWithoutOperationInput[]
    updateMany?: TransactionHistoryUpdateManyWithWhereWithoutOperationInput | TransactionHistoryUpdateManyWithWhereWithoutOperationInput[]
    deleteMany?: TransactionHistoryScalarWhereInput | TransactionHistoryScalarWhereInput[]
  }

  export type PendingInventoryUncheckedUpdateManyWithoutOperationNestedInput = {
    create?: XOR<PendingInventoryCreateWithoutOperationInput, PendingInventoryUncheckedCreateWithoutOperationInput> | PendingInventoryCreateWithoutOperationInput[] | PendingInventoryUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: PendingInventoryCreateOrConnectWithoutOperationInput | PendingInventoryCreateOrConnectWithoutOperationInput[]
    upsert?: PendingInventoryUpsertWithWhereUniqueWithoutOperationInput | PendingInventoryUpsertWithWhereUniqueWithoutOperationInput[]
    createMany?: PendingInventoryCreateManyOperationInputEnvelope
    set?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    disconnect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    delete?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    connect?: PendingInventoryWhereUniqueInput | PendingInventoryWhereUniqueInput[]
    update?: PendingInventoryUpdateWithWhereUniqueWithoutOperationInput | PendingInventoryUpdateWithWhereUniqueWithoutOperationInput[]
    updateMany?: PendingInventoryUpdateManyWithWhereWithoutOperationInput | PendingInventoryUpdateManyWithWhereWithoutOperationInput[]
    deleteMany?: PendingInventoryScalarWhereInput | PendingInventoryScalarWhereInput[]
  }

  export type TransactionHistoryUncheckedUpdateManyWithoutOperationNestedInput = {
    create?: XOR<TransactionHistoryCreateWithoutOperationInput, TransactionHistoryUncheckedCreateWithoutOperationInput> | TransactionHistoryCreateWithoutOperationInput[] | TransactionHistoryUncheckedCreateWithoutOperationInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutOperationInput | TransactionHistoryCreateOrConnectWithoutOperationInput[]
    upsert?: TransactionHistoryUpsertWithWhereUniqueWithoutOperationInput | TransactionHistoryUpsertWithWhereUniqueWithoutOperationInput[]
    createMany?: TransactionHistoryCreateManyOperationInputEnvelope
    set?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    disconnect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    delete?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    update?: TransactionHistoryUpdateWithWhereUniqueWithoutOperationInput | TransactionHistoryUpdateWithWhereUniqueWithoutOperationInput[]
    updateMany?: TransactionHistoryUpdateManyWithWhereWithoutOperationInput | TransactionHistoryUpdateManyWithWhereWithoutOperationInput[]
    deleteMany?: TransactionHistoryScalarWhereInput | TransactionHistoryScalarWhereInput[]
  }

  export type OperationCreateNestedOneWithoutPendingInventoryInput = {
    create?: XOR<OperationCreateWithoutPendingInventoryInput, OperationUncheckedCreateWithoutPendingInventoryInput>
    connectOrCreate?: OperationCreateOrConnectWithoutPendingInventoryInput
    connect?: OperationWhereUniqueInput
  }

  export type RackCreateNestedOneWithoutPendingInventoryInput = {
    create?: XOR<RackCreateWithoutPendingInventoryInput, RackUncheckedCreateWithoutPendingInventoryInput>
    connectOrCreate?: RackCreateOrConnectWithoutPendingInventoryInput
    connect?: RackWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutPendingInventoryInput = {
    create?: XOR<ProductCreateWithoutPendingInventoryInput, ProductUncheckedCreateWithoutPendingInventoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPendingInventoryInput
    connect?: ProductWhereUniqueInput
  }

  export type OperationUpdateOneRequiredWithoutPendingInventoryNestedInput = {
    create?: XOR<OperationCreateWithoutPendingInventoryInput, OperationUncheckedCreateWithoutPendingInventoryInput>
    connectOrCreate?: OperationCreateOrConnectWithoutPendingInventoryInput
    upsert?: OperationUpsertWithoutPendingInventoryInput
    connect?: OperationWhereUniqueInput
    update?: XOR<XOR<OperationUpdateToOneWithWhereWithoutPendingInventoryInput, OperationUpdateWithoutPendingInventoryInput>, OperationUncheckedUpdateWithoutPendingInventoryInput>
  }

  export type RackUpdateOneRequiredWithoutPendingInventoryNestedInput = {
    create?: XOR<RackCreateWithoutPendingInventoryInput, RackUncheckedCreateWithoutPendingInventoryInput>
    connectOrCreate?: RackCreateOrConnectWithoutPendingInventoryInput
    upsert?: RackUpsertWithoutPendingInventoryInput
    connect?: RackWhereUniqueInput
    update?: XOR<XOR<RackUpdateToOneWithWhereWithoutPendingInventoryInput, RackUpdateWithoutPendingInventoryInput>, RackUncheckedUpdateWithoutPendingInventoryInput>
  }

  export type ProductUpdateOneRequiredWithoutPendingInventoryNestedInput = {
    create?: XOR<ProductCreateWithoutPendingInventoryInput, ProductUncheckedCreateWithoutPendingInventoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPendingInventoryInput
    upsert?: ProductUpsertWithoutPendingInventoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPendingInventoryInput, ProductUpdateWithoutPendingInventoryInput>, ProductUncheckedUpdateWithoutPendingInventoryInput>
  }

  export type UserCreateNestedOneWithoutTransactionHistoriesInput = {
    create?: XOR<UserCreateWithoutTransactionHistoriesInput, UserUncheckedCreateWithoutTransactionHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type OperationCreateNestedOneWithoutTransactionHistoriesInput = {
    create?: XOR<OperationCreateWithoutTransactionHistoriesInput, OperationUncheckedCreateWithoutTransactionHistoriesInput>
    connectOrCreate?: OperationCreateOrConnectWithoutTransactionHistoriesInput
    connect?: OperationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTransactionHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutTransactionHistoriesInput, UserUncheckedCreateWithoutTransactionHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionHistoriesInput
    upsert?: UserUpsertWithoutTransactionHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionHistoriesInput, UserUpdateWithoutTransactionHistoriesInput>, UserUncheckedUpdateWithoutTransactionHistoriesInput>
  }

  export type OperationUpdateOneRequiredWithoutTransactionHistoriesNestedInput = {
    create?: XOR<OperationCreateWithoutTransactionHistoriesInput, OperationUncheckedCreateWithoutTransactionHistoriesInput>
    connectOrCreate?: OperationCreateOrConnectWithoutTransactionHistoriesInput
    upsert?: OperationUpsertWithoutTransactionHistoriesInput
    connect?: OperationWhereUniqueInput
    update?: XOR<XOR<OperationUpdateToOneWithWhereWithoutTransactionHistoriesInput, OperationUpdateWithoutTransactionHistoriesInput>, OperationUncheckedUpdateWithoutTransactionHistoriesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserCreateWithoutOrganizationInput = {
    id: string
    username: string
    password: string
    name: string
    designation: string
    mobileNumber: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: OperationCreateNestedManyWithoutUserInput
    transactionHistories?: TransactionHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id: string
    username: string
    password: string
    name: string
    designation: string
    mobileNumber: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: OperationUncheckedCreateNestedManyWithoutUserInput
    transactionHistories?: TransactionHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    designation?: StringFilter<"User"> | string
    mobileNumber?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    organizationId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type OperationCreateWithoutUserInput = {
    id: string
    type: string
    quantity: number
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rack: RackCreateNestedOneWithoutOperationsInput
    product: ProductCreateNestedOneWithoutOperationsInput
    pendingInventory?: PendingInventoryCreateNestedManyWithoutOperationInput
    transactionHistories?: TransactionHistoryCreateNestedManyWithoutOperationInput
  }

  export type OperationUncheckedCreateWithoutUserInput = {
    id: string
    type: string
    quantity: number
    productId: string
    rackId: string
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pendingInventory?: PendingInventoryUncheckedCreateNestedManyWithoutOperationInput
    transactionHistories?: TransactionHistoryUncheckedCreateNestedManyWithoutOperationInput
  }

  export type OperationCreateOrConnectWithoutUserInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutUserInput, OperationUncheckedCreateWithoutUserInput>
  }

  export type OperationCreateManyUserInputEnvelope = {
    data: OperationCreateManyUserInput | OperationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionHistoryCreateWithoutUserInput = {
    id?: string
    action: string
    timestamp?: Date | string
    notes?: string | null
    operation: OperationCreateNestedOneWithoutTransactionHistoriesInput
  }

  export type TransactionHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    operationId: string
    action: string
    timestamp?: Date | string
    notes?: string | null
  }

  export type TransactionHistoryCreateOrConnectWithoutUserInput = {
    where: TransactionHistoryWhereUniqueInput
    create: XOR<TransactionHistoryCreateWithoutUserInput, TransactionHistoryUncheckedCreateWithoutUserInput>
  }

  export type TransactionHistoryCreateManyUserInputEnvelope = {
    data: TransactionHistoryCreateManyUserInput | TransactionHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutUsersInput = {
    id: string
    name: string
    gstin: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id: string
    name: string
    gstin: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type OperationUpsertWithWhereUniqueWithoutUserInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutUserInput, OperationUncheckedUpdateWithoutUserInput>
    create: XOR<OperationCreateWithoutUserInput, OperationUncheckedCreateWithoutUserInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutUserInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutUserInput, OperationUncheckedUpdateWithoutUserInput>
  }

  export type OperationUpdateManyWithWhereWithoutUserInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutUserInput>
  }

  export type OperationScalarWhereInput = {
    AND?: OperationScalarWhereInput | OperationScalarWhereInput[]
    OR?: OperationScalarWhereInput[]
    NOT?: OperationScalarWhereInput | OperationScalarWhereInput[]
    id?: StringFilter<"Operation"> | string
    type?: StringFilter<"Operation"> | string
    quantity?: IntFilter<"Operation"> | number
    productId?: StringFilter<"Operation"> | string
    userId?: StringFilter<"Operation"> | string
    rackId?: StringFilter<"Operation"> | string
    isApproved?: BoolFilter<"Operation"> | boolean
    isCancelled?: BoolFilter<"Operation"> | boolean
    createdAt?: DateTimeFilter<"Operation"> | Date | string
    updatedAt?: DateTimeFilter<"Operation"> | Date | string
  }

  export type TransactionHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionHistoryWhereUniqueInput
    update: XOR<TransactionHistoryUpdateWithoutUserInput, TransactionHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionHistoryCreateWithoutUserInput, TransactionHistoryUncheckedCreateWithoutUserInput>
  }

  export type TransactionHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionHistoryWhereUniqueInput
    data: XOR<TransactionHistoryUpdateWithoutUserInput, TransactionHistoryUncheckedUpdateWithoutUserInput>
  }

  export type TransactionHistoryUpdateManyWithWhereWithoutUserInput = {
    where: TransactionHistoryScalarWhereInput
    data: XOR<TransactionHistoryUpdateManyMutationInput, TransactionHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionHistoryScalarWhereInput = {
    AND?: TransactionHistoryScalarWhereInput | TransactionHistoryScalarWhereInput[]
    OR?: TransactionHistoryScalarWhereInput[]
    NOT?: TransactionHistoryScalarWhereInput | TransactionHistoryScalarWhereInput[]
    id?: StringFilter<"TransactionHistory"> | string
    operationId?: StringFilter<"TransactionHistory"> | string
    userId?: StringFilter<"TransactionHistory"> | string
    action?: StringFilter<"TransactionHistory"> | string
    timestamp?: DateTimeFilter<"TransactionHistory"> | Date | string
    notes?: StringNullableFilter<"TransactionHistory"> | string | null
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gstin?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gstin?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateWithoutProductInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rack: RackCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutProductInput = {
    quantity: number
    rackId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCreateOrConnectWithoutProductInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
  }

  export type InventoryCreateManyProductInputEnvelope = {
    data: InventoryCreateManyProductInput | InventoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OperationCreateWithoutProductInput = {
    id: string
    type: string
    quantity: number
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rack: RackCreateNestedOneWithoutOperationsInput
    user: UserCreateNestedOneWithoutOperationsInput
    pendingInventory?: PendingInventoryCreateNestedManyWithoutOperationInput
    transactionHistories?: TransactionHistoryCreateNestedManyWithoutOperationInput
  }

  export type OperationUncheckedCreateWithoutProductInput = {
    id: string
    type: string
    quantity: number
    userId: string
    rackId: string
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pendingInventory?: PendingInventoryUncheckedCreateNestedManyWithoutOperationInput
    transactionHistories?: TransactionHistoryUncheckedCreateNestedManyWithoutOperationInput
  }

  export type OperationCreateOrConnectWithoutProductInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutProductInput, OperationUncheckedCreateWithoutProductInput>
  }

  export type OperationCreateManyProductInputEnvelope = {
    data: OperationCreateManyProductInput | OperationCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type PendingInventoryCreateWithoutProductInput = {
    id: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    operation: OperationCreateNestedOneWithoutPendingInventoryInput
    rack: RackCreateNestedOneWithoutPendingInventoryInput
  }

  export type PendingInventoryUncheckedCreateWithoutProductInput = {
    id: string
    quantity: number
    rackId: string
    operationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendingInventoryCreateOrConnectWithoutProductInput = {
    where: PendingInventoryWhereUniqueInput
    create: XOR<PendingInventoryCreateWithoutProductInput, PendingInventoryUncheckedCreateWithoutProductInput>
  }

  export type PendingInventoryCreateManyProductInputEnvelope = {
    data: PendingInventoryCreateManyProductInput | PendingInventoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type InventoryUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutProductInput, InventoryUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutProductInput, InventoryUncheckedUpdateWithoutProductInput>
  }

  export type InventoryUpdateManyWithWhereWithoutProductInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutProductInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    quantity?: IntFilter<"Inventory"> | number
    productId?: StringFilter<"Inventory"> | string
    rackId?: StringFilter<"Inventory"> | string
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeFilter<"Inventory"> | Date | string
  }

  export type OperationUpsertWithWhereUniqueWithoutProductInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutProductInput, OperationUncheckedUpdateWithoutProductInput>
    create: XOR<OperationCreateWithoutProductInput, OperationUncheckedCreateWithoutProductInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutProductInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutProductInput, OperationUncheckedUpdateWithoutProductInput>
  }

  export type OperationUpdateManyWithWhereWithoutProductInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutProductInput>
  }

  export type PendingInventoryUpsertWithWhereUniqueWithoutProductInput = {
    where: PendingInventoryWhereUniqueInput
    update: XOR<PendingInventoryUpdateWithoutProductInput, PendingInventoryUncheckedUpdateWithoutProductInput>
    create: XOR<PendingInventoryCreateWithoutProductInput, PendingInventoryUncheckedCreateWithoutProductInput>
  }

  export type PendingInventoryUpdateWithWhereUniqueWithoutProductInput = {
    where: PendingInventoryWhereUniqueInput
    data: XOR<PendingInventoryUpdateWithoutProductInput, PendingInventoryUncheckedUpdateWithoutProductInput>
  }

  export type PendingInventoryUpdateManyWithWhereWithoutProductInput = {
    where: PendingInventoryScalarWhereInput
    data: XOR<PendingInventoryUpdateManyMutationInput, PendingInventoryUncheckedUpdateManyWithoutProductInput>
  }

  export type PendingInventoryScalarWhereInput = {
    AND?: PendingInventoryScalarWhereInput | PendingInventoryScalarWhereInput[]
    OR?: PendingInventoryScalarWhereInput[]
    NOT?: PendingInventoryScalarWhereInput | PendingInventoryScalarWhereInput[]
    id?: StringFilter<"PendingInventory"> | string
    quantity?: IntFilter<"PendingInventory"> | number
    productId?: StringFilter<"PendingInventory"> | string
    rackId?: StringFilter<"PendingInventory"> | string
    operationId?: StringFilter<"PendingInventory"> | string
    createdAt?: DateTimeFilter<"PendingInventory"> | Date | string
    updatedAt?: DateTimeFilter<"PendingInventory"> | Date | string
  }

  export type RackCreateWithoutInventoryInput = {
    id: string
    number: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: OperationCreateNestedManyWithoutRackInput
    pendingInventory?: PendingInventoryCreateNestedManyWithoutRackInput
  }

  export type RackUncheckedCreateWithoutInventoryInput = {
    id: string
    number: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: OperationUncheckedCreateNestedManyWithoutRackInput
    pendingInventory?: PendingInventoryUncheckedCreateNestedManyWithoutRackInput
  }

  export type RackCreateOrConnectWithoutInventoryInput = {
    where: RackWhereUniqueInput
    create: XOR<RackCreateWithoutInventoryInput, RackUncheckedCreateWithoutInventoryInput>
  }

  export type ProductCreateWithoutInventoryInput = {
    id: string
    name: string
    description?: string | null
    price: number
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: OperationCreateNestedManyWithoutProductInput
    pendingInventory?: PendingInventoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInventoryInput = {
    id: string
    name: string
    description?: string | null
    price: number
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: OperationUncheckedCreateNestedManyWithoutProductInput
    pendingInventory?: PendingInventoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInventoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
  }

  export type RackUpsertWithoutInventoryInput = {
    update: XOR<RackUpdateWithoutInventoryInput, RackUncheckedUpdateWithoutInventoryInput>
    create: XOR<RackCreateWithoutInventoryInput, RackUncheckedCreateWithoutInventoryInput>
    where?: RackWhereInput
  }

  export type RackUpdateToOneWithWhereWithoutInventoryInput = {
    where?: RackWhereInput
    data: XOR<RackUpdateWithoutInventoryInput, RackUncheckedUpdateWithoutInventoryInput>
  }

  export type RackUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUpdateManyWithoutRackNestedInput
    pendingInventory?: PendingInventoryUpdateManyWithoutRackNestedInput
  }

  export type RackUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUncheckedUpdateManyWithoutRackNestedInput
    pendingInventory?: PendingInventoryUncheckedUpdateManyWithoutRackNestedInput
  }

  export type ProductUpsertWithoutInventoryInput = {
    update: XOR<ProductUpdateWithoutInventoryInput, ProductUncheckedUpdateWithoutInventoryInput>
    create: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInventoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInventoryInput, ProductUncheckedUpdateWithoutInventoryInput>
  }

  export type ProductUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUpdateManyWithoutProductNestedInput
    pendingInventory?: PendingInventoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUncheckedUpdateManyWithoutProductNestedInput
    pendingInventory?: PendingInventoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type InventoryCreateWithoutRackInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutRackInput = {
    quantity: number
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCreateOrConnectWithoutRackInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutRackInput, InventoryUncheckedCreateWithoutRackInput>
  }

  export type InventoryCreateManyRackInputEnvelope = {
    data: InventoryCreateManyRackInput | InventoryCreateManyRackInput[]
    skipDuplicates?: boolean
  }

  export type OperationCreateWithoutRackInput = {
    id: string
    type: string
    quantity: number
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOperationsInput
    product: ProductCreateNestedOneWithoutOperationsInput
    pendingInventory?: PendingInventoryCreateNestedManyWithoutOperationInput
    transactionHistories?: TransactionHistoryCreateNestedManyWithoutOperationInput
  }

  export type OperationUncheckedCreateWithoutRackInput = {
    id: string
    type: string
    quantity: number
    productId: string
    userId: string
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pendingInventory?: PendingInventoryUncheckedCreateNestedManyWithoutOperationInput
    transactionHistories?: TransactionHistoryUncheckedCreateNestedManyWithoutOperationInput
  }

  export type OperationCreateOrConnectWithoutRackInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutRackInput, OperationUncheckedCreateWithoutRackInput>
  }

  export type OperationCreateManyRackInputEnvelope = {
    data: OperationCreateManyRackInput | OperationCreateManyRackInput[]
    skipDuplicates?: boolean
  }

  export type PendingInventoryCreateWithoutRackInput = {
    id: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    operation: OperationCreateNestedOneWithoutPendingInventoryInput
    product: ProductCreateNestedOneWithoutPendingInventoryInput
  }

  export type PendingInventoryUncheckedCreateWithoutRackInput = {
    id: string
    quantity: number
    productId: string
    operationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendingInventoryCreateOrConnectWithoutRackInput = {
    where: PendingInventoryWhereUniqueInput
    create: XOR<PendingInventoryCreateWithoutRackInput, PendingInventoryUncheckedCreateWithoutRackInput>
  }

  export type PendingInventoryCreateManyRackInputEnvelope = {
    data: PendingInventoryCreateManyRackInput | PendingInventoryCreateManyRackInput[]
    skipDuplicates?: boolean
  }

  export type InventoryUpsertWithWhereUniqueWithoutRackInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutRackInput, InventoryUncheckedUpdateWithoutRackInput>
    create: XOR<InventoryCreateWithoutRackInput, InventoryUncheckedCreateWithoutRackInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutRackInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutRackInput, InventoryUncheckedUpdateWithoutRackInput>
  }

  export type InventoryUpdateManyWithWhereWithoutRackInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutRackInput>
  }

  export type OperationUpsertWithWhereUniqueWithoutRackInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutRackInput, OperationUncheckedUpdateWithoutRackInput>
    create: XOR<OperationCreateWithoutRackInput, OperationUncheckedCreateWithoutRackInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutRackInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutRackInput, OperationUncheckedUpdateWithoutRackInput>
  }

  export type OperationUpdateManyWithWhereWithoutRackInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutRackInput>
  }

  export type PendingInventoryUpsertWithWhereUniqueWithoutRackInput = {
    where: PendingInventoryWhereUniqueInput
    update: XOR<PendingInventoryUpdateWithoutRackInput, PendingInventoryUncheckedUpdateWithoutRackInput>
    create: XOR<PendingInventoryCreateWithoutRackInput, PendingInventoryUncheckedCreateWithoutRackInput>
  }

  export type PendingInventoryUpdateWithWhereUniqueWithoutRackInput = {
    where: PendingInventoryWhereUniqueInput
    data: XOR<PendingInventoryUpdateWithoutRackInput, PendingInventoryUncheckedUpdateWithoutRackInput>
  }

  export type PendingInventoryUpdateManyWithWhereWithoutRackInput = {
    where: PendingInventoryScalarWhereInput
    data: XOR<PendingInventoryUpdateManyMutationInput, PendingInventoryUncheckedUpdateManyWithoutRackInput>
  }

  export type RackCreateWithoutOperationsInput = {
    id: string
    number: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryCreateNestedManyWithoutRackInput
    pendingInventory?: PendingInventoryCreateNestedManyWithoutRackInput
  }

  export type RackUncheckedCreateWithoutOperationsInput = {
    id: string
    number: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedManyWithoutRackInput
    pendingInventory?: PendingInventoryUncheckedCreateNestedManyWithoutRackInput
  }

  export type RackCreateOrConnectWithoutOperationsInput = {
    where: RackWhereUniqueInput
    create: XOR<RackCreateWithoutOperationsInput, RackUncheckedCreateWithoutOperationsInput>
  }

  export type UserCreateWithoutOperationsInput = {
    id: string
    username: string
    password: string
    name: string
    designation: string
    mobileNumber: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactionHistories?: TransactionHistoryCreateNestedManyWithoutUserInput
    organization: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutOperationsInput = {
    id: string
    username: string
    password: string
    name: string
    designation: string
    mobileNumber: string
    isAdmin?: boolean
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactionHistories?: TransactionHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOperationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOperationsInput, UserUncheckedCreateWithoutOperationsInput>
  }

  export type ProductCreateWithoutOperationsInput = {
    id: string
    name: string
    description?: string | null
    price: number
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryCreateNestedManyWithoutProductInput
    pendingInventory?: PendingInventoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOperationsInput = {
    id: string
    name: string
    description?: string | null
    price: number
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedManyWithoutProductInput
    pendingInventory?: PendingInventoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOperationsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOperationsInput, ProductUncheckedCreateWithoutOperationsInput>
  }

  export type PendingInventoryCreateWithoutOperationInput = {
    id: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rack: RackCreateNestedOneWithoutPendingInventoryInput
    product: ProductCreateNestedOneWithoutPendingInventoryInput
  }

  export type PendingInventoryUncheckedCreateWithoutOperationInput = {
    id: string
    quantity: number
    productId: string
    rackId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendingInventoryCreateOrConnectWithoutOperationInput = {
    where: PendingInventoryWhereUniqueInput
    create: XOR<PendingInventoryCreateWithoutOperationInput, PendingInventoryUncheckedCreateWithoutOperationInput>
  }

  export type PendingInventoryCreateManyOperationInputEnvelope = {
    data: PendingInventoryCreateManyOperationInput | PendingInventoryCreateManyOperationInput[]
    skipDuplicates?: boolean
  }

  export type TransactionHistoryCreateWithoutOperationInput = {
    id?: string
    action: string
    timestamp?: Date | string
    notes?: string | null
    user: UserCreateNestedOneWithoutTransactionHistoriesInput
  }

  export type TransactionHistoryUncheckedCreateWithoutOperationInput = {
    id?: string
    userId: string
    action: string
    timestamp?: Date | string
    notes?: string | null
  }

  export type TransactionHistoryCreateOrConnectWithoutOperationInput = {
    where: TransactionHistoryWhereUniqueInput
    create: XOR<TransactionHistoryCreateWithoutOperationInput, TransactionHistoryUncheckedCreateWithoutOperationInput>
  }

  export type TransactionHistoryCreateManyOperationInputEnvelope = {
    data: TransactionHistoryCreateManyOperationInput | TransactionHistoryCreateManyOperationInput[]
    skipDuplicates?: boolean
  }

  export type RackUpsertWithoutOperationsInput = {
    update: XOR<RackUpdateWithoutOperationsInput, RackUncheckedUpdateWithoutOperationsInput>
    create: XOR<RackCreateWithoutOperationsInput, RackUncheckedCreateWithoutOperationsInput>
    where?: RackWhereInput
  }

  export type RackUpdateToOneWithWhereWithoutOperationsInput = {
    where?: RackWhereInput
    data: XOR<RackUpdateWithoutOperationsInput, RackUncheckedUpdateWithoutOperationsInput>
  }

  export type RackUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateManyWithoutRackNestedInput
    pendingInventory?: PendingInventoryUpdateManyWithoutRackNestedInput
  }

  export type RackUncheckedUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateManyWithoutRackNestedInput
    pendingInventory?: PendingInventoryUncheckedUpdateManyWithoutRackNestedInput
  }

  export type UserUpsertWithoutOperationsInput = {
    update: XOR<UserUpdateWithoutOperationsInput, UserUncheckedUpdateWithoutOperationsInput>
    create: XOR<UserCreateWithoutOperationsInput, UserUncheckedCreateWithoutOperationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOperationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOperationsInput, UserUncheckedUpdateWithoutOperationsInput>
  }

  export type UserUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionHistories?: TransactionHistoryUpdateManyWithoutUserNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionHistories?: TransactionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutOperationsInput = {
    update: XOR<ProductUpdateWithoutOperationsInput, ProductUncheckedUpdateWithoutOperationsInput>
    create: XOR<ProductCreateWithoutOperationsInput, ProductUncheckedCreateWithoutOperationsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOperationsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOperationsInput, ProductUncheckedUpdateWithoutOperationsInput>
  }

  export type ProductUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateManyWithoutProductNestedInput
    pendingInventory?: PendingInventoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateManyWithoutProductNestedInput
    pendingInventory?: PendingInventoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PendingInventoryUpsertWithWhereUniqueWithoutOperationInput = {
    where: PendingInventoryWhereUniqueInput
    update: XOR<PendingInventoryUpdateWithoutOperationInput, PendingInventoryUncheckedUpdateWithoutOperationInput>
    create: XOR<PendingInventoryCreateWithoutOperationInput, PendingInventoryUncheckedCreateWithoutOperationInput>
  }

  export type PendingInventoryUpdateWithWhereUniqueWithoutOperationInput = {
    where: PendingInventoryWhereUniqueInput
    data: XOR<PendingInventoryUpdateWithoutOperationInput, PendingInventoryUncheckedUpdateWithoutOperationInput>
  }

  export type PendingInventoryUpdateManyWithWhereWithoutOperationInput = {
    where: PendingInventoryScalarWhereInput
    data: XOR<PendingInventoryUpdateManyMutationInput, PendingInventoryUncheckedUpdateManyWithoutOperationInput>
  }

  export type TransactionHistoryUpsertWithWhereUniqueWithoutOperationInput = {
    where: TransactionHistoryWhereUniqueInput
    update: XOR<TransactionHistoryUpdateWithoutOperationInput, TransactionHistoryUncheckedUpdateWithoutOperationInput>
    create: XOR<TransactionHistoryCreateWithoutOperationInput, TransactionHistoryUncheckedCreateWithoutOperationInput>
  }

  export type TransactionHistoryUpdateWithWhereUniqueWithoutOperationInput = {
    where: TransactionHistoryWhereUniqueInput
    data: XOR<TransactionHistoryUpdateWithoutOperationInput, TransactionHistoryUncheckedUpdateWithoutOperationInput>
  }

  export type TransactionHistoryUpdateManyWithWhereWithoutOperationInput = {
    where: TransactionHistoryScalarWhereInput
    data: XOR<TransactionHistoryUpdateManyMutationInput, TransactionHistoryUncheckedUpdateManyWithoutOperationInput>
  }

  export type OperationCreateWithoutPendingInventoryInput = {
    id: string
    type: string
    quantity: number
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rack: RackCreateNestedOneWithoutOperationsInput
    user: UserCreateNestedOneWithoutOperationsInput
    product: ProductCreateNestedOneWithoutOperationsInput
    transactionHistories?: TransactionHistoryCreateNestedManyWithoutOperationInput
  }

  export type OperationUncheckedCreateWithoutPendingInventoryInput = {
    id: string
    type: string
    quantity: number
    productId: string
    userId: string
    rackId: string
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactionHistories?: TransactionHistoryUncheckedCreateNestedManyWithoutOperationInput
  }

  export type OperationCreateOrConnectWithoutPendingInventoryInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutPendingInventoryInput, OperationUncheckedCreateWithoutPendingInventoryInput>
  }

  export type RackCreateWithoutPendingInventoryInput = {
    id: string
    number: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryCreateNestedManyWithoutRackInput
    operations?: OperationCreateNestedManyWithoutRackInput
  }

  export type RackUncheckedCreateWithoutPendingInventoryInput = {
    id: string
    number: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedManyWithoutRackInput
    operations?: OperationUncheckedCreateNestedManyWithoutRackInput
  }

  export type RackCreateOrConnectWithoutPendingInventoryInput = {
    where: RackWhereUniqueInput
    create: XOR<RackCreateWithoutPendingInventoryInput, RackUncheckedCreateWithoutPendingInventoryInput>
  }

  export type ProductCreateWithoutPendingInventoryInput = {
    id: string
    name: string
    description?: string | null
    price: number
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryCreateNestedManyWithoutProductInput
    operations?: OperationCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPendingInventoryInput = {
    id: string
    name: string
    description?: string | null
    price: number
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedManyWithoutProductInput
    operations?: OperationUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPendingInventoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPendingInventoryInput, ProductUncheckedCreateWithoutPendingInventoryInput>
  }

  export type OperationUpsertWithoutPendingInventoryInput = {
    update: XOR<OperationUpdateWithoutPendingInventoryInput, OperationUncheckedUpdateWithoutPendingInventoryInput>
    create: XOR<OperationCreateWithoutPendingInventoryInput, OperationUncheckedCreateWithoutPendingInventoryInput>
    where?: OperationWhereInput
  }

  export type OperationUpdateToOneWithWhereWithoutPendingInventoryInput = {
    where?: OperationWhereInput
    data: XOR<OperationUpdateWithoutPendingInventoryInput, OperationUncheckedUpdateWithoutPendingInventoryInput>
  }

  export type OperationUpdateWithoutPendingInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rack?: RackUpdateOneRequiredWithoutOperationsNestedInput
    user?: UserUpdateOneRequiredWithoutOperationsNestedInput
    product?: ProductUpdateOneRequiredWithoutOperationsNestedInput
    transactionHistories?: TransactionHistoryUpdateManyWithoutOperationNestedInput
  }

  export type OperationUncheckedUpdateWithoutPendingInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionHistories?: TransactionHistoryUncheckedUpdateManyWithoutOperationNestedInput
  }

  export type RackUpsertWithoutPendingInventoryInput = {
    update: XOR<RackUpdateWithoutPendingInventoryInput, RackUncheckedUpdateWithoutPendingInventoryInput>
    create: XOR<RackCreateWithoutPendingInventoryInput, RackUncheckedCreateWithoutPendingInventoryInput>
    where?: RackWhereInput
  }

  export type RackUpdateToOneWithWhereWithoutPendingInventoryInput = {
    where?: RackWhereInput
    data: XOR<RackUpdateWithoutPendingInventoryInput, RackUncheckedUpdateWithoutPendingInventoryInput>
  }

  export type RackUpdateWithoutPendingInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateManyWithoutRackNestedInput
    operations?: OperationUpdateManyWithoutRackNestedInput
  }

  export type RackUncheckedUpdateWithoutPendingInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateManyWithoutRackNestedInput
    operations?: OperationUncheckedUpdateManyWithoutRackNestedInput
  }

  export type ProductUpsertWithoutPendingInventoryInput = {
    update: XOR<ProductUpdateWithoutPendingInventoryInput, ProductUncheckedUpdateWithoutPendingInventoryInput>
    create: XOR<ProductCreateWithoutPendingInventoryInput, ProductUncheckedCreateWithoutPendingInventoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPendingInventoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPendingInventoryInput, ProductUncheckedUpdateWithoutPendingInventoryInput>
  }

  export type ProductUpdateWithoutPendingInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateManyWithoutProductNestedInput
    operations?: OperationUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPendingInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateManyWithoutProductNestedInput
    operations?: OperationUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutTransactionHistoriesInput = {
    id: string
    username: string
    password: string
    name: string
    designation: string
    mobileNumber: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: OperationCreateNestedManyWithoutUserInput
    organization: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutTransactionHistoriesInput = {
    id: string
    username: string
    password: string
    name: string
    designation: string
    mobileNumber: string
    isAdmin?: boolean
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: OperationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionHistoriesInput, UserUncheckedCreateWithoutTransactionHistoriesInput>
  }

  export type OperationCreateWithoutTransactionHistoriesInput = {
    id: string
    type: string
    quantity: number
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rack: RackCreateNestedOneWithoutOperationsInput
    user: UserCreateNestedOneWithoutOperationsInput
    product: ProductCreateNestedOneWithoutOperationsInput
    pendingInventory?: PendingInventoryCreateNestedManyWithoutOperationInput
  }

  export type OperationUncheckedCreateWithoutTransactionHistoriesInput = {
    id: string
    type: string
    quantity: number
    productId: string
    userId: string
    rackId: string
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pendingInventory?: PendingInventoryUncheckedCreateNestedManyWithoutOperationInput
  }

  export type OperationCreateOrConnectWithoutTransactionHistoriesInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutTransactionHistoriesInput, OperationUncheckedCreateWithoutTransactionHistoriesInput>
  }

  export type UserUpsertWithoutTransactionHistoriesInput = {
    update: XOR<UserUpdateWithoutTransactionHistoriesInput, UserUncheckedUpdateWithoutTransactionHistoriesInput>
    create: XOR<UserCreateWithoutTransactionHistoriesInput, UserUncheckedCreateWithoutTransactionHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionHistoriesInput, UserUncheckedUpdateWithoutTransactionHistoriesInput>
  }

  export type UserUpdateWithoutTransactionHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUpdateManyWithoutUserNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OperationUpsertWithoutTransactionHistoriesInput = {
    update: XOR<OperationUpdateWithoutTransactionHistoriesInput, OperationUncheckedUpdateWithoutTransactionHistoriesInput>
    create: XOR<OperationCreateWithoutTransactionHistoriesInput, OperationUncheckedCreateWithoutTransactionHistoriesInput>
    where?: OperationWhereInput
  }

  export type OperationUpdateToOneWithWhereWithoutTransactionHistoriesInput = {
    where?: OperationWhereInput
    data: XOR<OperationUpdateWithoutTransactionHistoriesInput, OperationUncheckedUpdateWithoutTransactionHistoriesInput>
  }

  export type OperationUpdateWithoutTransactionHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rack?: RackUpdateOneRequiredWithoutOperationsNestedInput
    user?: UserUpdateOneRequiredWithoutOperationsNestedInput
    product?: ProductUpdateOneRequiredWithoutOperationsNestedInput
    pendingInventory?: PendingInventoryUpdateManyWithoutOperationNestedInput
  }

  export type OperationUncheckedUpdateWithoutTransactionHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingInventory?: PendingInventoryUncheckedUpdateManyWithoutOperationNestedInput
  }

  export type UserCreateManyOrganizationInput = {
    id: string
    username: string
    password: string
    name: string
    designation: string
    mobileNumber: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUpdateManyWithoutUserNestedInput
    transactionHistories?: TransactionHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUncheckedUpdateManyWithoutUserNestedInput
    transactionHistories?: TransactionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationCreateManyUserInput = {
    id: string
    type: string
    quantity: number
    productId: string
    rackId: string
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionHistoryCreateManyUserInput = {
    id?: string
    operationId: string
    action: string
    timestamp?: Date | string
    notes?: string | null
  }

  export type OperationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rack?: RackUpdateOneRequiredWithoutOperationsNestedInput
    product?: ProductUpdateOneRequiredWithoutOperationsNestedInput
    pendingInventory?: PendingInventoryUpdateManyWithoutOperationNestedInput
    transactionHistories?: TransactionHistoryUpdateManyWithoutOperationNestedInput
  }

  export type OperationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingInventory?: PendingInventoryUncheckedUpdateManyWithoutOperationNestedInput
    transactionHistories?: TransactionHistoryUncheckedUpdateManyWithoutOperationNestedInput
  }

  export type OperationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: OperationUpdateOneRequiredWithoutTransactionHistoriesNestedInput
  }

  export type TransactionHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryCreateManyProductInput = {
    quantity: number
    rackId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationCreateManyProductInput = {
    id: string
    type: string
    quantity: number
    userId: string
    rackId: string
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendingInventoryCreateManyProductInput = {
    id: string
    quantity: number
    rackId: string
    operationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rack?: RackUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    rackId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    rackId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rack?: RackUpdateOneRequiredWithoutOperationsNestedInput
    user?: UserUpdateOneRequiredWithoutOperationsNestedInput
    pendingInventory?: PendingInventoryUpdateManyWithoutOperationNestedInput
    transactionHistories?: TransactionHistoryUpdateManyWithoutOperationNestedInput
  }

  export type OperationUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingInventory?: PendingInventoryUncheckedUpdateManyWithoutOperationNestedInput
    transactionHistories?: TransactionHistoryUncheckedUpdateManyWithoutOperationNestedInput
  }

  export type OperationUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingInventoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operation?: OperationUpdateOneRequiredWithoutPendingInventoryNestedInput
    rack?: RackUpdateOneRequiredWithoutPendingInventoryNestedInput
  }

  export type PendingInventoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rackId?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingInventoryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rackId?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyRackInput = {
    quantity: number
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationCreateManyRackInput = {
    id: string
    type: string
    quantity: number
    productId: string
    userId: string
    isApproved?: boolean
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendingInventoryCreateManyRackInput = {
    id: string
    quantity: number
    productId: string
    operationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryUpdateWithoutRackInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutRackInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyWithoutRackInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUpdateWithoutRackInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOperationsNestedInput
    product?: ProductUpdateOneRequiredWithoutOperationsNestedInput
    pendingInventory?: PendingInventoryUpdateManyWithoutOperationNestedInput
    transactionHistories?: TransactionHistoryUpdateManyWithoutOperationNestedInput
  }

  export type OperationUncheckedUpdateWithoutRackInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingInventory?: PendingInventoryUncheckedUpdateManyWithoutOperationNestedInput
    transactionHistories?: TransactionHistoryUncheckedUpdateManyWithoutOperationNestedInput
  }

  export type OperationUncheckedUpdateManyWithoutRackInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingInventoryUpdateWithoutRackInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operation?: OperationUpdateOneRequiredWithoutPendingInventoryNestedInput
    product?: ProductUpdateOneRequiredWithoutPendingInventoryNestedInput
  }

  export type PendingInventoryUncheckedUpdateWithoutRackInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingInventoryUncheckedUpdateManyWithoutRackInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    operationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingInventoryCreateManyOperationInput = {
    id: string
    quantity: number
    productId: string
    rackId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionHistoryCreateManyOperationInput = {
    id?: string
    userId: string
    action: string
    timestamp?: Date | string
    notes?: string | null
  }

  export type PendingInventoryUpdateWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rack?: RackUpdateOneRequiredWithoutPendingInventoryNestedInput
    product?: ProductUpdateOneRequiredWithoutPendingInventoryNestedInput
  }

  export type PendingInventoryUncheckedUpdateWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingInventoryUncheckedUpdateManyWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    rackId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionHistoryUpdateWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTransactionHistoriesNestedInput
  }

  export type TransactionHistoryUncheckedUpdateWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionHistoryUncheckedUpdateManyWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
     */
    export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RackCountOutputTypeDefaultArgs instead
     */
    export type RackCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RackCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OperationCountOutputTypeDefaultArgs instead
     */
    export type OperationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OperationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizationDefaultArgs instead
     */
    export type OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryDefaultArgs instead
     */
    export type InventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RackDefaultArgs instead
     */
    export type RackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OperationDefaultArgs instead
     */
    export type OperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OperationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PendingInventoryDefaultArgs instead
     */
    export type PendingInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PendingInventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionHistoryDefaultArgs instead
     */
    export type TransactionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionHistoryDefaultArgs<ExtArgs>

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