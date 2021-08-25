/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import * as fs from 'fs';
import { Metadata } from '@polkadot/metadata';
import { TypeRegistry } from '@polkadot/types/create';
import { generateInterfaceTypes } from '@polkadot/typegen/generate/interfaceRegistry';
import { generateTsDef } from '@polkadot/typegen/generate/tsDef';
import {
  generateDefaultConsts,
  generateDefaultErrors,
  generateDefaultEvents,
  generateDefaultQuery,
  generateDefaultRpc,
  generateDefaultTx
} from '@polkadot/typegen/generate';
import { registerDefinitions } from '@polkadot/typegen/util';

import metaHex from '../src/metadata/static-latest';

import * as defaultDefinations from '@polkadot/types/interfaces/definitions';

import * as ormlDefinations from '@open-web3/orml-types/interfaces/definitions';

import * as subgameDefinations from '../src/interfaces/definitions';
import modules from '../../../script/modules';

const modulesNames = Object.keys(modules).map((key) => {
  const keyChars = key.split('');
  keyChars[0] = keyChars[0].toLocaleUpperCase();
  return keyChars.join('');
});

// Only keep our own modules to avoid confllicts with the one provided by polkadot.js
// TODO: make an issue on polkadot.js
function filterModules(names: string[], defs: any): string {
  const registry = new TypeRegistry();
  registerDefinitions(registry, defs);
  const metadata = new Metadata(registry, metaHex);

  // hack https://github.com/polkadot-js/api/issues/2687#issuecomment-705342442
  metadata.asLatest.toJSON();

  const filtered = metadata.toJSON() as any;

  filtered.metadata.v12.modules = filtered.metadata.v12.modules.filter(({ name }: any) => names.includes(name));

  return new Metadata(registry, filtered).toHex();
}

const definations = {
  '@polkadot/types/interfaces': defaultDefinations,
  '@subgame/types/interfaces': subgameDefinations
} as any;

const metadata = filterModules(modulesNames, definations);

generateTsDef(definations, 'packages/types/src/interfaces', '@subgame/types/interfaces');
generateInterfaceTypes(definations, 'packages/types/src/interfaces/augment-types.ts');
generateDefaultConsts('packages/types/src/interfaces/augment-api-consts.ts', metadata, definations);

generateDefaultTx('packages/types/src/interfaces/augment-api-tx.ts', metadata, definations);
generateDefaultQuery('packages/types/src/interfaces/augment-api-query.ts', metadata, definations);
generateDefaultRpc('packages/types/src/interfaces/augment-api-rpc.ts', definations);
generateDefaultEvents('packages/types/src/interfaces/augment-api-events.ts', metadata, definations);
generateDefaultErrors('packages/types/src/interfaces/augment-api-errors.ts', metadata, definations);

fs.writeFileSync(
  'packages/types/src/interfaces/augment-api.ts',
  `// Auto-generated , do not edit
/* eslint-disable */

import '@polkadot/api/augment/rpc';
import './augment-api-consts';
import './augment-api-query';
import './augment-api-rpc';
import './augment-api-tx';
`
);
