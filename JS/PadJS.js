
	var picker = new oPicker($('#Picker'));
	var pad = new oPad(16, 16, 40, 40, $('#Pad'));
	var palette = new oPalette(200, 200, $('#Palette'), ["#000000", "#FFFFFF", "transparent", "#FF0000", "#00FF00", "#0000FF"]);
	var player = new oPlayer($('#Player'));
	var brush = new oPaintBrush();

	player.rescale(10);


/*
//Example Setup//
//ONE//
pad.pixels()[pad.findPixel(7, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 2)].setColor("#000000");
pad.pixels()[pad.findPixel(6, 2)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 3)].setColor("#000000");
pad.pixels()[pad.findPixel(5, 3)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 4)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 5)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 6)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 7)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 8)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 9)].setColor("#000000");
pad.pixels()[pad.findPixel(7,10)].setColor("#000000");
pad.pixels()[pad.findPixel(7,11)].setColor("#000000");
pad.pixels()[pad.findPixel(5,12)].setColor("#000000");
pad.pixels()[pad.findPixel(6,12)].setColor("#000000");
pad.pixels()[pad.findPixel(7,12)].setColor("#000000");
pad.pixels()[pad.findPixel(8,12)].setColor("#000000");
pad.pixels()[pad.findPixel(9,12)].setColor("#000000");

pad.addFrame();
pad.selectFrame(1);

//TWO//
pad.pixels()[pad.findPixel(6, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(8, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(5, 2)].setColor("#000000");
pad.pixels()[pad.findPixel(9, 2)].setColor("#000000");
pad.pixels()[pad.findPixel(4, 3)].setColor("#000000");
pad.pixels()[pad.findPixel(10,3)].setColor("#000000");
pad.pixels()[pad.findPixel(10,4)].setColor("#000000");
pad.pixels()[pad.findPixel(10,5)].setColor("#000000");
pad.pixels()[pad.findPixel(9, 6)].setColor("#000000");
pad.pixels()[pad.findPixel(8, 7)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 8)].setColor("#000000");
pad.pixels()[pad.findPixel(6, 9)].setColor("#000000");
pad.pixels()[pad.findPixel(5,10)].setColor("#000000");
pad.pixels()[pad.findPixel(4,11)].setColor("#000000");
pad.pixels()[pad.findPixel(4,12)].setColor("#000000");
pad.pixels()[pad.findPixel(5,12)].setColor("#000000");
pad.pixels()[pad.findPixel(6,12)].setColor("#000000");
pad.pixels()[pad.findPixel(7,12)].setColor("#000000");
pad.pixels()[pad.findPixel(8,12)].setColor("#000000");
pad.pixels()[pad.findPixel(9,12)].setColor("#000000");
pad.pixels()[pad.findPixel(10,12)].setColor("#000000");

pad.addFrame();
pad.selectFrame(2);

//THREE//
pad.pixels()[pad.findPixel(6, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(8, 1)].setColor("#000000");
pad.pixels()[pad.findPixel(5, 2)].setColor("#000000");
pad.pixels()[pad.findPixel(9, 2)].setColor("#000000");
pad.pixels()[pad.findPixel(4, 3)].setColor("#000000");
pad.pixels()[pad.findPixel(10,3)].setColor("#000000");
pad.pixels()[pad.findPixel(10,4)].setColor("#000000");
pad.pixels()[pad.findPixel(10,5)].setColor("#000000");
pad.pixels()[pad.findPixel(9, 6)].setColor("#000000");
pad.pixels()[pad.findPixel(6, 7)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 7)].setColor("#000000");
pad.pixels()[pad.findPixel(8, 7)].setColor("#000000");
pad.pixels()[pad.findPixel(9, 8)].setColor("#000000");
pad.pixels()[pad.findPixel(10,9)].setColor("#000000");
pad.pixels()[pad.findPixel(10,10)].setColor("#000000");
pad.pixels()[pad.findPixel(10,11)].setColor("#000000");
pad.pixels()[pad.findPixel(4,11)].setColor("#000000");
pad.pixels()[pad.findPixel(9,12)].setColor("#000000");
pad.pixels()[pad.findPixel(5,12)].setColor("#000000");
pad.pixels()[pad.findPixel(6, 13)].setColor("#000000");
pad.pixels()[pad.findPixel(7, 13)].setColor("#000000");
pad.pixels()[pad.findPixel(8, 13)].setColor("#000000");

pad.selectFrame(0);
//Example Setup//
*/

console.log("PadJS Loaded");


//<!--Temporary Frame Selection-->//
function add()
{
	pad.addFrame();
}
function del()
{
	pad.removeFrame();
}
function save()
{
	if($('#FileName').val().length > 0)
	{
		if(loggedIn)
		{
			var contents = JSON.stringify(pad.trimmedArray());
			$.ajax(
			{
				url:'PHP/SavePad.php',
				type:'post',
				data:
				{
					file:$('#FileName').val(),
					user:userName,
					json:contents
				},
				success: function(data)
				{
					alert("Saved to SleepyFish Server!");
				},
				error: function(data)
				{
					alert(data.status + "\n" + data.responseText);
				}
			});
		}
		else
		{
			alert("You must log in to do that...");
		}
	}
	else
	{
		alert("Name your project first!");	
	}
	
}

function scan()
{
	if(loggedIn)
	{
		$.ajax(
		{
			url:'PHP/ScanPad.php',
			type:'post',
			data:
			{
				user:userName
			},
			success: function(data)
			{
				alert(data);
				$('#ScannedFiles').html(data);
			},
			error: function(data)
			{
				alert("PadJS.scan() Failure: "+data.status + "\n" + data.responseText);
			}
		});
	}
	else
	{
		alert("you must log in to do that...");
	}
}

function load(filePath)
{
	$('#ScannedFiles').empty();
	if(loggedIn)
	{
		$.ajax(
		{
			url:'PHP/LoadPad.php',
			type:'post',
			data:
			{
				file:filePath
			},
			success: function(data)
			{
				pad.load(data);
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
function download()
{
	$('#DownloadLink').remove();
	var json = JSON.stringify(pad.trimmedArray());
	var data = "text/json;charset=utf-8,"+encodeURIComponent(json);
	$('<a id="DownloadLink" href="data:'+data+'" download="'+$('#FileName').val()+'.json">Download</a>').appendTo('#ButtonBox');
}
//<!--Temporary Frame Selection-->//