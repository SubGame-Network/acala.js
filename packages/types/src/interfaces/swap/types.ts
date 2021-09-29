// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u128, u32, u64 } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name SwapAmountLP */
export interface SwapAmountLP extends u64 {}

/** @name SwapAmountX */
export interface SwapAmountX extends u64 {}

/** @name SwapAmountY */
export interface SwapAmountY extends u64 {}

/** @name SwapAssetX */
export interface SwapAssetX extends u32 {}

/** @name SwapAssetY */
export interface SwapAssetY extends u32 {}

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

/** @name SwapPoolOwner */
export interface SwapPoolOwner extends AccountId {}

/** @name SwapSender */
export interface SwapSender extends AccountId {}

export type PHANTOM_SWAP = 'swap';
