define(['assets', 'graphics'], function(assets, gfx) {
	var G2C2D = function(d) {
		return [d[0], 600 - d[1]];
	};

	var PLOT_WINDOW_CORNER = [200, 100];
	var PLOT_WINDOW_WIDTH = 600;
	var PLOT_WINDOW_HEIGHT = 200;

	var ROBOT_URL = 'media/robot.png';
	var GROUND_URL = 'media/ground.png';

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


	return {
		init : function(ass) {
			assets.loadAsset(ass, ROBOT_URL);
			assets.loadAsset(ass, GROUND_URL);

			assets.loadAsset(ass, 'media/robot_face.png');
			assets.loadAsset(ass, 'media/man_face.png');

			assets.loadAsset(ass, 'media/spring.png');
			assets.loadAsset(ass, 'media/rickity.png');
			assets.loadAsset(ass, 'media/trap.png');
			assets.loadAsset(ass, 'media/teleporter.png');
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
				gfx.drawText(ctx, "Traps Left: " + g.level.trapsRemaining, [0, 0]);
			};

			for (var y = 0; y < g.level.height; y = y + 1) {
				for (var x = 0; x < g.level.width; x = x + 1) {
					var level = g.level.data[y][x];
					if (level.type !== 'air') {
						drawArea(x, y, level);
					}
				}
			}

			var playerDest = G2C2D([g.player.x * OFFSET + (OFFSET / 2), g.player.y * OFFSET + (OFFSET / 2)]);
			gfx.draw(ctx, ROBOT_URL, playerDest);
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
			gfx.draw(ctx, currentPlot.c.face, faceDest);
			gfx.drawText(ctx, currentPlot.c.name + ":", [PLOT_WINDOW_CORNER[0] + 170, PLOT_WINDOW_CORNER[1] + 20], "black");
			gfx.drawText(ctx, currentPlot.t, [PLOT_WINDOW_CORNER[0] + 200, PLOT_WINDOW_CORNER[1] + 50], "black");
		}
	};
});
