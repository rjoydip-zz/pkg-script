const pkgScripts = require('.')

// const {PkgScripts} = require('.')
// const pkgScripts = new PkgScripts()

console.log(pkgScripts.getSync())
pkgScripts.get().then(res => console.log(res))
pkgScripts.has('test').then(res => console.log(res))
console.log(pkgScripts.hasSync('test'))
