var canOperate = false;

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
	
	$(document).mousedown(function(event) {
		// console.log($(event.target).attr("class"));
		if($(event.target).attr("class") == "materialWrapper") {
			$(".tipsWrapper").css("visibility", "hidden");
			canOperate = true
		}
	})

	$("#skeleton").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	setTimeout(function() {
		$(".tipsWrapper").css("visibility", "visible");
		$(".tipsTittle").lbyl({
			content: "请点击骨架上浆贴纸——",
			speed: 150,
			type: 'fade'
		});
	}, 500);

	$("#skeleton").click(function() {
		if(canOperate) {
			var newItem = "<div class='gifWrapper'><img src='images/manufactureYDW/stick.gif' alt=''></div>";
			$(".tipsWrapper").after(newItem);
			$("body").css("background-image", "url(images/manufactureYDW/clean.png)");
			setTimeout(function() {
				$(".materialWrapper").remove();
				$(".tipsWrapper").remove();
				$(".cornerWrapper").remove();
				var newItem = "<audio id='finish' src='audios/manufactureHYMD/finish.mp3' preload=''></audio>"
				$("body").append(newItem);
				var finish = document.getElementById("finish");
				finish.play();
				var newItem = "<div class='gifWrapper'><img src='images/manufactureYDW/finishStick.png' alt=''></div>";
				$("body").append(newItem);
			}, 2700);
			setTimeout(function() {
				var newItem = "<div class='finish'><h1>完成制作</h1></div>";
				$("body").append(newItem);
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
					window.location.href = "main.html";
				})
				
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
					data: {telephone: $telephone, id: "manufactureYDW", progress: 100.00, addScore: 10},  
					error: function() {
						alert("saveError");
					}
				});
			}, 2800);
		}
	})
})