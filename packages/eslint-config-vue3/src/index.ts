import {ESLint} from 'eslint';

const vue3Config: ESLint.ConfigData = {
  plugins: [
    'vue',
  ],
  parserOptions: {
    extraFileExtensions: [
      '.vue',
    ],
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    require.resolve('@myparcel-eslint/eslint-config-vue2'),
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/block-lang': [
      'warn',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/multi-word-component-names'    : 'off',
    'vue/no-multiple-template-root'     : 'off',
    'vue/no-v-for-template-key'         : 'off',
    'vue/no-v-for-template-key-on-child': 'warn',
    'vue/require-slots-as-functions'    : 'error',
    'vue/v-on-event-hyphenation'        : [
      'warn',
      'never',
      {
        autofix: true,
      },
    ],
  },
};

export default vue3Config;
