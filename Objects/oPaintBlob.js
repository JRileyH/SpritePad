function oPaintBlob(color, id)
{
	this._id = id;
	this._color = color;
}
//Constants
oPaintBlob.prototype.color = function(){return this._color;}

oPaintBlob.prototype.setColor = function(hexStr)
{
	function validHex(str)
	{
	    return str.match(/^#[a-f0-9]{6}$/i) !== null;
	}
	
	if(validHex(hexStr))
	{
		this._color = hexStr
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

oPaintBlob.prototype.stringify = function()
{
	var str = this._id+":"+this._color;
	return str;
}
