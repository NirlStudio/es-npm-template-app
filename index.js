'use strict'

var path = require('path')
var sugly = require('sugly')

// create the void.
var $void = sugly()
require('./profile')($void)

// running as an app.
var args = global.process.argv.slice(2) || []
var srcHome = path.join(__dirname, 'sugly')
module.exports = $void.$run('app', args, srcHome)
