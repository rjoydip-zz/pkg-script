const pkgScript = require('../')

pkgScript.config({
  cwd: __dirname
})

pkgScript.hasSync('test')