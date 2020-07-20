const postcss = require('postcss')
const tagsWithoutClass = require('postcss-tags-without-class')
const variants = require('./variants')

module.exports = (contents, write) => {
  contents.forEach((content, index) => {
    const variant = variants[index]
    const plugins = variant.optOut ? [tagsWithoutClass] : []

    postcss(plugins)
      .process(content, { from: undefined, to: `dist/${variant.name}` })
      .then((result) => {
        write(result.css, variant.name)
      })
  })
}
