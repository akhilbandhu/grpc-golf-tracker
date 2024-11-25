// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               v5.28.2
// source: golf_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";

export const protobufPackage = "golf";

/** Represents different types of golf clubs */
export enum Club {
  /** CLUB_UNSPECIFIED - Default value for proto3 */
  CLUB_UNSPECIFIED = 0,
  DRIVER = 1,
  THREE_WOOD = 2,
  FIVE_WOOD = 3,
  FOUR_IRON = 4,
  FIVE_IRON = 5,
  SIX_IRON = 6,
  SEVEN_IRON = 7,
  EIGHT_IRON = 8,
  NINE_IRON = 9,
  PITCHING_WEDGE = 10,
  SAND_WEDGE = 11,
  LOFT_WEDGE = 12,
  PUTTER = 13,
  UNRECOGNIZED = -1,
}

export function clubFromJSON(object: any): Club {
  switch (object) {
    case 0:
    case "CLUB_UNSPECIFIED":
      return Club.CLUB_UNSPECIFIED;
    case 1:
    case "DRIVER":
      return Club.DRIVER;
    case 2:
    case "THREE_WOOD":
      return Club.THREE_WOOD;
    case 3:
    case "FIVE_WOOD":
      return Club.FIVE_WOOD;
    case 4:
    case "FOUR_IRON":
      return Club.FOUR_IRON;
    case 5:
    case "FIVE_IRON":
      return Club.FIVE_IRON;
    case 6:
    case "SIX_IRON":
      return Club.SIX_IRON;
    case 7:
    case "SEVEN_IRON":
      return Club.SEVEN_IRON;
    case 8:
    case "EIGHT_IRON":
      return Club.EIGHT_IRON;
    case 9:
    case "NINE_IRON":
      return Club.NINE_IRON;
    case 10:
    case "PITCHING_WEDGE":
      return Club.PITCHING_WEDGE;
    case 11:
    case "SAND_WEDGE":
      return Club.SAND_WEDGE;
    case 12:
    case "LOFT_WEDGE":
      return Club.LOFT_WEDGE;
    case 13:
    case "PUTTER":
      return Club.PUTTER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Club.UNRECOGNIZED;
  }
}

