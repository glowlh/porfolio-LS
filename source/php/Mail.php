<?php

/**
 * Class Mail
 */

class Mail
{
    private $from = array();
    private $to = array();
    private $message;

    public function __construct($to, $message, $from = array('m.o.gushchina@gmail.com', 'Гущина Мария')) {
        $this->from = $from;
        $this->to = $to;
        $this->message = $message;
    }

    public function send() {
        
        require('./PHPMailer/PHPMailerAutoload.php');

        $mail = new PHPMailer;
        $mail->CharSet = 'utf-8';
        
        $mail->setFrom($this->from[0], $this->from[1]);
        $mail->addAddress($this->to[0], $this->to[1]);
        $mail->isHTML(true);  
        
        $mail->Subject = 'Письмо от Гущиной Марии';
        $mail->Body    = '<b>Добрый день!</b><br> Спасибо, что написали мне.<br>'."<i>\"".$this->message."\"</i>";
        $mail->AltBody = 'Добрый день! Спасибо за Ваше письмо.'.$this->message;

        if(!$mail->send()) {
            return json_encode(array("message" => "Сообщение не может быть отправлено"), JSON_UNESCAPED_UNICODE);
        } else {
            return json_encode(array("message" => "Сообщение отправлено. Можете проверить свою почту"), JSON_UNESCAPED_UNICODE);
        }
    }

}