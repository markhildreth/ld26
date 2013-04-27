define(['graphics', 'levels', 'game_draw', 'game_update',], function(gfx, levels, game_draw, game_update) {
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
					moveRight : false,
				},
			};
			levels.loadLevel(g, 0);

			return g;
		},

		draw : function(g, ctx, ass) {
			gfx.clear(ctx, "black");

			game_draw.drawGame(g, ctx);

			if (g.state == 'intro') {
				game_draw.drawPlot(g, ctx);
			}
		},

		events : function(g) {
			var lookup = {};
			var keydown = lookup.keydown = {};
			keydown[KEY_LEFT] = function(g) {g.actions.moveLeft = true; };
			keydown[KEY_RIGHT] = function(g) { g.actions.moveRight = true; };
			return lookup;
		},

		update : function(g, delta) {
			if (g.actions.moveLeft) {
				game_update.gamePlayerMoveLeft(g);
			}

			if (g.actions.moveRight) {
				game_update.gamePlayerMoveRight(g);
			}

			game_update.playerAutoMove(g);

			g.actions.moveLeft = false;
			g.actions.moveRight = false;
		}
	};
});
