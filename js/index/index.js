$(document).ready(function() {
	setTimeout("addTitle()", 1000);
	setTimeout("addSeal()", 3000);
	setTimeout("addButton()", 4500);
})

function addTitle() {
	var newItem = "<img id='title' src='images/index/title.gif' alt=''>";
	$(".headerWrapper").append(newItem);
}

function addSeal() {
	var newItem = "<img id='seal' src='images/index/seal.png' alt=''>";
	$(".headerWrapper").append(newItem);
}

function addButton() {
	var newItem = "<div id='newPlayer'>我是<span class='emText'>新</span>用户</div><div id='oldPlayer'>我是<span class='emText'>老</span>用户</div>";
	$(".tagWrapper").append(newItem);

	$("#newPlayer").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	});

	$("#oldPlayer").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	});

	$("#newPlayer").click(function() {
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
		window.location.href = "leading.html";
	});

	$("#oldPlayer").click(function() {
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
		window.location.href = "login.html";
	});
}