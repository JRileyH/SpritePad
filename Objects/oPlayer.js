function oPlayer(div)
{
	this._div = div;
	this._playing = true;
	this._scale = 1;
	
	var htmlStr = ""
	for(var y = 0; y < pad.padH(); y++)
	{
		for(var x = 0; x < pad.padW(); x++)
		{
			var id = (x+(y*pad.padW()));
			htmlStr = htmlStr + "<div id='pp"+id+"' class='playerPixel'></div>";
		}
	}
	div.html(htmlStr);
	
	div.css("width", this._scale*pad.padW()+"px");
	div.css("height", this._scale*pad.padH()+"px");
	
	$('.playerPixel').css("width", this._scale+"px");
	$('.playerPixel').css("height", this._scale+"px");
	
	function tick(f)
	{
		//if(this._playing)
		if(true)
		{
			pad.pixels(f).forEach(function(element, index, array)
			{
				$("#pp"+index).css("background-color", element.color());
			});
		}
	}
	
	var frame = 0;
	window.setInterval(function ()
	{
		if(frame >= pad.numberOfFrames()){frame = 0;}
		tick(frame);
		frame++;
	}, 1000);
}
//Constants
oPlayer.prototype.element = function(){return this._div;}

oPlayer.prototype.rescale = function(s)
{
	this._scale = s;
	this._div.css("width", s*pad.padW()+"px");
	this._div.css("height", s*pad.padH()+"px");
	
	$('.playerPixel').css("width", s+"px");
	$('.playerPixel').css("height", s+"px");
}

oPlayer.prototype.play = function()
{
	this._playing = true;
}

oPlayer.prototype.pause = function()
{
	this._playing = false;
}

oPlayer.prototype.stringify = function()
{
	var str = "Player:";
	return str;
}