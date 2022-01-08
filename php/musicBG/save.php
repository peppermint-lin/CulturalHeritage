<?php
	session_start();
	if(isset($_POST['musicTime'])){
		$_SESSION['musicTime'] = $_POST['musicTime'];
	}
?>