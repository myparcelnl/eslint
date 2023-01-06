import {ESLint} from 'eslint';

export const config: ESLint.ConfigData = {
  'extends'      : '@myparcel-eslint/eslint-config',
  'parserOptions': {
    'ecmaVersion': 5,
  },
};
