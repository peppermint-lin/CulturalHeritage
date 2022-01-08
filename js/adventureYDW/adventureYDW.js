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

	$(document).mousedown(function(event) {
		if($(event.target).attr("class") == "textWrapper") {
			$(".textWrapper").css("visibility", "hidden");
		}
	})

	$(".dot").click(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	$("#dot1").click(function() {
		$(".textWrapper").css("visibility", "visible");
		$(".tipsWrapper").css("height", "50%");
		$(".tipsTittle").html("鱼灯舞的道具制作非常精巧");
		$(".tipsContent").html("&emsp;&emsp;每个鱼灯长约1-2米，鱼身用削得薄片般的竹篾扎成鱼的形状，而且是圆鼓鼓的立体型，并带有三段“关节”方便鱼灯展示鱼儿的摇头和摆尾，鱼的竹架子做好后，糊上纱纸，用元粉、牛皮胶和上颜料画鱼，根据来自海里不同的鱼类设计造型和图案，有色彩斑斓的鱼儿、有美丽的红鲤、机灵的杀鸡鱼、蛮横霸道的黄鳢角，各种不同种类和色彩的鱼儿画好之后，涂上桐油、在鱼腹下装一条20厘米的长小棍供演员举鱼灯起舞。");
		$(".tipsEnd").html("——“文化传家宝”");
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
			data: {telephone: $telephone, id: "adventureYDW", progress: 50.00, addScore: 3},  
			error: function() {
				alert("saveError");
			}
		});
		$.ajax({
			type: "POST",
			url: "php/personalCenter/personalCenter.php",
			// dataType: "json",
			data: {telephone: $telephone},
			success: function(data){
				if(data!=''){
					var jsondata = $.parseJSON(data);
					$(".percent").text(Number(jsondata.adventureYDW) + "%");
					$(".progress-done").attr('data-done' , Number(jsondata.adventureYDW) + "%");
					$(".progress-done").css('width' , Number(jsondata.adventureYDW) + "%");
				}
			},
			error: function() {
				alert("数据库错误");
			}
		});
		setTimeout(function() {
			$(".textWrapper").css("visibility", "hidden");
		}, 10000)
	})

	$("#dot2").click(function() {
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
		window.location.href = "overturn1.html";
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
							$(".percent").text(Number(jsondata.adventureYDW) + "%");
							$(".progress-done").attr('data-done' , Number(jsondata.adventureYDW) + "%");
							$(".progress-done").css('width' , Number(jsondata.adventureYDW) + "%");
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