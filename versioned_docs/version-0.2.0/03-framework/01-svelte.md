# Svelte

If you're using a standalone `.scss`, there's no extra configuration needed. 
However, if you want to use it inside components, you have to do some setup with `svelte-preprocess`

## Setup `includePaths` with `svelte-preprocess`

We assume you already have `svelte-preprocess` installed and set-up, if not, check out [this article](https://github.com/sveltejs/svelte-preprocess/blob/main/docs/getting-started.md) to get it set-up

Once it's setup, modify your call to `sveltePreprocess` to look like this:

```js
sveltePreprocess({
  scss: {
    includePaths: ["node_modules/stormy-scss/dist"]
  },
  /* Your other options*/
})
```

You should now be able to import Stormy in your components like this:

```html
<!-- Your markup -->
<style lang="scss">
@use "stormy";
@use "stormy/text" as stormy-text;

.foo {
  @include stormy.shadow();
}
</style>
```

*Note that the import is "stormy", not "stormy-scss"* 
