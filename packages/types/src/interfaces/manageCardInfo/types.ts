// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, Vec, bool, u128, u32, u8 } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name AbilityOfLevel */
export interface AbilityOfLevel extends Struct {
  readonly level: u8;
  readonly ability_value_1_min: u32;
  readonly ability_value_1_max: u32;
}

/** @name CardInfo */
export interface CardInfo extends Struct {
  readonly id: u128;
  readonly name: Bytes;
  readonly desc: Bytes;
  readonly type_id: u128;
}

/** @name CardType */
export interface CardType extends Struct {
  readonly admin: AccountId;
  readonly id: u128;
  readonly name: Bytes;
  readonly desc: Bytes;
  readonly fixed_ability_value_1: u32;
  readonly fixed_ability_value_2: u32;
  readonly special_attribute_1: Bytes;
  readonly level_max_limit: u32;
  readonly ability_of_level: Vec<AbilityOfLevel>;
  readonly is_can_draw: bool;
}

export type PHANTOM_MANAGECARDINFO = 'manageCardInfo';
