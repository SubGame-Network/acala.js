// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u128 } from '@polkadot/types-codec';

/** @name ChipBalance */
export interface ChipBalance extends u128 {}

/** @name ChipsDetail */
export interface ChipsDetail extends Struct {
  readonly balance: ChipBalance;
  readonly reserve: ChipBalance;
}

export type PHANTOM_CHIPS = 'chips';
