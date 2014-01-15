<?php

include_once('db.php');

$username = mysqli_real_escape_string($_POST['username']);
$password = mysqli_real_escape_string(md5($_POST['password']));

$sql = "SELECT count(*) FROM users WHERE (username='$username' AND password='$password')";
$result = mysqli_query($sql);
$row = mysqli_fetch_array($result);

if ($row[0] > 0)
	echo "Login Successful";
else
	echo "Login Failed";


?>