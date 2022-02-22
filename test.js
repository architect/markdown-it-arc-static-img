const test = require('tape')
process.env.ARC_ENV = 'testing'
const staticImgSrc = require('.')
const md = require('markdown-it')()
  .use(staticImgSrc)

test('Static img src should exist', t => {
  t.plan(1)
  t.ok(staticImgSrc, 'staticImgSrc exists')
})

test('should update img src with arc static helper', t => {
  t.plan(1)
  const imgMD = '![My Image](myimage.jpg)'
  const result = md.render(imgMD)
  const expected = /_static\/myimage\.jpg/
  t.ok(expected.test(result), 'Updated img src attribute with arc.static helper')
})

test('should not blow up when inline element has no attributes', t => {
  t.plan(1)
  const span = '<span></span>'
  const result = md.render(span)
  t.ok(result, 'Did not esploder')
  delete process.env.ARC_ENV
})
