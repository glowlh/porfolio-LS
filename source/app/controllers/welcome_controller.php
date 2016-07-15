<?php

class Welcome_controller extends Controller {

    public function __construct() {
        require_once ('app/models/users_model.php');
    }

    public function index_action() {
        Controller::generate_view('welcome');
    }

    public function login_action() {

        if (isset($_SESSION['login'])) {
            unset($_SESSION['login']);
        }

        if(empty($_POST)) {
            exit('Данные не получены');
        }

        $data = json_decode($_POST['data'], true);
        $model = new Users_model();
        $user = $model->fetch_user($data["login"], $data["password"]);

        if(!empty($user)) {
            $_SESSION['login'] = $user[0]['login'];
            session_commit();
            print_r (json_encode(array(
                "message" => "Вы вошли в систему",
                "status" => true,
                "login" => $user[0]['login']
            ), JSON_UNESCAPED_UNICODE));
        } else {
            print_r (json_encode(array(
                "message" => "Неверный пароль или имя пользователя",
                "status" => false
            ), JSON_UNESCAPED_UNICODE));            
        }
    }

}