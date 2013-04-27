define(function() {
	var levels = {
		'0' : [
			'          ',
			'   _      ',
			'          ',
			'__S_______',
		],
	}

	return {
		loadLevel : function(g, levelName) {
			var level = levels[levelName];
			var height = level.length;

			g.level = {};
			for (var yIndex = 0; yIndex < level.length; yIndex = yIndex + 1) {
				var width = level[yIndex].length;
				var y = height - yIndex - 1;
				g.level[y] = {};

				for (var x = 0; x < width; x = x + 1) {
					var levelInfo = g.level[y][x] = {};

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
