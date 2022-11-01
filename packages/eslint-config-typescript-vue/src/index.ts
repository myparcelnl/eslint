import {ESLint} from 'eslint';
import typescriptConfig from '@myparcel-eslint/eslint-config-typescript';
import vueConfig from '@myparcel-eslint/eslint-config-vue';

const typescriptVueConfig: ESLint.ConfigData = {
  parserOptions: {
    ...vueConfig.parserOptions,
    ...typescriptConfig.parserOptions,
    parser: '@typescript-eslint/parser',
  },
  extends: [
    require.resolve('@myparcel-eslint/eslint-config-typescript'),
    require.resolve('@myparcel-eslint/eslint-config-vue3'),
    '@vue/eslint-config-typescript/recommended',
  ],
};

export default typescriptVueConfig;
