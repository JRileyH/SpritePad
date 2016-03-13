var mouseDown = false;
function setMouseHandler()
{
	$(".paintBlob").on("click", function()
	{
		var elem = $(this);
		var blobID = elem.attr("id").split('blob')[1];
		var blob = palette.blobs()[blobID];
		brush.setColor(blob.color());
	});

	$(".pixel").on("click", function()
	{
		var elem = $(this);
		var pixelID = elem.attr("id");
		var pixel = pad.pixels()[pixelID];
		pixel.setColor(brush.color());
	}).on("mouseenter", function()
	{
		if(mouseDown)
		{
			var elem = $(this);
			var pixelID = elem.attr("id");
			var pixel = pad.pixels()[pixelID];
			pixel.setColor(brush.color());
		}
	});

	$(".panel").on("click", function()
	{
		var elem = $(this);
		var place = elem.index();
		pad.selectFrame(place);
	});
	
	
	$("body").on("mousedown", function()
	{
		mouseDown = true;
	});
	$("body").on("mouseup", function()
	{
		mouseDown = false;
	});
	
}
setMouseHandler();
