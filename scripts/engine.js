define(['graphics', 'assets', 'events'], function(gfx, assets, events) {
	"use strict";

	var requestAnimationFrame = window.requestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(/* function */ callback){
                window.setTimeout(callback, 1000 / 60);
            };

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
					var keyLookup;
					var keyEvent;

					if (x.type === 'keydown') {
						keyLookup = eventLookup.keydown;
						if (keyLookup) {
							keyEvent = keyLookup[x.key];
							if (keyEvent) {
								keyEvent(g);
							}
						}
					}
					if (x.type === 'keyup') {
						keyLookup = eventLookup.keyup;
						if (keyLookup) {
							keyEvent = keyLookup[x.key];
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
