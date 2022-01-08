var canOperate = false;
var hasClick = 0;

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

	$("#board").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	$("#redPigment").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	$("#redPaper").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	$("#brownPigment").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	setTimeout(function() {
		$(".tipsWrapper").css("visibility", "visible");
		$(".tipsTittle").lbyl({
			content: "过关小提示",
			speed: 150,
			type: 'fade',
    		fadeSpeed: 500,
	        finished: function(){ 
	        	$('.tipsContent').lbyl({
			        content: "制作鱼灯的过程中，木板印彩纸的步骤尤为细致关键。我们需要用木版刻制鱼头、鱼尾、鱼身等图案，涂上牛皮胶，盖上红纸粘印后在金粉中拍打，形成金光闪闪的鲤鱼身体图案。印鱼鳞时要在模板上先涂胶水，然后用红纸覆盖，再用粘了胶水的红纸吸印金粉。",
	        		speed: 100,
	        		type: 'fade',
	        		fadeSpeed: 300,
	        		finished: function() { 
			        	$('.howToDo').lbyl({
					        content: "请玩家依次点击木板、牛皮胶、红纸、金粉进行彩纸拓印",
			        		speed: 100,
			        		type: 'fade',
			        		fadeSpeed: 300
			        	})
	        		}
	        	})
	        }
		});
	}, 500);

	$("#board").click(function() {
		if(canOperate) {
			if(hasClick == 0) {
				var correct = document.getElementById("correct");
				correct.play();
				hasClick += 1;
				console.log(hasClick);
				alert("恭喜你，点击正确！");
			}
			else {
				var wrong = document.getElementById("wrong");
				wrong.play();
				alert("这是木板，请依次点击木板、牛皮胶、红纸、金粉进行彩纸拓印");
			}
		}
	})

	$("#redPigment").click(function() {
		if(canOperate) {
			if(hasClick == 1) {
				var correct = document.getElementById("correct");
				correct.play();
				hasClick += 1;
				console.log(hasClick);
				alert("恭喜你，点击正确！");
			}
			else {
				var wrong = document.getElementById("wrong");
				wrong.play();
				alert("这是牛皮胶，请依次点击木板、牛皮胶、红纸、金粉进行彩纸拓印");
			}
		}
	})

	$("#redPaper").click(function() {
		if(canOperate) {
			if(hasClick == 2) {
				var correct = document.getElementById("correct");
				correct.play();
				hasClick += 1;
				console.log(hasClick);
				alert("恭喜你，点击正确！");
			}
			else {
				var wrong = document.getElementById("wrong");
				wrong.play();
				alert("这是红纸，请依次点击木板、牛皮胶、红纸、金粉进行彩纸拓印");
			}
		}
	})

	$("#brownPigment").click(function() {
		if(canOperate) {
			if(hasClick == 3) {
				var correct = document.getElementById("correct");
				correct.play();
				hasClick += 1;
				console.log(hasClick);
				alert("恭喜你，点击正确！");

				var newItem = "<div class='gifWrapper'><img src='images/manufactureYDW/printing.gif' alt=''></div>";
				$(".tipsWrapper").after(newItem);
				$("body").css("background-image", "url(images/manufactureYDW/clean.png)");
				setTimeout(function() {
					$(".materialWrapper").remove();
					$(".tipsWrapper").remove();
					$(".cornerWrapper").remove();
					var newItem = "<div class='gifWrapper'><img src='images/manufactureYDW/finishPrinting.png' alt=''></div>";
					$("body").append(newItem);
				}, 4000);
				setTimeout(function() {
					var newItem = "<div class='next'><h1>下一步</h1></div>";
					$("body").append(newItem);
					$(".next").click(function() {
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
						window.location.href = "stick.html";
					})
				}, 4100);
			}
			else {
				var wrong = document.getElementById("wrong");
				wrong.play();
				alert("这是金粉，请依次点击木板、牛皮胶、红纸、金粉进行彩纸拓印");
			}
		}
	})
})