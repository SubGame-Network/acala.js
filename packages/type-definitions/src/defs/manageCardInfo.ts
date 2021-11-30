export default {
  rpc: {},
  types: {
    AbilityOfLevel: { level: 'u8', ability_value_1_min: 'u32', ability_value_1_max: 'u32' },
    CardType: {
      admin: 'AccountId',
      id: 'u128',
      name: 'Vec<u8>',
      desc: 'Vec<u8>',
      fixed_ability_value_1: 'u32',
      fixed_ability_value_2: 'u32',
      special_attribute_1: 'Vec<u8>',
      level_max_limit: 'u32',
      ability_of_level: 'Vec<AbilityOfLevel>',
      is_can_draw: 'bool'
    },
    CardInfo: { id: 'u128', name: 'Vec<u8>', desc: 'Vec<u8>', type_id: 'u128' }
  }
};
