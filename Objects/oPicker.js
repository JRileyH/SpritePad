function oPicker()
{
	this._tracks = 0;
}
//Constants
oPicker.prototype.tracks = function(){return this._tracks;}

oPicker.prototype.stringify = function()
{
	var str = "Picker:";
	return str;
}