<?php

/**
 * Class Validation
 */

class Validation
{

    private $name;
    private $mail;

    public function __construct($name, $mail) {
        $this->name = $name;
        $this->mail = $mail;
    }
    
    public function run() {

        require('./valitron/src/Valitron/Validator.php');

        $v = new Valitron\Validator($this->mail);
        $v->rule('required', 'email');
        $v->rule('email', 'email');
        if($v->validate()) {
            return true;
        } else {
            return false;
        }
    }

}