# Buttons

Flat, colorful buttons to be used in every part of your site

## Mixins

### Main

#### `button($background, $text)`

Creates a solid-fill button with an animation on hover and click

##### Usage

```scss
@use "stormy-scss/components" as stormy-components;

// Variable names don't matter
$primary: orangered;
$primaryContent: white;

.btn, .btn-primary {
  @include stormy-components.button($primary, $primaryContent);
}
```

------

#### `button-outlined($color)`

Creates an outlined button with a transparent background and an animation on hover and click

##### Usage

```scss
@use "stormy-scss/components" as stormy-components;

// Variable names don't matter
$primary: orangered;

.btn, .btn-primary {
  @include stormy-components.button-outlined($primary);
}
```

### Utilities

#### `disable-animation-button`

Disables the hover and click animations. Must be used with one of the other mixins
