const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const destinationDirectory = './dist'

module.exports = (content, name) => {
  mkdirp(destinationDirectory)
  fs.writeFileSync(path.join(destinationDirectory, name), content)
}
