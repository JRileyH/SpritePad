<?php session_start(); ?>

<html>

<head>
	<title>Sprite Pad - Setup</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<link rel="stylesheet" type="text/css" href="PadStyle.css">
	<link rel="stylesheet" type="text/css" href="PadSetupStyle.css">
	<script src="../JS/jquery.js"></script>
	<script type="text/javascript">
		var loggedIn = false;
		var userName = "";
	</script>
	<script type="text/javascript" src="PadSetupJS.js"></script>
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
	
	<div id="WelcomeBox">
		<p id="WelcomeMsg">
		I see you are new to SpritePad! Welcome! I'm sure you're eager to get started but first we need to get you setup.<br>
		To create Sprite you will need some paints. All players are given black paint, white paint, and an eraser to start with but that's no fun really.<br>
		So I will start you off with 6 random colors for free! These colors will be added to your Paint Palette.<br>
		These colors stay saved on your account but if you get bored of your starting paints, don't worry! Soon you will be able to unlock new colors by playing (Game Name Here)!<br>
		So go ahead and get your free paints and then you can go on to create your own custom Sprites! Happy Painting!<br>
		</p>
	</div>
	
	<div id="ColorBox">
		<div id="BlackPaint" class="PaintBox"></div>
		<div id="WhitePaint" class="PaintBox"></div>
		<div id="TransparentPaint" class="PaintBox">Eraser</div>
		<div id="RandomPaint1" class="PaintBox">?</div>
		<div id="RandomPaint2" class="PaintBox">?</div>
		<div id="RandomPaint3" class="PaintBox">?</div>
		<div id="RandomPaint4" class="PaintBox">?</div>
		<div id="RandomPaint5" class="PaintBox">?</div>
		<div id="RandomPaint6" class="PaintBox">?</div>
	</div>
	
	<input id="StartButton" type="button" value="Start!" onclick="saveColors()"/>
</body>



</html>