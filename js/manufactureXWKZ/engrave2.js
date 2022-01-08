var hasEngraved = 0;
var isMove = false;
var maxWidth = $(window).width();
var maxHeight = $(window).height();
var picWidth = 100;
var picHeight = 70;
var isEngraved = {};
for(var i = 1; i <= 16; ++i) {
	isEngraved[i] = false;
}

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
	
	$("#start").click(function() {
		$(".itemWrapper").css("border", "2px solid red");
		$(".itemPic").css("border", "2px solid red");
		$("#start").css("display", "none");
		$("#finish").css("display", "inline");
		$(".itemPic").css("cursor", "pointer");
		isMove = true;
	})

	$("#finish").click(function() {
		if(hasEngraved == 16) {
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
			window.location.href = "pack2.html";
		}
		else {
			alert("抱歉！还有未雕刻的区域喔~请先雕刻完毕后再点击“完成雕刻”");
		}
	})

	$(document).mousemove(function(event) {
		if(isMove) {
			$("#tool").css("display", "inline");
			if(event.clientX + picWidth / 3 * 2 + 10 <= maxWidth && event.clientY + picHeight / 4 + 10 <= maxHeight && event.clientX - picWidth / 4 >= 10 && event.clientY - picHeight / 3 * 2 >= 10) {
				$("#tool").css({
					"top": (event.clientY - picHeight / 3 * 2) + "px",
					"left": (event.clientX - picWidth / 4) + "px"
				});
			}
		}
	})

	// $(document).mousedown(function(event) {
	// 	console.log($(event.target).attr("id"));
	// });

	for(var index = 1; index <= 16; ++index){
		engraving(index);
		function engraving(i){
			$("#pic" + i + "-cover").click(function() {
				if(isMove && isEngraved[i] == false) {
					$("#pic" + i +"-cover").css("visibility", "visible");
					$("#pic" + i).attr("src", "images/manufactureXWKZ/draft2/" + i + ".png");
					hasEngraved += 1;
					isEngraved[i] = true;
					console.log(hasEngraved);
				}
				if(hasEngraved == 16) {
					setTimeout(function() {
						$(".itemWrapper").css("border", "none");
						$(".itemPic").css("border", "none");						
					}, 100);
				}
			});
		};
	}
})