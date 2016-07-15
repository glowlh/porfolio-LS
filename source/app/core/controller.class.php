<?php

class Controller {
    
    public static function is_guest() {
        return !isset($_SESSION['login']);
    }
    
    public static function generate_view($viewName, $data = null) {

        if(is_array($data)) {
            extract($data);
        }
        
        require_once ('app/views/'.$viewName.'.php');
    }
    
}