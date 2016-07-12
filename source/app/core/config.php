<?php

error_reporting(E_ALL);

$user = 'root';
$password = '';
$dbname = 'portfolio';
$host = '127.0.0.1';

if(!defined('DOMAIN')) {
    define('DOMAIN', $_SERVER['HTTP_HOST']);
}