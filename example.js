const pkgScript = require('.')

// const {PkgScript} = require('.')
// const pkgScript = new PkgScript()

console.log(pkgScript.getSync())
pkgScript.get().then(res => console.log(res))
pkgScript.has('test').then(res => console.log(res))
console.log(pkgScript.hasSync('test'))
