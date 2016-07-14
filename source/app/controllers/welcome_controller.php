<?php

class Welcome_controller extends Controller {

    public function __construct() {
        Controller::generateView('welcome');
    }

}