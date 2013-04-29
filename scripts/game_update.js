define(function() {
	// In milliseconds
	ANIMATION_TIMES = {
		'walk' : 300,
		'spring' : 200,
		'fall' : 200
	};

	return {
		reversePlot : function(g) {
			if (g.plotState > 0) {
				g.plotState = g.plotState - 1;
			}
		},

		advancedPlot : function(g) {
			var plotLength;

			if (g.state === 'intro') {
				plotLength = g.level.introPlot.length;
			} else if (g.state === 'outro' ) {
				plotLength = g.level.outroPlot.length;
			}
			if (g.plotState === plotLength - 1) {
				if (g.state === 'outro') {
					if (g.levelNumber !== 21) {
						g.state = 'level_complete';
					}
				} else if (g.state === 'intro') {
					g.state = 'game';
				}
			} else {
				g.plotState = g.plotState + 1;
			}
		},

		playerMoveLeft : function(g) {
			g.player.facingLeft = true;
			if (g.player.x === 0) return;

			var start = +new Date();
			g.animation = {
				type : 'walk',
				destX : g.player.x - 1,
				destY : g.player.y,
				start : start,
				stop : start + ANIMATION_TIMES.walk
			};
		},

		playerMoveRight : function(g) {
			g.player.facingLeft = false;
			if (g.player.x >= g.level.width - 1) return;

			var start = +new Date();
			g.animation = {
				type : 'walk',
				destX : g.player.x + 1,
				destY : g.player.y,
				start : start,
				stop : start + ANIMATION_TIMES.walk
			};
		},

		updateAnimation : function(g) {
			if (g.animation) {
				if ((+new Date()) >= g.animation.stop) {
					g.player.x = g.animation.destX;
					g.player.y = g.animation.destY;
					g.animation = null;
				}
			}
		},

		playerAutoMove : function(g) {
			if (g.animation) return;
			var info = g.level.data[g.player.y][g.player.x];
			var start = +new Date();
			var xOffset;
			if (info.type === 'spring') {
				if (g.player.facingLeft) {
					xOffset = -1;
				} else {
					xOffset = 1;
				}

				g.animation = {
					type : 'spring',
					destX : g.player.x + xOffset,
					destY : g.player.y + 2,
					start : start,
					stop : start + ANIMATION_TIMES.spring
				};
				info.type = 'ground';
				g.level.trapsRemaining = g.level.trapsRemaining - 1;
			} else if (info.type === 'trap') {
				g.animation = {
					type : 'fall',
					destX : g.player.x,
					destY : g.player.y - 1,
					start : start,
					stop : start + ANIMATION_TIMES.fall
				};
				info.type = 'ground';
				g.level.trapsRemaining = g.level.trapsRemaining - 1;
			} else if (info.type === 'rickity') {
				if (g.player.facingLeft) {
					xOffset = -1;
				} else {
					xOffset = 1;
				}
				g.animation = {
					type : 'walk',
					destX : g.player.x + xOffset,
					destY : g.player.y,
					start : start,
					stop : start + ANIMATION_TIMES.walk
				};
				info.type = 'air';
				g.level.trapsRemaining = g.level.trapsRemaining - 1;
			} else if (info.type === 'teleporter') {
				var teleporter1 = g.level.teleporters[0];
				var teleporter2 = g.level.teleporters[1];

				if (teleporter1.x === g.player.x && teleporter1.y === g.player.y) {
					g.player.x = teleporter2.x;
					g.player.y = teleporter2.y;
				} else {
					g.player.x = teleporter1.x;
					g.player.y = teleporter1.y;
				}

				g.level.data[teleporter1.y][teleporter1.x].type = 'ground';
				g.level.data[teleporter2.y][teleporter2.x].type = 'ground';
				g.level.trapsRemaining = g.level.trapsRemaining - 2;
			} else if (info.type === 'air') {
				g.animation = {
					type : 'fall',
					destX : g.player.x,
					destY : g.player.y - 1,
					start: start,
					stop: start + ANIMATION_TIMES.fall
				};
			}
		}
	};
});
