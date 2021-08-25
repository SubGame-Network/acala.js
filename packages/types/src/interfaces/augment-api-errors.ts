// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/errors' {
  export interface AugmentedErrors<ApiType> {
    bridge: {
      AssetAmountDenied: AugmentedError<ApiType>;
      BridgeNotEnoughMinLimt: AugmentedError<ApiType>;
      ChainTypeNotFound: AugmentedError<ApiType>;
      CoinTypeNotFound: AugmentedError<ApiType>;
      MoneyNotEnough: AugmentedError<ApiType>;
      NeverBoughtChips: AugmentedError<ApiType>;
      PermissionDenied: AugmentedError<ApiType>;
      StorageOverflow: AugmentedError<ApiType>;
      SwapAmountLessThenLimit: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    chips: {
      ChipsIsNotEnough: AugmentedError<ApiType>;
      MoneyNotEnough: AugmentedError<ApiType>;
      NeverBoughtChips: AugmentedError<ApiType>;
      StorageOverflow: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    gameGuessHashModule: {
      BalanceNotEnough: AugmentedError<ApiType>;
      BetAmountLimitError: AugmentedError<ApiType>;
      GameCountOverflow: AugmentedError<ApiType>;
      GameIsNotExist: AugmentedError<ApiType>;
      GameModeIsNotExist: AugmentedError<ApiType>;
      GameOver: AugmentedError<ApiType>;
      NoneValue: AugmentedError<ApiType>;
      StorageOverflow: AugmentedError<ApiType>;
      TransferError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    gameTemplates: {
      PermissionDenied: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    stake: {
      AccountFormatIsWrong: AugmentedError<ApiType>;
      MoneyNotEnough: AugmentedError<ApiType>;
      PermissionDenied: AugmentedError<ApiType>;
      StakeAmountWrong: AugmentedError<ApiType>;
      UserExists: AugmentedError<ApiType>;
      UserNotExists: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    subgameAssets: {
      /**
       * Transfer amount should be non-zero.
       **/
      AmountZero: AugmentedError<ApiType>;
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      AssetBalanceLow: AugmentedError<ApiType>;
      /**
       * AssetBalance should be non-zero.
       **/
      AssetBalanceZero: AugmentedError<ApiType>;
      /**
       * Invalid metadata given.
       **/
      BadMetadata: AugmentedError<ApiType>;
      /**
       * Some internal state is broken.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * The origin account is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * Minimum balance should be non-zero.
       **/
      MinBalanceZero: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * A mint operation lead to an overflow.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Attempt to destroy an asset class when non-zombie, reference-bearing accounts exist.
       **/
      RefsLeft: AugmentedError<ApiType>;
      /**
       * Too many zombie accounts in use.
       **/
      TooManyZombies: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  }

  export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
    [key: string]: ModuleErrors<ApiType>;
  }
}
