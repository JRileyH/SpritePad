
<?php
//<!--Called by save() in PadJS.js
	$filename = $_POST['file'];
	$username = $_POST['user'];
	$contents = $_POST['json'];

	$file = fopen("../../../sleepyfish/UserStorage/u_".$username."/SpritePads/".$filename.".spritepad", "w");

	fwrite($file, $contents);
	fclose($file);
?>