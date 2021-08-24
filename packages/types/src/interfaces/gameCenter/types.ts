// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, bool, u128, u32 } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name GameInstance */
export interface GameInstance extends Struct {
  readonly game_instance_id: u32;
  readonly owner: AccountId;
  readonly bet_block_number: u32;
  readonly chips_pool: u128;
  readonly game_over: bool;
}

/** @name GameInstanceId */
export interface GameInstanceId extends u32 {}

export type PHANTOM_GAMECENTER = 'gameCenter';
