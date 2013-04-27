define(function() {
	var levels = {
		'0' : [
			'                ',
			'   _            ',
			'                ',
			'__S_____________',
		],
	}

	return {
		loadLevel : function(g, levelName) {
			var level = levels[levelName];
			var height = level.length;

			g.level = {};
			g.level.height = level.length;
			g.level.width = level[0].length;
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
					} else {
						levelInfo.type = 'air';
					}
				}
			}
		}
	}
});
