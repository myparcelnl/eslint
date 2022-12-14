import {Linter} from 'eslint';

export const braceStyle: Linter.RuleEntry = [
  'warn',
  '1tbs',
];

export const commaDangle: Linter.RuleEntry = [
  'warn',
  'always-multiline',
];

export const commaSpacing: Linter.RuleEntry = [
  'warn',
  {
    'before': false,
    'after' : true,
  },
];

export const funcCallSpacing: Linter.RuleEntry = [
  'warn',
  'never',
];

export const indent: Linter.RuleEntry = [
  'warn',
  2,
  {
    'SwitchCase': 1,
  },
];

export const noArrayConstructor: Linter.RuleEntry = 'warn';

export const noEmptyFunction: Linter.RuleEntry = 'warn';

export const noExtraParens: Linter.RuleEntry = 'warn';

export const noExtraSemi: Linter.RuleEntry = 'warn';

export const noImpliedEval: Linter.RuleEntry = 'warn';

export const noThrowLiteral: Linter.RuleEntry = 'off';

export const noUnusedExpressions: Linter.RuleEntry = 'warn';

export const noUnusedVars: Linter.RuleEntry = [
  'warn',
  {
    'ignoreRestSiblings': true,
  },
];

export const noUseBeforeDefine: Linter.RuleEntry = 'off';

export const quotes: Linter.RuleEntry = [
  'warn',
  'single',
];

export const semi: Linter.RuleEntry = [
  'warn',
  'always',
];

