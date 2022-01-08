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
		$("#dot").remove();
		$("body").css("background-image", "url(images/adventureXWKZ/openDoor.gif)");
		var openDoor = document.getElementById("openDoor");
		openDoor.play();

		setTimeout(function() {
			var typing = document.getElementById("typing");
			typing.play();
			$("body").css("background-image", "url(images/adventureXWKZ/textBG.png)");
			$("#first").lbyl({
				content:"社里笙歌达旦",
				speed: 200,
				type: 'fade',
				fadeSpeed: 500,
				finished: function(){ 
					$('#second').lbyl({
						content: "通衢剪彩为众欣赏",
						speed: 200,
						type: 'fade',
						fadeSpeed: 500,
						finished: function() {
							$('#third').lbyl({
								content: "与民同乐",
								speed: 200,
								type: 'fade',
								fadeSpeed: 500,
								finished: function() {
									$('#forth').lbyl({
										content: "元旦大德《乐清县志》",
										speed: 200,
										type: 'fade',
										fadeSpeed: 500
									})
								}
							})
						}
					})
				} // Finished Callback
			});			
		}, 2000);

		setTimeout(function() {
			$(".textWrapper").css({
				"animation": "fadeOut 2s linear",
				"-webkit-animation": "fadeOut 2s linear"
			});;
		}, 8000);

		setTimeout(function() {
			$(".finishWrapper").css("display", "inline");
			$(".textWrapper").remove();
			$("#dot1").css("display", "inline");
			$("#dot2").css("display", "inline");
		}, 9999);
	})

	$("#dot1").click(function() {
		$("#dot1").css("display", "none");
		$("#dot2").css("display", "none");
		$(".picWrapper").css("display", "flex");
		$(".picWrapper").css("background-image", "none");
		$("#shuangYu").css("display", "inline");
		$("#longMen").css("display", "none");
		$(".picText").css("display", "inline");
		$(".finishWrapper").css("display", "none");
		$(".nextWrapper").css("display", "inline");
	})

	$("#dot2").click(function() {
		$("#dot1").css("display", "none");
		$("#dot2").css("display", "none");
		$(".picWrapper").css("display", "flex");
		$(".picWrapper").css("background-image", "none");
		$("#shuangYu").css("display", "none");
		$("#longMen").css("display", "inline");
		$(".picText").css("display", "inline");
		$(".finishWrapper").css("display", "none");
		$(".nextWrapper").css("display", "inline");
	})

	$("#shuangYu").click(function() {
		$(".picWrapper").css({
			"background-image": "url(images/adventureXWKZ/shuangYuText.png)",
			"background-size": "100% 100%"
		});
		$(".picText").css("display", "none");
		$("#shuangYu").css("display", "none");
		$("#longMen").css("display", "none");
	})

	$("#longMen").click(function() {
		$(".picWrapper").css({
			"background-image": "url(images/adventureXWKZ/longMenText.png)",
			"background-size": "60% 100%",
			"background-position": "center",
			"background-repeat": "no-repeat"
		});
		$(".picText").css("display", "none");
		$("#shuangYu").css("display", "none");
		$("#longMen").css("display", "none");
	})

	$("#finish").click(function() {
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
			data: {telephone: $telephone, id: "adventureXWKZ", progress: 33.33, addScore: 3},  
			error: function() {
				alert("saveError");
			}
		});
		window.location.href = "onShowEnding.html";
	})

	$("#next").click(function() {
		$("#dot1").css("display", "inline");
		$("#dot2").css("display", "inline");
		$(".picWrapper").css("display", "none");
		$(".finishWrapper").css("display", "inline");
		$(".nextWrapper").css("display", "none");
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