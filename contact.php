<?php

    $email = $_POST['mail'];
    $message = $_POST['message'];
    $headers = "FROM: ".$email;

$messageMail = "
            Formulaire de contact:
            
            Email :   ".$email."
            
            ----------- Commentaires -----------
            ".Stripslashes($message)."
            ---------------------------------------";

    mail('otayadi@gmail.com','Formulaire',$messageMail,$headers);
    header('Location: index.html');

