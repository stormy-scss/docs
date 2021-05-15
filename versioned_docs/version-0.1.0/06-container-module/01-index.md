---
sidebar_label: Module info
---

# Container module

The container module exports a mixin that sets the max width of the element to the min width of the current media query breakpoint

To use it, write `@use "stormy-scss/container" as stormy-container;` and follow the usage guide below

## Important note 

This module uses the query module internally, so it must be used via `@use` before the query module. To configure the query module, you can pass your breakpoints to it the same way you did with the query module

## Usage

The module exports 4 mixins: 

- `container - width: 100% // AND all the other ones`
- `container-tablet - max-width: $breakpoint-mobile + 1px;`
- `container-laptop - max-width: $breakpoint-tablet + 1px;`
- `container-desktop - max-width: $breakpoint-desktop + 1px;`

The one you want to use is `container`, but the others are intentionally not private in case you need to use them. To use them, simply `@include` it in your class.