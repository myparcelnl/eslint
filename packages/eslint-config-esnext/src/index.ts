import {ESLint} from 'eslint';

export const config: ESLint.ConfigData = {
  'extends'      : '@myparcel-eslint/eslint-config-es6',
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
};
