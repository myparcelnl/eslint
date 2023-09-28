import {type ESLint} from 'eslint';

export const config: ESLint.ConfigData = {
  'extends': [
    '@myparcel-eslint/eslint-config-typescript-vue',
    '@myparcel-eslint/eslint-config-prettier',
    '@vue/eslint-config-typescript/recommended',
  ],
};
