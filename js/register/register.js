$(document).ready(function(){
	$.ajax({
		type: "POST",
		url: "php/musicBG/read.php",
		dataType: "json",
		success: function(data) {
			var musicBG = document.getElementById("musicBG");
			musicBG.currentTime = data;
			console.log(data);
		},
		error: function() {
			alert("readError");
		}
	});
	$username = "";
	$password = "";
	$check = "";
	$telephone = "";
	$code = "";
	$("#submit").click(function(){
		var musicBG = document.getElementById("musicBG");
		$.ajax({
			type: "POST",
			url: "php/musicBG/save.php",
			dataType: "text",
			data: {musicTime: musicBG.currentTime},  
			error: function() {
				alert("saveError");
			}
		});
		if(!$("#username").val()){
			alert("请输入昵称");
			return;
		}
		if(!$("#password").val()){
			alert("请输入密码");
			return;
		}
		if(!$("#check").val()){
			alert("请确认密码");
			return;
		}
		if(!$("#telephone").val()){
			alert("请输入手机号码");
			return;
		}
		if(!$("#code").val()){
			alert("请输入验证码");
			return;
		}
		if($("#username").val().length >= 2 && $("#username").val().length <= 10) $username = $("#username").val();
		else{
			alert("昵称须在2-10个字符内");
			return;
		}
		if($("#password").val().length >= 4 && $("#password").val().length <= 10) $password = $("#password").val();
		else{
			alert("密码须在4-10个字符内");
			return;
		}
		if($("#check").val() != $password){
			alert("两次密码输入不一致");
			$password = "";
			return;
		}
		if($("#telephone").val().length != 11){
			alert("手机号格式错误");
			return;
		}
		if($("#code").val() != $code) {
			alert("验证码错误");
			return;
		}
		if($("#telephone").val() != $telephone){
			alert("手机号被修改");
			return;
		}
		$.ajax({
			type: "POST",
			url: "php/register/register.php",
			//dataType: "json",
			data: {username: $username, password: $password, telephone: $telephone},
			success: function(data){
				$.ajax({
					type: "POST",
					url: "php/index/save.php",
					// dataType: "json",
					data: {telephone: $telephone, username: $username},
					success: function(data){
						alert("注册成功");
						window.location.href = "unpack.html";
					},
					error: function() {
						alert("会话错误");
					}
				});
			},
			error: function(){
				alert("数据库错误");
			}
		});
	});
	$("#getCode").click(function(){
		if(!$("#telephone").val()){
			alert("请输入手机号码");
			return;
		}
		if($("#telephone").val().length != 11){
			alert("手机号格式错误");
			return;
		}
		$telephone = $("#telephone").val();
		$.ajax({
			type: "POST",
			url: "php/register/sms.php",
			data: {telephone: $telephone},
			success: function(data){
				if(data.length == 6){
					$code = data;
					alert("验证码发送成功");
				}
				else{
					alert(data);
				}
				
			},
			error: function(){
				alert("连接错误");
			}
		});
	});
});