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
  t.ok(expected.test(result), 'Updated img src attribute with arc.static helper')
  t.end()
})

test('should not blow up when inline element has no attributes', t => {
  const span = '<span></span>'
  const result = md.render(span)
  t.ok(result, 'Did not esploder')
  t.end()
})
