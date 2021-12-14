export default {
  rpc: {},
  types: {
    CommodityId: 'Hash',
    Commodity: { id: 'CommodityId', info: 'Vec<u8>' },
    ProgramId: 'u64',
    Program: { program_id: 'ProgramId', stake_amount: 'u128', valid_day_count: 'u64' },
    PalletId: 'u64',
    PalletInfo: { pallet_id: 'PalletId', name: 'Vec<u8>' },
    NftId: 'Hash',
    LeaseInfo: { pallet_id: 'PalletId', nft_id: 'NftId' },
    StakeInfo: {
      pallet_id: 'PalletId',
      program_id: 'ProgramId',
      stake_amount: 'Balance',
      will_expire: 'bool',
      expires_at: 'Moment',
      nft_id: 'NftId'
    }
  }
};
