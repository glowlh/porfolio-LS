<?php

/**
 * Class Helper
 */

class Helper
{
    function receiveData() {

        if(empty($_POST)) {
            exit('Empty received data');
        }
        $data = json_decode($_POST['data'], true);
        return $data;

    }
    
    function sendData($data) {
        print_r(json_encode($data, JSON_UNESCAPED_UNICODE));
    }
}