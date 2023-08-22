<?php
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];
$telefono = $_post['telefono'];

$destinatario = "gruposidiuy@gmail.com;
$asunto = "Contacto desde pagina web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo\n";
$carta .= "Telefono: $telefono\n";
$carta .= "Mensaje: $mensaje";


mail($destinatario, $asunto, $carta);
header('Location:enviar.html')
?>