# Usage
## Configuration

There are 4 breakpoints that the module uses, their names and default values are below

```scss
$breakpoint-mobile: 360px;
$breakpoint-tablet: 768px;
$breakpoint-laptop: 1024px;
$breakpoint-desktop: 1280px;
```

If you want to keep these values, just `@use` the module without any configuration.
To change the values, you can use the below example and substitute your values:

```scss
@use "stormy-scss/query" as stormy-query with (
  $breakpoint-mobile: <mobile>;
  $breakpoint-tablet: <tablet>;
  $breakpoint-laptop: <laptop>;
  $breakpoint-desktop: <desktop>;
);
```

## Query mixin types

For each breakpoint there are 3 mixin types:

- `max-<device>`: 
```scss
  @media only screen and (max-width: $breakpoint-<device>) {
    // Content
  }
```
- `min-<device>`:
```scss
  @media only screen and (min-width: $breakpoint-<device>) {
    // Content
  }
```

- `between-<device>-<bigger device>`:
```scss
 @media only screen and (min-width: $breakpoint-<device>) and (max-width: $breakpoint-<bigger device>) {
    // Content
  }
```

## Using the media queries

To use a media query, `@include` it and put your CSS inside curly-brackets

### Example

```scss
@use "stormy-scss/query" as stormy-query;

.only-on-mobile {
  display: none;
  @include stormy-query.max-mobile {
    display: block;
  }
}
```

## Custom breakpoint

You can't change the names of the mixins, but we also provide 3 mixins to use custom breakpoint values:

- `min-custom($breakpoint)`
- `max-custom($breakpoint)`
- `between-custom($breakpoint-start, $breakpoint-end)`

You can create custom mixins that use them, too, so you can customize the name of the mixin:

```scss
@use "stormy-scss/query" as stormy-query;

$breakpoint-md: 768px;

@mixin max-md {
  @include stormy-query.max-custom($breakpoint-md) {
    @content;
  }
}

.md-and-less {
  display: none;
  @include max-md {
    display: block;
  }
}

```
