
<?php
//<!--Called by load() in PadJS.js-->
	$filepath = $_POST['file'];

	$contents = file_get_contents($filepath);

	if($contents === false)
	{
		echo "Failure";
	}
	else
	{
		echo $contents;	
	}

?>