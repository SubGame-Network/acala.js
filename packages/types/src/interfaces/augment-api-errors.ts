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
    cardFactory: {
      AbilityOfLevelNotMatchLimit: AugmentedError<ApiType>;
      NotAdmin: AugmentedError<ApiType>;
      NotCardOwner: AugmentedError<ApiType>;
      NotFoundData: AugmentedError<ApiType>;
      PermissionDenied: AugmentedError<ApiType>;
      UnknownType: AugmentedError<ApiType>;
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
    gameRecharge: {
      BalanceNotEnough: AugmentedError<ApiType>;
      NotAdmin: AugmentedError<ApiType>;
      NotFoundAsset: AugmentedError<ApiType>;
      NotFoundData: AugmentedError<ApiType>;
      PermissionDenied: AugmentedError<ApiType>;
      UnknownPlatform: AugmentedError<ApiType>;
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
    manageCardInfo: {
      AbilityOfLevelNotMatchLimit: AugmentedError<ApiType>;
      NotAdmin: AugmentedError<ApiType>;
      NotFoundData: AugmentedError<ApiType>;
      PermissionDenied: AugmentedError<ApiType>;
      UnknownType: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    nftExchange: {
      AuctionAmountNotAllowed: AugmentedError<ApiType>;
      Invalid: AugmentedError<ApiType>;
      MoneyNotEnough: AugmentedError<ApiType>;
      NftAuctionDone: AugmentedError<ApiType>;
      NftAuctioning: AugmentedError<ApiType>;
      NotAdmin: AugmentedError<ApiType>;
      NotFoundData: AugmentedError<ApiType>;
      NotNftOwner: AugmentedError<ApiType>;
      PercentageOfFeeNotAllowed: AugmentedError<ApiType>;
      PermissionDenied: AugmentedError<ApiType>;
      UnknownType: AugmentedError<ApiType>;
      UnknowPlatform: AugmentedError<ApiType>;
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
       * Too many zombie accounts in use.
       * Attempt to destroy an asset class when non-zombie, reference-bearing accounts exist.
       **/
      RefsLeft: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    subgameStakeNft: {
      AlreadyPallet: AugmentedError<ApiType>;
      AlreadyProgram: AugmentedError<ApiType>;
      AlreadyStake: AugmentedError<ApiType>;
      MoneyNotEnough: AugmentedError<ApiType>;
      NotFoundData: AugmentedError<ApiType>;
      NotFoundNft: AugmentedError<ApiType>;
      NotFoundPallet: AugmentedError<ApiType>;
      NotFoundProgram: AugmentedError<ApiType>;
      PermissionDenied: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    swap: {
      /**
       * Asset not found.
       **/
      AssetNotFound: AugmentedError<ApiType>;
      /**
       * Deadline hit.
       **/
      Deadline: AugmentedError<ApiType>;
      /**
       * Input duplicate asset_id.
       **/
      DuplicateAssetId: AugmentedError<ApiType>;
      /**
       * liquidity k not match error.
       **/
      LiquidityKError: AugmentedError<ApiType>;
      /**
       * No Swap exists at this Id.
       **/
      NoSwapExists: AugmentedError<ApiType>;
      /**
       * Not enough balance.
       **/
      NotEnoughBalance: AugmentedError<ApiType>;
      /**
       * Not enough liquidity to transfer.
       **/
      NotEnoughLiquidity: AugmentedError<ApiType>;
      /**
       * Not enough LP token.
       **/
      NotEnoughLPToken: AugmentedError<ApiType>;
      /**
       * Checked add swap pool count error.
       **/
      PoolCountError: AugmentedError<ApiType>;
      /**
       * Slipage hit.
       **/
      Slipage: AugmentedError<ApiType>;
      /**
       * A Swap already exists.
       **/
      SwapAlreadyExists: AugmentedError<ApiType>;
      /**
       * Too many LP token.
       **/
      TooManyLPToken: AugmentedError<ApiType>;
      /**
       * Zero balance supplied.
       **/
      ZeroBalance: AugmentedError<ApiType>;
      /**
       * expected swap output amount can not be zero.
       **/
      ZeroExpectedAmount: AugmentedError<ApiType>;
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
