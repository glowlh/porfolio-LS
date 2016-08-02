<?php

class Blog_controller extends Controller {

    public function __construct() {
        require_once ('app/models/blog_model.php');
    }

    public function index_action() {
        Controller::generate_view('blog');
    }


    public function get_articles_action() {
        $model  = new Blog_model;
        $response = $model->get_articles();
        print_r(json_encode($response));
    }

}