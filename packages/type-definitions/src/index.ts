/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { OverrideVersionedType } from '@polkadot/types/types';
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';

import { signedExtensions as subgameSignedExtensions } from './signedExtensions';

import * as subgameDefs from './defs';

import subgameVersioned from './spec/subgame';

const additionalOverride = {
  Keys: 'SessionKeys1'
};

export const types = {
  ...typesFromDefs(subgameDefs),
  ...additionalOverride
};

export const rpc = jsonrpcFromDefs(subgameDefs);
export const typesAlias = typesAliasFromDefs(subgameDefs);

function getBundle(versioned: OverrideVersionedType[]) {
  return {
    rpc,
    instances: {
      council: ['generalCouncil']
    },
    types: [...versioned].map((version) => {
      return {
        minmax: version.minmax,
        types: {
          ...types,
          ...version.types
        }
      };
    }),
    alias: typesAlias
  };
}

export const typesBundle = {
  spec: {
    subgame: getBundle(subgameVersioned)
  }
};

export const typesBundleForPolkadot = {
  spec: {
    subgame: getBundle(subgameVersioned)
  }
};

export const signedExtensions = subgameSignedExtensions;
