define(['graphics', 'levels', 'game_draw', 'game_update'], function(gfx, levels, game_draw, game_update) {
	"use strict";

	var KEY_LEFT = 37,
		KEY_RIGHT = 39,
		KEY_S = 83,
		KEY_N = 78,
		KEY_R = 82;

	return {
		init : function(ass) {
			game_draw.init(ass);
		},

		create : function () {
			var g = {
				level : null,
				player : {
					x : 0,
					y : 0,
					facingLeft : false
				},
				actions : {
					moveLeft : false,
					moveRight : false,
					skipLevel : false,
					skipToOutro : false,
					restartLevel : false,
				}
			};
			levels.loadLevel(g, 0);

			return g;
		},

		draw : function(g, ctx, ass) {
			game_draw.drawBackground(g, ctx);

			if (g.state !== 'outro' || g.levelNumber != 21) {
				game_draw.drawGame(g, ctx);
			}

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
				if (g.state === 'game') {
					keydown[KEY_R] = function(g) { g.actions.restartLevel = true; }
				}
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

			if (g.state === 'game' && g.level.trapsRemaining === 0 && g.animation === null) {
				g.state = 'outro';
				g.plotState = 0;
			}

			if (!g.animation && g.actions.skipToOutro) {
				g.state = 'outro';
				g.plotState = 0;
				g.actions.skipToOutro = false;
			}

			if (g.actions.restartLevel) {
				levels.loadLevel(g, g.levelNumber);
				g.actions.restartLevel = false;
			}

			if (!g.animation && g.actions.skipLevel) {
				levels.loadLevel(g, g.levelNumber + 1);
				g.actions.skipLevel = false;
			}

			if (g.state === 'level_complete') {
				levels.loadLevel(g, g.levelNumber + 1);
			}
		}
	};
});
