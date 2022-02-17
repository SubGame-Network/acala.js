/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { OverrideVersionedType } from '@polkadot/types/types';
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';

import { signedExtensions as subgameSignedExtensions } from './signedExtensions';

import * as subgameDefs from './defs';

import subgameVersioned from './spec/subgame';

const additionalOverride = {
  Keys: 'SessionKeys1'
};

const types = typesFromDefs(subgameDefs);

const rpc = jsonrpcFromDefs(subgameDefs);
const typesAlias = typesAliasFromDefs(subgameDefs);

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

const typesBundle = {
  spec: {
    subgame: getBundle(subgameVersioned)
  }
};

const typesBundleForPolkadot = {
  spec: {
    subgame: getBundle(subgameVersioned)
  }
};

const signedExtensions = subgameSignedExtensions;

export { additionalOverride, types, rpc, typesAlias, typesBundleForPolkadot, typesBundle, signedExtensions };
