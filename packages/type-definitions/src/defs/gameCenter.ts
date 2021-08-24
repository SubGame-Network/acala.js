export default {
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
};
