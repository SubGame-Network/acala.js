// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u128, u8 } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name BridgeRecord */
export interface BridgeRecord extends Struct {
  readonly from: AccountId;
  readonly to: AccountId;
  readonly amount: u128;
  readonly chain_type: u8;
  readonly coin_type: u8;
}

export type PHANTOM_BRIDGE = 'bridge';
