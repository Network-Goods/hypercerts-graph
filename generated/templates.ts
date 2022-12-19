// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class HypercertMinter extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("HypercertMinter", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "HypercertMinter",
      [address.toHex()],
      context
    );
  }
}
