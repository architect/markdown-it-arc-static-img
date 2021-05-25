const test = require('tape')
const staticImgSrc = require('.')
const md = require('markdown-it')()
  .use(staticImgSrc)

test('Static img src should exist', t => {
  t.ok(staticImgSrc, 'staticImgSrc exists')
  t.end()
})

test('should update img src with arc static helper', t => {
  const imgMD = '![My Image](myimage.jpg)'
  const result = md.render(imgMD)
  const expected = /_static\/myimage\.jpg/
  t.ok(expected.test(result), result, 'Parsed image markdown')
  t.end()
})
