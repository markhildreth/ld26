define(function() {
	"use strict";

	return {
		create : function() {
			return {};
		},

		loadAsset : function(ass, imageUrl) {
			var asset = {
				img : new Image(),
				width : 64,
				height : 64,
			};
			ass[imageUrl] = asset;
			asset.img.src = imageUrl;
		},
	};
			/*
			loadImage : function(name, imageUrl, sourceX, sourceY, width, height) {
				var asset = {
					sourceX: sourceX,
					sourceY: sourceY,
					width : width,
					height : height,
					img : new Image()
				};

				images[name] = asset;
				asset.img.src = imageUrl;
			},

			loadAudio : function(name, soundUrl) {
				var asset = document.createElement('audio');
				audio[name] = asset;
				asset.src = soundUrl;
			},
			*/
});
