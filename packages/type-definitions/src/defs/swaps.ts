export default {
  rpc: {},
  types: {
    TokenBalance: 'u32',
    SwapId: 'u32',
    TokenId: 'u32',
    Swap: {
      token_id: 'TokenId',
      swap_token: 'TokenId',
      account: 'AccountId'
    }
  }
};
