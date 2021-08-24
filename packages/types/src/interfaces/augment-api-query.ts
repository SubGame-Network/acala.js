// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, Vec, u32 } from '@polkadot/types';
import type { AnyNumber, Observable } from '@polkadot/types/types';
import type { AccountId, BalanceOf, BlockNumber } from '@polkadot/types/interfaces/runtime';
import type { BridgeRecord } from '@subgame-network/types/interfaces/bridge';
import type { ChipsDetail } from '@subgame-network/types/interfaces/chips';
import type { GameInstance, GameInstanceId } from '@subgame-network/types/interfaces/gameCenter';
import type { BetInfo, GameIndex, GameInfo } from '@subgame-network/types/interfaces/gameGuessHashModule';
import type { Template } from '@subgame-network/types/interfaces/gameTemplates';
import type { UserInfo } from '@subgame-network/types/interfaces/stake';
import type { Swap, SwapId, TokenId } from '@subgame-network/types/interfaces/swaps';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    bridge: {
      bridgeMinLimit: AugmentedQuery<ApiType, () => Observable<Option<BalanceOf>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * from other chain to subgame chain
       **/
      inRecord: AugmentedQuery<ApiType, () => Observable<Vec<BridgeRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * subgame chain to other chain
       **/
      outRecord: AugmentedQuery<ApiType, () => Observable<Vec<BridgeRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    chips: {
      /**
       * Record the chips information of each user
       **/
      chipsMap: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ChipsDetail>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gameCenter: {
      /**
       * List of games that can still participate in betting
       **/
      currentGameinstances: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<GameInstance>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Draw Record
       **/
      drawMap: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<GameInstanceId>>, [BlockNumber]> & QueryableStorageEntry<ApiType, [BlockNumber]>;
      /**
       * List of games that have been drawn
       **/
      historyGameinstances: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<GameInstance>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Play Record
       **/
      playMap: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<u32>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gameGuessHashModule: {
      /**
       * List of betting records
       **/
      betList: AugmentedQuery<ApiType, (arg: GameIndex | AnyNumber | Uint8Array) => Observable<Vec<BetInfo>>, [GameIndex]> & QueryableStorageEntry<ApiType, [GameIndex]>;
      /**
       * Can use block num to check which games are about to be drawn.
       **/
      drawMap: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<GameIndex>>, [BlockNumber]> & QueryableStorageEntry<ApiType, [BlockNumber]>;
      /**
       * The current total number of games
       **/
      gameCount: AugmentedQuery<ApiType, () => Observable<GameIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * List of all games, including not yet drawn and already drawn
       **/
      games: AugmentedQuery<ApiType, (arg: GameIndex | AnyNumber | Uint8Array) => Observable<GameInfo>, [GameIndex]> & QueryableStorageEntry<ApiType, [GameIndex]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gameTemplates: {
      templateMap: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Template>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      templates: AugmentedQuery<ApiType, () => Observable<Vec<Template>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    stake: {
      accountMap: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<AccountId>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
      stakePool: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []> & QueryableStorageEntry<ApiType, []>;
      userInfoMap: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<UserInfo>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      userStake: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<BalanceOf>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    swaps: {
      swapCount: AugmentedQuery<ApiType, () => Observable<SwapId>, []> & QueryableStorageEntry<ApiType, []>;
      swaps: AugmentedQuery<ApiType, (arg: SwapId | AnyNumber | Uint8Array) => Observable<Option<Swap>>, [SwapId]> & QueryableStorageEntry<ApiType, [SwapId]>;
      tokenToSwap: AugmentedQuery<ApiType, (arg: TokenId | AnyNumber | Uint8Array) => Observable<SwapId>, [TokenId]> & QueryableStorageEntry<ApiType, [TokenId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
    [key: string]: QueryableModuleStorage<ApiType>;
  }
}
