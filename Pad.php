<?php session_start(); ?>

<html>

<head>
	<title>Sprite Pad</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<link rel="stylesheet" type="text/css" href="PadStyle.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<script type="text/javascript" src="Objects/oPad.js"></script>
	<script type="text/javascript" src="Objects/oPixel.js"></script>
	<script type="text/javascript" src="Objects/oPalette.js"></script>
	<script type="text/javascript" src="Objects/oPaintBlob.js"></script>
	<script type="text/javascript" src="Objects/oPaintBrush.js"></script>
	<script type="text/javascript" src="Objects/oPicker.js"></script>
	<script type="text/javascript" src="Objects/oPlayer.js"></script>
	<script type="text/javascript">
		var loggedIn = false;
		var userName = "";
	</script>
</head>

<body>
	
	<?php
		if (isset($_SESSION['ID']))
		{?>
			<script type="text/javascript">
				loggedIn = true;
				userName = <?php echo '"'.$_SESSION['USER'].'"' ?>;
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

<script type="text/javascript" src="PadJS.js"></script>
<script type="text/javascript" src="MouseHandler.js"></script>

</html>
