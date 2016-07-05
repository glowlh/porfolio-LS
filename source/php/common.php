<?php
    require_once('Validation.php');
    require_once('Mail.php');
    require_once('Helper.php');
    
    $response = array();
    $helper = new Helper();
    $data = $helper->receiveData();
    
    $mail = new Mail(array($data["mail"], $data["name"]), $data["message"]);
    $response["mailStatus"] = $mail->send();    

    $validation = new Validation($data["name"], $data["mail"]);
    $response["validationStatus"] = $validation->run();
    
    $helper->sendData($response);    