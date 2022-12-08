import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
  ValueTransfer
} from "../generated/HypercertMinter/HypercertMinter"

export function createHypercertMinterAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): HypercertMinterAdminChanged {
  let hypercertMinterAdminChangedEvent = changetype<
    HypercertMinterAdminChanged
  >(newMockEvent())

  hypercertMinterAdminChangedEvent.parameters = new Array()

  hypercertMinterAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  hypercertMinterAdminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return hypercertMinterAdminChangedEvent
}

export function createAllowlistCreatedEvent(
  claimID: BigInt,
  root: Bytes
): AllowlistCreated {
  let allowlistCreatedEvent = changetype<AllowlistCreated>(newMockEvent())

  allowlistCreatedEvent.parameters = new Array()

  allowlistCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "claimID",
      ethereum.Value.fromUnsignedBigInt(claimID)
    )
  )
  allowlistCreatedEvent.parameters.push(
    new ethereum.EventParam("root", ethereum.Value.fromFixedBytes(root))
  )

  return allowlistCreatedEvent
}

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createHypercertMinterBeaconUpgradedEvent(
  beacon: Address
): HypercertMinterBeaconUpgraded {
  let hypercertMinterBeaconUpgradedEvent = changetype<
    HypercertMinterBeaconUpgraded
  >(newMockEvent())

  hypercertMinterBeaconUpgradedEvent.parameters = new Array()

  hypercertMinterBeaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return hypercertMinterBeaconUpgradedEvent
}

export function createClaimStoredEvent(
  claimID: BigInt,
  uri: string
): ClaimStored {
  let claimStoredEvent = changetype<ClaimStored>(newMockEvent())

  claimStoredEvent.parameters = new Array()

  claimStoredEvent.parameters.push(
    new ethereum.EventParam(
      "claimID",
      ethereum.Value.fromUnsignedBigInt(claimID)
    )
  )
  claimStoredEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )

  return claimStoredEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createLeafClaimedEvent(
  claimID: BigInt,
  leaf: Bytes
): LeafClaimed {
  let leafClaimedEvent = changetype<LeafClaimed>(newMockEvent())

  leafClaimedEvent.parameters = new Array()

  leafClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimID",
      ethereum.Value.fromUnsignedBigInt(claimID)
    )
  )
  leafClaimedEvent.parameters.push(
    new ethereum.EventParam("leaf", ethereum.Value.fromFixedBytes(leaf))
  )

  return leafClaimedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createHypercertMinterUpgradedEvent(
  implementation: Address
): HypercertMinterUpgraded {
  let hypercertMinterUpgradedEvent = changetype<HypercertMinterUpgraded>(
    newMockEvent()
  )

  hypercertMinterUpgradedEvent.parameters = new Array()

  hypercertMinterUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return hypercertMinterUpgradedEvent
}

export function createValueTransferEvent(
  fromTokenID: BigInt,
  toTokenID: BigInt,
  value: BigInt
): ValueTransfer {
  let valueTransferEvent = changetype<ValueTransfer>(newMockEvent())

  valueTransferEvent.parameters = new Array()

  valueTransferEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenID",
      ethereum.Value.fromUnsignedBigInt(fromTokenID)
    )
  )
  valueTransferEvent.parameters.push(
    new ethereum.EventParam(
      "toTokenID",
      ethereum.Value.fromUnsignedBigInt(toTokenID)
    )
  )
  valueTransferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return valueTransferEvent
}
