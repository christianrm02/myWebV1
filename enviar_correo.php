<?php
	$email = $_POST['email'];
	$asunto = 'Formulario Rellenado';
	$mensaje = "Email: $email<br> Mensaje:".$_POST['mensaje'];

	if(mail('christianrm02@gmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>