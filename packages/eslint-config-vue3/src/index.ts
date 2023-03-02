import {ESLint, Linter} from 'eslint';

export const parserOptions: Linter.ParserOptions = {
  'extraFileExtensions': [
    '.vue',
  ],
  'ecmaFeatures': {
    'jsx': true,
  },
};

export const config: ESLint.ConfigData = {
  'plugins': [
    'vue',
  ],
  parserOptions,
  'extends': [
    '@myparcel-eslint/eslint-config-vue2',
    'plugin:vue/vue3-recommended',
  ],
  'rules': {
    'vue/multi-word-component-names'    : 'off',
    'vue/no-multiple-template-root'     : 'off',
    'vue/no-v-for-template-key'         : 'off',
    'vue/no-v-for-template-key-on-child': 'warn',
    'vue/require-slots-as-functions'    : 'error',
    'vue/v-on-event-hyphenation'        : [
      'warn',
      'never',
      {
        'autofix': true,
      },
    ],
  },
};
