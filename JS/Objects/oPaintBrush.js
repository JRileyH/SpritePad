function oPaintBrush()
{
	this._color = "#000000";
}
//Constants
oPaintBrush.prototype.color = function(){return this._color;}

oPaintBrush.prototype.setColor = function(hexStr)
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
		alert("Invalid Color: PaintBrush : "+hexStr);
	}
	
}

oPaintBrush.prototype.stringify = function()
{
	var str = "PaintBrush:"+this._color;
	return str;
}