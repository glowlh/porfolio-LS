<?php

    class Route {

        public static function init() {

            $routes = explode('/', $_SERVER['REQUEST_URI']);

            if(!empty($routes[2])) {
                $controller_name = $routes[2];
            } else if(!empty($routes[1])) {
                $controller_name = $routes[1];
            }

            $controller_file = strtolower($controller_name).'.php';
            $controller_path = 'app/controllers/'.$controller_file;

            echo "<pre>";
            print_r($_SERVER);
            echo "</pre>";

            if(file_exists($controller_path)) {
                require_once ($controller_path);
                new $controller_name;
            } else {
                self::error404();
            }
        }
        
        public static function error404() {
            echo 404;
//            header('');
        } 

    }