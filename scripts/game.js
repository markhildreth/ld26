define(['graphics', 'assets', 'levels'], function(gfx, assets, levels) {
	"use strict";

	var G2C2D = function(d) {
		return [d[0], 600 - d[1]]
	};
	var KEY_LEFT = 37,
		KEY_RIGHT = 39;
	var ROBOT_URL = 'media/robot.png';
	var GROUND_URL = 'media/ground.png';

	var LEVEL_ASSET_MAP = {
		'spring' : 'media/spring.png',
		'rickity' : 'media/rickity.png',
		'trap' : 'media/trap.png',
		'teleporter' : 'media/teleporter.png',
	};

	var SHOULD_DRAW_GROUND = {
		'ground' : true,
		'spring' : true,
		'rickity' : false,
		'teleporter' : true,
		'trap' : false,
	};


	return {
		init : function(ass) {
			assets.loadAsset(ass, ROBOT_URL);
			assets.loadAsset(ass, GROUND_URL);
			assets.loadAsset(ass, 'media/spring.png');
			assets.loadAsset(ass, 'media/rickity.png');
			assets.loadAsset(ass, 'media/trap.png');
			assets.loadAsset(ass, 'media/teleporter.png');
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

		draw : function(g, ctx, ass) {
			gfx.clear(ctx, "white");

			var OFFSET = 50;

			var drawArea = function(x, y, info) {
				var dest = G2C2D([x * OFFSET + (OFFSET / 2), y * OFFSET + (OFFSET / 2)])
				
				if (SHOULD_DRAW_GROUND[info.type]) {
					gfx.draw(ctx, GROUND_URL, dest);
				}

				if (info.type === 'ground') return;
					
				var assetUrl = LEVEL_ASSET_MAP[info.type];
				gfx.draw(ctx, assetUrl, dest);
			}

			for (var y = 0; y < g.level.height; y = y + 1) {
				for (var x = 0; x < g.level.width; x = x + 1) {
					var level = g.level.data[y][x];
					if (level.type !== 'air') {
						drawArea(x, y, level);
					}
				}
			}

			var playerDest = G2C2D([g.player.x * OFFSET + (OFFSET / 2), g.player.y * OFFSET + (OFFSET / 2)])
			gfx.draw(ctx, ROBOT_URL, playerDest);
			/*gfx.drawRectangle(ctx, playerDest, OFFSET, OFFSET / 2, "blue");*/
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
				} else if (info.type ===  'teleporter') {
					var teleporter1 = g.level.teleporters[0];
					var teleporter2 = g.level.teleporters[1];

					g.level.data[teleporter1.y][teleporter1.x].type = 'ground';
					g.level.data[teleporter2.y][teleporter2.x].type = 'ground';
					if (teleporter1.x === g.player.x && teleporter1.y === g.player.y) {
						g.player.x = teleporter2.x;
						g.player.y = teleporter2.y;
					} else {
						g.player.x = teleporter1.x;
						g.player.y = teleporter1.y;
					}
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
