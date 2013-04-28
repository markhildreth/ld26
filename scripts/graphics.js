define(function() {
	"use strict";

	return {
		create : function(canvas, ass) {
			return {
				canvas : canvas,
				ctx : canvas.getContext('2d'),
				assets : ass
			};
		},

		clear : function(c, color) {
			c.ctx.fillStyle = color;
			c.ctx.fillRect(0, 0, c.canvas.width, c.canvas.height);
		},

		drawRectangle : function(c, dest, width, height, color) {
			c.ctx.fillStyle = color;
			c.ctx.fillRect(dest[0], dest[1], width, height);
		},

		drawSquare : function(c, dest, width, color) {
			var halfWidth = width / 2;
			var x = dest[0] - halfWidth;
			var y = dest[1] - halfWidth;
			c.ctx.fillStyle = color;
			c.ctx.fillRect(x, y, width, width);
		},

		draw : function(c, assetName, dest, rotation, flipX, flipY) {
			var asset = c.assets[assetName];

			c.ctx.save();
			c.ctx.translate(dest[0], dest[1]);

			if (rotation) {
				c.ctx.rotate(rotation);
			}

			if (flipX && flipY) {
				c.ctx.scale(-1, -1);
			} else if (flipX) {
				c.ctx.scale(-1, 1);
			} else if (flipY) {
				c.ctx.scale(1, -1);
			}

			var centerOffsetX = asset.width / 2,
				centerOffsetY = asset.height / 2;
			c.ctx.drawImage(asset.img, -centerOffsetX, -centerOffsetY);
			c.ctx.restore();
		},

		drawText : function(c, text, dest, color) {
			c.ctx.textBaseline = "top";
			c.ctx.font = "16pt Calibri";
			c.ctx.fillStyle = color;
			c.ctx.fillText(text, dest[0], dest[1]);
		}
	};
});
