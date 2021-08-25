export default {
  rpc: {},
  types: {
    GameIndex: 'u32',
    GameMode: 'u8',
    BetInfo: { user: 'AccountId', game_id: 'u32', amount: 'u128', game_mode: 'u8' },
    GameInfo: { owner: 'AccountId', block_number: 'u32', bet_block_number: 'u32', amount: 'u128' }
  }
};
