import {Linter} from 'eslint';

export const noMagicNumbers: Linter.RuleLevelAndOptions = [
  'warn',
  {
    'ignore': [
      -1,
      0,
      1,
      100,
    ],
    'detectObjects': true,
    'enforceConst' : true,
  },
];

export const arrowSpacing: Linter.RuleLevelAndOptions = [
  'warn',
  {
    'before': true,
    'after' : true,
  },
];

export const noUselessConstructor: Linter.RuleEntry = 'off';

export const preferTemplate: Linter.RuleEntry = 'warn';

export const requireAwait: Linter.RuleEntry = 'warn';

export const templateCurlySpacing: Linter.RuleEntry = 'warn';

export const config: Linter.Config = {
  'extends'      : '@myparcel-eslint/eslint-config',
  'parserOptions': {
    'ecmaVersion': 6,
  },
  'rules': {
    'arrow-body-style' : 'off',
    'arrow-parens'     : 'warn',
    'arrow-spacing'    : arrowSpacing,
    'constructor-super': 'off',
    'func-names'       : [
      'warn',
      'as-needed',
    ],
    'generator-star-spacing'   : 'off',
    'no-async-promise-executor': 'warn',
    'no-await-in-loop'         : 'off',
    'no-class-assign'          : 'off',
    'no-confusing-arrow'       : 'warn',
    'no-const-assign'          : 'warn',
    'no-dupe-class-members'    : 'warn',
    'no-duplicate-imports'     : 'warn',
    'no-magic-numbers'         : noMagicNumbers,
    'no-new-symbol'            : 'off',
    'no-restricted-imports'    : 'off',
    'no-return-await'          : 'warn',
    'no-this-before-super'     : 'off',
    'no-useless-computed-key'  : 'off',
    'no-useless-constructor'   : noUselessConstructor,
    'no-useless-rename'        : 'warn',
    'no-var'                   : 'warn',
    'object-shorthand'         : 'off',
    'prefer-arrow-callback'    : 'off',
    'prefer-const'             : 'warn',
    'prefer-destructuring'     : [
      'warn',
      {
        'VariableDeclarator': {
          'array' : false,
          'object': true,
        },
        'AssignmentExpression': {
          'array' : false,
          'object': false,
        },
      },
    ],
    'prefer-numeric-literals': 'off',
    'prefer-rest-params'     : 'off',
    'prefer-spread'          : 'warn',
    'prefer-template'        : preferTemplate,
    'require-await'          : requireAwait,
    'require-yield'          : 'off',
    'rest-spread-spacing'    : 'off',
    'sort-imports'           : 'warn',
    'symbol-description'     : 'off',
    'template-curly-spacing' : templateCurlySpacing,
    'yield-star-spacing'     : 'off',
  },
};
