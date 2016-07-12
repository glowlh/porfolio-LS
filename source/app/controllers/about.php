<?php

class About {

    public function __construct() {
        
        require_once ('app/models/aboutModel.php');
        $model = new worksModel;
        $users = $model->getWorks();

        require_once('app/admin/about.php');
    }
}