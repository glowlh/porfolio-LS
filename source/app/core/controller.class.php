<?php

class Controller {
    
    public static function isGuest() {
        return !isset($_SESSION['login']);
    }
    
    public static function generateView($viewName, $data = null) {

        if(is_array($data)) {
            extract($data);
        }
        
        require_once ('app/views/'.$viewName.'.php');
    }
    
}