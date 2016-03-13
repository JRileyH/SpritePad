
	var picker = new oPicker($('#Picker'));
	var pad = new oPad(16, 16, 40, 40, $('#Pad'));
	var palette = new oPalette(200, 200, $('#Palette'), ["#000000", "#FFFFFF", "transparent", "#FF0000", "#00FF00", "#0000FF"]);
	var player = new oPlayer($('#Player'));
	var brush = new oPaintBrush();

	player.rescale(10);

console.log("PadJS Loaded");

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