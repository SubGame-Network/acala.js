export default {
  rpc: {},
  types: {
    Auction: {
      id: 'u128',
      platform_id: 'u128',
      nft_id: 'NftId',
      seller: 'AccountId',
      buyer: 'Option<AccountId>',
      amount: 'Balance',
      percentage_of_fee: 'u8',
      platform_fee: 'Balance'
    },
    Platform: { id: 'u128', admin: 'AccountId', percentage_of_fee: 'u8', fee_account: 'AccountId' }
  }
};
