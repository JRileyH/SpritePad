function oPad(w, h, pw, ph, div)
{
	this._w = w;
	this._h = h;
	this._pw = pw;
	this._ph = ph;
	this._frames = [];
	this._div = div;
	this._selected = 0;
	
	div.css("width", String(w*pw)+'px');
	div.css("height", String(h*ph)+'px');
	
	this.addFrame();
	this.selectFrame(0);
	
	var htmlStr = "";
	for(var y = 0; y < h; y++)
	{
		for(var x = 0; x < w; x++)
		{
			var id = (x+(y*w));
			htmlStr = htmlStr + "<div id='"+id+"' class='pixel'></div>";
		}
	}
	div.html(htmlStr);
	$('.pixel').css("width", String(pw));
	$('.pixel').css("height", String(ph));
}
//Constants
oPad.prototype.padW = function(){return this._w;}
oPad.prototype.padH = function(){return this._h;}
oPad.prototype.tileW = function(){return this._tw;}
oPad.prototype.tileH = function(){return this._th;}
oPad.prototype.pixels = function(s){if(typeof s === 'undefined'){return this._frames[this._selected]}else{return this._frames[s]}}
oPad.prototype.numberOfFrames = function(){return this._frames.length}
oPad.prototype.element = function(){return this._div;}

oPad.prototype.trimmedArray = function()
{
	var frames = [];
	for(var f = 0; f < this.numberOfFrames(); f++)
	{
		var pixels = [];
		var frame = this.pixels(f);
		for(var y = 0; y < this._h; y++)
		{
			for(var x = 0; x < this._w; x++)
			{
				var id = this.findPixel(x, y);
				pixels.push(frame[id].color());
			}
		}
		frames.push(pixels);
	}
	return frames;
}

oPad.prototype.selectFrame = function(p)
{
	if(p >= 0 && p < this.numberOfFrames())
	{
		$('.panel').css("background-color", "blue");
		picker.element().children().eq(p).css("background-color", "red");
		this._selected = p;
		this.reload();
	}
	else
	{
		alert("Pad "+p+" is not in frames"); 	
	}
}

oPad.prototype.addFrame = function()
{
	picker.add();
	var pixels = [];
	for(var y = 0; y < this._h; y++)
	{
		for(var x = 0; x < this._w; x++)
		{
			var id = this.findPixel(x, y);
			pixels.push(new oPixel(x, y, this._pw, this._ph, id));
		}
	}
	this._frames.push(pixels);
}

oPad.prototype.removeFrame = function(f)
{
	if(this.numberOfFrames()>1)
	{
		picker.remove();
		if(this.numberOfFrames() > 1)
		{
			this._frames.splice(this._selected, 1);
			if(this._selected != 0){this.selectFrame(this._selected-1);}else{this.reload();}
		}
		else
		{
			alert("Pad "+f+" is not in frames");
		}
	}
	else
	{
		alert("What are you doing? You only have one frame left!");
	}
	
}

oPad.prototype.findPixel = function(x, y)
{
	return (x+(y*this._w));
}

oPad.prototype.reload = function()
{
	this.pixels().forEach(function(element, index, array)
	{
		$("#"+index).css("background-color", element.color());
	});
}

oPad.prototype.load = function(data)
{
	var json = $.parseJSON(data);
	this._frames = [];
	picker.element().empty();
	
	for(var f = 0; f < json.length; f++)
	{
		var frame = json[f];
		pad.addFrame();
		pad.selectFrame(f);
		for(var p = 0; p < frame.length; p++)
		{
			var color = frame[p];
			pad.pixels()[p].setColor(color);
		}
	}
}

oPad.prototype.clear = function()
{
	this.pixels().forEach(function(element, index, array)
	{
		element.setColor("transparent");
	});
}

oPad.prototype.stringify = function()
{
	var str = "Pad:";
	return str;
}

