<?php
/*--------------------------------
功能:		使用smsapi.fun.php功能函数发送短信示例
说明:		http://api.sms.cn/sms/?ac=send&uid=用户账号&pwd=MD5位32密码&mobile=号码&content=内容
官网:		www.sms.cn
状态:		{"stat":"100","message":"发送成功"}

	100 发送成功
	101 验证失败
	102 短信不足
	103 操作失败
	104 非法字符
	105 内容过多
	106 号码过多
	107 频率过快
	108 号码内容空
	109 账号冻结
	112	号码错误
	116 禁止接口发送
	117 绑定IP不正确
	161 未添加短信模板
	162 模板格式不正确
	163 模板ID不正确
	164 全文模板不匹配
--------------------------------*/



include 'smsapi.fun.php';

//用户账号
$uid = 'yerui0626';
//MD5密码
$pwd = 'b41c317b8ef7513ed6457dee81b44216';
/*
* 变量模板发送示例
*/

//号码
if(isset($_POST["telephone"])){
	$mobile = $_POST["telephone"];
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
$SQLHost = "127.0.0.1";// 服务器地址 
$SQLUsername = "root";// 用户名
$SQLPassword = "";// 密码
$SQLDatabaseName = "culturalheritage";// 数据库名
$query = "select username from user where telephone = '".$mobile."';";// SQL语句
$conn = db_connection($SQLHost, $SQLUsername, $SQLPassword, $SQLDatabaseName);// 连接数据库
$result = $conn->query($query);// 执行SQL语句
if(mysqli_affected_rows($conn)) echo "该手机号已注册";
else{
//变量模板ID
$template = '100000';
//6位随机验证码
$code = randNumber();	

//短信内容参数
$contentParam = array(
	'code'		=> $code,
	);
//即时发送
$res = sendSMS($uid,$pwd,$mobile,array_to_json($contentParam),$template);
if( $res['stat']=='100' )
{
	echo $code;
}
else 
{
	echo "发送失败! 状态：".$res['stat'].'|'.$res['message'];
}
//file_get_contents 简单拼接发送
/*
$mobile='13900001111';
$content = "您的验证码是：".$code."。请不要把验证码泄露给其他人。";
$url = 'http://api.sms.cn/sms/?ac=send&uid=test&pwd=366af1bb8260435df60eee17aa23bc95&mobile='.$mobile.'&content='.urlencode($content);
$result = file_get_contents($url);
*/
}
?>