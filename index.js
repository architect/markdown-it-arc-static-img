const { static } = require('@architect/functions')

module.exports = function staticImgSrc(md, opts) {
  console.log('STATIC IMAGE SRC CALLED')
  /*
  loop over tokens
  update img src with arc.static
  if ('you find an img tag') {
    img.src = static(img.src)
  }
  */
  return md
}
