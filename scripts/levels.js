define(function() {
	var OLD_MAN = {
		name : 'Old Man',
		face : 'media/robot_face.png',
	};

	var ROBOT = {
		name : 'Robot',
		face : 'media/robot_face.png',
	};

	var levels = [
		{
			introPlot : [
				{c : OLD_MAN, t : "What's up?"},
				{c : ROBOT, t : "NM, you?"},
			],
			data : [
				'                    ',
				'   _                ',
				'                    ',
				'__S_________________',
			],
			outroPlot : [
				{c : OLD_MAN, t : "So you think you're something special?"},
				{c : ROBOT, t : "Yeah, what's your point?"},
			],
		},
		{
			introPlot : [
				{c : OLD_MAN, t : "Alright smart guy, figure this one out"},
			],
			data : [
				'     _RRR_          ',
				' E                  ',
				'   _ST___           ',
				'                    ',
				'__S____S______E_____',
			],
			outroPlot : [
				{c : ROBOT, t : 'VICTORY!'},
			],
		},
	];

	return {
		loadLevel : function(g, levelNumber) {
			var level = levels[levelNumber];
			var height = level.data.length;
			var width = level.data[0].length;

			g.levelNumber = levelNumber;
			g.level = {};
			g.level.height = height;
			g.level.width = width;
			g.level.teleporters = [];
			g.level.trapsRemaining = 0;
			g.state = 'intro';
			g.level.introPlot = level.introPlot;
			g.level.outroPlot = level.outroPlot;
			g.plotState = 0;
			var levelData = g.level.data = {};

			for (var yIndex = 0; yIndex < height; yIndex = yIndex + 1) {
				var y = height - yIndex - 1;
				levelData[y] = {};

				for (var x = 0; x < width; x = x + 1) {
					var levelInfo = levelData[y][x] = {};

					var typeChar = level.data[yIndex][x];
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
