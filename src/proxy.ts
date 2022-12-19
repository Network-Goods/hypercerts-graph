import { Upgraded } from "../generated/UUPSUpgradeable/UUPSUpgradeable";
import { HypercertMinter } from "../generated/templates";

export function handleUpgraded(event: Upgraded): void {
  HypercertMinter.create(event.params.implementation);
}
