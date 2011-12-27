<?php

//error_reporting(E_ALL);
error_reporting(E_STRICT);

date_default_timezone_set('Europe/Madrid');

$message = $name = $phone = $date = $time = '[buit]';
$to = "mateu@humanbits.es";
$subject = "Formulari de contacte de la web";
$sender = 'rceperello@gmail.com';
if (isset($_REQUEST['email'])) {
  $sender = $_REQUEST['email'];
}
if (isset($_REQUEST['name'])) {
  $name = $_REQUEST['name'];
}
if (isset($_REQUEST['phone'])) {
  $phone = $_REQUEST['phone'];
}
if (isset($_REQUEST['date'])) {
  $date = $_REQUEST['date'];
}

if (isset($_REQUEST['time'])) {
  $time = $_REQUEST['time'];
}
if (isset($_REQUEST['message'])) {
  $message = $_REQUEST['message'];
}
$body = "El <strong>$name ($phone)</strong> ha mandat el seg&uuml;ent missatge:<br /><br />$message<br /><hr /><br /><strong>Vol venir:</strong>Dia $date, a les $time";

require_once('class.phpmailer.php');
//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

$mail             = new PHPMailer();

$mail->IsSMTP(); // telling the class to use SMTP
$mail->Host       = "mail.yourdomain.com"; // SMTP server
$mail->SMTPDebug  = 0;                     // enables SMTP debug information (for testing)
                                           // 1 = errors and messages
                                           // 2 = messages only
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
$mail->Host       = "smtp.gmail.com";      // sets GMAIL as the SMTP server
$mail->Port       = 465;                   // set the SMTP port for the GMAIL server
$mail->Username   = "rceperello@gmail.com";  // GMAIL username
$mail->Password   = "Tenc2nins";            // GMAIL password

$mail->SetFrom($sender, $name);
$mail->AddReplyTo($sender, $name);

$mail->Subject    = "Formulari de contacte de la web";

$mail->AltBody    = $body; // optional, comment out and test

$mail->MsgHTML($body);

$address = "hola@merceperello.es";
$mail->AddAddress($address, "Mercè Perelló Fisioteràpia");

if(!$mail->Send()) {
  $success = "Error: " . $mail->ErrorInfo;
} else {
  $success = "Missatge enviat correctament";
}

header('Location: http://merceperello.es/?message=' . urlencode($success));

?>
