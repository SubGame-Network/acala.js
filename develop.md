# 如何为一个模组新增类型

## 自动添加

至 `script/modules.ts` 依格式新增对应模组的类型。

范例:
```ts
import { RegistryTypes } from '@polkadot/types/types/registry';
import type { DefinitionRpc, DefinitionRpcSub } from '@polkadot/types/types';

const modules: {
  [moduleName: string]: {
    rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>;
    types: RegistryTypes;
  };
} = {
  // 依 key = module 名称的方式新增新的类型定义
  myModule: {
    rpc: {},
    types: {
      MyType: 'AccountId',
      MyDetail: {
        name: 'MyType',
      }
    }
  },

  chips: {
    rpc: {},
    types: {
      ChipBalance: 'u128',
      ChipsDetail: {
        balance: 'ChipBalance',
        reserve: 'ChipBalance'
      }
    }
  },
};

export default modules;
```
接着运行 ``yarn gen``
发布新类型请看最后面的脚本说明

## 手動逐步添加

至 `packages/type-definitions/defs` 资料夹底下根据模组名称建立一个 `*.ts` 档案。

范例:
- `myModule.ts`
```ts
export default {
  rpc: {},
  types: {
    MyType: {
      MyName: 'AccountId',
    }
  }
};
```

接着至 `packages/type-definitions/defs.ts` 档案里面引入它。

范例:
```ts
// 引入新的模组
export { default as myModule } from './defs/myModule';

export { default as subgameAssets } from './defs/subgameAssets';
export { default as bridge } from './defs/bridge';
export { default as chips } from './defs/chips';
export { default as gameCenter } from './defs/gameCenter';
export { default as gameGuessHashModule } from './defs/gameGuessHashModule';
export { default as gameTemplates } from './defs/gameTemplates';
export { default as stake } from './defs/stake';
export { default as swaps } from './defs/swaps';

```

接下来到 `packages/types/src/interfaces` 资料夹底下，根据模组名称新增一个资料夹，并且在那个资料夹里面加入一个 `definitions.ts` 档案。

并在那个档案里面从 `@subgame/type-definitions` 引入新的模组。

范例:
```ts
import { Definitions } from '@polkadot/types/types';
import myModule from '@subgame/type-definitions/defs/myModule';

export default myModule as Definitions;
```

接着到 `packages/types/src/interfaces/definitions.ts` 档案里面引入模组。

范例:
```ts
// order here matches with what is found in (unused removed)
//   https://www.npmjs.com/package/edgeware-node-types
//   https://github.com/hicommonwealth/edgeware-node-types/tree/master/types

// 在这里加入新模组
export { default as myModule } from './myModule/definitions';

export { default as subgameAssets } from './subgameAssets/definitions';
export { default as bridge } from './bridge/definitions';
export { default as chips } from './chips/definitions';
export { default as gameCenter } from './gameCenter/definitions';
export { default as gameGuessHashModule } from './gameGuessHashModule/definitions';
export { default as gameTemplates } from './gameTemplates/definitions';
export { default as stake } from './stake/definitions';
export { default as swaps } from './swaps/definitions';
```

最后一步，请到 `packages/types/scripts/generate.ts` 里面找到这一行
```ts
const metadata = filterModules(
  ['SubgameAssets', 'Bridge', 'Chips', 'GameCenter', 'GameGuessHashModule', 'GameTemplates', 'Stake', 'Swaps'],
  definations
);
```
在这个 `filterModules` 的第一个数组参数里面加入你的模组名称。

范例:
```ts
const metadata = filterModules(
  ["MyModule",'SubgameAssets', 'Bridge', 'Chips', 'GameCenter', 'GameGuessHashModule', 'GameTemplates', 'Stake', 'Swaps'],
  definations
);
```

# 脚本说明

## `yarn update-metadata`

运行此脚本从节点抓取元数据，稍后会从元数据进行类型定义。

## `yarn build:interfaces`

运行此脚本进行建立类型定义档案。
注意，请透过手动添加或是运行`yarn gen`之后，运行此脚本才会有效

## `yarn build:release`

打包可发布的档案包。
注意，请透过手动添加或是运行`yarn gen`之后，运行此脚本才会有效

## `yarn gen`

此脚本会自动根据 `script/module.ts` 里面的内容自动生成 `@polkadot/typegen` 所需要的档案，并进行 eslint 格式化。

## `lerna version`

透过 lerna 建立一个新的版本号，并推送 tag 至 github。

[lerna version](https://github.com/lerna/lerna/tree/main/commands/version#readme)

## `lerna publish from-git --contents build`

这个指令会以 git 最新的 tag 作为版本号，并指定 packages 里面的 build 作为发布目标，发布到 npm 上面。

[lerna publish](https://github.com/lerna/lerna/tree/main/commands/publish#readme)

# 发布流程

1. 手动或自动添加完类型
2. 运行 `yarn build:interfaces`，建立各模组的 interface 。
3. 运行 `yarn lint`，检查格式。
4. commit 到 git。
4. 运行 `lerna version`，取得新版号。
5. 运行 `yarn build:release`，打包可发布的档案包。
6. 运行 `lerna publish from-git --contents build`，发布至 npm。
