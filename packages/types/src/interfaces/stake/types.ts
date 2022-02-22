// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct } from '@polkadot/types-codec';

/** @name UserInfo */
export interface UserInfo extends Struct {
  readonly Account: Bytes;
  readonly ReferrerAccount: Bytes;
}

export type PHANTOM_STAKE = 'stake';
