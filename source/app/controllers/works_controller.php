<?php

class Works_controller extends Controller {

    public function __construct() {
    }

    public function index_action() {
        Controller::generate_view('works');
    }


        public function sendmail_action() {

        if(empty($_POST)) {
            exit('Данные не получены');
        }

        $data = json_decode($_POST['data'], true);
        $email = $data["mail"];
        $name = $data["name"];
        $message = $data["message"];

        $validation = $this->validate(array(
            "mail" => $email,
            "name" => $name,
            "message" => $message
        ));
        if (!$validation["status"]) {
            print_r(json_encode("Проверьте корректность введённых данных!", JSON_UNESCAPED_UNICODE));
        } else {
            require('app/phpmailer/phpmailer/PHPMailerAutoload.php');

            $from = array('m.o.gushchina@gmail.com', 'Гущина Мария');
            $mail = new PHPMailer;
            $mail->CharSet = 'utf-8';

            $mail->setFrom($from[0], $from[1]);
            $mail->addAddress($email,  $name);
            $mail->isHTML(true);

            $mail->Subject = 'Письмо от Гущиной Марии';
            $mail->Body    = '<b>Добрый день!</b><br> Спасибо, что написали мне.<br>'."<i>\"". $message."\"</i>";
            $mail->AltBody = 'Добрый день! Спасибо за Ваше письмо.'. $message;

            if(!$mail->send()) {
                print_r(json_encode('Сообщение не может быть отправлено', JSON_UNESCAPED_UNICODE));

            } else {
                print_r(json_encode('Сообщение отправлено. Можете проверить свою почту', JSON_UNESCAPED_UNICODE));
            }
        }


    }

    private function validate($data = array()) {
        require('app/vlucas/valitron/src/valitron/Validator.php');
        $v = new Valitron\Validator($data);
        $v->rule('required', ['mail', 'name', 'message']);
        $v->rule('email', 'mail');
        if($v->validate()) {
            return array("status" => true);
        } else {
            return array("status" => false);
        }
    }

}