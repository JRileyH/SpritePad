
<?php
//<!--called by scan() in PadJS.js-->
//<!--Creates links to .spritepad files in u_folder-->
	$username = $_POST['user'];

	$contents = glob("../../../sleepyfish/UserStorage/u_".$username."/SpritePads/*.spritepad", GLOB_BRACE);

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