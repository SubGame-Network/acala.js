![license](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache&style=flat-square)

# @subgame-network

This library provides additional typing information for user to access Acala Network by using [polkadot.js](https://github.com/polkadot-js/api).

# Getting Started

- Install dependencies

```bash
yarn add @polkadot/api @subgame-network/api
```

- Create API instance

```ts
import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { options } from '@subgame-network/api';

async function main() {
    const provider = new WsProvider('wss://testnet/ws');
    const api = new ApiPromise(options({ provider }));
    await api.isReady;

    // use api
}

main()
```
# Packages

- [api](./packages/api)
  - Contains necessary options to create a polkadot.js API instance
- [types](./packages/types)
  - Polkadot.js type definations for SubGame Network