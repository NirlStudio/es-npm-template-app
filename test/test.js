var path = require('path')
var assert = require('assert')

var sugly = require('sugly')

// create the void.
var $void = sugly()
require('../profile')($void)

var appHome = path.resolve(__dirname, '../sugly/@')
console.log('appHome:', appHome)

describe('sugly/app', function () {
  $void.createBootstrapSpace(appHome)

  describe('run', function () {
    it('Running app.s with argument "World" returns "Hello, World"', function () {
      var message = $void.$run('sugly/app', ['World'])
      assert.strict.equal(message, 'Hello, World')
    })
  })
})
