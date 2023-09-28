import {type ESLint} from 'eslint';

export const config: ESLint.ConfigData = {
  'extends': [
    '@myparcel-eslint/eslint-config-vue',
    '@myparcel-eslint/eslint-config-prettier',
  ],
};
