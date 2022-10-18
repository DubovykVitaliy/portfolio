<?php 
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
// require_once('phpmailer/PHPMailerAutoload.php');


$title = "New message from Portfolio.";
$body = 
'<h2>New message from your site</h2><br>
<b>Name:</b> '.$name .'<br><br>
<b>Email:</b>'. $email.' <br><br>
<b>Message:</b>'. $message.' <br>'
;


// $mail = new PHPMailer();
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {


	$mail->CharSet = 'utf-8';
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->SMTPAuth = true;                               // Enable SMTP authentication

	$mail->SMTPDebug = 2;                               // Enable verbose debug output
	$mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

	$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
	$mail->Username = 'vitaliyserv82@gmail.com';                 // Наш логин
	$mail->Password = 'sheeexmeqrgomiuq';                           // Наш пароль от ящика
	$mail->SMTPSecure = 'ssl';                          // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;                                    // TCP port to connect to
	
	$mail->setFrom('vitaliyserv82@gmail.com', 'Portfolio');   // От кого письмо 
	$mail->addAddress('dubovykve@gmail.com');     // Add a recipient
	//$mail->addReplyTo('info@example.com', 'Information');
	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

	//        

	$mail->isHTML(true);                                  // Set email format to HTML
	$mail->Subject = $title;
	$mail->Body = $body;  

	if ($mail->send()) {
		$result = "success";
	}
	else {
		$result = "error";
	}

}  catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

?>