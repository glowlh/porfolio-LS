<?php

class Route {

    public static function init() {

        $controller_name = 'welcome';

        $routes = explode('/', $_SERVER['REQUEST_URI']);

        if(!empty($routes[1])) {
            $controller_name = $routes[1];
        }

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

        new $controller_name;
    }

    public static function error404() {
        $host = 'http://'.$_SERVER['HTTP_HOST'].'/';
        header('HTTP/1.1 404 Not Found');
        header("Status: 404 Not Found");
        header('Location:'.$host.'page404');
    }

}