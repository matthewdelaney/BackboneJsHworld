<?php

header('Content-Type: text/json');
header('Access-Control-Allow-Origin: *');
$arr = array('theText' => 'Hello World!');
echo json_encode($arr);
