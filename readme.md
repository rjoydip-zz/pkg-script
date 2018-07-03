# pkg-scripts [![Build Status](https://travis-ci.org/rjoydip/pkg-scripts.svg?branch=master)](https://travis-ci.org/rjoydip/pkg-scripts)

> Get package scripts.

## Install

```
$ npm i pkg-scripts
```

## Example

### import 1

```js
const pkgScripts = require('pkg-scripts')
```

### import 2

```js
const {PkgScripts} = require('pkg-dep')
const pkgScripts = new PkgScripts()
```

### Methods

```js
console.log(pkgScripts.getSync())
pkgScripts.get().then(res => console.log(res))
pkgScripts.has('dot-prop').then(res => console.log(res))
console.log(pkgScripts.hasSync('dot-prop'))
```

## API

### new PkgScripts() or pkgScripts()

Returns a `new` instance.

### pkgScripts.get()

Returns a `Promise` of scripts object.

### pkgScripts.getSync()

Returns scripts object.

### pkgScripts.has()

Returns a result(`Promise`) of typeof `boolean` whether a script exists or not.

### pkgScripts.hasSync()

Returns a result typeof `boolean` whether a script exists or not.

## License

MIT © [Joydip Roy (rjoydip)](https://github.com/rjoydip/pkg-scripts/blob/master/license.md)