export function clubToJSON(object: Club): string {
  switch (object) {
    case Club.CLUB_UNSPECIFIED:
      return "CLUB_UNSPECIFIED";
    case Club.DRIVER:
      return "DRIVER";
    case Club.THREE_WOOD:
      return "THREE_WOOD";
    case Club.FIVE_WOOD:
      return "FIVE_WOOD";
    case Club.FOUR_IRON:
      return "FOUR_IRON";
    case Club.FIVE_IRON:
      return "FIVE_IRON";
    case Club.SIX_IRON:
      return "SIX_IRON";
    case Club.SEVEN_IRON:
      return "SEVEN_IRON";
    case Club.EIGHT_IRON:
      return "EIGHT_IRON";
    case Club.NINE_IRON:
      return "NINE_IRON";
    case Club.PITCHING_WEDGE:
      return "PITCHING_WEDGE";
    case Club.SAND_WEDGE:
      return "SAND_WEDGE";
    case Club.LOFT_WEDGE:
      return "LOFT_WEDGE";
    case Club.PUTTER:
      return "PUTTER";
    case Club.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Represents possible results of a golf shot */
export enum ShotResult {
  /** RESULT_UNSPECIFIED - Default value for proto3 */
  RESULT_UNSPECIFIED = 0,
  /** FAIRWAY - Shot landed on fairway */
  FAIRWAY = 1,
  /** GREEN - Shot landed on green */
  GREEN = 2,
  /** ROUGH - Shot landed in rough */
  ROUGH = 3,
  /** BUNKER - Shot landed in sand bunker */
  BUNKER = 4,
  /** WATER - Shot landed in water hazard */
  WATER = 5,
  /** OUT_OF_BOUNDS - Shot went out of bounds */
  OUT_OF_BOUNDS = 6,
  UNRECOGNIZED = -1,
}

export function shotResultFromJSON(object: any): ShotResult {
  switch (object) {
    case 0:
    case "RESULT_UNSPECIFIED":
      return ShotResult.RESULT_UNSPECIFIED;
    case 1:
    case "FAIRWAY":
      return ShotResult.FAIRWAY;
    case 2:
    case "GREEN":
      return ShotResult.GREEN;
    case 3:
    case "ROUGH":
      return ShotResult.ROUGH;
    case 4:
    case "BUNKER":
      return ShotResult.BUNKER;
    case 5:
    case "WATER":
      return ShotResult.WATER;
    case 6:
    case "OUT_OF_BOUNDS":
      return ShotResult.OUT_OF_BOUNDS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ShotResult.UNRECOGNIZED;
  }
}

export function shotResultToJSON(object: ShotResult): string {
  switch (object) {
    case ShotResult.RESULT_UNSPECIFIED:
      return "RESULT_UNSPECIFIED";
    case ShotResult.FAIRWAY:
      return "FAIRWAY";
    case ShotResult.GREEN:
      return "GREEN";
    case ShotResult.ROUGH:
      return "ROUGH";
    case ShotResult.BUNKER:
      return "BUNKER";
    case ShotResult.WATER:
      return "WATER";
    case ShotResult.OUT_OF_BOUNDS:
      return "OUT_OF_BOUNDS";
    case ShotResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Represents a single golf shot with all relevant details */
export interface Shot {
  /** Unique identifier for the shot */
  id: string;
  /** Club used for the shot */
  club: Club;
  /** Distance in yards */
  distance: number;
  /** Where the shot landed */
  result: ShotResult;
  /** Additional notes about the shot */
  notes: string;
  /** When the shot was recorded */
  timestamp: number;
}

export interface ShotResponse {
  /** Whether the shot was successfully recorded */
  success: boolean;
  /** Response message */
  message: string;
  /** The recorded shot details */
  shot: Shot | undefined;
}

export interface StatisticsRequest {
  /** Optional: filter by club */
  club: Club;
  /** Optional: start date for filtering (unix timestamp) */
  fromDate: number;
  /** Optional: end date for filtering (unix timestamp) */
  toDate: number;
}

export interface StatisticsResponse {
  /** Average distance of filtered shots */
  averageDistance: number;
  /** Total number of shots matching filter */
  totalShots: number;
  /** Distribution of shot results */
  resultDistribution: { [key: string]: number };
  /** Most recent shots matching filter */
  recentShots: Shot[];
}

export interface StatisticsResponse_ResultDistributionEntry {
  key: string;
  value: number;
}

export interface StreamRequest {
  /** Number of recent shots to stream */
  limit: number;
}

function createBaseShot(): Shot {
  return { id: "", club: 0, distance: 0, result: 0, notes: "", timestamp: 0 };
}

export const Shot: MessageFns<Shot> = {
  encode(message: Shot, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.club !== 0) {
      writer.uint32(16).int32(message.club);
    }
    if (message.distance !== 0) {
      writer.uint32(29).float(message.distance);
    }
    if (message.result !== 0) {
      writer.uint32(32).int32(message.result);
    }
    if (message.notes !== "") {
      writer.uint32(42).string(message.notes);
    }
    if (message.timestamp !== 0) {
      writer.uint32(48).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Shot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.club = reader.int32() as any;
          continue;
        }
        case 3: {
          if (tag !== 29) {
            break;
          }

          message.distance = reader.float();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.notes = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.timestamp = longToNumber(reader.int64());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Shot {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      club: isSet(object.club) ? clubFromJSON(object.club) : 0,
      distance: isSet(object.distance) ? globalThis.Number(object.distance) : 0,
      result: isSet(object.result) ? shotResultFromJSON(object.result) : 0,
      notes: isSet(object.notes) ? globalThis.String(object.notes) : "",
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
    };
  },

  toJSON(message: Shot): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.club !== 0) {
      obj.club = clubToJSON(message.club);
    }
    if (message.distance !== 0) {
      obj.distance = message.distance;
    }
    if (message.result !== 0) {
      obj.result = shotResultToJSON(message.result);
    }
    if (message.notes !== "") {
      obj.notes = message.notes;
    }
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Shot>, I>>(base?: I): Shot {
    return Shot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Shot>, I>>(object: I): Shot {
    const message = createBaseShot();
    message.id = object.id ?? "";
    message.club = object.club ?? 0;
    message.distance = object.distance ?? 0;
    message.result = object.result ?? 0;
    message.notes = object.notes ?? "";
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseShotResponse(): ShotResponse {
  return { success: false, message: "", shot: undefined };
}

export const ShotResponse: MessageFns<ShotResponse> = {
  encode(message: ShotResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.success !== false) {
      writer.uint32(8).bool(message.success);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.shot !== undefined) {
      Shot.encode(message.shot, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShotResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.shot = Shot.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ShotResponse {
    return {
      success: isSet(object.success) ? globalThis.Boolean(object.success) : false,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      shot: isSet(object.shot) ? Shot.fromJSON(object.shot) : undefined,
    };
  },

  toJSON(message: ShotResponse): unknown {
    const obj: any = {};
    if (message.success !== false) {
      obj.success = message.success;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.shot !== undefined) {
      obj.shot = Shot.toJSON(message.shot);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShotResponse>, I>>(base?: I): ShotResponse {
    return ShotResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShotResponse>, I>>(object: I): ShotResponse {
    const message = createBaseShotResponse();
    message.success = object.success ?? false;
    message.message = object.message ?? "";
    message.shot = (object.shot !== undefined && object.shot !== null) ? Shot.fromPartial(object.shot) : undefined;
    return message;
  },
};

function createBaseStatisticsRequest(): StatisticsRequest {
  return { club: 0, fromDate: 0, toDate: 0 };
}

export const StatisticsRequest: MessageFns<StatisticsRequest> = {
  encode(message: StatisticsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.club !== 0) {
      writer.uint32(8).int32(message.club);
    }
    if (message.fromDate !== 0) {
      writer.uint32(16).int64(message.fromDate);
    }
    if (message.toDate !== 0) {
      writer.uint32(24).int64(message.toDate);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StatisticsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatisticsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.club = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.fromDate = longToNumber(reader.int64());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.toDate = longToNumber(reader.int64());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatisticsRequest {
    return {
      club: isSet(object.club) ? clubFromJSON(object.club) : 0,
      fromDate: isSet(object.fromDate) ? globalThis.Number(object.fromDate) : 0,
      toDate: isSet(object.toDate) ? globalThis.Number(object.toDate) : 0,
    };
  },

  toJSON(message: StatisticsRequest): unknown {
    const obj: any = {};
    if (message.club !== 0) {
      obj.club = clubToJSON(message.club);
    }
    if (message.fromDate !== 0) {
      obj.fromDate = Math.round(message.fromDate);
    }
    if (message.toDate !== 0) {
      obj.toDate = Math.round(message.toDate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatisticsRequest>, I>>(base?: I): StatisticsRequest {
    return StatisticsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatisticsRequest>, I>>(object: I): StatisticsRequest {
    const message = createBaseStatisticsRequest();
    message.club = object.club ?? 0;
    message.fromDate = object.fromDate ?? 0;
    message.toDate = object.toDate ?? 0;
    return message;
  },
};

function createBaseStatisticsResponse(): StatisticsResponse {
  return { averageDistance: 0, totalShots: 0, resultDistribution: {}, recentShots: [] };
}

export const StatisticsResponse: MessageFns<StatisticsResponse> = {
  encode(message: StatisticsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.averageDistance !== 0) {
      writer.uint32(13).float(message.averageDistance);
    }
    if (message.totalShots !== 0) {
      writer.uint32(16).int32(message.totalShots);
    }
    Object.entries(message.resultDistribution).forEach(([key, value]) => {
      StatisticsResponse_ResultDistributionEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    for (const v of message.recentShots) {
      Shot.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StatisticsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatisticsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 13) {
            break;
          }

          message.averageDistance = reader.float();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.totalShots = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = StatisticsResponse_ResultDistributionEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.resultDistribution[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.recentShots.push(Shot.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatisticsResponse {
    return {
      averageDistance: isSet(object.averageDistance) ? globalThis.Number(object.averageDistance) : 0,
      totalShots: isSet(object.totalShots) ? globalThis.Number(object.totalShots) : 0,
      resultDistribution: isObject(object.resultDistribution)
        ? Object.entries(object.resultDistribution).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
      recentShots: globalThis.Array.isArray(object?.recentShots)
        ? object.recentShots.map((e: any) => Shot.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StatisticsResponse): unknown {
    const obj: any = {};
    if (message.averageDistance !== 0) {
      obj.averageDistance = message.averageDistance;
    }
    if (message.totalShots !== 0) {
      obj.totalShots = Math.round(message.totalShots);
    }
    if (message.resultDistribution) {
      const entries = Object.entries(message.resultDistribution);
      if (entries.length > 0) {
        obj.resultDistribution = {};
        entries.forEach(([k, v]) => {
          obj.resultDistribution[k] = Math.round(v);
        });
      }
    }
    if (message.recentShots?.length) {
      obj.recentShots = message.recentShots.map((e) => Shot.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatisticsResponse>, I>>(base?: I): StatisticsResponse {
    return StatisticsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatisticsResponse>, I>>(object: I): StatisticsResponse {
    const message = createBaseStatisticsResponse();
    message.averageDistance = object.averageDistance ?? 0;
    message.totalShots = object.totalShots ?? 0;
    message.resultDistribution = Object.entries(object.resultDistribution ?? {}).reduce<{ [key: string]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.recentShots = object.recentShots?.map((e) => Shot.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStatisticsResponse_ResultDistributionEntry(): StatisticsResponse_ResultDistributionEntry {
  return { key: "", value: 0 };
}

export const StatisticsResponse_ResultDistributionEntry: MessageFns<StatisticsResponse_ResultDistributionEntry> = {
  encode(message: StatisticsResponse_ResultDistributionEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StatisticsResponse_ResultDistributionEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatisticsResponse_ResultDistributionEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatisticsResponse_ResultDistributionEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: StatisticsResponse_ResultDistributionEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatisticsResponse_ResultDistributionEntry>, I>>(
    base?: I,
  ): StatisticsResponse_ResultDistributionEntry {
    return StatisticsResponse_ResultDistributionEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatisticsResponse_ResultDistributionEntry>, I>>(
    object: I,
  ): StatisticsResponse_ResultDistributionEntry {
    const message = createBaseStatisticsResponse_ResultDistributionEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseStreamRequest(): StreamRequest {
  return { limit: 0 };
}

export const StreamRequest: MessageFns<StreamRequest> = {
  encode(message: StreamRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.limit !== 0) {
      writer.uint32(8).int32(message.limit);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StreamRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.limit = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamRequest {
    return { limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0 };
  },

  toJSON(message: StreamRequest): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamRequest>, I>>(base?: I): StreamRequest {
    return StreamRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamRequest>, I>>(object: I): StreamRequest {
    const message = createBaseStreamRequest();
    message.limit = object.limit ?? 0;
    return message;
  },
};

/**
 * Golf Shot Tracker Service
 * Provides functionality for recording golf shots, calculating statistics,
 * and streaming real-time updates.
 */
export interface ShotTrackerService {
  /** Record a new golf shot with details like club used, distance, and result */
  RecordShot(request: DeepPartial<Shot>, metadata?: grpc.Metadata): Promise<ShotResponse>;
  /** Retrieve statistics about recorded shots, optionally filtered by club and date range */
  GetStatistics(request: DeepPartial<StatisticsRequest>, metadata?: grpc.Metadata): Promise<StatisticsResponse>;
  /** Stream recent shots and receive real-time updates as new shots are recorded */
  StreamRecentShots(request: DeepPartial<StreamRequest>, metadata?: grpc.Metadata): Observable<Shot>;
}

export class ShotTrackerServiceClientImpl implements ShotTrackerService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RecordShot = this.RecordShot.bind(this);
    this.GetStatistics = this.GetStatistics.bind(this);
    this.StreamRecentShots = this.StreamRecentShots.bind(this);
  }

  RecordShot(request: DeepPartial<Shot>, metadata?: grpc.Metadata): Promise<ShotResponse> {
    return this.rpc.unary(ShotTrackerServiceRecordShotDesc, Shot.fromPartial(request), metadata);
  }

  GetStatistics(request: DeepPartial<StatisticsRequest>, metadata?: grpc.Metadata): Promise<StatisticsResponse> {
    return this.rpc.unary(ShotTrackerServiceGetStatisticsDesc, StatisticsRequest.fromPartial(request), metadata);
  }

  StreamRecentShots(request: DeepPartial<StreamRequest>, metadata?: grpc.Metadata): Observable<Shot> {
    return this.rpc.invoke(ShotTrackerServiceStreamRecentShotsDesc, StreamRequest.fromPartial(request), metadata);
  }
}

export const ShotTrackerServiceDesc = { serviceName: "golf.ShotTrackerService" };

export const ShotTrackerServiceRecordShotDesc: UnaryMethodDefinitionish = {
  methodName: "RecordShot",
  service: ShotTrackerServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Shot.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ShotResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ShotTrackerServiceGetStatisticsDesc: UnaryMethodDefinitionish = {
  methodName: "GetStatistics",
  service: ShotTrackerServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return StatisticsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = StatisticsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ShotTrackerServiceStreamRecentShotsDesc: UnaryMethodDefinitionish = {
  methodName: "StreamRecentShots",
  service: ShotTrackerServiceDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return StreamRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Shot.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;
    streamingTransport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;
      streamingTransport?: grpc.TransportFactory;
      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }

  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any> {
    const upStreamCodes = this.options.upStreamRetryCodes ?? [];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const transport = this.options.streamingTransport ?? this.options.transport;
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Observable((observer) => {
      const upStream = () => {
        const client = grpc.invoke(methodDesc, {
          host: this.host,
          request,
          ...(transport !== undefined ? { transport } : {}),
          metadata: maybeCombinedMetadata ?? {},
          debug: this.options.debug ?? false,
          onMessage: (next) => observer.next(next),
          onEnd: (code: grpc.Code, message: string, trailers: grpc.Metadata) => {
            if (code === 0) {
              observer.complete();
            } else if (upStreamCodes.includes(code)) {
              setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
            } else {
              const err = new Error(message) as any;
              err.code = code;
              err.metadata = trailers;
              observer.error(err);
            }
          },
        });
        observer.add(() => client.close());
      };
      upStream();
    }).pipe(share());
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
