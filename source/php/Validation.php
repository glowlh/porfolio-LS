<?php

/**
 * Class Validation
 */

class Validation
{

    private $name;
    private $mail;
    private $message;

    public function __construct($name, $mail, $message) {
        $this->name = $name;
        $this->mail = $mail;
        $this->message = $message;
    }
    
    public function run() {

        require('./vlucas/valitron/src/valitron/Validator.php');

        $v = new Valitron\Validator(array('email' => $this->mail));
        $v->rule('required', ['email', 'name', 'message']);
        $v->rule('email', 'email');
        if($v->validate()) {
            return true;
        } else {
            return false;
        }
    }

}