import {type ESLint} from 'eslint';

export const config: ESLint.ConfigData = {
  'extends': [
    '@myparcel-dev/eslint-config-vue',
    '@myparcel-dev/eslint-config-prettier',
  ],
};
