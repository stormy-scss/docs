# Families

Sets a font family value with a nice font stack of a specific font type, as well as allows you to set your custom value

## Mixins

### Normal

- `family-system`: User's system font
- `family-sans-serif`: Sans-serif style font
- `family-serif`: Serif style font
- `family-mono`: Monospace font
- `family-custom($fonts...)`: Custom font names

### Google fonts

- `family-roboto`: Roboto with `sans-serif` fallback (**needs import**)
- `family-roboto-mono`: Roboto mono with `monospace` fallback (**needs import**)
- `google-font($family)`: Imports a font from Google fonts. Should be used at the top of your file.