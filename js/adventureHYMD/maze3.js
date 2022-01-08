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
			//(105, 55)
			if(step == 0) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 205) {
					$("#child").css("left", newLeft + "px");
					//(205, 55)
					step = 1;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newLeft >= 105 && newLeft < 205) {
					$("#child").css("left", newLeft + "px");
				}
			}
			//(205, 55)
			else if(step == 1) {
				var newTop = event.clientY - edgeTop - halfHeight;
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newTop >= 180) {
					$("#child").css("top", newTop + "px");
					//(205, 180)
					step = 10;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newTop >= 70 && newTop <= 180) {
					$("#child").css("top", newTop + "px");
					$("#child").css("left", "205px");
				}
				else if(newLeft >= 640) {
					$("#child").css("left", newLeft + "px");
					//(640, 55)
					step = 2;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newLeft >= 205 && newLeft < 640) {
					$("#child").css("top", "55px");
					$("#child").css("left", newLeft + "px");
				}
			}
			//(640, 55)
			else if(step == 2) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop >= 360) {
					$("#child").css("top", newTop + "px");
					//(640, 360)
					step = 16;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newTop >= 70 && newTop <= 360) {
					$("#child").css("top", newTop + "px");
				}
			}
			//(830, 55)
			else if(step == 3) {
				//死胡同终点
			}
			//(295, 120)
			else if(step == 4) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop >= 250) {
					$("#child").css("top", newTop + "px");
					//(105, 55)
					step = 0;
					isMove = false;
					alert("很遗憾，您已走到“死胡同”，游戏失败，点击确定重新开始");
					$("#child").css("top", "55px");
					$("#child").css("left", "105px");
				}
				else if(newTop >= 120 && newTop <= 250) {
					$("#child").css("top", newTop + "px");
				}
			}
			//(550, 120)
			else if(step == 5) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft <= 295) {
					$("#child").css("left", newLeft + "px");
					//(295, 120)
					step = 4;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newLeft > 295 && newLeft <= 550) {
					$("#child").css("left", newLeft + "px");
				}
			}
			//(730, 135)
			else if(step == 6) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 830) {
					$("#child").css("left", newLeft + "px");
					//(830, 135)
					step = 7;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newLeft >= 730 && newLeft < 830) {
					$("#child").css("left", newLeft + "px");
				}
			}
			//(830, 135)
			else if(step == 7) {
				var newTop = event.clientY - edgeTop - halfHeight;
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newTop <= 55) {
					$("#child").css("top", newTop + "px");
					//(105, 55)
					step = 0;
					isMove = false;
					alert("很遗憾，您已走到“死胡同”，游戏失败，点击确定重新开始");
					$("#child").css("top", "55px");
					$("#child").css("left", "105px");
				}
				else if(newTop > 55 && newTop <= 135) {
					$("#child").css("top", newTop + "px");
					$("#child").css("left", "830px");
				}
				else if(newLeft >= 945) {
					$("#child").css("left", newLeft + "px");
					//(105, 55)
					step = 0;
					isMove = false;
					alert("很遗憾，您已走到“死胡同”，游戏失败，点击确定重新开始");
					$("#child").css("top", "55px");
					$("#child").css("left", "105px");
				}
				else if(newLeft >= 830 && newLeft < 945) {
					$("#child").css("top", "135px");
					$("#child").css("left", newLeft + "px");
				}
			}
			//(945, 135)
			else if(step == 8) {
				//死胡同终点
			}
			//(105, 180)
			else if(step == 9) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop >= 510) {
					$("#child").css("top", newTop + "px");
					//(105, 510)
					step = 25;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newTop >= 180 && newTop <= 510) {
					$("#child").css("top", newTop + "px");
				}
			}
			//(205, 180)
			else if(step == 10) {
				var newTop = event.clientY - edgeTop - halfHeight;
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newTop >= 455) {
					$("#child").css("top", newTop + "px");
					//(205, 455)
					step = 22;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newTop >= 180 && newTop <= 455) {
					$("#child").css("top", newTop + "px");
					$("#child").css("left", "205px");
				}
				else if(newLeft <= 105) {
					$("#child").css("left", newLeft + "px");
					//(105, 180)
					step = 9;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newLeft > 105 && newLeft <= 205) {
					$("#child").css("top", "180px");
					$("#child").css("left", newLeft + "px");
				}
			}
			//(345, 190)
			else if(step == 11) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop >= 400) {
					$("#child").css("top", newTop + "px");
					//(345, 400)
					step = 19;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newTop >= 190 && newTop <= 400) {
					$("#child").css("top", newTop + "px");
				}
			}
			//(475, 190)
			else if(step == 12) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft <= 345) {
					$("#child").css("left", newLeft + "px");
					//(345, 190)
					step = 11;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newLeft > 345 && newLeft <= 475) {
					$("#child").css("left", newLeft + "px");
				}
			}
			//(295, 250)
			else if(step == 13) {
				//死胡同终点
			}
			//(730, 250)
			else if(step == 14) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop <= 135) {
					$("#child").css("top", newTop + "px");
					//(730, 135)
					step = 6;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newTop > 135 && newTop <= 510) {
					$("#child").css("top", newTop + "px");
				}
			}
			//(945, 250)
			else if(step == 15) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft <= 730) {
					$("#child").css("left", newLeft + "px");
					//(730, 250)
					step = 14;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newLeft > 730 && newLeft <= 945) {
					$("#child").css("left", newLeft + "px");
				}
			}
			//(640, 360)
			else if(step == 16) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 945) {
					$("#child").css("left", newLeft + "px");
					//(945, 360)
					step = 17;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newLeft >= 640 && newLeft < 945) {
					$("#child").css("left", newLeft + "px");
				}
			}
			//(945, 360)
			else if(step == 17) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop <= 250) {
					$("#child").css("top", newTop + "px");
					//(945, 250)
					step = 15;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newTop > 250 && newTop <= 510) {
					$("#child").css("top", newTop + "px");
				}
			}
			//(290, 400)
			else if(step == 18) {
				//死胡同终点
			}
			//(345, 400)
			else if(step == 19) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft <= 290) {
					$("#child").css("left", newLeft + "px");
					//(105, 55)
					step = 0;
					isMove = false;
					alert("很遗憾，您已走到“死胡同”，游戏失败，点击确定重新开始");
					$("#child").css("top", "55px");
					$("#child").css("left", "105px");
				}
				else if(newLeft > 290 && newLeft <= 345) {
					$("#child").css("left", newLeft + "px");
				}
			}
			//(550, 430)
			else if(step == 20) {
				var newTop = event.clientY - edgeTop - halfHeight;
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newTop <= 120) {
					$("#child").css("top", newTop + "px");
					//(550, 120)
					step = 5;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newTop > 120 && newTop <= 430) {
					$("#child").css("top", newTop + "px");
					$("#child").css("left", "550px");
				}
				else if(newLeft >= 710) {
					$("#child").css("left", newLeft + "px");
					//(710, 430)
					step = 21;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newLeft >= 550 && newLeft < 710) {
					$("#child").css("top", "430px");
					$("#child").css("left", newLeft + "px");
				}
			}
			//(710, 430)
			else if(step == 21) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop >= 510) {
					$("#child").css("top", newTop + "px");
					//(710, 510)
					step = 27;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newTop >= 430 && newTop <= 510) {
					$("#child").css("top", newTop + "px");
				}
			}
			//(205, 455)
			else if(step == 22) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 475) {
					$("#child").css("left", newLeft + "px");
					//(475, 455)
					step = 23;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newLeft >= 205 && newLeft < 475) {
					$("#child").css("left", newLeft + "px");
				}
			}
			//(475, 455)
			else if(step == 23) {
				var newTop = event.clientY - edgeTop - halfHeight;
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newTop <= 190) {
					$("#child").css("top", newTop + "px");
					//(475, 190)
					step = 12;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newTop > 190 && newTop <= 455) {
					$("#child").css("top", newTop + "px");
					$("#child").css("left", "475px");
				}
				else if(newLeft >= 550) {
					$("#child").css("left", newLeft + "px");
					//(550, 455)
					step = 24;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newLeft >= 475 && newLeft < 550) {
					$("#child").css("top", "455px");
					$("#child").css("left", newLeft + "px");
				}
			}
			//(550, 455)
			else if(step == 24) {
				var newTop = event.clientY - edgeTop - halfHeight;
				if(newTop <= 430) {
					$("#child").css("top", newTop + "px");
					//(550, 430)
					step = 20;
					isMove = false;
					alert("恭喜您前进了一步，请选择正确的方向继续前进，加油");
				}
				else if(newTop > 430 && newTop <= 455) {
					$("#child").css("top", newTop + "px");
				}
			}
			//(105, 510)
			else if(step == 25) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 600) {
					$("#child").css("left", newLeft + "px");
					//(105, 55)
					step = 0;
					isMove = false;
					alert("很遗憾，您已走到“死胡同”，游戏失败，点击确定重新开始");
					$("#child").css("top", "55px");
					$("#child").css("left", "105px");
				}
				else if(newLeft >= 105 && newLeft < 600) {
					$("#child").css("left", newLeft + "px");
				}
			}
			//(600, 510)
			else if(step == 26) {
				//死胡同终点
			}
			//(710, 510)
			else if(step == 27) {
				var newLeft = event.clientX - edgeLeft - halfWidth;
				if(newLeft >= 945) {
					$("#child").css("left", newLeft + "px");
					//(945, 510)
					step = 28;
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
		        		content:"又有一天，叶承荣在乐清县宝台山紫霞观塑佛像，观中道人折来一根黄杨木，请他用黄杨木雕一支如意发簪。在雕刻的过程中，叶承荣发现黄杨木木质坚韧，纹理细腻，色彩光泽均为其他木质所不及，认为其是用于雕刻的好材料。于是，他开始以黄杨木作为材料雕刻作品。叶家黄杨木雕也由此诞生。",
				        speed: 150,
		        		type: 'fade',
		        		fadeSpeed: 500,
				        finished: function(){ 
				        	$('#second').lbyl({
						        content: "1967年叶润周被作为‘反动艺术权威’给抓走，他在隔离时仍想方设法搬进泥巴、树枝，撕开窗纸创作泥稿。",
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
										data: {telephone: $telephone, id: "adventureHYMD", progress: 100.00, addScore: 3},  
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
				else if(newLeft >= 710 && newLeft < 945) {
					$("#child").css("left", newLeft + "px");
				}
			}
			//(945, 510)
			else if(step == 28) {
				//游戏成功，终点
			}
		}
	})	
})