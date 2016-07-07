<?php

class WorksController {
    
    private $name;
    private $mail;
    private $message;

    public function __construct($name, $mail, $message) {
        $this->name = $name;
        $this->mail = $mail;
        $this->message = $message;
    }

    private function runValidation() {

        require('../vlucas/valitron/src/valitron/Validator.php');


        $v = new Valitron\Validator(array('mail' => $this->mail, 'name' => $this->name, 'message' => $this->message));
        $v->rule('required', ['mail', 'name', 'message']);
        $v->rule('email', 'mail');
        if($v->validate()) {
            return array(status => true);
        } else {
            return array(status => false);
        }
    }

    private function sendMail($from = array('m.o.gushchina@gmail.com', 'Гущина Мария')) {

        require('../phpmailer/phpmailer/PHPMailerAutoload.php');

        $mail = new PHPMailer;
        $mail->CharSet = 'utf-8';

        $mail->setFrom($from[0], $from[1]);
        $mail->addAddress($this->mail,  $this->name);
        $mail->isHTML(true);

        $mail->Subject = 'Письмо от Гущиной Марии';
        $mail->Body    = '<b>Добрый день!</b><br> Спасибо, что написали мне.<br>'."<i>\"". $this->message."\"</i>";
        $mail->AltBody = 'Добрый день! Спасибо за Ваше письмо.'. $this->message;

        if(!$mail->send()) {
            return 'Сообщение не может быть отправлено';
        } else {
            return 'Сообщение отправлено. Можете проверить свою почту';
        }
    }
    
    public function init() {
        $validation = $this->runValidation();
        if (!$validation["status"]) {
            print_r(json_encode("Проверьте корректность введённых данных!", JSON_UNESCAPED_UNICODE));
        } else {
            $response = $this->sendMail();
            print_r(json_encode($response, JSON_UNESCAPED_UNICODE));
        }
    }
}

if(empty($_POST)) {
    exit('Данные не получены');
}

$data = json_decode($_POST['data'], true);
$worksController = new WorksController($data["name"], $data["mail"], $data["message"]);
$worksController->init();