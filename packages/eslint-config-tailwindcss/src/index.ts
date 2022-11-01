import {ESLint} from 'eslint';
import {overridePluginRule} from '@myparcel-eslint/utils';

const tailwindcssConfig: ESLint.ConfigData = {
  plugins: [
    'tailwindcss',
  ],
  rules: {
    ...overridePluginRule('vue/static-class-names-order'),
    'tailwindcss/classnames-order'                  : 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand'                : 'warn',
    'tailwindcss/migration-from-tailwind-2'         : 'off',
    'tailwindcss/no-arbitrary-value'                : 'off',
    'tailwindcss/no-contradicting-classname'        : 'warn',
    'tailwindcss/no-custom-classname'               : 'warn',
  },
};

export default tailwindcssConfig;
