<?php

$mysqli = new mysqli("localhost","DB_USER","DB_PASS","DB_NAME");

if($mysqli->connect_error){
    die("Connection failed: " . $mysqli->connect_error);
}