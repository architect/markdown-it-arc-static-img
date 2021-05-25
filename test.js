const test = require('tape')
const staticImgSrc = require('.')
const md = require('markdown-it')()
  .use(staticImgSrc)

test('Static img src should exist', t => {
  t.ok(staticImgSrc, 'staticImgSrc exists')
  t.end()
})

test('should parse img', t => {
  const imgMD = '![My Image](myimage.jpg)'
  const result = md.render(imgMD)
  t.ok(result, result, 'Parsed image markdown')
  t.end()
})

