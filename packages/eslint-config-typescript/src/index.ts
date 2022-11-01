import {ESLint, Linter} from 'eslint';
import defaultConfig from '@myparcel-eslint/eslint-config';
import es6Config from '@myparcel-eslint/eslint-config-es6';
import RuleEntry = Linter.RuleEntry;

/**
 * Overridden rules from other plugins or presets.
 */
const overrides: Record<string, RuleEntry> = {
  // Default
  'brace-style'                : 'off',
  camelcase                    : 'off',
  'comma-dangle'               : 'off',
  'comma-spacing'              : 'off',
  'func-call-spacing'          : 'off',
  indent                       : 'off',
  'no-array-constructor'       : 'off',
  'no-empty-function'          : 'off',
  'no-extra-parens'            : 'off',
  'no-extra-semi'              : 'off',
  'no-implied-eval'            : 'off',
  'no-magic-numbers'           : 'off',
  'no-throw-literal'           : 'off',
  'no-undef'                   : 'off',
  'no-unused-expressions'      : 'off',
  'no-unused-vars'             : 'off',
  'no-use-before-define'       : 'off',
  quotes                       : 'off',
  semi                         : 'off',
  'space-before-function-paren': 'off',

  // ES6
  'no-dupe-class-members' : 'off',
  'no-useless-constructor': 'off',
  'require-await'         : 'off',

  // Jsdoc plugin
  'jsdoc/require-param'       : 'off',
  'jsdoc/require-property'    : 'off',
  'jsdoc/require-returns'     : 'off',
  'jsdoc/require-returns-type': 'off',
  'jsdoc/require-param-type'  : 'off',
};

