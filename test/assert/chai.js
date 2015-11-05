var chai = require( "chai" );

QUnit.assert.custom( chai );

QUnit.module( "Custom assertions with chai", function() {
	QUnit.only( "chai.assert", function( t ) {
		chai.assert( 'Foo!', 'foo message' );
		chai.assert.strictEqual( 2, 2, 'bar message' );
		chai.assert.throws( function() {
			throw 'Error FOOBAR';
		});
		chai.assert.notOk( false );
	});

	// QUnit.test( "failure", function() {
	// 	chai.assert.strictEqual( 2, 3 );
	// });
});
