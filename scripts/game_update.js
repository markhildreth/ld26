define(function() {
	return {
		gamePlayerMoveLeft : function(g) {
			if (g.player.x > 0) {
				g.player.x = g.player.x - 1;
			}
		},

		gamePlayerMoveRight : function(g) {
			if (g.player.x < g.level.width - 1) {
				g.player.x = g.player.x + 1;
			}
		},

		playerAutoMove : function(g) {
			var info = g.level.data[g.player.y][g.player.x];
			while (info.type !== 'ground') {
				if (info.type === 'spring') {
					g.player.y = g.player.y + 2;
					if (g.actions.moveLeft) {
						g.player.x = g.player.x - 1;
					} else {
						g.player.x = g.player.x + 1;
					}
					g.level.trapsRemaining = g.level.trapsRemaining - 1;
					info.type = 'ground';
				} else if (info.type === 'trap') {
					g.player.y = g.player.y - 1;
					info.type = 'ground';
					g.level.trapsRemaining = g.level.trapsRemaining - 1;
				} else if (info.type === 'rickity') {
					if (g.actions.moveLeft) {
						g.player.x = g.player.x - 1;
					} else {
						g.player.x = g.player.x + 1;
					}
					info.type = 'air';
					g.level.trapsRemaining = g.level.trapsRemaining - 1;
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
					g.level.trapsRemaining = g.level.trapsRemaining - 2;
				} else if (info.type === 'air') {
					g.player.y = g.player.y - 1;
				}

				info = g.level.data[g.player.y][g.player.x];
			}
		},
	}
});
