<?php

    class About_model {
        
        public function getUsers() {
            
            $sql = 'SELECT * FROM users';
            $data = DB::getSelect($sql);
            
            if($data['count'] > 0) {
                return $data['result'];
            }
            
        }
        
    }