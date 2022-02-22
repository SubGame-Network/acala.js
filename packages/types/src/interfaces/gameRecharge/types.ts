// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec, u128, u32, u64 } from '@polkadot/types-codec';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name GRPlatform */
export interface GRPlatform extends Struct {
  readonly id: u128;
  readonly admin: AccountId;
  readonly pool_account: AccountId;
  readonly asset_id: u32;
  readonly plan: Vec<Plan>;
}

/** @name Plan */
export interface Plan extends Struct {
  readonly amount: u64;
  readonly score: u64;
}

export type PHANTOM_GAMERECHARGE = 'gameRecharge';
