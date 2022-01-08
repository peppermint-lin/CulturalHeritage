<?php 
	if(isset($_POST["telephone"])){
		$telephone = $_POST["telephone"];
	}
	$changeHead = $_FILES['changeHead']['telephone'];
	$SQLHost = "127.0.0.1";// 服务器地址 
	$SQLUsername = "root";// 用户名
	$SQLPassword = "";// 密码
	$SQLDatabaseName = "culturalheritage";// 数据库名
	$query = "UPDATE user SET header = '".$changeHead."' WHERE telephone = ".$telephone.";";// SQL语句
	$conn = db_connection($SQLHost, $SQLUsername, $SQLPassword, $SQLDatabaseName);// 连接数据库
	if(move_uploaded_file($_FILES['changeHead']['telephone'], $target)){
		$result = $conn->query($query);// 执行SQL语句
		echo 100;
	}
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