QUnit.module( "assert.step" );

QUnit.test( "step does not count as an assertion", function( assert ) {
	assert.ok( true );
	assert.step( "1" );
	assert.ok( true );
	assert.ok( true );
	assert.step( "42" );
} );
