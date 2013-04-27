define(function() {
	"use strict";

	return {
		create : function(canvas, ass) {
			return {
				canvas : canvas,
				ctx : canvas.getContext('2d'),
				assets : ass,
			}
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

		draw : function(c, assetName, dest, rotation) {
			var asset = c.assets[assetName];

			c.ctx.save();
			c.ctx.translate(dest[0], dest[1]);
			c.ctx.rotate(rotation);
			var centerOffsetX = asset.width / 2,
				centerOffsetY = asset.height / 2;
			c.ctx.drawImage(asset.img, -centerOffsetX, -centerOffsetY);
			c.ctx.restore();
		},

		drawText : function(ctx, text, dest) {
			ctx.textBaseline = "top";
			ctx.font = "10pt Ariel";
			ctx.fillStyle = "white";
			ctx.fillText(text, dest[0], dest[1]);
		}
	};
});
