const { static } = require('@architect/functions')

module.exports = function staticImgSrc(md) {
  md.core.ruler.push('arc-static', state => {
    const tokens = state.tokens
    tokens && tokens.forEach((token) => {
      if (token.type === 'inline') {
        const children = token.children
        children && children.forEach(kid => {
          const attrs = kid.attrs
          attrs && attrs.forEach(attr => {
            if(attr[0] === 'src')  {
              attr[1] = static(attr[1])
            }
          })
        })
      }
    })
  })
}
