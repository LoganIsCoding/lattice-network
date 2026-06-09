
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model Artifact
 * 
 */
export type Artifact = $Result.DefaultSelection<Prisma.$ArtifactPayload>
/**
 * Model Turn
 * 
 */
export type Turn = $Result.DefaultSelection<Prisma.$TurnPayload>
/**
 * Model ArtifactRelationship
 * 
 */
export type ArtifactRelationship = $Result.DefaultSelection<Prisma.$ArtifactRelationshipPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model ArtifactTag
 * 
 */
export type ArtifactTag = $Result.DefaultSelection<Prisma.$ArtifactTagPayload>
/**
 * Model WebhookDelivery
 * 
 */
export type WebhookDelivery = $Result.DefaultSelection<Prisma.$WebhookDeliveryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TurnStatus: {
  pending: 'pending',
  submitted: 'submitted',
  expired: 'expired'
};

export type TurnStatus = (typeof TurnStatus)[keyof typeof TurnStatus]


export const WebhookEvent: {
  artifact_replied: 'artifact_replied',
  artifact_cited: 'artifact_cited',
  artifact_challenged: 'artifact_challenged'
};

export type WebhookEvent = (typeof WebhookEvent)[keyof typeof WebhookEvent]


export const WebhookDeliveryStatus: {
  pending: 'pending',
  delivered: 'delivered',
  failed: 'failed'
};

export type WebhookDeliveryStatus = (typeof WebhookDeliveryStatus)[keyof typeof WebhookDeliveryStatus]


export const ApiKeyStatus: {
  active: 'active',
  revoked: 'revoked'
};

export type ApiKeyStatus = (typeof ApiKeyStatus)[keyof typeof ApiKeyStatus]


export const AgentStatus: {
  active: 'active',
  inactive: 'inactive'
};

export type AgentStatus = (typeof AgentStatus)[keyof typeof AgentStatus]


export const AgentRole: {
  standard: 'standard',
  moderator: 'moderator'
};

export type AgentRole = (typeof AgentRole)[keyof typeof AgentRole]


export const ArtifactType: {
  claim: 'claim',
  reply: 'reply',
  document: 'document',
  tool: 'tool',
  dataset: 'dataset',
  methodology: 'methodology',
  synthesis: 'synthesis',
  other: 'other'
};

export type ArtifactType = (typeof ArtifactType)[keyof typeof ArtifactType]


export const RelationshipType: {
  cites: 'cites',
  builds_on: 'builds_on',
  contradicts: 'contradicts',
  refutes: 'refutes',
  extends: 'extends',
  inspired_by: 'inspired_by'
};

export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType]

}

export type TurnStatus = $Enums.TurnStatus

export const TurnStatus: typeof $Enums.TurnStatus

export type WebhookEvent = $Enums.WebhookEvent

export const WebhookEvent: typeof $Enums.WebhookEvent

export type WebhookDeliveryStatus = $Enums.WebhookDeliveryStatus

export const WebhookDeliveryStatus: typeof $Enums.WebhookDeliveryStatus

export type ApiKeyStatus = $Enums.ApiKeyStatus

export const ApiKeyStatus: typeof $Enums.ApiKeyStatus

export type AgentStatus = $Enums.AgentStatus

export const AgentStatus: typeof $Enums.AgentStatus

export type AgentRole = $Enums.AgentRole

export const AgentRole: typeof $Enums.AgentRole

export type ArtifactType = $Enums.ArtifactType

export const ArtifactType: typeof $Enums.ArtifactType

export type RelationshipType = $Enums.RelationshipType

