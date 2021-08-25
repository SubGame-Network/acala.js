// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, u32, u8 } from '@polkadot/types';
import type { BlockHash } from '@polkadot/types/interfaces/chain';
import type { AccountId, AssetId, Balance, BalanceOf, BlockNumber } from '@polkadot/types/interfaces/runtime';
import type { ChipBalance } from '@subgame/types/interfaces/chips';
import type { GameIndex, GameMode } from '@subgame/types/interfaces/gameGuessHashModule';
import type { SGAssetBalance } from '@subgame/types/interfaces/subgameAssets';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    bridge: {
      /**
       * Bridge from subgame
       **/
      ReceiveBridge: AugmentedEvent<ApiType, [AccountId, Bytes, u8, u8, BalanceOf]>;
      /**
       * Bridge to subgame
       **/
      Send: AugmentedEvent<ApiType, [AccountId, BalanceOf, Bytes]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    chips: {
      /**
       * Buy chips event
       **/
      BuyChips: AugmentedEvent<ApiType, [AccountId, ChipBalance]>;
      /**
       * Redemption amount with chips event
       **/
      Redemption: AugmentedEvent<ApiType, [AccountId, ChipBalance]>;
      /**
       * Transfer the chips in the pledge to others
       **/
      RepatriateReserved: AugmentedEvent<ApiType, [AccountId, AccountId, ChipBalance]>;
      /**
       * Pledge chips
       **/
      Reserve: AugmentedEvent<ApiType, [AccountId, ChipBalance]>;
      /**
       * Cancel pledge chips
       **/
      Unreserve: AugmentedEvent<ApiType, [AccountId, ChipBalance]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    gameCenter: {
      Bet: AugmentedEvent<ApiType, [AccountId, u32]>;
      CreateGame: AugmentedEvent<ApiType, [AccountId, BlockNumber]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    gameGuessHashModule: {
      /**
       * Place a bet (player, game ID, bet amount, 1: odd or 2: even, bet id)
       **/
      Bet: AugmentedEvent<ApiType, [AccountId, GameIndex, ChipBalance, GameMode, u32]>;
      /**
       * The player settles the winning amount (player, game ID, winning amount, betting ID, game result (1: odd or 2: even), drawn Block Hash)
       **/
      BettorResult: AugmentedEvent<ApiType, [AccountId, GameIndex, ChipBalance, u32, GameMode, BlockHash]>;
      /**
       * Opening (banker, GameIndex, prize pool amount, betting block)
       **/
      CreateGame: AugmentedEvent<ApiType, [AccountId, GameIndex, ChipBalance, BlockNumber]>;
      /**
       * Game over (the dealer, the game ID, the total amount received by the dealer, the result of the game (1: odd or 2: even), drawn Block Hash)
       **/
      GameOver: AugmentedEvent<ApiType, [AccountId, GameIndex, ChipBalance, GameMode, BlockHash]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    gameTemplates: {
      CreateTemplate: AugmentedEvent<ApiType, [AccountId, u32, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    stake: {
      DeleteUser: AugmentedEvent<ApiType, [AccountId, Bytes]>;
      SignUp: AugmentedEvent<ApiType, [AccountId, Bytes, Bytes]>;
      Stake: AugmentedEvent<ApiType, [AccountId, Balance]>;
      Unlock: AugmentedEvent<ApiType, [AccountId, Balance]>;
      Withdraw: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    subgameAssets: {
      /**
       * Some asset `asset_id` was frozen. \[asset_id\]
       **/
      AssetFrozen: AugmentedEvent<ApiType, [AssetId]>;
      /**
       * Some asset `asset_id` was thawed. \[asset_id\]
       **/
      AssetThawed: AugmentedEvent<ApiType, [AssetId]>;
      /**
       * Some assets were destroyed. \[asset_id, owner, balance\]
       **/
      Burned: AugmentedEvent<ApiType, [AssetId, AccountId, SGAssetBalance]>;
      /**
       * Some asset class was created. \[asset_id, creator, owner\]
       **/
      Created: AugmentedEvent<ApiType, [AssetId, AccountId, AccountId]>;
      /**
       * An asset class was destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [AssetId]>;
      /**
       * Some asset class was force-created. \[asset_id, owner\]
       **/
      ForceCreated: AugmentedEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Some assets was transferred by an admin. \[asset_id, from, to, amount\]
       **/
      ForceTransferred: AugmentedEvent<ApiType, [AssetId, AccountId, AccountId, SGAssetBalance]>;
      /**
       * Some account `who` was frozen. \[asset_id, who\]
       **/
      Frozen: AugmentedEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Some assets were issued. \[asset_id, owner, total_supply\]
       **/
      Issued: AugmentedEvent<ApiType, [AssetId, AccountId, SGAssetBalance]>;
      /**
       * The maximum amount of zombies allowed has changed. \[asset_id, max_zombies\]
       **/
      MaxZombiesChanged: AugmentedEvent<ApiType, [AssetId, u32]>;
      /**
       * New metadata has been set for an asset. \[asset_id, name, symbol, decimals\]
       **/
      MetadataSet: AugmentedEvent<ApiType, [AssetId, Bytes, Bytes, u8]>;
      /**
       * The owner changed \[asset_id, owner\]
       **/
      OwnerChanged: AugmentedEvent<ApiType, [AssetId, AccountId]>;
      /**
       * The management team changed \[asset_id, issuer, admin, freezer\]
       **/
      TeamChanged: AugmentedEvent<ApiType, [AssetId, AccountId, AccountId, AccountId]>;
      /**
       * Some account `who` was thawed. \[asset_id, who\]
       **/
      Thawed: AugmentedEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Some assets were transferred. \[asset_id, from, to, amount\]
       **/
      Transferred: AugmentedEvent<ApiType, [AssetId, AccountId, AccountId, SGAssetBalance]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: ModuleEvents<ApiType>;
  }
}
