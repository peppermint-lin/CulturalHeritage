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
		$username = $("#username").val();
		$password = $("#check").val();
		$telephone = $("#telephone").val();
		$.ajax({
			type: "POST",
			url: "php/login/login.php",
			dataType: "json",
			data: {username: $username, password: $password},    
			success: function (data) {
				if(data == "1"){
					alert("登录成功");
					window.location.href = "main.html";
				}
				else alert("用户名或密码错误");
			},
			error: function() {
				alert("连接错误");
			}
		});
	});
});