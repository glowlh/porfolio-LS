<?php

class Page404_controller extends Controller {
    
    public function __construct() {
        Controller::generateView('page404');
    }

}