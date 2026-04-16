<?php

include("config.php");

if(isset($_POST['token'])){

$token = $_POST['token'];

$stmt = $mysqli->prepare("INSERT IGNORE INTO push_tokens(token) VALUES(?)");
$stmt->bind_param("s",$token);
$stmt->execute();

echo "saved";

}