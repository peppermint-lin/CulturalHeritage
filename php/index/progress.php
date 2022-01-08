<?php 
	if(isset($_POST["telephone"])){
		$telephone = $_POST["telephone"];
	}
	if(isset($_POST["id"])){
		$id = $_POST["id"];
	}
	if(isset($_POST["progress"])){
		$progress = $_POST["progress"];
	}
	if(isset($_POST["addScore"])){
		$addScore = $_POST["addScore"];
	}
	$SQLHost = "127.0.0.1";// 服务器地址 
	$SQLUsername = "root";// 用户名
	$SQLPassword = "";// 密码
	$SQLDatabaseName = "culturalheritage";// 数据库名
	$conn = db_connection($SQLHost, $SQLUsername, $SQLPassword, $SQLDatabaseName);// 连接数据库
	$query = "UPDATE user SET ".$id." = ".$progress." WHERE telephone = '".$telephone."';";// SQL语句
	$result = $conn->query($query);// 执行SQL语句
	$query = "UPDATE user SET score = score + ".$addScore." WHERE telephone = '".$telephone."';";// SQL语句
	$result = $conn->query($query);// 执行SQL语句
	function db_connection($SQLHost, $SQLUsername, $SQLPassword, $SQLDatabaseName){
		$conn = mysqli_connect($SQLHost, $SQLUsername, $SQLPassword, $SQLDatabaseName);
		mysqli_query($conn,"set character set 'utf8'");
		mysqli_query($conn,"set names 'utf8'");// 防止中文乱码
		if (mysqli_connect_errno()) {
			echo "Could not connect to database.";
			exit();
		}
		return $conn; // 返回连接对象
	}
?>