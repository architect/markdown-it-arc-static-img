const { static } = require('@architect/functions')

module.exports = function staticImgSrc(md) {
  md.core.ruler.push('arc-static', state => {
    const tokens = state.tokens
    tokens.forEach((token) => {
      if (token.type === 'inline') {
        token.children.forEach(kid => {
          const attrs = kid.attrs
          attrs.forEach(attr => {
            if(attr[0] === 'src')  {
              attr[1] = static(attr[1])
            }
          })
        })
      }
    })
  })
}
