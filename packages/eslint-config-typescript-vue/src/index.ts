import {ESLint} from 'eslint';

const typescriptVueConfig: ESLint.ConfigData = {
  extends: [
    '@myparcel-eslint/eslint-config-vue3',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
};

export default typescriptVueConfig;
