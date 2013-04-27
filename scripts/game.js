define(['graphics', 'levels', 'game_draw', 'game_update'], function(gfx, levels, game_draw, game_update) {
	"use strict";

	var KEY_LEFT = 37,
		KEY_RIGHT = 39;

	return {
		init : function(ass) {
			game_draw.init(ass);
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
					moveRight : false
				}
			};
			levels.loadLevel(g, 0);

			return g;
		},

		draw : function(g, ctx, ass) {
			gfx.clear(ctx, "black");

			game_draw.drawGame(g, ctx);

			if (g.state === 'intro' || g.state === 'outro') {
				game_draw.drawPlot(g, ctx);
			}
		},

		events : function(g) {
			var lookup = {};
			var keydown = lookup.keydown = {};
			if (!g.animation) {
				keydown[KEY_LEFT] = function(g) { g.actions.moveLeft = true; };
				keydown[KEY_RIGHT] = function(g) { g.actions.moveRight = true; };
			}

			return lookup;
		},

		update : function(g, delta) {
			if (g.actions.moveLeft) {
				if (g.state === 'intro' || g.state === 'outro') {
					game_update.reversePlot(g);
				} else if (g.state === 'game') {
					game_update.playerMoveLeft(g);
				}
			}

			if (g.actions.moveRight) {
				if (g.state === 'intro' || g.state === 'outro') {
					game_update.advancedPlot(g);
				} else if (g.state === 'game') {
					game_update.playerMoveRight(g);
				}
			}

			game_update.updateAnimation(g);
			game_update.playerAutoMove(g);

			g.actions.moveLeft = false;
			g.actions.moveRight = false;

			if (g.state === 'game' && g.level.trapsRemaining === 0) {
				g.state = 'outro';
				g.plotState = 0;
			}

			if (g.state === 'level_complete') {
				var newLevelNumber = g.levelNumber + 1;
				levels.loadLevel(g, newLevelNumber);
			}
		}
	};
});
