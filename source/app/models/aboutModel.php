<?php

    class aboutModel {
        public function getWorks() {
            $sql = 'SELECT * FROM users';
            $data = DB::getSelect($sql);
            
            if($data['count'] > 0) {
                return $data['result'];
            }
        }
    }