// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, bool, u32, u64, u8 } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name DepositBalance */
export interface DepositBalance extends u64 {}

/** @name SGAssetBalance */
export interface SGAssetBalance extends u64 {}

/** @name SubGameAssetDetails */
export interface SubGameAssetDetails extends Struct {
  readonly owner: AccountId;
  readonly issuer: AccountId;
  readonly admin: AccountId;
  readonly freezer: AccountId;
  readonly supply: u64;
  readonly deposit: DepositBalance;
  readonly max_zombies: u32;
  readonly min_balance: u64;
  readonly zombies: u32;
  readonly accounts: u32;
  readonly isFrozen: bool;
}

/** @name SubGameAssetMetadata */
export interface SubGameAssetMetadata extends Struct {
  readonly deposit: DepositBalance;
  readonly name: Bytes;
  readonly symbol: Bytes;
  readonly decimals: u8;
}

/** @name SusGameAssetBalance */
export interface SusGameAssetBalance extends Struct {
  readonly balance: u64;
  readonly isFrozen: bool;
  readonly isZombie: bool;
}

export type PHANTOM_SUBGAMEASSETS = 'subgameAssets';