export const config = {
  'env': {
    'browser': true,
  },
  'rules': {
    'accessor-pairs'       : 'off',
    'array-bracket-newline': [
      'warn',
      'consistent',
    ],
    'array-bracket-spacing': [
      'warn',
      'never',
    ],
    'array-callback-return': 'warn',
    'array-element-newline': [
      'warn',
      'consistent',
    ],
    'block-scoped-var': 'warn',
    'block-spacing'   : 'warn',
    'brace-style'     : braceStyle,
    'callback-return' : 'off',
    'camelcase'       : [
      'warn',
      {
        'ignoreDestructuring': true,
        'ignoreImports'      : true,
        'properties'         : 'never',
      },
    ],
    'capitalized-comments'  : 'off',
    'class-methods-use-this': 'warn',
    'comma-dangle'          : commaDangle,
    'comma-spacing'         : commaSpacing,
    'comma-style'           : 'warn',
    'complexity'            : [
      'warn',
      {
        'max': 10,
      },
    ],
    'computed-property-spacing': [
      'warn',
      'never',
    ],
    'consistent-return': 'off',
    'consistent-this'  : [
      'warn',
      'self',
    ],
    'curly'             : 'warn',
    'default-case'      : 'off',
    'default-case-last' : 'warn',
    'default-param-last': 'warn',
    'dot-location'      : [
      'warn',
      'property',
    ],
    'dot-notation': 'warn',
    'eol-last'    : 'warn',
    'eqeqeq'      : [
      'warn',
      'smart',
    ],
    'for-direction'     : 'warn',
    'func-call-spacing' : funcCallSpacing,
    'func-name-matching': 'off',
    'func-names'        : 'off',
    'func-style'        : [
      'warn',
      'declaration',
      {
        'allowArrowFunctions': true,
      },
    ],
    'function-call-argument-newline': [
      'warn',
      'consistent',
    ],
    'function-paren-newline': [
      'warn',
      'consistent',
    ],
    'getter-return'         : 'off',
    'global-require'        : 'off',
    'grouped-accessor-pairs': 'warn',
    'guard-for-in'          : 'off',
    'handle-callback-err'   : 'off',
    'id-blacklist'          : 'off',
    'id-denylist'           : 'off',
    'id-length'             : [
      'warn',
      {
        'exceptions': [
          '$',
          '_',
          'i',
          'e',
          'a',
          'b',
          'x',
          'y',
          'z',
        ],
      },
    ],
    'id-match'                : 'off',
    'implicit-arrow-linebreak': [
      'warn',
      'beside',
    ],
    'indent'           : indent,
    'indent-legacy'    : 'off',
    'init-declarations': 'off',
    'jsx-quotes'       : 'off',
    'key-spacing'      : 'warn',
    'keyword-spacing'  : [
      'warn',
      {
        'before': true,
        'after' : true,
      },
    ],
    'line-comment-position': [
      'warn',
      {
        'position': 'above',
      },
    ],
    'linebreak-style': [
      'warn',
      'unix',
    ],
    'lines-around-comment': [
      'warn',
      {
        'afterBlockComment' : false,
        'afterLineComment'  : false,
        'allowArrayEnd'     : false,
        'allowArrayStart'   : true,
        'allowBlockEnd'     : false,
        'allowBlockStart'   : true,
        'allowClassEnd'     : false,
        'allowClassStart'   : true,
        'allowObjectEnd'    : false,
        'allowObjectStart'  : true,
        'beforeBlockComment': true,
      },
    ],
    'lines-around-directive'     : 'warn',
    'lines-between-class-members': [
      'warn',
      'always',
      {
        'exceptAfterSingleLine': true,
      },
    ],
    'max-classes-per-file': 'warn',
    'max-depth'           : [
      'warn',
      {
        'max': 3,
      },
    ],
    'max-len': [
      'warn',
      120,
    ],
    'max-lines'             : 'off',
    'max-lines-per-function': [
      'warn',
      {
        'max'         : 50,
        'skipComments': true,
      },
    ],
    'max-nested-callbacks': [
      'warn',
      {
        'max': 3,
      },
    ],
    'max-params': [
      'warn',
      4,
    ],
    'max-statements'         : 'off',
    'max-statements-per-line': 'warn',
    'multiline-comment-style': 'off',
    'multiline-ternary'      : [
      'warn',
      'always-multiline',
    ],
    'new-cap': [
      'warn',
    ],
    'new-parens'              : 'warn',
    'newline-after-var'       : 'off',
    'newline-before-return'   : 'off',
    'newline-per-chained-call': 'off',
    'no-alert'                : 'warn',
    'no-array-constructor'    : noArrayConstructor,
    'no-bitwise'              : 'warn',
    'no-buffer-constructor'   : 'warn',
    'no-caller'               : 'warn',
    'no-case-declarations'    : 'warn',
    'no-catch-shadow'         : 'warn',
    'no-compare-neg-zero'     : 'warn',
    'no-cond-assign'          : 'warn',
    'no-console'              : 'warn',
    'no-constant-condition'   : 'warn',
    'no-constructor-return'   : 'warn',
    'no-continue'             : 'off',
    'no-control-regex'        : 'off',
    'no-debugger'             : 'error',
    'no-delete-var'           : 'warn',
    'no-div-regex'            : 'off',
    'no-dupe-args'            : 'warn',
    'no-dupe-else-if'         : 'warn',
    'no-dupe-keys'            : 'warn',
    'no-duplicate-case'       : 'warn',
    'no-else-return'          : 'warn',
    'no-empty'                : 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-function'       : noEmptyFunction,
    'no-empty-pattern'        : 'warn',
    'no-eq-null'              : 'warn',
    'no-eval'                 : 'warn',
    'no-ex-assign'            : 'warn',
    'no-extend-native'        : 'warn',
    'no-extra-bind'           : 'warn',
    'no-extra-boolean-cast'   : 'warn',
    'no-extra-label'          : 'warn',
    'no-extra-parens'         : noExtraParens,
    'no-extra-semi'           : noExtraSemi,
    'no-fallthrough'          : 'off',
    'no-floating-decimal'     : 'warn',
    'no-func-assign'          : 'warn',
    'no-global-assign'        : 'warn',
    'no-implicit-coercion'    : [
      'warn',
      {
        'boolean': false,
      },
    ],
    'no-implicit-globals'    : 'warn',
    'no-implied-eval'        : noImpliedEval,
    'no-import-assign'       : 'warn',
    'no-inline-comments'     : 'warn',
    'no-inner-declarations'  : 'off',
    'no-invalid-regexp'      : 'warn',
    'no-invalid-this'        : 'warn',
    'no-irregular-whitespace': 'warn',
    'no-iterator'            : 'warn',
    'no-label-var'           : 'warn',
    'no-labels'              : 'off',
    'no-lone-blocks'         : 'off',
    'no-lonely-if'           : 'warn',
    'no-loop-func'           : 'off',
    'no-loss-of-precision'   : 'warn',
    'no-magic-numbers'       : [
      'warn',
      {
        'ignore': [
          -1,
          0,
          1,
          100,
          1000,
        ],
        'detectObjects': true,
      },
    ],
    'no-misleading-character-class': 'off',
    'no-mixed-operators'           : 'warn',
    'no-mixed-requires'            : 'off',
    'no-mixed-spaces-and-tabs'     : 'warn',
    'no-multi-assign'              : 'warn',
    'no-multi-spaces'              : 'warn',
    'no-multi-str'                 : 'off',
    'no-multiple-empty-lines'      : [
      'warn',
      {
        'max'   : 1,
        'maxBOF': 0,
        'maxEOF': 0,
      },
    ],
    'no-native-reassign'         : 'off',
    'no-negated-condition'       : 'warn',
    'no-negated-in-lhs'          : 'off',
    'no-nested-ternary'          : 'warn',
    'no-new'                     : 'off',
    'no-new-func'                : 'off',
    'no-new-object'              : 'warn',
    'no-new-require'             : 'off',
    'no-new-wrappers'            : 'off',
    'no-nonoctal-decimal-escape' : 'warn',
    'no-obj-calls'               : 'off',
    'no-octal'                   : 'off',
    'no-octal-escape'            : 'off',
    'no-param-reassign'          : 'off',
    'no-path-concat'             : 'off',
    'no-plusplus'                : 'off',
    'no-process-env'             : 'off',
    'no-process-exit'            : 'off',
    'no-promise-executor-return' : 'warn',
    'no-proto'                   : 'off',
    'no-prototype-builtins'      : 'off',
    'no-redeclare'               : 'off',
    'no-regex-spaces'            : 'warn',
    'no-restricted-exports'      : 'warn',
    'no-restricted-globals'      : 'warn',
    'no-restricted-modules'      : 'warn',
    'no-restricted-properties'   : 'warn',
    'no-restricted-syntax'       : 'warn',
    'no-return-assign'           : 'warn',
    'no-script-url'              : 'off',
    'no-self-assign'             : 'off',
    'no-self-compare'            : 'off',
    'no-sequences'               : 'warn',
    'no-setter-return'           : 'warn',
    'no-shadow'                  : 'off',
    'no-shadow-restricted-names' : 'off',
    'no-spaced-func'             : 'off',
    'no-sparse-arrays'           : 'off',
    'no-sync'                    : 'off',
    'no-tabs'                    : 'warn',
    'no-template-curly-in-string': 'warn',
    'no-ternary'                 : 'off',
    'no-throw-literal'           : noThrowLiteral,
    'no-trailing-spaces'         : 'warn',
    'no-undef'                   : 'warn',
    'no-undef-init'              : 'off',
    'no-undefined'               : 'off',
    'no-underscore-dangle'       : [
      'warn',
      {
        'allowAfterThis': true,
      },
    ],
    'no-unexpected-multiline'         : 'warn',
    'no-unmodified-loop-condition'    : 'warn',
    'no-unneeded-ternary'             : 'warn',
    'no-unreachable'                  : 'warn',
    'no-unreachable-loop'             : 'warn',
    'no-unsafe-finally'               : 'off',
    'no-unsafe-negation'              : 'off',
    'no-unsafe-optional-chaining'     : 'warn',
    'no-unused-expressions'           : noUnusedExpressions,
    'no-unused-labels'                : 'warn',
    'no-unused-private-class-members' : 'warn',
    'no-unused-vars'                  : noUnusedVars,
    'no-use-before-define'            : noUseBeforeDefine,
    'no-useless-backreference'        : 'warn',
    'no-useless-call'                 : 'warn',
    'no-useless-catch'                : 'warn',
    'no-useless-concat'               : 'warn',
    'no-useless-escape'               : 'warn',
    'no-useless-return'               : 'warn',
    'no-void'                         : 'off',
    'no-warning-comments'             : 'off',
    'no-whitespace-before-property'   : 'warn',
    'no-with'                         : 'warn',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline'            : [
      'warn',
      {
        'ObjectExpression': {
          'consistent': true,
        },
        'ObjectPattern': {
          'consistent': true,
        },
        'ImportDeclaration': {
          'consistent': true,
        },
        'ExportDeclaration': 'never',
      },
    ],
    'object-curly-spacing': [
      'warn',
      'never',
    ],
    'object-property-newline': [
      'warn',
      {
        'allowAllPropertiesOnSameLine': true,
      },
    ],
    'one-var': [
      'warn',
      'never',
    ],
    'one-var-declaration-per-line': [
      'warn',
      'always',
    ],
    'operator-assignment': 'warn',
    'operator-linebreak' : [
      'warn',
      'before',
    ],
    'padded-blocks': [
      'warn',
      {
        'blocks'  : 'never',
        'switches': 'never',
        'classes' : 'never',
      },
    ],
    'padding-line-between-statements': [
      'warn',
      {
        'blankLine': 'always',
        'prev'     : 'cjs-import',
        'next'     : '*',
      },
      {
        'blankLine': 'never',
        'prev'     : 'cjs-import',
        'next'     : 'cjs-import',
      },
      {
        'blankLine': 'always',
        'prev'     : '*',
        'next'     : 'cjs-export',
      },
      {
        'blankLine': 'never',
        'prev'     : 'cjs-export',
        'next'     : 'cjs-export',
      },
      {
        'blankLine': 'always',
        'prev'     : 'export',
        'next'     : '*',
      },
      {
        'blankLine': 'always',
        'prev'     : 'export',
        'next'     : 'export',
      },
      {
        'blankLine': 'always',
        'prev'     : 'import',
        'next'     : '*',
      },
      {
        'blankLine': 'never',
        'prev'     : 'import',
        'next'     : 'import',
      },
      {
        'blankLine': 'always',
        'prev'     : '*',
        'next'     : 'block-like',
      },
      {
        'blankLine': 'always',
        'prev'     : 'block-like',
        'next'     : '*',
      },
      {
        'blankLine': 'always',
        'prev'     : '*',
        'next'     : 'block',
      },
      {
        'blankLine': 'always',
        'prev'     : 'block',
        'next'     : '*',
      },
      {
        'blankLine': 'always',
        'prev'     : '*',
        'next'     : 'if',
      },
      {
        'blankLine': 'always',
        'prev'     : 'if',
        'next'     : '*',
      },
    ],
    'prefer-exponentiation-operator': 'warn',
    'prefer-named-capture-group'    : 'off',
    'prefer-object-spread'          : 'warn',
    'prefer-promise-reject-errors'  : 'off',
    'prefer-reflect'                : 'off',
    'prefer-regex-literals'         : 'warn',
    'quote-props'                   : [
      'warn',
      'as-needed',
    ],
    'quotes': quotes,
    'radix' : [
      'warn',
      'as-needed',
    ],
    'require-atomic-updates': 'off',
    'require-unicode-regexp': 'off',
    'semi'                  : semi,
    'semi-spacing'          : 'warn',
    'semi-style'            : [
      'warn',
      'last',
    ],
    'sort-keys'          : 'off',
    'sort-vars'          : 'off',
    'space-before-blocks': [
      'warn',
      'always',
    ],
    'space-before-function-paren': [
      'warn',
      'never',
    ],
    'space-in-parens': [
      'warn',
      'never',
    ],
    'space-infix-ops': 'warn',
    'space-unary-ops': [
      'warn',
      {
        'words'   : true,
        'nonwords': false,
      },
    ],
    'spaced-comment': [
      'warn',
      'always',
      {
        'block': {
          'balanced': true,
        },
        'markers': [
          '/',
        ],
      },
    ],
    'strict'              : 'off',
    'switch-colon-spacing': 'warn',
    'template-tag-spacing': 'off',
    'unicode-bom'         : 'off',
    'use-isnan'           : 'off',
    'valid-typeof'        : 'warn',
    'vars-on-top'         : 'warn',
    'wrap-iife'           : 'off',
    'wrap-regex'          : 'warn',
    'yoda'                : [
      'warn',
      'never',
    ],
  },
};
