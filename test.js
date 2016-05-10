var test = require('tape')
var hsv = require('./index')

test('it works', function (assert) {
  assert.plan(3)
  assert.deepEqual(hsv(219, 152, 52), [36, 76, 86])
  assert.deepEqual(hsv(52, 219, 152), [156, 76, 86])
  assert.deepEqual(hsv(52, 152, 219), [204, 76, 86])
})
