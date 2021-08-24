![license](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache&style=flat-square)
[![npm](https://img.shields.io/npm/v/@subgame/api?logo=npm&style=flat-square)](https://www.npmjs.com/package/@subgame/api)
# @subgame

这个库提供了 SubGame Network 的额外类型定义，用来透过 [polkadot.js](https://github.com/polkadot-js/api) 进行连接。

This library provides additional typing information for user to access SubGame Network by using [polkadot.js](https://github.com/polkadot-js/api).

# Getting Started

- 安装依赖
- Install dependencies

```bash
yarn add @polkadot/api @subgame/api
```

- 建立 Api 实例
- Create API instance

```ts
import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { options } from '@subgame/api';

async function main() {
    const provider = new WsProvider('wss://testnet/ws');
    const api = new ApiPromise(options({ provider }));
    await api.isReady;

    // use api
}

main()
```

# Usage With TypeScript

- 安装依赖
- Install dependencies

```bash
yarn add @polkadot/api @subgame/types
```

- 导入 TypeScript 声明文件
- import TypeScript declare files

```ts
import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { options } from '@subgame/api';

// 在项目的任何一个地方导入
// Import somewhere in the project
import "@subgame/types/interfaces/augment-api";
import "@subgame/types/interfaces/augment-types";

async function main() {
    const provider = new WsProvider('wss://testnet/ws');
    const api = new ApiPromise(options({ provider }));
    await api.isReady;

    // 你可以在编辑器内看到参数类型及回传值
    // You can see the parameter type and return value in the editor
    api.tx.subgameAssets.transfer()
}

main()
```

# Packages

- [api](./packages/api)
  - 包含创建 polkadot.js API 实例的必要选项
  - Contains necessary options to create a polkadot.js API instance
- [types](./packages/types)
  - SubGame Network 的 Polkadot.js 类型定义
  - Polkadot.js type definations for SubGame Network
