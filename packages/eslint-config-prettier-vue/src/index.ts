import {ESLint} from 'eslint';

const prettierVueConfig: ESLint.ConfigData = {
  extends: [
    require.resolve('@myparcel-eslint/eslint-config-vue'),
    require.resolve('@myparcel-eslint/eslint-config-prettier'),
    '@vue/eslint-config-prettier',
  ],
};

export default prettierVueConfig;
