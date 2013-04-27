define(['graphics', 'assets', 'events'], function(gfx, assets, events) {
	"use strict";

	var requestAnimationFrame = window.requestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame;

	return {
		run : function(game, canvas) {
			var ass = assets.create();
			var gfx_ctx = gfx.create(canvas, ass);

			game.init(ass);
			var g = game.create(ass);

			var lastFrame = +new Date();
			var updateFunc = function() {
				var thisFrame = +new Date();
				var delta = thisFrame - lastFrame;
				lastFrame = thisFrame;

				var eventLookup = game.events(g);

				events.each(function(x) {
					if (x['type'] === 'keydown') {
						var keyLookup = eventLookup['keydown'];
						if (keyLookup) {
							var keyEvent = keyLookup[x['key']];
							if (keyEvent) {
								keyEvent(g);
							}
						}
					}
					if (x['type'] === 'keyup') {
						var keyLookup = eventLookup['keyup'];
						if (keyLookup) {
							var keyEvent = keyLookup[x['key']];
							if (keyEvent) {
								keyEvent(g);
							}
						}
					}
				});

				game.update(g, delta);
			};

			var drawFunc = function() {
				game.draw(g, gfx_ctx);
				requestAnimationFrame(drawFunc);
			};

			setInterval(updateFunc, 10);
			requestAnimationFrame(drawFunc);
		}
	};
});