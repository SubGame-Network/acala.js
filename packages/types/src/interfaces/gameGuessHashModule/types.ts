// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u128, u32, u8 } from '@polkadot/types-codec';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name BetInfo */
export interface BetInfo extends Struct {
  readonly user: AccountId;
  readonly game_id: u32;
  readonly amount: u128;
  readonly game_mode: u8;
}

/** @name GameIndex */
export interface GameIndex extends u32 {}

/** @name GameInfo */
export interface GameInfo extends Struct {
  readonly owner: AccountId;
  readonly block_number: u32;
  readonly bet_block_number: u32;
  readonly amount: u128;
}

/** @name GameMode */
export interface GameMode extends u8 {}

export type PHANTOM_GAMEGUESSHASHMODULE = 'gameGuessHashModule';
