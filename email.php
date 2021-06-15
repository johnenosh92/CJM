<?php
if ($_POST) {
	$name = $_POST ['name'];
	$email = $_POST ['email'];
	$text = $_POST ['text'];
	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= "From: The test site" . "\r\n";
	$headers = "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	$headers .= "From: <" . $email . ">\n";
	$headers .= "Reply-To: <". $email . ">\n";
	$headers .= "X-Priority: 1\n";
	$message = "<html><body style='font-family: 'Helvetica', 'Arial', sans-serif;''>";
	$message .= '<h2 style="color:#128A7D ">MAIL FROM THE WEBSITE</h2>';
	$message .= '<h3><strong style="color: #128A7D">Name: </strong> ' . ucwords($name) . '<br>';
	$message .= '<strong style="color: #128A7D">Email ID: </strong> ' . $email . '<br>';
	$message .= '<strong style="color: #128A7D">Message: </strong> ' . $text .'</h3>';
	$message .= "</body></html>";
	$toEmail = "johnenosh92@gmail.com";
	$subject = "WEBSITE MAIL - ". ucwords($name);
	// info@odedtech.com
	// send email
	if (mail ( $toEmail, $subject, $message, $headers )) {
		print "<p class='success'>Mail Sent.</p>";
	} else {
		print "<p class='Error'>Problem in Sending Mail.Try again later.</p>";
	}
}
?>

