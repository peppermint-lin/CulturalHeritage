var isMove = false;
var maxWidth = $(window).width();
var maxHeight = $(window).height();
var picWidth = 250;
var picHeight = 240;


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
	$.ajax({
		type: "POST",
		url: "php/index/read.php",
		// dataType: "json",
		success: function(data){
			if(data!=''){
				var jsondata = $.parseJSON(data);
				$(".username").text(jsondata.username);
				$(".telephone").text(jsondata.telephone);
			}
		},
		error: function() {
			alert("会话错误");
		}
	});
	// setTimeout("showTips()", 500);
	setTimeout("playAudio()", 100);

	$("#knife").mousedown(function(event) {
		isMove = true;
	});

	// $("#redDotKnife").mousedown(function(event) {
	// 	isMove = true;
	// });

	$(document).mousemove(function(event) {
		if(isMove) {
			// if(event.clientX + picWidth/4 <= maxWidth && event.clientY + picHeight/4 <= maxHeight) {
			// 	$("#knife").css({
			// 		"left": (event.clientX - picWidth/4*3) + "px",
			// 		"top": (event.clientY - picHeight/4*3) + "px"
			// 	});
			// }
			if(event.clientX + picWidth <= maxWidth && event.clientY + picHeight <= maxHeight) {
				$("#knife").css({
					"top": (event.clientY) + "px",
					"left": (event.clientX) + "px"
				});
			}
			// console.log($(event.target).attr("id"));
			if($(event.target).attr("id") == "dashed"){
				isMove = false;
				setTimeout("cutMove()", 200);
				setTimeout("removeOrder()", 2500);
				setTimeout("openPackage()", 3999);
				// setTimeout("showBook()", 6000);
				// setTimeout("startLove()", 6000);
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
					pageTurn();
				}, 6000);
			};
		}
	})
})

function playAudio() {
	var dingDong = document.getElementById("dingDong");
	dingDong.play();
}

// function showTips() {
// 	$(".tipText").css("visibility", "visible");
// }

// function hideTips() {
// 	$(".tipText").css("visibility", "visible");
// }

function cutMove() {
	$("#knife").remove();
	var newItem = "<img id='cut' src='images/unpack/cut.gif' alt=''>";
	$("#dashed").after(newItem);
	var cutAudio = document.getElementById("cutAudio");
	cutAudio.play();
}

function removeOrder() {
	$(".tipText").remove();
	$(".middleWrapper").css({
		"animation": "fadeOut 1.5s linear",
		"-webkit-animation": "fadeOut 1.5s linear"
	});
}

function openPackage() {
	$(".middleWrapper").remove();
	var newItem = "<img id='opened' src='images/unpack/opened.png' alt=''>";
	$("#dingDong").before(newItem);
}

// function showBook() {
// 	$("#opened").remove();
// 	var newItem = "<img id='book' src='images/unpack/book.png' alt=''>";
// 	$("#dingDong").before(newItem);
// 	$("body").css("background-iamge", "url(../../images/unpack/clean.png)");
// }

// function startLove() {
// 	$("#opened").remove();
// 	$("body").css("background-iamge", "url(../../images/unpack/clean.png)");
// 	var newItem = "<img id='love' src='images/unpack/love.gif' alt=''>";
// 	$("body").append(newItem);
// }

function pageTurn() {
	window.location.href = "main.html";
}