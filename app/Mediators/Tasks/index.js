const fs = use('fs')

const mediators = {}
const directory = __dirname
const path = directory.substring(directory.indexOf('Mediators'))

fs.readdirSync(directory)
  .filter((element) => element !== 'index.js')
  .map((element) =>
    Object.assign(mediators, {
      [element.slice(0, -3)]: use(`App/${path}/${element.slice(0, -3)}`)
    })
  )

module.exports = mediators
