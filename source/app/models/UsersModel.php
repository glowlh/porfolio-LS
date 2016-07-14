<?php

class UsersModel {
    
    private $db;
    private $currentUser;

    public function __construct() {

        $user = 'root';
        $password = '';
        $dbname = 'portfolio';
        $host = '127.0.0.1';
        
        try {
            $this->db = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
        } catch(PDOException $event) {
            echo "PDO: ".$event->getMessage();
        }
    }

    public function fetchUser($login, $password) {
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
        if($result->rowCount() == 1) {
            $users = $result->fetchAll();
            $this->currentUser = $users[0];
            return $this->currentUser;
        } else {
            return false;
        }
    }

    public function logIn() {
        session_start();
        if(!empty($this->currentUser)) {
            $_SESSION[$this->currentUser['id']] = $this->currentUser['id'];
            $_SESSION[$this->currentUser['login']] = $this->currentUser['login'];
            header("Location: /admin/about.php");
            exit;
        }
    }

    public function fetchUsers() {
        $sql = 'SELECT * FROM users';
        $data = DB::getSelect($sql);

        if($data['count'] > 0) {
            return $data['result'];
        }
    }
    
}