# pkg-script [![Build Status](https://travis-ci.org/rjoydip/pkg-script.svg?branch=master)](https://travis-ci.org/rjoydip/pkg-script)

> Get package scripts

## Install

```
$ npm i pkg-script
```

## Example

### import 1

```js
const pkgScript = require('pkg-script')
```

### import 2

```js
const {pkgScript} = require('pkg-script')
const pkgScript = new pkgScript()
```

### Methods

```js
console.log(pkgScript.getSync())
pkgScript.get().then(res => console.log(res))
pkgScript.has('dot-prop').then(res => console.log(res))
console.log(pkgScript.hasSync('dot-prop'))
```

## API

### new pkgScript() or pkgScript()

Returns a `new` instance.

### pkgScript.get()

Returns a `Promise` of scripts object.

### pkgScript.getSync()

Returns scripts object.

### pkgScript.has()

Returns a result(`Promise`) of typeof `boolean` whether a script exists or not.

### pkgScript.hasSync()

Returns a result typeof `boolean` whether a script exists or not.

## License

MIT © [Joydip Roy (rjoydip)](https://github.com/rjoydip/pkg-script/blob/master/license.md)
