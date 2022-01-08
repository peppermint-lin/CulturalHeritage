<?php
	session_start();
	$array = array('telephone' => $_SESSION['telephone'], 'username' => $_SESSION['username']);
	echo json_encode($array);
?>