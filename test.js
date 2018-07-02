const pkgScripts = require('.')

test('getSync', () => {
  expect(typeof pkgScripts.getSync()).toBe('object')
})

test('get', () => {
  pkgScripts.get().then(res => expect(typeof res).toBe('object'))
})

test('has true case', () => {
  pkgScripts.has('test').then(res => expect(res).toEqual(true))
})

test('has false case', () => {
  pkgScripts.has('test-1').then(res => expect(res).toEqual(false))
})

test('hasSync true case', () => {
  expect(pkgScripts.hasSync('test')).toEqual(true)
})

test('hasSync false case', () => {
  expect(pkgScripts.hasSync('test-1')).toEqual(false)
})

test('hasSync except string', () => {
  expect(pkgScripts.hasSync([])).toEqual(false)
})

test('has except string', () => {
  pkgScripts.has([]).catch(err => expect(() => {
    throw err
  }).toThrow())
})
