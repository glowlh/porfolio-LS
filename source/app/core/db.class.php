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

    public static function getSelect($sql, $data = array()) {
        $link = self::$link;
        $result = $link->prepare($sql);
        $result->execute($data);

        $result = $result->fetchAll();
        $count = $result->rowCount();

        return array('count' => $count, 'result' => $result);
    }
    
}