# rgb-hsv

Convert RGB values to HSV. This is essentially the rgb2hsv function found in [pqx/color-functions](https://github.com/pqx/color-functions), however this module returns an array rather than an dictionary.

[![Build status](https://travis-ci.org/michaelrhodes/rgb-hsv.svg?branch=master)](https://travis-ci.org/michaelrhodes/rgb-hsv)

## Install
```sh
$ npm install rgb-hsv
```

## API
```js
hsv(r, g, b)
```

### Example
``` js
var hsv = require('rgb-hsv')

hsv(219, 152, 52)
> [36, 76, 86]

hsv.apply(null, [219, 152, 52])
> [36, 76, 86]
```

### License
[MIT](http://opensource.org/licenses/MIT)
