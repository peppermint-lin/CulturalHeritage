<?php 
	if(isset($_POST["telephone"])){
		$telephone = $_POST["telephone"];
	}
	if(isset($_POST["username"])){
		$username = $_POST["username"];
	}
	$SQLHost = "127.0.0.1";// 服务器地址 
	$SQLUsername = "root";// 用户名
	$SQLPassword = "";// 密码
	$SQLDatabaseName = "culturalheritage";// 数据库名
	$query = "UPDATE user SET username = '".$username."' WHERE telephone = ".$telephone.";";// SQL语句
	$conn = db_connection($SQLHost, $SQLUsername, $SQLPassword, $SQLDatabaseName);// 连接数据库
	$result = $conn->query($query);// 执行SQL语句
	echo json_encode($result);
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