import {type ESLint} from 'eslint';

const overrides: ESLint.ConfigData['rules'] = {
  // sort-imports only produces warnings which clash with import/order.
  'sort-imports': 'off',
};

/**
 * @see https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
 */
export const config: ESLint.ConfigData = {
  'plugins': [
    'import',
  ],
  'rules': {
    ...overrides,
    'import/consistent-type-specifier-style': [
      'warn',
      'prefer-inline',
    ],
    'import/default'                    : 'error',
    'import/dynamic-import-chunkname'   : 'off',
    'import/export'                     : 'off',
    'import/exports-last'               : 'off',
    'import/extensions'                 : 'off',
    'import/first'                      : 'warn',
    'import/group-exports'              : 'off',
    'import/imports-first'              : 'off',
    'import/max-dependencies'           : 'off',
    'import/named'                      : 'off',
    'import/namespace'                  : 'off',
    'import/newline-after-import'       : 'warn',
    'import/no-absolute-path'           : 'off',
    'import/no-amd'                     : 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-commonjs'                : 'off',
    'import/no-cycle'                   : 'off',
    'import/no-default-export'          : 'off',
    'import/no-deprecated'              : 'off',
    'import/no-duplicates'              : 'off',
    'import/no-dynamic-require'         : 'off',
    'import/no-empty-named-blocks'      : 'off',
    'import/no-extraneous-dependencies' : 'off',
    'import/no-import-module-exports'   : 'off',
    'import/no-internal-modules'        : 'off',
    'import/no-mutable-exports'         : 'off',
    'import/no-named-as-default'        : 'off',
    'import/no-named-as-default-member' : 'off',
    'import/no-named-default'           : 'off',
    'import/no-named-export'            : 'off',
    'import/no-namespace'               : 'off',
    'import/no-nodejs-modules'          : 'off',
    'import/no-relative-packages'       : 'off',
    'import/no-relative-parent-imports' : 'off',
    'import/no-restricted-paths'        : 'off',
    'import/no-self-import'             : 'error',
    'import/no-unassigned-import'       : 'off',
    'import/no-unresolved'              : 'off',
    'import/no-unused-modules'          : 'off',
    'import/no-useless-path-segments'   : 'warn',
    'import/no-webpack-loader-syntax'   : 'off',
    'import/order'                      : [
      'warn',
      {
        'groups': [
          'index',
          'type',
          'builtin',
          'external',
          [
            'sibling',
            'parent',
            'internal',
          ],
          'object',
        ],
        'newlines-between': 'never',
        'alphabetize'     : {
          'order'          : 'desc',
          'caseInsensitive': false,
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'import/unambiguous'          : 'off',
  },
};
