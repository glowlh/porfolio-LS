<?php

    require_once ('db.class.php');
    DB::init($user, $password, $dbname, $host);
    
    require_once ('route.class.php');
    Route::init();