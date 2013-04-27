define(['graphics', 'assets', 'levels'], function(gfx, assets, levels) {
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
				level : null,
				player : {
					x : 0,
					y : 0
				},
				actions : {
					moveLeft : false,
					moveRight : false,
				},
			};
			levels.loadLevel(g, '1');

			return g;
		},

		draw : function(g, ctx) {
			gfx.clear(ctx);

			var OFFSET = 50;

			var drawArea = function(x, y, info) {
				var color;
				if (info.type === 'ground') {
					color = "brown";
				} else if (info.type === 'spring') {
					color = "green";
				} else if (info.type === 'trap') {
					color = "red";
				} else if (info.type === 'rickity') {
					color = "yellow";
				} else {
					return;
				}

				var dest = G2C2D([x * OFFSET, y * OFFSET + (OFFSET / 2)])
				gfx.drawRectangle(ctx, dest, OFFSET, OFFSET / 2, color);
			}

			for (var y = 0; y < g.level.height; y = y + 1) {
				for (var x = 0; x < g.level.width; x = x + 1) {
					var type = g.level.data[y][x];
					drawArea(x, y, type);
				}
			}

			var playerDest = G2C2D([g.player.x * OFFSET, g.player.y * OFFSET + OFFSET])
			gfx.drawRectangle(ctx, playerDest, OFFSET, OFFSET / 2, "blue");
		},

		events : function(g) {
			var lookup = {};
			var keydown = lookup.keydown = {};
			keydown[KEY_LEFT] = function(g) {g.actions.moveLeft = true; };
			keydown[KEY_RIGHT] = function(g) { g.actions.moveRight = true; };
			return lookup;
		},

		update : function(g, delta) {
			if (g.actions.moveLeft && g.player.x > 0) {
				g.player.x = g.player.x - 1
			}

			if (g.actions.moveRight && g.player.x < g.level.width - 1) { 
				g.player.x = g.player.x + 1
			}

			var info = g.level.data[g.player.y][g.player.x];
			while (info.type !== 'ground') {
				if (info.type === 'spring') {
					g.player.y = g.player.y + 2;
					if (g.actions.moveLeft) {
						g.player.x = g.player.x - 1;
					} else {
						g.player.x = g.player.x + 1;
					}
					info.type = 'ground';
				} else if (info.type === 'trap') {
					g.player.y = g.player.y - 1;
					info.type = 'ground';
				} else if (info.type === 'rickity') {
					if (g.actions.moveLeft) {
						g.player.x = g.player.x - 1;
					} else {
						g.player.x = g.player.x + 1;
					}
					info.type = 'air';
				} else if (info.type === 'air') {
					g.player.y = g.player.y - 1;
				}

				info = g.level.data[g.player.y][g.player.x];
			}

			g.actions.moveLeft = false;
			g.actions.moveRight = false;
		}
	};
});
