import {ESLint} from 'eslint';

const prettierTypescriptVueConfig: ESLint.ConfigData = {
  extends: [
    require.resolve('@myparcel-eslint/eslint-config-typescript-vue'),
    require.resolve('@myparcel-eslint/eslint-config-prettier'),
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
};

export default prettierTypescriptVueConfig;
