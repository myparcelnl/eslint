import {ESLint} from 'eslint';

export const config: ESLint.ConfigData = {
  'extends'      : '@myparcel-dev/eslint-config',
  'parserOptions': {
    'ecmaVersion': 5,
  },
};
