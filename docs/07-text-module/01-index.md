---
sidebar_label: Module info
---

# Text module

The text module contains text size, alignment, and container mixins (not to be confused with [the container module](../container-module/index))

To use it, write `@use "stromy-scss/text" as stromy-text;` and `@include` the mixins.

## Changes

This module used to live in [the main module](../main-module/index) with all the mixins prefixed with `text-`. This prefix has been removed **except** for the `text-container` and `text-container-small` mixins, so it doesn't cause a collision with the container module mixins.
