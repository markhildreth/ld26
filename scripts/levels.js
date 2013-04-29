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

	var HENDRICKS = {
		name : 'Pvt. Hendricks (stuck inside SDB325 Jr)',
		face : 'media/robot_face.png'
	};

	var HENDRICKS_AT_HOME = {
		name : 'Pvt. Hendricks (safe at home)',
		face : 'media/robot_face.png',
	};

	var MR_ROBOT = {
		name : "Mr-I-Fell-Asleep-And-Now-I'm-A-Robot",
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
				{c : ROBOT, t : [
					"More up-jets here, sir. Shall I destroy they?",
				]},
				{c : GENERAL, t : [
					"Let me check... yeah, I still can't get a strong",
					"signal to Mars Hut.",
				]},
				{c : ROBOT, t : [
					"How exactly will your being able to contact a",
					"food delivery service help my getting back to",
					"base?"
				]},
				{c : GENERAL, t : [
					"Pretty simple really... the delivery services",
					"would need to pass by your sector in order to",
					"reach my headquarters. They'll send a ship right",
					"by you.",
				]},
				{c : ROBOT, t : [
					"Oh... that.. that actually sounds like a plan...",
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
				{c : ROBOT, t : [
					"Wait... what makes you think the delivery ship",
					"will actually stop to find me as opposed to just",
					"delivering the food straight to you?",
				]},
				{c : GENERAL, t : [
					"There's a field on their hypertext form when you",
					"order so that you can place 'additional requests'.",
					"I'll put in there for them to pick you up.",
				]},
				{c : ROBOT, t : [
					"So, what, you'll just type 'Engage in a costly",
					"search and rescue mission to find a small robot",
					"somewhere in E9 sector while on your way",
					"over'?",
				]},
				{c : GENERAL, t : [
					"Hey, last time I asked them to draw a dinosaur",
					"on the pizza box, and they did it!",
				]},
				{c : ROBOT, t : [
					"That's not even CLOSE to the same amount of",
					"work they would have to do!",
				]},
				{c : GENERAL, t : [
					"What? You should SEE the detailing on the",
					"ankylosaurus tail! Here, let me send you a photo",
					"I took.",
				]},
				{c : ROBOT, t : [
					"...",
				]},
				{c : ROBOT, t : [
					".....",
				]},
				{c : ROBOT, t : [
					"Wow...",
				]},
				{c : ROBOT, t : [
					"...actually, that IS really good detailing",
				]},
			],
		},
		{
			introPlot : [
				{c : ROBOT, t : [
					"Sir, it looks like there's a different type of device",
					"here",
				]},
				{c : GENERAL, t : [
					"Ah yes, the Insta-Bridge ER200. You might",
					"remember them in your history databanks as",
					"the prime reason we lost the battle of",
					"Canyon X983O.",
				]},
				{c : GENERAL, t : [
					"Only one soldier ever was able to cross",
					"before the bridge inevitably collapsed.",
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
				{c : ROBOT, t : [
					"Weren't these tested before they were used in",
					"battle?",
				]},
				{c : GENERAL, t : [
					"The manufacturers were Ehgis, and they",
					"guaranteed us that they would work.",
				]},
				{c : ROBOT, t : [
					"Whatever happened to the manufacturer?",
				]},
				{c : GENERAL, t : [
					"Turns out in all of the fog of war, we",
					"didn't realize that the battle was being",
					"fought AGAINST the Ehgis.",
				]},
			],
		},
		{
			introPlot : [
				{c : GENERAL, t : [
					"I've been looking at the schematics for the",
					"Scout Droid Bravo 3XX model.",
				]},
				{c : ROBOT, t : [
					"A fine peice of machinery, aren't I?",
				]},
				{c : GENERAL, t : [
					"What I find interesting is that that model",
					"doesn't have a natural language chip.",
				]},
				{c : ROBOT, t : [
					"I'm scarcely aware of any primary reason",
					"why my circuitry being bereft of programming",
					"allowing for the use of the Galactic Standard",
					"as a means of communications leaves you",
					"bewildered.",
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
				{c : GENERAL, t : [
					"I'm also surprised by the fact that one",
					"of the mechanics who built your line",
					"has gone missing since your production.",
				]},
				{c : ROBOT, t : [
					"Yes, that certainly is odd...",
				]},
				{c : GENERAL, t : [
					"Let me ask you something, Junior. You're",
					"not actually just that mechnic that somehow",
					"got stuck in the robot, are you?",
				]},
				{c : ROBOT, t : [
					"What!? Sir, that's outrageous",
				]},
				{c : GENERAL, t : [
					"Okay. Prove to me that you're a computer.",
					"What is the square root of the product of",
					"5345 and 723?",
				]},
				{c : HENDRICKS, t : [
					"Um... ERROR... MATH PROCESSING",
					"MODULE... umm.. DAMAGED... um...",
					"GOING TO SLEEP MODE",
					"BEOUooooo...",
				]},
			],
		},
		{
			introPlot : [
				{c : GENERAL, t : [
					"Look, Hendricks, we've identified the",
					"video showing when you fell asleep in",
					"the robot. So we know it's you. To be",
					"sure, we are still planning help",
				]},
				{c : HENDRICKS, t : [
					"General, I appreciate how you're handling",
					"this. It is pretty embarrasing",
				]},
				{c : GENERAL, t : [
					"There will of course be disciplinary actions",
					"later, but for now, this kept under the",
					"strictest of confidence",
				]},
			],
			data : [
				"                    ",
				"                    ",
				" *RRRRRRRRRRRRRR    ",
				"                    ",
				"  SRRRRRRRRRRRRR_   ",
				"                    ",
				"   _RRRRRRRRRRRS    ",
				"    SRRRRRRRRRRRRRR_",
				"__________________S_",
			],
			outroPlot : [
				{c : HENDRICKS, t : [
					"Sir, I would've believe your promise",
					"of keeping this under the 'strictest of",
					"confidence' more if you had muted the",
					"microphone when you put this call on",
					"speaker. I can hear the entire bridge laughing.",
				]},
				{c : GENERAL, t : [
					"What? No, they're laughing at a joke that",
					"one of the guys told!",
				]},
				{c : HENDRICKS, t : [
					"Oh yeah? What joke?",
				]},
				{c : GENERAL, t : [
					"..okay, I admit, the joke IS about you",
					"falling asleep and being stuck in the",
					"robot.",
				]},
				{c : HENDRICKS, t : [
					"Figures...",
				]},
				{c : GENERAL, t : [
					""
				]},
				{c : GENERAL, t : [
					"....",
				]},
				{c : GENERAL, t : [
					"...so, do you want to hear the joke or no?",
				]},
				{c : HENDRICKS, t : [
					"NO!",
				]},
			],
		},
		{
			introPlot : [
				{c : HENDRICKS, t : [
					"Sir, another new device.",
				]},
				{c : GENERAL, t : [
					"Looks like a trap door",
				]},
				{c : HENDRICKS, t : [
					"Any advice?",
				]},
				{c : GENERAL, t : [
					"It will trigger when you first fall",
					"through it. After that, you can walk",
					"over it just fine.",
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
				{c : GENERAL, t : [
					"You know Hendricks, life has walked all over",
					"you just as you walked all over that trap...",
				]},
				{c : HENDRICKS, t : [
					"Harsh, sir...",
				]},
				{c : GENERAL, t : [
					"Sorry, I'm trying to work on my witty insults.",
					"You know, in an intergalactic fight, when the",
					"two leaders come together and fight using some",
					"archaic method and just insult eachother while",
					"they fight?",
				]},
				{c : HENDRICKS, t : [
					"So the leader of our outfit is preparing for",
					"a battle under the assumption that it will be",
					"fought as if we are in a movie?",
				]},
				{c : GENERAL, t : [
					"You're one to talk Mr-I-Fell-Asleep-And-Now-",
					"I'm-A-Robot",
				]},
				{c : MR_ROBOT, t : [
					"Look, I'm not going to...",
				]},
				{c : MR_ROBOT, t : [
					"...wait, that's ACTUALLY going to be the name",
					"that shows up whenever I talk now?",
				]},
				{c : GENERAL, t : [
					"Afraid so...",
				]},
				{c : MR_ROBOT, t : [
					"...",
				]},
			],
		},
		{
			introPlot : [
				{c : MR_ROBOT, t : [
					"Surely I've destroyed enough devices causing",
					"interference to.. wait, why am I still",
					"destroying these again? Didn't we agree that",
					"the fast-food-favor plan wasn't going to work?",
				]},
				{c : GENERAL, t : [
					"Sure, but these devices are interferring with",
					"more than just that. Our satellites are having",
					"problems picking up images as well.",
				]},
			],
			data : [
				"                    ",
				"                    ",
				"                    ",
				"    _*_T_T_RR_      ",
				" ___   _____        ",
				"______S_S___________",
			],
			outroPlot : [
				{c : MR_ROBOT, t : [
					"The imaging satellites you're speaking of would",
					"be used to find me, right?",
				]},
				{c : GENERAL, t : [
					"What? No, I'm talking about the images we're",
					"getting for our Blood Bowl matches. It's the",
					"championship tonight and the reception is still",
					"a little snowy. I'm hosting a party and don't",
					"want to start being called 'Snow Mann.'",
				]},
				{c : MR_ROBOT, t : [
					"'Snow Mann'? Still working on your insults?",
				]},
				{c : GENERAL, t : [
					"I'm on Chapter 3 of 'The Art of Battle Retorts'",
				]},
			],
		},
		{
			introPlot : [
				{c : MR_ROBOT, t : [
					"Can you do me a favor?",
				]},
				{c : GENERAL, t : [
					"No, but I'd be amused to hear what you actually",
					"thought I would do for you...",
				]},
				{c : MR_ROBOT, t : [
					"My pet Potato hasn't been fed in awhile. Do you",
					"think someone can feed it?",
				]},
				{c : GENERAL, t : [
					"A pet... potato?",
				]},
			],
			data : [
				"                    ",
				"                    ",
				"  *_T_R_T_          ",
				" _ S_S_S_S          ",
				"  __T_RR___         ",
				"____________________",
			],
			outroPlot : [
				{c : MR_ROBOT, t : [
					"I assumel you were unable to feed Mr Spud?",
				]},
				{c : GENERAL, t : [
					"I was more than unable, I was unwilling!",
				]},
				{c : MR_ROBOT, t : [
					"That's fine. I'm sure he's run away by now",
				]},
				{c : GENERAL, t : [
					"Has he?",
				]},
				{c : MR_ROBOT, t : [
					"Yeah. He told me he wanted to become a pilot",
					"but I said no.",
				]},
				{c : GENERAL, t : [
					"Why did you say no?",
				]},
				{c : MR_ROBOT, t : [
					"I had to explain to him that we live in a...",
					"..NO - FRY - ZONE",
				]},
			],
		},
		{
			introPlot : [
				{c : GENERAL, t : [
					"Did you really just make up the fact that you",
					"had a pet potato for a horrible pun?",
				]},
				{c : MR_ROBOT, t : [
					"Yes, sir.",
				]},
				{c : GENERAL, t : [
					"Alright, see if you can clean up the devices in",
					"that area. I'm sending a squad to pick you up",
					"immediately",
				]},
			],
			data : [
				"                    ",
				"                    ",
				"  _RR_              ",
				"  *RRR_             ",
				" _SS S _RRR         ",
				"______S_____________",
			],
			outroPlot : [
				{c : MR_ROBOT, t : [
					"I see the ship! I see the ship!",
				]},
				{c : MR_ROBOT, t : [
					"Wait, they're turning away",
				]},
				{c : GENERAL, t : [
					"I cancelled the mission request",
				]},
				{c : MR_ROBOT, t : [
					"Why did you do that?",
				]},
				{c : GENERAL, t : [
					"I realized after hearing that joke that I sort",
					"of wished I had sent a rescue squad, just so I",
					"could delight in recalling them. So that's what",
					"I did",
				]},
			],
		},
		{
			introPlot : [
				{c : GENERAL, t : [
					"Hendricks, there's a large distortion field in",
					"your area! See what it is and get rid of it!",
				]},
			],
			data : [
				'                    ',
				'                    ',
				'         E_S        ',
				'_____E_*____________'
			],
			outroPlot : [
				{c : HENDRICKS, t : [
					"Looks like it was some sort of teleporter, sir!",
				]},
				{c : GENERAL, t : [
					"Ah, yes. You must have stumbled onto one of",
					"our training grounds where we trained in",
					"teleportation and time travel.",
				]},
				{c : HENDRICKS, t : [
					"Interesting...",
				]},
				{c : GENERAL, t : [
					"Ah, yes. You must have stumbled onto one of",
					"our training grounds where we trained in",
					"teleportation and time travel.",
				]},
				{c : HENDRICKS, t : [
					"...",
				]},
				{c : GENERAL, t : [
					"Ah, yes. You must have stumbled onto one of",
					"our training grounds where we trained in",
					"teleportation and time travel.",
				]},
				{c : HENDRICKS, t : [
					"Yeah, I think I'm experiencing the time travel",
					"part...",
				]},
				{c : GENERAL, t : [
					"HAH! Gotcha! I made that part about time",
					"traveling up. Lighten up, Hendricks!",
				]},
				{c : HENDRICKS, t : [
					"Yeah, I think I'm experiencing the time travel",
					"part...",
				]},
				{c : GENERAL, t : [
					"Um...",
				]},
				{c : HENDRICKS, t : [
					"Yeah, I think I'm experiencing the time travel",
					"part...",
				]},
				{c : GENERAL, t : [
					"Dear Xorg, he HAS stumbled upon time travel.",
					"HE'S DESTROYED THE FABRIC OF SPACE",
					"AND TIME! We're all gonna' DIE!",
				]},
				{c : UNKNOWN, t : [
					"[ALARM BELLS]",
				]},
				{c : HENDRICKS, t : [
					"Hah! Gave you a taste of your own medicine!",
				]},
				{c : UNKNOWN, t : [
					"[ALARM BELLS]",
				]},
				{c : HENDRICKS, t : [
					"...sir?",
				]},

			],
		},
		{
			introPlot : [
				{c : HENDRICKS, t : [
					"Haven't heard from General Mann in awhile",
					"Maybe there is too much interference around",
					"here...",
				]},
			],
			data : [
				'     _RRR_          ',
				' E                  ',
				'   _ST__*           ',
				'                    ',
				'__S____S______E_____'
			],
			outroPlot : [
				{c : HENDRICKS, t : [
					"Nope, still no sign of him. I hope he's",
					"okay. I hope Mr. Spud's okay as well.",
				]},
				{c : HENDRICKS, t : [
					"...wait, didn't I make up Mr. Spud for a joke?",
					"I can't remember now...",
				]},
				{c : HENDRICKS, t : [
					"...",
				]},
				{c : HENDRICKS, t : [
					"Oh well. He's all I have left now...",
				]},
				{c : HENDRICKS, t : [
					"...",
				]},
				{c : HENDRICKS, t : [
					"....",
				]},
				{c : HENDRICKS, t : [
					"I really do miss you Mr. Spud...",
				]},
			],
		},
		{
			introPlot : [
				{c : GENERAL, t : [
					"Hendricks! Come in, Hendricks!",
				]},
				{c : HENDRICKS, t : [
					"Right here, Sir! Just clearing away",
					"some more distortion-causing devices.",
				]},
			],
			data : [
				'                    ',
				'     E              ',
				'           ___      ',
				'__T_RR_TT_          ',
				'_RRRR_ _S_          ',
				'______SS*_____E_____',
			],
			outroPlot : [
				{c : HENDRICKS, t : [
					"Is everything okay at base?",
				]},
				{c : GENERAL, t : [
					"Um... define 'okay'?",
				]},
			],
		},
		{
			introPlot : [
				{c : HENDRICKS, t : [
					"Doesn't sound good",
				]},
				{c : GENERAL, t : [
					"Let's put it this way: apparently, the alarm",
					"that I allegedly pulled deactives enough",
					"systems that the mutant venus flytrap secret",
					"weapon we've been working on got loose...",
				]},
				{c : HENDRICKS, t : [
					"I imagine that's is going to reduce the",
					"likelihood of a rescue mission, isn't it?",
				]},
				{c : GENERAL, t : [
					"Actually, I have some good news on that..",
				]},
			],
			data : [
				"                    ",
				"                    ",
				"     S              ",
				" __RE_S__T_         ",
				"   SRT*S_           ",
				"____________E_______",
			],
			outroPlot : [
				{c : GENERAL, t : [
					"You see, reducing the likelihood of a",
					"rescue mission necessitates an actual",
					"likelihood to have existed in a reducable",
					"state to begin with.",
				]},
				{c : GENERAL, t : [
					"Due to the likelihood of that rescue",
					"mission already having been zero, we",
					"can't possibly reduce it any more! Isn't",
					"that great!",
				]},
				{c : HENDRICKS, t : [
					"YAY! Wait...",
				]},
			],
		},
		{
			introPlot : [
				{c : HENDRICKS, t : [
					"So, I guess what you're saying is that",
					"I'm stuck out here forever.",
				]},
				{c : GENERAL, t : [
					"'fraid so. Really, I WOULD love to bring",
					"you back home, but the developer needs to",
					"submit this game in less than an hour, and",
					"there are still a bunch of levels that",
					"should have dialog.",
				]},
			],
			data : [
				'                    ',
				'                    ',
				'       RRTRR_       ',
				'    _E_SS__TRT__    ',
				'        ST*__       ',
				'__________E_________',
				
			],
			outroPlot : [
				{c : HENDRICKS, t : [
					"Wait, who is 'The Developer'?",
				]},
				{c : GENERAL, t : [
					"The developer of the game that you're a",
					"character in.",
				]},
				{c : HENDRICKS, t : [
					"I'm a character in a game?",
				]},
				{c : GENERAL, t : [
					"Of course! Hey, you broke the fourth",
					"wall earlier when your name changed,",
					"remember?",
				]},
				{c : HENDRICKS, t : [
					"Okay, yeah, but that was cheeky. Also",
					"that was written hours ago when the developer",
					"had more time. Your joke seems rushed",
					"in comparison.",
				]},
			],
		},
		{
			introPlot : [
				{c : GENERAL, t : [
					"Look, I'm not going to get in an argument",
					"with you on this one. Let's just admit that",
					"our best jokes are behind us. Right now, we",
					"should expect nothing but rushed text.",
				]},
			],
			data : [
				'                    ',
				'                    ',
				'     _S_R_          ',
				' E_S_S*S__S_____    ',
				'____S____E__________',
			],
			outroPlot : [
				{c : HENDRICKS, t : [
					"...and also much shorter dialog as well,",
					"probably to get it to cover more levels.",
				]},
			],
		},
		{
			introPlot : [
				{c : GENERAL, t : [
					"This is outrageous. I'm never going to be able",
					"to throw quips in an epic close-combat space",
					"battle with these bits of rushed dialog!",
				]},
				{c : HENDRICKS, t : [
					"And I'm never going to be able to be saved",
					"by Mr. Spud at the last second, in a blatent",
					"copy of the Mr. Pokeylope puzzle in",
					"Psychonauts!",
				]},
			],
			data : [
				'                    ',
				'      _RR_          ',
				'    SR_S_T___       ',
				'   __R_RR_RR_R__    ',
				'_______S*S__________',
			],
			outroPlot : [
				{c : HENDRICKS, t : [
					"Why doesn't the developer just end the game?",
				]},
				{c : GENERAL, t : [
					"Because he already created the harder levels",
					"and he already spent so much time making them",
					"he doesn't want to get rid of them",
				]},
			],
		},
		{
			introPlot : [
				{c : HENDRICKS, t : [
					"But surely he can just use some plot device to",
					"end the storyline but keep the puzzles going?",
				]},
				{c : GENERAL, t : [
					"Negative there, as well. You see, the game is",
					"already coded to have dialog before and after",
					"each level. If no dialog is included, the game",
					"breaks.",
				]},
				{c : HENDRICKS, t : [
					"You mean the entire point of our continuing",
					"existence is soley to uphold a constraint",
					"in a piece of software? A constraint which",
					"was itself created soley as an oversight?",
				]},
			],
			data : [
				'                    ',
				'                    ',
				'    _SRSE           ',
				'   _T_TT_T_         ',
				'   SSR_R___TSR_     ',
				'  _S___SR*_R        ',
				'________E___________',
			],
			outroPlot : [
				{c : GENERAL, t : [
					"That just about sums it up perfectly. But",
					"I have a plan.",
				]},
				{c : HENDRICKS, t : [
					"...okay, it just so happens, I have a second plan.",
					"One that DOES NOT involve fast food!",
				]},
			],
		},
		{
			introPlot : [
				{c : GENERAL, t : [
					"You see, the only reason that we're still around",
					"is because there isn't any plot device that allows",
					"us to escape the game.",
				]},
				{c : GENERAL, t : [
					"However, we can ACT OUT our own story,",
					"including plot devices that allow us, as",
					"characters, to leave.",
				]},
				{c : HENDRICKS, t : [
					"I see! So rather than just bickering, I can act out",
					"that I've been rescued by Mr. Spud...",
				]},
				{c : GENERAL, t : [
					"...and I can act out that I've been called off to",
					"engage an enemy commander in an epic",
					"close-combat, quip-filled duel!",
				]},
				{c : HENDRICKS, t : [
					'And of course, I set the robot on "auto-pilot"',
					'so it still makes sense for any players bored',
					'enough to still be playing the remaining levels!',
				]},
				{c : GENERAL, t : [
					"Exactly! Okay, I'll get working on some scripts",
					"you... well, you don't really have a choice, you",
					"need to destroy devices.",
				]},
				{c : HENDRICKS, t : [
					"Yeah, sorry...",
				]},
				{c : GENERAL, t : [
					"It's okay, I understand...",
				]},
			],
			data : [
				'                    ',
				'                    ',
				'       E            ',
				'    _SST_           ',
				'    ____T           ',
				'  _STS__R           ',
				'   ___T___T_        ',
				'*S_E________________',
			],
			outroPlot : [
				{c : HENDRICKS, t : [
					"How goes Operation Game Escape?",
				]},
				{c : GENERAL, t : [
					"Pretty well. Some issues right now, though.",
				]},
				{c : HENDRICKS, t : [
					"Such as?",
				]},
				{c : GENERAL, t : [
					"For starters, the actress picked to be my",
					"love interest is asking for more money. The",
					"actor playing our villain unironically had his",
					"his lawyers hide some fine print, which he's",
					"now using to sue us for breach of contract.",
				]},
				{c : GENERAL, t : [
					"The initial investors are threatering to",
					"cut future funding unless we start appeasing",
					"to the 15-24 year old female demographic, and",
					"Mr. Potoato Head, would you believe it, is",
					"complaining about being type casted!",
				]},
				{c : HENDRICKS, t : [
					"...",
				]},
				{c : HENDRICKS, t : [
					"THIS DOESN'T NEED TO BE",
					"SHAKESPEARE! Just write something quick",
					"so we can get out of here!",
				]},
				{c : GENERAL, t : [
					"[SIGH]... fine!",
				]},
				{c : GENERAL, t : [
					"Some people just don't appreciate good art...",
				]},
			],
		},
		{
			introPlot : [
				{c : HENDRICKS, t : [
					"Well, any news?",
				]},
				{c : GENERAL, t : [
					"Okay, scripts are ready. Cameras are in place,",
					"both at the base and in the E9 sector.",
					"Water at exactly room temperature is ready in",
					"Mr. Mann's trailer...",
				]},
				{c : HENDRICKS, t : [
					"Oh for Xorg's sake...",
				]},
				{c : GENERAL, t : [
					"Cold water restricts my vocal cords! How",
					"can you expect me to hit those high Cs in",
					"the third act after the death of the pizza",
					"delivery boy?",
				]},
				{c : HENDRICKS, t : [
					"Right, just upload the script so that I",
					"can learn my lines...",
				]},
			],
			data : [
				'                    ',
				'      _RR_          ',
				'    SR_S_T___       ',
				'   __R_RR_RR_R__    ',
				'_______S*S__________',
			],
			outroPlot : [
				{c : GENERAL, t : [
					"Are you ready?",
				]},
				{c : HENDRICKS, t : [
					"As ready as I'm going to be, I guess",
				]},
				{c : GENERAL, t : [
					"Alright, here we go.",
				]},
				{c : GENERAL, t : [
					"Lights...",
				]},
				{c : GENERAL, t : [
					"Lights...",
					".....Cameras......",
				]},
				{c : GENERAL, t : [
					"Lights...",
					".....Cameras......",
					".......ACTION!",
				]},
			],
		},
		{
			introPlot : [
				{c : HENDRICKS, t : [
					"[Whispering]",
					"How much longer is this overture going",
					"to last?",
				]},
				{c : GENERAL, t : [
					"[Whispering]",
					"Don't worry, it's almost done...",
				]},
				{c : HENDRICKS, t : [
					"...",
				]},
				{c : GENERAL, t : [
					"[Whispering]",
					"Hendricks! The timpany roll was your cue!",
				]},
				{c : HENDRICKS, t : [
					"What? The script says I don't enter until",
					"the third scene...",
				]},
				{c : GENERAL, t : [
					"What? Oh, you must have an older version of",
					"the script!",
				]},
				{c : HENDRICKS, t : [
					"What do you mean? How much has changed?",
				]},
				{c : GENERAL, t : [
					"It's basically a complete rewrite. Here, just read",
					"off of the new script. Act like it's your worker's",
					"manual or whatever it is you read down there",
					"in the mechanic shop.",
				]},
				{c : HENDRICKS, t : [
					'[Whispering]',
					'"Oh, to be at work again. Another day of..."',
				]},
				{c : GENERAL, t : [
					"[Miming]",
					"Louder! Louder!",
				]},
				{c : HENDRICKS, t : [
					"[Slightly louder]",
					'..."ANOTHER DAY of TOIL and SWEAT"...',
				]},
				{c : GENERAL, t : [
					"[Thumbs up]",
				]},
				{c : HENDRICKS, t : [
					'..."but all for a good cause, since by',
					'Xorg\'s name, I do devote my life to the...',
					'...cause of General Mann"...',
				]},
				{c : HENDRICKS, t : [
					'[Out of Character]',
					'Oh, come on, you MUST be kidding...',
				]},
				{c : GENERAL, t : [
					'[Cues the conductor after Hendrick\'s "improv"]'
				]},
				{c : GENERAL, t : [
					'[Singing]',
					'"On me! On me!',
					'They all depend on me!"',
				]},
				{c : GENERAL, t : [
					'[Singing]',
					'"Heavy is that crown I wear,',
					'in my struggles, tough and fair...',

					'In this world there is no like..."',
				]},
				{c : HENDRICKS, t : [
					'[Mock Singing]',
					'"Someone take away his mic..."',
				]},
				{c : GENERAL, t : [
					'[Singing]',
					'"On me! On me!',
					'They all depend...',
					'   ...on.....',
				]},
				{c : GENERAL, t : [
					'[Singing]',
					'MMMEEEEEEEE.....',
				]},
				{c : HENDRICKS, t : [
					'"General Mann!"',
				]},
				{c : GENERAL, t : [
					'"How goes it, most trusting underling?"',
				]},
				{c : HENDRICKS, t : [
					'...',
				]},
				{c : HENDRICKS, t : [
					'"The pizza delivery ship you sent to',
					'rescue me has crashed! All souls',
					'aboard the ship were lost!"',
				]},
				{c : GENERAL, t : [
					'"No, you mean... even..."',
				]},
				{c : HENDRICKS, t : [
					'"Yes... pizza delivery boy Steve."',
				]},
				{c : GENERAL, t : [
					'[Dramatic Pause]',
				]},
				{c : GENERAL, t : [
					'[Singing]',
					'"He was only seventeen...',
					'Who knew what he would have been...',
					'But Pizza was my single vice',
					'these leftovers just won\'t suffice...',
				]},
				{c : GENERAL, t : [
					'[Singing]',
					'"His dino drawings were supreme...',
					'his ship\'s spoiler, so serene...',
					'You crashed into some strange device',
					'so now my pizza is half-price...',
				]},
				{c : HENDRICKS, t: [
					'Oh geez, this might be awhile....',
				]},
			],
			data : [
				'                    ',
				'                    ',
				' E___S_RRR_T__R_    ',
				'  __R__R* __R___S   ',
				'  _S___R___S___E_   ',
				'                    ',
				'                    ',
				'____________________',
			],
			outroPlot : [
				{c : GENERAL, t : [
					'[Singing]',
					'"One more dawn...',
					'"One more day..."',
				]},
				{c : HENDRICKS, t : [
					'Whoops, I think I missed some of my cues..',
				]},
				{c : GENERAL, t : [
					'No fears, I covered beautifully. Mr. Spud',
					'rescued you, and now you are home as far',
					'as the player is concerned. Look, even your',
					'name has changed!',
				]},
				{c : HENDRICKS_AT_HOME, t : [
					'What? Oh, hey, look at that! Well done',
					'General Mann!',
				]},
				{c : GENERAL, t : [
					'Please.. we\'re friends now. Just call me...',
				]},
				{c : GENERAL, t : [
					'...General Mann.',
				]},
				{c : HENDRICKS_AT_HOME, t : [
					'....',
				]},
				{c : HENDRICKS_AT_HOME, t : [
					'..that is what I called you..',
				]},
				{c : GENERAL, t : [
					'It is? Good, then keep calling me that.',
				]},
			],
		},
		{
			introPlot : [
				{c : HENDRICKS_AT_HOME, t : [
					'Well, General Mann, I guess this is goodbye',
					'Good thing to. Who knows how many more',
					'levels this game has in it?',
				]},
				{c : GENERAL, t : [
					'Actually, this is the last one',
				]},
				{c : HENDRICKS_AT_HOME, t : [
					'Really?',
				]},
				{c : GENERAL, t : [
					'Yup.',
				]},
				{c : HENDRICKS_AT_HOME, t : [
					'Hmmm...',
				]},
				{c : HENDRICKS_AT_HOME, t : [
					'....',
				]},
				{c : HENDRICKS_AT_HOME, t : [
					'Seems like it would be a shame not',
					'to see it through. You know, with all that',
					'we\'ve already been through.',
				]},
				{c : GENERAL, t : [
					'Hmm. Yeah, I see your point.',
				]},
				{c : HENDRICKS_AT_HOME, t : [
					'You know what?',
					'[Jumps back into Scout Droid Bravo 325 Jr]',
				]},
				{c : HENDRICKS, t : [
					'I think I\'ll give it one more go.',
				]},
				{c : GENERAL, t : [
					'[Watching the droid zoom off]',
					'That\'ll do, Scout Droid Bravo 325 Jr...',
				]},
				{c : GENERAL, t : [
					'...',
				]},
				{c : GENERAL, t : [
					'That\'l do...',
				]},
			],
			data : [
				'                    ',
				'                    ',
				'  __R__R__S__R_     ',
				'  __S__T__R__T__    ',
				'  __T__S__T__R_     ',
				'  __R_R_*_TR_S_     ',
				'  __S_____S__T_     ',
				'____________________',
			],
			outroPlot : [
				{c : null, t : [
					'And so ends the saga of Scout Droid',
					'Bravo 325 Jr...',
				]},
				{c : null, t : [
					'Steve the Pizza Delivery Boy (who, in real',
					'life, of course, never died), sued "General',
					'Mann: the Musical" for using his likeness.',
				]},
				{c : null, t : [
					'It was settled out of court, with Steve getting',
					'enough to retire young, and General Mann',
					'getting a drawing of his own face sketched onto',
					'a pterodactyl.',
				]},
				{c : null, t : [
					'General Mann eventually quit the military and',
					'tried to make it big on Broadway. His shows',
					'never had big success, but have gained a',
					'cult following',
				]},
				{c : null, t : [
					'You can still go downtown in some citites on',
					'Perstoid 8 on a Saturday night dressed as',
					'Scout Droid Bravo 325 Jr for a midnight showing',
					'of "General Mann: the Musical"',
				]},
				{c : null, t : [
					'Hendricks and Scout Droid Bravo 325 Jr were',
					'both never seen again, although there have',
					'been many sightings. Most have been passed',
					'off as legend, however. Some say they never',
					'existed in the first place.',
				]},
				{c : null, t : [
					'     THE END     ',
				]},
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
