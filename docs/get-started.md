---
sidebar_position: 2
sidebar_label: Get started
---

# Getting started

Stormy is mixin-based, which means nothing is included unless you use it. However, since it's written with Sass you **must** also use it with Sass.

## Requirements

- Dart Sass
- Appropriate build setup 

Stormy is guaranteed to work with Vite because it's our development server, it might break on other setups

## Installation & usage

- Install it using `npm i -D stormy-scss`, `yarn add -D stormy-scss`, or `pnpm i -D stormy-scss`
- `@use` it in your Sass files: `@use "stormy-scss";` or `@use "stormy-scss" as stormy;`
- `@include` your mixins in your classes

### Full example

```scss
@use "stormy-scss" as stormy;

.flex-col {
  @include stormy.flex-col;
}
```

The rest of the docs will assume you used Stormy as `@use "stromy-scss" as stormy;`, and any submodules as `@use "stormy-scss/<submodule>" as stormy-<submodule>;`
