/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface LegacyChallengePayment {
  place: number;
  prizeId: number;
  projectId: number;
  prizeTypeId: number;
  prizeAmount: number;
  createUser: number;
  createDate: number;
  modifyUser: number;
  modifyDate: number;
}

function createBaseLegacyChallengePayment(): LegacyChallengePayment {
  return {
    place: 0,
    prizeId: 0,
    projectId: 0,
    prizeTypeId: 0,
    prizeAmount: 0,
    createUser: 0,
    createDate: 0,
    modifyUser: 0,
    modifyDate: 0,
  };
}

export const LegacyChallengePayment = {
  encode(message: LegacyChallengePayment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.place !== 0) {
      writer.uint32(8).int32(message.place);
    }
    if (message.prizeId !== 0) {
      writer.uint32(16).int32(message.prizeId);
    }
    if (message.projectId !== 0) {
      writer.uint32(24).int32(message.projectId);
    }
    if (message.prizeTypeId !== 0) {
      writer.uint32(32).int32(message.prizeTypeId);
    }
    if (message.prizeAmount !== 0) {
      writer.uint32(45).float(message.prizeAmount);
    }
    if (message.createUser !== 0) {
      writer.uint32(48).int32(message.createUser);
    }
    if (message.createDate !== 0) {
      writer.uint32(56).int64(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(64).int32(message.modifyUser);
    }
    if (message.modifyDate !== 0) {
      writer.uint32(72).int64(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallengePayment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallengePayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.place = reader.int32();
          break;
        case 2:
          message.prizeId = reader.int32();
          break;
        case 3:
          message.projectId = reader.int32();
          break;
        case 4:
          message.prizeTypeId = reader.int32();
          break;
        case 5:
          message.prizeAmount = reader.float();
          break;
        case 6:
          message.createUser = reader.int32();
          break;
        case 7:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.modifyUser = reader.int32();
          break;
        case 9:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallengePayment {
    return {
      place: isSet(object.place) ? Number(object.place) : 0,
      prizeId: isSet(object.prizeId) ? Number(object.prizeId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      prizeTypeId: isSet(object.prizeTypeId) ? Number(object.prizeTypeId) : 0,
      prizeAmount: isSet(object.prizeAmount) ? Number(object.prizeAmount) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
    };
  },

  toJSON(message: LegacyChallengePayment): unknown {
    const obj: any = {};
    message.place !== undefined && (obj.place = Math.round(message.place));
    message.prizeId !== undefined && (obj.prizeId = Math.round(message.prizeId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.prizeTypeId !== undefined && (obj.prizeTypeId = Math.round(message.prizeTypeId));
    message.prizeAmount !== undefined && (obj.prizeAmount = message.prizeAmount);
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyChallengePayment>, I>>(base?: I): LegacyChallengePayment {
    return LegacyChallengePayment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengePayment>, I>>(object: I): LegacyChallengePayment {
    const message = createBaseLegacyChallengePayment();
    message.place = object.place ?? 0;
    message.prizeId = object.prizeId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.prizeTypeId = object.prizeTypeId ?? 0;
    message.prizeAmount = object.prizeAmount ?? 0;
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
