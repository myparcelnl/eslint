/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  rules: {
    'no-magic-numbers': 'off',
  },
  overrides: [
    {
      files: [
        './packages/*/*.js',
      ],
      extends: '@myparcel-eslint/eslint-config-node',
    },
    {
      files: [
        './packages/**/*.ts',
      ],
      extends: '@myparcel-eslint/eslint-config-typescript',
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
        'array-bracket-newline': [
          'error',
          'always',
        ],
        'array-element-newline': [
          'error',
          'always',
        ],
        'comma-dangle': [
          'warn',
          'always-multiline',
        ],
        'key-spacing': [
          'error',
          {
            'beforeColon': false,
            'afterColon': true,
            'align': 'colon',
          },
        ],
        'max-len': 'off',
        'object-curly-newline': [
          'error',
          {
            'ObjectExpression': 'always',
            'ObjectPattern': 'never',
            'ImportDeclaration': 'never',
          },
        ],
        'object-property-newline': [
          'error',
        ],
        'quotes': [
          'error',
          'single',
        ],
      },
    },
  ],
};
