// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u32 } from '@polkadot/types';

/** @name Template */
export interface Template extends Struct {
  readonly template_id: u32;
  readonly template_name: TemplateName;
}

/** @name TemplateName */
export interface TemplateName extends u32 {}

export type PHANTOM_GAMETEMPLATES = 'gameTemplates';
