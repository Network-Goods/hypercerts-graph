import {
  AllowlistCreated as AllowlistCreatedEvent,
  ApprovalForAll as ApprovalForAllEvent,
  ClaimStored as ClaimStoredEvent,
  Initialized as InitializedEvent,
  LeafClaimed as LeafClaimedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
  ValueTransfer as ValueTransferEvent,
} from "../generated/templates/HypercertMinter/HypercertMinter";
import { getClaimID, getOrCreateClaim, getOrCreateClaimToken } from "./utils";
import { Address, BigInt } from "@graphprotocol/graph-ts";

const ZERO_ADDRESS = Address.fromHexString("0x0");
const ZERO_TOKEN = BigInt.fromI32(0);

export function handleAllowlistCreated(event: AllowlistCreatedEvent): void {}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {}

export function handleClaimStored(event: ClaimStoredEvent): void {
  let claim = getOrCreateClaim(event.params.claimID, event.address);

  claim.uri = event.params.uri;
  claim.creator = event.transaction.from;
  claim.owner = event.transaction.from;
  claim.totalUnits = event.params.totalUnits;

  claim.save();
}

export function handleInitialized(event: InitializedEvent): void {}

export function handleLeafClaimed(event: LeafClaimedEvent): void {}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {}

export function handleTransferBatch(event: TransferBatchEvent): void {}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let token = getOrCreateClaimToken(event.params.id, event.params.from);
  token.owner = event.params.to;
  token.save();
}

export function handleURI(event: URIEvent): void {}

export function handleValueTransfer(event: ValueTransferEvent): void {
  let from = getOrCreateClaimToken(event.params.fromTokenID, event.address);
  let to = getOrCreateClaimToken(event.params.toTokenID, event.address);

  let value = event.params.value;

  let claimID = getClaimID(event.params.claimID, event.address);
  to.claim = claimID;
  from.claim = claimID;

  // New mint
  if (from.tokenID.equals(ZERO_TOKEN) && to.tokenID.notEqual(ZERO_TOKEN)) {
    to.units = value;
  }

  // Units transfer
  if (from.tokenID.notEqual(ZERO_TOKEN) && to.tokenID.notEqual(ZERO_TOKEN)) {
    from.units.minus(value);
    to.units.plus(value);
  }

  // Burn value
  if (from.tokenID.notEqual(ZERO_TOKEN) && to.tokenID.equals(ZERO_TOKEN)) {
    from.units.minus(value);
  }

  from.save();
  to.save();
}
