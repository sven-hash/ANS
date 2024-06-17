/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as ForwardNameResolverContractJson } from "../name_service/ForwardNameResolver.ral.json";
import { getContractByCodeHash } from "./contracts";

import { RalphMap } from "@alephium/web3";

// Custom types for the contract
export namespace ForwardNameResolverTypes {
  export type Fields = {
    nameTemplateId: HexString;
    tokenTemplateId: HexString;
    collectionUri: HexString;
    renewLength: bigint;
    earliestRenew: bigint;
    totalSupply: bigint;
  };

  export type State = ContractState<Fields>;

  export type NameCreatedEvent = ContractEvent<{
    nftIndex: bigint;
    name: HexString;
    capitalisation: HexString;
    creator: Address;
    expires: bigint;
  }>;
  export type NameRenewedEvent = ContractEvent<{
    nftIndex: bigint;
    name: HexString;
    renewer: Address;
    expires: bigint;
  }>;
  export type AddressSetEvent = ContractEvent<{
    nftIndex: bigint;
    name: HexString;
    newAddress: Address;
  }>;
  export type CapitalisationSetEvent = ContractEvent<{
    nftIndex: bigint;
    name: HexString;
    newCapitalisation: HexString;
  }>;
  export type NameDeletedEvent = ContractEvent<{
    nftIndex: bigint;
    name: HexString;
    deleter: Address;
  }>;
  export type ReverseAddressSetEvent = ContractEvent<{
    address: Address;
    newName: HexString;
  }>;
  export type ReverseAddressDeletedEvent = ContractEvent<{
    address: Address;
    name: HexString;
  }>;

  export interface CallMethodTable {
    getCollectionUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    totalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    nftByIndex: {
      params: CallContractParams<{ index: bigint }>;
      result: CallContractResult<HexString>;
    };
    validateNFT: {
      params: CallContractParams<{ nftId: HexString; nftIndex: bigint }>;
      result: CallContractResult<null>;
    };
    getNftKey: {
      params: CallContractParams<{ nftIndex: bigint }>;
      result: CallContractResult<HexString>;
    };
    getRewardTokenKey: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getNftByName: {
      params: CallContractParams<{ name: HexString }>;
      result: CallContractResult<HexString>;
    };
    coontainsNftByName: {
      params: CallContractParams<{ name: HexString }>;
      result: CallContractResult<boolean>;
    };
    getRewardToken: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    hasExpired: {
      params: CallContractParams<{ nft: HexString }>;
      result: CallContractResult<boolean>;
    };
    canRenew: {
      params: CallContractParams<{ nft: HexString }>;
      result: CallContractResult<boolean>;
    };
    generateToken: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    mint: {
      params: CallContractParams<{
        name: HexString;
        capitalisation: HexString;
      }>;
      result: CallContractResult<HexString>;
    };
    setAddress: {
      params: CallContractParams<{ name: HexString; newAddress: Address }>;
      result: CallContractResult<null>;
    };
    setCapitalisation: {
      params: CallContractParams<{
        name: HexString;
        newCapitalisation: HexString;
      }>;
      result: CallContractResult<null>;
    };
    renewName: {
      params: CallContractParams<{ name: HexString }>;
      result: CallContractResult<null>;
    };
    deleteExpired: {
      params: CallContractParams<{ name: HexString }>;
      result: CallContractResult<null>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };

  export interface SignExecuteMethodTable {
    getCollectionUri: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    totalSupply: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    nftByIndex: {
      params: SignExecuteContractMethodParams<{ index: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    validateNFT: {
      params: SignExecuteContractMethodParams<{
        nftId: HexString;
        nftIndex: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    getNftKey: {
      params: SignExecuteContractMethodParams<{ nftIndex: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    getRewardTokenKey: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getNftByName: {
      params: SignExecuteContractMethodParams<{ name: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    coontainsNftByName: {
      params: SignExecuteContractMethodParams<{ name: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    getRewardToken: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    hasExpired: {
      params: SignExecuteContractMethodParams<{ nft: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    canRenew: {
      params: SignExecuteContractMethodParams<{ nft: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    generateToken: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    mint: {
      params: SignExecuteContractMethodParams<{
        name: HexString;
        capitalisation: HexString;
      }>;
      result: SignExecuteScriptTxResult;
    };
    setAddress: {
      params: SignExecuteContractMethodParams<{
        name: HexString;
        newAddress: Address;
      }>;
      result: SignExecuteScriptTxResult;
    };
    setCapitalisation: {
      params: SignExecuteContractMethodParams<{
        name: HexString;
        newCapitalisation: HexString;
      }>;
      result: SignExecuteScriptTxResult;
    };
    renewName: {
      params: SignExecuteContractMethodParams<{ name: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    deleteExpired: {
      params: SignExecuteContractMethodParams<{ name: HexString }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  ForwardNameResolverInstance,
  ForwardNameResolverTypes.Fields
> {
  encodeFields(fields: ForwardNameResolverTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as ForwardNameResolverTypes.Fields;
  }

  eventIndex = {
    NameCreated: 0,
    NameRenewed: 1,
    AddressSet: 2,
    CapitalisationSet: 3,
    NameDeleted: 4,
    ReverseAddressSet: 5,
    ReverseAddressDeleted: 6,
  };
  consts = {
    ErrorCodes: {
      OnlyParentAllowed: BigInt(0),
      NFTNotFound: BigInt(1),
      NFTNotPartOfCollection: BigInt(2),
      OnlyNftOwnerAllowed: BigInt(3),
      NameHasNotExpired: BigInt(4),
      CannotRenewName: BigInt(5),
      TokenAlreadyGenerated: BigInt(6),
      ReverseAddressNotFound: BigInt(7),
      OnlyNftOwnerOrHolderAllowed: BigInt(8),
    },
    Keys: { Names: "01", Token: "02" },
  };

  at(address: string): ForwardNameResolverInstance {
    return new ForwardNameResolverInstance(address);
  }

  tests = {
    getCollectionUri: async (
      params: Omit<
        TestContractParams<
          ForwardNameResolverTypes.Fields,
          never,
          { nameNftIndex?: Map<HexString, bigint> }
        >,
        "testArgs"
      >
    ): Promise<
      TestContractResult<HexString, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(
        this,
        "getCollectionUri",
        params,
        getContractByCodeHash
      );
    },
    totalSupply: async (
      params: Omit<
        TestContractParams<
          ForwardNameResolverTypes.Fields,
          never,
          { nameNftIndex?: Map<HexString, bigint> }
        >,
        "testArgs"
      >
    ): Promise<
      TestContractResult<bigint, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "totalSupply", params, getContractByCodeHash);
    },
    nftByIndex: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { index: bigint },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<HexString, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "nftByIndex", params, getContractByCodeHash);
    },
    validateNFT: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { nftId: HexString; nftIndex: bigint },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<null, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "validateNFT", params, getContractByCodeHash);
    },
    getNftKey: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { nftIndex: bigint },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<HexString, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "getNftKey", params, getContractByCodeHash);
    },
    getRewardTokenKey: async (
      params: Omit<
        TestContractParams<
          ForwardNameResolverTypes.Fields,
          never,
          { nameNftIndex?: Map<HexString, bigint> }
        >,
        "testArgs"
      >
    ): Promise<
      TestContractResult<HexString, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(
        this,
        "getRewardTokenKey",
        params,
        getContractByCodeHash
      );
    },
    getNftByName: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { name: HexString },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<HexString, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "getNftByName", params, getContractByCodeHash);
    },
    coontainsNftByName: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { name: HexString },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<boolean, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(
        this,
        "coontainsNftByName",
        params,
        getContractByCodeHash
      );
    },
    getRewardToken: async (
      params: Omit<
        TestContractParams<
          ForwardNameResolverTypes.Fields,
          never,
          { nameNftIndex?: Map<HexString, bigint> }
        >,
        "testArgs"
      >
    ): Promise<
      TestContractResult<HexString, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "getRewardToken", params, getContractByCodeHash);
    },
    hasExpired: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { nft: HexString },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<boolean, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "hasExpired", params, getContractByCodeHash);
    },
    canRenew: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { nft: HexString },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<boolean, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "canRenew", params, getContractByCodeHash);
    },
    generateToken: async (
      params: Omit<
        TestContractParams<
          ForwardNameResolverTypes.Fields,
          never,
          { nameNftIndex?: Map<HexString, bigint> }
        >,
        "testArgs"
      >
    ): Promise<
      TestContractResult<HexString, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "generateToken", params, getContractByCodeHash);
    },
    createName: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        {
          minter: Address;
          index: bigint;
          name: HexString;
          capitalisation: HexString;
        },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<HexString, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "createName", params, getContractByCodeHash);
    },
    handleRewardTokens: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { caller: Address; name: HexString },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<null, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(
        this,
        "handleRewardTokens",
        params,
        getContractByCodeHash
      );
    },
    mint: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { name: HexString; capitalisation: HexString },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<HexString, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "mint", params, getContractByCodeHash);
    },
    setAddress: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { name: HexString; newAddress: Address },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<null, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "setAddress", params, getContractByCodeHash);
    },
    setCapitalisation: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { name: HexString; newCapitalisation: HexString },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<null, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(
        this,
        "setCapitalisation",
        params,
        getContractByCodeHash
      );
    },
    renewName: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { name: HexString },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<null, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "renewName", params, getContractByCodeHash);
    },
    deleteExpired: async (
      params: TestContractParams<
        ForwardNameResolverTypes.Fields,
        { name: HexString },
        { nameNftIndex?: Map<HexString, bigint> }
      >
    ): Promise<
      TestContractResult<null, { nameNftIndex?: Map<HexString, bigint> }>
    > => {
      return testMethod(this, "deleteExpired", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const ForwardNameResolver = new Factory(
  Contract.fromJson(
    ForwardNameResolverContractJson,
    "=58-6+93=2-1+c=3+11=1-1+36=1+43e=1-2=975-1+6=179-1+b=38+7a7e0214696e73657274206174206d617020706174683a2000=504-2+30=168+7a7e021472656d6f7665206174206d617020706174683a2000=22",
    "e8c02f47aac8f6f7206b63d532226eab98141e7c7f05887d095405f6a44c5101",
    []
  )
);

// Use this class to interact with the blockchain
export class ForwardNameResolverInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  maps = {
    nameNftIndex: new RalphMap<HexString, bigint>(
      ForwardNameResolver.contract,
      this.contractId,
      "nameNftIndex"
    ),
  };

  async fetchState(): Promise<ForwardNameResolverTypes.State> {
    return fetchContractState(ForwardNameResolver, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeNameCreatedEvent(
    options: EventSubscribeOptions<ForwardNameResolverTypes.NameCreatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      ForwardNameResolver.contract,
      this,
      options,
      "NameCreated",
      fromCount
    );
  }

  subscribeNameRenewedEvent(
    options: EventSubscribeOptions<ForwardNameResolverTypes.NameRenewedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      ForwardNameResolver.contract,
      this,
      options,
      "NameRenewed",
      fromCount
    );
  }

  subscribeAddressSetEvent(
    options: EventSubscribeOptions<ForwardNameResolverTypes.AddressSetEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      ForwardNameResolver.contract,
      this,
      options,
      "AddressSet",
      fromCount
    );
  }

  subscribeCapitalisationSetEvent(
    options: EventSubscribeOptions<ForwardNameResolverTypes.CapitalisationSetEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      ForwardNameResolver.contract,
      this,
      options,
      "CapitalisationSet",
      fromCount
    );
  }

  subscribeNameDeletedEvent(
    options: EventSubscribeOptions<ForwardNameResolverTypes.NameDeletedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      ForwardNameResolver.contract,
      this,
      options,
      "NameDeleted",
      fromCount
    );
  }

  subscribeReverseAddressSetEvent(
    options: EventSubscribeOptions<ForwardNameResolverTypes.ReverseAddressSetEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      ForwardNameResolver.contract,
      this,
      options,
      "ReverseAddressSet",
      fromCount
    );
  }

  subscribeReverseAddressDeletedEvent(
    options: EventSubscribeOptions<ForwardNameResolverTypes.ReverseAddressDeletedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      ForwardNameResolver.contract,
      this,
      options,
      "ReverseAddressDeleted",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | ForwardNameResolverTypes.NameCreatedEvent
      | ForwardNameResolverTypes.NameRenewedEvent
      | ForwardNameResolverTypes.AddressSetEvent
      | ForwardNameResolverTypes.CapitalisationSetEvent
      | ForwardNameResolverTypes.NameDeletedEvent
      | ForwardNameResolverTypes.ReverseAddressSetEvent
      | ForwardNameResolverTypes.ReverseAddressDeletedEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      ForwardNameResolver.contract,
      this,
      options,
      fromCount
    );
  }

  methods = {
    getCollectionUri: async (
      params?: ForwardNameResolverTypes.CallMethodParams<"getCollectionUri">
    ): Promise<
      ForwardNameResolverTypes.CallMethodResult<"getCollectionUri">
    > => {
      return callMethod(
        ForwardNameResolver,
        this,
        "getCollectionUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    totalSupply: async (
      params?: ForwardNameResolverTypes.CallMethodParams<"totalSupply">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"totalSupply">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "totalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    nftByIndex: async (
      params: ForwardNameResolverTypes.CallMethodParams<"nftByIndex">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"nftByIndex">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "nftByIndex",
        params,
        getContractByCodeHash
      );
    },
    validateNFT: async (
      params: ForwardNameResolverTypes.CallMethodParams<"validateNFT">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"validateNFT">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "validateNFT",
        params,
        getContractByCodeHash
      );
    },
    getNftKey: async (
      params: ForwardNameResolverTypes.CallMethodParams<"getNftKey">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"getNftKey">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "getNftKey",
        params,
        getContractByCodeHash
      );
    },
    getRewardTokenKey: async (
      params?: ForwardNameResolverTypes.CallMethodParams<"getRewardTokenKey">
    ): Promise<
      ForwardNameResolverTypes.CallMethodResult<"getRewardTokenKey">
    > => {
      return callMethod(
        ForwardNameResolver,
        this,
        "getRewardTokenKey",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getNftByName: async (
      params: ForwardNameResolverTypes.CallMethodParams<"getNftByName">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"getNftByName">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "getNftByName",
        params,
        getContractByCodeHash
      );
    },
    coontainsNftByName: async (
      params: ForwardNameResolverTypes.CallMethodParams<"coontainsNftByName">
    ): Promise<
      ForwardNameResolverTypes.CallMethodResult<"coontainsNftByName">
    > => {
      return callMethod(
        ForwardNameResolver,
        this,
        "coontainsNftByName",
        params,
        getContractByCodeHash
      );
    },
    getRewardToken: async (
      params?: ForwardNameResolverTypes.CallMethodParams<"getRewardToken">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"getRewardToken">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "getRewardToken",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    hasExpired: async (
      params: ForwardNameResolverTypes.CallMethodParams<"hasExpired">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"hasExpired">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "hasExpired",
        params,
        getContractByCodeHash
      );
    },
    canRenew: async (
      params: ForwardNameResolverTypes.CallMethodParams<"canRenew">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"canRenew">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "canRenew",
        params,
        getContractByCodeHash
      );
    },
    generateToken: async (
      params?: ForwardNameResolverTypes.CallMethodParams<"generateToken">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"generateToken">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "generateToken",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    mint: async (
      params: ForwardNameResolverTypes.CallMethodParams<"mint">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"mint">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "mint",
        params,
        getContractByCodeHash
      );
    },
    setAddress: async (
      params: ForwardNameResolverTypes.CallMethodParams<"setAddress">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"setAddress">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "setAddress",
        params,
        getContractByCodeHash
      );
    },
    setCapitalisation: async (
      params: ForwardNameResolverTypes.CallMethodParams<"setCapitalisation">
    ): Promise<
      ForwardNameResolverTypes.CallMethodResult<"setCapitalisation">
    > => {
      return callMethod(
        ForwardNameResolver,
        this,
        "setCapitalisation",
        params,
        getContractByCodeHash
      );
    },
    renewName: async (
      params: ForwardNameResolverTypes.CallMethodParams<"renewName">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"renewName">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "renewName",
        params,
        getContractByCodeHash
      );
    },
    deleteExpired: async (
      params: ForwardNameResolverTypes.CallMethodParams<"deleteExpired">
    ): Promise<ForwardNameResolverTypes.CallMethodResult<"deleteExpired">> => {
      return callMethod(
        ForwardNameResolver,
        this,
        "deleteExpired",
        params,
        getContractByCodeHash
      );
    },
  };

  view = this.methods;

  transact = {
    getCollectionUri: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"getCollectionUri">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"getCollectionUri">
    > => {
      return signExecuteMethod(
        ForwardNameResolver,
        this,
        "getCollectionUri",
        params
      );
    },
    totalSupply: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"totalSupply">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"totalSupply">
    > => {
      return signExecuteMethod(
        ForwardNameResolver,
        this,
        "totalSupply",
        params
      );
    },
    nftByIndex: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"nftByIndex">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"nftByIndex">
    > => {
      return signExecuteMethod(ForwardNameResolver, this, "nftByIndex", params);
    },
    validateNFT: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"validateNFT">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"validateNFT">
    > => {
      return signExecuteMethod(
        ForwardNameResolver,
        this,
        "validateNFT",
        params
      );
    },
    getNftKey: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"getNftKey">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"getNftKey">
    > => {
      return signExecuteMethod(ForwardNameResolver, this, "getNftKey", params);
    },
    getRewardTokenKey: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"getRewardTokenKey">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"getRewardTokenKey">
    > => {
      return signExecuteMethod(
        ForwardNameResolver,
        this,
        "getRewardTokenKey",
        params
      );
    },
    getNftByName: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"getNftByName">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"getNftByName">
    > => {
      return signExecuteMethod(
        ForwardNameResolver,
        this,
        "getNftByName",
        params
      );
    },
    coontainsNftByName: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"coontainsNftByName">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"coontainsNftByName">
    > => {
      return signExecuteMethod(
        ForwardNameResolver,
        this,
        "coontainsNftByName",
        params
      );
    },
    getRewardToken: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"getRewardToken">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"getRewardToken">
    > => {
      return signExecuteMethod(
        ForwardNameResolver,
        this,
        "getRewardToken",
        params
      );
    },
    hasExpired: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"hasExpired">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"hasExpired">
    > => {
      return signExecuteMethod(ForwardNameResolver, this, "hasExpired", params);
    },
    canRenew: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"canRenew">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"canRenew">
    > => {
      return signExecuteMethod(ForwardNameResolver, this, "canRenew", params);
    },
    generateToken: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"generateToken">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"generateToken">
    > => {
      return signExecuteMethod(
        ForwardNameResolver,
        this,
        "generateToken",
        params
      );
    },
    mint: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"mint">
    ): Promise<ForwardNameResolverTypes.SignExecuteMethodResult<"mint">> => {
      return signExecuteMethod(ForwardNameResolver, this, "mint", params);
    },
    setAddress: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"setAddress">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"setAddress">
    > => {
      return signExecuteMethod(ForwardNameResolver, this, "setAddress", params);
    },
    setCapitalisation: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"setCapitalisation">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"setCapitalisation">
    > => {
      return signExecuteMethod(
        ForwardNameResolver,
        this,
        "setCapitalisation",
        params
      );
    },
    renewName: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"renewName">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"renewName">
    > => {
      return signExecuteMethod(ForwardNameResolver, this, "renewName", params);
    },
    deleteExpired: async (
      params: ForwardNameResolverTypes.SignExecuteMethodParams<"deleteExpired">
    ): Promise<
      ForwardNameResolverTypes.SignExecuteMethodResult<"deleteExpired">
    > => {
      return signExecuteMethod(
        ForwardNameResolver,
        this,
        "deleteExpired",
        params
      );
    },
  };

  async multicall<Calls extends ForwardNameResolverTypes.MultiCallParams>(
    calls: Calls
  ): Promise<ForwardNameResolverTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      ForwardNameResolver,
      this,
      calls,
      getContractByCodeHash
    )) as ForwardNameResolverTypes.MultiCallResults<Calls>;
  }
}