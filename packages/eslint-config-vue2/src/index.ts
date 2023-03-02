import {arrayBracketNewline,
  arrayBracketSpacing,
  blockSpacing,
  braceStyle,
  camelcase,
  commaDangle,
  commaSpacing,
  commaStyle,
  dotLocation,
  dotNotation,
  eqeqeq,
  funcCallSpacing,
  keySpacing,
  keywordSpacing,
  maxLen,
  noEmptyPattern,
  noExtraParens,
  noIrregularWhitespace,
  noLossOfPrecision,
  noMultiSpaces,
  noRestrictedSyntax,
  noSparseArrays,
  noUnusedVars,
  objectCurlyNewline,
  objectCurlySpacing,
  objectPropertyNewline,
  operatorLinebreak,
  sortKeys,
  spaceInParens,
  spaceInfixOps,
  spaceUnaryOps} from '@myparcel-eslint/eslint-config';
import {arrowSpacing, preferTemplate, templateCurlySpacing} from '@myparcel-eslint/eslint-config-es6';
import {ESLint} from 'eslint';
import {overridePluginRule} from '@myparcel-eslint/utils';

require('@rushstack/eslint-patch/modern-module-resolution');

export const config: ESLint.ConfigData = {
  'env': {
    'node': true,
  },
  'extends': [
    '@myparcel-eslint/eslint-config-esnext',
    'plugin:vue/recommended',
  ],
  'parserOptions': {
    'allowImportExportEverywhere': true,
    'ecmaFeatures'               : {
      'jsx': true,
    },
    'extraFileExtensions': [
      '.vue',
    ],
    'sourceType': 'module',
  },
  'rules': {
    ...overridePluginRule('babel/object-curly-spacing', [
      'warn',
      'always',
    ]),
    ...overridePluginRule('jsdoc/no-undefined-types', [
      'warn',
      {
        'definedTypes': [
          'VNode',
          'webpack',
        ],
      },
    ]),

    'id-length': [
      'warn',
      {
        'exceptions': [
          '$',
          '_',
          'a',
          'b',
          'e',
          'h',
          'i',
          'v',
          'x',
          'y',
          'z',
        ],
      },
    ],
    'no-extra-parens': [
      'warn',
      'all',
      {
        'nestedBinaryExpressions': false,
      },
    ],
    'operator-linebreak': [
      'warn',
      'before',
    ],

    'vue/array-bracket-newline'            : arrayBracketNewline,
    'vue/array-bracket-spacing'            : arrayBracketSpacing,
    'vue/arrow-spacing'                    : arrowSpacing,
    'vue/attribute-hyphenation'            : 'error',
    'vue/attributes-order'                 : 'warn',
    'vue/block-lang'                       : 'off',
    'vue/block-spacing'                    : blockSpacing,
    'vue/block-tag-newline'                : 'error',
    'vue/brace-style'                      : braceStyle,
    'vue/camelcase'                        : camelcase,
    'vue/comma-dangle'                     : commaDangle,
    'vue/comma-spacing'                    : commaSpacing,
    'vue/comma-style'                      : commaStyle,
    'vue/comment-directive'                : 'error',
    'vue/component-api-style'              : 'off',
    'vue/component-definition-name-casing' : 'warn',
    'vue/component-name-in-template-casing': [
      'warn',
      'PascalCase',
      {
        'registeredComponentsOnly': true,
      },
    ],
    'vue/component-tags-order': [
      'warn',
      {
        'order': [
          'template',
          'script',
          'style',
        ],
      },
    ],
    'vue/custom-event-name-casing'    : 'error',
    'vue/dot-location'                : dotLocation,
    'vue/dot-notation'                : dotNotation,
    'vue/eqeqeq'                      : eqeqeq,
    'vue/first-attribute-linebreak'   : 'error',
    'vue/func-call-spacing'           : funcCallSpacing,
    'vue/html-button-has-type'        : 'error',
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        'singleline': 'never',
        'multiline' : 'never',
      },
    ],
    'vue/html-closing-bracket-spacing'             : 'warn',
    'vue/html-comment-content-newline'             : 'warn',
    'vue/html-comment-content-spacing'             : 'warn',
    'vue/html-comment-indent'                      : 'warn',
    'vue/html-end-tags'                            : 'error',
    'vue/html-indent'                              : 'warn',
    'vue/html-quotes'                              : 'warn',
    'vue/html-self-closing'                        : 'warn',
    'vue/jsx-uses-vars'                            : 'warn',
    'vue/key-spacing'                              : keySpacing,
    'vue/keyword-spacing'                          : keywordSpacing,
    'vue/match-component-file-name'                : 'warn',
    'vue/max-attributes-per-line'                  : 'warn',
    'vue/max-len'                                  : maxLen,
    'vue/multi-word-component-names'               : 'off',
    'vue/multiline-html-element-content-newline'   : 'warn',
    'vue/mustache-interpolation-spacing'           : 'warn',
    'vue/new-line-between-multi-line-property'     : 'warn',
    'vue/next-tick-style'                          : 'warn',
    'vue/no-arrow-functions-in-watch'              : 'error',
    'vue/no-async-in-computed-properties'          : 'error',
    'vue/no-bare-strings-in-template'              : 'warn',
    'vue/no-boolean-default'                       : 'warn',
    'vue/no-child-content'                         : 'error',
    'vue/no-computed-properties-in-data'           : 'error',
    'vue/no-constant-condition'                    : 'error',
    'vue/no-custom-modifiers-on-v-model'           : 'error',
    'vue/no-deprecated-data-object-declaration'    : 'warn',
    'vue/no-deprecated-destroyed-lifecycle'        : 'warn',
    'vue/no-deprecated-dollar-listeners-api'       : 'warn',
    'vue/no-deprecated-dollar-scopedslots-api'     : 'warn',
    'vue/no-deprecated-events-api'                 : 'warn',
    'vue/no-deprecated-filter'                     : 'warn',
    'vue/no-deprecated-functional-template'        : 'warn',
    'vue/no-deprecated-html-element-is'            : 'warn',
    'vue/no-deprecated-inline-template'            : 'warn',
    'vue/no-deprecated-props-default-this'         : 'warn',
    'vue/no-deprecated-router-link-tag-prop'       : 'warn',
    'vue/no-deprecated-scope-attribute'            : 'warn',
    'vue/no-deprecated-slot-attribute'             : 'warn',
    'vue/no-deprecated-slot-scope-attribute'       : 'warn',
    'vue/no-deprecated-v-bind-sync'                : 'warn',
    'vue/no-deprecated-v-is'                       : 'warn',
    'vue/no-deprecated-v-on-native-modifier'       : 'warn',
    'vue/no-deprecated-v-on-number-modifiers'      : 'warn',
    'vue/no-deprecated-vue-config-keycodes'        : 'warn',
    'vue/no-dupe-keys'                             : 'error',
    'vue/no-dupe-v-else-if'                        : 'warn',
    'vue/no-duplicate-attr-inheritance'            : 'warn',
    'vue/no-duplicate-attributes'                  : 'warn',
    'vue/no-empty-component-block'                 : 'warn',
    'vue/no-empty-pattern'                         : noEmptyPattern,
    'vue/no-export-in-script-setup'                : 'error',
    'vue/no-expose-after-await'                    : 'error',
    'vue/no-extra-parens'                          : noExtraParens,
    'vue/no-irregular-whitespace'                  : noIrregularWhitespace,
    'vue/no-lifecycle-after-await'                 : 'error',
    'vue/no-lone-template'                         : 'warn',
    'vue/no-loss-of-precision'                     : noLossOfPrecision,
    'vue/no-multi-spaces'                          : noMultiSpaces,
    'vue/no-multiple-objects-in-class'             : 'error',
    'vue/no-multiple-slot-args'                    : 'error',
    'vue/no-multiple-template-root'                : 'error',
    'vue/no-mutating-props'                        : 'error',
    'vue/no-parsing-error'                         : 'error',
    'vue/no-potential-component-option-typo'       : 'error',
    'vue/no-ref-as-operand'                        : 'error',
    'vue/no-reserved-component-names'              : 'error',
    'vue/no-reserved-keys'                         : 'error',
    'vue/no-reserved-props'                        : 'error',
    'vue/no-restricted-block'                      : 'off',
    'vue/no-restricted-call-after-await'           : 'off',
    'vue/no-restricted-class'                      : 'off',
    'vue/no-restricted-component-options'          : 'off',
    'vue/no-restricted-custom-event'               : 'off',
    'vue/no-restricted-props'                      : 'off',
    'vue/no-restricted-static-attribute'           : 'off',
    'vue/no-restricted-syntax'                     : noRestrictedSyntax,
    'vue/no-restricted-v-bind'                     : 'off',
    'vue/no-setup-props-destructure'               : 'error',
    'vue/no-shared-component-data'                 : 'warn',
    'vue/no-side-effects-in-computed-properties'   : 'warn',
    'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
    'vue/no-sparse-arrays'                         : noSparseArrays,
    'vue/no-static-inline-styles'                  : 'warn',
    'vue/no-template-key'                          : 'error',
    'vue/no-template-shadow'                       : 'error',
    'vue/no-template-target-blank'                 : 'warn',
    'vue/no-textarea-mustache'                     : 'error',
    'vue/no-this-in-before-route-enter'            : 'error',
    'vue/no-undef-components'                      : 'warn',
    'vue/no-undef-properties'                      : 'off',
    'vue/no-unsupported-features'                  : 'error',
    'vue/no-unused-components'                     : 'warn',
    'vue/no-unused-properties'                     : 'warn',
    'vue/no-unused-refs'                           : 'warn',
    'vue/no-unused-vars'                           : noUnusedVars,
    'vue/no-use-computed-property-like-method'     : 'error',
    'vue/no-use-v-if-with-v-for'                   : 'warn',
    'vue/no-useless-concat'                        : 'warn',
    'vue/no-useless-mustaches'                     : 'warn',
    'vue/no-useless-template-attributes'           : 'warn',
    'vue/no-useless-v-bind'                        : 'warn',
    'vue/no-v-for-template-key'                    : 'error',
    'vue/no-v-for-template-key-on-child'           : 'off',
    'vue/no-v-html'                                : 'warn',
    'vue/no-v-model-argument'                      : 'off',
    'vue/no-v-text'                                : 'off',
    'vue/no-watch-after-await'                     : 'error',
    'vue/object-curly-newline'                     : objectCurlyNewline,
    'vue/object-curly-spacing'                     : objectCurlySpacing,
    'vue/object-property-newline'                  : objectPropertyNewline,
    'vue/one-component-per-file'                   : 'error',
    'vue/operator-linebreak'                       : operatorLinebreak,
    'vue/order-in-components'                      : 'warn',
    'vue/padding-line-between-blocks'              : 'warn',
    'vue/prefer-template'                          : preferTemplate,
    'vue/prop-name-casing'                         : 'warn',
    'vue/require-component-is'                     : 'error',
    'vue/require-default-prop'                     : 'warn',
    'vue/require-direct-export'                    : 'off',
    'vue/require-emit-validator'                   : 'off',
    'vue/require-explicit-emits'                   : 'warn',
    'vue/require-expose'                           : 'off',
    'vue/require-name-property'                    : 'warn',
    'vue/require-prop-type-constructor'            : 'warn',
    'vue/require-prop-types'                       : 'warn',
    'vue/require-render-return'                    : 'error',
    'vue/require-slots-as-functions'               : 'off',
    'vue/require-toggle-inside-transition'         : 'error',
    'vue/require-v-for-key'                        : 'error',
    'vue/require-valid-default-prop'               : 'warn',
    'vue/return-in-computed-property'              : 'error',
    'vue/return-in-emits-validator'                : 'error',
    'vue/script-indent'                            : 'off',
    'vue/script-setup-uses-vars'                   : 'warn',
    'vue/singleline-html-element-content-newline'  : 'warn',
    'vue/sort-keys'                                : sortKeys,
    'vue/space-in-parens'                          : spaceInParens,
    'vue/space-infix-ops'                          : spaceInfixOps,
    'vue/space-unary-ops'                          : spaceUnaryOps,
    'vue/static-class-names-order'                 : 'warn',
    'vue/template-curly-spacing'                   : templateCurlySpacing,
    'vue/this-in-template'                         : 'error',
    'vue/use-v-on-exact'                           : 'warn',
    'vue/v-bind-style'                             : 'warn',
    'vue/v-for-delimiter-style'                    : 'warn',
    'vue/v-on-event-hyphenation'                   : [
      'warn',
      'never',
    ],
    'vue/v-on-function-call'    : 'warn',
    'vue/v-on-style'            : 'warn',
    'vue/v-slot-style'          : 'warn',
    'vue/valid-define-emits'    : 'error',
    'vue/valid-define-props'    : 'error',
    'vue/valid-model-definition': 'error',
    'vue/valid-next-tick'       : 'error',
    'vue/valid-template-root'   : 'error',
    'vue/valid-v-bind'          : 'error',
    'vue/valid-v-bind-sync'     : 'error',
    'vue/valid-v-cloak'         : 'error',
    'vue/valid-v-else'          : 'error',
    'vue/valid-v-else-if'       : 'error',
    'vue/valid-v-for'           : 'error',
    'vue/valid-v-html'          : 'error',
    'vue/valid-v-if'            : 'error',
    'vue/valid-v-is'            : 'error',
    'vue/valid-v-memo'          : 'error',
    'vue/valid-v-model'         : 'error',
    'vue/valid-v-on'            : 'error',
    'vue/valid-v-once'          : 'error',
    'vue/valid-v-pre'           : 'error',
    'vue/valid-v-show'          : 'error',
    'vue/valid-v-slot'          : 'error',
    'vue/valid-v-text'          : 'error',
  },
};
