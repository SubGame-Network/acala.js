export default {
  rpc: {},
  types: {
    SGAssetBalance: 'u64',
    DepositBalance: 'u64',
    SubGameAssetMetadata: { deposit: 'DepositBalance', name: 'Vec<u8>', symbol: 'Vec<u8>', decimals: 'u8' },
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
    SusGameAssetBalance: { balance: 'u64', isFrozen: 'bool', isZombie: 'bool' }
  }
};
