// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct, u128, u8 } from '@polkadot/types-codec';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';
import type { NftId } from '@subgame/types/interfaces/subgameStakeNft';

/** @name Auction */
export interface Auction extends Struct {
  readonly id: u128;
  readonly platform_id: u128;
  readonly nft_id: NftId;
  readonly seller: AccountId;
  readonly buyer: Option<AccountId>;
  readonly amount: Balance;
  readonly percentage_of_fee: u8;
  readonly platform_fee: Balance;
}

/** @name Platform */
export interface Platform extends Struct {
  readonly id: u128;
  readonly admin: AccountId;
  readonly percentage_of_fee: u8;
  readonly fee_account: AccountId;
}

export type PHANTOM_NFTEXCHANGE = 'nftExchange';
