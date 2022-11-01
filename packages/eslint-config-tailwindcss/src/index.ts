import {ESLint} from 'eslint';

const tailwindcssConfig: ESLint.ConfigData = {
  plugins: [
    'tailwindcss',
  ],
  rules: {
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
