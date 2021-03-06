(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

	function effect () {
		console.log( 'effect' );
	}

	switch ( globalVar ) {
		case foo:
		case bar:
			effect();
			
			if ( globalVar > 1 ) {
				break;
			}
		case baz:
			effect();
		default:
			
	}

	switch ( globalVar ) {
		case foo:
			
			break;
		case bar:
			effect();
		default:
			effect();
	}

	(function nestedSwitchWithEffects () {
		switch ( globalVar ) {
			default:
				effect();
		}
	}());

})));
