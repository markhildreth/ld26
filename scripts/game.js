define(['graphics', 'assets'], function(gfx, assets) {
	"use strict";

	var G2C2D = function(d) {
		return [d[0], 600 - d[1]]
	};


	return {
		init : function(ass) {
		},

		create : function () {
			var g = {
				level : [
					[
						{type : 'ground'},
						{type : 'ground'},
						{type : 'spring', active: false},
						{type : 'ground'},
						{type : 'ground'},
						{type : 'ground'},
					],
					[
						{type : 'air'},
						{type : 'air'},
						{type : 'air'},
						{type : 'air'},
						{type : 'air'},
						{type : 'air'},
					],
					[
						{type : 'air'},
						{type : 'air'},
						{type : 'air'},
						{type : 'ground'},
						{type : 'air'},
						{type : 'air'},
					],
				],
				player : [0, 1],
			};

			return g;
		},

		draw : function(g, ctx) {
			gfx.clear(ctx);

			var HEIGHT = 3;
			var WIDTH = 6; 

			var OFFSET = 50;

			var drawArea = function(x, y, info) {
				var color;
				if (info.type == 'ground') {
					color = "brown";
				} else if (info.type == 'spring') {
					color = "green";
				} else {
					return;
				}

				var dest = G2C2D([x * OFFSET + 25, y * 50 + 25])
				gfx.drawSquare(ctx, dest, OFFSET, color);
			}

			for (var y = 0; y < HEIGHT; y = y + 1) {
				for (var x = 0; x < WIDTH; x = x + 1) {
					var type = g.level[y][x];
					drawArea(x, y, type);
				}
			}

			var playerDest = G2C2D([g.player[0] * OFFSET + 25, g.player[1] * 50 + 25])
			gfx.drawSquare(ctx, playerDest, OFFSET - 20, "blue");
		},

		events : function(g) {
			var lookup = {};
			/*
			var keydown = lookup.keydown = {};
			keydown[KEY_UP] =function(g) { g.player.propulsing = true; }; 
			keydown[KEY_LEFT] = function(g) { g.player.rotatingLeft = true; };
			keydown[KEY_RIGHT] = function(g) { g.player.rotatingRight = true; };

			var keyup = lookup.keyup = {};
			keyup[KEY_UP] = function(g) { g.player.propulsing = false; };
			keyup[KEY_LEFT] = function(g) { g.player.rotatingLeft = false; };
			keyup[KEY_RIGHT] = function(g) { g.player.rotatingRight = false; };
			*/
			return lookup;
		},

		update : function(g, delta) {
		}
	};
});
