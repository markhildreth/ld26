require(['game', 'engine'], function(game, engine) {
	"use strict";

	var canvas = document.getElementById('canvas');
	engine.run(game, canvas);
});
