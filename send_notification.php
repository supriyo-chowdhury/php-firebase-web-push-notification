<?php

require 'vendor/autoload.php';

use Kreait\Firebase\Factory;
use Kreait\Firebase\Messaging\CloudMessage;

include("config.php");

$factory = (new Factory)
->withServiceAccount(__DIR__.'/firebase/service-account.json');

$messaging = $factory->createMessaging();

$result = $mysqli->query("SELECT token FROM push_tokens");

while($row = $result->fetch_assoc()){

$token = $row['token'];

$message = CloudMessage::withTarget('token', $token)
->withData([
'title' => 'Demo Notification',
'body' => "🚀 Firebase Web Push Working\n📅 ".date('d M Y H:i:s A'),
'image' => 'https://via.placeholder.com/800x400',
'icon' => 'https://via.placeholder.com/100',
'url' => 'https://yourdomain.com',
'tag' => 'demo'
]);

$messaging->send($message);

}

echo "Notification sent";