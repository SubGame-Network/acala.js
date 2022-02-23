import { ApiPromise, WsProvider } from '@polkadot/api';
import { options } from '@subgame/api';

import '@polkadot/api-augment/polkadot/index';

const connect = async () => {
  const provider = new WsProvider('wss://staging.subgame.org');
  const api = new ApiPromise(options({ provider }));

  await api.isReady;
  console.log('api isReady.');
  api.on('connected', () => {
    console.log('api connected.');
  });
  api.on('disconnected', () => {
    console.log('api disconnected.');
  });
  api.on('error', () => {
    console.log('connection error.');
  });
  api.on('ready', () => {
    console.log('connection is ready.');
  });
  return api;
};

async function main() {
  const api = await connect();

  try {
    console.log('query subgameAssets pallet storage.');
    const result = await api.query.subgameAssets.metadata(7);
    console.log(result.toHuman());
  } catch (error) {
    console.error(error);
  }

  try {
    console.log('query swap pallet storage.');
    const result = await api.query.swap.swapPool(1);
    console.log(result.toHuman());
  } catch (error) {
    console.error(error);
  }
}

main().then(() => {
  process.exit(0);
});
