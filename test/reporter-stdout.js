/*jshint node:true*/
global.QUnit = require( "../dist/qunit" );

// Options: { output: "minimal" || "verbose" }
QUnit.stdout();

// Load QUnit tests
require( "./logs" );
require( "./test" );
require( "./assert" );
require( "./async" );
require( "./promise" );
require( "./modules" );
require( "./deepEqual" );
require( "./globals" );
require( "./globals-node" );

module.exports = QUnit.done;

QUnit.load();
