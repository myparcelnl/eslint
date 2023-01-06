import {ESLint} from 'eslint';
import {parserOptions as typescriptParserOptions} from '@myparcel-eslint/eslint-config-typescript';
import {parserOptions as vueParserOptions} from '@myparcel-eslint/eslint-config-vue3';

export const config: ESLint.ConfigData = {
  'parserOptions': {
    ...vueParserOptions,
    ...typescriptParserOptions,
    'parser': '@typescript-eslint/parser',
  },
  'extends': [
    '@myparcel-eslint/eslint-config-typescript',
    '@myparcel-eslint/eslint-config-vue3',
    '@vue/eslint-config-typescript/recommended',
  ],
};
