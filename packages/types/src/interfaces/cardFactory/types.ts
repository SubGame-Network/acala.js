// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u128, u32, u8 } from '@polkadot/types-codec';
import type { NftId } from '@subgame/types/interfaces/subgameStakeNft';

/** @name Card */
export interface Card extends Struct {
  readonly id: u128;
  readonly card_info_id: u128;
  readonly level: u8;
  readonly ability_value_1: u32;
  readonly nft_id: NftId;
}

export type PHANTOM_CARDFACTORY = 'cardFactory';
