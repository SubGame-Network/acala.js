export default {
  rpc: {},
  types: {
    SwapId: 'u32',
    SwapPoolDetails: { swap_id: 'u32', account: 'AccountId', asset_a: 'u32', asset_b: 'u32', asset_lp: 'u32', k: 'u64' }
  }
};
