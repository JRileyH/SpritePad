<?php
//<!--Called by start up script in Pad.php-->
	$username = $_POST['user'];
	$path = "../../../sleepyfish/UserStorage/u_".$username."/SpritePads/";

	if(file_exists($path."colors.palette"))
	{
		$return = file_get_contents($path."colors.palette");
		echo $return;
	}
	else
	{
		echo "newbies";
	}
?>