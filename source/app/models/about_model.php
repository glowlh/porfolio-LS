<?php

    class About_model {
        
        public function getUsers() {
            
            $sql = 'SELECT * FROM users';
            $data = DB::get_select($sql);
            
            if($data['count'] > 0) {
                return $data['result'];
            }
            
        }
        
    }