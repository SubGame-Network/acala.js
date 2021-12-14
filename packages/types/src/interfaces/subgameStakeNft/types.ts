// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, bool, u128, u64 } from '@polkadot/types';
import type { Balance, Hash, Moment } from '@polkadot/types/interfaces/runtime';

/** @name Commodity */
export interface Commodity extends Struct {
  readonly id: CommodityId;
  readonly info: Bytes;
}

/** @name CommodityId */
export interface CommodityId extends Hash {}

/** @name LeaseInfo */
export interface LeaseInfo extends Struct {
  readonly pallet_id: PalletId;
  readonly nft_id: NftId;
}

/** @name NftId */
export interface NftId extends Hash {}

/** @name PalletId */
export interface PalletId extends u64 {}

/** @name PalletInfo */
export interface PalletInfo extends Struct {
  readonly pallet_id: PalletId;
  readonly name: Bytes;
}

/** @name Program */
export interface Program extends Struct {
  readonly program_id: ProgramId;
  readonly stake_amount: u128;
  readonly valid_day_count: u64;
}

/** @name ProgramId */
export interface ProgramId extends u64 {}

/** @name StakeInfo */
export interface StakeInfo extends Struct {
  readonly pallet_id: PalletId;
  readonly program_id: ProgramId;
  readonly stake_amount: Balance;
  readonly will_expire: bool;
  readonly expires_at: Moment;
  readonly nft_id: NftId;
}

export type PHANTOM_SUBGAMESTAKENFT = 'subgameStakeNft';
