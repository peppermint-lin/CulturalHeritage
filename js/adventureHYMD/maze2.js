var step = 0;

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
	$("#child").mousedown(function(event) {
		isMove = true; 
	});
	$(document).mousemove(function(event) {
		if(isMove) {
			if(step == 0) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop <= 20) {
					$("#child").css("top", newTop + "px");
					step = 1;
					isMove = false;
					alert("恭喜您到达1号点位");
				}
				else if(newTop > 20 && newTop <= 465) {
					$("#child").css("top", newTop + "px");
				}
			}
			else if(step == 1) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 730) {
					$("#child").css("left", newLeft + "px");
					step = 2;
					isMove = false;
					alert("恭喜您到达2号点位");
				}
				else if(newLeft >= 100 && newLeft <= 730) {
					$("#child").css("left", newLeft + "px");
				}
			}
			else if(step == 2) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop >= 110) {
					$("#child").css("top", newTop + "px");
					step = 3;
					isMove = false;
					alert("恭喜您到达3号点位");
				}
				else if(newTop >= 20 && newTop < 110) {
					$("#child").css("top", newTop + "px");
				}
			}
			else if(step == 3) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft <= 175) {
					$("#child").css("left", newLeft + "px");
					step = 4;
					isMove = false;
					alert("恭喜您到达4号点位");
				}
				else if(newLeft > 175 && newLeft <= 730) {
					$("#child").css("left", newLeft + "px");
				}
			}
			else if(step == 4) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop >= 230) {
					$("#child").css("top", newTop + "px");
					step = 5;
					isMove = false;
					alert("恭喜您到达5号点位");
				}
				else if(newTop >= 110 && newTop < 230) {
					$("#child").css("top", newTop + "px");
				}
			}
			else if(step == 5) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 735) {
					$("#child").css("left", newLeft + "px");
					step = 6;
					isMove = false;
					alert("恭喜您到达6号点位");
				}
				else if(newLeft >= 175 && newLeft <= 735) {
					$("#child").css("left", newLeft + "px");
				}
			}
			else if(step == 6) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop >= 360) {
					$("#child").css("top", newTop + "px");
					step = 7;
					isMove = false;
					alert("恭喜您到达7号点位");
				}
				else if(newTop >= 230 && newTop < 360) {
					$("#child").css("top", newTop + "px");
				}
			}
			else if(step == 7) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft <= 185) {
					$("#child").css("left", newLeft + "px");
					step = 8;
					isMove = false;
					alert("恭喜您到达8号点位");
				}
				else if(newLeft > 185 && newLeft <= 735) {
					$("#child").css("left", newLeft + "px");
				}
			}
			else if(step == 8) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop >= 465) {
					$("#child").css("top", newTop + "px");
					step = 9;
					isMove = false;
					alert("恭喜您到达9号点位");
				}
				else if(newTop >= 360 && newTop < 465) {
					$("#child").css("top", newTop + "px");
				}
			}
			else if(step == 9) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 935) {
					$("#child").css("left", newLeft + "px");
					step = 10;
					isMove = false;
					alert("恭喜您到达10号点位");
				}
				else if(newLeft >= 185 && newLeft <= 935) {
					$("#child").css("left", newLeft + "px");
				}
			}
			else if(step == 10) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop <= 20) {
					$("#child").css("top", newTop + "px");
					step = 10;
					isMove = false;
					$("#child").remove();
					$(".mazeWrapper").css("background-image", "none");
					var newItem = "<img id='cloth' src='images/adventureHYMD/endBackground.png' alt=''>>'"
					$(".mazeWrapper").append(newItem);
					var newItem = "<div class='describeWrapper'></div>";
					$(".mazeWrapper").append(newItem);
					var text = "<p id='first' class='describe'></p>";
					$(".describeWrapper").html(text);
					$("#first").lbyl({
		        		content:"新中国成立后，在“发掘、保护、提高”的双百方针的指导下，乐清黄杨木雕活动从停滞状态中慢慢复苏，木雕精品之作不断涌现。",
				        speed: 150,
		        		type: 'fade',
		        		fadeSpeed: 500,
				        finished: function(){ 
				        	alert("恭喜您到达终点,点击确定返回立体书");
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
								data: {telephone: $telephone, id: "adventureHYMD", progress: 66.67, addScore: 3},  
								error: function() {
									alert("saveError");
								}
							});
							window.location.href = "adventureHYMD.html";
				        } // Finished Callback
				    });
					// setTimeout(function() {
					// 	alert("恭喜您到达终点,点击确定返回立体书");
					// 	window.location.href = "adventureHYMD.html";
					// }, 5000);
				}
				else if(newTop > 20 && newTop <= 465) {
					$("#child").css("top", newTop + "px");
				}
			}
		}
	})	
})