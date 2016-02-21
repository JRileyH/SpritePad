
var pad = new oPad(16, 16, 40, 40, $('#Pad'));
var palette = new oPalette(200, 200, $('#Palette'), ["#ff0000", "#aa6fd0", "#0cc0ff", "#ff00ff", "transparent", "#00f330", "#00333f", "#cccf00", "#0330ff", "#5326ad"]);
var player = new oPlayer($('#Player'));
var brush = new oPaintBrush();

player.rescale(10);

//Example Setup//
//ONE//
pad.pixels()[pad.findPixel(7, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 2)].setColor("#000000");
pad.pixels()[pad.findPixel(6, 2)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 3)].setColor("#000000");
pad.pixels()[pad.findPixel(5, 3)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 4)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 5)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 6)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 7)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 8)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 9)].setColor("#000000");
pad.pixels()[pad.findPixel(7,10)].setColor("#000000");
pad.pixels()[pad.findPixel(7,11)].setColor("#000000");
pad.pixels()[pad.findPixel(5,12)].setColor("#000000");
pad.pixels()[pad.findPixel(6,12)].setColor("#000000");
pad.pixels()[pad.findPixel(7,12)].setColor("#000000");
pad.pixels()[pad.findPixel(8,12)].setColor("#000000");
pad.pixels()[pad.findPixel(9,12)].setColor("#000000");

pad.addFrame();
pad.selectFrame(1);

//TWO//
pad.pixels()[pad.findPixel(6, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(8, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(5, 2)].setColor("#000000");
pad.pixels()[pad.findPixel(9, 2)].setColor("#000000");
pad.pixels()[pad.findPixel(4, 3)].setColor("#000000");
pad.pixels()[pad.findPixel(10,3)].setColor("#000000");
pad.pixels()[pad.findPixel(10,4)].setColor("#000000");
pad.pixels()[pad.findPixel(10,5)].setColor("#000000");
pad.pixels()[pad.findPixel(9, 6)].setColor("#000000");
pad.pixels()[pad.findPixel(8, 7)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 8)].setColor("#000000");
pad.pixels()[pad.findPixel(6, 9)].setColor("#000000");
pad.pixels()[pad.findPixel(5,10)].setColor("#000000");
pad.pixels()[pad.findPixel(4,11)].setColor("#000000");
pad.pixels()[pad.findPixel(4,12)].setColor("#000000");
pad.pixels()[pad.findPixel(5,12)].setColor("#000000");
pad.pixels()[pad.findPixel(6,12)].setColor("#000000");
pad.pixels()[pad.findPixel(7,12)].setColor("#000000");
pad.pixels()[pad.findPixel(8,12)].setColor("#000000");
pad.pixels()[pad.findPixel(9,12)].setColor("#000000");
pad.pixels()[pad.findPixel(10,12)].setColor("#000000");

pad.addFrame();
pad.selectFrame(2);

//THREE//
pad.pixels()[pad.findPixel(6, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(8, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(5, 2)].setColor("#000000");
pad.pixels()[pad.findPixel(9, 2)].setColor("#000000");
pad.pixels()[pad.findPixel(4, 3)].setColor("#000000");
pad.pixels()[pad.findPixel(10,3)].setColor("#000000");
pad.pixels()[pad.findPixel(10,4)].setColor("#000000");
pad.pixels()[pad.findPixel(10,5)].setColor("#000000");
pad.pixels()[pad.findPixel(9, 6)].setColor("#000000");
pad.pixels()[pad.findPixel(6, 7)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 7)].setColor("#000000");
pad.pixels()[pad.findPixel(8, 7)].setColor("#000000");
pad.pixels()[pad.findPixel(9, 8)].setColor("#000000");
pad.pixels()[pad.findPixel(10,9)].setColor("#000000");
pad.pixels()[pad.findPixel(10,10)].setColor("#000000");
pad.pixels()[pad.findPixel(10,11)].setColor("#000000");
pad.pixels()[pad.findPixel(4,11)].setColor("#000000");
pad.pixels()[pad.findPixel(9,12)].setColor("#000000");
pad.pixels()[pad.findPixel(5,12)].setColor("#000000");
pad.pixels()[pad.findPixel(6, 13)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 13)].setColor("#000000");
pad.pixels()[pad.findPixel(8, 13)].setColor("#000000");

pad.selectFrame(0);
//Example Setup//

console.log("PadJS Loaded");


//<!--Temporary Frame Selection-->//
function pick()
{
	pad.selectFrame($('#selection').val());
}
function add()
{
	pad.addFrame();
}
function del()
{
	pad.removeFrame($('#selection').val());
}
//<!--Temporary Frame Selection-->//