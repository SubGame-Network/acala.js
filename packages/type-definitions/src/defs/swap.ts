export default {
  rpc: {},
  types: {
    SwapId: 'u32',
    SwapSender: 'AccountId',
    SwapPoolOwner: 'AccountId',
    SwapAssetX: 'u32',
    SwapAssetY: 'u32',
    SwapAmountX: 'u64',
    SwapAmountY: 'u64',
    SwapAmountLP: 'u64',
    SwapPoolDetails: {
      swap_id: 'u32',
      account: 'AccountId',
      asset_a: 'u32',
      asset_b: 'u32',
      asset_lp: 'u32',
      swap_k: 'u128'
    }
  }
};
