<?php

class Route {

    public static function init() {

        $controller_name = 'welcome';

        $routes = explode('/', $_SERVER['REQUEST_URI']);

        if(!empty($routes[1])) {
            $controller_name = $routes[1];
        }

        if(!empty($routes[2])) {
            $action_name = $routes[2];
        } else {
            $action_name = 'index';
        }

        $action_name = $action_name.'_action';

        $controller_name = ucfirst($controller_name).'_controller';
        $controller_file = strtolower($controller_name).'.php';
        $controller_path = 'app/controllers/'.$controller_file;

//            echo "<pre>";
//            print_r($controller_name);
//            echo "</pre>";

        if(file_exists($controller_path)) {
            require_once ($controller_path);
        } else {
            self::error404();
        }

        $controller = new $controller_name;
        $action = $action_name;
        
        if(method_exists($controller, $action)) {
            $controller->$action();
        } else {
            self::error404();
        }
        
    }

    public static function error404() {
        $host = 'http://'.$_SERVER['HTTP_HOST'].'/';
        header('HTTP/1.1 404 Not Found');
        header("Status: 404 Not Found");
        header('Location:'.$host.'page404');
        exit();
    }

}