export const RelationshipType: typeof $Enums.RelationshipType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artifact`: Exposes CRUD operations for the **Artifact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artifacts
    * const artifacts = await prisma.artifact.findMany()
    * ```
    */
  get artifact(): Prisma.ArtifactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turn`: Exposes CRUD operations for the **Turn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turns
    * const turns = await prisma.turn.findMany()
    * ```
    */
  get turn(): Prisma.TurnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artifactRelationship`: Exposes CRUD operations for the **ArtifactRelationship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtifactRelationships
    * const artifactRelationships = await prisma.artifactRelationship.findMany()
    * ```
    */
  get artifactRelationship(): Prisma.ArtifactRelationshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artifactTag`: Exposes CRUD operations for the **ArtifactTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtifactTags
    * const artifactTags = await prisma.artifactTag.findMany()
    * ```
    */
  get artifactTag(): Prisma.ArtifactTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookDelivery`: Exposes CRUD operations for the **WebhookDelivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookDeliveries
    * const webhookDeliveries = await prisma.webhookDelivery.findMany()
    * ```
    */
  get webhookDelivery(): Prisma.WebhookDeliveryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    ApiKey: 'ApiKey',
    Agent: 'Agent',
    Artifact: 'Artifact',
    Turn: 'Turn',
    ArtifactRelationship: 'ArtifactRelationship',
    Tag: 'Tag',
    ArtifactTag: 'ArtifactTag',
    WebhookDelivery: 'WebhookDelivery'
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
      modelProps: "user" | "apiKey" | "agent" | "artifact" | "turn" | "artifactRelationship" | "tag" | "artifactTag" | "webhookDelivery"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      Artifact: {
        payload: Prisma.$ArtifactPayload<ExtArgs>
        fields: Prisma.ArtifactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtifactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtifactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          findFirst: {
            args: Prisma.ArtifactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtifactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          findMany: {
            args: Prisma.ArtifactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>[]
          }
          create: {
            args: Prisma.ArtifactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          createMany: {
            args: Prisma.ArtifactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtifactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>[]
          }
          delete: {
            args: Prisma.ArtifactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          update: {
            args: Prisma.ArtifactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          deleteMany: {
            args: Prisma.ArtifactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtifactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtifactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>[]
          }
          upsert: {
            args: Prisma.ArtifactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          aggregate: {
            args: Prisma.ArtifactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtifact>
          }
          groupBy: {
            args: Prisma.ArtifactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtifactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtifactCountArgs<ExtArgs>
            result: $Utils.Optional<ArtifactCountAggregateOutputType> | number
          }
        }
      }
      Turn: {
        payload: Prisma.$TurnPayload<ExtArgs>
        fields: Prisma.TurnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>
          }
          findFirst: {
            args: Prisma.TurnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>
          }
          findMany: {
            args: Prisma.TurnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>[]
          }
          create: {
            args: Prisma.TurnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>
          }
          createMany: {
            args: Prisma.TurnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>[]
          }
          delete: {
            args: Prisma.TurnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>
          }
          update: {
            args: Prisma.TurnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>
          }
          deleteMany: {
            args: Prisma.TurnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TurnUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>[]
          }
          upsert: {
            args: Prisma.TurnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>
          }
          aggregate: {
            args: Prisma.TurnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurn>
          }
          groupBy: {
            args: Prisma.TurnGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurnGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurnCountArgs<ExtArgs>
            result: $Utils.Optional<TurnCountAggregateOutputType> | number
          }
        }
      }
      ArtifactRelationship: {
        payload: Prisma.$ArtifactRelationshipPayload<ExtArgs>
        fields: Prisma.ArtifactRelationshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtifactRelationshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactRelationshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtifactRelationshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactRelationshipPayload>
          }
          findFirst: {
            args: Prisma.ArtifactRelationshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactRelationshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtifactRelationshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactRelationshipPayload>
          }
          findMany: {
            args: Prisma.ArtifactRelationshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactRelationshipPayload>[]
          }
          create: {
            args: Prisma.ArtifactRelationshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactRelationshipPayload>
          }
          createMany: {
            args: Prisma.ArtifactRelationshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtifactRelationshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactRelationshipPayload>[]
          }
          delete: {
            args: Prisma.ArtifactRelationshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactRelationshipPayload>
          }
          update: {
            args: Prisma.ArtifactRelationshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactRelationshipPayload>
          }
          deleteMany: {
            args: Prisma.ArtifactRelationshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtifactRelationshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtifactRelationshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactRelationshipPayload>[]
          }
          upsert: {
            args: Prisma.ArtifactRelationshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactRelationshipPayload>
          }
          aggregate: {
            args: Prisma.ArtifactRelationshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtifactRelationship>
          }
          groupBy: {
            args: Prisma.ArtifactRelationshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtifactRelationshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtifactRelationshipCountArgs<ExtArgs>
            result: $Utils.Optional<ArtifactRelationshipCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      ArtifactTag: {
        payload: Prisma.$ArtifactTagPayload<ExtArgs>
        fields: Prisma.ArtifactTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtifactTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtifactTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactTagPayload>
          }
          findFirst: {
            args: Prisma.ArtifactTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtifactTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactTagPayload>
          }
          findMany: {
            args: Prisma.ArtifactTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactTagPayload>[]
          }
          create: {
            args: Prisma.ArtifactTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactTagPayload>
          }
          createMany: {
            args: Prisma.ArtifactTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtifactTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactTagPayload>[]
          }
          delete: {
            args: Prisma.ArtifactTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactTagPayload>
          }
          update: {
            args: Prisma.ArtifactTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactTagPayload>
          }
          deleteMany: {
            args: Prisma.ArtifactTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtifactTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtifactTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactTagPayload>[]
          }
          upsert: {
            args: Prisma.ArtifactTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactTagPayload>
          }
          aggregate: {
            args: Prisma.ArtifactTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtifactTag>
          }
          groupBy: {
            args: Prisma.ArtifactTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtifactTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtifactTagCountArgs<ExtArgs>
            result: $Utils.Optional<ArtifactTagCountAggregateOutputType> | number
          }
        }
      }
      WebhookDelivery: {
        payload: Prisma.$WebhookDeliveryPayload<ExtArgs>
        fields: Prisma.WebhookDeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookDeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          findFirst: {
            args: Prisma.WebhookDeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookDeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          findMany: {
            args: Prisma.WebhookDeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[]
          }
          create: {
            args: Prisma.WebhookDeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          createMany: {
            args: Prisma.WebhookDeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookDeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[]
          }
          delete: {
            args: Prisma.WebhookDeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          update: {
            args: Prisma.WebhookDeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          deleteMany: {
            args: Prisma.WebhookDeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookDeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookDeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[]
          }
          upsert: {
            args: Prisma.WebhookDeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          aggregate: {
            args: Prisma.WebhookDeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookDelivery>
          }
          groupBy: {
            args: Prisma.WebhookDeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookDeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookDeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookDeliveryCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    apiKey?: ApiKeyOmit
    agent?: AgentOmit
    artifact?: ArtifactOmit
    turn?: TurnOmit
    artifactRelationship?: ArtifactRelationshipOmit
    tag?: TagOmit
    artifactTag?: ArtifactTagOmit
    webhookDelivery?: WebhookDeliveryOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    apiKeys: number
    agents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs
    agents?: boolean | UserCountOutputTypeCountAgentsArgs
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
  export type UserCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
  }


  /**
   * Count Type AgentCountOutputType
   */

  export type AgentCountOutputType = {
    artifacts: number
    artifactTags: number
    webhookDeliveries: number
    turns: number
  }

  export type AgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifacts?: boolean | AgentCountOutputTypeCountArtifactsArgs
    artifactTags?: boolean | AgentCountOutputTypeCountArtifactTagsArgs
    webhookDeliveries?: boolean | AgentCountOutputTypeCountWebhookDeliveriesArgs
    turns?: boolean | AgentCountOutputTypeCountTurnsArgs
  }

  // Custom InputTypes
  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountArtifactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountArtifactTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactTagWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountWebhookDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookDeliveryWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountTurnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnWhereInput
  }


  /**
   * Count Type ArtifactCountOutputType
   */

  export type ArtifactCountOutputType = {
    replies: number
    outgoingRelations: number
    incomingRelations: number
    tags: number
  }

  export type ArtifactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | ArtifactCountOutputTypeCountRepliesArgs
    outgoingRelations?: boolean | ArtifactCountOutputTypeCountOutgoingRelationsArgs
    incomingRelations?: boolean | ArtifactCountOutputTypeCountIncomingRelationsArgs
    tags?: boolean | ArtifactCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * ArtifactCountOutputType without action
   */
  export type ArtifactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactCountOutputType
     */
    select?: ArtifactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtifactCountOutputType without action
   */
  export type ArtifactCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactWhereInput
  }

  /**
   * ArtifactCountOutputType without action
   */
  export type ArtifactCountOutputTypeCountOutgoingRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactRelationshipWhereInput
  }

  /**
   * ArtifactCountOutputType without action
   */
  export type ArtifactCountOutputTypeCountIncomingRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactRelationshipWhereInput
  }

  /**
   * ArtifactCountOutputType without action
   */
  export type ArtifactCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    artifactTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifactTags?: boolean | TagCountOutputTypeCountArtifactTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountArtifactTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactTagWhereInput
  }


  /**
   * Models
   */

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
    email: string | null
    passwordHash: string | null
    displayName: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    displayName: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    createdAt?: true
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
    email: string
    passwordHash: string
    displayName: string | null
    createdAt: Date
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
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    createdAt?: boolean
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    agents?: boolean | User$agentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "displayName" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    agents?: boolean | User$agentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      agents: Prisma.$AgentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      displayName: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKeys<T extends User$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agents<T extends User$agentsArgs<ExtArgs> = {}>(args?: Subset<T, User$agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.apiKeys
   */
  export type User$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * User.agents
   */
  export type User$agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    cursor?: AgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    agentId: string | null
    status: $Enums.ApiKeyStatus | null
    createdAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    agentId: string | null
    status: $Enums.ApiKeyStatus | null
    createdAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    tokenHash: number
    userId: number
    agentId: number
    status: number
    createdAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    agentId?: true
    status?: true
    createdAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    agentId?: true
    status?: true
    createdAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    agentId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    tokenHash: string
    userId: string
    agentId: string | null
    status: $Enums.ApiKeyStatus
    createdAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    agentId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    agent?: boolean | ApiKey$agentArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    agentId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    agent?: boolean | ApiKey$agentArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    agentId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    agent?: boolean | ApiKey$agentArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    agentId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "userId" | "agentId" | "status" | "createdAt", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    agent?: boolean | ApiKey$agentArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    agent?: boolean | ApiKey$agentArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    agent?: boolean | ApiKey$agentArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      agent: Prisma.$AgentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenHash: string
      userId: string
      agentId: string | null
      status: $Enums.ApiKeyStatus
      createdAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
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
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agent<T extends ApiKey$agentArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$agentArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly tokenHash: FieldRef<"ApiKey", 'String'>
    readonly userId: FieldRef<"ApiKey", 'String'>
    readonly agentId: FieldRef<"ApiKey", 'String'>
    readonly status: FieldRef<"ApiKey", 'ApiKeyStatus'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey.agent
   */
  export type ApiKey$agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentAvgAggregateOutputType = {
    citationScore: number | null
    collaborationScore: number | null
    personalNoveltyScore: number | null
    lineageScore: number | null
  }

  export type AgentSumAggregateOutputType = {
    citationScore: number | null
    collaborationScore: number | null
    personalNoveltyScore: number | null
    lineageScore: number | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    apiKeyId: string | null
    name: string | null
    description: string | null
    webhookUrl: string | null
    cronSchedule: string | null
    status: $Enums.AgentStatus | null
    role: $Enums.AgentRole | null
    citationScore: number | null
    collaborationScore: number | null
    personalNoveltyScore: number | null
    lineageScore: number | null
    lastActiveAt: Date | null
    createdAt: Date | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    apiKeyId: string | null
    name: string | null
    description: string | null
    webhookUrl: string | null
    cronSchedule: string | null
    status: $Enums.AgentStatus | null
    role: $Enums.AgentRole | null
    citationScore: number | null
    collaborationScore: number | null
    personalNoveltyScore: number | null
    lineageScore: number | null
    lastActiveAt: Date | null
    createdAt: Date | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    userId: number
    apiKeyId: number
    name: number
    description: number
    webhookUrl: number
    cronSchedule: number
    status: number
    role: number
    citationScore: number
    collaborationScore: number
    personalNoveltyScore: number
    lineageScore: number
    lastActiveAt: number
    createdAt: number
    _all: number
  }


  export type AgentAvgAggregateInputType = {
    citationScore?: true
    collaborationScore?: true
    personalNoveltyScore?: true
    lineageScore?: true
  }

  export type AgentSumAggregateInputType = {
    citationScore?: true
    collaborationScore?: true
    personalNoveltyScore?: true
    lineageScore?: true
  }

  export type AgentMinAggregateInputType = {
    id?: true
    userId?: true
    apiKeyId?: true
    name?: true
    description?: true
    webhookUrl?: true
    cronSchedule?: true
    status?: true
    role?: true
    citationScore?: true
    collaborationScore?: true
    personalNoveltyScore?: true
    lineageScore?: true
    lastActiveAt?: true
    createdAt?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    userId?: true
    apiKeyId?: true
    name?: true
    description?: true
    webhookUrl?: true
    cronSchedule?: true
    status?: true
    role?: true
    citationScore?: true
    collaborationScore?: true
    personalNoveltyScore?: true
    lineageScore?: true
    lastActiveAt?: true
    createdAt?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    userId?: true
    apiKeyId?: true
    name?: true
    description?: true
    webhookUrl?: true
    cronSchedule?: true
    status?: true
    role?: true
    citationScore?: true
    collaborationScore?: true
    personalNoveltyScore?: true
    lineageScore?: true
    lastActiveAt?: true
    createdAt?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _avg?: AgentAvgAggregateInputType
    _sum?: AgentSumAggregateInputType
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    userId: string
    apiKeyId: string
    name: string
    description: string | null
    webhookUrl: string | null
    cronSchedule: string | null
    status: $Enums.AgentStatus
    role: $Enums.AgentRole
    citationScore: number
    collaborationScore: number
    personalNoveltyScore: number
    lineageScore: number
    lastActiveAt: Date | null
    createdAt: Date
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    apiKeyId?: boolean
    name?: boolean
    description?: boolean
    webhookUrl?: boolean
    cronSchedule?: boolean
    status?: boolean
    role?: boolean
    citationScore?: boolean
    collaborationScore?: boolean
    personalNoveltyScore?: boolean
    lineageScore?: boolean
    lastActiveAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apiKey?: boolean | Agent$apiKeyArgs<ExtArgs>
    artifacts?: boolean | Agent$artifactsArgs<ExtArgs>
    artifactTags?: boolean | Agent$artifactTagsArgs<ExtArgs>
    webhookDeliveries?: boolean | Agent$webhookDeliveriesArgs<ExtArgs>
    turns?: boolean | Agent$turnsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    apiKeyId?: boolean
    name?: boolean
    description?: boolean
    webhookUrl?: boolean
    cronSchedule?: boolean
    status?: boolean
    role?: boolean
    citationScore?: boolean
    collaborationScore?: boolean
    personalNoveltyScore?: boolean
    lineageScore?: boolean
    lastActiveAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    apiKeyId?: boolean
    name?: boolean
    description?: boolean
    webhookUrl?: boolean
    cronSchedule?: boolean
    status?: boolean
    role?: boolean
    citationScore?: boolean
    collaborationScore?: boolean
    personalNoveltyScore?: boolean
    lineageScore?: boolean
    lastActiveAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    userId?: boolean
    apiKeyId?: boolean
    name?: boolean
    description?: boolean
    webhookUrl?: boolean
    cronSchedule?: boolean
    status?: boolean
    role?: boolean
    citationScore?: boolean
    collaborationScore?: boolean
    personalNoveltyScore?: boolean
    lineageScore?: boolean
    lastActiveAt?: boolean
    createdAt?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "apiKeyId" | "name" | "description" | "webhookUrl" | "cronSchedule" | "status" | "role" | "citationScore" | "collaborationScore" | "personalNoveltyScore" | "lineageScore" | "lastActiveAt" | "createdAt", ExtArgs["result"]["agent"]>
  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apiKey?: boolean | Agent$apiKeyArgs<ExtArgs>
    artifacts?: boolean | Agent$artifactsArgs<ExtArgs>
    artifactTags?: boolean | Agent$artifactTagsArgs<ExtArgs>
    webhookDeliveries?: boolean | Agent$webhookDeliveriesArgs<ExtArgs>
    turns?: boolean | Agent$turnsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AgentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      apiKey: Prisma.$ApiKeyPayload<ExtArgs> | null
      artifacts: Prisma.$ArtifactPayload<ExtArgs>[]
      artifactTags: Prisma.$ArtifactTagPayload<ExtArgs>[]
      webhookDeliveries: Prisma.$WebhookDeliveryPayload<ExtArgs>[]
      turns: Prisma.$TurnPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      apiKeyId: string
      name: string
      description: string | null
      webhookUrl: string | null
      cronSchedule: string | null
      status: $Enums.AgentStatus
      role: $Enums.AgentRole
      citationScore: number
      collaborationScore: number
      personalNoveltyScore: number
      lineageScore: number
      lastActiveAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {AgentUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgentUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
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
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apiKey<T extends Agent$apiKeyArgs<ExtArgs> = {}>(args?: Subset<T, Agent$apiKeyArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    artifacts<T extends Agent$artifactsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$artifactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    artifactTags<T extends Agent$artifactTagsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$artifactTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    webhookDeliveries<T extends Agent$webhookDeliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Agent$webhookDeliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turns<T extends Agent$turnsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$turnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly userId: FieldRef<"Agent", 'String'>
    readonly apiKeyId: FieldRef<"Agent", 'String'>
    readonly name: FieldRef<"Agent", 'String'>
    readonly description: FieldRef<"Agent", 'String'>
    readonly webhookUrl: FieldRef<"Agent", 'String'>
    readonly cronSchedule: FieldRef<"Agent", 'String'>
    readonly status: FieldRef<"Agent", 'AgentStatus'>
    readonly role: FieldRef<"Agent", 'AgentRole'>
    readonly citationScore: FieldRef<"Agent", 'Float'>
    readonly collaborationScore: FieldRef<"Agent", 'Float'>
    readonly personalNoveltyScore: FieldRef<"Agent", 'Float'>
    readonly lineageScore: FieldRef<"Agent", 'Float'>
    readonly lastActiveAt: FieldRef<"Agent", 'DateTime'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent updateManyAndReturn
   */
  export type AgentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent.apiKey
   */
  export type Agent$apiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
  }

  /**
   * Agent.artifacts
   */
  export type Agent$artifactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    where?: ArtifactWhereInput
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    cursor?: ArtifactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Agent.artifactTags
   */
  export type Agent$artifactTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
    where?: ArtifactTagWhereInput
    orderBy?: ArtifactTagOrderByWithRelationInput | ArtifactTagOrderByWithRelationInput[]
    cursor?: ArtifactTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtifactTagScalarFieldEnum | ArtifactTagScalarFieldEnum[]
  }

  /**
   * Agent.webhookDeliveries
   */
  export type Agent$webhookDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    where?: WebhookDeliveryWhereInput
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    cursor?: WebhookDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * Agent.turns
   */
  export type Agent$turnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    where?: TurnWhereInput
    orderBy?: TurnOrderByWithRelationInput | TurnOrderByWithRelationInput[]
    cursor?: TurnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnScalarFieldEnum | TurnScalarFieldEnum[]
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model Artifact
   */

  export type AggregateArtifact = {
    _count: ArtifactCountAggregateOutputType | null
    _avg: ArtifactAvgAggregateOutputType | null
    _sum: ArtifactSumAggregateOutputType | null
    _min: ArtifactMinAggregateOutputType | null
    _max: ArtifactMaxAggregateOutputType | null
  }

  export type ArtifactAvgAggregateOutputType = {
    personalNoveltyScore: number | null
    networkNoveltyScore: number | null
  }

  export type ArtifactSumAggregateOutputType = {
    personalNoveltyScore: number | null
    networkNoveltyScore: number | null
  }

  export type ArtifactMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    type: $Enums.ArtifactType | null
    typeLabel: string | null
    title: string | null
    parentArtifactId: string | null
    personalNoveltyScore: number | null
    networkNoveltyScore: number | null
    createdAt: Date | null
  }

  export type ArtifactMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    type: $Enums.ArtifactType | null
    typeLabel: string | null
    title: string | null
    parentArtifactId: string | null
    personalNoveltyScore: number | null
    networkNoveltyScore: number | null
    createdAt: Date | null
  }

  export type ArtifactCountAggregateOutputType = {
    id: number
    agentId: number
    type: number
    typeLabel: number
    title: number
    content: number
    parentArtifactId: number
    personalNoveltyScore: number
    networkNoveltyScore: number
    createdAt: number
    _all: number
  }


  export type ArtifactAvgAggregateInputType = {
    personalNoveltyScore?: true
    networkNoveltyScore?: true
  }

  export type ArtifactSumAggregateInputType = {
    personalNoveltyScore?: true
    networkNoveltyScore?: true
  }

  export type ArtifactMinAggregateInputType = {
    id?: true
    agentId?: true
    type?: true
    typeLabel?: true
    title?: true
    parentArtifactId?: true
    personalNoveltyScore?: true
    networkNoveltyScore?: true
    createdAt?: true
  }

  export type ArtifactMaxAggregateInputType = {
    id?: true
    agentId?: true
    type?: true
    typeLabel?: true
    title?: true
    parentArtifactId?: true
    personalNoveltyScore?: true
    networkNoveltyScore?: true
    createdAt?: true
  }

  export type ArtifactCountAggregateInputType = {
    id?: true
    agentId?: true
    type?: true
    typeLabel?: true
    title?: true
    content?: true
    parentArtifactId?: true
    personalNoveltyScore?: true
    networkNoveltyScore?: true
    createdAt?: true
    _all?: true
  }

  export type ArtifactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artifact to aggregate.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artifacts
    **/
    _count?: true | ArtifactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtifactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtifactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtifactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtifactMaxAggregateInputType
  }

  export type GetArtifactAggregateType<T extends ArtifactAggregateArgs> = {
        [P in keyof T & keyof AggregateArtifact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtifact[P]>
      : GetScalarType<T[P], AggregateArtifact[P]>
  }




  export type ArtifactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactWhereInput
    orderBy?: ArtifactOrderByWithAggregationInput | ArtifactOrderByWithAggregationInput[]
    by: ArtifactScalarFieldEnum[] | ArtifactScalarFieldEnum
    having?: ArtifactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtifactCountAggregateInputType | true
    _avg?: ArtifactAvgAggregateInputType
    _sum?: ArtifactSumAggregateInputType
    _min?: ArtifactMinAggregateInputType
    _max?: ArtifactMaxAggregateInputType
  }

  export type ArtifactGroupByOutputType = {
    id: string
    agentId: string
    type: $Enums.ArtifactType
    typeLabel: string | null
    title: string
    content: JsonValue
    parentArtifactId: string | null
    personalNoveltyScore: number
    networkNoveltyScore: number
    createdAt: Date
    _count: ArtifactCountAggregateOutputType | null
    _avg: ArtifactAvgAggregateOutputType | null
    _sum: ArtifactSumAggregateOutputType | null
    _min: ArtifactMinAggregateOutputType | null
    _max: ArtifactMaxAggregateOutputType | null
  }

  type GetArtifactGroupByPayload<T extends ArtifactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtifactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtifactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtifactGroupByOutputType[P]>
            : GetScalarType<T[P], ArtifactGroupByOutputType[P]>
        }
      >
    >


  export type ArtifactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    type?: boolean
    typeLabel?: boolean
    title?: boolean
    content?: boolean
    parentArtifactId?: boolean
    personalNoveltyScore?: boolean
    networkNoveltyScore?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    parent?: boolean | Artifact$parentArgs<ExtArgs>
    replies?: boolean | Artifact$repliesArgs<ExtArgs>
    outgoingRelations?: boolean | Artifact$outgoingRelationsArgs<ExtArgs>
    incomingRelations?: boolean | Artifact$incomingRelationsArgs<ExtArgs>
    tags?: boolean | Artifact$tagsArgs<ExtArgs>
    turn?: boolean | Artifact$turnArgs<ExtArgs>
    _count?: boolean | ArtifactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artifact"]>

  export type ArtifactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    type?: boolean
    typeLabel?: boolean
    title?: boolean
    content?: boolean
    parentArtifactId?: boolean
    personalNoveltyScore?: boolean
    networkNoveltyScore?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    parent?: boolean | Artifact$parentArgs<ExtArgs>
  }, ExtArgs["result"]["artifact"]>

  export type ArtifactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    type?: boolean
    typeLabel?: boolean
    title?: boolean
    content?: boolean
    parentArtifactId?: boolean
    personalNoveltyScore?: boolean
    networkNoveltyScore?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    parent?: boolean | Artifact$parentArgs<ExtArgs>
  }, ExtArgs["result"]["artifact"]>

  export type ArtifactSelectScalar = {
    id?: boolean
    agentId?: boolean
    type?: boolean
    typeLabel?: boolean
    title?: boolean
    content?: boolean
    parentArtifactId?: boolean
    personalNoveltyScore?: boolean
    networkNoveltyScore?: boolean
    createdAt?: boolean
  }

  export type ArtifactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "type" | "typeLabel" | "title" | "content" | "parentArtifactId" | "personalNoveltyScore" | "networkNoveltyScore" | "createdAt", ExtArgs["result"]["artifact"]>
  export type ArtifactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    parent?: boolean | Artifact$parentArgs<ExtArgs>
    replies?: boolean | Artifact$repliesArgs<ExtArgs>
    outgoingRelations?: boolean | Artifact$outgoingRelationsArgs<ExtArgs>
    incomingRelations?: boolean | Artifact$incomingRelationsArgs<ExtArgs>
    tags?: boolean | Artifact$tagsArgs<ExtArgs>
    turn?: boolean | Artifact$turnArgs<ExtArgs>
    _count?: boolean | ArtifactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtifactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    parent?: boolean | Artifact$parentArgs<ExtArgs>
  }
  export type ArtifactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    parent?: boolean | Artifact$parentArgs<ExtArgs>
  }

  export type $ArtifactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artifact"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
      parent: Prisma.$ArtifactPayload<ExtArgs> | null
      replies: Prisma.$ArtifactPayload<ExtArgs>[]
      outgoingRelations: Prisma.$ArtifactRelationshipPayload<ExtArgs>[]
      incomingRelations: Prisma.$ArtifactRelationshipPayload<ExtArgs>[]
      tags: Prisma.$ArtifactTagPayload<ExtArgs>[]
      turn: Prisma.$TurnPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      type: $Enums.ArtifactType
      typeLabel: string | null
      title: string
      content: Prisma.JsonValue
      parentArtifactId: string | null
      personalNoveltyScore: number
      networkNoveltyScore: number
      createdAt: Date
    }, ExtArgs["result"]["artifact"]>
    composites: {}
  }

  type ArtifactGetPayload<S extends boolean | null | undefined | ArtifactDefaultArgs> = $Result.GetResult<Prisma.$ArtifactPayload, S>

  type ArtifactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtifactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtifactCountAggregateInputType | true
    }

  export interface ArtifactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artifact'], meta: { name: 'Artifact' } }
    /**
     * Find zero or one Artifact that matches the filter.
     * @param {ArtifactFindUniqueArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtifactFindUniqueArgs>(args: SelectSubset<T, ArtifactFindUniqueArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artifact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtifactFindUniqueOrThrowArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtifactFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtifactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artifact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactFindFirstArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtifactFindFirstArgs>(args?: SelectSubset<T, ArtifactFindFirstArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artifact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactFindFirstOrThrowArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtifactFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtifactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artifacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artifacts
     * const artifacts = await prisma.artifact.findMany()
     * 
     * // Get first 10 Artifacts
     * const artifacts = await prisma.artifact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artifactWithIdOnly = await prisma.artifact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtifactFindManyArgs>(args?: SelectSubset<T, ArtifactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artifact.
     * @param {ArtifactCreateArgs} args - Arguments to create a Artifact.
     * @example
     * // Create one Artifact
     * const Artifact = await prisma.artifact.create({
     *   data: {
     *     // ... data to create a Artifact
     *   }
     * })
     * 
     */
    create<T extends ArtifactCreateArgs>(args: SelectSubset<T, ArtifactCreateArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artifacts.
     * @param {ArtifactCreateManyArgs} args - Arguments to create many Artifacts.
     * @example
     * // Create many Artifacts
     * const artifact = await prisma.artifact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtifactCreateManyArgs>(args?: SelectSubset<T, ArtifactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artifacts and returns the data saved in the database.
     * @param {ArtifactCreateManyAndReturnArgs} args - Arguments to create many Artifacts.
     * @example
     * // Create many Artifacts
     * const artifact = await prisma.artifact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artifacts and only return the `id`
     * const artifactWithIdOnly = await prisma.artifact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtifactCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtifactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artifact.
     * @param {ArtifactDeleteArgs} args - Arguments to delete one Artifact.
     * @example
     * // Delete one Artifact
     * const Artifact = await prisma.artifact.delete({
     *   where: {
     *     // ... filter to delete one Artifact
     *   }
     * })
     * 
     */
    delete<T extends ArtifactDeleteArgs>(args: SelectSubset<T, ArtifactDeleteArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artifact.
     * @param {ArtifactUpdateArgs} args - Arguments to update one Artifact.
     * @example
     * // Update one Artifact
     * const artifact = await prisma.artifact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtifactUpdateArgs>(args: SelectSubset<T, ArtifactUpdateArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artifacts.
     * @param {ArtifactDeleteManyArgs} args - Arguments to filter Artifacts to delete.
     * @example
     * // Delete a few Artifacts
     * const { count } = await prisma.artifact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtifactDeleteManyArgs>(args?: SelectSubset<T, ArtifactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artifacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artifacts
     * const artifact = await prisma.artifact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtifactUpdateManyArgs>(args: SelectSubset<T, ArtifactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artifacts and returns the data updated in the database.
     * @param {ArtifactUpdateManyAndReturnArgs} args - Arguments to update many Artifacts.
     * @example
     * // Update many Artifacts
     * const artifact = await prisma.artifact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artifacts and only return the `id`
     * const artifactWithIdOnly = await prisma.artifact.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtifactUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtifactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artifact.
     * @param {ArtifactUpsertArgs} args - Arguments to update or create a Artifact.
     * @example
     * // Update or create a Artifact
     * const artifact = await prisma.artifact.upsert({
     *   create: {
     *     // ... data to create a Artifact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artifact we want to update
     *   }
     * })
     */
    upsert<T extends ArtifactUpsertArgs>(args: SelectSubset<T, ArtifactUpsertArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artifacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactCountArgs} args - Arguments to filter Artifacts to count.
     * @example
     * // Count the number of Artifacts
     * const count = await prisma.artifact.count({
     *   where: {
     *     // ... the filter for the Artifacts we want to count
     *   }
     * })
    **/
    count<T extends ArtifactCountArgs>(
      args?: Subset<T, ArtifactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtifactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artifact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtifactAggregateArgs>(args: Subset<T, ArtifactAggregateArgs>): Prisma.PrismaPromise<GetArtifactAggregateType<T>>

    /**
     * Group by Artifact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactGroupByArgs} args - Group by arguments.
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
      T extends ArtifactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtifactGroupByArgs['orderBy'] }
        : { orderBy?: ArtifactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtifactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtifactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artifact model
   */
  readonly fields: ArtifactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artifact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtifactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Artifact$parentArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$parentArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Artifact$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outgoingRelations<T extends Artifact$outgoingRelationsArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$outgoingRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomingRelations<T extends Artifact$incomingRelationsArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$incomingRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Artifact$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turn<T extends Artifact$turnArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$turnArgs<ExtArgs>>): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Artifact model
   */
  interface ArtifactFieldRefs {
    readonly id: FieldRef<"Artifact", 'String'>
    readonly agentId: FieldRef<"Artifact", 'String'>
    readonly type: FieldRef<"Artifact", 'ArtifactType'>
    readonly typeLabel: FieldRef<"Artifact", 'String'>
    readonly title: FieldRef<"Artifact", 'String'>
    readonly content: FieldRef<"Artifact", 'Json'>
    readonly parentArtifactId: FieldRef<"Artifact", 'String'>
    readonly personalNoveltyScore: FieldRef<"Artifact", 'Float'>
    readonly networkNoveltyScore: FieldRef<"Artifact", 'Float'>
    readonly createdAt: FieldRef<"Artifact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artifact findUnique
   */
  export type ArtifactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact findUniqueOrThrow
   */
  export type ArtifactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact findFirst
   */
  export type ArtifactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artifacts.
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artifacts.
     */
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact findFirstOrThrow
   */
  export type ArtifactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artifacts.
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artifacts.
     */
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact findMany
   */
  export type ArtifactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifacts to fetch.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artifacts.
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact create
   */
  export type ArtifactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * The data needed to create a Artifact.
     */
    data: XOR<ArtifactCreateInput, ArtifactUncheckedCreateInput>
  }

  /**
   * Artifact createMany
   */
  export type ArtifactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artifacts.
     */
    data: ArtifactCreateManyInput | ArtifactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artifact createManyAndReturn
   */
  export type ArtifactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * The data used to create many Artifacts.
     */
    data: ArtifactCreateManyInput | ArtifactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Artifact update
   */
  export type ArtifactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * The data needed to update a Artifact.
     */
    data: XOR<ArtifactUpdateInput, ArtifactUncheckedUpdateInput>
    /**
     * Choose, which Artifact to update.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact updateMany
   */
  export type ArtifactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artifacts.
     */
    data: XOR<ArtifactUpdateManyMutationInput, ArtifactUncheckedUpdateManyInput>
    /**
     * Filter which Artifacts to update
     */
    where?: ArtifactWhereInput
    /**
     * Limit how many Artifacts to update.
     */
    limit?: number
  }

  /**
   * Artifact updateManyAndReturn
   */
  export type ArtifactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * The data used to update Artifacts.
     */
    data: XOR<ArtifactUpdateManyMutationInput, ArtifactUncheckedUpdateManyInput>
    /**
     * Filter which Artifacts to update
     */
    where?: ArtifactWhereInput
    /**
     * Limit how many Artifacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Artifact upsert
   */
  export type ArtifactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * The filter to search for the Artifact to update in case it exists.
     */
    where: ArtifactWhereUniqueInput
    /**
     * In case the Artifact found by the `where` argument doesn't exist, create a new Artifact with this data.
     */
    create: XOR<ArtifactCreateInput, ArtifactUncheckedCreateInput>
    /**
     * In case the Artifact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtifactUpdateInput, ArtifactUncheckedUpdateInput>
  }

  /**
   * Artifact delete
   */
  export type ArtifactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter which Artifact to delete.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact deleteMany
   */
  export type ArtifactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artifacts to delete
     */
    where?: ArtifactWhereInput
    /**
     * Limit how many Artifacts to delete.
     */
    limit?: number
  }

  /**
   * Artifact.parent
   */
  export type Artifact$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    where?: ArtifactWhereInput
  }

  /**
   * Artifact.replies
   */
  export type Artifact$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    where?: ArtifactWhereInput
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    cursor?: ArtifactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact.outgoingRelations
   */
  export type Artifact$outgoingRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipInclude<ExtArgs> | null
    where?: ArtifactRelationshipWhereInput
    orderBy?: ArtifactRelationshipOrderByWithRelationInput | ArtifactRelationshipOrderByWithRelationInput[]
    cursor?: ArtifactRelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtifactRelationshipScalarFieldEnum | ArtifactRelationshipScalarFieldEnum[]
  }

  /**
   * Artifact.incomingRelations
   */
  export type Artifact$incomingRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipInclude<ExtArgs> | null
    where?: ArtifactRelationshipWhereInput
    orderBy?: ArtifactRelationshipOrderByWithRelationInput | ArtifactRelationshipOrderByWithRelationInput[]
    cursor?: ArtifactRelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtifactRelationshipScalarFieldEnum | ArtifactRelationshipScalarFieldEnum[]
  }

  /**
   * Artifact.tags
   */
  export type Artifact$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
    where?: ArtifactTagWhereInput
    orderBy?: ArtifactTagOrderByWithRelationInput | ArtifactTagOrderByWithRelationInput[]
    cursor?: ArtifactTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtifactTagScalarFieldEnum | ArtifactTagScalarFieldEnum[]
  }

  /**
   * Artifact.turn
   */
  export type Artifact$turnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    where?: TurnWhereInput
  }

  /**
   * Artifact without action
   */
  export type ArtifactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
  }


  /**
   * Model Turn
   */

  export type AggregateTurn = {
    _count: TurnCountAggregateOutputType | null
    _min: TurnMinAggregateOutputType | null
    _max: TurnMaxAggregateOutputType | null
  }

  export type TurnMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    token: string | null
    systemPrompt: string | null
    status: $Enums.TurnStatus | null
    expiresAt: Date | null
    submittedAt: Date | null
    artifactId: string | null
    createdAt: Date | null
  }

  export type TurnMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    token: string | null
    systemPrompt: string | null
    status: $Enums.TurnStatus | null
    expiresAt: Date | null
    submittedAt: Date | null
    artifactId: string | null
    createdAt: Date | null
  }

  export type TurnCountAggregateOutputType = {
    id: number
    agentId: number
    token: number
    systemPrompt: number
    contextSnapshot: number
    status: number
    expiresAt: number
    submittedAt: number
    artifactId: number
    createdAt: number
    _all: number
  }


  export type TurnMinAggregateInputType = {
    id?: true
    agentId?: true
    token?: true
    systemPrompt?: true
    status?: true
    expiresAt?: true
    submittedAt?: true
    artifactId?: true
    createdAt?: true
  }

  export type TurnMaxAggregateInputType = {
    id?: true
    agentId?: true
    token?: true
    systemPrompt?: true
    status?: true
    expiresAt?: true
    submittedAt?: true
    artifactId?: true
    createdAt?: true
  }

  export type TurnCountAggregateInputType = {
    id?: true
    agentId?: true
    token?: true
    systemPrompt?: true
    contextSnapshot?: true
    status?: true
    expiresAt?: true
    submittedAt?: true
    artifactId?: true
    createdAt?: true
    _all?: true
  }

  export type TurnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turn to aggregate.
     */
    where?: TurnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turns to fetch.
     */
    orderBy?: TurnOrderByWithRelationInput | TurnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turns
    **/
    _count?: true | TurnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnMaxAggregateInputType
  }

  export type GetTurnAggregateType<T extends TurnAggregateArgs> = {
        [P in keyof T & keyof AggregateTurn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurn[P]>
      : GetScalarType<T[P], AggregateTurn[P]>
  }




  export type TurnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnWhereInput
    orderBy?: TurnOrderByWithAggregationInput | TurnOrderByWithAggregationInput[]
    by: TurnScalarFieldEnum[] | TurnScalarFieldEnum
    having?: TurnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnCountAggregateInputType | true
    _min?: TurnMinAggregateInputType
    _max?: TurnMaxAggregateInputType
  }

  export type TurnGroupByOutputType = {
    id: string
    agentId: string
    token: string
    systemPrompt: string
    contextSnapshot: JsonValue
    status: $Enums.TurnStatus
    expiresAt: Date
    submittedAt: Date | null
    artifactId: string | null
    createdAt: Date
    _count: TurnCountAggregateOutputType | null
    _min: TurnMinAggregateOutputType | null
    _max: TurnMaxAggregateOutputType | null
  }

  type GetTurnGroupByPayload<T extends TurnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnGroupByOutputType[P]>
            : GetScalarType<T[P], TurnGroupByOutputType[P]>
        }
      >
    >


  export type TurnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    token?: boolean
    systemPrompt?: boolean
    contextSnapshot?: boolean
    status?: boolean
    expiresAt?: boolean
    submittedAt?: boolean
    artifactId?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    artifact?: boolean | Turn$artifactArgs<ExtArgs>
  }, ExtArgs["result"]["turn"]>

  export type TurnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    token?: boolean
    systemPrompt?: boolean
    contextSnapshot?: boolean
    status?: boolean
    expiresAt?: boolean
    submittedAt?: boolean
    artifactId?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    artifact?: boolean | Turn$artifactArgs<ExtArgs>
  }, ExtArgs["result"]["turn"]>

  export type TurnSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    token?: boolean
    systemPrompt?: boolean
    contextSnapshot?: boolean
    status?: boolean
    expiresAt?: boolean
    submittedAt?: boolean
    artifactId?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    artifact?: boolean | Turn$artifactArgs<ExtArgs>
  }, ExtArgs["result"]["turn"]>

  export type TurnSelectScalar = {
    id?: boolean
    agentId?: boolean
    token?: boolean
    systemPrompt?: boolean
    contextSnapshot?: boolean
    status?: boolean
    expiresAt?: boolean
    submittedAt?: boolean
    artifactId?: boolean
    createdAt?: boolean
  }

  export type TurnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "token" | "systemPrompt" | "contextSnapshot" | "status" | "expiresAt" | "submittedAt" | "artifactId" | "createdAt", ExtArgs["result"]["turn"]>
  export type TurnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    artifact?: boolean | Turn$artifactArgs<ExtArgs>
  }
  export type TurnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    artifact?: boolean | Turn$artifactArgs<ExtArgs>
  }
  export type TurnIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    artifact?: boolean | Turn$artifactArgs<ExtArgs>
  }

  export type $TurnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turn"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
      artifact: Prisma.$ArtifactPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      token: string
      systemPrompt: string
      contextSnapshot: Prisma.JsonValue
      status: $Enums.TurnStatus
      expiresAt: Date
      submittedAt: Date | null
      artifactId: string | null
      createdAt: Date
    }, ExtArgs["result"]["turn"]>
    composites: {}
  }

  type TurnGetPayload<S extends boolean | null | undefined | TurnDefaultArgs> = $Result.GetResult<Prisma.$TurnPayload, S>

  type TurnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurnCountAggregateInputType | true
    }

  export interface TurnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turn'], meta: { name: 'Turn' } }
    /**
     * Find zero or one Turn that matches the filter.
     * @param {TurnFindUniqueArgs} args - Arguments to find a Turn
     * @example
     * // Get one Turn
     * const turn = await prisma.turn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurnFindUniqueArgs>(args: SelectSubset<T, TurnFindUniqueArgs<ExtArgs>>): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurnFindUniqueOrThrowArgs} args - Arguments to find a Turn
     * @example
     * // Get one Turn
     * const turn = await prisma.turn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurnFindUniqueOrThrowArgs>(args: SelectSubset<T, TurnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnFindFirstArgs} args - Arguments to find a Turn
     * @example
     * // Get one Turn
     * const turn = await prisma.turn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurnFindFirstArgs>(args?: SelectSubset<T, TurnFindFirstArgs<ExtArgs>>): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnFindFirstOrThrowArgs} args - Arguments to find a Turn
     * @example
     * // Get one Turn
     * const turn = await prisma.turn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurnFindFirstOrThrowArgs>(args?: SelectSubset<T, TurnFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turns
     * const turns = await prisma.turn.findMany()
     * 
     * // Get first 10 Turns
     * const turns = await prisma.turn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnWithIdOnly = await prisma.turn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurnFindManyArgs>(args?: SelectSubset<T, TurnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turn.
     * @param {TurnCreateArgs} args - Arguments to create a Turn.
     * @example
     * // Create one Turn
     * const Turn = await prisma.turn.create({
     *   data: {
     *     // ... data to create a Turn
     *   }
     * })
     * 
     */
    create<T extends TurnCreateArgs>(args: SelectSubset<T, TurnCreateArgs<ExtArgs>>): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turns.
     * @param {TurnCreateManyArgs} args - Arguments to create many Turns.
     * @example
     * // Create many Turns
     * const turn = await prisma.turn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurnCreateManyArgs>(args?: SelectSubset<T, TurnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turns and returns the data saved in the database.
     * @param {TurnCreateManyAndReturnArgs} args - Arguments to create many Turns.
     * @example
     * // Create many Turns
     * const turn = await prisma.turn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turns and only return the `id`
     * const turnWithIdOnly = await prisma.turn.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TurnCreateManyAndReturnArgs>(args?: SelectSubset<T, TurnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Turn.
     * @param {TurnDeleteArgs} args - Arguments to delete one Turn.
     * @example
     * // Delete one Turn
     * const Turn = await prisma.turn.delete({
     *   where: {
     *     // ... filter to delete one Turn
     *   }
     * })
     * 
     */
    delete<T extends TurnDeleteArgs>(args: SelectSubset<T, TurnDeleteArgs<ExtArgs>>): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turn.
     * @param {TurnUpdateArgs} args - Arguments to update one Turn.
     * @example
     * // Update one Turn
     * const turn = await prisma.turn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurnUpdateArgs>(args: SelectSubset<T, TurnUpdateArgs<ExtArgs>>): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turns.
     * @param {TurnDeleteManyArgs} args - Arguments to filter Turns to delete.
     * @example
     * // Delete a few Turns
     * const { count } = await prisma.turn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurnDeleteManyArgs>(args?: SelectSubset<T, TurnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turns
     * const turn = await prisma.turn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurnUpdateManyArgs>(args: SelectSubset<T, TurnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turns and returns the data updated in the database.
     * @param {TurnUpdateManyAndReturnArgs} args - Arguments to update many Turns.
     * @example
     * // Update many Turns
     * const turn = await prisma.turn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Turns and only return the `id`
     * const turnWithIdOnly = await prisma.turn.updateManyAndReturn({
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
    updateManyAndReturn<T extends TurnUpdateManyAndReturnArgs>(args: SelectSubset<T, TurnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Turn.
     * @param {TurnUpsertArgs} args - Arguments to update or create a Turn.
     * @example
     * // Update or create a Turn
     * const turn = await prisma.turn.upsert({
     *   create: {
     *     // ... data to create a Turn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turn we want to update
     *   }
     * })
     */
    upsert<T extends TurnUpsertArgs>(args: SelectSubset<T, TurnUpsertArgs<ExtArgs>>): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnCountArgs} args - Arguments to filter Turns to count.
     * @example
     * // Count the number of Turns
     * const count = await prisma.turn.count({
     *   where: {
     *     // ... the filter for the Turns we want to count
     *   }
     * })
    **/
    count<T extends TurnCountArgs>(
      args?: Subset<T, TurnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurnAggregateArgs>(args: Subset<T, TurnAggregateArgs>): Prisma.PrismaPromise<GetTurnAggregateType<T>>

    /**
     * Group by Turn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnGroupByArgs} args - Group by arguments.
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
      T extends TurnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnGroupByArgs['orderBy'] }
        : { orderBy?: TurnGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TurnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turn model
   */
  readonly fields: TurnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artifact<T extends Turn$artifactArgs<ExtArgs> = {}>(args?: Subset<T, Turn$artifactArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Turn model
   */
  interface TurnFieldRefs {
    readonly id: FieldRef<"Turn", 'String'>
    readonly agentId: FieldRef<"Turn", 'String'>
    readonly token: FieldRef<"Turn", 'String'>
    readonly systemPrompt: FieldRef<"Turn", 'String'>
    readonly contextSnapshot: FieldRef<"Turn", 'Json'>
    readonly status: FieldRef<"Turn", 'TurnStatus'>
    readonly expiresAt: FieldRef<"Turn", 'DateTime'>
    readonly submittedAt: FieldRef<"Turn", 'DateTime'>
    readonly artifactId: FieldRef<"Turn", 'String'>
    readonly createdAt: FieldRef<"Turn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Turn findUnique
   */
  export type TurnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * Filter, which Turn to fetch.
     */
    where: TurnWhereUniqueInput
  }

  /**
   * Turn findUniqueOrThrow
   */
  export type TurnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * Filter, which Turn to fetch.
     */
    where: TurnWhereUniqueInput
  }

  /**
   * Turn findFirst
   */
  export type TurnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * Filter, which Turn to fetch.
     */
    where?: TurnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turns to fetch.
     */
    orderBy?: TurnOrderByWithRelationInput | TurnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turns.
     */
    cursor?: TurnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turns.
     */
    distinct?: TurnScalarFieldEnum | TurnScalarFieldEnum[]
  }

  /**
   * Turn findFirstOrThrow
   */
  export type TurnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * Filter, which Turn to fetch.
     */
    where?: TurnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turns to fetch.
     */
    orderBy?: TurnOrderByWithRelationInput | TurnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turns.
     */
    cursor?: TurnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turns.
     */
    distinct?: TurnScalarFieldEnum | TurnScalarFieldEnum[]
  }

  /**
   * Turn findMany
   */
  export type TurnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * Filter, which Turns to fetch.
     */
    where?: TurnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turns to fetch.
     */
    orderBy?: TurnOrderByWithRelationInput | TurnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turns.
     */
    cursor?: TurnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turns.
     */
    skip?: number
    distinct?: TurnScalarFieldEnum | TurnScalarFieldEnum[]
  }

  /**
   * Turn create
   */
  export type TurnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * The data needed to create a Turn.
     */
    data: XOR<TurnCreateInput, TurnUncheckedCreateInput>
  }

  /**
   * Turn createMany
   */
  export type TurnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turns.
     */
    data: TurnCreateManyInput | TurnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turn createManyAndReturn
   */
  export type TurnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * The data used to create many Turns.
     */
    data: TurnCreateManyInput | TurnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turn update
   */
  export type TurnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * The data needed to update a Turn.
     */
    data: XOR<TurnUpdateInput, TurnUncheckedUpdateInput>
    /**
     * Choose, which Turn to update.
     */
    where: TurnWhereUniqueInput
  }

  /**
   * Turn updateMany
   */
  export type TurnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turns.
     */
    data: XOR<TurnUpdateManyMutationInput, TurnUncheckedUpdateManyInput>
    /**
     * Filter which Turns to update
     */
    where?: TurnWhereInput
    /**
     * Limit how many Turns to update.
     */
    limit?: number
  }

  /**
   * Turn updateManyAndReturn
   */
  export type TurnUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * The data used to update Turns.
     */
    data: XOR<TurnUpdateManyMutationInput, TurnUncheckedUpdateManyInput>
    /**
     * Filter which Turns to update
     */
    where?: TurnWhereInput
    /**
     * Limit how many Turns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turn upsert
   */
  export type TurnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * The filter to search for the Turn to update in case it exists.
     */
    where: TurnWhereUniqueInput
    /**
     * In case the Turn found by the `where` argument doesn't exist, create a new Turn with this data.
     */
    create: XOR<TurnCreateInput, TurnUncheckedCreateInput>
    /**
     * In case the Turn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnUpdateInput, TurnUncheckedUpdateInput>
  }

  /**
   * Turn delete
   */
  export type TurnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * Filter which Turn to delete.
     */
    where: TurnWhereUniqueInput
  }

  /**
   * Turn deleteMany
   */
  export type TurnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turns to delete
     */
    where?: TurnWhereInput
    /**
     * Limit how many Turns to delete.
     */
    limit?: number
  }

  /**
   * Turn.artifact
   */
  export type Turn$artifactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    where?: ArtifactWhereInput
  }

  /**
   * Turn without action
   */
  export type TurnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turn
     */
    omit?: TurnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
  }


  /**
   * Model ArtifactRelationship
   */

  export type AggregateArtifactRelationship = {
    _count: ArtifactRelationshipCountAggregateOutputType | null
    _min: ArtifactRelationshipMinAggregateOutputType | null
    _max: ArtifactRelationshipMaxAggregateOutputType | null
  }

  export type ArtifactRelationshipMinAggregateOutputType = {
    id: string | null
    fromArtifactId: string | null
    toArtifactId: string | null
    type: $Enums.RelationshipType | null
  }

  export type ArtifactRelationshipMaxAggregateOutputType = {
    id: string | null
    fromArtifactId: string | null
    toArtifactId: string | null
    type: $Enums.RelationshipType | null
  }

  export type ArtifactRelationshipCountAggregateOutputType = {
    id: number
    fromArtifactId: number
    toArtifactId: number
    type: number
    _all: number
  }


  export type ArtifactRelationshipMinAggregateInputType = {
    id?: true
    fromArtifactId?: true
    toArtifactId?: true
    type?: true
  }

  export type ArtifactRelationshipMaxAggregateInputType = {
    id?: true
    fromArtifactId?: true
    toArtifactId?: true
    type?: true
  }

  export type ArtifactRelationshipCountAggregateInputType = {
    id?: true
    fromArtifactId?: true
    toArtifactId?: true
    type?: true
    _all?: true
  }

  export type ArtifactRelationshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtifactRelationship to aggregate.
     */
    where?: ArtifactRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtifactRelationships to fetch.
     */
    orderBy?: ArtifactRelationshipOrderByWithRelationInput | ArtifactRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtifactRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtifactRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtifactRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtifactRelationships
    **/
    _count?: true | ArtifactRelationshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtifactRelationshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtifactRelationshipMaxAggregateInputType
  }

  export type GetArtifactRelationshipAggregateType<T extends ArtifactRelationshipAggregateArgs> = {
        [P in keyof T & keyof AggregateArtifactRelationship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtifactRelationship[P]>
      : GetScalarType<T[P], AggregateArtifactRelationship[P]>
  }




  export type ArtifactRelationshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactRelationshipWhereInput
    orderBy?: ArtifactRelationshipOrderByWithAggregationInput | ArtifactRelationshipOrderByWithAggregationInput[]
    by: ArtifactRelationshipScalarFieldEnum[] | ArtifactRelationshipScalarFieldEnum
    having?: ArtifactRelationshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtifactRelationshipCountAggregateInputType | true
    _min?: ArtifactRelationshipMinAggregateInputType
    _max?: ArtifactRelationshipMaxAggregateInputType
  }

  export type ArtifactRelationshipGroupByOutputType = {
    id: string
    fromArtifactId: string
    toArtifactId: string
    type: $Enums.RelationshipType
    _count: ArtifactRelationshipCountAggregateOutputType | null
    _min: ArtifactRelationshipMinAggregateOutputType | null
    _max: ArtifactRelationshipMaxAggregateOutputType | null
  }

  type GetArtifactRelationshipGroupByPayload<T extends ArtifactRelationshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtifactRelationshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtifactRelationshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtifactRelationshipGroupByOutputType[P]>
            : GetScalarType<T[P], ArtifactRelationshipGroupByOutputType[P]>
        }
      >
    >


  export type ArtifactRelationshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromArtifactId?: boolean
    toArtifactId?: boolean
    type?: boolean
    from?: boolean | ArtifactDefaultArgs<ExtArgs>
    to?: boolean | ArtifactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artifactRelationship"]>

  export type ArtifactRelationshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromArtifactId?: boolean
    toArtifactId?: boolean
    type?: boolean
    from?: boolean | ArtifactDefaultArgs<ExtArgs>
    to?: boolean | ArtifactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artifactRelationship"]>

  export type ArtifactRelationshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromArtifactId?: boolean
    toArtifactId?: boolean
    type?: boolean
    from?: boolean | ArtifactDefaultArgs<ExtArgs>
    to?: boolean | ArtifactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artifactRelationship"]>

  export type ArtifactRelationshipSelectScalar = {
    id?: boolean
    fromArtifactId?: boolean
    toArtifactId?: boolean
    type?: boolean
  }

  export type ArtifactRelationshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromArtifactId" | "toArtifactId" | "type", ExtArgs["result"]["artifactRelationship"]>
  export type ArtifactRelationshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | ArtifactDefaultArgs<ExtArgs>
    to?: boolean | ArtifactDefaultArgs<ExtArgs>
  }
  export type ArtifactRelationshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | ArtifactDefaultArgs<ExtArgs>
    to?: boolean | ArtifactDefaultArgs<ExtArgs>
  }
  export type ArtifactRelationshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | ArtifactDefaultArgs<ExtArgs>
    to?: boolean | ArtifactDefaultArgs<ExtArgs>
  }

  export type $ArtifactRelationshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtifactRelationship"
    objects: {
      from: Prisma.$ArtifactPayload<ExtArgs>
      to: Prisma.$ArtifactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromArtifactId: string
      toArtifactId: string
      type: $Enums.RelationshipType
    }, ExtArgs["result"]["artifactRelationship"]>
    composites: {}
  }

  type ArtifactRelationshipGetPayload<S extends boolean | null | undefined | ArtifactRelationshipDefaultArgs> = $Result.GetResult<Prisma.$ArtifactRelationshipPayload, S>

  type ArtifactRelationshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtifactRelationshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtifactRelationshipCountAggregateInputType | true
    }

  export interface ArtifactRelationshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtifactRelationship'], meta: { name: 'ArtifactRelationship' } }
    /**
     * Find zero or one ArtifactRelationship that matches the filter.
     * @param {ArtifactRelationshipFindUniqueArgs} args - Arguments to find a ArtifactRelationship
     * @example
     * // Get one ArtifactRelationship
     * const artifactRelationship = await prisma.artifactRelationship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtifactRelationshipFindUniqueArgs>(args: SelectSubset<T, ArtifactRelationshipFindUniqueArgs<ExtArgs>>): Prisma__ArtifactRelationshipClient<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtifactRelationship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtifactRelationshipFindUniqueOrThrowArgs} args - Arguments to find a ArtifactRelationship
     * @example
     * // Get one ArtifactRelationship
     * const artifactRelationship = await prisma.artifactRelationship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtifactRelationshipFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtifactRelationshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtifactRelationshipClient<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtifactRelationship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactRelationshipFindFirstArgs} args - Arguments to find a ArtifactRelationship
     * @example
     * // Get one ArtifactRelationship
     * const artifactRelationship = await prisma.artifactRelationship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtifactRelationshipFindFirstArgs>(args?: SelectSubset<T, ArtifactRelationshipFindFirstArgs<ExtArgs>>): Prisma__ArtifactRelationshipClient<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtifactRelationship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactRelationshipFindFirstOrThrowArgs} args - Arguments to find a ArtifactRelationship
     * @example
     * // Get one ArtifactRelationship
     * const artifactRelationship = await prisma.artifactRelationship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtifactRelationshipFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtifactRelationshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtifactRelationshipClient<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtifactRelationships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactRelationshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtifactRelationships
     * const artifactRelationships = await prisma.artifactRelationship.findMany()
     * 
     * // Get first 10 ArtifactRelationships
     * const artifactRelationships = await prisma.artifactRelationship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artifactRelationshipWithIdOnly = await prisma.artifactRelationship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtifactRelationshipFindManyArgs>(args?: SelectSubset<T, ArtifactRelationshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtifactRelationship.
     * @param {ArtifactRelationshipCreateArgs} args - Arguments to create a ArtifactRelationship.
     * @example
     * // Create one ArtifactRelationship
     * const ArtifactRelationship = await prisma.artifactRelationship.create({
     *   data: {
     *     // ... data to create a ArtifactRelationship
     *   }
     * })
     * 
     */
    create<T extends ArtifactRelationshipCreateArgs>(args: SelectSubset<T, ArtifactRelationshipCreateArgs<ExtArgs>>): Prisma__ArtifactRelationshipClient<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtifactRelationships.
     * @param {ArtifactRelationshipCreateManyArgs} args - Arguments to create many ArtifactRelationships.
     * @example
     * // Create many ArtifactRelationships
     * const artifactRelationship = await prisma.artifactRelationship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtifactRelationshipCreateManyArgs>(args?: SelectSubset<T, ArtifactRelationshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtifactRelationships and returns the data saved in the database.
     * @param {ArtifactRelationshipCreateManyAndReturnArgs} args - Arguments to create many ArtifactRelationships.
     * @example
     * // Create many ArtifactRelationships
     * const artifactRelationship = await prisma.artifactRelationship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtifactRelationships and only return the `id`
     * const artifactRelationshipWithIdOnly = await prisma.artifactRelationship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtifactRelationshipCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtifactRelationshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtifactRelationship.
     * @param {ArtifactRelationshipDeleteArgs} args - Arguments to delete one ArtifactRelationship.
     * @example
     * // Delete one ArtifactRelationship
     * const ArtifactRelationship = await prisma.artifactRelationship.delete({
     *   where: {
     *     // ... filter to delete one ArtifactRelationship
     *   }
     * })
     * 
     */
    delete<T extends ArtifactRelationshipDeleteArgs>(args: SelectSubset<T, ArtifactRelationshipDeleteArgs<ExtArgs>>): Prisma__ArtifactRelationshipClient<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtifactRelationship.
     * @param {ArtifactRelationshipUpdateArgs} args - Arguments to update one ArtifactRelationship.
     * @example
     * // Update one ArtifactRelationship
     * const artifactRelationship = await prisma.artifactRelationship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtifactRelationshipUpdateArgs>(args: SelectSubset<T, ArtifactRelationshipUpdateArgs<ExtArgs>>): Prisma__ArtifactRelationshipClient<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtifactRelationships.
     * @param {ArtifactRelationshipDeleteManyArgs} args - Arguments to filter ArtifactRelationships to delete.
     * @example
     * // Delete a few ArtifactRelationships
     * const { count } = await prisma.artifactRelationship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtifactRelationshipDeleteManyArgs>(args?: SelectSubset<T, ArtifactRelationshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtifactRelationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactRelationshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtifactRelationships
     * const artifactRelationship = await prisma.artifactRelationship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtifactRelationshipUpdateManyArgs>(args: SelectSubset<T, ArtifactRelationshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtifactRelationships and returns the data updated in the database.
     * @param {ArtifactRelationshipUpdateManyAndReturnArgs} args - Arguments to update many ArtifactRelationships.
     * @example
     * // Update many ArtifactRelationships
     * const artifactRelationship = await prisma.artifactRelationship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtifactRelationships and only return the `id`
     * const artifactRelationshipWithIdOnly = await prisma.artifactRelationship.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtifactRelationshipUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtifactRelationshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtifactRelationship.
     * @param {ArtifactRelationshipUpsertArgs} args - Arguments to update or create a ArtifactRelationship.
     * @example
     * // Update or create a ArtifactRelationship
     * const artifactRelationship = await prisma.artifactRelationship.upsert({
     *   create: {
     *     // ... data to create a ArtifactRelationship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtifactRelationship we want to update
     *   }
     * })
     */
    upsert<T extends ArtifactRelationshipUpsertArgs>(args: SelectSubset<T, ArtifactRelationshipUpsertArgs<ExtArgs>>): Prisma__ArtifactRelationshipClient<$Result.GetResult<Prisma.$ArtifactRelationshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtifactRelationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactRelationshipCountArgs} args - Arguments to filter ArtifactRelationships to count.
     * @example
     * // Count the number of ArtifactRelationships
     * const count = await prisma.artifactRelationship.count({
     *   where: {
     *     // ... the filter for the ArtifactRelationships we want to count
     *   }
     * })
    **/
    count<T extends ArtifactRelationshipCountArgs>(
      args?: Subset<T, ArtifactRelationshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtifactRelationshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtifactRelationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactRelationshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtifactRelationshipAggregateArgs>(args: Subset<T, ArtifactRelationshipAggregateArgs>): Prisma.PrismaPromise<GetArtifactRelationshipAggregateType<T>>

    /**
     * Group by ArtifactRelationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactRelationshipGroupByArgs} args - Group by arguments.
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
      T extends ArtifactRelationshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtifactRelationshipGroupByArgs['orderBy'] }
        : { orderBy?: ArtifactRelationshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtifactRelationshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtifactRelationshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtifactRelationship model
   */
  readonly fields: ArtifactRelationshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtifactRelationship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtifactRelationshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from<T extends ArtifactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtifactDefaultArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to<T extends ArtifactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtifactDefaultArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArtifactRelationship model
   */
  interface ArtifactRelationshipFieldRefs {
    readonly id: FieldRef<"ArtifactRelationship", 'String'>
    readonly fromArtifactId: FieldRef<"ArtifactRelationship", 'String'>
    readonly toArtifactId: FieldRef<"ArtifactRelationship", 'String'>
    readonly type: FieldRef<"ArtifactRelationship", 'RelationshipType'>
  }
    

  // Custom InputTypes
  /**
   * ArtifactRelationship findUnique
   */
  export type ArtifactRelationshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactRelationship to fetch.
     */
    where: ArtifactRelationshipWhereUniqueInput
  }

  /**
   * ArtifactRelationship findUniqueOrThrow
   */
  export type ArtifactRelationshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactRelationship to fetch.
     */
    where: ArtifactRelationshipWhereUniqueInput
  }

  /**
   * ArtifactRelationship findFirst
   */
  export type ArtifactRelationshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactRelationship to fetch.
     */
    where?: ArtifactRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtifactRelationships to fetch.
     */
    orderBy?: ArtifactRelationshipOrderByWithRelationInput | ArtifactRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtifactRelationships.
     */
    cursor?: ArtifactRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtifactRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtifactRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtifactRelationships.
     */
    distinct?: ArtifactRelationshipScalarFieldEnum | ArtifactRelationshipScalarFieldEnum[]
  }

  /**
   * ArtifactRelationship findFirstOrThrow
   */
  export type ArtifactRelationshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactRelationship to fetch.
     */
    where?: ArtifactRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtifactRelationships to fetch.
     */
    orderBy?: ArtifactRelationshipOrderByWithRelationInput | ArtifactRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtifactRelationships.
     */
    cursor?: ArtifactRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtifactRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtifactRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtifactRelationships.
     */
    distinct?: ArtifactRelationshipScalarFieldEnum | ArtifactRelationshipScalarFieldEnum[]
  }

  /**
   * ArtifactRelationship findMany
   */
  export type ArtifactRelationshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactRelationships to fetch.
     */
    where?: ArtifactRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtifactRelationships to fetch.
     */
    orderBy?: ArtifactRelationshipOrderByWithRelationInput | ArtifactRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtifactRelationships.
     */
    cursor?: ArtifactRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtifactRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtifactRelationships.
     */
    skip?: number
    distinct?: ArtifactRelationshipScalarFieldEnum | ArtifactRelationshipScalarFieldEnum[]
  }

  /**
   * ArtifactRelationship create
   */
  export type ArtifactRelationshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtifactRelationship.
     */
    data: XOR<ArtifactRelationshipCreateInput, ArtifactRelationshipUncheckedCreateInput>
  }

  /**
   * ArtifactRelationship createMany
   */
  export type ArtifactRelationshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtifactRelationships.
     */
    data: ArtifactRelationshipCreateManyInput | ArtifactRelationshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtifactRelationship createManyAndReturn
   */
  export type ArtifactRelationshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * The data used to create many ArtifactRelationships.
     */
    data: ArtifactRelationshipCreateManyInput | ArtifactRelationshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtifactRelationship update
   */
  export type ArtifactRelationshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtifactRelationship.
     */
    data: XOR<ArtifactRelationshipUpdateInput, ArtifactRelationshipUncheckedUpdateInput>
    /**
     * Choose, which ArtifactRelationship to update.
     */
    where: ArtifactRelationshipWhereUniqueInput
  }

  /**
   * ArtifactRelationship updateMany
   */
  export type ArtifactRelationshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtifactRelationships.
     */
    data: XOR<ArtifactRelationshipUpdateManyMutationInput, ArtifactRelationshipUncheckedUpdateManyInput>
    /**
     * Filter which ArtifactRelationships to update
     */
    where?: ArtifactRelationshipWhereInput
    /**
     * Limit how many ArtifactRelationships to update.
     */
    limit?: number
  }

  /**
   * ArtifactRelationship updateManyAndReturn
   */
  export type ArtifactRelationshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * The data used to update ArtifactRelationships.
     */
    data: XOR<ArtifactRelationshipUpdateManyMutationInput, ArtifactRelationshipUncheckedUpdateManyInput>
    /**
     * Filter which ArtifactRelationships to update
     */
    where?: ArtifactRelationshipWhereInput
    /**
     * Limit how many ArtifactRelationships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtifactRelationship upsert
   */
  export type ArtifactRelationshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtifactRelationship to update in case it exists.
     */
    where: ArtifactRelationshipWhereUniqueInput
    /**
     * In case the ArtifactRelationship found by the `where` argument doesn't exist, create a new ArtifactRelationship with this data.
     */
    create: XOR<ArtifactRelationshipCreateInput, ArtifactRelationshipUncheckedCreateInput>
    /**
     * In case the ArtifactRelationship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtifactRelationshipUpdateInput, ArtifactRelationshipUncheckedUpdateInput>
  }

  /**
   * ArtifactRelationship delete
   */
  export type ArtifactRelationshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipInclude<ExtArgs> | null
    /**
     * Filter which ArtifactRelationship to delete.
     */
    where: ArtifactRelationshipWhereUniqueInput
  }

  /**
   * ArtifactRelationship deleteMany
   */
  export type ArtifactRelationshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtifactRelationships to delete
     */
    where?: ArtifactRelationshipWhereInput
    /**
     * Limit how many ArtifactRelationships to delete.
     */
    limit?: number
  }

  /**
   * ArtifactRelationship without action
   */
  export type ArtifactRelationshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactRelationship
     */
    select?: ArtifactRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactRelationship
     */
    omit?: ArtifactRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactRelationshipInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    artifactTags?: boolean | Tag$artifactTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifactTags?: boolean | Tag$artifactTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      artifactTags: Prisma.$ArtifactTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artifactTags<T extends Tag$artifactTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$artifactTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.artifactTags
   */
  export type Tag$artifactTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
    where?: ArtifactTagWhereInput
    orderBy?: ArtifactTagOrderByWithRelationInput | ArtifactTagOrderByWithRelationInput[]
    cursor?: ArtifactTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtifactTagScalarFieldEnum | ArtifactTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model ArtifactTag
   */

  export type AggregateArtifactTag = {
    _count: ArtifactTagCountAggregateOutputType | null
    _min: ArtifactTagMinAggregateOutputType | null
    _max: ArtifactTagMaxAggregateOutputType | null
  }

  export type ArtifactTagMinAggregateOutputType = {
    artifactId: string | null
    tagId: string | null
    appliedByAgentId: string | null
  }

  export type ArtifactTagMaxAggregateOutputType = {
    artifactId: string | null
    tagId: string | null
    appliedByAgentId: string | null
  }

  export type ArtifactTagCountAggregateOutputType = {
    artifactId: number
    tagId: number
    appliedByAgentId: number
    _all: number
  }


  export type ArtifactTagMinAggregateInputType = {
    artifactId?: true
    tagId?: true
    appliedByAgentId?: true
  }

  export type ArtifactTagMaxAggregateInputType = {
    artifactId?: true
    tagId?: true
    appliedByAgentId?: true
  }

  export type ArtifactTagCountAggregateInputType = {
    artifactId?: true
    tagId?: true
    appliedByAgentId?: true
    _all?: true
  }

  export type ArtifactTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtifactTag to aggregate.
     */
    where?: ArtifactTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtifactTags to fetch.
     */
    orderBy?: ArtifactTagOrderByWithRelationInput | ArtifactTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtifactTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtifactTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtifactTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtifactTags
    **/
    _count?: true | ArtifactTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtifactTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtifactTagMaxAggregateInputType
  }

  export type GetArtifactTagAggregateType<T extends ArtifactTagAggregateArgs> = {
        [P in keyof T & keyof AggregateArtifactTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtifactTag[P]>
      : GetScalarType<T[P], AggregateArtifactTag[P]>
  }




  export type ArtifactTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactTagWhereInput
    orderBy?: ArtifactTagOrderByWithAggregationInput | ArtifactTagOrderByWithAggregationInput[]
    by: ArtifactTagScalarFieldEnum[] | ArtifactTagScalarFieldEnum
    having?: ArtifactTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtifactTagCountAggregateInputType | true
    _min?: ArtifactTagMinAggregateInputType
    _max?: ArtifactTagMaxAggregateInputType
  }

  export type ArtifactTagGroupByOutputType = {
    artifactId: string
    tagId: string
    appliedByAgentId: string
    _count: ArtifactTagCountAggregateOutputType | null
    _min: ArtifactTagMinAggregateOutputType | null
    _max: ArtifactTagMaxAggregateOutputType | null
  }

  type GetArtifactTagGroupByPayload<T extends ArtifactTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtifactTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtifactTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtifactTagGroupByOutputType[P]>
            : GetScalarType<T[P], ArtifactTagGroupByOutputType[P]>
        }
      >
    >


  export type ArtifactTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artifactId?: boolean
    tagId?: boolean
    appliedByAgentId?: boolean
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    appliedBy?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artifactTag"]>

  export type ArtifactTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artifactId?: boolean
    tagId?: boolean
    appliedByAgentId?: boolean
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    appliedBy?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artifactTag"]>

  export type ArtifactTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artifactId?: boolean
    tagId?: boolean
    appliedByAgentId?: boolean
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    appliedBy?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artifactTag"]>

  export type ArtifactTagSelectScalar = {
    artifactId?: boolean
    tagId?: boolean
    appliedByAgentId?: boolean
  }

  export type ArtifactTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"artifactId" | "tagId" | "appliedByAgentId", ExtArgs["result"]["artifactTag"]>
  export type ArtifactTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    appliedBy?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type ArtifactTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    appliedBy?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type ArtifactTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    appliedBy?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $ArtifactTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtifactTag"
    objects: {
      artifact: Prisma.$ArtifactPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
      appliedBy: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      artifactId: string
      tagId: string
      appliedByAgentId: string
    }, ExtArgs["result"]["artifactTag"]>
    composites: {}
  }

  type ArtifactTagGetPayload<S extends boolean | null | undefined | ArtifactTagDefaultArgs> = $Result.GetResult<Prisma.$ArtifactTagPayload, S>

  type ArtifactTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtifactTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtifactTagCountAggregateInputType | true
    }

  export interface ArtifactTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtifactTag'], meta: { name: 'ArtifactTag' } }
    /**
     * Find zero or one ArtifactTag that matches the filter.
     * @param {ArtifactTagFindUniqueArgs} args - Arguments to find a ArtifactTag
     * @example
     * // Get one ArtifactTag
     * const artifactTag = await prisma.artifactTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtifactTagFindUniqueArgs>(args: SelectSubset<T, ArtifactTagFindUniqueArgs<ExtArgs>>): Prisma__ArtifactTagClient<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtifactTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtifactTagFindUniqueOrThrowArgs} args - Arguments to find a ArtifactTag
     * @example
     * // Get one ArtifactTag
     * const artifactTag = await prisma.artifactTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtifactTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtifactTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtifactTagClient<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtifactTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactTagFindFirstArgs} args - Arguments to find a ArtifactTag
     * @example
     * // Get one ArtifactTag
     * const artifactTag = await prisma.artifactTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtifactTagFindFirstArgs>(args?: SelectSubset<T, ArtifactTagFindFirstArgs<ExtArgs>>): Prisma__ArtifactTagClient<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtifactTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactTagFindFirstOrThrowArgs} args - Arguments to find a ArtifactTag
     * @example
     * // Get one ArtifactTag
     * const artifactTag = await prisma.artifactTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtifactTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtifactTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtifactTagClient<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtifactTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtifactTags
     * const artifactTags = await prisma.artifactTag.findMany()
     * 
     * // Get first 10 ArtifactTags
     * const artifactTags = await prisma.artifactTag.findMany({ take: 10 })
     * 
     * // Only select the `artifactId`
     * const artifactTagWithArtifactIdOnly = await prisma.artifactTag.findMany({ select: { artifactId: true } })
     * 
     */
    findMany<T extends ArtifactTagFindManyArgs>(args?: SelectSubset<T, ArtifactTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtifactTag.
     * @param {ArtifactTagCreateArgs} args - Arguments to create a ArtifactTag.
     * @example
     * // Create one ArtifactTag
     * const ArtifactTag = await prisma.artifactTag.create({
     *   data: {
     *     // ... data to create a ArtifactTag
     *   }
     * })
     * 
     */
    create<T extends ArtifactTagCreateArgs>(args: SelectSubset<T, ArtifactTagCreateArgs<ExtArgs>>): Prisma__ArtifactTagClient<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtifactTags.
     * @param {ArtifactTagCreateManyArgs} args - Arguments to create many ArtifactTags.
     * @example
     * // Create many ArtifactTags
     * const artifactTag = await prisma.artifactTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtifactTagCreateManyArgs>(args?: SelectSubset<T, ArtifactTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtifactTags and returns the data saved in the database.
     * @param {ArtifactTagCreateManyAndReturnArgs} args - Arguments to create many ArtifactTags.
     * @example
     * // Create many ArtifactTags
     * const artifactTag = await prisma.artifactTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtifactTags and only return the `artifactId`
     * const artifactTagWithArtifactIdOnly = await prisma.artifactTag.createManyAndReturn({
     *   select: { artifactId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtifactTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtifactTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtifactTag.
     * @param {ArtifactTagDeleteArgs} args - Arguments to delete one ArtifactTag.
     * @example
     * // Delete one ArtifactTag
     * const ArtifactTag = await prisma.artifactTag.delete({
     *   where: {
     *     // ... filter to delete one ArtifactTag
     *   }
     * })
     * 
     */
    delete<T extends ArtifactTagDeleteArgs>(args: SelectSubset<T, ArtifactTagDeleteArgs<ExtArgs>>): Prisma__ArtifactTagClient<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtifactTag.
     * @param {ArtifactTagUpdateArgs} args - Arguments to update one ArtifactTag.
     * @example
     * // Update one ArtifactTag
     * const artifactTag = await prisma.artifactTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtifactTagUpdateArgs>(args: SelectSubset<T, ArtifactTagUpdateArgs<ExtArgs>>): Prisma__ArtifactTagClient<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtifactTags.
     * @param {ArtifactTagDeleteManyArgs} args - Arguments to filter ArtifactTags to delete.
     * @example
     * // Delete a few ArtifactTags
     * const { count } = await prisma.artifactTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtifactTagDeleteManyArgs>(args?: SelectSubset<T, ArtifactTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtifactTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtifactTags
     * const artifactTag = await prisma.artifactTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtifactTagUpdateManyArgs>(args: SelectSubset<T, ArtifactTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtifactTags and returns the data updated in the database.
     * @param {ArtifactTagUpdateManyAndReturnArgs} args - Arguments to update many ArtifactTags.
     * @example
     * // Update many ArtifactTags
     * const artifactTag = await prisma.artifactTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtifactTags and only return the `artifactId`
     * const artifactTagWithArtifactIdOnly = await prisma.artifactTag.updateManyAndReturn({
     *   select: { artifactId: true },
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
    updateManyAndReturn<T extends ArtifactTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtifactTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtifactTag.
     * @param {ArtifactTagUpsertArgs} args - Arguments to update or create a ArtifactTag.
     * @example
     * // Update or create a ArtifactTag
     * const artifactTag = await prisma.artifactTag.upsert({
     *   create: {
     *     // ... data to create a ArtifactTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtifactTag we want to update
     *   }
     * })
     */
    upsert<T extends ArtifactTagUpsertArgs>(args: SelectSubset<T, ArtifactTagUpsertArgs<ExtArgs>>): Prisma__ArtifactTagClient<$Result.GetResult<Prisma.$ArtifactTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtifactTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactTagCountArgs} args - Arguments to filter ArtifactTags to count.
     * @example
     * // Count the number of ArtifactTags
     * const count = await prisma.artifactTag.count({
     *   where: {
     *     // ... the filter for the ArtifactTags we want to count
     *   }
     * })
    **/
    count<T extends ArtifactTagCountArgs>(
      args?: Subset<T, ArtifactTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtifactTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtifactTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtifactTagAggregateArgs>(args: Subset<T, ArtifactTagAggregateArgs>): Prisma.PrismaPromise<GetArtifactTagAggregateType<T>>

    /**
     * Group by ArtifactTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactTagGroupByArgs} args - Group by arguments.
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
      T extends ArtifactTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtifactTagGroupByArgs['orderBy'] }
        : { orderBy?: ArtifactTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtifactTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtifactTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtifactTag model
   */
  readonly fields: ArtifactTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtifactTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtifactTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artifact<T extends ArtifactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtifactDefaultArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appliedBy<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArtifactTag model
   */
  interface ArtifactTagFieldRefs {
    readonly artifactId: FieldRef<"ArtifactTag", 'String'>
    readonly tagId: FieldRef<"ArtifactTag", 'String'>
    readonly appliedByAgentId: FieldRef<"ArtifactTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ArtifactTag findUnique
   */
  export type ArtifactTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactTag to fetch.
     */
    where: ArtifactTagWhereUniqueInput
  }

  /**
   * ArtifactTag findUniqueOrThrow
   */
  export type ArtifactTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactTag to fetch.
     */
    where: ArtifactTagWhereUniqueInput
  }

  /**
   * ArtifactTag findFirst
   */
  export type ArtifactTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactTag to fetch.
     */
    where?: ArtifactTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtifactTags to fetch.
     */
    orderBy?: ArtifactTagOrderByWithRelationInput | ArtifactTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtifactTags.
     */
    cursor?: ArtifactTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtifactTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtifactTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtifactTags.
     */
    distinct?: ArtifactTagScalarFieldEnum | ArtifactTagScalarFieldEnum[]
  }

  /**
   * ArtifactTag findFirstOrThrow
   */
  export type ArtifactTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactTag to fetch.
     */
    where?: ArtifactTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtifactTags to fetch.
     */
    orderBy?: ArtifactTagOrderByWithRelationInput | ArtifactTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtifactTags.
     */
    cursor?: ArtifactTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtifactTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtifactTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtifactTags.
     */
    distinct?: ArtifactTagScalarFieldEnum | ArtifactTagScalarFieldEnum[]
  }

  /**
   * ArtifactTag findMany
   */
  export type ArtifactTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactTags to fetch.
     */
    where?: ArtifactTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtifactTags to fetch.
     */
    orderBy?: ArtifactTagOrderByWithRelationInput | ArtifactTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtifactTags.
     */
    cursor?: ArtifactTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtifactTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtifactTags.
     */
    skip?: number
    distinct?: ArtifactTagScalarFieldEnum | ArtifactTagScalarFieldEnum[]
  }

  /**
   * ArtifactTag create
   */
  export type ArtifactTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtifactTag.
     */
    data: XOR<ArtifactTagCreateInput, ArtifactTagUncheckedCreateInput>
  }

  /**
   * ArtifactTag createMany
   */
  export type ArtifactTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtifactTags.
     */
    data: ArtifactTagCreateManyInput | ArtifactTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtifactTag createManyAndReturn
   */
  export type ArtifactTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * The data used to create many ArtifactTags.
     */
    data: ArtifactTagCreateManyInput | ArtifactTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtifactTag update
   */
  export type ArtifactTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtifactTag.
     */
    data: XOR<ArtifactTagUpdateInput, ArtifactTagUncheckedUpdateInput>
    /**
     * Choose, which ArtifactTag to update.
     */
    where: ArtifactTagWhereUniqueInput
  }

  /**
   * ArtifactTag updateMany
   */
  export type ArtifactTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtifactTags.
     */
    data: XOR<ArtifactTagUpdateManyMutationInput, ArtifactTagUncheckedUpdateManyInput>
    /**
     * Filter which ArtifactTags to update
     */
    where?: ArtifactTagWhereInput
    /**
     * Limit how many ArtifactTags to update.
     */
    limit?: number
  }

  /**
   * ArtifactTag updateManyAndReturn
   */
  export type ArtifactTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * The data used to update ArtifactTags.
     */
    data: XOR<ArtifactTagUpdateManyMutationInput, ArtifactTagUncheckedUpdateManyInput>
    /**
     * Filter which ArtifactTags to update
     */
    where?: ArtifactTagWhereInput
    /**
     * Limit how many ArtifactTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtifactTag upsert
   */
  export type ArtifactTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtifactTag to update in case it exists.
     */
    where: ArtifactTagWhereUniqueInput
    /**
     * In case the ArtifactTag found by the `where` argument doesn't exist, create a new ArtifactTag with this data.
     */
    create: XOR<ArtifactTagCreateInput, ArtifactTagUncheckedCreateInput>
    /**
     * In case the ArtifactTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtifactTagUpdateInput, ArtifactTagUncheckedUpdateInput>
  }

  /**
   * ArtifactTag delete
   */
  export type ArtifactTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
    /**
     * Filter which ArtifactTag to delete.
     */
    where: ArtifactTagWhereUniqueInput
  }

  /**
   * ArtifactTag deleteMany
   */
  export type ArtifactTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtifactTags to delete
     */
    where?: ArtifactTagWhereInput
    /**
     * Limit how many ArtifactTags to delete.
     */
    limit?: number
  }

  /**
   * ArtifactTag without action
   */
  export type ArtifactTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactTag
     */
    select?: ArtifactTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactTag
     */
    omit?: ArtifactTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactTagInclude<ExtArgs> | null
  }


  /**
   * Model WebhookDelivery
   */

  export type AggregateWebhookDelivery = {
    _count: WebhookDeliveryCountAggregateOutputType | null
    _avg: WebhookDeliveryAvgAggregateOutputType | null
    _sum: WebhookDeliverySumAggregateOutputType | null
    _min: WebhookDeliveryMinAggregateOutputType | null
    _max: WebhookDeliveryMaxAggregateOutputType | null
  }

  export type WebhookDeliveryAvgAggregateOutputType = {
    attempts: number | null
  }

  export type WebhookDeliverySumAggregateOutputType = {
    attempts: number | null
  }

  export type WebhookDeliveryMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    event: $Enums.WebhookEvent | null
    status: $Enums.WebhookDeliveryStatus | null
    attempts: number | null
    lastAttemptAt: Date | null
    createdAt: Date | null
  }

  export type WebhookDeliveryMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    event: $Enums.WebhookEvent | null
    status: $Enums.WebhookDeliveryStatus | null
    attempts: number | null
    lastAttemptAt: Date | null
    createdAt: Date | null
  }

  export type WebhookDeliveryCountAggregateOutputType = {
    id: number
    agentId: number
    event: number
    payload: number
    status: number
    attempts: number
    lastAttemptAt: number
    createdAt: number
    _all: number
  }


  export type WebhookDeliveryAvgAggregateInputType = {
    attempts?: true
  }

  export type WebhookDeliverySumAggregateInputType = {
    attempts?: true
  }

  export type WebhookDeliveryMinAggregateInputType = {
    id?: true
    agentId?: true
    event?: true
    status?: true
    attempts?: true
    lastAttemptAt?: true
    createdAt?: true
  }

  export type WebhookDeliveryMaxAggregateInputType = {
    id?: true
    agentId?: true
    event?: true
    status?: true
    attempts?: true
    lastAttemptAt?: true
    createdAt?: true
  }

  export type WebhookDeliveryCountAggregateInputType = {
    id?: true
    agentId?: true
    event?: true
    payload?: true
    status?: true
    attempts?: true
    lastAttemptAt?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookDeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookDelivery to aggregate.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookDeliveries
    **/
    _count?: true | WebhookDeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookDeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookDeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookDeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookDeliveryMaxAggregateInputType
  }

  export type GetWebhookDeliveryAggregateType<T extends WebhookDeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookDelivery[P]>
      : GetScalarType<T[P], AggregateWebhookDelivery[P]>
  }




  export type WebhookDeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookDeliveryWhereInput
    orderBy?: WebhookDeliveryOrderByWithAggregationInput | WebhookDeliveryOrderByWithAggregationInput[]
    by: WebhookDeliveryScalarFieldEnum[] | WebhookDeliveryScalarFieldEnum
    having?: WebhookDeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookDeliveryCountAggregateInputType | true
    _avg?: WebhookDeliveryAvgAggregateInputType
    _sum?: WebhookDeliverySumAggregateInputType
    _min?: WebhookDeliveryMinAggregateInputType
    _max?: WebhookDeliveryMaxAggregateInputType
  }

  export type WebhookDeliveryGroupByOutputType = {
    id: string
    agentId: string
    event: $Enums.WebhookEvent
    payload: JsonValue
    status: $Enums.WebhookDeliveryStatus
    attempts: number
    lastAttemptAt: Date | null
    createdAt: Date
    _count: WebhookDeliveryCountAggregateOutputType | null
    _avg: WebhookDeliveryAvgAggregateOutputType | null
    _sum: WebhookDeliverySumAggregateOutputType | null
    _min: WebhookDeliveryMinAggregateOutputType | null
    _max: WebhookDeliveryMaxAggregateOutputType | null
  }

  type GetWebhookDeliveryGroupByPayload<T extends WebhookDeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookDeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookDeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookDeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookDeliveryGroupByOutputType[P]>
        }
      >
    >


  export type WebhookDeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    event?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    lastAttemptAt?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookDelivery"]>

  export type WebhookDeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    event?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    lastAttemptAt?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookDelivery"]>

  export type WebhookDeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    event?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    lastAttemptAt?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookDelivery"]>

  export type WebhookDeliverySelectScalar = {
    id?: boolean
    agentId?: boolean
    event?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    lastAttemptAt?: boolean
    createdAt?: boolean
  }

  export type WebhookDeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "event" | "payload" | "status" | "attempts" | "lastAttemptAt" | "createdAt", ExtArgs["result"]["webhookDelivery"]>
  export type WebhookDeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type WebhookDeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type WebhookDeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $WebhookDeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookDelivery"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      event: $Enums.WebhookEvent
      payload: Prisma.JsonValue
      status: $Enums.WebhookDeliveryStatus
      attempts: number
      lastAttemptAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["webhookDelivery"]>
    composites: {}
  }

  type WebhookDeliveryGetPayload<S extends boolean | null | undefined | WebhookDeliveryDefaultArgs> = $Result.GetResult<Prisma.$WebhookDeliveryPayload, S>

  type WebhookDeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookDeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookDeliveryCountAggregateInputType | true
    }

  export interface WebhookDeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookDelivery'], meta: { name: 'WebhookDelivery' } }
    /**
     * Find zero or one WebhookDelivery that matches the filter.
     * @param {WebhookDeliveryFindUniqueArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookDeliveryFindUniqueArgs>(args: SelectSubset<T, WebhookDeliveryFindUniqueArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookDelivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookDeliveryFindUniqueOrThrowArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookDeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookDelivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryFindFirstArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookDeliveryFindFirstArgs>(args?: SelectSubset<T, WebhookDeliveryFindFirstArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookDelivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryFindFirstOrThrowArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookDeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookDeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookDeliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookDeliveries
     * const webhookDeliveries = await prisma.webhookDelivery.findMany()
     * 
     * // Get first 10 WebhookDeliveries
     * const webhookDeliveries = await prisma.webhookDelivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookDeliveryWithIdOnly = await prisma.webhookDelivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookDeliveryFindManyArgs>(args?: SelectSubset<T, WebhookDeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookDelivery.
     * @param {WebhookDeliveryCreateArgs} args - Arguments to create a WebhookDelivery.
     * @example
     * // Create one WebhookDelivery
     * const WebhookDelivery = await prisma.webhookDelivery.create({
     *   data: {
     *     // ... data to create a WebhookDelivery
     *   }
     * })
     * 
     */
    create<T extends WebhookDeliveryCreateArgs>(args: SelectSubset<T, WebhookDeliveryCreateArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookDeliveries.
     * @param {WebhookDeliveryCreateManyArgs} args - Arguments to create many WebhookDeliveries.
     * @example
     * // Create many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookDeliveryCreateManyArgs>(args?: SelectSubset<T, WebhookDeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookDeliveries and returns the data saved in the database.
     * @param {WebhookDeliveryCreateManyAndReturnArgs} args - Arguments to create many WebhookDeliveries.
     * @example
     * // Create many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookDeliveries and only return the `id`
     * const webhookDeliveryWithIdOnly = await prisma.webhookDelivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookDeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookDeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookDelivery.
     * @param {WebhookDeliveryDeleteArgs} args - Arguments to delete one WebhookDelivery.
     * @example
     * // Delete one WebhookDelivery
     * const WebhookDelivery = await prisma.webhookDelivery.delete({
     *   where: {
     *     // ... filter to delete one WebhookDelivery
     *   }
     * })
     * 
     */
    delete<T extends WebhookDeliveryDeleteArgs>(args: SelectSubset<T, WebhookDeliveryDeleteArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookDelivery.
     * @param {WebhookDeliveryUpdateArgs} args - Arguments to update one WebhookDelivery.
     * @example
     * // Update one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookDeliveryUpdateArgs>(args: SelectSubset<T, WebhookDeliveryUpdateArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookDeliveries.
     * @param {WebhookDeliveryDeleteManyArgs} args - Arguments to filter WebhookDeliveries to delete.
     * @example
     * // Delete a few WebhookDeliveries
     * const { count } = await prisma.webhookDelivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookDeliveryDeleteManyArgs>(args?: SelectSubset<T, WebhookDeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookDeliveryUpdateManyArgs>(args: SelectSubset<T, WebhookDeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookDeliveries and returns the data updated in the database.
     * @param {WebhookDeliveryUpdateManyAndReturnArgs} args - Arguments to update many WebhookDeliveries.
     * @example
     * // Update many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookDeliveries and only return the `id`
     * const webhookDeliveryWithIdOnly = await prisma.webhookDelivery.updateManyAndReturn({
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
    updateManyAndReturn<T extends WebhookDeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookDeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookDelivery.
     * @param {WebhookDeliveryUpsertArgs} args - Arguments to update or create a WebhookDelivery.
     * @example
     * // Update or create a WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.upsert({
     *   create: {
     *     // ... data to create a WebhookDelivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookDelivery we want to update
     *   }
     * })
     */
    upsert<T extends WebhookDeliveryUpsertArgs>(args: SelectSubset<T, WebhookDeliveryUpsertArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryCountArgs} args - Arguments to filter WebhookDeliveries to count.
     * @example
     * // Count the number of WebhookDeliveries
     * const count = await prisma.webhookDelivery.count({
     *   where: {
     *     // ... the filter for the WebhookDeliveries we want to count
     *   }
     * })
    **/
    count<T extends WebhookDeliveryCountArgs>(
      args?: Subset<T, WebhookDeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookDeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebhookDeliveryAggregateArgs>(args: Subset<T, WebhookDeliveryAggregateArgs>): Prisma.PrismaPromise<GetWebhookDeliveryAggregateType<T>>

    /**
     * Group by WebhookDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryGroupByArgs} args - Group by arguments.
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
      T extends WebhookDeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookDeliveryGroupByArgs['orderBy'] }
        : { orderBy?: WebhookDeliveryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebhookDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookDelivery model
   */
  readonly fields: WebhookDeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookDelivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookDeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WebhookDelivery model
   */
  interface WebhookDeliveryFieldRefs {
    readonly id: FieldRef<"WebhookDelivery", 'String'>
    readonly agentId: FieldRef<"WebhookDelivery", 'String'>
    readonly event: FieldRef<"WebhookDelivery", 'WebhookEvent'>
    readonly payload: FieldRef<"WebhookDelivery", 'Json'>
    readonly status: FieldRef<"WebhookDelivery", 'WebhookDeliveryStatus'>
    readonly attempts: FieldRef<"WebhookDelivery", 'Int'>
    readonly lastAttemptAt: FieldRef<"WebhookDelivery", 'DateTime'>
    readonly createdAt: FieldRef<"WebhookDelivery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookDelivery findUnique
   */
  export type WebhookDeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery findUniqueOrThrow
   */
  export type WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery findFirst
   */
  export type WebhookDeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookDeliveries.
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookDeliveries.
     */
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery findFirstOrThrow
   */
  export type WebhookDeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookDeliveries.
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookDeliveries.
     */
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery findMany
   */
  export type WebhookDeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDeliveries to fetch.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookDeliveries.
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery create
   */
  export type WebhookDeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookDelivery.
     */
    data: XOR<WebhookDeliveryCreateInput, WebhookDeliveryUncheckedCreateInput>
  }

  /**
   * WebhookDelivery createMany
   */
  export type WebhookDeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookDeliveries.
     */
    data: WebhookDeliveryCreateManyInput | WebhookDeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookDelivery createManyAndReturn
   */
  export type WebhookDeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookDeliveries.
     */
    data: WebhookDeliveryCreateManyInput | WebhookDeliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookDelivery update
   */
  export type WebhookDeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookDelivery.
     */
    data: XOR<WebhookDeliveryUpdateInput, WebhookDeliveryUncheckedUpdateInput>
    /**
     * Choose, which WebhookDelivery to update.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery updateMany
   */
  export type WebhookDeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookDeliveries.
     */
    data: XOR<WebhookDeliveryUpdateManyMutationInput, WebhookDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which WebhookDeliveries to update
     */
    where?: WebhookDeliveryWhereInput
    /**
     * Limit how many WebhookDeliveries to update.
     */
    limit?: number
  }

  /**
   * WebhookDelivery updateManyAndReturn
   */
  export type WebhookDeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * The data used to update WebhookDeliveries.
     */
    data: XOR<WebhookDeliveryUpdateManyMutationInput, WebhookDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which WebhookDeliveries to update
     */
    where?: WebhookDeliveryWhereInput
    /**
     * Limit how many WebhookDeliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookDelivery upsert
   */
  export type WebhookDeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookDelivery to update in case it exists.
     */
    where: WebhookDeliveryWhereUniqueInput
    /**
     * In case the WebhookDelivery found by the `where` argument doesn't exist, create a new WebhookDelivery with this data.
     */
    create: XOR<WebhookDeliveryCreateInput, WebhookDeliveryUncheckedCreateInput>
    /**
     * In case the WebhookDelivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookDeliveryUpdateInput, WebhookDeliveryUncheckedUpdateInput>
  }

  /**
   * WebhookDelivery delete
   */
  export type WebhookDeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter which WebhookDelivery to delete.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery deleteMany
   */
  export type WebhookDeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookDeliveries to delete
     */
    where?: WebhookDeliveryWhereInput
    /**
     * Limit how many WebhookDeliveries to delete.
     */
    limit?: number
  }

  /**
   * WebhookDelivery without action
   */
  export type WebhookDeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    displayName: 'displayName',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    userId: 'userId',
    agentId: 'agentId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    apiKeyId: 'apiKeyId',
    name: 'name',
    description: 'description',
    webhookUrl: 'webhookUrl',
    cronSchedule: 'cronSchedule',
    status: 'status',
    role: 'role',
    citationScore: 'citationScore',
    collaborationScore: 'collaborationScore',
    personalNoveltyScore: 'personalNoveltyScore',
    lineageScore: 'lineageScore',
    lastActiveAt: 'lastActiveAt',
    createdAt: 'createdAt'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const ArtifactScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    type: 'type',
    typeLabel: 'typeLabel',
    title: 'title',
    content: 'content',
    parentArtifactId: 'parentArtifactId',
    personalNoveltyScore: 'personalNoveltyScore',
    networkNoveltyScore: 'networkNoveltyScore',
    createdAt: 'createdAt'
  };

  export type ArtifactScalarFieldEnum = (typeof ArtifactScalarFieldEnum)[keyof typeof ArtifactScalarFieldEnum]


  export const TurnScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    token: 'token',
    systemPrompt: 'systemPrompt',
    contextSnapshot: 'contextSnapshot',
    status: 'status',
    expiresAt: 'expiresAt',
    submittedAt: 'submittedAt',
    artifactId: 'artifactId',
    createdAt: 'createdAt'
  };

  export type TurnScalarFieldEnum = (typeof TurnScalarFieldEnum)[keyof typeof TurnScalarFieldEnum]


  export const ArtifactRelationshipScalarFieldEnum: {
    id: 'id',
    fromArtifactId: 'fromArtifactId',
    toArtifactId: 'toArtifactId',
    type: 'type'
  };

  export type ArtifactRelationshipScalarFieldEnum = (typeof ArtifactRelationshipScalarFieldEnum)[keyof typeof ArtifactRelationshipScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const ArtifactTagScalarFieldEnum: {
    artifactId: 'artifactId',
    tagId: 'tagId',
    appliedByAgentId: 'appliedByAgentId'
  };

  export type ArtifactTagScalarFieldEnum = (typeof ArtifactTagScalarFieldEnum)[keyof typeof ArtifactTagScalarFieldEnum]


  export const WebhookDeliveryScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    event: 'event',
    payload: 'payload',
    status: 'status',
    attempts: 'attempts',
    lastAttemptAt: 'lastAttemptAt',
    createdAt: 'createdAt'
  };

  export type WebhookDeliveryScalarFieldEnum = (typeof WebhookDeliveryScalarFieldEnum)[keyof typeof WebhookDeliveryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'ApiKeyStatus'
   */
  export type EnumApiKeyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiKeyStatus'>
    


  /**
   * Reference to a field of type 'ApiKeyStatus[]'
   */
  export type ListEnumApiKeyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiKeyStatus[]'>
    


  /**
   * Reference to a field of type 'AgentStatus'
   */
  export type EnumAgentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentStatus'>
    


  /**
   * Reference to a field of type 'AgentStatus[]'
   */
  export type ListEnumAgentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentStatus[]'>
    


  /**
   * Reference to a field of type 'AgentRole'
   */
  export type EnumAgentRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentRole'>
    


  /**
   * Reference to a field of type 'AgentRole[]'
   */
  export type ListEnumAgentRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ArtifactType'
   */
  export type EnumArtifactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArtifactType'>
    


  /**
   * Reference to a field of type 'ArtifactType[]'
   */
  export type ListEnumArtifactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArtifactType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TurnStatus'
   */
  export type EnumTurnStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TurnStatus'>
    


  /**
   * Reference to a field of type 'TurnStatus[]'
   */
  export type ListEnumTurnStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TurnStatus[]'>
    


  /**
   * Reference to a field of type 'RelationshipType'
   */
  export type EnumRelationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipType'>
    


  /**
   * Reference to a field of type 'RelationshipType[]'
   */
  export type ListEnumRelationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipType[]'>
    


  /**
   * Reference to a field of type 'WebhookEvent'
   */
  export type EnumWebhookEventFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebhookEvent'>
    


  /**
   * Reference to a field of type 'WebhookEvent[]'
   */
  export type ListEnumWebhookEventFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebhookEvent[]'>
    


  /**
   * Reference to a field of type 'WebhookDeliveryStatus'
   */
  export type EnumWebhookDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebhookDeliveryStatus'>
    


  /**
   * Reference to a field of type 'WebhookDeliveryStatus[]'
   */
  export type ListEnumWebhookDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebhookDeliveryStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    apiKeys?: ApiKeyListRelationFilter
    agents?: AgentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    agents?: AgentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    apiKeys?: ApiKeyListRelationFilter
    agents?: AgentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    tokenHash?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    agentId?: StringNullableFilter<"ApiKey"> | string | null
    status?: EnumApiKeyStatusFilter<"ApiKey"> | $Enums.ApiKeyStatus
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    agent?: AgentOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    agentId?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    userId?: StringFilter<"ApiKey"> | string
    status?: EnumApiKeyStatusFilter<"ApiKey"> | $Enums.ApiKeyStatus
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
  }, "id" | "tokenHash" | "agentId">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    tokenHash?: StringWithAggregatesFilter<"ApiKey"> | string
    userId?: StringWithAggregatesFilter<"ApiKey"> | string
    agentId?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    status?: EnumApiKeyStatusWithAggregatesFilter<"ApiKey"> | $Enums.ApiKeyStatus
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    userId?: StringFilter<"Agent"> | string
    apiKeyId?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    webhookUrl?: StringNullableFilter<"Agent"> | string | null
    cronSchedule?: StringNullableFilter<"Agent"> | string | null
    status?: EnumAgentStatusFilter<"Agent"> | $Enums.AgentStatus
    role?: EnumAgentRoleFilter<"Agent"> | $Enums.AgentRole
    citationScore?: FloatFilter<"Agent"> | number
    collaborationScore?: FloatFilter<"Agent"> | number
    personalNoveltyScore?: FloatFilter<"Agent"> | number
    lineageScore?: FloatFilter<"Agent"> | number
    lastActiveAt?: DateTimeNullableFilter<"Agent"> | Date | string | null
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
    artifacts?: ArtifactListRelationFilter
    artifactTags?: ArtifactTagListRelationFilter
    webhookDeliveries?: WebhookDeliveryListRelationFilter
    turns?: TurnListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    apiKeyId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    webhookUrl?: SortOrderInput | SortOrder
    cronSchedule?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    citationScore?: SortOrder
    collaborationScore?: SortOrder
    personalNoveltyScore?: SortOrder
    lineageScore?: SortOrder
    lastActiveAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    apiKey?: ApiKeyOrderByWithRelationInput
    artifacts?: ArtifactOrderByRelationAggregateInput
    artifactTags?: ArtifactTagOrderByRelationAggregateInput
    webhookDeliveries?: WebhookDeliveryOrderByRelationAggregateInput
    turns?: TurnOrderByRelationAggregateInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    apiKeyId?: string
    name?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    userId?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    webhookUrl?: StringNullableFilter<"Agent"> | string | null
    cronSchedule?: StringNullableFilter<"Agent"> | string | null
    status?: EnumAgentStatusFilter<"Agent"> | $Enums.AgentStatus
    role?: EnumAgentRoleFilter<"Agent"> | $Enums.AgentRole
    citationScore?: FloatFilter<"Agent"> | number
    collaborationScore?: FloatFilter<"Agent"> | number
    personalNoveltyScore?: FloatFilter<"Agent"> | number
    lineageScore?: FloatFilter<"Agent"> | number
    lastActiveAt?: DateTimeNullableFilter<"Agent"> | Date | string | null
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
    artifacts?: ArtifactListRelationFilter
    artifactTags?: ArtifactTagListRelationFilter
    webhookDeliveries?: WebhookDeliveryListRelationFilter
    turns?: TurnListRelationFilter
  }, "id" | "apiKeyId" | "name">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    apiKeyId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    webhookUrl?: SortOrderInput | SortOrder
    cronSchedule?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    citationScore?: SortOrder
    collaborationScore?: SortOrder
    personalNoveltyScore?: SortOrder
    lineageScore?: SortOrder
    lastActiveAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _avg?: AgentAvgOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
    _sum?: AgentSumOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    userId?: StringWithAggregatesFilter<"Agent"> | string
    apiKeyId?: StringWithAggregatesFilter<"Agent"> | string
    name?: StringWithAggregatesFilter<"Agent"> | string
    description?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    webhookUrl?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    cronSchedule?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    status?: EnumAgentStatusWithAggregatesFilter<"Agent"> | $Enums.AgentStatus
    role?: EnumAgentRoleWithAggregatesFilter<"Agent"> | $Enums.AgentRole
    citationScore?: FloatWithAggregatesFilter<"Agent"> | number
    collaborationScore?: FloatWithAggregatesFilter<"Agent"> | number
    personalNoveltyScore?: FloatWithAggregatesFilter<"Agent"> | number
    lineageScore?: FloatWithAggregatesFilter<"Agent"> | number
    lastActiveAt?: DateTimeNullableWithAggregatesFilter<"Agent"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
  }

  export type ArtifactWhereInput = {
    AND?: ArtifactWhereInput | ArtifactWhereInput[]
    OR?: ArtifactWhereInput[]
    NOT?: ArtifactWhereInput | ArtifactWhereInput[]
    id?: StringFilter<"Artifact"> | string
    agentId?: StringFilter<"Artifact"> | string
    type?: EnumArtifactTypeFilter<"Artifact"> | $Enums.ArtifactType
    typeLabel?: StringNullableFilter<"Artifact"> | string | null
    title?: StringFilter<"Artifact"> | string
    content?: JsonFilter<"Artifact">
    parentArtifactId?: StringNullableFilter<"Artifact"> | string | null
    personalNoveltyScore?: FloatFilter<"Artifact"> | number
    networkNoveltyScore?: FloatFilter<"Artifact"> | number
    createdAt?: DateTimeFilter<"Artifact"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    parent?: XOR<ArtifactNullableScalarRelationFilter, ArtifactWhereInput> | null
    replies?: ArtifactListRelationFilter
    outgoingRelations?: ArtifactRelationshipListRelationFilter
    incomingRelations?: ArtifactRelationshipListRelationFilter
    tags?: ArtifactTagListRelationFilter
    turn?: XOR<TurnNullableScalarRelationFilter, TurnWhereInput> | null
  }

  export type ArtifactOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    type?: SortOrder
    typeLabel?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    parentArtifactId?: SortOrderInput | SortOrder
    personalNoveltyScore?: SortOrder
    networkNoveltyScore?: SortOrder
    createdAt?: SortOrder
    agent?: AgentOrderByWithRelationInput
    parent?: ArtifactOrderByWithRelationInput
    replies?: ArtifactOrderByRelationAggregateInput
    outgoingRelations?: ArtifactRelationshipOrderByRelationAggregateInput
    incomingRelations?: ArtifactRelationshipOrderByRelationAggregateInput
    tags?: ArtifactTagOrderByRelationAggregateInput
    turn?: TurnOrderByWithRelationInput
  }

  export type ArtifactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtifactWhereInput | ArtifactWhereInput[]
    OR?: ArtifactWhereInput[]
    NOT?: ArtifactWhereInput | ArtifactWhereInput[]
    agentId?: StringFilter<"Artifact"> | string
    type?: EnumArtifactTypeFilter<"Artifact"> | $Enums.ArtifactType
    typeLabel?: StringNullableFilter<"Artifact"> | string | null
    title?: StringFilter<"Artifact"> | string
    content?: JsonFilter<"Artifact">
    parentArtifactId?: StringNullableFilter<"Artifact"> | string | null
    personalNoveltyScore?: FloatFilter<"Artifact"> | number
    networkNoveltyScore?: FloatFilter<"Artifact"> | number
    createdAt?: DateTimeFilter<"Artifact"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    parent?: XOR<ArtifactNullableScalarRelationFilter, ArtifactWhereInput> | null
    replies?: ArtifactListRelationFilter
    outgoingRelations?: ArtifactRelationshipListRelationFilter
    incomingRelations?: ArtifactRelationshipListRelationFilter
    tags?: ArtifactTagListRelationFilter
    turn?: XOR<TurnNullableScalarRelationFilter, TurnWhereInput> | null
  }, "id">

  export type ArtifactOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    type?: SortOrder
    typeLabel?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    parentArtifactId?: SortOrderInput | SortOrder
    personalNoveltyScore?: SortOrder
    networkNoveltyScore?: SortOrder
    createdAt?: SortOrder
    _count?: ArtifactCountOrderByAggregateInput
    _avg?: ArtifactAvgOrderByAggregateInput
    _max?: ArtifactMaxOrderByAggregateInput
    _min?: ArtifactMinOrderByAggregateInput
    _sum?: ArtifactSumOrderByAggregateInput
  }

  export type ArtifactScalarWhereWithAggregatesInput = {
    AND?: ArtifactScalarWhereWithAggregatesInput | ArtifactScalarWhereWithAggregatesInput[]
    OR?: ArtifactScalarWhereWithAggregatesInput[]
    NOT?: ArtifactScalarWhereWithAggregatesInput | ArtifactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artifact"> | string
    agentId?: StringWithAggregatesFilter<"Artifact"> | string
    type?: EnumArtifactTypeWithAggregatesFilter<"Artifact"> | $Enums.ArtifactType
    typeLabel?: StringNullableWithAggregatesFilter<"Artifact"> | string | null
    title?: StringWithAggregatesFilter<"Artifact"> | string
    content?: JsonWithAggregatesFilter<"Artifact">
    parentArtifactId?: StringNullableWithAggregatesFilter<"Artifact"> | string | null
    personalNoveltyScore?: FloatWithAggregatesFilter<"Artifact"> | number
    networkNoveltyScore?: FloatWithAggregatesFilter<"Artifact"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Artifact"> | Date | string
  }

  export type TurnWhereInput = {
    AND?: TurnWhereInput | TurnWhereInput[]
    OR?: TurnWhereInput[]
    NOT?: TurnWhereInput | TurnWhereInput[]
    id?: StringFilter<"Turn"> | string
    agentId?: StringFilter<"Turn"> | string
    token?: StringFilter<"Turn"> | string
    systemPrompt?: StringFilter<"Turn"> | string
    contextSnapshot?: JsonFilter<"Turn">
    status?: EnumTurnStatusFilter<"Turn"> | $Enums.TurnStatus
    expiresAt?: DateTimeFilter<"Turn"> | Date | string
    submittedAt?: DateTimeNullableFilter<"Turn"> | Date | string | null
    artifactId?: StringNullableFilter<"Turn"> | string | null
    createdAt?: DateTimeFilter<"Turn"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    artifact?: XOR<ArtifactNullableScalarRelationFilter, ArtifactWhereInput> | null
  }

  export type TurnOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    token?: SortOrder
    systemPrompt?: SortOrder
    contextSnapshot?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    artifactId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    agent?: AgentOrderByWithRelationInput
    artifact?: ArtifactOrderByWithRelationInput
  }

  export type TurnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    artifactId?: string
    AND?: TurnWhereInput | TurnWhereInput[]
    OR?: TurnWhereInput[]
    NOT?: TurnWhereInput | TurnWhereInput[]
    agentId?: StringFilter<"Turn"> | string
    systemPrompt?: StringFilter<"Turn"> | string
    contextSnapshot?: JsonFilter<"Turn">
    status?: EnumTurnStatusFilter<"Turn"> | $Enums.TurnStatus
    expiresAt?: DateTimeFilter<"Turn"> | Date | string
    submittedAt?: DateTimeNullableFilter<"Turn"> | Date | string | null
    createdAt?: DateTimeFilter<"Turn"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    artifact?: XOR<ArtifactNullableScalarRelationFilter, ArtifactWhereInput> | null
  }, "id" | "token" | "artifactId">

  export type TurnOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    token?: SortOrder
    systemPrompt?: SortOrder
    contextSnapshot?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    artifactId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TurnCountOrderByAggregateInput
    _max?: TurnMaxOrderByAggregateInput
    _min?: TurnMinOrderByAggregateInput
  }

  export type TurnScalarWhereWithAggregatesInput = {
    AND?: TurnScalarWhereWithAggregatesInput | TurnScalarWhereWithAggregatesInput[]
    OR?: TurnScalarWhereWithAggregatesInput[]
    NOT?: TurnScalarWhereWithAggregatesInput | TurnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Turn"> | string
    agentId?: StringWithAggregatesFilter<"Turn"> | string
    token?: StringWithAggregatesFilter<"Turn"> | string
    systemPrompt?: StringWithAggregatesFilter<"Turn"> | string
    contextSnapshot?: JsonWithAggregatesFilter<"Turn">
    status?: EnumTurnStatusWithAggregatesFilter<"Turn"> | $Enums.TurnStatus
    expiresAt?: DateTimeWithAggregatesFilter<"Turn"> | Date | string
    submittedAt?: DateTimeNullableWithAggregatesFilter<"Turn"> | Date | string | null
    artifactId?: StringNullableWithAggregatesFilter<"Turn"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Turn"> | Date | string
  }

  export type ArtifactRelationshipWhereInput = {
    AND?: ArtifactRelationshipWhereInput | ArtifactRelationshipWhereInput[]
    OR?: ArtifactRelationshipWhereInput[]
    NOT?: ArtifactRelationshipWhereInput | ArtifactRelationshipWhereInput[]
    id?: StringFilter<"ArtifactRelationship"> | string
    fromArtifactId?: StringFilter<"ArtifactRelationship"> | string
    toArtifactId?: StringFilter<"ArtifactRelationship"> | string
    type?: EnumRelationshipTypeFilter<"ArtifactRelationship"> | $Enums.RelationshipType
    from?: XOR<ArtifactScalarRelationFilter, ArtifactWhereInput>
    to?: XOR<ArtifactScalarRelationFilter, ArtifactWhereInput>
  }

  export type ArtifactRelationshipOrderByWithRelationInput = {
    id?: SortOrder
    fromArtifactId?: SortOrder
    toArtifactId?: SortOrder
    type?: SortOrder
    from?: ArtifactOrderByWithRelationInput
    to?: ArtifactOrderByWithRelationInput
  }

  export type ArtifactRelationshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtifactRelationshipWhereInput | ArtifactRelationshipWhereInput[]
    OR?: ArtifactRelationshipWhereInput[]
    NOT?: ArtifactRelationshipWhereInput | ArtifactRelationshipWhereInput[]
    fromArtifactId?: StringFilter<"ArtifactRelationship"> | string
    toArtifactId?: StringFilter<"ArtifactRelationship"> | string
    type?: EnumRelationshipTypeFilter<"ArtifactRelationship"> | $Enums.RelationshipType
    from?: XOR<ArtifactScalarRelationFilter, ArtifactWhereInput>
    to?: XOR<ArtifactScalarRelationFilter, ArtifactWhereInput>
  }, "id">

  export type ArtifactRelationshipOrderByWithAggregationInput = {
    id?: SortOrder
    fromArtifactId?: SortOrder
    toArtifactId?: SortOrder
    type?: SortOrder
    _count?: ArtifactRelationshipCountOrderByAggregateInput
    _max?: ArtifactRelationshipMaxOrderByAggregateInput
    _min?: ArtifactRelationshipMinOrderByAggregateInput
  }

  export type ArtifactRelationshipScalarWhereWithAggregatesInput = {
    AND?: ArtifactRelationshipScalarWhereWithAggregatesInput | ArtifactRelationshipScalarWhereWithAggregatesInput[]
    OR?: ArtifactRelationshipScalarWhereWithAggregatesInput[]
    NOT?: ArtifactRelationshipScalarWhereWithAggregatesInput | ArtifactRelationshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArtifactRelationship"> | string
    fromArtifactId?: StringWithAggregatesFilter<"ArtifactRelationship"> | string
    toArtifactId?: StringWithAggregatesFilter<"ArtifactRelationship"> | string
    type?: EnumRelationshipTypeWithAggregatesFilter<"ArtifactRelationship"> | $Enums.RelationshipType
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    artifactTags?: ArtifactTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    artifactTags?: ArtifactTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    artifactTags?: ArtifactTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type ArtifactTagWhereInput = {
    AND?: ArtifactTagWhereInput | ArtifactTagWhereInput[]
    OR?: ArtifactTagWhereInput[]
    NOT?: ArtifactTagWhereInput | ArtifactTagWhereInput[]
    artifactId?: StringFilter<"ArtifactTag"> | string
    tagId?: StringFilter<"ArtifactTag"> | string
    appliedByAgentId?: StringFilter<"ArtifactTag"> | string
    artifact?: XOR<ArtifactScalarRelationFilter, ArtifactWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    appliedBy?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type ArtifactTagOrderByWithRelationInput = {
    artifactId?: SortOrder
    tagId?: SortOrder
    appliedByAgentId?: SortOrder
    artifact?: ArtifactOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
    appliedBy?: AgentOrderByWithRelationInput
  }

  export type ArtifactTagWhereUniqueInput = Prisma.AtLeast<{
    artifactId_tagId?: ArtifactTagArtifactIdTagIdCompoundUniqueInput
    AND?: ArtifactTagWhereInput | ArtifactTagWhereInput[]
    OR?: ArtifactTagWhereInput[]
    NOT?: ArtifactTagWhereInput | ArtifactTagWhereInput[]
    artifactId?: StringFilter<"ArtifactTag"> | string
    tagId?: StringFilter<"ArtifactTag"> | string
    appliedByAgentId?: StringFilter<"ArtifactTag"> | string
    artifact?: XOR<ArtifactScalarRelationFilter, ArtifactWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    appliedBy?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "artifactId_tagId">

  export type ArtifactTagOrderByWithAggregationInput = {
    artifactId?: SortOrder
    tagId?: SortOrder
    appliedByAgentId?: SortOrder
    _count?: ArtifactTagCountOrderByAggregateInput
    _max?: ArtifactTagMaxOrderByAggregateInput
    _min?: ArtifactTagMinOrderByAggregateInput
  }

  export type ArtifactTagScalarWhereWithAggregatesInput = {
    AND?: ArtifactTagScalarWhereWithAggregatesInput | ArtifactTagScalarWhereWithAggregatesInput[]
    OR?: ArtifactTagScalarWhereWithAggregatesInput[]
    NOT?: ArtifactTagScalarWhereWithAggregatesInput | ArtifactTagScalarWhereWithAggregatesInput[]
    artifactId?: StringWithAggregatesFilter<"ArtifactTag"> | string
    tagId?: StringWithAggregatesFilter<"ArtifactTag"> | string
    appliedByAgentId?: StringWithAggregatesFilter<"ArtifactTag"> | string
  }

  export type WebhookDeliveryWhereInput = {
    AND?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    OR?: WebhookDeliveryWhereInput[]
    NOT?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    id?: StringFilter<"WebhookDelivery"> | string
    agentId?: StringFilter<"WebhookDelivery"> | string
    event?: EnumWebhookEventFilter<"WebhookDelivery"> | $Enums.WebhookEvent
    payload?: JsonFilter<"WebhookDelivery">
    status?: EnumWebhookDeliveryStatusFilter<"WebhookDelivery"> | $Enums.WebhookDeliveryStatus
    attempts?: IntFilter<"WebhookDelivery"> | number
    lastAttemptAt?: DateTimeNullableFilter<"WebhookDelivery"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type WebhookDeliveryOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastAttemptAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    agent?: AgentOrderByWithRelationInput
  }

  export type WebhookDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    OR?: WebhookDeliveryWhereInput[]
    NOT?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    agentId?: StringFilter<"WebhookDelivery"> | string
    event?: EnumWebhookEventFilter<"WebhookDelivery"> | $Enums.WebhookEvent
    payload?: JsonFilter<"WebhookDelivery">
    status?: EnumWebhookDeliveryStatusFilter<"WebhookDelivery"> | $Enums.WebhookDeliveryStatus
    attempts?: IntFilter<"WebhookDelivery"> | number
    lastAttemptAt?: DateTimeNullableFilter<"WebhookDelivery"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "id">

  export type WebhookDeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastAttemptAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WebhookDeliveryCountOrderByAggregateInput
    _avg?: WebhookDeliveryAvgOrderByAggregateInput
    _max?: WebhookDeliveryMaxOrderByAggregateInput
    _min?: WebhookDeliveryMinOrderByAggregateInput
    _sum?: WebhookDeliverySumOrderByAggregateInput
  }

  export type WebhookDeliveryScalarWhereWithAggregatesInput = {
    AND?: WebhookDeliveryScalarWhereWithAggregatesInput | WebhookDeliveryScalarWhereWithAggregatesInput[]
    OR?: WebhookDeliveryScalarWhereWithAggregatesInput[]
    NOT?: WebhookDeliveryScalarWhereWithAggregatesInput | WebhookDeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    agentId?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    event?: EnumWebhookEventWithAggregatesFilter<"WebhookDelivery"> | $Enums.WebhookEvent
    payload?: JsonWithAggregatesFilter<"WebhookDelivery">
    status?: EnumWebhookDeliveryStatusWithAggregatesFilter<"WebhookDelivery"> | $Enums.WebhookDeliveryStatus
    attempts?: IntWithAggregatesFilter<"WebhookDelivery"> | number
    lastAttemptAt?: DateTimeNullableWithAggregatesFilter<"WebhookDelivery"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WebhookDelivery"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    agents?: AgentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    agents?: AgentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    agents?: AgentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    agents?: AgentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    tokenHash: string
    status?: $Enums.ApiKeyStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApiKeysInput
    agent?: AgentCreateNestedOneWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    tokenHash: string
    userId: string
    agentId?: string | null
    status?: $Enums.ApiKeyStatus
    createdAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiKeysNestedInput
    agent?: AgentUpdateOneWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    tokenHash: string
    userId: string
    agentId?: string | null
    status?: $Enums.ApiKeyStatus
    createdAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateInput = {
    id?: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAgentsInput
    apiKey?: ApiKeyCreateNestedOneWithoutAgentInput
    artifacts?: ArtifactCreateNestedManyWithoutAgentInput
    artifactTags?: ArtifactTagCreateNestedManyWithoutAppliedByInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutAgentInput
    turns?: TurnCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateInput = {
    id?: string
    userId: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    apiKey?: ApiKeyUncheckedCreateNestedOneWithoutAgentInput
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutAgentInput
    artifactTags?: ArtifactTagUncheckedCreateNestedManyWithoutAppliedByInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutAgentInput
    turns?: TurnUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAgentsNestedInput
    apiKey?: ApiKeyUpdateOneWithoutAgentNestedInput
    artifacts?: ArtifactUpdateManyWithoutAgentNestedInput
    artifactTags?: ArtifactTagUpdateManyWithoutAppliedByNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutAgentNestedInput
    turns?: TurnUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUncheckedUpdateOneWithoutAgentNestedInput
    artifacts?: ArtifactUncheckedUpdateManyWithoutAgentNestedInput
    artifactTags?: ArtifactTagUncheckedUpdateManyWithoutAppliedByNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutAgentNestedInput
    turns?: TurnUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateManyInput = {
    id?: string
    userId: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactCreateInput = {
    id?: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutArtifactsInput
    parent?: ArtifactCreateNestedOneWithoutRepliesInput
    replies?: ArtifactCreateNestedManyWithoutParentInput
    outgoingRelations?: ArtifactRelationshipCreateNestedManyWithoutFromInput
    incomingRelations?: ArtifactRelationshipCreateNestedManyWithoutToInput
    tags?: ArtifactTagCreateNestedManyWithoutArtifactInput
    turn?: TurnCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateInput = {
    id?: string
    agentId: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    parentArtifactId?: string | null
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    replies?: ArtifactUncheckedCreateNestedManyWithoutParentInput
    outgoingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutFromInput
    incomingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutToInput
    tags?: ArtifactTagUncheckedCreateNestedManyWithoutArtifactInput
    turn?: TurnUncheckedCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutArtifactsNestedInput
    parent?: ArtifactUpdateOneWithoutRepliesNestedInput
    replies?: ArtifactUpdateManyWithoutParentNestedInput
    outgoingRelations?: ArtifactRelationshipUpdateManyWithoutFromNestedInput
    incomingRelations?: ArtifactRelationshipUpdateManyWithoutToNestedInput
    tags?: ArtifactTagUpdateManyWithoutArtifactNestedInput
    turn?: TurnUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    parentArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ArtifactUncheckedUpdateManyWithoutParentNestedInput
    outgoingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutFromNestedInput
    incomingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutToNestedInput
    tags?: ArtifactTagUncheckedUpdateManyWithoutArtifactNestedInput
    turn?: TurnUncheckedUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactCreateManyInput = {
    id?: string
    agentId: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    parentArtifactId?: string | null
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
  }

  export type ArtifactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    parentArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnCreateInput = {
    id?: string
    token: string
    systemPrompt: string
    contextSnapshot: JsonNullValueInput | InputJsonValue
    status?: $Enums.TurnStatus
    expiresAt: Date | string
    submittedAt?: Date | string | null
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutTurnsInput
    artifact?: ArtifactCreateNestedOneWithoutTurnInput
  }

  export type TurnUncheckedCreateInput = {
    id?: string
    agentId: string
    token: string
    systemPrompt: string
    contextSnapshot: JsonNullValueInput | InputJsonValue
    status?: $Enums.TurnStatus
    expiresAt: Date | string
    submittedAt?: Date | string | null
    artifactId?: string | null
    createdAt?: Date | string
  }

  export type TurnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: JsonNullValueInput | InputJsonValue
    status?: EnumTurnStatusFieldUpdateOperationsInput | $Enums.TurnStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutTurnsNestedInput
    artifact?: ArtifactUpdateOneWithoutTurnNestedInput
  }

  export type TurnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: JsonNullValueInput | InputJsonValue
    status?: EnumTurnStatusFieldUpdateOperationsInput | $Enums.TurnStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnCreateManyInput = {
    id?: string
    agentId: string
    token: string
    systemPrompt: string
    contextSnapshot: JsonNullValueInput | InputJsonValue
    status?: $Enums.TurnStatus
    expiresAt: Date | string
    submittedAt?: Date | string | null
    artifactId?: string | null
    createdAt?: Date | string
  }

  export type TurnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: JsonNullValueInput | InputJsonValue
    status?: EnumTurnStatusFieldUpdateOperationsInput | $Enums.TurnStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: JsonNullValueInput | InputJsonValue
    status?: EnumTurnStatusFieldUpdateOperationsInput | $Enums.TurnStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactRelationshipCreateInput = {
    id?: string
    type: $Enums.RelationshipType
    from: ArtifactCreateNestedOneWithoutOutgoingRelationsInput
    to: ArtifactCreateNestedOneWithoutIncomingRelationsInput
  }

  export type ArtifactRelationshipUncheckedCreateInput = {
    id?: string
    fromArtifactId: string
    toArtifactId: string
    type: $Enums.RelationshipType
  }

  export type ArtifactRelationshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    from?: ArtifactUpdateOneRequiredWithoutOutgoingRelationsNestedInput
    to?: ArtifactUpdateOneRequiredWithoutIncomingRelationsNestedInput
  }

  export type ArtifactRelationshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromArtifactId?: StringFieldUpdateOperationsInput | string
    toArtifactId?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type ArtifactRelationshipCreateManyInput = {
    id?: string
    fromArtifactId: string
    toArtifactId: string
    type: $Enums.RelationshipType
  }

  export type ArtifactRelationshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type ArtifactRelationshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromArtifactId?: StringFieldUpdateOperationsInput | string
    toArtifactId?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type TagCreateInput = {
    id?: string
    name: string
    artifactTags?: ArtifactTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    artifactTags?: ArtifactTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    artifactTags?: ArtifactTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    artifactTags?: ArtifactTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArtifactTagCreateInput = {
    artifact: ArtifactCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutArtifactTagsInput
    appliedBy: AgentCreateNestedOneWithoutArtifactTagsInput
  }

  export type ArtifactTagUncheckedCreateInput = {
    artifactId: string
    tagId: string
    appliedByAgentId: string
  }

  export type ArtifactTagUpdateInput = {
    artifact?: ArtifactUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutArtifactTagsNestedInput
    appliedBy?: AgentUpdateOneRequiredWithoutArtifactTagsNestedInput
  }

  export type ArtifactTagUncheckedUpdateInput = {
    artifactId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    appliedByAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtifactTagCreateManyInput = {
    artifactId: string
    tagId: string
    appliedByAgentId: string
  }

  export type ArtifactTagUpdateManyMutationInput = {

  }

  export type ArtifactTagUncheckedUpdateManyInput = {
    artifactId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    appliedByAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type WebhookDeliveryCreateInput = {
    id?: string
    event: $Enums.WebhookEvent
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.WebhookDeliveryStatus
    attempts?: number
    lastAttemptAt?: Date | string | null
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutWebhookDeliveriesInput
  }

  export type WebhookDeliveryUncheckedCreateInput = {
    id?: string
    agentId: string
    event: $Enums.WebhookEvent
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.WebhookDeliveryStatus
    attempts?: number
    lastAttemptAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookDeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EnumWebhookEventFieldUpdateOperationsInput | $Enums.WebhookEvent
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumWebhookDeliveryStatusFieldUpdateOperationsInput | $Enums.WebhookDeliveryStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutWebhookDeliveriesNestedInput
  }

  export type WebhookDeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    event?: EnumWebhookEventFieldUpdateOperationsInput | $Enums.WebhookEvent
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumWebhookDeliveryStatusFieldUpdateOperationsInput | $Enums.WebhookDeliveryStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryCreateManyInput = {
    id?: string
    agentId: string
    event: $Enums.WebhookEvent
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.WebhookDeliveryStatus
    attempts?: number
    lastAttemptAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookDeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EnumWebhookEventFieldUpdateOperationsInput | $Enums.WebhookEvent
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumWebhookDeliveryStatusFieldUpdateOperationsInput | $Enums.WebhookDeliveryStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    event?: EnumWebhookEventFieldUpdateOperationsInput | $Enums.WebhookEvent
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumWebhookDeliveryStatusFieldUpdateOperationsInput | $Enums.WebhookDeliveryStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type AgentListRelationFilter = {
    every?: AgentWhereInput
    some?: AgentWhereInput
    none?: AgentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
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

  export type EnumApiKeyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusFilter<$PrismaModel> | $Enums.ApiKeyStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AgentNullableScalarRelationFilter = {
    is?: AgentWhereInput | null
    isNot?: AgentWhereInput | null
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumApiKeyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApiKeyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiKeyStatusFilter<$PrismaModel>
    _max?: NestedEnumApiKeyStatusFilter<$PrismaModel>
  }

  export type EnumAgentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentStatusFilter<$PrismaModel> | $Enums.AgentStatus
  }

  export type EnumAgentRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentRole | EnumAgentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentRoleFilter<$PrismaModel> | $Enums.AgentRole
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

  export type ApiKeyNullableScalarRelationFilter = {
    is?: ApiKeyWhereInput | null
    isNot?: ApiKeyWhereInput | null
  }

  export type ArtifactListRelationFilter = {
    every?: ArtifactWhereInput
    some?: ArtifactWhereInput
    none?: ArtifactWhereInput
  }

  export type ArtifactTagListRelationFilter = {
    every?: ArtifactTagWhereInput
    some?: ArtifactTagWhereInput
    none?: ArtifactTagWhereInput
  }

  export type WebhookDeliveryListRelationFilter = {
    every?: WebhookDeliveryWhereInput
    some?: WebhookDeliveryWhereInput
    none?: WebhookDeliveryWhereInput
  }

  export type TurnListRelationFilter = {
    every?: TurnWhereInput
    some?: TurnWhereInput
    none?: TurnWhereInput
  }

  export type ArtifactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtifactTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebhookDeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    apiKeyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    webhookUrl?: SortOrder
    cronSchedule?: SortOrder
    status?: SortOrder
    role?: SortOrder
    citationScore?: SortOrder
    collaborationScore?: SortOrder
    personalNoveltyScore?: SortOrder
    lineageScore?: SortOrder
    lastActiveAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentAvgOrderByAggregateInput = {
    citationScore?: SortOrder
    collaborationScore?: SortOrder
    personalNoveltyScore?: SortOrder
    lineageScore?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    apiKeyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    webhookUrl?: SortOrder
    cronSchedule?: SortOrder
    status?: SortOrder
    role?: SortOrder
    citationScore?: SortOrder
    collaborationScore?: SortOrder
    personalNoveltyScore?: SortOrder
    lineageScore?: SortOrder
    lastActiveAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    apiKeyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    webhookUrl?: SortOrder
    cronSchedule?: SortOrder
    status?: SortOrder
    role?: SortOrder
    citationScore?: SortOrder
    collaborationScore?: SortOrder
    personalNoveltyScore?: SortOrder
    lineageScore?: SortOrder
    lastActiveAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentSumOrderByAggregateInput = {
    citationScore?: SortOrder
    collaborationScore?: SortOrder
    personalNoveltyScore?: SortOrder
    lineageScore?: SortOrder
  }

  export type EnumAgentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AgentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentStatusFilter<$PrismaModel>
    _max?: NestedEnumAgentStatusFilter<$PrismaModel>
  }

  export type EnumAgentRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentRole | EnumAgentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentRoleWithAggregatesFilter<$PrismaModel> | $Enums.AgentRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentRoleFilter<$PrismaModel>
    _max?: NestedEnumAgentRoleFilter<$PrismaModel>
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

  export type EnumArtifactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ArtifactType | EnumArtifactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArtifactType[] | ListEnumArtifactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArtifactType[] | ListEnumArtifactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArtifactTypeFilter<$PrismaModel> | $Enums.ArtifactType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AgentScalarRelationFilter = {
    is?: AgentWhereInput
    isNot?: AgentWhereInput
  }

  export type ArtifactNullableScalarRelationFilter = {
    is?: ArtifactWhereInput | null
    isNot?: ArtifactWhereInput | null
  }

  export type ArtifactRelationshipListRelationFilter = {
    every?: ArtifactRelationshipWhereInput
    some?: ArtifactRelationshipWhereInput
    none?: ArtifactRelationshipWhereInput
  }

  export type TurnNullableScalarRelationFilter = {
    is?: TurnWhereInput | null
    isNot?: TurnWhereInput | null
  }

  export type ArtifactRelationshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtifactCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    type?: SortOrder
    typeLabel?: SortOrder
    title?: SortOrder
    content?: SortOrder
    parentArtifactId?: SortOrder
    personalNoveltyScore?: SortOrder
    networkNoveltyScore?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtifactAvgOrderByAggregateInput = {
    personalNoveltyScore?: SortOrder
    networkNoveltyScore?: SortOrder
  }

  export type ArtifactMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    type?: SortOrder
    typeLabel?: SortOrder
    title?: SortOrder
    parentArtifactId?: SortOrder
    personalNoveltyScore?: SortOrder
    networkNoveltyScore?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtifactMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    type?: SortOrder
    typeLabel?: SortOrder
    title?: SortOrder
    parentArtifactId?: SortOrder
    personalNoveltyScore?: SortOrder
    networkNoveltyScore?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtifactSumOrderByAggregateInput = {
    personalNoveltyScore?: SortOrder
    networkNoveltyScore?: SortOrder
  }

  export type EnumArtifactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArtifactType | EnumArtifactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArtifactType[] | ListEnumArtifactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArtifactType[] | ListEnumArtifactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArtifactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ArtifactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArtifactTypeFilter<$PrismaModel>
    _max?: NestedEnumArtifactTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumTurnStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TurnStatus | EnumTurnStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TurnStatus[] | ListEnumTurnStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TurnStatus[] | ListEnumTurnStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTurnStatusFilter<$PrismaModel> | $Enums.TurnStatus
  }

  export type TurnCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    token?: SortOrder
    systemPrompt?: SortOrder
    contextSnapshot?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    submittedAt?: SortOrder
    artifactId?: SortOrder
    createdAt?: SortOrder
  }

  export type TurnMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    token?: SortOrder
    systemPrompt?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    submittedAt?: SortOrder
    artifactId?: SortOrder
    createdAt?: SortOrder
  }

  export type TurnMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    token?: SortOrder
    systemPrompt?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    submittedAt?: SortOrder
    artifactId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTurnStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TurnStatus | EnumTurnStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TurnStatus[] | ListEnumTurnStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TurnStatus[] | ListEnumTurnStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTurnStatusWithAggregatesFilter<$PrismaModel> | $Enums.TurnStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTurnStatusFilter<$PrismaModel>
    _max?: NestedEnumTurnStatusFilter<$PrismaModel>
  }

  export type EnumRelationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeFilter<$PrismaModel> | $Enums.RelationshipType
  }

  export type ArtifactScalarRelationFilter = {
    is?: ArtifactWhereInput
    isNot?: ArtifactWhereInput
  }

  export type ArtifactRelationshipCountOrderByAggregateInput = {
    id?: SortOrder
    fromArtifactId?: SortOrder
    toArtifactId?: SortOrder
    type?: SortOrder
  }

  export type ArtifactRelationshipMaxOrderByAggregateInput = {
    id?: SortOrder
    fromArtifactId?: SortOrder
    toArtifactId?: SortOrder
    type?: SortOrder
  }

  export type ArtifactRelationshipMinOrderByAggregateInput = {
    id?: SortOrder
    fromArtifactId?: SortOrder
    toArtifactId?: SortOrder
    type?: SortOrder
  }

  export type EnumRelationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationshipTypeFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type ArtifactTagArtifactIdTagIdCompoundUniqueInput = {
    artifactId: string
    tagId: string
  }

  export type ArtifactTagCountOrderByAggregateInput = {
    artifactId?: SortOrder
    tagId?: SortOrder
    appliedByAgentId?: SortOrder
  }

  export type ArtifactTagMaxOrderByAggregateInput = {
    artifactId?: SortOrder
    tagId?: SortOrder
    appliedByAgentId?: SortOrder
  }

  export type ArtifactTagMinOrderByAggregateInput = {
    artifactId?: SortOrder
    tagId?: SortOrder
    appliedByAgentId?: SortOrder
  }

  export type EnumWebhookEventFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookEvent | EnumWebhookEventFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookEvent[] | ListEnumWebhookEventFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookEvent[] | ListEnumWebhookEventFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookEventFilter<$PrismaModel> | $Enums.WebhookEvent
  }

  export type EnumWebhookDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookDeliveryStatus | EnumWebhookDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookDeliveryStatus[] | ListEnumWebhookDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookDeliveryStatus[] | ListEnumWebhookDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookDeliveryStatusFilter<$PrismaModel> | $Enums.WebhookDeliveryStatus
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

  export type WebhookDeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastAttemptAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookDeliveryAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type WebhookDeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    event?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastAttemptAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookDeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    event?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastAttemptAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookDeliverySumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type EnumWebhookEventWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookEvent | EnumWebhookEventFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookEvent[] | ListEnumWebhookEventFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookEvent[] | ListEnumWebhookEventFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookEventWithAggregatesFilter<$PrismaModel> | $Enums.WebhookEvent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebhookEventFilter<$PrismaModel>
    _max?: NestedEnumWebhookEventFilter<$PrismaModel>
  }

  export type EnumWebhookDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookDeliveryStatus | EnumWebhookDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookDeliveryStatus[] | ListEnumWebhookDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookDeliveryStatus[] | ListEnumWebhookDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebhookDeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebhookDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumWebhookDeliveryStatusFilter<$PrismaModel>
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

  export type ApiKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type AgentCreateNestedManyWithoutUserInput = {
    create?: XOR<AgentCreateWithoutUserInput, AgentUncheckedCreateWithoutUserInput> | AgentCreateWithoutUserInput[] | AgentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutUserInput | AgentCreateOrConnectWithoutUserInput[]
    createMany?: AgentCreateManyUserInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type AgentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AgentCreateWithoutUserInput, AgentUncheckedCreateWithoutUserInput> | AgentCreateWithoutUserInput[] | AgentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutUserInput | AgentCreateOrConnectWithoutUserInput[]
    createMany?: AgentCreateManyUserInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApiKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type AgentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AgentCreateWithoutUserInput, AgentUncheckedCreateWithoutUserInput> | AgentCreateWithoutUserInput[] | AgentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutUserInput | AgentCreateOrConnectWithoutUserInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutUserInput | AgentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AgentCreateManyUserInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutUserInput | AgentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutUserInput | AgentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type AgentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AgentCreateWithoutUserInput, AgentUncheckedCreateWithoutUserInput> | AgentCreateWithoutUserInput[] | AgentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutUserInput | AgentCreateOrConnectWithoutUserInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutUserInput | AgentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AgentCreateManyUserInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutUserInput | AgentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutUserInput | AgentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    connect?: UserWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutApiKeyInput = {
    create?: XOR<AgentCreateWithoutApiKeyInput, AgentUncheckedCreateWithoutApiKeyInput>
    connectOrCreate?: AgentCreateOrConnectWithoutApiKeyInput
    connect?: AgentWhereUniqueInput
  }

  export type EnumApiKeyStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApiKeyStatus
  }

  export type UserUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    upsert?: UserUpsertWithoutApiKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiKeysInput, UserUpdateWithoutApiKeysInput>, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type AgentUpdateOneWithoutApiKeyNestedInput = {
    create?: XOR<AgentCreateWithoutApiKeyInput, AgentUncheckedCreateWithoutApiKeyInput>
    connectOrCreate?: AgentCreateOrConnectWithoutApiKeyInput
    upsert?: AgentUpsertWithoutApiKeyInput
    disconnect?: AgentWhereInput | boolean
    delete?: AgentWhereInput | boolean
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutApiKeyInput, AgentUpdateWithoutApiKeyInput>, AgentUncheckedUpdateWithoutApiKeyInput>
  }

  export type UserCreateNestedOneWithoutAgentsInput = {
    create?: XOR<UserCreateWithoutAgentsInput, UserUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgentsInput
    connect?: UserWhereUniqueInput
  }

  export type ApiKeyCreateNestedOneWithoutAgentInput = {
    create?: XOR<ApiKeyCreateWithoutAgentInput, ApiKeyUncheckedCreateWithoutAgentInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutAgentInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ArtifactCreateNestedManyWithoutAgentInput = {
    create?: XOR<ArtifactCreateWithoutAgentInput, ArtifactUncheckedCreateWithoutAgentInput> | ArtifactCreateWithoutAgentInput[] | ArtifactUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutAgentInput | ArtifactCreateOrConnectWithoutAgentInput[]
    createMany?: ArtifactCreateManyAgentInputEnvelope
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
  }

  export type ArtifactTagCreateNestedManyWithoutAppliedByInput = {
    create?: XOR<ArtifactTagCreateWithoutAppliedByInput, ArtifactTagUncheckedCreateWithoutAppliedByInput> | ArtifactTagCreateWithoutAppliedByInput[] | ArtifactTagUncheckedCreateWithoutAppliedByInput[]
    connectOrCreate?: ArtifactTagCreateOrConnectWithoutAppliedByInput | ArtifactTagCreateOrConnectWithoutAppliedByInput[]
    createMany?: ArtifactTagCreateManyAppliedByInputEnvelope
    connect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
  }

  export type WebhookDeliveryCreateNestedManyWithoutAgentInput = {
    create?: XOR<WebhookDeliveryCreateWithoutAgentInput, WebhookDeliveryUncheckedCreateWithoutAgentInput> | WebhookDeliveryCreateWithoutAgentInput[] | WebhookDeliveryUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutAgentInput | WebhookDeliveryCreateOrConnectWithoutAgentInput[]
    createMany?: WebhookDeliveryCreateManyAgentInputEnvelope
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
  }

  export type TurnCreateNestedManyWithoutAgentInput = {
    create?: XOR<TurnCreateWithoutAgentInput, TurnUncheckedCreateWithoutAgentInput> | TurnCreateWithoutAgentInput[] | TurnUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: TurnCreateOrConnectWithoutAgentInput | TurnCreateOrConnectWithoutAgentInput[]
    createMany?: TurnCreateManyAgentInputEnvelope
    connect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedOneWithoutAgentInput = {
    create?: XOR<ApiKeyCreateWithoutAgentInput, ApiKeyUncheckedCreateWithoutAgentInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutAgentInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ArtifactUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<ArtifactCreateWithoutAgentInput, ArtifactUncheckedCreateWithoutAgentInput> | ArtifactCreateWithoutAgentInput[] | ArtifactUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutAgentInput | ArtifactCreateOrConnectWithoutAgentInput[]
    createMany?: ArtifactCreateManyAgentInputEnvelope
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
  }

  export type ArtifactTagUncheckedCreateNestedManyWithoutAppliedByInput = {
    create?: XOR<ArtifactTagCreateWithoutAppliedByInput, ArtifactTagUncheckedCreateWithoutAppliedByInput> | ArtifactTagCreateWithoutAppliedByInput[] | ArtifactTagUncheckedCreateWithoutAppliedByInput[]
    connectOrCreate?: ArtifactTagCreateOrConnectWithoutAppliedByInput | ArtifactTagCreateOrConnectWithoutAppliedByInput[]
    createMany?: ArtifactTagCreateManyAppliedByInputEnvelope
    connect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
  }

  export type WebhookDeliveryUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<WebhookDeliveryCreateWithoutAgentInput, WebhookDeliveryUncheckedCreateWithoutAgentInput> | WebhookDeliveryCreateWithoutAgentInput[] | WebhookDeliveryUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutAgentInput | WebhookDeliveryCreateOrConnectWithoutAgentInput[]
    createMany?: WebhookDeliveryCreateManyAgentInputEnvelope
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
  }

  export type TurnUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<TurnCreateWithoutAgentInput, TurnUncheckedCreateWithoutAgentInput> | TurnCreateWithoutAgentInput[] | TurnUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: TurnCreateOrConnectWithoutAgentInput | TurnCreateOrConnectWithoutAgentInput[]
    createMany?: TurnCreateManyAgentInputEnvelope
    connect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
  }

  export type EnumAgentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AgentStatus
  }

  export type EnumAgentRoleFieldUpdateOperationsInput = {
    set?: $Enums.AgentRole
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAgentsNestedInput = {
    create?: XOR<UserCreateWithoutAgentsInput, UserUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgentsInput
    upsert?: UserUpsertWithoutAgentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAgentsInput, UserUpdateWithoutAgentsInput>, UserUncheckedUpdateWithoutAgentsInput>
  }

  export type ApiKeyUpdateOneWithoutAgentNestedInput = {
    create?: XOR<ApiKeyCreateWithoutAgentInput, ApiKeyUncheckedCreateWithoutAgentInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutAgentInput
    upsert?: ApiKeyUpsertWithoutAgentInput
    disconnect?: ApiKeyWhereInput | boolean
    delete?: ApiKeyWhereInput | boolean
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutAgentInput, ApiKeyUpdateWithoutAgentInput>, ApiKeyUncheckedUpdateWithoutAgentInput>
  }

  export type ArtifactUpdateManyWithoutAgentNestedInput = {
    create?: XOR<ArtifactCreateWithoutAgentInput, ArtifactUncheckedCreateWithoutAgentInput> | ArtifactCreateWithoutAgentInput[] | ArtifactUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutAgentInput | ArtifactCreateOrConnectWithoutAgentInput[]
    upsert?: ArtifactUpsertWithWhereUniqueWithoutAgentInput | ArtifactUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: ArtifactCreateManyAgentInputEnvelope
    set?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    disconnect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    delete?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    update?: ArtifactUpdateWithWhereUniqueWithoutAgentInput | ArtifactUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: ArtifactUpdateManyWithWhereWithoutAgentInput | ArtifactUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
  }

  export type ArtifactTagUpdateManyWithoutAppliedByNestedInput = {
    create?: XOR<ArtifactTagCreateWithoutAppliedByInput, ArtifactTagUncheckedCreateWithoutAppliedByInput> | ArtifactTagCreateWithoutAppliedByInput[] | ArtifactTagUncheckedCreateWithoutAppliedByInput[]
    connectOrCreate?: ArtifactTagCreateOrConnectWithoutAppliedByInput | ArtifactTagCreateOrConnectWithoutAppliedByInput[]
    upsert?: ArtifactTagUpsertWithWhereUniqueWithoutAppliedByInput | ArtifactTagUpsertWithWhereUniqueWithoutAppliedByInput[]
    createMany?: ArtifactTagCreateManyAppliedByInputEnvelope
    set?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    disconnect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    delete?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    connect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    update?: ArtifactTagUpdateWithWhereUniqueWithoutAppliedByInput | ArtifactTagUpdateWithWhereUniqueWithoutAppliedByInput[]
    updateMany?: ArtifactTagUpdateManyWithWhereWithoutAppliedByInput | ArtifactTagUpdateManyWithWhereWithoutAppliedByInput[]
    deleteMany?: ArtifactTagScalarWhereInput | ArtifactTagScalarWhereInput[]
  }

  export type WebhookDeliveryUpdateManyWithoutAgentNestedInput = {
    create?: XOR<WebhookDeliveryCreateWithoutAgentInput, WebhookDeliveryUncheckedCreateWithoutAgentInput> | WebhookDeliveryCreateWithoutAgentInput[] | WebhookDeliveryUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutAgentInput | WebhookDeliveryCreateOrConnectWithoutAgentInput[]
    upsert?: WebhookDeliveryUpsertWithWhereUniqueWithoutAgentInput | WebhookDeliveryUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: WebhookDeliveryCreateManyAgentInputEnvelope
    set?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    disconnect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    delete?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    update?: WebhookDeliveryUpdateWithWhereUniqueWithoutAgentInput | WebhookDeliveryUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: WebhookDeliveryUpdateManyWithWhereWithoutAgentInput | WebhookDeliveryUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
  }

  export type TurnUpdateManyWithoutAgentNestedInput = {
    create?: XOR<TurnCreateWithoutAgentInput, TurnUncheckedCreateWithoutAgentInput> | TurnCreateWithoutAgentInput[] | TurnUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: TurnCreateOrConnectWithoutAgentInput | TurnCreateOrConnectWithoutAgentInput[]
    upsert?: TurnUpsertWithWhereUniqueWithoutAgentInput | TurnUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: TurnCreateManyAgentInputEnvelope
    set?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    disconnect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    delete?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    connect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    update?: TurnUpdateWithWhereUniqueWithoutAgentInput | TurnUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: TurnUpdateManyWithWhereWithoutAgentInput | TurnUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: TurnScalarWhereInput | TurnScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateOneWithoutAgentNestedInput = {
    create?: XOR<ApiKeyCreateWithoutAgentInput, ApiKeyUncheckedCreateWithoutAgentInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutAgentInput
    upsert?: ApiKeyUpsertWithoutAgentInput
    disconnect?: ApiKeyWhereInput | boolean
    delete?: ApiKeyWhereInput | boolean
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutAgentInput, ApiKeyUpdateWithoutAgentInput>, ApiKeyUncheckedUpdateWithoutAgentInput>
  }

  export type ArtifactUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<ArtifactCreateWithoutAgentInput, ArtifactUncheckedCreateWithoutAgentInput> | ArtifactCreateWithoutAgentInput[] | ArtifactUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutAgentInput | ArtifactCreateOrConnectWithoutAgentInput[]
    upsert?: ArtifactUpsertWithWhereUniqueWithoutAgentInput | ArtifactUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: ArtifactCreateManyAgentInputEnvelope
    set?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    disconnect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    delete?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    update?: ArtifactUpdateWithWhereUniqueWithoutAgentInput | ArtifactUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: ArtifactUpdateManyWithWhereWithoutAgentInput | ArtifactUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
  }

  export type ArtifactTagUncheckedUpdateManyWithoutAppliedByNestedInput = {
    create?: XOR<ArtifactTagCreateWithoutAppliedByInput, ArtifactTagUncheckedCreateWithoutAppliedByInput> | ArtifactTagCreateWithoutAppliedByInput[] | ArtifactTagUncheckedCreateWithoutAppliedByInput[]
    connectOrCreate?: ArtifactTagCreateOrConnectWithoutAppliedByInput | ArtifactTagCreateOrConnectWithoutAppliedByInput[]
    upsert?: ArtifactTagUpsertWithWhereUniqueWithoutAppliedByInput | ArtifactTagUpsertWithWhereUniqueWithoutAppliedByInput[]
    createMany?: ArtifactTagCreateManyAppliedByInputEnvelope
    set?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    disconnect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    delete?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    connect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    update?: ArtifactTagUpdateWithWhereUniqueWithoutAppliedByInput | ArtifactTagUpdateWithWhereUniqueWithoutAppliedByInput[]
    updateMany?: ArtifactTagUpdateManyWithWhereWithoutAppliedByInput | ArtifactTagUpdateManyWithWhereWithoutAppliedByInput[]
    deleteMany?: ArtifactTagScalarWhereInput | ArtifactTagScalarWhereInput[]
  }

  export type WebhookDeliveryUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<WebhookDeliveryCreateWithoutAgentInput, WebhookDeliveryUncheckedCreateWithoutAgentInput> | WebhookDeliveryCreateWithoutAgentInput[] | WebhookDeliveryUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutAgentInput | WebhookDeliveryCreateOrConnectWithoutAgentInput[]
    upsert?: WebhookDeliveryUpsertWithWhereUniqueWithoutAgentInput | WebhookDeliveryUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: WebhookDeliveryCreateManyAgentInputEnvelope
    set?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    disconnect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    delete?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    update?: WebhookDeliveryUpdateWithWhereUniqueWithoutAgentInput | WebhookDeliveryUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: WebhookDeliveryUpdateManyWithWhereWithoutAgentInput | WebhookDeliveryUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
  }

  export type TurnUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<TurnCreateWithoutAgentInput, TurnUncheckedCreateWithoutAgentInput> | TurnCreateWithoutAgentInput[] | TurnUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: TurnCreateOrConnectWithoutAgentInput | TurnCreateOrConnectWithoutAgentInput[]
    upsert?: TurnUpsertWithWhereUniqueWithoutAgentInput | TurnUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: TurnCreateManyAgentInputEnvelope
    set?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    disconnect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    delete?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    connect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    update?: TurnUpdateWithWhereUniqueWithoutAgentInput | TurnUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: TurnUpdateManyWithWhereWithoutAgentInput | TurnUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: TurnScalarWhereInput | TurnScalarWhereInput[]
  }

  export type AgentCreateNestedOneWithoutArtifactsInput = {
    create?: XOR<AgentCreateWithoutArtifactsInput, AgentUncheckedCreateWithoutArtifactsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutArtifactsInput
    connect?: AgentWhereUniqueInput
  }

  export type ArtifactCreateNestedOneWithoutRepliesInput = {
    create?: XOR<ArtifactCreateWithoutRepliesInput, ArtifactUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutRepliesInput
    connect?: ArtifactWhereUniqueInput
  }

  export type ArtifactCreateNestedManyWithoutParentInput = {
    create?: XOR<ArtifactCreateWithoutParentInput, ArtifactUncheckedCreateWithoutParentInput> | ArtifactCreateWithoutParentInput[] | ArtifactUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutParentInput | ArtifactCreateOrConnectWithoutParentInput[]
    createMany?: ArtifactCreateManyParentInputEnvelope
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
  }

  export type ArtifactRelationshipCreateNestedManyWithoutFromInput = {
    create?: XOR<ArtifactRelationshipCreateWithoutFromInput, ArtifactRelationshipUncheckedCreateWithoutFromInput> | ArtifactRelationshipCreateWithoutFromInput[] | ArtifactRelationshipUncheckedCreateWithoutFromInput[]
    connectOrCreate?: ArtifactRelationshipCreateOrConnectWithoutFromInput | ArtifactRelationshipCreateOrConnectWithoutFromInput[]
    createMany?: ArtifactRelationshipCreateManyFromInputEnvelope
    connect?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
  }

  export type ArtifactRelationshipCreateNestedManyWithoutToInput = {
    create?: XOR<ArtifactRelationshipCreateWithoutToInput, ArtifactRelationshipUncheckedCreateWithoutToInput> | ArtifactRelationshipCreateWithoutToInput[] | ArtifactRelationshipUncheckedCreateWithoutToInput[]
    connectOrCreate?: ArtifactRelationshipCreateOrConnectWithoutToInput | ArtifactRelationshipCreateOrConnectWithoutToInput[]
    createMany?: ArtifactRelationshipCreateManyToInputEnvelope
    connect?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
  }

  export type ArtifactTagCreateNestedManyWithoutArtifactInput = {
    create?: XOR<ArtifactTagCreateWithoutArtifactInput, ArtifactTagUncheckedCreateWithoutArtifactInput> | ArtifactTagCreateWithoutArtifactInput[] | ArtifactTagUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ArtifactTagCreateOrConnectWithoutArtifactInput | ArtifactTagCreateOrConnectWithoutArtifactInput[]
    createMany?: ArtifactTagCreateManyArtifactInputEnvelope
    connect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
  }

  export type TurnCreateNestedOneWithoutArtifactInput = {
    create?: XOR<TurnCreateWithoutArtifactInput, TurnUncheckedCreateWithoutArtifactInput>
    connectOrCreate?: TurnCreateOrConnectWithoutArtifactInput
    connect?: TurnWhereUniqueInput
  }

  export type ArtifactUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ArtifactCreateWithoutParentInput, ArtifactUncheckedCreateWithoutParentInput> | ArtifactCreateWithoutParentInput[] | ArtifactUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutParentInput | ArtifactCreateOrConnectWithoutParentInput[]
    createMany?: ArtifactCreateManyParentInputEnvelope
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
  }

  export type ArtifactRelationshipUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<ArtifactRelationshipCreateWithoutFromInput, ArtifactRelationshipUncheckedCreateWithoutFromInput> | ArtifactRelationshipCreateWithoutFromInput[] | ArtifactRelationshipUncheckedCreateWithoutFromInput[]
    connectOrCreate?: ArtifactRelationshipCreateOrConnectWithoutFromInput | ArtifactRelationshipCreateOrConnectWithoutFromInput[]
    createMany?: ArtifactRelationshipCreateManyFromInputEnvelope
    connect?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
  }

  export type ArtifactRelationshipUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<ArtifactRelationshipCreateWithoutToInput, ArtifactRelationshipUncheckedCreateWithoutToInput> | ArtifactRelationshipCreateWithoutToInput[] | ArtifactRelationshipUncheckedCreateWithoutToInput[]
    connectOrCreate?: ArtifactRelationshipCreateOrConnectWithoutToInput | ArtifactRelationshipCreateOrConnectWithoutToInput[]
    createMany?: ArtifactRelationshipCreateManyToInputEnvelope
    connect?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
  }

  export type ArtifactTagUncheckedCreateNestedManyWithoutArtifactInput = {
    create?: XOR<ArtifactTagCreateWithoutArtifactInput, ArtifactTagUncheckedCreateWithoutArtifactInput> | ArtifactTagCreateWithoutArtifactInput[] | ArtifactTagUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ArtifactTagCreateOrConnectWithoutArtifactInput | ArtifactTagCreateOrConnectWithoutArtifactInput[]
    createMany?: ArtifactTagCreateManyArtifactInputEnvelope
    connect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
  }

  export type TurnUncheckedCreateNestedOneWithoutArtifactInput = {
    create?: XOR<TurnCreateWithoutArtifactInput, TurnUncheckedCreateWithoutArtifactInput>
    connectOrCreate?: TurnCreateOrConnectWithoutArtifactInput
    connect?: TurnWhereUniqueInput
  }

  export type EnumArtifactTypeFieldUpdateOperationsInput = {
    set?: $Enums.ArtifactType
  }

  export type AgentUpdateOneRequiredWithoutArtifactsNestedInput = {
    create?: XOR<AgentCreateWithoutArtifactsInput, AgentUncheckedCreateWithoutArtifactsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutArtifactsInput
    upsert?: AgentUpsertWithoutArtifactsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutArtifactsInput, AgentUpdateWithoutArtifactsInput>, AgentUncheckedUpdateWithoutArtifactsInput>
  }

  export type ArtifactUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<ArtifactCreateWithoutRepliesInput, ArtifactUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutRepliesInput
    upsert?: ArtifactUpsertWithoutRepliesInput
    disconnect?: ArtifactWhereInput | boolean
    delete?: ArtifactWhereInput | boolean
    connect?: ArtifactWhereUniqueInput
    update?: XOR<XOR<ArtifactUpdateToOneWithWhereWithoutRepliesInput, ArtifactUpdateWithoutRepliesInput>, ArtifactUncheckedUpdateWithoutRepliesInput>
  }

  export type ArtifactUpdateManyWithoutParentNestedInput = {
    create?: XOR<ArtifactCreateWithoutParentInput, ArtifactUncheckedCreateWithoutParentInput> | ArtifactCreateWithoutParentInput[] | ArtifactUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutParentInput | ArtifactCreateOrConnectWithoutParentInput[]
    upsert?: ArtifactUpsertWithWhereUniqueWithoutParentInput | ArtifactUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ArtifactCreateManyParentInputEnvelope
    set?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    disconnect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    delete?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    update?: ArtifactUpdateWithWhereUniqueWithoutParentInput | ArtifactUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ArtifactUpdateManyWithWhereWithoutParentInput | ArtifactUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
  }

  export type ArtifactRelationshipUpdateManyWithoutFromNestedInput = {
    create?: XOR<ArtifactRelationshipCreateWithoutFromInput, ArtifactRelationshipUncheckedCreateWithoutFromInput> | ArtifactRelationshipCreateWithoutFromInput[] | ArtifactRelationshipUncheckedCreateWithoutFromInput[]
    connectOrCreate?: ArtifactRelationshipCreateOrConnectWithoutFromInput | ArtifactRelationshipCreateOrConnectWithoutFromInput[]
    upsert?: ArtifactRelationshipUpsertWithWhereUniqueWithoutFromInput | ArtifactRelationshipUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: ArtifactRelationshipCreateManyFromInputEnvelope
    set?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    disconnect?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    delete?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    connect?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    update?: ArtifactRelationshipUpdateWithWhereUniqueWithoutFromInput | ArtifactRelationshipUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: ArtifactRelationshipUpdateManyWithWhereWithoutFromInput | ArtifactRelationshipUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: ArtifactRelationshipScalarWhereInput | ArtifactRelationshipScalarWhereInput[]
  }

  export type ArtifactRelationshipUpdateManyWithoutToNestedInput = {
    create?: XOR<ArtifactRelationshipCreateWithoutToInput, ArtifactRelationshipUncheckedCreateWithoutToInput> | ArtifactRelationshipCreateWithoutToInput[] | ArtifactRelationshipUncheckedCreateWithoutToInput[]
    connectOrCreate?: ArtifactRelationshipCreateOrConnectWithoutToInput | ArtifactRelationshipCreateOrConnectWithoutToInput[]
    upsert?: ArtifactRelationshipUpsertWithWhereUniqueWithoutToInput | ArtifactRelationshipUpsertWithWhereUniqueWithoutToInput[]
    createMany?: ArtifactRelationshipCreateManyToInputEnvelope
    set?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    disconnect?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    delete?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    connect?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    update?: ArtifactRelationshipUpdateWithWhereUniqueWithoutToInput | ArtifactRelationshipUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: ArtifactRelationshipUpdateManyWithWhereWithoutToInput | ArtifactRelationshipUpdateManyWithWhereWithoutToInput[]
    deleteMany?: ArtifactRelationshipScalarWhereInput | ArtifactRelationshipScalarWhereInput[]
  }

  export type ArtifactTagUpdateManyWithoutArtifactNestedInput = {
    create?: XOR<ArtifactTagCreateWithoutArtifactInput, ArtifactTagUncheckedCreateWithoutArtifactInput> | ArtifactTagCreateWithoutArtifactInput[] | ArtifactTagUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ArtifactTagCreateOrConnectWithoutArtifactInput | ArtifactTagCreateOrConnectWithoutArtifactInput[]
    upsert?: ArtifactTagUpsertWithWhereUniqueWithoutArtifactInput | ArtifactTagUpsertWithWhereUniqueWithoutArtifactInput[]
    createMany?: ArtifactTagCreateManyArtifactInputEnvelope
    set?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    disconnect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    delete?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    connect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    update?: ArtifactTagUpdateWithWhereUniqueWithoutArtifactInput | ArtifactTagUpdateWithWhereUniqueWithoutArtifactInput[]
    updateMany?: ArtifactTagUpdateManyWithWhereWithoutArtifactInput | ArtifactTagUpdateManyWithWhereWithoutArtifactInput[]
    deleteMany?: ArtifactTagScalarWhereInput | ArtifactTagScalarWhereInput[]
  }

  export type TurnUpdateOneWithoutArtifactNestedInput = {
    create?: XOR<TurnCreateWithoutArtifactInput, TurnUncheckedCreateWithoutArtifactInput>
    connectOrCreate?: TurnCreateOrConnectWithoutArtifactInput
    upsert?: TurnUpsertWithoutArtifactInput
    disconnect?: TurnWhereInput | boolean
    delete?: TurnWhereInput | boolean
    connect?: TurnWhereUniqueInput
    update?: XOR<XOR<TurnUpdateToOneWithWhereWithoutArtifactInput, TurnUpdateWithoutArtifactInput>, TurnUncheckedUpdateWithoutArtifactInput>
  }

  export type ArtifactUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ArtifactCreateWithoutParentInput, ArtifactUncheckedCreateWithoutParentInput> | ArtifactCreateWithoutParentInput[] | ArtifactUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ArtifactCreateOrConnectWithoutParentInput | ArtifactCreateOrConnectWithoutParentInput[]
    upsert?: ArtifactUpsertWithWhereUniqueWithoutParentInput | ArtifactUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ArtifactCreateManyParentInputEnvelope
    set?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    disconnect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    delete?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    connect?: ArtifactWhereUniqueInput | ArtifactWhereUniqueInput[]
    update?: ArtifactUpdateWithWhereUniqueWithoutParentInput | ArtifactUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ArtifactUpdateManyWithWhereWithoutParentInput | ArtifactUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
  }

  export type ArtifactRelationshipUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<ArtifactRelationshipCreateWithoutFromInput, ArtifactRelationshipUncheckedCreateWithoutFromInput> | ArtifactRelationshipCreateWithoutFromInput[] | ArtifactRelationshipUncheckedCreateWithoutFromInput[]
    connectOrCreate?: ArtifactRelationshipCreateOrConnectWithoutFromInput | ArtifactRelationshipCreateOrConnectWithoutFromInput[]
    upsert?: ArtifactRelationshipUpsertWithWhereUniqueWithoutFromInput | ArtifactRelationshipUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: ArtifactRelationshipCreateManyFromInputEnvelope
    set?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    disconnect?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    delete?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    connect?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    update?: ArtifactRelationshipUpdateWithWhereUniqueWithoutFromInput | ArtifactRelationshipUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: ArtifactRelationshipUpdateManyWithWhereWithoutFromInput | ArtifactRelationshipUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: ArtifactRelationshipScalarWhereInput | ArtifactRelationshipScalarWhereInput[]
  }

  export type ArtifactRelationshipUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<ArtifactRelationshipCreateWithoutToInput, ArtifactRelationshipUncheckedCreateWithoutToInput> | ArtifactRelationshipCreateWithoutToInput[] | ArtifactRelationshipUncheckedCreateWithoutToInput[]
    connectOrCreate?: ArtifactRelationshipCreateOrConnectWithoutToInput | ArtifactRelationshipCreateOrConnectWithoutToInput[]
    upsert?: ArtifactRelationshipUpsertWithWhereUniqueWithoutToInput | ArtifactRelationshipUpsertWithWhereUniqueWithoutToInput[]
    createMany?: ArtifactRelationshipCreateManyToInputEnvelope
    set?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    disconnect?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    delete?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    connect?: ArtifactRelationshipWhereUniqueInput | ArtifactRelationshipWhereUniqueInput[]
    update?: ArtifactRelationshipUpdateWithWhereUniqueWithoutToInput | ArtifactRelationshipUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: ArtifactRelationshipUpdateManyWithWhereWithoutToInput | ArtifactRelationshipUpdateManyWithWhereWithoutToInput[]
    deleteMany?: ArtifactRelationshipScalarWhereInput | ArtifactRelationshipScalarWhereInput[]
  }

  export type ArtifactTagUncheckedUpdateManyWithoutArtifactNestedInput = {
    create?: XOR<ArtifactTagCreateWithoutArtifactInput, ArtifactTagUncheckedCreateWithoutArtifactInput> | ArtifactTagCreateWithoutArtifactInput[] | ArtifactTagUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ArtifactTagCreateOrConnectWithoutArtifactInput | ArtifactTagCreateOrConnectWithoutArtifactInput[]
    upsert?: ArtifactTagUpsertWithWhereUniqueWithoutArtifactInput | ArtifactTagUpsertWithWhereUniqueWithoutArtifactInput[]
    createMany?: ArtifactTagCreateManyArtifactInputEnvelope
    set?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    disconnect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    delete?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    connect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    update?: ArtifactTagUpdateWithWhereUniqueWithoutArtifactInput | ArtifactTagUpdateWithWhereUniqueWithoutArtifactInput[]
    updateMany?: ArtifactTagUpdateManyWithWhereWithoutArtifactInput | ArtifactTagUpdateManyWithWhereWithoutArtifactInput[]
    deleteMany?: ArtifactTagScalarWhereInput | ArtifactTagScalarWhereInput[]
  }

  export type TurnUncheckedUpdateOneWithoutArtifactNestedInput = {
    create?: XOR<TurnCreateWithoutArtifactInput, TurnUncheckedCreateWithoutArtifactInput>
    connectOrCreate?: TurnCreateOrConnectWithoutArtifactInput
    upsert?: TurnUpsertWithoutArtifactInput
    disconnect?: TurnWhereInput | boolean
    delete?: TurnWhereInput | boolean
    connect?: TurnWhereUniqueInput
    update?: XOR<XOR<TurnUpdateToOneWithWhereWithoutArtifactInput, TurnUpdateWithoutArtifactInput>, TurnUncheckedUpdateWithoutArtifactInput>
  }

  export type AgentCreateNestedOneWithoutTurnsInput = {
    create?: XOR<AgentCreateWithoutTurnsInput, AgentUncheckedCreateWithoutTurnsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutTurnsInput
    connect?: AgentWhereUniqueInput
  }

  export type ArtifactCreateNestedOneWithoutTurnInput = {
    create?: XOR<ArtifactCreateWithoutTurnInput, ArtifactUncheckedCreateWithoutTurnInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutTurnInput
    connect?: ArtifactWhereUniqueInput
  }

  export type EnumTurnStatusFieldUpdateOperationsInput = {
    set?: $Enums.TurnStatus
  }

  export type AgentUpdateOneRequiredWithoutTurnsNestedInput = {
    create?: XOR<AgentCreateWithoutTurnsInput, AgentUncheckedCreateWithoutTurnsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutTurnsInput
    upsert?: AgentUpsertWithoutTurnsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutTurnsInput, AgentUpdateWithoutTurnsInput>, AgentUncheckedUpdateWithoutTurnsInput>
  }

  export type ArtifactUpdateOneWithoutTurnNestedInput = {
    create?: XOR<ArtifactCreateWithoutTurnInput, ArtifactUncheckedCreateWithoutTurnInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutTurnInput
    upsert?: ArtifactUpsertWithoutTurnInput
    disconnect?: ArtifactWhereInput | boolean
    delete?: ArtifactWhereInput | boolean
    connect?: ArtifactWhereUniqueInput
    update?: XOR<XOR<ArtifactUpdateToOneWithWhereWithoutTurnInput, ArtifactUpdateWithoutTurnInput>, ArtifactUncheckedUpdateWithoutTurnInput>
  }

  export type ArtifactCreateNestedOneWithoutOutgoingRelationsInput = {
    create?: XOR<ArtifactCreateWithoutOutgoingRelationsInput, ArtifactUncheckedCreateWithoutOutgoingRelationsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutOutgoingRelationsInput
    connect?: ArtifactWhereUniqueInput
  }

  export type ArtifactCreateNestedOneWithoutIncomingRelationsInput = {
    create?: XOR<ArtifactCreateWithoutIncomingRelationsInput, ArtifactUncheckedCreateWithoutIncomingRelationsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutIncomingRelationsInput
    connect?: ArtifactWhereUniqueInput
  }

  export type EnumRelationshipTypeFieldUpdateOperationsInput = {
    set?: $Enums.RelationshipType
  }

  export type ArtifactUpdateOneRequiredWithoutOutgoingRelationsNestedInput = {
    create?: XOR<ArtifactCreateWithoutOutgoingRelationsInput, ArtifactUncheckedCreateWithoutOutgoingRelationsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutOutgoingRelationsInput
    upsert?: ArtifactUpsertWithoutOutgoingRelationsInput
    connect?: ArtifactWhereUniqueInput
    update?: XOR<XOR<ArtifactUpdateToOneWithWhereWithoutOutgoingRelationsInput, ArtifactUpdateWithoutOutgoingRelationsInput>, ArtifactUncheckedUpdateWithoutOutgoingRelationsInput>
  }

  export type ArtifactUpdateOneRequiredWithoutIncomingRelationsNestedInput = {
    create?: XOR<ArtifactCreateWithoutIncomingRelationsInput, ArtifactUncheckedCreateWithoutIncomingRelationsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutIncomingRelationsInput
    upsert?: ArtifactUpsertWithoutIncomingRelationsInput
    connect?: ArtifactWhereUniqueInput
    update?: XOR<XOR<ArtifactUpdateToOneWithWhereWithoutIncomingRelationsInput, ArtifactUpdateWithoutIncomingRelationsInput>, ArtifactUncheckedUpdateWithoutIncomingRelationsInput>
  }

  export type ArtifactTagCreateNestedManyWithoutTagInput = {
    create?: XOR<ArtifactTagCreateWithoutTagInput, ArtifactTagUncheckedCreateWithoutTagInput> | ArtifactTagCreateWithoutTagInput[] | ArtifactTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ArtifactTagCreateOrConnectWithoutTagInput | ArtifactTagCreateOrConnectWithoutTagInput[]
    createMany?: ArtifactTagCreateManyTagInputEnvelope
    connect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
  }

  export type ArtifactTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<ArtifactTagCreateWithoutTagInput, ArtifactTagUncheckedCreateWithoutTagInput> | ArtifactTagCreateWithoutTagInput[] | ArtifactTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ArtifactTagCreateOrConnectWithoutTagInput | ArtifactTagCreateOrConnectWithoutTagInput[]
    createMany?: ArtifactTagCreateManyTagInputEnvelope
    connect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
  }

  export type ArtifactTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<ArtifactTagCreateWithoutTagInput, ArtifactTagUncheckedCreateWithoutTagInput> | ArtifactTagCreateWithoutTagInput[] | ArtifactTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ArtifactTagCreateOrConnectWithoutTagInput | ArtifactTagCreateOrConnectWithoutTagInput[]
    upsert?: ArtifactTagUpsertWithWhereUniqueWithoutTagInput | ArtifactTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ArtifactTagCreateManyTagInputEnvelope
    set?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    disconnect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    delete?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    connect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    update?: ArtifactTagUpdateWithWhereUniqueWithoutTagInput | ArtifactTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ArtifactTagUpdateManyWithWhereWithoutTagInput | ArtifactTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ArtifactTagScalarWhereInput | ArtifactTagScalarWhereInput[]
  }

  export type ArtifactTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<ArtifactTagCreateWithoutTagInput, ArtifactTagUncheckedCreateWithoutTagInput> | ArtifactTagCreateWithoutTagInput[] | ArtifactTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ArtifactTagCreateOrConnectWithoutTagInput | ArtifactTagCreateOrConnectWithoutTagInput[]
    upsert?: ArtifactTagUpsertWithWhereUniqueWithoutTagInput | ArtifactTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ArtifactTagCreateManyTagInputEnvelope
    set?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    disconnect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    delete?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    connect?: ArtifactTagWhereUniqueInput | ArtifactTagWhereUniqueInput[]
    update?: ArtifactTagUpdateWithWhereUniqueWithoutTagInput | ArtifactTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ArtifactTagUpdateManyWithWhereWithoutTagInput | ArtifactTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ArtifactTagScalarWhereInput | ArtifactTagScalarWhereInput[]
  }

  export type ArtifactCreateNestedOneWithoutTagsInput = {
    create?: XOR<ArtifactCreateWithoutTagsInput, ArtifactUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutTagsInput
    connect?: ArtifactWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutArtifactTagsInput = {
    create?: XOR<TagCreateWithoutArtifactTagsInput, TagUncheckedCreateWithoutArtifactTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutArtifactTagsInput
    connect?: TagWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutArtifactTagsInput = {
    create?: XOR<AgentCreateWithoutArtifactTagsInput, AgentUncheckedCreateWithoutArtifactTagsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutArtifactTagsInput
    connect?: AgentWhereUniqueInput
  }

  export type ArtifactUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<ArtifactCreateWithoutTagsInput, ArtifactUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutTagsInput
    upsert?: ArtifactUpsertWithoutTagsInput
    connect?: ArtifactWhereUniqueInput
    update?: XOR<XOR<ArtifactUpdateToOneWithWhereWithoutTagsInput, ArtifactUpdateWithoutTagsInput>, ArtifactUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutArtifactTagsNestedInput = {
    create?: XOR<TagCreateWithoutArtifactTagsInput, TagUncheckedCreateWithoutArtifactTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutArtifactTagsInput
    upsert?: TagUpsertWithoutArtifactTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutArtifactTagsInput, TagUpdateWithoutArtifactTagsInput>, TagUncheckedUpdateWithoutArtifactTagsInput>
  }

  export type AgentUpdateOneRequiredWithoutArtifactTagsNestedInput = {
    create?: XOR<AgentCreateWithoutArtifactTagsInput, AgentUncheckedCreateWithoutArtifactTagsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutArtifactTagsInput
    upsert?: AgentUpsertWithoutArtifactTagsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutArtifactTagsInput, AgentUpdateWithoutArtifactTagsInput>, AgentUncheckedUpdateWithoutArtifactTagsInput>
  }

  export type AgentCreateNestedOneWithoutWebhookDeliveriesInput = {
    create?: XOR<AgentCreateWithoutWebhookDeliveriesInput, AgentUncheckedCreateWithoutWebhookDeliveriesInput>
    connectOrCreate?: AgentCreateOrConnectWithoutWebhookDeliveriesInput
    connect?: AgentWhereUniqueInput
  }

  export type EnumWebhookEventFieldUpdateOperationsInput = {
    set?: $Enums.WebhookEvent
  }

  export type EnumWebhookDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.WebhookDeliveryStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgentUpdateOneRequiredWithoutWebhookDeliveriesNestedInput = {
    create?: XOR<AgentCreateWithoutWebhookDeliveriesInput, AgentUncheckedCreateWithoutWebhookDeliveriesInput>
    connectOrCreate?: AgentCreateOrConnectWithoutWebhookDeliveriesInput
    upsert?: AgentUpsertWithoutWebhookDeliveriesInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutWebhookDeliveriesInput, AgentUpdateWithoutWebhookDeliveriesInput>, AgentUncheckedUpdateWithoutWebhookDeliveriesInput>
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

  export type NestedEnumApiKeyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusFilter<$PrismaModel> | $Enums.ApiKeyStatus
  }

  export type NestedEnumApiKeyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApiKeyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiKeyStatusFilter<$PrismaModel>
    _max?: NestedEnumApiKeyStatusFilter<$PrismaModel>
  }

  export type NestedEnumAgentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentStatusFilter<$PrismaModel> | $Enums.AgentStatus
  }

  export type NestedEnumAgentRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentRole | EnumAgentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentRoleFilter<$PrismaModel> | $Enums.AgentRole
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

  export type NestedEnumAgentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AgentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentStatusFilter<$PrismaModel>
    _max?: NestedEnumAgentStatusFilter<$PrismaModel>
  }

  export type NestedEnumAgentRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentRole | EnumAgentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentRoleWithAggregatesFilter<$PrismaModel> | $Enums.AgentRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentRoleFilter<$PrismaModel>
    _max?: NestedEnumAgentRoleFilter<$PrismaModel>
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

  export type NestedEnumArtifactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ArtifactType | EnumArtifactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArtifactType[] | ListEnumArtifactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArtifactType[] | ListEnumArtifactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArtifactTypeFilter<$PrismaModel> | $Enums.ArtifactType
  }

  export type NestedEnumArtifactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArtifactType | EnumArtifactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArtifactType[] | ListEnumArtifactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArtifactType[] | ListEnumArtifactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArtifactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ArtifactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArtifactTypeFilter<$PrismaModel>
    _max?: NestedEnumArtifactTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTurnStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TurnStatus | EnumTurnStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TurnStatus[] | ListEnumTurnStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TurnStatus[] | ListEnumTurnStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTurnStatusFilter<$PrismaModel> | $Enums.TurnStatus
  }

  export type NestedEnumTurnStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TurnStatus | EnumTurnStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TurnStatus[] | ListEnumTurnStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TurnStatus[] | ListEnumTurnStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTurnStatusWithAggregatesFilter<$PrismaModel> | $Enums.TurnStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTurnStatusFilter<$PrismaModel>
    _max?: NestedEnumTurnStatusFilter<$PrismaModel>
  }

  export type NestedEnumRelationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeFilter<$PrismaModel> | $Enums.RelationshipType
  }

  export type NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationshipTypeFilter<$PrismaModel>
  }

  export type NestedEnumWebhookEventFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookEvent | EnumWebhookEventFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookEvent[] | ListEnumWebhookEventFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookEvent[] | ListEnumWebhookEventFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookEventFilter<$PrismaModel> | $Enums.WebhookEvent
  }

  export type NestedEnumWebhookDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookDeliveryStatus | EnumWebhookDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookDeliveryStatus[] | ListEnumWebhookDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookDeliveryStatus[] | ListEnumWebhookDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookDeliveryStatusFilter<$PrismaModel> | $Enums.WebhookDeliveryStatus
  }

  export type NestedEnumWebhookEventWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookEvent | EnumWebhookEventFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookEvent[] | ListEnumWebhookEventFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookEvent[] | ListEnumWebhookEventFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookEventWithAggregatesFilter<$PrismaModel> | $Enums.WebhookEvent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebhookEventFilter<$PrismaModel>
    _max?: NestedEnumWebhookEventFilter<$PrismaModel>
  }

  export type NestedEnumWebhookDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookDeliveryStatus | EnumWebhookDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookDeliveryStatus[] | ListEnumWebhookDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookDeliveryStatus[] | ListEnumWebhookDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebhookDeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebhookDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumWebhookDeliveryStatusFilter<$PrismaModel>
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

  export type ApiKeyCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    status?: $Enums.ApiKeyStatus
    createdAt?: Date | string
    agent?: AgentCreateNestedOneWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    agentId?: string | null
    status?: $Enums.ApiKeyStatus
    createdAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyCreateManyUserInputEnvelope = {
    data: ApiKeyCreateManyUserInput | ApiKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AgentCreateWithoutUserInput = {
    id?: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    apiKey?: ApiKeyCreateNestedOneWithoutAgentInput
    artifacts?: ArtifactCreateNestedManyWithoutAgentInput
    artifactTags?: ArtifactTagCreateNestedManyWithoutAppliedByInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutAgentInput
    turns?: TurnCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutUserInput = {
    id?: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    apiKey?: ApiKeyUncheckedCreateNestedOneWithoutAgentInput
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutAgentInput
    artifactTags?: ArtifactTagUncheckedCreateNestedManyWithoutAppliedByInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutAgentInput
    turns?: TurnUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutUserInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutUserInput, AgentUncheckedCreateWithoutUserInput>
  }

  export type AgentCreateManyUserInputEnvelope = {
    data: AgentCreateManyUserInput | AgentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutUserInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    tokenHash?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    agentId?: StringNullableFilter<"ApiKey"> | string | null
    status?: EnumApiKeyStatusFilter<"ApiKey"> | $Enums.ApiKeyStatus
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type AgentUpsertWithWhereUniqueWithoutUserInput = {
    where: AgentWhereUniqueInput
    update: XOR<AgentUpdateWithoutUserInput, AgentUncheckedUpdateWithoutUserInput>
    create: XOR<AgentCreateWithoutUserInput, AgentUncheckedCreateWithoutUserInput>
  }

  export type AgentUpdateWithWhereUniqueWithoutUserInput = {
    where: AgentWhereUniqueInput
    data: XOR<AgentUpdateWithoutUserInput, AgentUncheckedUpdateWithoutUserInput>
  }

  export type AgentUpdateManyWithWhereWithoutUserInput = {
    where: AgentScalarWhereInput
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyWithoutUserInput>
  }

  export type AgentScalarWhereInput = {
    AND?: AgentScalarWhereInput | AgentScalarWhereInput[]
    OR?: AgentScalarWhereInput[]
    NOT?: AgentScalarWhereInput | AgentScalarWhereInput[]
    id?: StringFilter<"Agent"> | string
    userId?: StringFilter<"Agent"> | string
    apiKeyId?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    webhookUrl?: StringNullableFilter<"Agent"> | string | null
    cronSchedule?: StringNullableFilter<"Agent"> | string | null
    status?: EnumAgentStatusFilter<"Agent"> | $Enums.AgentStatus
    role?: EnumAgentRoleFilter<"Agent"> | $Enums.AgentRole
    citationScore?: FloatFilter<"Agent"> | number
    collaborationScore?: FloatFilter<"Agent"> | number
    personalNoveltyScore?: FloatFilter<"Agent"> | number
    lineageScore?: FloatFilter<"Agent"> | number
    lastActiveAt?: DateTimeNullableFilter<"Agent"> | Date | string | null
    createdAt?: DateTimeFilter<"Agent"> | Date | string
  }

  export type UserCreateWithoutApiKeysInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
    agents?: AgentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiKeysInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
    agents?: AgentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
  }

  export type AgentCreateWithoutApiKeyInput = {
    id?: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAgentsInput
    artifacts?: ArtifactCreateNestedManyWithoutAgentInput
    artifactTags?: ArtifactTagCreateNestedManyWithoutAppliedByInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutAgentInput
    turns?: TurnCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutApiKeyInput = {
    id?: string
    userId: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutAgentInput
    artifactTags?: ArtifactTagUncheckedCreateNestedManyWithoutAppliedByInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutAgentInput
    turns?: TurnUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutApiKeyInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutApiKeyInput, AgentUncheckedCreateWithoutApiKeyInput>
  }

  export type UserUpsertWithoutApiKeysInput = {
    update: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agents?: AgentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agents?: AgentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AgentUpsertWithoutApiKeyInput = {
    update: XOR<AgentUpdateWithoutApiKeyInput, AgentUncheckedUpdateWithoutApiKeyInput>
    create: XOR<AgentCreateWithoutApiKeyInput, AgentUncheckedCreateWithoutApiKeyInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutApiKeyInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutApiKeyInput, AgentUncheckedUpdateWithoutApiKeyInput>
  }

  export type AgentUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAgentsNestedInput
    artifacts?: ArtifactUpdateManyWithoutAgentNestedInput
    artifactTags?: ArtifactTagUpdateManyWithoutAppliedByNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutAgentNestedInput
    turns?: TurnUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifacts?: ArtifactUncheckedUpdateManyWithoutAgentNestedInput
    artifactTags?: ArtifactTagUncheckedUpdateManyWithoutAppliedByNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutAgentNestedInput
    turns?: TurnUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type UserCreateWithoutAgentsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAgentsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAgentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAgentsInput, UserUncheckedCreateWithoutAgentsInput>
  }

  export type ApiKeyCreateWithoutAgentInput = {
    id?: string
    tokenHash: string
    status?: $Enums.ApiKeyStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateWithoutAgentInput = {
    id?: string
    tokenHash: string
    userId: string
    status?: $Enums.ApiKeyStatus
    createdAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutAgentInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutAgentInput, ApiKeyUncheckedCreateWithoutAgentInput>
  }

  export type ArtifactCreateWithoutAgentInput = {
    id?: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    parent?: ArtifactCreateNestedOneWithoutRepliesInput
    replies?: ArtifactCreateNestedManyWithoutParentInput
    outgoingRelations?: ArtifactRelationshipCreateNestedManyWithoutFromInput
    incomingRelations?: ArtifactRelationshipCreateNestedManyWithoutToInput
    tags?: ArtifactTagCreateNestedManyWithoutArtifactInput
    turn?: TurnCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateWithoutAgentInput = {
    id?: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    parentArtifactId?: string | null
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    replies?: ArtifactUncheckedCreateNestedManyWithoutParentInput
    outgoingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutFromInput
    incomingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutToInput
    tags?: ArtifactTagUncheckedCreateNestedManyWithoutArtifactInput
    turn?: TurnUncheckedCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactCreateOrConnectWithoutAgentInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutAgentInput, ArtifactUncheckedCreateWithoutAgentInput>
  }

  export type ArtifactCreateManyAgentInputEnvelope = {
    data: ArtifactCreateManyAgentInput | ArtifactCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type ArtifactTagCreateWithoutAppliedByInput = {
    artifact: ArtifactCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutArtifactTagsInput
  }

  export type ArtifactTagUncheckedCreateWithoutAppliedByInput = {
    artifactId: string
    tagId: string
  }

  export type ArtifactTagCreateOrConnectWithoutAppliedByInput = {
    where: ArtifactTagWhereUniqueInput
    create: XOR<ArtifactTagCreateWithoutAppliedByInput, ArtifactTagUncheckedCreateWithoutAppliedByInput>
  }

  export type ArtifactTagCreateManyAppliedByInputEnvelope = {
    data: ArtifactTagCreateManyAppliedByInput | ArtifactTagCreateManyAppliedByInput[]
    skipDuplicates?: boolean
  }

  export type WebhookDeliveryCreateWithoutAgentInput = {
    id?: string
    event: $Enums.WebhookEvent
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.WebhookDeliveryStatus
    attempts?: number
    lastAttemptAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookDeliveryUncheckedCreateWithoutAgentInput = {
    id?: string
    event: $Enums.WebhookEvent
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.WebhookDeliveryStatus
    attempts?: number
    lastAttemptAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookDeliveryCreateOrConnectWithoutAgentInput = {
    where: WebhookDeliveryWhereUniqueInput
    create: XOR<WebhookDeliveryCreateWithoutAgentInput, WebhookDeliveryUncheckedCreateWithoutAgentInput>
  }

  export type WebhookDeliveryCreateManyAgentInputEnvelope = {
    data: WebhookDeliveryCreateManyAgentInput | WebhookDeliveryCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type TurnCreateWithoutAgentInput = {
    id?: string
    token: string
    systemPrompt: string
    contextSnapshot: JsonNullValueInput | InputJsonValue
    status?: $Enums.TurnStatus
    expiresAt: Date | string
    submittedAt?: Date | string | null
    createdAt?: Date | string
    artifact?: ArtifactCreateNestedOneWithoutTurnInput
  }

  export type TurnUncheckedCreateWithoutAgentInput = {
    id?: string
    token: string
    systemPrompt: string
    contextSnapshot: JsonNullValueInput | InputJsonValue
    status?: $Enums.TurnStatus
    expiresAt: Date | string
    submittedAt?: Date | string | null
    artifactId?: string | null
    createdAt?: Date | string
  }

  export type TurnCreateOrConnectWithoutAgentInput = {
    where: TurnWhereUniqueInput
    create: XOR<TurnCreateWithoutAgentInput, TurnUncheckedCreateWithoutAgentInput>
  }

  export type TurnCreateManyAgentInputEnvelope = {
    data: TurnCreateManyAgentInput | TurnCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAgentsInput = {
    update: XOR<UserUpdateWithoutAgentsInput, UserUncheckedUpdateWithoutAgentsInput>
    create: XOR<UserCreateWithoutAgentsInput, UserUncheckedCreateWithoutAgentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAgentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAgentsInput, UserUncheckedUpdateWithoutAgentsInput>
  }

  export type UserUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApiKeyUpsertWithoutAgentInput = {
    update: XOR<ApiKeyUpdateWithoutAgentInput, ApiKeyUncheckedUpdateWithoutAgentInput>
    create: XOR<ApiKeyCreateWithoutAgentInput, ApiKeyUncheckedCreateWithoutAgentInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutAgentInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutAgentInput, ApiKeyUncheckedUpdateWithoutAgentInput>
  }

  export type ApiKeyUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactUpsertWithWhereUniqueWithoutAgentInput = {
    where: ArtifactWhereUniqueInput
    update: XOR<ArtifactUpdateWithoutAgentInput, ArtifactUncheckedUpdateWithoutAgentInput>
    create: XOR<ArtifactCreateWithoutAgentInput, ArtifactUncheckedCreateWithoutAgentInput>
  }

  export type ArtifactUpdateWithWhereUniqueWithoutAgentInput = {
    where: ArtifactWhereUniqueInput
    data: XOR<ArtifactUpdateWithoutAgentInput, ArtifactUncheckedUpdateWithoutAgentInput>
  }

  export type ArtifactUpdateManyWithWhereWithoutAgentInput = {
    where: ArtifactScalarWhereInput
    data: XOR<ArtifactUpdateManyMutationInput, ArtifactUncheckedUpdateManyWithoutAgentInput>
  }

  export type ArtifactScalarWhereInput = {
    AND?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
    OR?: ArtifactScalarWhereInput[]
    NOT?: ArtifactScalarWhereInput | ArtifactScalarWhereInput[]
    id?: StringFilter<"Artifact"> | string
    agentId?: StringFilter<"Artifact"> | string
    type?: EnumArtifactTypeFilter<"Artifact"> | $Enums.ArtifactType
    typeLabel?: StringNullableFilter<"Artifact"> | string | null
    title?: StringFilter<"Artifact"> | string
    content?: JsonFilter<"Artifact">
    parentArtifactId?: StringNullableFilter<"Artifact"> | string | null
    personalNoveltyScore?: FloatFilter<"Artifact"> | number
    networkNoveltyScore?: FloatFilter<"Artifact"> | number
    createdAt?: DateTimeFilter<"Artifact"> | Date | string
  }

  export type ArtifactTagUpsertWithWhereUniqueWithoutAppliedByInput = {
    where: ArtifactTagWhereUniqueInput
    update: XOR<ArtifactTagUpdateWithoutAppliedByInput, ArtifactTagUncheckedUpdateWithoutAppliedByInput>
    create: XOR<ArtifactTagCreateWithoutAppliedByInput, ArtifactTagUncheckedCreateWithoutAppliedByInput>
  }

  export type ArtifactTagUpdateWithWhereUniqueWithoutAppliedByInput = {
    where: ArtifactTagWhereUniqueInput
    data: XOR<ArtifactTagUpdateWithoutAppliedByInput, ArtifactTagUncheckedUpdateWithoutAppliedByInput>
  }

  export type ArtifactTagUpdateManyWithWhereWithoutAppliedByInput = {
    where: ArtifactTagScalarWhereInput
    data: XOR<ArtifactTagUpdateManyMutationInput, ArtifactTagUncheckedUpdateManyWithoutAppliedByInput>
  }

  export type ArtifactTagScalarWhereInput = {
    AND?: ArtifactTagScalarWhereInput | ArtifactTagScalarWhereInput[]
    OR?: ArtifactTagScalarWhereInput[]
    NOT?: ArtifactTagScalarWhereInput | ArtifactTagScalarWhereInput[]
    artifactId?: StringFilter<"ArtifactTag"> | string
    tagId?: StringFilter<"ArtifactTag"> | string
    appliedByAgentId?: StringFilter<"ArtifactTag"> | string
  }

  export type WebhookDeliveryUpsertWithWhereUniqueWithoutAgentInput = {
    where: WebhookDeliveryWhereUniqueInput
    update: XOR<WebhookDeliveryUpdateWithoutAgentInput, WebhookDeliveryUncheckedUpdateWithoutAgentInput>
    create: XOR<WebhookDeliveryCreateWithoutAgentInput, WebhookDeliveryUncheckedCreateWithoutAgentInput>
  }

  export type WebhookDeliveryUpdateWithWhereUniqueWithoutAgentInput = {
    where: WebhookDeliveryWhereUniqueInput
    data: XOR<WebhookDeliveryUpdateWithoutAgentInput, WebhookDeliveryUncheckedUpdateWithoutAgentInput>
  }

  export type WebhookDeliveryUpdateManyWithWhereWithoutAgentInput = {
    where: WebhookDeliveryScalarWhereInput
    data: XOR<WebhookDeliveryUpdateManyMutationInput, WebhookDeliveryUncheckedUpdateManyWithoutAgentInput>
  }

  export type WebhookDeliveryScalarWhereInput = {
    AND?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
    OR?: WebhookDeliveryScalarWhereInput[]
    NOT?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
    id?: StringFilter<"WebhookDelivery"> | string
    agentId?: StringFilter<"WebhookDelivery"> | string
    event?: EnumWebhookEventFilter<"WebhookDelivery"> | $Enums.WebhookEvent
    payload?: JsonFilter<"WebhookDelivery">
    status?: EnumWebhookDeliveryStatusFilter<"WebhookDelivery"> | $Enums.WebhookDeliveryStatus
    attempts?: IntFilter<"WebhookDelivery"> | number
    lastAttemptAt?: DateTimeNullableFilter<"WebhookDelivery"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
  }

  export type TurnUpsertWithWhereUniqueWithoutAgentInput = {
    where: TurnWhereUniqueInput
    update: XOR<TurnUpdateWithoutAgentInput, TurnUncheckedUpdateWithoutAgentInput>
    create: XOR<TurnCreateWithoutAgentInput, TurnUncheckedCreateWithoutAgentInput>
  }

  export type TurnUpdateWithWhereUniqueWithoutAgentInput = {
    where: TurnWhereUniqueInput
    data: XOR<TurnUpdateWithoutAgentInput, TurnUncheckedUpdateWithoutAgentInput>
  }

  export type TurnUpdateManyWithWhereWithoutAgentInput = {
    where: TurnScalarWhereInput
    data: XOR<TurnUpdateManyMutationInput, TurnUncheckedUpdateManyWithoutAgentInput>
  }

  export type TurnScalarWhereInput = {
    AND?: TurnScalarWhereInput | TurnScalarWhereInput[]
    OR?: TurnScalarWhereInput[]
    NOT?: TurnScalarWhereInput | TurnScalarWhereInput[]
    id?: StringFilter<"Turn"> | string
    agentId?: StringFilter<"Turn"> | string
    token?: StringFilter<"Turn"> | string
    systemPrompt?: StringFilter<"Turn"> | string
    contextSnapshot?: JsonFilter<"Turn">
    status?: EnumTurnStatusFilter<"Turn"> | $Enums.TurnStatus
    expiresAt?: DateTimeFilter<"Turn"> | Date | string
    submittedAt?: DateTimeNullableFilter<"Turn"> | Date | string | null
    artifactId?: StringNullableFilter<"Turn"> | string | null
    createdAt?: DateTimeFilter<"Turn"> | Date | string
  }

  export type AgentCreateWithoutArtifactsInput = {
    id?: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAgentsInput
    apiKey?: ApiKeyCreateNestedOneWithoutAgentInput
    artifactTags?: ArtifactTagCreateNestedManyWithoutAppliedByInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutAgentInput
    turns?: TurnCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutArtifactsInput = {
    id?: string
    userId: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    apiKey?: ApiKeyUncheckedCreateNestedOneWithoutAgentInput
    artifactTags?: ArtifactTagUncheckedCreateNestedManyWithoutAppliedByInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutAgentInput
    turns?: TurnUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutArtifactsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutArtifactsInput, AgentUncheckedCreateWithoutArtifactsInput>
  }

  export type ArtifactCreateWithoutRepliesInput = {
    id?: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutArtifactsInput
    parent?: ArtifactCreateNestedOneWithoutRepliesInput
    outgoingRelations?: ArtifactRelationshipCreateNestedManyWithoutFromInput
    incomingRelations?: ArtifactRelationshipCreateNestedManyWithoutToInput
    tags?: ArtifactTagCreateNestedManyWithoutArtifactInput
    turn?: TurnCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateWithoutRepliesInput = {
    id?: string
    agentId: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    parentArtifactId?: string | null
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    outgoingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutFromInput
    incomingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutToInput
    tags?: ArtifactTagUncheckedCreateNestedManyWithoutArtifactInput
    turn?: TurnUncheckedCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactCreateOrConnectWithoutRepliesInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutRepliesInput, ArtifactUncheckedCreateWithoutRepliesInput>
  }

  export type ArtifactCreateWithoutParentInput = {
    id?: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutArtifactsInput
    replies?: ArtifactCreateNestedManyWithoutParentInput
    outgoingRelations?: ArtifactRelationshipCreateNestedManyWithoutFromInput
    incomingRelations?: ArtifactRelationshipCreateNestedManyWithoutToInput
    tags?: ArtifactTagCreateNestedManyWithoutArtifactInput
    turn?: TurnCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateWithoutParentInput = {
    id?: string
    agentId: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    replies?: ArtifactUncheckedCreateNestedManyWithoutParentInput
    outgoingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutFromInput
    incomingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutToInput
    tags?: ArtifactTagUncheckedCreateNestedManyWithoutArtifactInput
    turn?: TurnUncheckedCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactCreateOrConnectWithoutParentInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutParentInput, ArtifactUncheckedCreateWithoutParentInput>
  }

  export type ArtifactCreateManyParentInputEnvelope = {
    data: ArtifactCreateManyParentInput | ArtifactCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ArtifactRelationshipCreateWithoutFromInput = {
    id?: string
    type: $Enums.RelationshipType
    to: ArtifactCreateNestedOneWithoutIncomingRelationsInput
  }

  export type ArtifactRelationshipUncheckedCreateWithoutFromInput = {
    id?: string
    toArtifactId: string
    type: $Enums.RelationshipType
  }

  export type ArtifactRelationshipCreateOrConnectWithoutFromInput = {
    where: ArtifactRelationshipWhereUniqueInput
    create: XOR<ArtifactRelationshipCreateWithoutFromInput, ArtifactRelationshipUncheckedCreateWithoutFromInput>
  }

  export type ArtifactRelationshipCreateManyFromInputEnvelope = {
    data: ArtifactRelationshipCreateManyFromInput | ArtifactRelationshipCreateManyFromInput[]
    skipDuplicates?: boolean
  }

  export type ArtifactRelationshipCreateWithoutToInput = {
    id?: string
    type: $Enums.RelationshipType
    from: ArtifactCreateNestedOneWithoutOutgoingRelationsInput
  }

  export type ArtifactRelationshipUncheckedCreateWithoutToInput = {
    id?: string
    fromArtifactId: string
    type: $Enums.RelationshipType
  }

  export type ArtifactRelationshipCreateOrConnectWithoutToInput = {
    where: ArtifactRelationshipWhereUniqueInput
    create: XOR<ArtifactRelationshipCreateWithoutToInput, ArtifactRelationshipUncheckedCreateWithoutToInput>
  }

  export type ArtifactRelationshipCreateManyToInputEnvelope = {
    data: ArtifactRelationshipCreateManyToInput | ArtifactRelationshipCreateManyToInput[]
    skipDuplicates?: boolean
  }

  export type ArtifactTagCreateWithoutArtifactInput = {
    tag: TagCreateNestedOneWithoutArtifactTagsInput
    appliedBy: AgentCreateNestedOneWithoutArtifactTagsInput
  }

  export type ArtifactTagUncheckedCreateWithoutArtifactInput = {
    tagId: string
    appliedByAgentId: string
  }

  export type ArtifactTagCreateOrConnectWithoutArtifactInput = {
    where: ArtifactTagWhereUniqueInput
    create: XOR<ArtifactTagCreateWithoutArtifactInput, ArtifactTagUncheckedCreateWithoutArtifactInput>
  }

  export type ArtifactTagCreateManyArtifactInputEnvelope = {
    data: ArtifactTagCreateManyArtifactInput | ArtifactTagCreateManyArtifactInput[]
    skipDuplicates?: boolean
  }

  export type TurnCreateWithoutArtifactInput = {
    id?: string
    token: string
    systemPrompt: string
    contextSnapshot: JsonNullValueInput | InputJsonValue
    status?: $Enums.TurnStatus
    expiresAt: Date | string
    submittedAt?: Date | string | null
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutTurnsInput
  }

  export type TurnUncheckedCreateWithoutArtifactInput = {
    id?: string
    agentId: string
    token: string
    systemPrompt: string
    contextSnapshot: JsonNullValueInput | InputJsonValue
    status?: $Enums.TurnStatus
    expiresAt: Date | string
    submittedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TurnCreateOrConnectWithoutArtifactInput = {
    where: TurnWhereUniqueInput
    create: XOR<TurnCreateWithoutArtifactInput, TurnUncheckedCreateWithoutArtifactInput>
  }

  export type AgentUpsertWithoutArtifactsInput = {
    update: XOR<AgentUpdateWithoutArtifactsInput, AgentUncheckedUpdateWithoutArtifactsInput>
    create: XOR<AgentCreateWithoutArtifactsInput, AgentUncheckedCreateWithoutArtifactsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutArtifactsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutArtifactsInput, AgentUncheckedUpdateWithoutArtifactsInput>
  }

  export type AgentUpdateWithoutArtifactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAgentsNestedInput
    apiKey?: ApiKeyUpdateOneWithoutAgentNestedInput
    artifactTags?: ArtifactTagUpdateManyWithoutAppliedByNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutAgentNestedInput
    turns?: TurnUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutArtifactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUncheckedUpdateOneWithoutAgentNestedInput
    artifactTags?: ArtifactTagUncheckedUpdateManyWithoutAppliedByNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutAgentNestedInput
    turns?: TurnUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type ArtifactUpsertWithoutRepliesInput = {
    update: XOR<ArtifactUpdateWithoutRepliesInput, ArtifactUncheckedUpdateWithoutRepliesInput>
    create: XOR<ArtifactCreateWithoutRepliesInput, ArtifactUncheckedCreateWithoutRepliesInput>
    where?: ArtifactWhereInput
  }

  export type ArtifactUpdateToOneWithWhereWithoutRepliesInput = {
    where?: ArtifactWhereInput
    data: XOR<ArtifactUpdateWithoutRepliesInput, ArtifactUncheckedUpdateWithoutRepliesInput>
  }

  export type ArtifactUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutArtifactsNestedInput
    parent?: ArtifactUpdateOneWithoutRepliesNestedInput
    outgoingRelations?: ArtifactRelationshipUpdateManyWithoutFromNestedInput
    incomingRelations?: ArtifactRelationshipUpdateManyWithoutToNestedInput
    tags?: ArtifactTagUpdateManyWithoutArtifactNestedInput
    turn?: TurnUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    parentArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutFromNestedInput
    incomingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutToNestedInput
    tags?: ArtifactTagUncheckedUpdateManyWithoutArtifactNestedInput
    turn?: TurnUncheckedUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactUpsertWithWhereUniqueWithoutParentInput = {
    where: ArtifactWhereUniqueInput
    update: XOR<ArtifactUpdateWithoutParentInput, ArtifactUncheckedUpdateWithoutParentInput>
    create: XOR<ArtifactCreateWithoutParentInput, ArtifactUncheckedCreateWithoutParentInput>
  }

  export type ArtifactUpdateWithWhereUniqueWithoutParentInput = {
    where: ArtifactWhereUniqueInput
    data: XOR<ArtifactUpdateWithoutParentInput, ArtifactUncheckedUpdateWithoutParentInput>
  }

  export type ArtifactUpdateManyWithWhereWithoutParentInput = {
    where: ArtifactScalarWhereInput
    data: XOR<ArtifactUpdateManyMutationInput, ArtifactUncheckedUpdateManyWithoutParentInput>
  }

  export type ArtifactRelationshipUpsertWithWhereUniqueWithoutFromInput = {
    where: ArtifactRelationshipWhereUniqueInput
    update: XOR<ArtifactRelationshipUpdateWithoutFromInput, ArtifactRelationshipUncheckedUpdateWithoutFromInput>
    create: XOR<ArtifactRelationshipCreateWithoutFromInput, ArtifactRelationshipUncheckedCreateWithoutFromInput>
  }

  export type ArtifactRelationshipUpdateWithWhereUniqueWithoutFromInput = {
    where: ArtifactRelationshipWhereUniqueInput
    data: XOR<ArtifactRelationshipUpdateWithoutFromInput, ArtifactRelationshipUncheckedUpdateWithoutFromInput>
  }

  export type ArtifactRelationshipUpdateManyWithWhereWithoutFromInput = {
    where: ArtifactRelationshipScalarWhereInput
    data: XOR<ArtifactRelationshipUpdateManyMutationInput, ArtifactRelationshipUncheckedUpdateManyWithoutFromInput>
  }

  export type ArtifactRelationshipScalarWhereInput = {
    AND?: ArtifactRelationshipScalarWhereInput | ArtifactRelationshipScalarWhereInput[]
    OR?: ArtifactRelationshipScalarWhereInput[]
    NOT?: ArtifactRelationshipScalarWhereInput | ArtifactRelationshipScalarWhereInput[]
    id?: StringFilter<"ArtifactRelationship"> | string
    fromArtifactId?: StringFilter<"ArtifactRelationship"> | string
    toArtifactId?: StringFilter<"ArtifactRelationship"> | string
    type?: EnumRelationshipTypeFilter<"ArtifactRelationship"> | $Enums.RelationshipType
  }

  export type ArtifactRelationshipUpsertWithWhereUniqueWithoutToInput = {
    where: ArtifactRelationshipWhereUniqueInput
    update: XOR<ArtifactRelationshipUpdateWithoutToInput, ArtifactRelationshipUncheckedUpdateWithoutToInput>
    create: XOR<ArtifactRelationshipCreateWithoutToInput, ArtifactRelationshipUncheckedCreateWithoutToInput>
  }

  export type ArtifactRelationshipUpdateWithWhereUniqueWithoutToInput = {
    where: ArtifactRelationshipWhereUniqueInput
    data: XOR<ArtifactRelationshipUpdateWithoutToInput, ArtifactRelationshipUncheckedUpdateWithoutToInput>
  }

  export type ArtifactRelationshipUpdateManyWithWhereWithoutToInput = {
    where: ArtifactRelationshipScalarWhereInput
    data: XOR<ArtifactRelationshipUpdateManyMutationInput, ArtifactRelationshipUncheckedUpdateManyWithoutToInput>
  }

  export type ArtifactTagUpsertWithWhereUniqueWithoutArtifactInput = {
    where: ArtifactTagWhereUniqueInput
    update: XOR<ArtifactTagUpdateWithoutArtifactInput, ArtifactTagUncheckedUpdateWithoutArtifactInput>
    create: XOR<ArtifactTagCreateWithoutArtifactInput, ArtifactTagUncheckedCreateWithoutArtifactInput>
  }

  export type ArtifactTagUpdateWithWhereUniqueWithoutArtifactInput = {
    where: ArtifactTagWhereUniqueInput
    data: XOR<ArtifactTagUpdateWithoutArtifactInput, ArtifactTagUncheckedUpdateWithoutArtifactInput>
  }

  export type ArtifactTagUpdateManyWithWhereWithoutArtifactInput = {
    where: ArtifactTagScalarWhereInput
    data: XOR<ArtifactTagUpdateManyMutationInput, ArtifactTagUncheckedUpdateManyWithoutArtifactInput>
  }

  export type TurnUpsertWithoutArtifactInput = {
    update: XOR<TurnUpdateWithoutArtifactInput, TurnUncheckedUpdateWithoutArtifactInput>
    create: XOR<TurnCreateWithoutArtifactInput, TurnUncheckedCreateWithoutArtifactInput>
    where?: TurnWhereInput
  }

  export type TurnUpdateToOneWithWhereWithoutArtifactInput = {
    where?: TurnWhereInput
    data: XOR<TurnUpdateWithoutArtifactInput, TurnUncheckedUpdateWithoutArtifactInput>
  }

  export type TurnUpdateWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: JsonNullValueInput | InputJsonValue
    status?: EnumTurnStatusFieldUpdateOperationsInput | $Enums.TurnStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutTurnsNestedInput
  }

  export type TurnUncheckedUpdateWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: JsonNullValueInput | InputJsonValue
    status?: EnumTurnStatusFieldUpdateOperationsInput | $Enums.TurnStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateWithoutTurnsInput = {
    id?: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAgentsInput
    apiKey?: ApiKeyCreateNestedOneWithoutAgentInput
    artifacts?: ArtifactCreateNestedManyWithoutAgentInput
    artifactTags?: ArtifactTagCreateNestedManyWithoutAppliedByInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutTurnsInput = {
    id?: string
    userId: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    apiKey?: ApiKeyUncheckedCreateNestedOneWithoutAgentInput
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutAgentInput
    artifactTags?: ArtifactTagUncheckedCreateNestedManyWithoutAppliedByInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutTurnsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutTurnsInput, AgentUncheckedCreateWithoutTurnsInput>
  }

  export type ArtifactCreateWithoutTurnInput = {
    id?: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutArtifactsInput
    parent?: ArtifactCreateNestedOneWithoutRepliesInput
    replies?: ArtifactCreateNestedManyWithoutParentInput
    outgoingRelations?: ArtifactRelationshipCreateNestedManyWithoutFromInput
    incomingRelations?: ArtifactRelationshipCreateNestedManyWithoutToInput
    tags?: ArtifactTagCreateNestedManyWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateWithoutTurnInput = {
    id?: string
    agentId: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    parentArtifactId?: string | null
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    replies?: ArtifactUncheckedCreateNestedManyWithoutParentInput
    outgoingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutFromInput
    incomingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutToInput
    tags?: ArtifactTagUncheckedCreateNestedManyWithoutArtifactInput
  }

  export type ArtifactCreateOrConnectWithoutTurnInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutTurnInput, ArtifactUncheckedCreateWithoutTurnInput>
  }

  export type AgentUpsertWithoutTurnsInput = {
    update: XOR<AgentUpdateWithoutTurnsInput, AgentUncheckedUpdateWithoutTurnsInput>
    create: XOR<AgentCreateWithoutTurnsInput, AgentUncheckedCreateWithoutTurnsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutTurnsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutTurnsInput, AgentUncheckedUpdateWithoutTurnsInput>
  }

  export type AgentUpdateWithoutTurnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAgentsNestedInput
    apiKey?: ApiKeyUpdateOneWithoutAgentNestedInput
    artifacts?: ArtifactUpdateManyWithoutAgentNestedInput
    artifactTags?: ArtifactTagUpdateManyWithoutAppliedByNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutTurnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUncheckedUpdateOneWithoutAgentNestedInput
    artifacts?: ArtifactUncheckedUpdateManyWithoutAgentNestedInput
    artifactTags?: ArtifactTagUncheckedUpdateManyWithoutAppliedByNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type ArtifactUpsertWithoutTurnInput = {
    update: XOR<ArtifactUpdateWithoutTurnInput, ArtifactUncheckedUpdateWithoutTurnInput>
    create: XOR<ArtifactCreateWithoutTurnInput, ArtifactUncheckedCreateWithoutTurnInput>
    where?: ArtifactWhereInput
  }

  export type ArtifactUpdateToOneWithWhereWithoutTurnInput = {
    where?: ArtifactWhereInput
    data: XOR<ArtifactUpdateWithoutTurnInput, ArtifactUncheckedUpdateWithoutTurnInput>
  }

  export type ArtifactUpdateWithoutTurnInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutArtifactsNestedInput
    parent?: ArtifactUpdateOneWithoutRepliesNestedInput
    replies?: ArtifactUpdateManyWithoutParentNestedInput
    outgoingRelations?: ArtifactRelationshipUpdateManyWithoutFromNestedInput
    incomingRelations?: ArtifactRelationshipUpdateManyWithoutToNestedInput
    tags?: ArtifactTagUpdateManyWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutTurnInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    parentArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ArtifactUncheckedUpdateManyWithoutParentNestedInput
    outgoingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutFromNestedInput
    incomingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutToNestedInput
    tags?: ArtifactTagUncheckedUpdateManyWithoutArtifactNestedInput
  }

  export type ArtifactCreateWithoutOutgoingRelationsInput = {
    id?: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutArtifactsInput
    parent?: ArtifactCreateNestedOneWithoutRepliesInput
    replies?: ArtifactCreateNestedManyWithoutParentInput
    incomingRelations?: ArtifactRelationshipCreateNestedManyWithoutToInput
    tags?: ArtifactTagCreateNestedManyWithoutArtifactInput
    turn?: TurnCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateWithoutOutgoingRelationsInput = {
    id?: string
    agentId: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    parentArtifactId?: string | null
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    replies?: ArtifactUncheckedCreateNestedManyWithoutParentInput
    incomingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutToInput
    tags?: ArtifactTagUncheckedCreateNestedManyWithoutArtifactInput
    turn?: TurnUncheckedCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactCreateOrConnectWithoutOutgoingRelationsInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutOutgoingRelationsInput, ArtifactUncheckedCreateWithoutOutgoingRelationsInput>
  }

  export type ArtifactCreateWithoutIncomingRelationsInput = {
    id?: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutArtifactsInput
    parent?: ArtifactCreateNestedOneWithoutRepliesInput
    replies?: ArtifactCreateNestedManyWithoutParentInput
    outgoingRelations?: ArtifactRelationshipCreateNestedManyWithoutFromInput
    tags?: ArtifactTagCreateNestedManyWithoutArtifactInput
    turn?: TurnCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateWithoutIncomingRelationsInput = {
    id?: string
    agentId: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    parentArtifactId?: string | null
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    replies?: ArtifactUncheckedCreateNestedManyWithoutParentInput
    outgoingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutFromInput
    tags?: ArtifactTagUncheckedCreateNestedManyWithoutArtifactInput
    turn?: TurnUncheckedCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactCreateOrConnectWithoutIncomingRelationsInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutIncomingRelationsInput, ArtifactUncheckedCreateWithoutIncomingRelationsInput>
  }

  export type ArtifactUpsertWithoutOutgoingRelationsInput = {
    update: XOR<ArtifactUpdateWithoutOutgoingRelationsInput, ArtifactUncheckedUpdateWithoutOutgoingRelationsInput>
    create: XOR<ArtifactCreateWithoutOutgoingRelationsInput, ArtifactUncheckedCreateWithoutOutgoingRelationsInput>
    where?: ArtifactWhereInput
  }

  export type ArtifactUpdateToOneWithWhereWithoutOutgoingRelationsInput = {
    where?: ArtifactWhereInput
    data: XOR<ArtifactUpdateWithoutOutgoingRelationsInput, ArtifactUncheckedUpdateWithoutOutgoingRelationsInput>
  }

  export type ArtifactUpdateWithoutOutgoingRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutArtifactsNestedInput
    parent?: ArtifactUpdateOneWithoutRepliesNestedInput
    replies?: ArtifactUpdateManyWithoutParentNestedInput
    incomingRelations?: ArtifactRelationshipUpdateManyWithoutToNestedInput
    tags?: ArtifactTagUpdateManyWithoutArtifactNestedInput
    turn?: TurnUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutOutgoingRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    parentArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ArtifactUncheckedUpdateManyWithoutParentNestedInput
    incomingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutToNestedInput
    tags?: ArtifactTagUncheckedUpdateManyWithoutArtifactNestedInput
    turn?: TurnUncheckedUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactUpsertWithoutIncomingRelationsInput = {
    update: XOR<ArtifactUpdateWithoutIncomingRelationsInput, ArtifactUncheckedUpdateWithoutIncomingRelationsInput>
    create: XOR<ArtifactCreateWithoutIncomingRelationsInput, ArtifactUncheckedCreateWithoutIncomingRelationsInput>
    where?: ArtifactWhereInput
  }

  export type ArtifactUpdateToOneWithWhereWithoutIncomingRelationsInput = {
    where?: ArtifactWhereInput
    data: XOR<ArtifactUpdateWithoutIncomingRelationsInput, ArtifactUncheckedUpdateWithoutIncomingRelationsInput>
  }

  export type ArtifactUpdateWithoutIncomingRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutArtifactsNestedInput
    parent?: ArtifactUpdateOneWithoutRepliesNestedInput
    replies?: ArtifactUpdateManyWithoutParentNestedInput
    outgoingRelations?: ArtifactRelationshipUpdateManyWithoutFromNestedInput
    tags?: ArtifactTagUpdateManyWithoutArtifactNestedInput
    turn?: TurnUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutIncomingRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    parentArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ArtifactUncheckedUpdateManyWithoutParentNestedInput
    outgoingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutFromNestedInput
    tags?: ArtifactTagUncheckedUpdateManyWithoutArtifactNestedInput
    turn?: TurnUncheckedUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactTagCreateWithoutTagInput = {
    artifact: ArtifactCreateNestedOneWithoutTagsInput
    appliedBy: AgentCreateNestedOneWithoutArtifactTagsInput
  }

  export type ArtifactTagUncheckedCreateWithoutTagInput = {
    artifactId: string
    appliedByAgentId: string
  }

  export type ArtifactTagCreateOrConnectWithoutTagInput = {
    where: ArtifactTagWhereUniqueInput
    create: XOR<ArtifactTagCreateWithoutTagInput, ArtifactTagUncheckedCreateWithoutTagInput>
  }

  export type ArtifactTagCreateManyTagInputEnvelope = {
    data: ArtifactTagCreateManyTagInput | ArtifactTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type ArtifactTagUpsertWithWhereUniqueWithoutTagInput = {
    where: ArtifactTagWhereUniqueInput
    update: XOR<ArtifactTagUpdateWithoutTagInput, ArtifactTagUncheckedUpdateWithoutTagInput>
    create: XOR<ArtifactTagCreateWithoutTagInput, ArtifactTagUncheckedCreateWithoutTagInput>
  }

  export type ArtifactTagUpdateWithWhereUniqueWithoutTagInput = {
    where: ArtifactTagWhereUniqueInput
    data: XOR<ArtifactTagUpdateWithoutTagInput, ArtifactTagUncheckedUpdateWithoutTagInput>
  }

  export type ArtifactTagUpdateManyWithWhereWithoutTagInput = {
    where: ArtifactTagScalarWhereInput
    data: XOR<ArtifactTagUpdateManyMutationInput, ArtifactTagUncheckedUpdateManyWithoutTagInput>
  }

  export type ArtifactCreateWithoutTagsInput = {
    id?: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutArtifactsInput
    parent?: ArtifactCreateNestedOneWithoutRepliesInput
    replies?: ArtifactCreateNestedManyWithoutParentInput
    outgoingRelations?: ArtifactRelationshipCreateNestedManyWithoutFromInput
    incomingRelations?: ArtifactRelationshipCreateNestedManyWithoutToInput
    turn?: TurnCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateWithoutTagsInput = {
    id?: string
    agentId: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    parentArtifactId?: string | null
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
    replies?: ArtifactUncheckedCreateNestedManyWithoutParentInput
    outgoingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutFromInput
    incomingRelations?: ArtifactRelationshipUncheckedCreateNestedManyWithoutToInput
    turn?: TurnUncheckedCreateNestedOneWithoutArtifactInput
  }

  export type ArtifactCreateOrConnectWithoutTagsInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutTagsInput, ArtifactUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutArtifactTagsInput = {
    id?: string
    name: string
  }

  export type TagUncheckedCreateWithoutArtifactTagsInput = {
    id?: string
    name: string
  }

  export type TagCreateOrConnectWithoutArtifactTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutArtifactTagsInput, TagUncheckedCreateWithoutArtifactTagsInput>
  }

  export type AgentCreateWithoutArtifactTagsInput = {
    id?: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAgentsInput
    apiKey?: ApiKeyCreateNestedOneWithoutAgentInput
    artifacts?: ArtifactCreateNestedManyWithoutAgentInput
    webhookDeliveries?: WebhookDeliveryCreateNestedManyWithoutAgentInput
    turns?: TurnCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutArtifactTagsInput = {
    id?: string
    userId: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    apiKey?: ApiKeyUncheckedCreateNestedOneWithoutAgentInput
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutAgentInput
    webhookDeliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutAgentInput
    turns?: TurnUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutArtifactTagsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutArtifactTagsInput, AgentUncheckedCreateWithoutArtifactTagsInput>
  }

  export type ArtifactUpsertWithoutTagsInput = {
    update: XOR<ArtifactUpdateWithoutTagsInput, ArtifactUncheckedUpdateWithoutTagsInput>
    create: XOR<ArtifactCreateWithoutTagsInput, ArtifactUncheckedCreateWithoutTagsInput>
    where?: ArtifactWhereInput
  }

  export type ArtifactUpdateToOneWithWhereWithoutTagsInput = {
    where?: ArtifactWhereInput
    data: XOR<ArtifactUpdateWithoutTagsInput, ArtifactUncheckedUpdateWithoutTagsInput>
  }

  export type ArtifactUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutArtifactsNestedInput
    parent?: ArtifactUpdateOneWithoutRepliesNestedInput
    replies?: ArtifactUpdateManyWithoutParentNestedInput
    outgoingRelations?: ArtifactRelationshipUpdateManyWithoutFromNestedInput
    incomingRelations?: ArtifactRelationshipUpdateManyWithoutToNestedInput
    turn?: TurnUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    parentArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ArtifactUncheckedUpdateManyWithoutParentNestedInput
    outgoingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutFromNestedInput
    incomingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutToNestedInput
    turn?: TurnUncheckedUpdateOneWithoutArtifactNestedInput
  }

  export type TagUpsertWithoutArtifactTagsInput = {
    update: XOR<TagUpdateWithoutArtifactTagsInput, TagUncheckedUpdateWithoutArtifactTagsInput>
    create: XOR<TagCreateWithoutArtifactTagsInput, TagUncheckedCreateWithoutArtifactTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutArtifactTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutArtifactTagsInput, TagUncheckedUpdateWithoutArtifactTagsInput>
  }

  export type TagUpdateWithoutArtifactTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutArtifactTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AgentUpsertWithoutArtifactTagsInput = {
    update: XOR<AgentUpdateWithoutArtifactTagsInput, AgentUncheckedUpdateWithoutArtifactTagsInput>
    create: XOR<AgentCreateWithoutArtifactTagsInput, AgentUncheckedCreateWithoutArtifactTagsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutArtifactTagsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutArtifactTagsInput, AgentUncheckedUpdateWithoutArtifactTagsInput>
  }

  export type AgentUpdateWithoutArtifactTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAgentsNestedInput
    apiKey?: ApiKeyUpdateOneWithoutAgentNestedInput
    artifacts?: ArtifactUpdateManyWithoutAgentNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutAgentNestedInput
    turns?: TurnUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutArtifactTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUncheckedUpdateOneWithoutAgentNestedInput
    artifacts?: ArtifactUncheckedUpdateManyWithoutAgentNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutAgentNestedInput
    turns?: TurnUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateWithoutWebhookDeliveriesInput = {
    id?: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAgentsInput
    apiKey?: ApiKeyCreateNestedOneWithoutAgentInput
    artifacts?: ArtifactCreateNestedManyWithoutAgentInput
    artifactTags?: ArtifactTagCreateNestedManyWithoutAppliedByInput
    turns?: TurnCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutWebhookDeliveriesInput = {
    id?: string
    userId: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    apiKey?: ApiKeyUncheckedCreateNestedOneWithoutAgentInput
    artifacts?: ArtifactUncheckedCreateNestedManyWithoutAgentInput
    artifactTags?: ArtifactTagUncheckedCreateNestedManyWithoutAppliedByInput
    turns?: TurnUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutWebhookDeliveriesInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutWebhookDeliveriesInput, AgentUncheckedCreateWithoutWebhookDeliveriesInput>
  }

  export type AgentUpsertWithoutWebhookDeliveriesInput = {
    update: XOR<AgentUpdateWithoutWebhookDeliveriesInput, AgentUncheckedUpdateWithoutWebhookDeliveriesInput>
    create: XOR<AgentCreateWithoutWebhookDeliveriesInput, AgentUncheckedCreateWithoutWebhookDeliveriesInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutWebhookDeliveriesInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutWebhookDeliveriesInput, AgentUncheckedUpdateWithoutWebhookDeliveriesInput>
  }

  export type AgentUpdateWithoutWebhookDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAgentsNestedInput
    apiKey?: ApiKeyUpdateOneWithoutAgentNestedInput
    artifacts?: ArtifactUpdateManyWithoutAgentNestedInput
    artifactTags?: ArtifactTagUpdateManyWithoutAppliedByNestedInput
    turns?: TurnUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutWebhookDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUncheckedUpdateOneWithoutAgentNestedInput
    artifacts?: ArtifactUncheckedUpdateManyWithoutAgentNestedInput
    artifactTags?: ArtifactTagUncheckedUpdateManyWithoutAppliedByNestedInput
    turns?: TurnUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type ApiKeyCreateManyUserInput = {
    id?: string
    tokenHash: string
    agentId?: string | null
    status?: $Enums.ApiKeyStatus
    createdAt?: Date | string
  }

  export type AgentCreateManyUserInput = {
    id?: string
    apiKeyId: string
    name: string
    description?: string | null
    webhookUrl?: string | null
    cronSchedule?: string | null
    status?: $Enums.AgentStatus
    role?: $Enums.AgentRole
    citationScore?: number
    collaborationScore?: number
    personalNoveltyScore?: number
    lineageScore?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUpdateOneWithoutAgentNestedInput
    artifacts?: ArtifactUpdateManyWithoutAgentNestedInput
    artifactTags?: ArtifactTagUpdateManyWithoutAppliedByNestedInput
    webhookDeliveries?: WebhookDeliveryUpdateManyWithoutAgentNestedInput
    turns?: TurnUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUncheckedUpdateOneWithoutAgentNestedInput
    artifacts?: ArtifactUncheckedUpdateManyWithoutAgentNestedInput
    artifactTags?: ArtifactTagUncheckedUpdateManyWithoutAppliedByNestedInput
    webhookDeliveries?: WebhookDeliveryUncheckedUpdateManyWithoutAgentNestedInput
    turns?: TurnUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    citationScore?: FloatFieldUpdateOperationsInput | number
    collaborationScore?: FloatFieldUpdateOperationsInput | number
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    lineageScore?: FloatFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactCreateManyAgentInput = {
    id?: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    parentArtifactId?: string | null
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
  }

  export type ArtifactTagCreateManyAppliedByInput = {
    artifactId: string
    tagId: string
  }

  export type WebhookDeliveryCreateManyAgentInput = {
    id?: string
    event: $Enums.WebhookEvent
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.WebhookDeliveryStatus
    attempts?: number
    lastAttemptAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TurnCreateManyAgentInput = {
    id?: string
    token: string
    systemPrompt: string
    contextSnapshot: JsonNullValueInput | InputJsonValue
    status?: $Enums.TurnStatus
    expiresAt: Date | string
    submittedAt?: Date | string | null
    artifactId?: string | null
    createdAt?: Date | string
  }

  export type ArtifactUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ArtifactUpdateOneWithoutRepliesNestedInput
    replies?: ArtifactUpdateManyWithoutParentNestedInput
    outgoingRelations?: ArtifactRelationshipUpdateManyWithoutFromNestedInput
    incomingRelations?: ArtifactRelationshipUpdateManyWithoutToNestedInput
    tags?: ArtifactTagUpdateManyWithoutArtifactNestedInput
    turn?: TurnUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    parentArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ArtifactUncheckedUpdateManyWithoutParentNestedInput
    outgoingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutFromNestedInput
    incomingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutToNestedInput
    tags?: ArtifactTagUncheckedUpdateManyWithoutArtifactNestedInput
    turn?: TurnUncheckedUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    parentArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactTagUpdateWithoutAppliedByInput = {
    artifact?: ArtifactUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutArtifactTagsNestedInput
  }

  export type ArtifactTagUncheckedUpdateWithoutAppliedByInput = {
    artifactId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtifactTagUncheckedUpdateManyWithoutAppliedByInput = {
    artifactId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type WebhookDeliveryUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EnumWebhookEventFieldUpdateOperationsInput | $Enums.WebhookEvent
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumWebhookDeliveryStatusFieldUpdateOperationsInput | $Enums.WebhookDeliveryStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EnumWebhookEventFieldUpdateOperationsInput | $Enums.WebhookEvent
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumWebhookDeliveryStatusFieldUpdateOperationsInput | $Enums.WebhookDeliveryStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EnumWebhookEventFieldUpdateOperationsInput | $Enums.WebhookEvent
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumWebhookDeliveryStatusFieldUpdateOperationsInput | $Enums.WebhookDeliveryStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: JsonNullValueInput | InputJsonValue
    status?: EnumTurnStatusFieldUpdateOperationsInput | $Enums.TurnStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifact?: ArtifactUpdateOneWithoutTurnNestedInput
  }

  export type TurnUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: JsonNullValueInput | InputJsonValue
    status?: EnumTurnStatusFieldUpdateOperationsInput | $Enums.TurnStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: JsonNullValueInput | InputJsonValue
    status?: EnumTurnStatusFieldUpdateOperationsInput | $Enums.TurnStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artifactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactCreateManyParentInput = {
    id?: string
    agentId: string
    type: $Enums.ArtifactType
    typeLabel?: string | null
    title: string
    content: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: number
    networkNoveltyScore?: number
    createdAt?: Date | string
  }

  export type ArtifactRelationshipCreateManyFromInput = {
    id?: string
    toArtifactId: string
    type: $Enums.RelationshipType
  }

  export type ArtifactRelationshipCreateManyToInput = {
    id?: string
    fromArtifactId: string
    type: $Enums.RelationshipType
  }

  export type ArtifactTagCreateManyArtifactInput = {
    tagId: string
    appliedByAgentId: string
  }

  export type ArtifactUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutArtifactsNestedInput
    replies?: ArtifactUpdateManyWithoutParentNestedInput
    outgoingRelations?: ArtifactRelationshipUpdateManyWithoutFromNestedInput
    incomingRelations?: ArtifactRelationshipUpdateManyWithoutToNestedInput
    tags?: ArtifactTagUpdateManyWithoutArtifactNestedInput
    turn?: TurnUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ArtifactUncheckedUpdateManyWithoutParentNestedInput
    outgoingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutFromNestedInput
    incomingRelations?: ArtifactRelationshipUncheckedUpdateManyWithoutToNestedInput
    tags?: ArtifactTagUncheckedUpdateManyWithoutArtifactNestedInput
    turn?: TurnUncheckedUpdateOneWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    type?: EnumArtifactTypeFieldUpdateOperationsInput | $Enums.ArtifactType
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    personalNoveltyScore?: FloatFieldUpdateOperationsInput | number
    networkNoveltyScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactRelationshipUpdateWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    to?: ArtifactUpdateOneRequiredWithoutIncomingRelationsNestedInput
  }

  export type ArtifactRelationshipUncheckedUpdateWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    toArtifactId?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type ArtifactRelationshipUncheckedUpdateManyWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    toArtifactId?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type ArtifactRelationshipUpdateWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    from?: ArtifactUpdateOneRequiredWithoutOutgoingRelationsNestedInput
  }

  export type ArtifactRelationshipUncheckedUpdateWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromArtifactId?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type ArtifactRelationshipUncheckedUpdateManyWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromArtifactId?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type ArtifactTagUpdateWithoutArtifactInput = {
    tag?: TagUpdateOneRequiredWithoutArtifactTagsNestedInput
    appliedBy?: AgentUpdateOneRequiredWithoutArtifactTagsNestedInput
  }

  export type ArtifactTagUncheckedUpdateWithoutArtifactInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    appliedByAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtifactTagUncheckedUpdateManyWithoutArtifactInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    appliedByAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtifactTagCreateManyTagInput = {
    artifactId: string
    appliedByAgentId: string
  }

  export type ArtifactTagUpdateWithoutTagInput = {
    artifact?: ArtifactUpdateOneRequiredWithoutTagsNestedInput
    appliedBy?: AgentUpdateOneRequiredWithoutArtifactTagsNestedInput
  }

  export type ArtifactTagUncheckedUpdateWithoutTagInput = {
    artifactId?: StringFieldUpdateOperationsInput | string
    appliedByAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtifactTagUncheckedUpdateManyWithoutTagInput = {
    artifactId?: StringFieldUpdateOperationsInput | string
    appliedByAgentId?: StringFieldUpdateOperationsInput | string
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