const typescriptConfig: ESLint.ConfigData = {
  extends: [
    require.resolve('@myparcel-eslint/eslint-config-esnext'),
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser       : '@typescript-eslint/parser',
  parserOptions: {
    project        : 'tsconfig.json',
    tsconfigRootDir: '.',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    ...overrides,
    // Default extensions
    '@typescript-eslint/adjacent-overload-signatures'   : 'warn',
    '@typescript-eslint/array-type'                     : 'warn',
    '@typescript-eslint/await-thenable'                 : 'warn',
    '@typescript-eslint/ban-ts-comment'                 : 'warn',
    '@typescript-eslint/ban-tslint-comment'             : 'off',
    '@typescript-eslint/ban-types'                      : 'warn',
    '@typescript-eslint/brace-style'                    : defaultConfig.rules['brace-style'],
    '@typescript-eslint/class-literal-property-style'   : 'off',
    '@typescript-eslint/comma-dangle'                   : defaultConfig.rules['comma-dangle'],
    '@typescript-eslint/comma-spacing'                  : defaultConfig.rules['comma-spacing'],
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    '@typescript-eslint/consistent-type-assertions'     : 'warn',
    '@typescript-eslint/consistent-type-definitions'    : 'off',
    '@typescript-eslint/consistent-type-exports'        : 'off',
    '@typescript-eslint/consistent-type-imports'        : 'off',
    '@typescript-eslint/default-param-last'             : 'warn',
    '@typescript-eslint/dot-notation'                   : 'off',

    // ES6 extensions
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'warn',

    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/func-call-spacing'             : defaultConfig.rules['func-call-spacing'],
    '@typescript-eslint/indent'                        : defaultConfig.rules.indent,
    '@typescript-eslint/init-declarations'             : 'off',
    '@typescript-eslint/keyword-spacing'               : 'off',
    '@typescript-eslint/lines-between-class-members'   : 'off',
    '@typescript-eslint/member-delimiter-style'        : 'warn',
    '@typescript-eslint/member-ordering'               : [
      'warn',
      {
        default: [
          'public-field',
          'protected-field',
          'private-field',
          'public-get',
          'protected-get',
          'private-get',
          'public-set',
          'protected-set',
          'private-set',
          'public-method',
          'protected-method',
          'private-method',
        ],
      },
    ],
    '@typescript-eslint/method-signature-style': 'off',
    '@typescript-eslint/naming-convention'     : [
      'warn',
      {
        selector: 'default',
        format  : [
          'strictCamelCase',
        ],
      },
      {
        selector: 'variable',
        format  : [
          'strictCamelCase',
          'UPPER_CASE',
        ],
      },
      {
        selector: 'property',
        format  : [
          'camelCase',
          'PascalCase',
        ],
      },
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format   : null,
        modifiers: [
          'requiresQuotes',
        ],
      },
      {
        selector: [
          'objectLiteralProperty',
        ],
        format: null,
      },
      {
        selector: 'typeLike',
        format  : [
          'StrictPascalCase',
        ],
      },
      {
        selector: 'enumMember',
        format  : [
          'UPPER_CASE',
        ],
      },
      {
        selector : 'property',
        modifiers: [
          'private',
        ],
        format: [
          'strictCamelCase',
        ],
        leadingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-array-constructor'           : defaultConfig.rules['no-array-constructor'],
    '@typescript-eslint/no-base-to-string'              : 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',
    '@typescript-eslint/no-confusing-void-expression'   : 'off',
    '@typescript-eslint/no-dupe-class-members'          : 'off',
    '@typescript-eslint/no-duplicate-imports'           : 'off',
    '@typescript-eslint/no-dynamic-delete'              : 'warn',
    '@typescript-eslint/no-empty-function'              : defaultConfig.rules['no-empty-function'],
    '@typescript-eslint/no-empty-interface'             : 'warn',
    '@typescript-eslint/no-explicit-any'                : 'warn',
    '@typescript-eslint/no-extra-non-null-assertion'    : 'warn',
    '@typescript-eslint/no-extra-parens'                : defaultConfig.rules['no-extra-parens'],
    '@typescript-eslint/no-extra-semi'                  : defaultConfig.rules['no-extra-semi'],
    '@typescript-eslint/no-extraneous-class'            : 'warn',
    '@typescript-eslint/no-floating-promises'           : 'warn',
    '@typescript-eslint/no-for-in-array'                : 'warn',
    '@typescript-eslint/no-implicit-any-catch'          : 'off',
    '@typescript-eslint/no-implied-eval'                : defaultConfig.rules['no-implied-eval'],
    '@typescript-eslint/no-inferrable-types'            : 'warn',
    '@typescript-eslint/no-invalid-this'                : 'off',
    '@typescript-eslint/no-invalid-void-type'           : 'off',
    '@typescript-eslint/no-loop-func'                   : 'off',
    '@typescript-eslint/no-loss-of-precision'           : 'off',
    '@typescript-eslint/no-magic-numbers'               : [
      'warn',
      {
        ...defaultConfig.rules['no-magic-numbers'][1],
        ignoreEnums                  : true,
        ignoreNumericLiteralTypes    : true,
        ignoreReadonlyClassProperties: true,
      },
    ],
    '@typescript-eslint/no-meaningless-void-operator'           : 'off',
    '@typescript-eslint/no-misused-new'                         : 'warn',
    '@typescript-eslint/no-misused-promises'                    : 'warn',
    '@typescript-eslint/no-namespace'                           : 'warn',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain'    : 'warn',
    '@typescript-eslint/no-non-null-assertion'                  : 'warn',
    '@typescript-eslint/no-parameter-properties'                : 'warn',
    '@typescript-eslint/no-redeclare'                           : 'off',
    '@typescript-eslint/no-require-imports'                     : 'off',
    '@typescript-eslint/no-restricted-imports'                  : 'off',
    '@typescript-eslint/no-shadow'                              : 'off',
    '@typescript-eslint/no-this-alias'                          : 'warn',
    '@typescript-eslint/no-throw-literal'                       : defaultConfig.rules['no-throw-literal'],
    '@typescript-eslint/no-type-alias'                          : 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare' : 'off',
    '@typescript-eslint/no-unnecessary-condition'               : 'off',
    '@typescript-eslint/no-unnecessary-qualifier'               : 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments'          : 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion'          : 'warn',
    '@typescript-eslint/no-unnecessary-type-constraint'         : 'off',
    '@typescript-eslint/no-unsafe-argument'                     : 'off',
    '@typescript-eslint/no-unsafe-assignment'                   : 'off',
    '@typescript-eslint/no-unsafe-call'                         : 'off',
    '@typescript-eslint/no-unsafe-member-access'                : 'off',
    '@typescript-eslint/no-unsafe-return'                       : 'off',

    // New rules, to be implemented.
    '@typescript-eslint/no-unused-expressions'               : defaultConfig.rules['no-unused-expressions'],
    '@typescript-eslint/no-unused-vars'                      : defaultConfig.rules['no-unused-vars'],
    '@typescript-eslint/no-use-before-define'                : defaultConfig.rules['no-use-before-define'],
    '@typescript-eslint/no-useless-constructor'              : es6Config.rules['no-useless-constructor'],
    '@typescript-eslint/no-var-requires'                     : 'warn',
    '@typescript-eslint/non-nullable-type-assertion-style'   : 'off',
    '@typescript-eslint/object-curly-spacing'                : 'off',
    '@typescript-eslint/padding-line-between-statements'     : 'off',
    '@typescript-eslint/prefer-as-const'                     : 'off',
    '@typescript-eslint/prefer-enum-initializers'            : 'off',
    '@typescript-eslint/prefer-for-of'                       : 'warn',
    '@typescript-eslint/prefer-function-type'                : 'warn',
    '@typescript-eslint/prefer-includes'                     : 'warn',
    '@typescript-eslint/prefer-literal-enum-member'          : 'off',
    '@typescript-eslint/prefer-namespace-keyword'            : 'warn',
    '@typescript-eslint/prefer-nullish-coalescing'           : 'warn',
    '@typescript-eslint/prefer-optional-chain'               : 'warn',
    '@typescript-eslint/prefer-readonly'                     : 'off',
    '@typescript-eslint/prefer-readonly-parameter-types'     : 'off',
    '@typescript-eslint/prefer-reduce-type-parameter'        : 'off',
    '@typescript-eslint/prefer-regexp-exec'                  : 'warn',
    '@typescript-eslint/prefer-return-this-type'             : 'off',
    '@typescript-eslint/prefer-string-starts-ends-with'      : 'warn',
    '@typescript-eslint/prefer-ts-expect-error'              : 'off',
    '@typescript-eslint/promise-function-async'              : 'warn',
    '@typescript-eslint/quotes'                              : defaultConfig.rules.quotes,
    '@typescript-eslint/require-array-sort-compare'          : 'off',
    '@typescript-eslint/require-await'                       : es6Config.rules['require-await'],
    '@typescript-eslint/restrict-plus-operands'              : 'warn',
    '@typescript-eslint/restrict-template-expressions'       : 'off',
    '@typescript-eslint/return-await'                        : 'warn',
    '@typescript-eslint/semi'                                : defaultConfig.rules.semi,
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    '@typescript-eslint/space-before-function-paren'         : [
      'warn',
      {
        anonymous : 'never',
        named     : 'never',
        asyncArrow: 'always',
      },
    ],
    '@typescript-eslint/space-infix-ops'            : 'off',
    '@typescript-eslint/strict-boolean-expressions' : 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    '@typescript-eslint/triple-slash-reference'     : 'warn',
    '@typescript-eslint/type-annotation-spacing'    : 'warn',
    '@typescript-eslint/typedef'                    : [
      'warn',
      {
        arrowParameter                   : false,
        objectDestructuring              : false,
        variableDeclarationIgnoreFunction: true,
      },
    ],
    '@typescript-eslint/unbound-method'    : 'off',
    '@typescript-eslint/unified-signatures': 'warn',
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
};

export default typescriptConfig;
