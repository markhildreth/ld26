define(['assets', 'graphics'], function(assets, gfx) {
	var G2C2D = function(d) {
		return [d[0], 600 - d[1]];
	};

	var PLOT_WINDOW_CORNER = [200, 100];
	var PLOT_WINDOW_WIDTH = 600;
	var PLOT_WINDOW_HEIGHT = 200;

	var ROBOT_URL = 'media/robot.png';
	var GROUND_URL = 'media/ground.png';

	var BACKGROUND_GROUND_URL = 'media/background_ground.png';
	var BACKGROUND_STARS_URL = 'media/background_stars.png';

	var LEVEL_ASSET_MAP = {
		'spring' : 'media/spring.png',
		'rickity' : 'media/rickity.png',
		'trap' : 'media/trap.png',
		'teleporter' : 'media/teleporter.png'
	};

	var SHOULD_DRAW_GROUND = {
		'ground' : true,
		'spring' : true,
		'rickity' : false,
		'teleporter' : true,
		'trap' : false
	};

	var ANIMATION_TIME = 0;
	var ANIMATIONS = {
		walk : function(startX, startY, endX, endY, completion) {
			var x = startX + ((endX - startX) * completion);
			var y = startY;
			return [x, y];
		},
		fall : function(startX, startY, endX, endY, completion) {
			var x = startX;
			var y = startY - ((startY - endY) * completion);
			return [x, y];
		},
		spring : function(startX, startY, endX, endY, completion) {
			var x = startX + ((endX - startX) * completion);
			var y = startY - ((startY - endY) * completion);
			return [x, y];
		}
	};


	return {
		init : function(ass) {
			assets.loadAsset(ass, ROBOT_URL);
			assets.loadAsset(ass, GROUND_URL);

			assets.loadAsset(ass, 'media/robot_face.png');
			assets.loadAsset(ass, 'media/man_face.png');
			assets.loadAsset(ass, 'media/unknown_face.png');

			assets.loadAsset(ass, 'media/spring.png');
			assets.loadAsset(ass, 'media/rickity.png');
			assets.loadAsset(ass, 'media/trap.png');
			assets.loadAsset(ass, 'media/teleporter.png');

			assets.loadAsset(ass, BACKGROUND_GROUND_URL);
			assets.loadAsset(ass, BACKGROUND_STARS_URL);
		},

		drawBackground : function(g, ctx) {
			//gfx.clear(ctx, "black");
			gfx.draw(ctx, BACKGROUND_STARS_URL, [25, 25]);
			gfx.draw(ctx, BACKGROUND_GROUND_URL, [25, 25]);
		},

		drawGame : function(g, ctx) {
			// Draw the actual level
			var OFFSET = 50;

			var drawArea = function(x, y, info) {
				var dest = G2C2D([x * OFFSET + (OFFSET / 2), y * OFFSET + (OFFSET / 2)]);
				
				if (SHOULD_DRAW_GROUND[info.type]) {
					gfx.draw(ctx, GROUND_URL, dest);
				}

				if (info.type === 'ground') return;
					
				var assetUrl = LEVEL_ASSET_MAP[info.type];
				gfx.draw(ctx, assetUrl, dest);
			};

			for (var y = 0; y < g.level.height; y = y + 1) {
				for (var x = 0; x < g.level.width; x = x + 1) {
					var level = g.level.data[y][x];
					if (level.type !== 'air') {
						drawArea(x, y, level);
					}
				}
			}

			// Game coordinates
			var playerLoc;
			if (g.animation) {
				var animationFunc = ANIMATIONS[g.animation.type];
				var ticks = +new Date();
				var completion = (ticks - g.animation.start) / (g.animation.stop - g.animation.start);
				playerLoc = animationFunc(g.player.x, g.player.y, g.animation.destX, g.animation.destY, completion);
			} else {
				playerLoc = [g.player.x, g.player.y];
			}

			var playerDest = G2C2D([playerLoc[0] * OFFSET + (OFFSET / 2), playerLoc[1] * OFFSET + (OFFSET / 2)]);
			gfx.draw(ctx, ROBOT_URL, playerDest, 0, g.player.facingLeft);
			gfx.drawText(ctx, "Level: " + (g.levelNumber + 1), [0, 0], "white");
			gfx.drawText(ctx, "Devices Left: " + g.level.trapsRemaining, [0, 20], "white");
		},

		drawPlot : function(g, ctx) {
			var currentPlot;
			if (g.state === 'intro') {
				currentPlot = g.level.introPlot[g.plotState];
			} else if (g.state === 'outro') {
				currentPlot = g.level.outroPlot[g.plotState];
			}

			// TODO: Make this better
			gfx.drawRectangle(ctx, PLOT_WINDOW_CORNER, PLOT_WINDOW_WIDTH, PLOT_WINDOW_HEIGHT, "white");
			var faceDest = [240, 150];
			if (currentPlot.c) {
				gfx.draw(ctx, currentPlot.c.face, faceDest);
				gfx.drawText(ctx, currentPlot.c.name + ":", [PLOT_WINDOW_CORNER[0] + 170, PLOT_WINDOW_CORNER[1] + 20], "black");
			}
			for (var line = 0; line < currentPlot.t.length; line = line + 1) {
				gfx.drawText(ctx, currentPlot.t[line], [PLOT_WINDOW_CORNER[0] + 180, PLOT_WINDOW_CORNER[1] + 50 + (line * 25)], "black");
			}
		}
	};
});
