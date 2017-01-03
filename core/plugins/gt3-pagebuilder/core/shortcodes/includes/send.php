<?php

if($_POST){
    $email = $_POST['email']; //get input text
	$tel = $_POST['message_tel'];
	$to = "patrick@studiodin.nl";
	$onderwerp = "Ingevulde autorisatie Studiodin.nl";
	$message = "Er is een autorisatie aangevraagd om de portfolio items te bekijken met het volgende emailadres: " . $email;
//send email
    mail($to,$onderwerp,$message);
	
}
			
?>