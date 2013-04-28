define(function() {
	var UNKNOWN = {
		name : 'Unknown',
		face : 'media/unknown_face.png'
	};

	var GENERAL = {
		name : 'General Mann',
		face : 'media/man_face.png'
	};

	var ROBOT = {
		name : 'Scout Droid Bravo 325 Jr.',
		face : 'media/robot_face.png'
	};

	var levels = [
		{
			introPlot : [
				{c : ROBOT, t : [
					"Status: T+5 travel days from primary base.",
					"Mission Objectives: Unknown due to data",
					"corruption.",
					"Last Contact: T-4 days prior",
				]},
				{c : UNKNOWN, t : ["[STATIC]"]},
				{c : ROBOT, t : [
					"Signal Detected! Horizonal interference likely.",
					"Higher altitude required to achieve stable",
					"communication channel."
				]},
				{c : ROBOT, t : [
					"Damage Report: Vertical thrusters damaged.",
					"Possible alternate route to higher peak detected.",
					"Nearby abandoned up-jets detected.",
				]},
				{c : ROBOT, t : [
					"Moving to up-jets to achieve higher altitude...",
				]},
			],
			data : [
				'       _            ',
				'                    ',
				'     _S             ',
				'                    ',
				'   _S               ',
				'                    ',
				'*_S_________________'
			],
			outroPlot : [
				{c : ROBOT, t : [
					"Retrying connection uplink..."
				]},
				{c : UNKNOWN, t : [
					"[STATIC]...",
				]},
				{c : UNKNOWN, t : [
					"...[STATIC]...",
				]},
				{c : UNKNOWN, t : [
					"[STATIC]... WITHOUT fries this time! If I see",
					"one fry on that plate, so help me...[STATIC]..."
				]},
				{c : ROBOT, t : [
					"Unknown Carrier: This is Scout Droid Bravo",
					"325 Jr. requesting priority channel via",
					"Emergency Sequence 37 Protocol.",
				]},
				{c : UNKNOWN, t : [
					"...what? Who is this? Is this some sort of",
					"joke?",
				]},
				{c : ROBOT, t : [
					"Negative. Repeating sequence. This is",
					"Scout Droid..."
				]},
				{c : UNKNOWN, t : [
					"I don't care if you're R2D2, you've interrupted",
					"a very important call!",
				]},
				{c : ROBOT, t : [
					"...it sounded like you were ordering fast food...",
				]},
				{c : UNKNOWN, t : [
					"...listen here, scout....",
				]},
				{c : ROBOT, t : [
					"Scout Droid Bravo 325 Jr, reporting from E9",
					"Sector...",
				]},
				{c : UNKNOWN, t : [
					"..right, listen Junior... I just...",
				]},
				{c : UNKNOWN, t : [
					"..wait, first of all, since when did our robots",
					"start spawning little baby robots to warrant",
					"the title of 'Junior'. And second... did you",
					"say that you're in the E9 sector?",
				]},
				{c : ROBOT, t : [
					"Affirmative sir, E9 sector.",
				]},
				{c : GENERAL, t : [
					"Alright, this is General Mann. I'm",
					"responding to your priority whatever the",
					"heck it was, and will send aid as necessary.",
					"But I'll need you to follow my orders.",
				]},
			]
		},
		{
			introPlot : [
				{c : GENERAL, t : [
					"Listen Junior, we've been having transmission",
					"issues in and around E9 sector. We're thinking",
					"it's from all of the remaining transportation",
					"devices.",
				]},
				{c : GENERAL, t : [
					"I need you to go around and destroy all of the",
					"devices to stop them from interfering with our",
					"signals.",
				]},
				{c : ROBOT, t : [
					"Understood. Are there explosive charges in the",
					"area?",
				]},
				{c : GENERAL, t : [
					"Explosives? Son, those devices were made by",
					"the Xelna'ri. Best pilots in the galaxy, but don't",
					"know a screwdriver from a... one of those...",
					"poundy thingies...",
				]},
				{c : ROBOT, t: [
					"A hammer, sir?",
				]},
				{c : GENERAL, t: [
					"...exactly! Anyway, just go ahead and use some",
					"of those up-jets. No doubt they will break",
					"under the weight of their builder's inadequacy!",
				]},
				{c : ROBOT, t: [
					"Roger, will do!",
				]},
				{c : ROBOT, t: [
					"Hmm... with my vertical thrusters broken, I'm",
					"going to have to make sure I hit these up-jets",
					"in the right order so that I can break all of",
					"them."
				]},
			],
			data : [
				'                    ',
				'                    ',
				'            _S      ',
				'        S_*         ',
				'___________S________',
			],
			outroPlot : [
				{c : GENERAL, t : [
					"Good work. Now head two klicks West. There",
					"are some more devices that I need you to deal",
					"with.",
				]},
				{c : ROBOT, t : [
					"How far is a 'klick', exactly?",
				]},
				{c : GENERAL, t : [
					"What kind of robot are you that you can't",
					"calculate distance in klicks?",
				]},
				{c : ROBOT, t : [
					"My model had the unit of measure chip",
					"removed in order to make room for a",
					"different chip, the 'Rimshot-Four'",
				]},
				{c : GENERAL, t : [
					"What's a 'Rimshot-Four'?",
				]},
				{c : ROBOT, t : [
					"For playing at the end of bad jokes.",
					"[[BUH-DUM-CHZZZ]]",
				]},
				{c : GENERAL, t : [
					"Are you telling me we removed an important",
					"chip from your circuitry in order to make room",
					"for a way to generate sound effects at the end",
					"of terrible jokes?",
				]},
				{c : ROBOT, t : [
					"Actually, the chip will only activate the",
					"sound effect for that specific joke.",
				]},
				{c : GENERAL, t : [
					"...",
				]},
			]
		},
		{
			introPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this intro!",
				]},
			],
			data : [
				"                    ",
				"                    ",
				"    _S              ",
				"   _S               ",
				"*__S________________",
			],
			outroPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this outro!",
				]},
			],
		},
		{
			introPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this intro!",
				]},
			],
			data : [
				"                    ",
				"      _ _ _         ",
				"      SSSSS         ",
				"_______S*S__________",
			],
			outroPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this outro!",
				]},
			],
		},
		{
			introPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this intro!",
				]},
			],
			data : [
				"                    ",
				"                    ",
				" _RR_RRR*RRR____    ",
				"                    ",
				"  __RRR_RRRS        ",
				"                    ",
				"____________________",
			],
			outroPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this outro!",
				]},
			],
		},
		{
			introPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this intro!",
				]},
			],
			data : [
				"                    ",
				"                    ",
				"      S_            ",
				"  _RR_ _            ",
				"      S              ",
				"___S_*S_____________",
			],
			outroPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this outro!",
				]},
			],
		},
		{
			introPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this intro!",
				]},
			],
			data : [
				"                    ",
				"                    ",
				" *RRRRRRRRRRRRR     ",
				"   RRRRRRRRRRRRR_   ",
				" _RRRRRRRRRRRRRS    ",
				"  SRRRRRRRRRRRRRRRR_",
				"__________________S_",
			],
			outroPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this outro!",
				]},
			],
		},
		{
			introPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this intro!",
				]},
			],
			data : [
				"_RR_                ",
				"                    ",
				"   *S_T__           ",
				"  __S__S            ",
				"                    ",
				"                    ",
				"____________________",
			],
			outroPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this outro!",
				]},
			],
		},
		{
			introPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this intro!",
				]},
			],
			data : [
				"                    ",
				"                    ",
				"*___________________",
			],
			outroPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this outro!",
				]},
			],
		},
		{
			introPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this intro!",
				]},
			],
			data : [
				"                    ",
				"                    ",
				"*___________________",
			],
			outroPlot : [
				{c : UNKNOWN, t : [
					"Need to fill this outro!",
				]},
			],
		},
		{
			introPlot : [
			],
			data : [
				'     _RRR_          ',
				' E                  ',
				'   _ST__*           ',
				'                    ',
				'__S____S______E_____'
			],
			outroPlot : [
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
					} else if (typeChar === '*') {
						levelInfo.type = 'ground';
						g.player.x = x;
						g.player.y = y;
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
	};
});
