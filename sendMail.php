
<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require './PHPMailer/src/Exception.php';
    require './PHPMailer/src/PHPMailer.php';
    require './PHPMailer/src/SMTP.php';

    $company = htmlentities($_POST['company']);
    $email = htmlentities($_POST['email']);
    $phonenumber = htmlentities($_POST['phoneNumber']);
    $message = htmlentities($_POST['message']);
    $tittle = "Заявка с сайта";
    
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->CharSet = "utf-8";
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'mineguyemilplay@gmail.com';
    $mail->Password = 'eophqcdnwprnkimk';
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->isHTML(true);

    $mail->addAddress('mineguyemilplay@gmail.com');
    $mail->Subject = ("$tittle");
    
    if (trim(!empty($message))) {
        $mail->Body.= '<p><strong>Сообщение:</strong> '.$_POST[message].'</p>';
    }
    if (trim(!empty($company))) {
        $mail->Body.= '<p><strong>Компания:</strong> '.$_POST[company].'</p>';
    }
    if (trim(!empty($phonenumber))) {
        $mail->Body.= '<p><strong>Телефон:</strong> '.$_POST[phoneNumber].'</p>';
    }
    if (trim(!empty($email))) {
        $mail->Body.= '<p><strong>Почта:</strong> '.$_POST[email].'</p>';
    }

    $mail->send();

?>

