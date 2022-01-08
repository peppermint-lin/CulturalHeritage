<?php
	session_start();
	if(isset($_POST['telephone'])){
		$_SESSION['telephone'] = $_POST['telephone'];
	}
	if(isset($_POST['username'])){
		$_SESSION['username'] = $_POST['username'];
	}
?>