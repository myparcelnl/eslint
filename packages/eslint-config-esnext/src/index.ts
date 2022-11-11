import {ESLint} from 'eslint';

const esnextConfig: ESLint.ConfigData = {
  extends      : require.resolve('@myparcel-eslint/eslint-config-es6'),
  parserOptions: {
    ecmaVersion: 'latest',
  },
};

export default esnextConfig;
