// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u32 } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name Swap */
export interface Swap extends Struct {
  readonly token_id: TokenId;
  readonly swap_token: TokenId;
  readonly account: AccountId;
}

/** @name SwapId */
export interface SwapId extends u32 {}

/** @name TokenBalance */
export interface TokenBalance extends u32 {}

/** @name TokenId */
export interface TokenId extends u32 {}

export type PHANTOM_SWAPS = 'swaps';
