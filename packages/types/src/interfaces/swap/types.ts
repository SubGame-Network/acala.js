// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u128, u32 } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name SwapId */
export interface SwapId extends u32 {}

/** @name SwapPoolDetails */
export interface SwapPoolDetails extends Struct {
  readonly swap_id: u32;
  readonly account: AccountId;
  readonly asset_a: u32;
  readonly asset_b: u32;
  readonly asset_lp: u32;
  readonly swap_k: u128;
}

export type PHANTOM_SWAP = 'swap';
