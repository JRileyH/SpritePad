function oPalette(w, h, div, colors)
{
	this._w = w;
	this._h = h;
	this._blobs = [];
	this._div = div;
	
	function largestSquare(n)
	{
		var found = false;
		var square = 0;
		while(!found)
		{
			if(square*square >= n)
			{
				return square;
			}
			square++;
		}
	}
	var dim = largestSquare(colors.length);
	
	var htmlStr = "";
	for(var c = 0; c < colors.length; c++)
	{
		this._blobs.push(new oPaintBlob(colors[c], "blob"+c));
		htmlStr = htmlStr + "<div id='blob"+c+"' class='paintBlob' style='background-color:"+colors[c]+"'></div>";
	}
	div.html(htmlStr);
	
	div.css("width", this._w+"px");
	div.css("height", this._h+"px");
	$('.paintBlob').css("width", Math.floor(this._w/dim)+"px");
	$('.paintBlob').css("height", Math.floor(this._h/dim)+"px");
	setMouseHandler();
}
//Constants
oPalette.prototype.blobs = function(){return this._blobs;}
oPalette.prototype.element = function(){return this._div;}

oPalette.prototype.stringify = function()
{
	var str = "Palette:{";
	for(var c = 0; c < this._blobs.length-1; c++)
	{
		str = str + this._blobs[c].stringify()+", ";
	}
	str = str + this._blobs[this._blobs.length-1].stringify()+"}";
	
	return str;
}

