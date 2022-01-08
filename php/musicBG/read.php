<?php
	session_start();
	if(isset($_SESSION['musicTime'])){
		echo json_encode($_SESSION['musicTime']);
	}
?>