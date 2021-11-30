export default {
  rpc: {},
  types: {
    Plan: { amount: 'u64', score: 'u64' },
    GRPlatform: { id: 'u128', admin: 'AccountId', pool_account: 'AccountId', asset_id: 'u32', plan: 'Vec<Plan>' }
  }
};
