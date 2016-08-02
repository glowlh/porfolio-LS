<?php

class About_controller extends Controller {

    public function __construct() {
        require_once ('app/models/skilles_model.php');
    }
    
    public function index_action() {
        $model = new Skilles_model;
        $skilles = $model->get_skilles();

        Controller::generate_view('about');
    }

}