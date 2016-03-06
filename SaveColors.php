<?php
	$colors = $_POST['colors'];
	$username = $_POST['user'];
	$path = "../../sleepyfish/UserStorage/u_".$username."/SpritePads/";

	$file = fopen($path."colors.palette", "w");

	fwrite($file, $colors);
	fclose($file);

?>