<?php

class About_controller extends Controller {

    public function __construct() {
    }
    
    public function index_action() {
        Controller::generate_view('about');
    }
}