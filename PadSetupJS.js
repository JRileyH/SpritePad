var locked = [true, true, true, false, false, false, false, false, false];
var colors = ["#000000", "#FFFFFF", "transparent", "", "", "", "", "", ""];

$( document ).ready(function()
{
	$("#StartButton").hide();
	$("#BlackPaint").css("background-color", "#000000");
	$("#WhitePaint").css("background-color", "#FFFFFF");
	console.log("PadSetupJS Loaded");
	
	$(".PaintBox").on("click", function()
	{
		var elem = $(this);
		var place = elem.index();

		if(!locked[place])
		{
			var color = randomColor();
			elem.empty().css("background-color", color);
			colors[place] = color;
			locked[place] = true;
		}
		
		var done = true;
		for(var b = 0; b < locked.length; b++)
		{
			if(locked[b] === false)
			{
				done = false;
				break;
			}
		}
		if(done)
		{
			$('#StartButton').show();
		}
	});
	
});

function randomColor()
{
	var color = "#";
	var pool = "0123456789ABCDEF"
	
	for( var i=0; i < 6; i++ )
	{
        color += pool.charAt(Math.floor(Math.random() * pool.length));
	}
	return color;	
}

function saveColors()
{
	
	if(loggedIn)
	{
		$.ajax(
		{
			url:'SaveColors.php',
			type:'post',
			data:
			{
				colors: JSON.stringify(colors),
				user: userName
			},
			success: function(data)
			{
				window.location = 'Pad.php';
			},
			error: function(data)
			{
				alert(data.status + "\n" + data.responseText);
			}
		});
	}
	else
	{
		alert("you must log in to do that...");
	}
	
}