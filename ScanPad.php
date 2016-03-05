<?php
	$filename = $_POST['file'];
	$username = $_POST['user'];

	//$contents = scandir("../../sleepyfish/UserStorage/u_".$username."/SpritePads");
	$contents = glob("../../sleepyfish/UserStorage/u_".$username."/SpritePads/*.spritepad", GLOB_BRACE);

	if($contents === false)
	{
		echo "Failure";
	}
	else
	{
		foreach($contents as $file)
		{
			$info = pathinfo($file);
			echo "<input type='button' value='".$info['filename']."' onclick='load(\"".$file."\");'/><br>";	
		}
	}

?>