const fs = require('fs')
const path = require('path')
const variants = require('./variants')

const sourceDirectory = './src'

module.exports = () => {
  return variants.map((variant) => {
    let files = fs.readdirSync(sourceDirectory)

    // Remove ignored files
    if (variant.ignore && variant.ignore instanceof Array) {
      files = files.filter((file) => !variant.ignore.includes(file))
    }

    const contents = files.map((file) =>
      fs.readFileSync(path.resolve(sourceDirectory, file), 'utf8')
    )

    return contents.join('')
  })
}
