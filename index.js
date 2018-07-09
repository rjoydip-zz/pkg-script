'use strict'

const path = require('path')
const chalk = require('chalk')
const pkgUp = require('pkg-up')
const readPkg = require('read-pkg')
const dotProp = require('dot-prop')
const fileExists = require('file-exists')

class PkgScript {
  constructor(opt) {
    this._options = opt || { cwd: process.cwd() }
    this._readPkg = this.$readPkg()
  }

  $readPkg() {
    return fileExists.sync(path.join(this._options.cwd, 'package.json')) ? readPkg.sync({ cwd: this._options.cwd }) : (console.log(chalk.red('No package.json found')), {})
  }

  config(option) {
    this._options = typeof option === 'object' ? option : {}
    this._readPkg = this.$readPkg()
    return this
  }

  _isString(value) {
    return typeof value === 'string'
  }

  _isExistsScripts() {
    return dotProp.has(this._readPkg, 'scripts')
  }

  _getScriptsObj() {
    return Object.keys(this._readPkg).length ? this._readPkg.scripts : {}
  }

  _get() {
    return this._isExistsScripts
      ? this._getScriptsObj()
      : 'No dependencies are there'
  }

  _has(name) {
    const _scripts = this._getScriptsObj()
    return _scripts[name] ? _scripts[name] : false
  }

  get() {
    return new Promise((resolve, reject) => {
      if (this._get()) return resolve(this._get())
      else return reject(new Error('No dependencies are there'))
    })
  }

  getSync() {
    return this._get()
  }

  has(name) {
    return new Promise((resolve, reject) => {
      if (this._isString(name)) {
        return resolve(!!this._has(name))
      } else {
        reject(new Error(`${name} not valid type`))
      }
    })
  }

  hasSync(name) {
    if (this._isString(name)) {
      return !!this._has(name)
    } else {
      return false
    }
  }
}

module.exports = Object.assign(new PkgScript(), { PkgScript })
