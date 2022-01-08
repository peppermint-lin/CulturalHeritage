$(document).ready(function() {
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
	
	var finish = document.getElementById("finish");
	finish.play();

	$(".finish").click(function() {
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
		
		$.ajax({
			type: "POST",
			url: "php/index/read.php",
			async: false,
			dataType: "json",
			success: function(data){
				if(data!=''){
					var jsondata = data;
					$telephone = jsondata.telephone;
				}
			},
			error: function() {
				alert("会话错误");
			}
		});
		$.ajax({
			type: "POST",
			url: "php/index/progress.php",
			dataType: "text",
			data: {telephone: $telephone, id: "manufactureXWKZ", progress: 50.00, addScore: 10},  
			error: function() {
				alert("saveError");
			}
		});
		window.location.href = "manufactureXWKZ.html";
	})
})