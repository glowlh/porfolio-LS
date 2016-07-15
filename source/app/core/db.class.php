<?php

class DB {
    
    private static $link;

    public static function init($user, $password, $dbname, $host) {
        self::$link = self::connect($user, $password, $dbname, $host);
    }
    
    private static function connect($user, $password, $dbname, $host) {
        try {
            $link = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
            return $link;
        } catch(PDOException $event) {
            echo "PDO: ".$event->getMessage();
        }
    }

    public static function get_select($sql, $data = array()) {
        $link = self::$link;
        $res = $link->prepare($sql);
        $res->execute($data);

        $result = $res->fetchAll();
        $count = count($result);

        return array('count' => $count, 'result' => $result);
    }
    
}