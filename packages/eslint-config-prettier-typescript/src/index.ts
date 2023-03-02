import {ESLint} from 'eslint';
import {parserOptions} from '@myparcel-eslint/eslint-config-typescript';

export const config: ESLint.ConfigData = {
  parserOptions,
  'extends': [
    '@myparcel-eslint/eslint-config-typescript',
    '@myparcel-eslint/eslint-config-prettier',
  ],
};
