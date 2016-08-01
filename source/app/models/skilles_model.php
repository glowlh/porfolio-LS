<?php

class Skilles_model {


    public function fetch_skill($login, $password) {
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

    public function get_skilles() {
        $sql = '
            SELECT * FROM skilles AS sk
            INNER JOIN skilles_range AS sk_r
            ON sk.skilles_range = sk_r.id
        ';
        $data = DB::get_select($sql);

        if($data['count'] > 0) {
            return $data['result'];
        }
    }

    public function save_skills($skilles) {
        foreach($skilles as $id => $value) {
            $sql = '
                UPDATE skilles
                SET value=:value
                WHERE id=:id
            ';
            DB::set_values($sql, array(
                "id" => $id,
                "value" => $value
            ));
        }
    }

    public function get_ranges() {
        $sql = '
            SELECT skill_range FROM skilles_range
        ';
        $data = DB::get_select($sql);

        if($data['count'] > 0) {
            return $data['result'];
        }
    }
}