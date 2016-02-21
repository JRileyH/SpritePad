function oPixel(x, y, w, h, id)
{
	this._x = x;
	this._y = y;
	this._w = w;
	this._h = h;
	this._id = id;
	this._color = "transparent";
}
//Constants
oPixel.prototype.x = function(){return this._x;}
oPixel.prototype.y = function(){return this._y;}
oPixel.prototype.width = function(){return this._w;}
oPixel.prototype.height = function(){return this._h;}
oPixel.prototype.id = function(){return this._id;}
oPixel.prototype.color = function(){return this._color;}
oPixel.prototype.element = function(){return $('#'+this._id)}

//Directions
oPixel.prototype.getNeighbor = function(dir)
{
	var x = this._x;
	var y = this._y;
	switch(dir)
	{
		case 'N':
		y--;
		break;

		case 'NW':
		x--;y--;
		break;

		case 'W':
		x--;
		break;

		case 'SW':
		x--;y++;
		break;

		case 'S':
		y++;
		break;

		case 'SE':
		x++;y++;
		break;

		case 'E':
		x++;
		break;

		case 'NE':
		x++;y--;
		break;

		default:
		return false;
	}
	if(y >= 0 && x >= 0 && y < pad.padH() && x < pad.padW())
	{
		var id = pad.findPixel(x, y);
		return id;
	}
}

//Developer Tools
oPixel.prototype.getNeighbors4 = function()
{
	var neighbors = [];
	var neighbor;
	
	neighbor = this.getNeighbor('N');if(neighbor){neighbor=pad.pixels()[neighbor];neighbors.push(neighbor);}
	neighbor = this.getNeighbor('W');if(neighbor){neighbor=pad.pixels()[neighbor];neighbors.push(neighbor);}
	neighbor = this.getNeighbor('S');if(neighbor){neighbor=pad.pixels()[neighbor];neighbors.push(neighbor);}
	neighbor = this.getNeighbor('E');if(neighbor){neighbor=pad.pixels()[neighbor];neighbors.push(neighbor);}

	return neighbors;
}
oPixel.prototype.getNeighbors8 = function()
{
	var neighbors = [];
	var neighbor;

	neighbor = this.getNeighbor('N');if(neighbor){neighbor=pad.pixels()[neighbor];neighbors.push(neighbor);}
	neighbor = this.getNeighbor('NW');if(neighbor){neighbor=pad.pixels()[neighbor];neighbors.push(neighbor);}
	neighbor = this.getNeighbor('W');if(neighbor){neighbor=pad.pixels()[neighbor];neighbors.push(neighbor);}
	neighbor = this.getNeighbor('SW');if(neighbor){neighbor=pad.pixels()[neighbor];neighbors.push(neighbor);}
	neighbor = this.getNeighbor('S');if(neighbor){neighbor=pad.pixels()[neighbor];neighbors.push(neighbor);}
	neighbor = this.getNeighbor('SE');if(neighbor){neighbor=pad.pixels()[neighbor];neighbors.push(neighbor);}
	neighbor = this.getNeighbor('E');if(neighbor){neighbor=pad.pixels()[neighbor];neighbors.push(neighbor);}
	neighbor = this.getNeighbor('NE');if(neighbor){neighbor=pad.pixels()[neighbor];neighbors.push(neighbor);}

	return neighbors;
}
oPixel.prototype.setColor = function(hexStr)
{
	function validHex(str)
	{
	    return str.match(/^#[a-f0-9]{6}$/i) !== null;
	}

	if(validHex(hexStr))
	{
		this._color = hexStr;
		$('#'+this._id).css('background-color', hexStr);
	}
	else if(hexStr === "transparent")
	{
		this._color = "transparent";
		$('#'+this._id).css('background-color', "transparent");
	}
	else
	{
		alert("Invalid Color: "+this._id+" : "+hexStr);
	}
}
oPixel.prototype.stringify = function()
{
	var str = "Pixel:"+this._id+":("+this._x+","+this._y+")"+":"+this._color;
	return str;
}
