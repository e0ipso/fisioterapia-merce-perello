<?php
  var_dump($_POST);
  $name = $phone = $date = $time = '- buit -';
  $to = "mateu@humanbits.es";
  $subject = "Formulari de contacte de la web";
  $sender = 'rceperello@gmail.com';
  if (isset($_REQUEST['email'])) {
    $sender = $_REQUEST['email'];
  }
  $message = '- Buit -';
  if (isset($_REQUEST['message'])) {
    $message = $_REQUEST['message'];
  }
  $message = "El $name ($phone) ha mandat el següent missatge:\n\n$message\n\n------\n\nDia: $date\nHora: $time";
  $headers = "From: $sender";
  if (mail($to, $subject, $message, $headers)) {
    $success = "El teu missatge ha estat enviat";
  } else {
    $success = "Error enviat el missatge.";
  }
//  header('Location: http://merceperello.es/?message=' . urlencode($success));
?> 