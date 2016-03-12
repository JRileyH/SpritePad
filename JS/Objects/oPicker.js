function oPicker(div)
{
	this._div = div;
}
//Constants
oPicker.prototype.element = function(){return this._div;}

oPicker.prototype.add = function()
{
	this._div.append("<div class='panel'></div>");
	if(typeof setMouseHandler == 'function'){setMouseHandler();}
}

oPicker.prototype.remove = function()
{
	this._div.children().last().remove();
}

oPicker.prototype.stringify = function()
{
	var str = "Picker:";
	return str;
}
