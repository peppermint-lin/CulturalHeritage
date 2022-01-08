<?php 
	if(isset($_POST["id"])){
		if($_POST["id"] == 1) $id = "testHYMDhistory";
		else if($_POST["id"] == 2) $id = "testHYMDcharacter";
		else if($_POST["id"] == 3) $id = "testHYMDmake";
		else if($_POST["id"] == 4) $id = "testXWKZhistory";
		else if($_POST["id"] == 5) $id = "testXWKZnowadays";
		else if($_POST["id"] == 6) $id = "testXWKZmake";
		else if($_POST["id"] == 7) $id = "testYDWhistory";
		else if($_POST["id"] == 8) $id = "testYDWnowadays";
		else if($_POST["id"] == 9) $id = "testYDWmake";
	}
	if(isset($_POST["accuracy"])){
		$accuracy = $_POST["accuracy"];
	}
	if(isset($_POST["telephone"])){
		$telephone = $_POST["telephone"];
	}
	$SQLHost = "127.0.0.1";// 服务器地址 
	$SQLUsername = "root";// 用户名
	$SQLPassword = "";// 密码
	$SQLDatabaseName = "culturalheritage";// 数据库名
	$query = "UPDATE user SET ".$id." = ".$accuracy." WHERE telephone = ".$telephone.";";// SQL语句
	$conn = db_connection($SQLHost, $SQLUsername, $SQLPassword, $SQLDatabaseName);// 连接数据库
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
