import {
  HypercertMinterAdminChanged as HypercertMinterAdminChangedEvent,
  AllowlistCreated as AllowlistCreatedEvent,
  ApprovalForAll as ApprovalForAllEvent,
  HypercertMinterBeaconUpgraded as HypercertMinterBeaconUpgradedEvent,
  ClaimStored as ClaimStoredEvent,
  Initialized as InitializedEvent,
  LeafClaimed as LeafClaimedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
  HypercertMinterUpgraded as HypercertMinterUpgradedEvent,
  ValueTransfer as ValueTransferEvent,
} from "../generated/HypercertMinter/HypercertMinter";
import {
  HypercertMinterAdminChanged,
  AllowlistCreated,
  ApprovalForAll,
  HypercertMinterBeaconUpgraded,
  ClaimStored,
  Initialized,
  LeafClaimed,
  OwnershipTransferred,
  TransferBatch,
  TransferSingle,
  URI,
  HypercertMinterUpgraded,
  ValueTransfer,
} from "../generated/schema";

export function handleHypercertMinterAdminChanged(
  event: HypercertMinterAdminChangedEvent
): void {
  let entity = new HypercertMinterAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousAdmin = event.params.previousAdmin;
  entity.newAdmin = event.params.newAdmin;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleAllowlistCreated(event: AllowlistCreatedEvent): void {
  let entity = new AllowlistCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.claimID = event.params.claimID;
  entity.root = event.params.root;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleHypercertMinterBeaconUpgraded(
  event: HypercertMinterBeaconUpgradedEvent
): void {
  let entity = new HypercertMinterBeaconUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.beacon = event.params.beacon;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleClaimStored(event: ClaimStoredEvent): void {
  let entity = new ClaimStored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.claimID = event.params.claimID;
  entity.uri = event.params.uri;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.version = event.params.version;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleLeafClaimed(event: LeafClaimedEvent): void {
  let entity = new LeafClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.claimID = event.params.claimID;
  entity.leaf = event.params.leaf;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.operator = event.params.operator;
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenIds = event.params.ids;
  entity.values = event.params.values;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.operator = event.params.operator;
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenID = event.params.id;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.value = event.params.value;
  entity.tokenID = event.params.id;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleHypercertMinterUpgraded(
  event: HypercertMinterUpgradedEvent
): void {
  let entity = new HypercertMinterUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.implementation = event.params.implementation;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleValueTransfer(event: ValueTransferEvent): void {
  let entity = new ValueTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.fromTokenID = event.params.fromTokenID;
  entity.toTokenID = event.params.toTokenID;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
