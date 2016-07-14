<?php

class Blog_controller extends Controller {

    public function __construct() {
        Controller::generateView('blog');
    }

}