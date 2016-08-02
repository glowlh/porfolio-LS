<?php

class Works_controller extends Controller {

    public function __construct() {
        require_once ('app/models/works_model.php');
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

    public function get_works_action() {
        $model  = new Works_model;
        $response = $model->get_works();
        print_r(json_encode($response));
    }

    public function save_action() {
        if(empty($_POST)) {
            exit('Данные не получены');
        }

        $fields = $_POST;

        if($this->validateFile() && $this->validateWorksData($fields)) {
            $sourcePath = $_FILES['picture']['tmp_name'];
            $targetPath = "assets/img/work-".$_FILES['picture']['name'];
            move_uploaded_file($sourcePath, $targetPath);

            $fields["picture"] = $targetPath;
            $model = new Works_model;
            $model->save_work($fields);
            print_r (json_encode(array(
                "message" => "Данные сохранены"
            ), JSON_UNESCAPED_UNICODE));
        }

//        print_r($_POST);
//        print_r($_FILES);
    }

    private function validateFile() {
        if (isset($_FILES["picture"]["type"])) {
            $validExtensions = array("jpeg", "jpg", "png");
            $temporary = explode(".", $_FILES["picture"]["name"]);
            $file_extension = end($temporary);
            if ((($_FILES["picture"]["type"] == "image/png") || ($_FILES["picture"]["type"] == "image/jpg") || ($_FILES["picture"]["type"] == "image/jpeg")
                ) && ($_FILES["picture"]["size"] < 500000)
                && in_array($file_extension, $validExtensions)
            ) {
                if ($_FILES["picture"]["error"] > 0) {
                    print_r (json_encode(array(
                        "message" => "Ошибка загрузки файла"
                    ), JSON_UNESCAPED_UNICODE));
                    return false;
                }
            }
        }

        return true;
    }

    private function validateWorksData($data) {
        require('app/vlucas/valitron/src/valitron/Validator.php');
        $v = new Valitron\Validator($data);
        $v->rule('required', ['title', 'link', 'technologies']);
        $v->rule('url', 'link');
        if($v->validate()) {
            return true;
        } else {
            print_r (json_encode(array(
                "message" => "Ошибка введённых данных"
            ), JSON_UNESCAPED_UNICODE));
            return false;
        }
    }
}