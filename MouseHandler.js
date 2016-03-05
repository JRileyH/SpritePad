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
	});

	$(".panel").on("click", function()
	{
		var elem = $(this);
		//$('.panel').css("background-color", "blue");
		//elem.css("background-color", "red");
		var place = elem.index();
		pad.selectFrame(place);
	});
}
setMouseHandler();