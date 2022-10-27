<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/PHPMailer.php";
    require "PHPMailer/src/Exception.php";

    /* $headers = " text/plain: text/html; charset=utf-8 \r\n"; */

    $mail = new PHPMailer(true);
    $mail->charSet = "UTF-8";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $body = $name . ' ' . $email . ' ' . $phone . ' ' . $message;
    $theme = ("Заявка с формы");

    
    $mail->From = ("info@karinalesogor.ru");
    $mail->AddAddress("karina_lesogor@mail.ru");

    $mail->Subject = $theme;
    $mail->Body = $body;

    $mail->send();
?>