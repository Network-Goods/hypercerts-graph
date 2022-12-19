import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Claim, ClaimFraction } from "../generated/schema";

export function getClaimID(claimID: BigInt, contract: Address): string {
  return contract.toHexString().concat(claimID.toHexString());
}

export function getOrCreateClaim(claimID: BigInt, contract: Address): Claim {
  let id = getClaimID(claimID, contract);
  let claim = Claim.load(id);

  if (claim != null) {
    return claim;
  }

  claim = new Claim(id);
  claim.contract = contract.toHexString();
  claim.save();

  return claim;
}

export function getOrCreateClaimToken(
  tokenID: BigInt,
  contract: Address
): ClaimFraction {
  let id = contract.toHexString().concat(tokenID.toHexString());
  let fraction = ClaimFraction.load(id);

  if (fraction != null) {
    return fraction;
  }

  fraction = new ClaimFraction(id);
  fraction.tokenID = tokenID;
  fraction.units = BigInt.fromI32(0);
  fraction.save();

  return fraction;
}
