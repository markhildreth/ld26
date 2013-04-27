define(function() {
	var levels = {
		'0' : [
			'                ',
			'   _            ',
			'                ',
			'__S_____________',
		],
		'1' : [
			'     _RRR_      ',
			' E              ',
			'   _ST___       ',
			'                ',
			'__S____S______E_',
		],
	}

	return {
		loadLevel : function(g, levelName) {
			var level = levels[levelName];
			var height = level.length;

			g.level = {};
			g.level.height = level.length;
			g.level.width = level[0].length;
			g.level.teleporters = [];
			g.level.trapsRemaining = 0;
			var levelData = g.level.data = {};

			for (var yIndex = 0; yIndex < level.length; yIndex = yIndex + 1) {
				var width = level[yIndex].length;
				var y = height - yIndex - 1;
				levelData[y] = {};

				for (var x = 0; x < width; x = x + 1) {
					var levelInfo = levelData[y][x] = {};

					var typeChar = level[yIndex][x];
					if (typeChar === '_') {
						levelInfo.type = 'ground';
					} else if (typeChar === 'S') {
						levelInfo.type = 'spring';
					} else if (typeChar === 'T') {
						levelInfo.type = 'trap';
					} else if (typeChar === 'R') {
						levelInfo.type = 'rickity';
					} else if (typeChar === 'E') {
						levelInfo.type = 'teleporter';
						g.level.teleporters.push({x: x, y: y});
					} else {
						levelInfo.type = 'air';
					}

					if (levelInfo.type === 'spring' ||
						levelInfo.type === 'trap' ||
						levelInfo.type == 'rickity' ||
						levelInfo.type == 'teleporter')
					{
						g.level.trapsRemaining = g.level.trapsRemaining + 1;
					}
				}
			}
		}
	}
});
