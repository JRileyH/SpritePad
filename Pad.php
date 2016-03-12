<?php session_start(); ?>

<html>

<head>
	<title>Sprite Pad</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<link rel="stylesheet" type="text/css" href="CSS/PadStyle.css">
	<script src="../JS/jquery.js"></script>
	<script type="text/javascript" src="JS/Objects/oPad.js"></script>
	<script type="text/javascript" src="JS/Objects/oPixel.js"></script>
	<script type="text/javascript" src="JS/Objects/oPalette.js"></script>
	<script type="text/javascript" src="JS/Objects/oPaintBlob.js"></script>
	<script type="text/javascript" src="JS/Objects/oPaintBrush.js"></script>
	<script type="text/javascript" src="JS/Objects/oPicker.js"></script>
	<script type="text/javascript" src="JS/Objects/oPlayer.js"></script>
	<script type="text/javascript">
		var loggedIn = false;
		var userName = "";
		var colors = [];
	</script>
</head>

<body>
	
	<?php
		if (isset($_SESSION['ID']))
		{?>
			<script type="text/javascript">
				loggedIn = true;
				userName = <?php echo '"'.$_SESSION['USER'].'"' ?>;
				$.ajax(
				{
					url:'PHP/LoadColors.php',
					type:'post',
					data:
					{
						user:userName
					},
					success: function(data)
					{
						if(data === "newbie"){window.location = 'PadSetup.php';}
						colors = $.parseJSON(data);
						palette = new oPalette(200, 200, $('#Palette'), colors);
					},
					error: function(data)
					{
						alert(data.status + "\n" + data.responseText);
					}
				});
			</script>
		<?php 
		}
		else
		{?>
			<script type="text/javascript">
				alert("You are not logged in. If you want to save/load SpritePads you must go create an account and log in.");
			</script>
		<?php 
		}
	?>
	
	<div id="Pad"></div>
	<div id="Palette"></div>
	<div id="Player"></div>
	<div id="Picker"></div>
	
	
	<!--Temporary Frame Selection-->
	<div id="ButtonBox">
		<input type="button" value="+" onclick="add()"/>
		<input type="button" value="-" onclick="del()"/>

		<input id="FileName" type="text"/>
		<!--<div id="FilesScanned"></div>-->
		<input type="button" value="Save" onclick="save()"/>
		<input type="button" value="Download" onclick="download()"/>
		<input type="button" value="Load" onclick="scan()"/>
		<div id="ScannedFiles"></div>
	</div>
	<!--Temporary Frame Selection-->
	
</body>
	
<script type="text/javascript" src="JS/MouseHandler.js"></script>
<script type="text/javascript" src="JS/PadJS.js"></script>


</html>
