# MyParcel ESLint

This is a collection of ESLint configurations that we use at MyParcel. Each package can be installed via your favorite
package manager.

## Packages

### @myparcel-eslint/eslint-config

Dependencies

- [eslint]

> Read more: [Source](./packages/eslint-config)

### @myparcel-eslint/eslint-config-cypress

For Cypress code.

Dependencies

- [eslint-config-cypress]

> Read more: [Source](./packages/eslint-config-cypress)

### @myparcel-eslint/eslint-config-es5

For ES5 JavaScript.

Dependencies

- [@myparcel-eslint/eslint-config]

> Read more: [Source](./packages/eslint-config-es5)

### @myparcel-eslint/eslint-config-es6

For ES6 JavaScript.

Dependencies

- [@myparcel-eslint/eslint-config]

> Read more: [Source](./packages/eslint-config-es6)

### @myparcel-eslint/eslint-config-esnext

For ESNext JavaScript.

Dependencies

- [@myparcel-eslint/eslint-config-es6]

> Read more: [Source](./packages/eslint-config-esnext)

### @myparcel-eslint/eslint-config-node

For plain JavaScript Node.js projects.

> Read more: [Source](./packages/eslint-config-node)

### @myparcel-eslint/eslint-config-prettier

For plain JavaScript projects where you want to apply Prettier.

Dependencies

- [eslint]
- [prettier]

> Read more: [Source](./packages/eslint-config-prettier)

### @myparcel-eslint/eslint-config-prettier-typescript

For projects written in TypeScript where you want to apply Prettier.

Dependencies

- [@myparcel-eslint/eslint-config-prettier]
- [@myparcel-eslint/eslint-config-typescript]

> Read more: [Source](./packages/eslint-config-prettier-typescript)

### @myparcel-eslint/eslint-config-prettier-typescript-vue

For Vue 3 projects written in TypeScript where you want to apply Prettier.

Dependencies

- [@myparcel-eslint/eslint-config-prettier]
- [@myparcel-eslint/eslint-config-typescript]
- [@myparcel-eslint/eslint-config-vue]

> Read more: [Source](./packages/eslint-config-prettier-typescript-vue)

### @myparcel-eslint/eslint-config-prettier-vue

For plain JavaScript Vue 3 projects where you want to apply Prettier.

Dependencies

- [@myparcel-eslint/eslint-config-prettier]
- [@myparcel-eslint/eslint-config-vue]

> Read more: [Source](./packages/eslint-config-prettier-vue)

### @myparcel-eslint/eslint-config-tailwindcss

Can be combined with other configurations, for projects that use [Tailwind CSS](https://tailwindcss.com).

Dependencies

- [eslint-plugin-tailwindcss]

> Read more: [Source](./packages/eslint-config-tailwindcss)

### @myparcel-eslint/eslint-config-typescript

For projects written in TypeScript.

Dependencies

- [@myparcel-eslint/eslint-config-esnext]
- [@typescript-eslint/eslint-plugin]
- [@typescript-eslint/parser]

> Read more: [Source](./packages/eslint-config-typescript)

### @myparcel-eslint/eslint-config-typescript-vue

For Vue 3 projects written in TypeScript.

Dependencies

- [@myparcel-eslint/eslint-config-typescript]
- [@myparcel-eslint/eslint-config-vue]
- [@vue/eslint-config-typescript]
- [eslint-plugin-vue]

> Read more: [Source](./packages/eslint-config-typescript-vue)

### @myparcel-eslint/eslint-config-vue

For plain JavaScript Vue 3 projects. Mirrors [@myparcel-eslint/eslint-config-vue3].

Dependencies

- [@myparcel-eslint/eslint-config-vue3]

> Read more: [Source](./packages/eslint-config-vue)

### @myparcel-eslint/eslint-config-vue2

For plain JavaScript Vue 2 projects.

Dependencies

- [@myparcel-eslint/eslint-config-esnext]
- [eslint-plugin-vue]

> Read more: [Source](./packages/eslint-config-vue2)

### @myparcel-eslint/eslint-config-vue3

For plain JavaScript Vue 3 projects.

Dependencies

- [@myparcel-eslint/eslint-config-vue2]

> Read more: [Source](./packages/eslint-config-vue3)

[@myparcel-eslint/eslint-config-cypress]: #myparcel-eslinteslint-config-cypress
[@myparcel-eslint/eslint-config-es5]: #myparcel-eslinteslint-config-es5
[@myparcel-eslint/eslint-config-es6]: #myparcel-eslinteslint-config-es6
[@myparcel-eslint/eslint-config-es6]: https://www.npmjs.com/package/@myparcel-eslint/eslint-config-es6
[@myparcel-eslint/eslint-config-esnext]: #myparcel-eslinteslint-config-esnext
[@myparcel-eslint/eslint-config-esnext]: https://www.npmjs.com/package/@myparcel-eslint/eslint-config-esnext
[@myparcel-eslint/eslint-config-node]: #myparcel-eslinteslint-config-node
[@myparcel-eslint/eslint-config-prettier-typescript-vue]: #myparcel-eslinteslint-config-prettier-typescript-vue
[@myparcel-eslint/eslint-config-prettier-typescript]: #myparcel-eslinteslint-config-prettier-typescript
[@myparcel-eslint/eslint-config-prettier-vue]: #myparcel-eslinteslint-config-prettier-vue
[@myparcel-eslint/eslint-config-prettier]: #myparcel-eslinteslint-config-prettier
[@myparcel-eslint/eslint-config-prettier]: https://www.npmjs.com/package/@myparcel-eslint/eslint-config-prettier
[@myparcel-eslint/eslint-config-tailwindcss]: #myparcel-eslinteslint-config-tailwindcss
[@myparcel-eslint/eslint-config-typescript-vue]: #myparcel-eslinteslint-config-typescript-vue
[@myparcel-eslint/eslint-config-typescript]: #myparcel-eslinteslint-config-typescript
[@myparcel-eslint/eslint-config-typescript]: https://www.npmjs.com/package/@myparcel-eslint/eslint-config-typescript
[@myparcel-eslint/eslint-config-vue2]: #myparcel-eslinteslint-config-vue2
[@myparcel-eslint/eslint-config-vue2]: https://www.npmjs.com/package/@myparcel-eslint/eslint-config-vue2
[@myparcel-eslint/eslint-config-vue3]: #myparcel-eslinteslint-config-vue3
[@myparcel-eslint/eslint-config-vue3]: https://www.npmjs.com/package/@myparcel-eslint/eslint-config-vue3
[@myparcel-eslint/eslint-config-vue]: #myparcel-eslinteslint-config-vue
[@myparcel-eslint/eslint-config-vue]: https://www.npmjs.com/package/@myparcel-eslint/eslint-config-vue
[@myparcel-eslint/eslint-config]: #myparcel-eslinteslint-config
[@myparcel-eslint/eslint-config]: https://www.npmjs.com/package/@myparcel-eslint/eslint-config
[@typescript-eslint/eslint-plugin]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
[@typescript-eslint/parser]: https://www.npmjs.com/package/@typescript-eslint/parser
[@vue/eslint-config-typescript]: https://www.npmjs.com/package/@vue/eslint-config-typescript
[eslint-config-cypress]: https://www.npmjs.com/package/eslint-config-cypress
[eslint-plugin-tailwindcss]: https://www.npmjs.com/package/eslint-plugin-tailwindcss
[eslint-plugin-vue]: https://www.npmjs.com/package/eslint-plugin-vue
[eslint]: https://www.npmjs.com/package/eslint
[prettier]: https://www.npmjs.com/package/prettier
