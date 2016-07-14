<?php

class Admin_controller extends Controller {

    public function __construct() {

        require_once ('app/models/about_model.php');
        $model = new About_model;
        $users = $model->getUsers();

//        echo "<pre>";
//        print_r($users);
//        echo "</pre>";

        Controller::generateView('admin', array(
         "users" => $users
        ));
    }

}