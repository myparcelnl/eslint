import {ESLint} from 'eslint';

const es5Config: ESLint.ConfigData = {
  extends      : '@myparcel-eslint/eslint-config',
  parserOptions: {
    ecmaVersion: 5,
  },
};

export default es5Config;
