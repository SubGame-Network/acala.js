export default {
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
};
