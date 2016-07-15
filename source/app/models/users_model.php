<?php

class Users_model {

    
    public function fetch_user($login, $password) {
        $password = crypt($password, $login);
        $sql = '
          SELECT * FROM users 
          WHERE login=:login 
          AND password=:password 
        ';
        $data = DB::get_select($sql, array(
            "login" => $login,
            "password" => $password
        ));

        if($data['count'] > 0) {
            return $data['result'];
        }
    }
}