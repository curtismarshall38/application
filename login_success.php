<?php
session_start();
if(!session_is_registered(username)){
header("location:result.php");
}
?>

<html>
<body>
Login Successful
</body>
</html>