<?php

require_once ('../models/UsersModel.php');

class LogInController {

    private $login;
    private $password;
    private $userModel;

    public function __construct($login, $password) {
        $this->login = $login;
        $this->password = $password;
        $this->userModel = new UsersModel();
    }

    public function logIn() {
        $status = $this->userModel->getUser($this->login, $this->password);
        if($status) {
            header("Location: /admin/about.php");
            exit();
        }
        print_r(json_encode($status, JSON_UNESCAPED_UNICODE));

    }

}

if(empty($_POST)) {
    exit('Данные не получены');
}

$data = json_decode($_POST['data'], true);
$logInController = new LogInController($data["login"], $data["password"]);
$logInController->logIn();