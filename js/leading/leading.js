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
	setTimeout("changeFade()", 6000);
	setTimeout("addShare()", 7500);
	// setTimeout("addFrame()", 6000);
	// setTimeout("addItem1()", 8000);
	// setTimeout("addItem2()", 10000);
	// setTimeout("addItem3()", 12000);
	// setTimeout("addItem4()", 14000);
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
	}, 14000);
})

function changeFade() {
	$("#book").css("animation", "fadeOut 2s linear");
	$("#book").css("-webkit-animation", "fadeOut 2s linear");
	$("#book").css("opacity", "0");
}

function addFrame() {
	$("#book").remove();
	var newItem = "<div class='cartoonWrapper'><div class='lineWrapper'>";
	newItem += "<div id='firstLeft' class='leftWrapper'></div><div id='firstRight' class='rightWrapper'></div></div><div class='lineWrapper'>";
	newItem += "<div id='secondLeft'class='leftWrapper'></div><div id='secondRight' class='rightWrapper'></div></div></div>";
	$("body").append(newItem);
}

function addItem1() {
	var newItem = "<img id='item1' src='images/leading/page1.png' alt=''>";
	$("#firstLeft").append(newItem);
}

function addItem2() {
	var newItem = "<img id='item2' src='images/leading/page2.png' alt=''>";
	$("#firstRight").append(newItem);
}

function addItem3() {
	var newItem = "<img id='item3' src='images/leading/page3.png' alt=''>";
	$("#secondLeft").append(newItem);
}

function addItem4() {
	var newItem = "<img id='item4' src='images/leading/page4.png' alt=''>";
	$("#secondRight").append(newItem);
}

function addShare() {
	$("#book").remove();
	var newItem = "<img id='share' src='images/leading/share.gif' alt=''>";
	$("body").append(newItem);
}

function pageTurn() {
	window.location.href = "register.html";
}