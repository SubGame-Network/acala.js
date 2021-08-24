// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, u128, u32, u8 } from '@polkadot/types';
import type { AnyNumber } from '@polkadot/types/types';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { AccountId, BalanceOf, BlockNumber, Call } from '@polkadot/types/interfaces/runtime';
import type { ChipBalance } from '@subgame-network/types/interfaces/chips';
import type { GameIndex, GameMode } from '@subgame-network/types/interfaces/gameGuessHashModule';
import type { SwapId, TokenBalance, TokenId } from '@subgame-network/types/interfaces/swaps';
import type { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    bridge: {
      /**
       * outchain to subgame (sgb)
       **/
      receiveBridge: AugmentedSubmittable<(toAddress: Bytes | string | Uint8Array, amount: BalanceOf | AnyNumber | Uint8Array, chainType: u8 | AnyNumber | Uint8Array, coinType: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, BalanceOf, u8, u8]>;
      /**
       * outchain to subgame (sgb)
       **/
      send: AugmentedSubmittable<(toAddress: AccountId | string | Uint8Array, amount: BalanceOf | AnyNumber | Uint8Array, coinType: u8 | AnyNumber | Uint8Array, hash: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BalanceOf, u8, Bytes]>;
      /**
       * outchain to subgame (sgb)
       **/
      updateMinLimit: AugmentedSubmittable<(amount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BalanceOf]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    chips: {
      /**
       * You can use your SGP to buy chips
       **/
      buyChips: AugmentedSubmittable<(amount: ChipBalance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ChipBalance]>;
      /**
       * You can use your chips to redemption SGP
       **/
      redemption: AugmentedSubmittable<(amount: ChipBalance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ChipBalance]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    gameCenter: {
      createGame: AugmentedSubmittable<(templateId: u32 | AnyNumber | Uint8Array, betNextFewBlock: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * play template game
       **/
      playGame: AugmentedSubmittable<(gameId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, gameMode: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u8]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    gameGuessHashModule: {
      /**
       * bet guess hash game
       **/
      bet: AugmentedSubmittable<(gameId: GameIndex | AnyNumber | Uint8Array, value: ChipBalance | AnyNumber | Uint8Array, gameMode: GameMode | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [GameIndex, ChipBalance, GameMode]>;
      /**
       * create guess hash game
       **/
      createGame: AugmentedSubmittable<(betNextFewBlock: u32 | AnyNumber | Uint8Array, amount: ChipBalance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, ChipBalance]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    gameTemplates: {
      /**
       * create new template
       **/
      createTemplate: AugmentedSubmittable<(newTemplateName: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    stake: {
      deleteUser: AugmentedSubmittable<(who: AccountId | string | Uint8Array, account: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Bytes]>;
      importStake: AugmentedSubmittable<(who: AccountId | string | Uint8Array, amount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BalanceOf]>;
      signUp: AugmentedSubmittable<(account: Bytes | string | Uint8Array, referrerAccount: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      stake: AugmentedSubmittable<(amount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BalanceOf]>;
      unlock: AugmentedSubmittable<(who: AccountId | string | Uint8Array, amount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BalanceOf]>;
      withdraw: AugmentedSubmittable<(who: AccountId | string | Uint8Array, amount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BalanceOf]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    swaps: {
      addLiquidity: AugmentedSubmittable<(swapId: SwapId | AnyNumber | Uint8Array, currencyAmount: BalanceOf | AnyNumber | Uint8Array, minLiquidity: TokenBalance | AnyNumber | Uint8Array, maxTokens: TokenBalance | AnyNumber | Uint8Array, deadline: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SwapId, BalanceOf, TokenBalance, TokenBalance, BlockNumber]>;
      createSwap: AugmentedSubmittable<(tokenId: TokenId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [TokenId]>;
      /**
       * Converts currency to tokens.
       * 
       * User specifies the exact amount of currency to spend and the minimum
       * tokens to be returned.
       **/
      currencyToTokensInput: AugmentedSubmittable<(swapId: SwapId | AnyNumber | Uint8Array, currency: BalanceOf | AnyNumber | Uint8Array, minTokens: TokenBalance | AnyNumber | Uint8Array, deadline: BlockNumber | AnyNumber | Uint8Array, recipient: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SwapId, BalanceOf, TokenBalance, BlockNumber, AccountId]>;
      /**
       * Converts currency to tokens.
       * 
       * User specifies the maximum currency to spend and the exact amount of
       * tokens to be returned.
       **/
      currencyToTokensOutput: AugmentedSubmittable<(swapId: SwapId | AnyNumber | Uint8Array, tokensBought: TokenBalance | AnyNumber | Uint8Array, maxCurrency: BalanceOf | AnyNumber | Uint8Array, deadline: BlockNumber | AnyNumber | Uint8Array, recipient: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SwapId, TokenBalance, BalanceOf, BlockNumber, AccountId]>;
      removeLiquidity: AugmentedSubmittable<(swapId: SwapId | AnyNumber | Uint8Array, sharesToBurn: TokenBalance | AnyNumber | Uint8Array, minCurrency: BalanceOf | AnyNumber | Uint8Array, minTokens: TokenBalance | AnyNumber | Uint8Array, deadline: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SwapId, TokenBalance, BalanceOf, TokenBalance, BlockNumber]>;
      /**
       * Converts tokens to currency.
       * 
       * The user specifies exact amount of tokens sold and minimum amount of
       * currency that is returned.
       **/
      tokensToCurrencyInput: AugmentedSubmittable<(swapId: SwapId | AnyNumber | Uint8Array, tokensSold: TokenBalance | AnyNumber | Uint8Array, minCurrency: BalanceOf | AnyNumber | Uint8Array, deadline: BlockNumber | AnyNumber | Uint8Array, recipient: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SwapId, TokenBalance, BalanceOf, BlockNumber, AccountId]>;
      /**
       * Converts tokens to currency.
       * 
       * The user specifies the maximum tokens to swap and the exact
       * currency to be returned.
       **/
      tokensToCurrencyOutput: AugmentedSubmittable<(swapId: SwapId | AnyNumber | Uint8Array, currencyBought: BalanceOf | AnyNumber | Uint8Array, maxTokens: TokenBalance | AnyNumber | Uint8Array, deadline: BlockNumber | AnyNumber | Uint8Array, recipient: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SwapId, BalanceOf, TokenBalance, BlockNumber, AccountId]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
    (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
    [key: string]: SubmittableModuleExtrinsics<ApiType>;
  }
}
