# markdown-it-arc-static-img
Adds arc static paths to img tag src attributes when parsing markdown

## Usage

```js
const arcStaticImg = require('markdown-it-arc-static-img')
const md = require('markdown-it')()
  .use(arcStaticImg)
const imgMD = '![My Image](myimage.jpg)'
const result = md.render(imgMD)
```
