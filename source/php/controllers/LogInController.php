<?php

require_once ('../models/UsersModel.php');

class LogInController {

    private $login;
    private $password;
    private $userModel;
    public  $currentUser;

    public function __construct($login, $password) {
        $this->login = $login;
        $this->password = $password;
        $this->userModel = new UsersModel();
    }

    public function fetchUser() {
        $this->currentUser = $this->userModel->fetchUser($this->login, $this->password);
        print_r(json_encode($this->currentUser, JSON_UNESCAPED_UNICODE));
    }

    public function getModel() {
        return $this->userModel;
    }
}

if(empty($_POST)) {
    exit('Данные не получены');
}

$data = json_decode($_POST['data'], true);
$logInController = new LogInController($data["login"], $data["password"]);
$logInController->fetchUser();