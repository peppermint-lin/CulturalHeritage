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
	setInterval("twinkle()", 500);

	$("#dot").click(function() {
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
		window.location.href = "onShow.html";
	})

	$(".dot").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	$("#home").click(function() {
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
		window.location.href = "main.html";
	})

	const progressDone = document.querySelectorAll('.progress-done');

	$.ajax({
		type: "POST",
		url: "php/index/read.php",
		async: false,
		dataType: "json",
		success: function(data){
			console.log(data);
			if(data!=''){
				var jsondata = data;
				$telephone = jsondata.telephone;
				$.ajax({
					type: "POST",
					url: "php/personalCenter/personalCenter.php",
					// dataType: "json",
					data: {telephone: $telephone},
					success: function(data){
						if(data!=''){
							var jsondata = $.parseJSON(data);
							$(".percent").text(Number(jsondata.adventureXWKZ) + "%");
							$(".progress-done").attr('data-done' , Number(jsondata.adventureXWKZ) + "%");
							$(".progress-done").css('width' , Number(jsondata.adventureXWKZ) + "%");
						}
					},
					error: function() {
						alert("数据库错误");
					}
				});
			}
		},
		error: function() {
			alert("会话错误");
		}
	});
})

function twinkle() {
	var nowVisibility = $(".dot").css("visibility");
	if(nowVisibility == "visible") {
		$(".dot").css("visibility", "hidden");
	}
	else {
		$(".dot").css("visibility", "visible");
	}
}