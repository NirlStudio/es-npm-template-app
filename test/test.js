var path = require('path')
var assert = require('assert')

var espresso = require('eslang')

// create the void.
var $void = espresso()
require('../profile')($void)

var appHome = path.resolve(__dirname, '../es/@')
console.log('appHome:', appHome)

describe('es/app', function () {
  $void.createBootstrapSpace(appHome)

  describe('run', function () {
    it('Running app.s with argument "World" returns "Hello, World"', function () {
      var message = $void.$run('es/app', ['World'])
      assert.strict.equal(message, 'Hello, World')
    })
  })
})
