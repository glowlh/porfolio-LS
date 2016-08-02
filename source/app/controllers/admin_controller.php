<?php

class Admin_controller extends Controller {

    public function __construct() {
        require_once ('app/models/users_model.php');
        require_once ('app/models/skilles_model.php');
        require_once ('app/models/blog_model.php');
    }

    public function index_action() {
        $model = new Users_model;
        $users = $model->get_users();

        Controller::generate_view('admin', array(
            "users" => $users
        ));
    }

    public function about_action() {
        $model  = new Skilles_model;
        $response = $model->get_skilles();
        print_r(json_encode($response));
    }

    public function save_about_action() {
        if(empty($_POST)) {
            exit('Данные не получены');
        }

        $data = json_decode($_POST['data'], true);

        require('app/vlucas/valitron/src/valitron/Validator.php');
        $v = new Valitron\Validator($data);

        foreach($data as $key => $item) {
            $v->rule('required', $key);
            $v->rule('integer', $key);
            if(!$v->validate()) {
                print_r (json_encode(array(
                    "message" => "Введены не целые числа"
                ), JSON_UNESCAPED_UNICODE));
                return;
            }
        }

        $model = new Skilles_model;
        $model->save_skills($data);
        print_r (json_encode(array(
            "message" => "Данные сохранены"
        ), JSON_UNESCAPED_UNICODE));
    }

    public function save_blog_action() {
        if(empty($_POST)) {
            exit('Данные не получены');
        }

        $data = json_decode($_POST['data'], true);

        require('app/vlucas/valitron/src/valitron/Validator.php');
        $v = new Valitron\Validator($data);

        foreach($data as $key => $item) {
            $v->rule('required', $key);
            if(!$v->validate()) {
                print_r (json_encode(array(
                    "message" => "Не все поля заполнены"
                ), JSON_UNESCAPED_UNICODE));
                return;
            }
        }

        $model = new Blog_model;
        $model->save_article($data);
        print_r (json_encode(array(
            "message" => "Данные сохранены"
        ), JSON_UNESCAPED_UNICODE));
    }

    public function ranges_action() {
        $model  = new Skilles_model;
        $response = $model->get_ranges();
        print_r(json_encode($response));
    }

    public function works_action() {
        Controller::generate_view('admin', array(
            "temp" => "MARY!"
        ));
    }

    public function logout_action() {
        unset($_SESSION['login'], $_SESSION['id']);
        $host = 'http://'.$_SERVER['HTTP_HOST'].'/';
        header('Location:'.$host.'welcome');
        exit();
    }

}