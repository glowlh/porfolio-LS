<?php

class Admin_controller extends Controller {

    public function __construct() {

        require_once ('app/models/about_model.php');
    }

    public function index_action() {

        $model = new About_model;
        $users = $model->getUsers();

//        echo "in admin controller";
//        echo "<pre>";
//        print_r($users);
//        echo "</pre>";

        Controller::generate_view('admin', array(
            "users" => $users
        ));

    }

    public function logout_action() {
        unset($_SESSION['login']);
        header('Location: /welcome');
    }

}