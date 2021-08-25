import * as fs from 'fs';
import modules from './modules';

const main = () => {
  const exports: string[] = [];
  const definitions: string[] = [];

  console.log('Start creating module definition file');

  for (const key in modules) {
    const module = modules[key];
    if (module) {
      fs.writeFileSync(
        `packages/type-definitions/src/defs/${key}.ts`,
        `
          export default ${JSON.stringify(module)};
        `
      );

      const moduleInterfacesDirPath = `packages/types/src/interfaces/${key}`;

      if (!fs.existsSync(moduleInterfacesDirPath)) {
        fs.mkdirSync(moduleInterfacesDirPath);
      }
      fs.writeFileSync(
        `packages/types/src/interfaces/${key}/definitions.ts`,
        `
      import { Definitions } from '@polkadot/types/types';
      import ${key} from '@subgame/type-definitions/defs/${key}';
      
      export default ${key} as Definitions;
      `
      );

      exports.push(`export { default as ${key} } from './defs/${key}';`);
      definitions.push(`export { default as ${key} } from './${key}/definitions';`);
      console.log(`${key} Module creation is complete`);
    }
  }

  if (exports.length > 0) {
    fs.writeFileSync('packages/type-definitions/src/defs.ts', exports.join(''));
    console.log('`defs.ts` creation completed');
  }
  if (definitions.length > 0) {
    fs.writeFileSync('packages/types/src/interfaces/definitions.ts', definitions.join(''));
    console.log('`definitions.ts` creation completed');
  }

  console.log('All files are created');
};

main();
