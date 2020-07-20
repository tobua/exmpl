const { existsSync, mkdirSync } = require('fs')
const contents = require('./contents')
const sass = require('./sass')
const postcss = require('./postcss')
const write = require('./write')

const distDirectory = './dist'

// Create /dist directory.
if (!existsSync(distDirectory)) {
  mkdirSync(distDirectory)
}

postcss(sass(contents()), write)
