define(function() {
	"use strict";

	var actions = [];

	window.addEventListener('keydown', function(evt) {
		actions.push({'type' : 'keydown', 'key' : evt.keyCode});
	}, true);

	window.addEventListener('keyup', function(evt) {
		actions.push({'type' : 'keyup', 'key' : evt.keyCode});
	}, true);

	return {
		each : function(f) {
			while (actions.length > 0) {
				var action = actions.shift();
				f(action);
			}
		}
	};
});
