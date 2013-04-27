define(['graphics', 'assets'], function(gfx, assets) {
	"use strict";

	var G2C2D = function(d) {
		return [d[0], 600 - d[1]]
	};
	var KEY_LEFT = 37,
		KEY_RIGHT = 39;


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
				player : {
					x : 0,
					y : 1
				},
				actions : {
					moveLeft : false,
					moveRight : false,
				},
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

			var playerDest = G2C2D([g.player.x * OFFSET + 25, g.player.y * 50 + 25])
			gfx.drawSquare(ctx, playerDest, OFFSET - 20, "blue");
		},

		events : function(g) {
			var lookup = {};
			var keydown = lookup.keydown = {};
			keydown[KEY_LEFT] = function(g) { g.actions.moveLeft = true; };
			keydown[KEY_RIGHT] = function(g) { g.actions.moveRight = true; };
			return lookup;
		},

		update : function(g, delta) {
			if (g.actions.moveLeft) {
				g.player.x = g.player.x - 1
			}

			if (g.actions.moveRight) { 
				g.player.x = g.player.x + 1
			}

			var info = g.level[g.player.y - 1][g.player.x];
			while (info.type !== 'ground') {
				if (info.type === 'spring') {
					info.type = 'ground';
					g.player.y = g.player.y + 2;
					if (g.actions.moveLeft) {
						g.player.x = g.player.x - 1;
					} else {
						g.player.x = g.player.x + 1;
					}
				} else if (info.type === 'air') {
					g.player.y = g.player.y - 1;
				}

				info = g.level[g.player.y - 1][g.player.x];
			}

			g.actions.moveLeft = false;
			g.actions.moveRight = false;
		}
	};
});
