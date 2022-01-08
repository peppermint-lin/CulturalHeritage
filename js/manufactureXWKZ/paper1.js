var putChoice1 = false;
var putChoice2 = false;
var putChoice3 = false;
var putChoice4 = false;
var hasChoice1 = true;
var hasChoice2 = true;
var hasChoice3 = true;
var hasChoice4 = true;
var hasPut = 0;


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

	materialMousedown();

	$(document).mousemove(function(event) {
		if(putChoice4 && hasChoice4) {
			var itemWidth = $("#choice4").width();
			var itemHeight = $("#choice4").height();
			var hover = document.getElementById("hover");
			hover.pause();
			if(event.clientX - itemWidth * 1.1 / 2 >= 0 && event.clientY - itemHeight * 1.1 / 2 >= 0 && event.clientX + itemWidth * 1.1 / 2 < clientWidth && event.clientY + itemHeight * 1.1 / 2 < clientHeight) {
				$("#choice4").css({
					"position": "absolute",
					"top": (event.clientY - itemHeight * 1.1 / 2) + "px",
					"left": (event.clientX - itemWidth * 1.1 / 2) + "px"
				});
			}

			if(event.clientX >= clientWidth*0.2 && event.clientX <= clientWidth*0.8 && event.clientY <= clientHeight*0.5 && event.clientY >= clientHeight*0.3) {
				if(hasPut == 0) {
					var newItem = "<img id='answer1' class='answer' src='images/manufactureXWKZ/choice4.png' alt=''>";
					$(".answerWrapper").append(newItem);
					hasPut = 1;
					hasChoice4 = false;
					$("#choice4").remove();
					var correct = document.getElementById("correct");
					correct.play();
				}
				else {
					$("#choice4").remove();
					var newItem = "<img id='choice4' class='material' src='images/manufactureXWKZ/choice4.png' alt=''>";
					$(".materialWrapper").append(newItem);
					putChoice4 = false;
					materialMousedown();
					var wrong = document.getElementById("wrong");
					wrong.play();
				}
			}
		}

		else if(putChoice2 && hasChoice2) {
			var itemWidth = $("#choice2").width();
			var itemHeight = $("#choice2").height();
			var hover = document.getElementById("hover");
			hover.pause();
			if(event.clientX - itemWidth * 1.1 / 2 >= 0 && event.clientY - itemHeight * 1.1 / 2 >= 0 && event.clientX + itemWidth * 1.1 / 2 < clientWidth && event.clientY + itemHeight * 1.1 / 2 < clientHeight) {
				$("#choice2").css({
					"position": "absolute",
					"top": (event.clientY - itemHeight * 1.1 / 2) + "px",
					"left": (event.clientX - itemWidth * 1.1 / 2) + "px"
				});
			}

			if(event.clientX >= clientWidth*0.2 && event.clientX <= clientWidth*0.8 && event.clientY <= clientHeight*0.5 && event.clientY >= clientHeight*0.3) {
				if(hasPut == 1) {
					var newItem = "<img id='answer2' class='answer' src='images/manufactureXWKZ/choice2.png' alt=''>";
					$(".answerWrapper").append(newItem);
					hasPut = 2;
					hasChoice2 = false;
					$("#choice2").remove();
					var correct = document.getElementById("correct");
					correct.play();
				}
				else {
					$("#choice2").remove();
					var newItem = "<img id='choice2' class='material' src='images/manufactureXWKZ/choice2.png' alt=''>";
					$(".materialWrapper").append(newItem);
					putChoice2 = false;
					materialMousedown();
					var wrong = document.getElementById("wrong");
					wrong.play();
				}
			}
		}

		else if(putChoice1 && hasChoice1) {
			var itemWidth = $("#choice1").width();
			var itemHeight = $("#choice1").height();
			var hover = document.getElementById("hover");
			hover.pause();
			if(event.clientX - itemWidth * 1.1 / 2 >= 0 && event.clientY - itemHeight * 1.1 / 2 >= 0 && event.clientX + itemWidth * 1.1 / 2 < clientWidth && event.clientY + itemHeight * 1.1 / 2 < clientHeight) {
				$("#choice1").css({
					"position": "absolute",
					"top": (event.clientY - itemHeight * 1.1 / 2) + "px",
					"left": (event.clientX - itemWidth * 1.1 / 2) + "px"
				});
			}

			if(event.clientX >= clientWidth*0.2 && event.clientX <= clientWidth*0.8 && event.clientY <= clientHeight*0.5 && event.clientY >= clientHeight*0.3) {
				if(hasPut == 2) {
					var newItem = "<img id='answer1' class='answer' src='images/manufactureXWKZ/choice1.png' alt=''>";
					$(".answerWrapper").append(newItem);
					hasPut = 3;
					hasChoice1 = false;
					$("#choice1").remove();
					var correct = document.getElementById("correct");
					correct.play();
				}
				else {
					$("#choice1").remove();
					var newItem = "<img id='choice1' class='material' src='images/manufactureXWKZ/choice1.png' alt=''>";
					$(".materialWrapper").append(newItem);
					putChoice1 = false;
					materialMousedown();
					var wrong = document.getElementById("wrong");
					wrong.play();
				}
			}
		}

		else if(putChoice3 && hasChoice3) {
			var itemWidth = $("#choice3").width();
			var itemHeight = $("#choice3").height();
			var hover = document.getElementById("hover");
			hover.pause();
			if(event.clientX - itemWidth * 1.1 / 2 >= 0 && event.clientY - itemHeight * 1.1 / 2 >= 0 && event.clientX + itemWidth * 1.1 / 2 < clientWidth && event.clientY + itemHeight * 1.1 / 2 < clientHeight) {
				$("#choice3").css({
					"position": "absolute",
					"top": (event.clientY - itemHeight * 1.1 / 2) + "px",
					"left": (event.clientX - itemWidth * 1.1 / 2) + "px"
				});
			}

			if(event.clientX >= clientWidth*0.2 && event.clientX <= clientWidth*0.8 && event.clientY <= clientHeight*0.5 && event.clientY >= clientHeight*0.3) {
				if(hasPut == 3) {
					var newItem = "<img id='answer3' class='answer' src='images/manufactureXWKZ/choice3.png' alt=''>";
					$(".answerWrapper").append(newItem);
					hasPut = 4;
					hasChoice3 = false;
					$("#choice3").remove();
					var correct = document.getElementById("correct");
					correct.play();
					setTimeout(function(){
						var success = document.getElementById("success");
						success.play();
						$(".materialWrapper").remove();
						$(".tipsWrapper").css("visibility", "visible");
						$(".tipsTittle").lbyl({
			        		content: "恭喜你排序正确！",
					        speed: 150,
			        		type: 'fade'
					    });
					}, 500);
					setTimeout(function() {
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
						window.location.href = "engrave1.html";
					}, 3000);
				}
				else {
					$("#choice3").remove();
					var newItem = "<img id='choice3' class='material' src='images/manufactureXWKZ/choice3.png' alt=''>";
					$(".materialWrapper").append(newItem);
					putChoice3 = false;
					materialMousedown();
					var wrong = document.getElementById("wrong");
					wrong.play();
				}
			}
		}
	})

	var currentNum = $(".cntNum").html();
	$(".cntNum").click(function() {
		if(currentNum > 0) {
			if(currentNum != 10) $("#knockHammer").remove();
			var newItem = "<img id='knockHammer' src='images/manufactureHYMD/hammer.png' alt=''>"
			$(".gifWrapper").append(newItem);
			var knocking = document.getElementById("knocking");
			knocking.play();
			currentNum -= 1;
			$(".cntNum").html(currentNum);
			// console.log(currentNum);
		}
		if(currentNum == 0) {
			setTimeout(function() {
				$(".gifWrapper").remove();
				var newBG = "url(images/manufactureHYMD/mudFinish1.png)";
				$("body").css("background-image", newBG);
				$(".cntWrapper").remove();
				$(".next").css("visibility", "visible");
			}, 1000);
		}
	})
})

function materialMousedown() {
	$(".material").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	$("#choice1").mousedown(function(event) {
		putChoice1 = true;
	})

	$("#choice2").mousedown(function(event) {
		putChoice2 = true;
	})

	$("#choice3").mousedown(function(event) {
		putChoice3 = true;
	})

	$("#choice4").mousedown(function(event) {
		putChoice4 = true;
	})
}