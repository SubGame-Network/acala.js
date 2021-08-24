import {
  typesBundle as subgameTypesBundle,
  types as subgameTypes,
  typesAlias as subgameTypeAlias,
  rpc as subgameRpc,
  signedExtensions as subgameSignedExtensions
} from '@subgame-network/type-definitions';
import {
  OverrideBundleType,
  OverrideModuleType,
  RegistryTypes,
  DefinitionRpc,
  DefinitionRpcSub
} from '@polkadot/types/types';

import './interfaces/augment-api';
import './interfaces/augment-api-consts';
import './interfaces/augment-api-query';
import './interfaces/augment-api-rpc';
import './interfaces/augment-api-tx';
import './interfaces/augment-types';

export * from './interfaces/augment-api-events';

export const types: RegistryTypes = subgameTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = subgameRpc;

export const typesAlias: Record<string, OverrideModuleType> = subgameTypeAlias;

export const typesBundle = subgameTypesBundle as unknown as OverrideBundleType;

export const signedExtensions = subgameSignedExtensions;
