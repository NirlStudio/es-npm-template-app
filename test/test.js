var path = require('path')
var assert = require('assert')

var sugly = require('sugly')
var modules = require('sugly/modules')

// expose some native modules.
modules.register(require('../modules.js'))

// create the void.
var $void = sugly()
var appHome = path.resolve(__dirname, '../sugly/@')
console.log('appHome:', appHome)

describe('sugly/app', function () {
  $void.createBootstrapSpace(appHome)

  describe('run', function () {
    it('Running app.s returns "Hello, World"', function () {
      var message = $void.$run('sugly/app', ['World'])
      assert.strict.equal(message, 'Hello, World')
    })
  })
})
