import {ESLint} from 'eslint';
import {parserOptions as typescriptParserOptions} from '@myparcel-dev/eslint-config-typescript';
import {parserOptions as vueParserOptions} from '@myparcel-dev/eslint-config-vue3';

export const config: ESLint.ConfigData = {
  'parserOptions': {
    ...vueParserOptions,
    ...typescriptParserOptions,
    'parser': '@typescript-eslint/parser',
  },
  'extends': [
    '@myparcel-dev/eslint-config-typescript',
    '@myparcel-dev/eslint-config-vue3',
    '@vue/eslint-config-typescript/recommended',
  ],
  'rules': {
    'vue/block-lang': [
      'warn',
      {
        'script': {
          'lang': 'ts',
        },
      },
    ],
  },
};
