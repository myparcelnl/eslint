import {ESLint} from 'eslint';

const prettierTypescriptVueConfig: ESLint.ConfigData = {
  extends: [
    '@myparcel-eslint/eslint-config-vue',
    '@myparcel-eslint/eslint-config-typescript',
    '@myparcel-eslint/eslint-config-prettier',
  ],
};

export default prettierTypescriptVueConfig;
