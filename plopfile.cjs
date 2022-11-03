/**
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = (plop) => {
  plop.setGenerator('package', {
    description: 'Generate package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of new package',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Type of new package',
        choices: ['config', 'plugin'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/eslint-{{ kebabCase type }}-{{ kebabCase name }}/src/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'packages/eslint-{{ kebabCase type }}-{{ kebabCase name }}/package.json',
        templateFile: 'plop-templates/package.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/eslint-{{ kebabCase type }}-{{ kebabCase name }}/index.js',
        templateFile: 'plop-templates/index.js.hbs',
      },
      {
        type: 'add',
        path: 'packages/eslint-{{ kebabCase type }}-{{ kebabCase name }}/README.md',
        templateFile: 'plop-templates/readme.md.hbs',
      },
    ],
  });
};
