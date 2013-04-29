define(function() {
	"use strict";

	var actions = [];

	var onKeyDown = function(evt) {
		actions.push({'type' : 'keydown', 'key' : evt.keyCode});
	};

	var onKeyUp = function(evt) {
		actions.push({'type' : 'keyup', 'key' : evt.keyCode});
	};

	if (window.addEventListener) {
		window.addEventListener('keydown', onKeyDown, true);
		window.addEventListener('keyup', onKeyUp, true);
	} else {
		window.attachEvent('keydown', onKeyDown);
		window.attachEvent('keyup', onKeyDown);
	}

	return {
		each : function(f) {
			while (actions.length > 0) {
				var action = actions.shift();
				f(action);
			}
		}
	};
});
