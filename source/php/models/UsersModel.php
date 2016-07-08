<?php

class UsersModel {
    
    private $db;

    public function __construct() {

        $user = 'root';
        $password = '';
        $dbname = 'portfolio';
        $host = '127.0.0.1';
        
        try {
            $this->db = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
        } catch(PDOException $event) {
            echo "PDO".$event->getMessage();
        }
    }

    public function getUser($login, $password) {
        $password = crypt($password, $login);
        $sql = '
          SELECT * FROM users 
          WHERE login=:login 
          AND password=:password 
        ';
        $result = $this->db->prepare($sql);
        $result->execute(array(
            'login' => $login,
            'password' => $password
        ));
        $result = $result->fetchAll();
        if(count($result) > 0) {
            return true;
        } else {
            return false;
        }
    }
    
}