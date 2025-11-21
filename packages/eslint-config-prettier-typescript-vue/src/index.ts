import {type ESLint} from 'eslint';

export const config: ESLint.ConfigData = {
  'extends': [
    '@myparcel-dev/eslint-config-typescript-vue',
    '@myparcel-dev/eslint-config-prettier',
    '@vue/eslint-config-typescript/recommended',
  ],
};
