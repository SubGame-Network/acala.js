// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Compact, u128, u32, u8 } from '@polkadot/types';
import type { AnyNumber } from '@polkadot/types/types';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { AccountId, AssetId, BalanceOf, Call, LookupSource } from '@polkadot/types/interfaces/runtime';
import type { ChipBalance } from '@subgame/types/interfaces/chips';
import type { GameIndex, GameMode } from '@subgame/types/interfaces/gameGuessHashModule';
import type { SGAssetBalance } from '@subgame/types/interfaces/subgameAssets';
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
    subgameAssets: {
      /**
       * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
       * 
       * Origin must be Signed and the sender should be the Manager of the asset `id`.
       * 
       * Bails with `BalanceZero` if the `who` is already dead.
       * 
       * - `id`: The identifier of the asset to have some amount burned.
       * - `who`: The account to be debited from.
       * - `amount`: The maximum amount by which `who`'s balance should be reduced.
       * 
       * Emits `Burned` with the actual amount burned. If this takes the balance to below the
       * minimum for the asset, then the amount burned is increased to take it to zero.
       * 
       * Weight: `O(1)`
       * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
       **/
      burn: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<SGAssetBalance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, LookupSource, Compact<SGAssetBalance>]>;
      /**
       * Issue a new class of fungible assets from a public origin.
       * 
       * This new asset class has no assets initially.
       * 
       * The origin must be Signed and the sender must have sufficient funds free.
       * 
       * Funds of sender are reserved according to the formula:
       * `AssetDepositBase + AssetDepositPerZombie * max_zombies`.
       * 
       * Parameters:
       * - `id`: The identifier of the new asset. This must not be currently in use to identify
       * an existing asset.
       * - `owner`: The owner of this class of assets. The owner has full superuser permissions
       * over this asset, but may later change and configure the permissions using `transfer_ownership`
       * and `set_team`.
       * - `max_zombies`: The total number of accounts which may hold assets in this class yet
       * have no existential deposit.
       * - `min_balance`: The minimum balance of this new asset that any single account must
       * have. If an account's balance is reduced below this, then it collapses to zero.
       * 
       * Emits `Created` event when successful.
       * 
       * Weight: `O(1)`
       **/
      create: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, admin: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, maxZombies: u32 | AnyNumber | Uint8Array, minBalance: SGAssetBalance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, LookupSource, u32, SGAssetBalance]>;
      /**
       * Destroy a class of fungible assets owned by the sender.
       * 
       * The origin must be Signed and the sender must be the owner of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * Emits `Destroyed` event when successful.
       * 
       * Weight: `O(z)` where `z` is the number of zombie accounts.
       **/
      destroy: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, zombiesWitness: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, Compact<u32>]>;
      /**
       * Issue a new class of fungible assets from a privileged origin.
       * 
       * This new asset class has no assets initially.
       * 
       * The origin must conform to `ForceOrigin`.
       * 
       * Unlike `create`, no funds are reserved.
       * 
       * - `id`: The identifier of the new asset. This must not be currently in use to identify
       * an existing asset.
       * - `owner`: The owner of this class of assets. The owner has full superuser permissions
       * over this asset, but may later change and configure the permissions using `transfer_ownership`
       * and `set_team`.
       * - `max_zombies`: The total number of accounts which may hold assets in this class yet
       * have no existential deposit.
       * - `min_balance`: The minimum balance of this new asset that any single account must
       * have. If an account's balance is reduced below this, then it collapses to zero.
       * 
       * Emits `ForceCreated` event when successful.
       * 
       * Weight: `O(1)`
       **/
      forceCreate: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, owner: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, maxZombies: Compact<u32> | AnyNumber | Uint8Array, minBalance: Compact<SGAssetBalance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, LookupSource, Compact<u32>, Compact<SGAssetBalance>]>;
      /**
       * Destroy a class of fungible assets.
       * 
       * The origin must conform to `ForceOrigin`.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * Emits `Destroyed` event when successful.
       * 
       * Weight: `O(1)`
       **/
      forceDestroy: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, zombiesWitness: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, Compact<u32>]>;
      /**
       * Move some assets from one account to another.
       * 
       * Origin must be Signed and the sender should be the Admin of the asset `id`.
       * 
       * - `id`: The identifier of the asset to have some amount transferred.
       * - `source`: The account to be debited.
       * - `dest`: The account to be credited.
       * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
       * `dest`'s balance increased. The amount actually transferred may be slightly greater in
       * the case that the transfer would otherwise take the `source` balance above zero but
       * below the minimum balance. Must be greater than zero.
       * 
       * Emits `Transferred` with the actual amount transferred. If this takes the source balance
       * to below the minimum for the asset, then the amount transferred is increased to take it
       * to zero.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existence of `dest`; Post-existence of `source`; Prior & post zombie-status
       * of `source`; Account pre-existence of `dest`.
       **/
      forceTransfer: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, source: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<SGAssetBalance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, LookupSource, LookupSource, Compact<SGAssetBalance>]>;
      /**
       * Disallow further unprivileged transfers from an account.
       * 
       * Origin must be Signed and the sender should be the Freezer of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `who`: The account to be frozen.
       * 
       * Emits `Frozen`.
       * 
       * Weight: `O(1)`
       **/
      freeze: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, LookupSource]>;
      /**
       * Disallow further unprivileged transfers for the asset class.
       * 
       * Origin must be Signed and the sender should be the Freezer of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * 
       * Emits `Frozen`.
       * 
       * Weight: `O(1)`
       **/
      freezeAsset: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>]>;
      /**
       * Mint assets of a particular class.
       * 
       * The origin must be Signed and the sender must be the Issuer of the asset `id`.
       * 
       * - `id`: The identifier of the asset to have some amount minted.
       * - `beneficiary`: The account to be credited with the minted assets.
       * - `amount`: The amount of the asset to be minted.
       * 
       * Emits `Destroyed` event when successful.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
       **/
      mint: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, beneficiary: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<SGAssetBalance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, LookupSource, Compact<SGAssetBalance>]>;
      /**
       * Set the maximum number of zombie accounts for an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * Funds of sender are reserved according to the formula:
       * `AssetDepositBase + AssetDepositPerZombie * max_zombies` taking into account
       * any already reserved funds.
       * 
       * - `id`: The identifier of the asset to update zombie count.
       * - `max_zombies`: The new number of zombies allowed for this asset.
       * 
       * Emits `MaxZombiesChanged`.
       * 
       * Weight: `O(1)`
       **/
      setMaxZombies: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, maxZombies: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, Compact<u32>]>;
      /**
       * Set the metadata for an asset.
       * 
       * NOTE: There is no `unset_metadata` call. Simply pass an empty name, symbol,
       * and 0 decimals to this function to remove the metadata of an asset and
       * return your deposit.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * Funds of sender are reserved according to the formula:
       * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
       * account any already reserved funds.
       * 
       * - `id`: The identifier of the asset to update.
       * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
       * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
       * - `decimals`: The number of decimals this asset uses to represent one unit.
       * 
       * Emits `MaxZombiesChanged`.
       * 
       * Weight: `O(1)`
       **/
      setMetadata: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, name: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array, decimals: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, Bytes, Bytes, u8]>;
      /**
       * Change the Issuer, Admin and Freezer of an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `issuer`: The new Issuer of this asset.
       * - `admin`: The new Admin of this asset.
       * - `freezer`: The new Freezer of this asset.
       * 
       * Emits `TeamChanged`.
       * 
       * Weight: `O(1)`
       **/
      setTeam: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, issuer: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, LookupSource, LookupSource, LookupSource]>;
      /**
       * Allow unprivileged transfers from an account again.
       * 
       * Origin must be Signed and the sender should be the Admin of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `who`: The account to be unfrozen.
       * 
       * Emits `Thawed`.
       * 
       * Weight: `O(1)`
       **/
      thaw: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, LookupSource]>;
      /**
       * Allow unprivileged transfers for the asset again.
       * 
       * Origin must be Signed and the sender should be the Admin of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * 
       * Emits `Thawed`.
       * 
       * Weight: `O(1)`
       **/
      thawAsset: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>]>;
      /**
       * Move some assets from the sender account to another.
       * 
       * Origin must be Signed.
       * 
       * - `id`: The identifier of the asset to have some amount transferred.
       * - `target`: The account to be credited.
       * - `amount`: The amount by which the sender's balance of assets should be reduced and
       * `target`'s balance increased. The amount actually transferred may be slightly greater in
       * the case that the transfer would otherwise take the sender balance above zero but below
       * the minimum balance. Must be greater than zero.
       * 
       * Emits `Transferred` with the actual amount transferred. If this takes the source balance
       * to below the minimum for the asset, then the amount transferred is increased to take it
       * to zero.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existence of `target`; Post-existence of sender; Prior & post zombie-status
       * of sender; Account pre-existence of `target`.
       **/
      transfer: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, target: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<SGAssetBalance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, LookupSource, Compact<SGAssetBalance>]>;
      /**
       * Change the Owner of an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `owner`: The new Owner of this asset.
       * 
       * Emits `OwnerChanged`.
       * 
       * Weight: `O(1)`
       **/
      transferOwnership: AugmentedSubmittable<(id: Compact<AssetId> | AnyNumber | Uint8Array, owner: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<AssetId>, LookupSource]>;
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
