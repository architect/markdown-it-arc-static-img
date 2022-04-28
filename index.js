const { static } = require('@architect/functions')
const externalPattern = /^((http|https):\/\/)/

module.exports = function staticImgSrc(md) {
  md.core.ruler.push('arc-static', forTokens)
}

const forTokens = state => {
  const tokens = state.tokens
  tokens && tokens.forEach(forInline)
}

const forInline = token => {
  if (token.type === 'inline') {
    const children = token.children
    children && children.forEach(forAttributes)
  }
}

const forAttributes = kid => {
  const attrs = kid.attrs
  attrs && attrs.forEach(mutateSrcAttribute)
}

const mutateSrcAttribute = attr => {
  if(attr[0] === 'src')  {
    if (!externalPattern.test(attr[1])) {
      attr[1] = static(attr[1], { stagePath: false })
    }
  }
}
