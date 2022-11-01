import {ESLint} from 'eslint';
import typescriptConfig from '@myparcel-eslint/eslint-config-typescript';

const prettierTypescriptConfig: ESLint.ConfigData = {
  parserOptions: typescriptConfig.parserOptions,
  extends      : [
    require.resolve('@myparcel-eslint/eslint-config-typescript'),
    require.resolve('@myparcel-eslint/eslint-config-prettier'),
  ],
};

export default prettierTypescriptConfig;
