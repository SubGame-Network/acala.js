import { RegistryTypes } from '@polkadot/types/types/registry';
import type { DefinitionRpc, DefinitionRpcSub } from '@polkadot/types/types';

const modules: {
  [moduleName: string]: {
    rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>;
    types: RegistryTypes;
  };
} = {
  subgameAssets: {
    rpc: {},
    types: {
      SGAssetBalance: 'u64',
      DepositBalance: 'u64',
      SubGameAssetMetadata: {
        deposit: 'DepositBalance',
        name: 'Vec<u8>',
        symbol: 'Vec<u8>',
        decimals: 'u8'
      },
      SubGameAssetDetails: {
        owner: 'AccountId',
        issuer: 'AccountId',
        admin: 'AccountId',
        freezer: 'AccountId',
        supply: 'u64',
        deposit: 'DepositBalance',
        max_zombies: 'u32',
        min_balance: 'u64',
        zombies: 'u32',
        accounts: 'u32',
        isFrozen: 'bool'
      },
      SusGameAssetBalance: {
        balance: 'u64',
        isFrozen: 'bool',
        isZombie: 'bool'
      }
    }
  },
  bridge: {
    rpc: {},
    types: {
      BridgeRecord: {
        from: 'AccountId',
        to: 'AccountId',
        amount: 'u128',
        chain_type: 'u8',
        coin_type: 'u8'
      }
    }
  },
  chips: {
    rpc: {},
    types: {
      ChipBalance: 'u128',
      ChipsDetail: {
        balance: 'ChipBalance',
        reserve: 'ChipBalance'
      }
    }
  },
  gameCenter: {
    rpc: {},
    types: {
      GameInstanceId: 'u32',
      GameInstance: {
        game_instance_id: 'u32',
        owner: 'AccountId',
        bet_block_number: 'u32',
        chips_pool: 'u128',
        game_over: 'bool'
      }
    }
  },
  gameGuessHashModule: {
    rpc: {},
    types: {
      GameIndex: 'u32',
      GameMode: 'u8',
      BetInfo: {
        user: 'AccountId',
        game_id: 'u32',
        amount: 'u128',
        game_mode: 'u8'
      },
      GameInfo: {
        owner: 'AccountId',
        block_number: 'u32',
        bet_block_number: 'u32',
        amount: 'u128'
      }
    }
  },
  gameTemplates: {
    rpc: {},
    types: {
      TemplateName: 'u32',
      Template: {
        template_id: 'u32',
        template_name: 'TemplateName'
      }
    }
  },
  stake: {
    rpc: {},
    types: {
      UserInfo: {
        Account: 'Vec<u8>',
        ReferrerAccount: 'Vec<u8>'
      }
    }
  },
  swap: {
    rpc: {},
    types: {
      SwapId: 'u32',
      SwapPoolDetails: {
        swap_id: 'u32',
        account: 'AccountId',
        asset_a: 'u32',
        asset_b: 'u32',
        asset_lp: 'u32',
        k: 'u64'
      }
    }
  }
};

export default modules;
