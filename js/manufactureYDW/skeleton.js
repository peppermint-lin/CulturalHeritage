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

	$("#silk").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	setTimeout(function() {
		$(".tipsWrapper").css("visibility", "visible");
		$(".tipsTittle").lbyl({
			content: "请点击竹篾扎骨架——",
			speed: 150,
			type: 'fade'
		});
	}, 500);

	$("#silk").click(function() {
		if(canOperate) {
			var newItem = "<div class='gifWrapper'><img src='images/manufactureYDW/skeleton.gif' alt=''></div>";
			$(".tipsWrapper").after(newItem);
			$("body").css("background-image", "url(images/manufactureYDW/clean.png)");
			setTimeout(function() {
				$(".materialWrapper").remove();
				$(".tipsWrapper").remove();
				$(".cornerWrapper").remove();
				var newItem = "<div class='gifWrapper'><img src='images/manufactureYDW/finishSkeleton.png' alt=''></div>";
				$("body").append(newItem);
			}, 2300);
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
					window.location.href = "printing.html";
				})
			}, 2400);
		}
	})
})