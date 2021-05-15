# Alignment

Allows you to change the alignment of your text. 

## Mixins

- `align-left`
- `align-right`
- `align-center`
- `align-justify`

## Note

The `align-left` and `align-right` uses the values `start` and `end` respectively, which means it will automatically flip around on RTL content (if the `dir` attribute exists, [see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) for more info). This should cause no issues, however if it does, please use `text-align: <direction>` instead.
