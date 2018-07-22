const sass = require('sass')

module.exports = contents => contents.map(
  content => sass.renderSync({
      data: content
  }).css.toString()
)
