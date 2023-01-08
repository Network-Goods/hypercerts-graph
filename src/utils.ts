import { Address, BigInt, Bytes, log } from "@graphprotocol/graph-ts";
import { Allowlist, Claim, ClaimToken } from "../generated/schema";
import { HypercertMinter } from "../generated/templates/HypercertMinter/HypercertMinter";

export function getID(tokenID: BigInt, contract: Address): string {
  return contract.toHexString().concat(tokenID.toHexString());
}

export function getOrCreateAllowlist(
  claimID: BigInt,
  root: Bytes,
  contract: Address
): Allowlist {
  let id = getID(claimID, contract);
  let list = Allowlist.load(id);

  log.debug("Created claimID: {}", [id]);

  if (list == null) {
    list = new Allowlist(id);
    list.root = root;
    list.claim = getOrCreateClaim(claimID, contract).id;
    list.save();
  }

  return list;
}

export function getOrCreateClaim(claimID: BigInt, contract: Address): Claim {
  let id = getID(claimID, contract);
  let claim = Claim.load(id);

  log.debug("Created claimID: {}", [id]);

  if (claim == null) {
    claim = new Claim(id);
    claim.tokenID = claimID;
    claim.contract = contract.toHexString();
    claim.save();
  }

  return claim;
}

export function getOrCreateClaimToken(
  claimID: BigInt,
  tokenID: BigInt,
  contract: Address
): ClaimToken {
  let minterContract = HypercertMinter.bind(contract);

  let id = getID(tokenID, contract);
  let fraction = ClaimToken.load(id);
  let claim = getOrCreateClaim(claimID, contract);

  if (fraction == null) {
    let owner = minterContract.ownerOf(tokenID);

    fraction = new ClaimToken(id);
    fraction.owner = owner;
    fraction.claim = claim.id;
    fraction.tokenID = tokenID;
    fraction.units = BigInt.fromI32(0);
    fraction.save();
  }

  return fraction;
}
