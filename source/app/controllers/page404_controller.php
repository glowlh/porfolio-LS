<?php

class Page404_controller extends Controller {
    
    public function __construct() {
    }

    public function index_action() {
        Controller::generate_view('page404');
    }

}