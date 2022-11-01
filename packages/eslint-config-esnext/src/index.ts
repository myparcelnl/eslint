import {ESLint} from 'eslint';

const esnextConfig: ESLint.ConfigData = {
  extends: require.resolve('@myparcel-eslint/eslint-config-es6'),
  env    : {
    es2022: true,
  },
};

export default esnextConfig;
