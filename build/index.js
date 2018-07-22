const contents = require('./contents')
const sass = require('./sass')
const postcss = require('./postcss')
const write = require('./write')

postcss(sass(contents()), write)
