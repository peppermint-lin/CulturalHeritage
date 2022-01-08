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
	var is_Edge = navigator.userAgent.indexOf("Edg");
	if(is_Edge > -1) {
		$(".bookWrapper").css({
			"width": "1260px",
			"height": "830px"
		});
	}
	else {
		$(".bookWrapper").css({
			"width": "80%",
			"height": "93%"
		});
	}

	$("#first").click(function() {
		var newItem = "<div class='whiteBG'></div>";
		$("body").append(newItem);
		setTimeout(function() {
			$("#whiteBG").remove();
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
			window.location.href = "knowledgeHYMD.html";
		}, 1500);
	})

	$("#second").click(function() {
		var newItem = "<div class='whiteBG'></div>";
		$("body").append(newItem);
		setTimeout(function() {
			$("#whiteBG").remove();
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
			window.location.href = "knowledgeXWKZ.html";
		}, 1500);
	})

	$("#third").click(function() {
		var newItem = "<div class='whiteBG'></div>";
		$("body").append(newItem);
		setTimeout(function() {
			$("#whiteBG").remove();
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
		window.location.href = "knowledgeYDW.html";
		}, 1500);
	})

	$("#main").click(function() {
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