// Copyright 2021 @subgame-network/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import {
  rpc as subgameRpc,
  signedExtensions as subgameSignedExtensions,
  types as subgameTypes,
  typesAlias as subgameTypeAlias,
  typesBundle as subgameTypesBundle
} from '@subgame-network/types';
import { ApiOptions } from '@polkadot/api/types';

export const defaultOptions: ApiOptions = {
  types: subgameTypes,
  rpc: subgameRpc
};

export const options = ({
  rpc = {},
  types = {},
  typesBundle = {},
  typesAlias = {},
  signedExtensions,
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  rpc: {
    ...subgameRpc,
    ...rpc
  },
  types: {
    ...subgameTypes,
    ...types
  },
  typesAlias: {
    ...subgameTypeAlias,
    ...typesAlias
  },
  typesBundle: {
    ...typesBundle,
    spec: {
      ...subgameTypesBundle
    }
  },
  signedExtensions: {
    ...subgameSignedExtensions,
    ...signedExtensions
  },
  ...otherOptions
});
