import {type ESLint} from 'eslint';

export const config: ESLint.ConfigData = {
  'extends': [
    '@myparcel-dev/eslint-config-vue2',
    '@myparcel-dev/eslint-config-prettier',
  ],
};
