import {ESLint} from 'eslint';

const prettierConfig: ESLint.ConfigData = {
  plugins: [
    'prettier',
  ],
  extends: [
    'plugin:prettier/recommended',
  ],
  rules: {
    'implicit-arrow-linebreak': 'off',
    'no-extra-parens'         : 'off',
    'operator-linebreak'      : 'off',
    'prettier/prettier'       : [
      'warn',
      {
        printWidth: 120,
      },
    ],
  },
};

export default prettierConfig;
