import {ESLint} from 'eslint';

export const config: ESLint.ConfigData = {
  'extends'      : '@myparcel-dev/eslint-config-es6',
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
};
