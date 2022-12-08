// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class HypercertMinterAdminChanged extends ethereum.Event {
  get params(): HypercertMinterAdminChanged__Params {
    return new HypercertMinterAdminChanged__Params(this);
  }
}

export class HypercertMinterAdminChanged__Params {
  _event: HypercertMinterAdminChanged;

  constructor(event: HypercertMinterAdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AllowlistCreated extends ethereum.Event {
  get params(): AllowlistCreated__Params {
    return new AllowlistCreated__Params(this);
  }
}

export class AllowlistCreated__Params {
  _event: AllowlistCreated;

  constructor(event: AllowlistCreated) {
    this._event = event;
  }

  get claimID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get root(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class HypercertMinterBeaconUpgraded extends ethereum.Event {
  get params(): HypercertMinterBeaconUpgraded__Params {
    return new HypercertMinterBeaconUpgraded__Params(this);
  }
}

export class HypercertMinterBeaconUpgraded__Params {
  _event: HypercertMinterBeaconUpgraded;

  constructor(event: HypercertMinterBeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ClaimStored extends ethereum.Event {
  get params(): ClaimStored__Params {
    return new ClaimStored__Params(this);
  }
}

export class ClaimStored__Params {
  _event: ClaimStored;

  constructor(event: ClaimStored) {
    this._event = event;
  }

  get claimID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get uri(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class LeafClaimed extends ethereum.Event {
  get params(): LeafClaimed__Params {
    return new LeafClaimed__Params(this);
  }
}

export class LeafClaimed__Params {
  _event: LeafClaimed;

  constructor(event: LeafClaimed) {
    this._event = event;
  }

  get claimID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get leaf(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class HypercertMinterUpgraded extends ethereum.Event {
  get params(): HypercertMinterUpgraded__Params {
    return new HypercertMinterUpgraded__Params(this);
  }
}

export class HypercertMinterUpgraded__Params {
  _event: HypercertMinterUpgraded;

  constructor(event: HypercertMinterUpgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ValueTransfer extends ethereum.Event {
  get params(): ValueTransfer__Params {
    return new ValueTransfer__Params(this);
  }
}

export class ValueTransfer__Params {
  _event: ValueTransfer;

  constructor(event: ValueTransfer) {
    this._event = event;
  }

  get fromTokenID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get toTokenID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class HypercertMinter extends ethereum.SmartContract {
  static bind(address: Address): HypercertMinter {
    return new HypercertMinter("HypercertMinter", address);
  }

  NF_INDEX_MASK(): BigInt {
    let result = super.call("NF_INDEX_MASK", "NF_INDEX_MASK():(uint256)", []);

    return result[0].toBigInt();
  }

  try_NF_INDEX_MASK(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "NF_INDEX_MASK",
      "NF_INDEX_MASK():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  TYPE_MASK(): BigInt {
    let result = super.call("TYPE_MASK", "TYPE_MASK():(uint256)", []);

    return result[0].toBigInt();
  }

  try_TYPE_MASK(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("TYPE_MASK", "TYPE_MASK():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  TYPE_NF_BIT(): BigInt {
    let result = super.call("TYPE_NF_BIT", "TYPE_NF_BIT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_TYPE_NF_BIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("TYPE_NF_BIT", "TYPE_NF_BIT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(_owner: Address, _tokenID: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_tokenID)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(
    _owner: Address,
    _tokenID: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_tokenID)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf1(_tokenID: BigInt): BigInt {
    let result = super.call("balanceOf", "balanceOf(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenID)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf1(_tokenID: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenID)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  hasBeenClaimed(param0: BigInt, param1: Bytes): boolean {
    let result = super.call(
      "hasBeenClaimed",
      "hasBeenClaimed(uint256,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_hasBeenClaimed(
    param0: BigInt,
    param1: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasBeenClaimed",
      "hasBeenClaimed(uint256,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isAllowedToClaim(proof: Array<Bytes>, claimID: BigInt, leaf: Bytes): boolean {
    let result = super.call(
      "isAllowedToClaim",
      "isAllowedToClaim(bytes32[],uint256,bytes32):(bool)",
      [
        ethereum.Value.fromFixedBytesArray(proof),
        ethereum.Value.fromUnsignedBigInt(claimID),
        ethereum.Value.fromFixedBytes(leaf)
      ]
    );

    return result[0].toBoolean();
  }

  try_isAllowedToClaim(
    proof: Array<Bytes>,
    claimID: BigInt,
    leaf: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAllowedToClaim",
      "isAllowedToClaim(bytes32[],uint256,bytes32):(bool)",
      [
        ethereum.Value.fromFixedBytesArray(proof),
        ethereum.Value.fromUnsignedBigInt(claimID),
        ethereum.Value.fromFixedBytes(leaf)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(_typeID: BigInt): BigInt {
    let result = super.call("totalSupply", "totalSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_typeID)
    ]);

    return result[0].toBigInt();
  }

  try_totalSupply(_typeID: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupply",
      "totalSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_typeID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  typeCounter(): BigInt {
    let result = super.call("typeCounter", "typeCounter():(uint256)", []);

    return result[0].toBigInt();
  }

  try_typeCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("typeCounter", "typeCounter():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  uri(tokenID: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenID)
    ]);

    return result[0].toString();
  }

  try_uri(tokenID: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenID)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class __SemiFungible1155_initCall extends ethereum.Call {
  get inputs(): __SemiFungible1155_initCall__Inputs {
    return new __SemiFungible1155_initCall__Inputs(this);
  }

  get outputs(): __SemiFungible1155_initCall__Outputs {
    return new __SemiFungible1155_initCall__Outputs(this);
  }
}

export class __SemiFungible1155_initCall__Inputs {
  _call: __SemiFungible1155_initCall;

  constructor(call: __SemiFungible1155_initCall) {
    this._call = call;
  }
}

export class __SemiFungible1155_initCall__Outputs {
  _call: __SemiFungible1155_initCall;

  constructor(call: __SemiFungible1155_initCall) {
    this._call = call;
  }
}

export class __Upgradeable1155_initCall extends ethereum.Call {
  get inputs(): __Upgradeable1155_initCall__Inputs {
    return new __Upgradeable1155_initCall__Inputs(this);
  }

  get outputs(): __Upgradeable1155_initCall__Outputs {
    return new __Upgradeable1155_initCall__Outputs(this);
  }
}

export class __Upgradeable1155_initCall__Inputs {
  _call: __Upgradeable1155_initCall;

  constructor(call: __Upgradeable1155_initCall) {
    this._call = call;
  }
}

export class __Upgradeable1155_initCall__Outputs {
  _call: __Upgradeable1155_initCall;

  constructor(call: __Upgradeable1155_initCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class BurnBatchCall extends ethereum.Call {
  get inputs(): BurnBatchCall__Inputs {
    return new BurnBatchCall__Inputs(this);
  }

  get outputs(): BurnBatchCall__Outputs {
    return new BurnBatchCall__Outputs(this);
  }
}

export class BurnBatchCall__Inputs {
  _call: BurnBatchCall;

  constructor(call: BurnBatchCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class BurnBatchCall__Outputs {
  _call: BurnBatchCall;

  constructor(call: BurnBatchCall) {
    this._call = call;
  }
}

export class BurnValueCall extends ethereum.Call {
  get inputs(): BurnValueCall__Inputs {
    return new BurnValueCall__Inputs(this);
  }

  get outputs(): BurnValueCall__Outputs {
    return new BurnValueCall__Outputs(this);
  }
}

export class BurnValueCall__Inputs {
  _call: BurnValueCall;

  constructor(call: BurnValueCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BurnValueCall__Outputs {
  _call: BurnValueCall;

  constructor(call: BurnValueCall) {
    this._call = call;
  }
}

export class CreateAllowlistCall extends ethereum.Call {
  get inputs(): CreateAllowlistCall__Inputs {
    return new CreateAllowlistCall__Inputs(this);
  }

  get outputs(): CreateAllowlistCall__Outputs {
    return new CreateAllowlistCall__Outputs(this);
  }
}

export class CreateAllowlistCall__Inputs {
  _call: CreateAllowlistCall;

  constructor(call: CreateAllowlistCall) {
    this._call = call;
  }

  get units(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get merkleRoot(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get uri(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class CreateAllowlistCall__Outputs {
  _call: CreateAllowlistCall;

  constructor(call: CreateAllowlistCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MergeValueCall extends ethereum.Call {
  get inputs(): MergeValueCall__Inputs {
    return new MergeValueCall__Inputs(this);
  }

  get outputs(): MergeValueCall__Outputs {
    return new MergeValueCall__Outputs(this);
  }
}

export class MergeValueCall__Inputs {
  _call: MergeValueCall;

  constructor(call: MergeValueCall) {
    this._call = call;
  }

  get _fractionIDs(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class MergeValueCall__Outputs {
  _call: MergeValueCall;

  constructor(call: MergeValueCall) {
    this._call = call;
  }
}

export class MintClaimCall extends ethereum.Call {
  get inputs(): MintClaimCall__Inputs {
    return new MintClaimCall__Inputs(this);
  }

  get outputs(): MintClaimCall__Outputs {
    return new MintClaimCall__Outputs(this);
  }
}

export class MintClaimCall__Inputs {
  _call: MintClaimCall;

  constructor(call: MintClaimCall) {
    this._call = call;
  }

  get units(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get uri(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class MintClaimCall__Outputs {
  _call: MintClaimCall;

  constructor(call: MintClaimCall) {
    this._call = call;
  }
}

export class MintClaimFromAllowlistCall extends ethereum.Call {
  get inputs(): MintClaimFromAllowlistCall__Inputs {
    return new MintClaimFromAllowlistCall__Inputs(this);
  }

  get outputs(): MintClaimFromAllowlistCall__Outputs {
    return new MintClaimFromAllowlistCall__Outputs(this);
  }
}

export class MintClaimFromAllowlistCall__Inputs {
  _call: MintClaimFromAllowlistCall;

  constructor(call: MintClaimFromAllowlistCall) {
    this._call = call;
  }

  get proof(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }

  get claimID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class MintClaimFromAllowlistCall__Outputs {
  _call: MintClaimFromAllowlistCall;

  constructor(call: MintClaimFromAllowlistCall) {
    this._call = call;
  }
}

export class MintClaimWithFractionsCall extends ethereum.Call {
  get inputs(): MintClaimWithFractionsCall__Inputs {
    return new MintClaimWithFractionsCall__Inputs(this);
  }

  get outputs(): MintClaimWithFractionsCall__Outputs {
    return new MintClaimWithFractionsCall__Outputs(this);
  }
}

export class MintClaimWithFractionsCall__Inputs {
  _call: MintClaimWithFractionsCall;

  constructor(call: MintClaimWithFractionsCall) {
    this._call = call;
  }

  get fractions(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get uri(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class MintClaimWithFractionsCall__Outputs {
  _call: MintClaimWithFractionsCall;

  constructor(call: MintClaimWithFractionsCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _value(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SplitValueCall extends ethereum.Call {
  get inputs(): SplitValueCall__Inputs {
    return new SplitValueCall__Inputs(this);
  }

  get outputs(): SplitValueCall__Outputs {
    return new SplitValueCall__Outputs(this);
  }
}

export class SplitValueCall__Inputs {
  _call: SplitValueCall;

  constructor(call: SplitValueCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _values(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class SplitValueCall__Outputs {
  _call: SplitValueCall;

  constructor(call: SplitValueCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
