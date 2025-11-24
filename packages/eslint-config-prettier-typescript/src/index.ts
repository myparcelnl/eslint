import {ESLint} from 'eslint';
import {parserOptions} from '@myparcel-dev/eslint-config-typescript';

export const config: ESLint.ConfigData = {
  parserOptions,
  'extends': [
    '@myparcel-dev/eslint-config-typescript',
    '@myparcel-dev/eslint-config-prettier',
  ],
};
