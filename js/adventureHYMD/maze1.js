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
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 830) {
					$("#child").css("left", newLeft + "px");
					step = 1;
					isMove = false;
					alert("恭喜您到达1号点位");
				}
				else if(newLeft >= 140 && newLeft < 830) {
					$("#child").css("left", newLeft + "px");
				}
			}
			else if(step == 1) {
				var newTop = event.clientY - edgeTop - halfHeight;
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 135 && newLeft <= 145 && newTop >= 245 && newTop <= 255) {
					$("#child").css("top", newTop + "px");
					$("#child").css("left", newLeft + "px");
					step = 2;
					isMove = false;
					alert("恭喜您到达2号点位");
				}
				else if(newLeft >= 140 && newLeft <= 830 && newTop >= 65 && newTop <= 250) {
					$("#child").css("top", newTop + "px");
					$("#child").css("left", newLeft + "px");
				}
			}
			else if(step == 2) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 820) {
					$("#child").css("top", "255px");
					$("#child").css("left", newLeft + "px");
					step = 3;
					isMove = false;
					alert("恭喜您到达3号点位");
				}
				else if(newLeft >= 140 && newLeft < 820) {
					$("#child").css("left", newLeft + "px");
				}
			}
			else if(step == 3) {
				var newTop = event.clientY - edgeTop - halfHeight;
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 140 && newLeft <= 150 && newTop >= 435 && newTop <= 445) {
					$("#child").css("top", newTop + "px");
					$("#child").css("left", newLeft + "px");
					step = 4;
					isMove = false;
					alert("恭喜您到达4号点位");
				}
				else if(newLeft >= 145 && newLeft <= 820 && newTop >= 250 && newTop <= 440) {
					$("#child").css("top", newTop + "px");
					$("#child").css("left", newLeft + "px");
				}
			}
			else if(step == 4) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 800) {
					$("#child").css("top", "445px");
					$("#child").css("left", newLeft + "px");
					step = 5;
					isMove = false;
					$("#child").remove();
					$(".mazeWrapper").css("background-image", "none");
					var newItem = "<img id='cloth' src='images/adventureHYMD/endBackground.png' alt=''>>'"
					$(".mazeWrapper").append(newItem);
					var newItem = "<div class='describeWrapper'></div>";
					$(".mazeWrapper").append(newItem);
					var text = "<p id='first' class='describe'></p>";
					text += "<p id='second' class='describe'></p>";
					$(".describeWrapper").html(text);
					$("#first").lbyl({
		        		content:"一天，叶承荣在放牛途中看到一间庙里有个老人正在塑佛像，他被老人的技艺所吸引，将牵着的牛拴在树上，跑出庙外，挖来了一块很有粘性的泥巴，坐在庙口，偷偷地跟着老人学堆塑。老人是当地一位很有名气的民间艺人，看到叶承荣聪明好学，就将他收为徒弟，教他圆塑、泥塑、上彩、贴金及浮雕等五种技艺。叶承荣很有天赋，进步也很快，仅仅用了一年就掌握了这门技艺。",
				        speed: 150,
		        		type: 'fade',
		        		fadeSpeed: 500,
				        finished: function(){ 
				        	$('#second').lbyl({
						        content: "叶承荣发现发现黄杨木木质坚韧，纹理细腻，是雕刻的好材料。于是他开始以黄杨木作为材料雕刻作品。叶家黄杨木雕也由此诞生。",
				        		speed: 150,
				        		type: 'fade',
				        		fadeSpeed: 500,
				        		finished: function() {
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
										data: {telephone: $telephone, id: "adventureHYMD", progress: 33.33, addScore: 3},  
										error: function() {
											alert("saveError");
										}
									});
									window.location.href = "adventureHYMD.html";
				        		}
				        	})
				        } // Finished Callback
				    });
					// setTimeout(function() {
					// 	alert("恭喜您到达终点,点击确定返回立体书");
					// 	window.location.href = "adventureHYMD.html";
					// }, 5000);
				}
				else if(newLeft >= 140 && newLeft < 800) {
					$("#child").css("left", newLeft + "px");
				}
			}
		}
	})	
})