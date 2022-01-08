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

	$(document).mousedown(function(event) {
		if($(event.target).attr("class") == "textWrapper") {
			$(".textWrapper").css("visibility", "hidden");
		}
	})

	$(".dot").click(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	$("#dot1").click(function() {
		$(".textWrapper").css("visibility", "visible");
		$(".tipsWrapper").css("height", "45%");
		$(".tipsTittle").html("时间：20世纪80年代");
		$(".tipsContent").html("&emsp;&emsp;乐清的刻纸艺人多是家传手艺，自小耳濡目染，代代相承下来。但对于普通人来说，细纹刻纸是一门易学难精的手艺。据老艺人介绍，初学者如果资质较好，一年内就能刻出较精细的图纹，但要想刻得又快又好，至少要三五年的磨练，而真正要达到炉火纯青的境界，一般都要十年的时间。由于学艺时间过长，在改革开放后商品经济的浪潮下，许多年轻刻纸艺人纷纷转行。");
		$(".tipsEnd").html("——细纹刻纸人才的流失");
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
			data: {telephone: $telephone, id: "adventureXWKZ", progress: 66.67, addScore: 3},  
			error: function() {
				alert("saveError");
			}
		});
		$.ajax({
			type: "POST",
			url: "php/personalCenter/personalCenter.php",
			// dataType: "json",
			data: {telephone: $telephone},
			success: function(data){
				if(data!=''){
					var jsondata = $.parseJSON(data);
					$(".percent").text(Number(jsondata.adventureXWKZ) + "%");
					$(".progress-done").attr('data-done' , Number(jsondata.adventureXWKZ) + "%");
					$(".progress-done").css('width' , Number(jsondata.adventureXWKZ) + "%");
				}
			},
			error: function() {
				alert("数据库错误");
			}
		});
		setTimeout(function() {
			$(".textWrapper").css("visibility", "hidden");
		}, 10000)
	})

	$("#dot2").click(function() {
		$(".textWrapper").css("visibility", "visible");
		$(".tipsWrapper").css("height", "45%");
		$(".tipsTittle").html("时间：2003年");
		$(".tipsContent").html("&emsp;&emsp;老艺人为了将这门手艺传承下去，仍在创作中求发展。1985年成立了乐清剪纸研究会，开展学术研讨，对外交流，组织创作活动。近几年来。全市相继成立了乐清龙花细纹刻纸研究所、乐清象阳工艺刻纸有限公司、林邦栋工艺美术研究所、乐清余华细纹刻纸研究所。2003年乐清特殊教育学校建立了乐清民间工艺教学实验基地。以上这些机构均对细纹刻纸艺术进行新的探索和研究，不断地创作出一些新的作品。");
		$(".tipsEnd").html("——古老的民间工艺正在慢慢恢复生机，后继有人");
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
			data: {telephone: $telephone, id: "adventureXWKZ", progress: 100.00, addScore: 3},  
			error: function() {
				alert("saveError");
			}
		});
		$.ajax({
			type: "POST",
			url: "php/personalCenter/personalCenter.php",
			// dataType: "json",
			data: {telephone: $telephone},
			success: function(data){
				if(data!=''){
					var jsondata = $.parseJSON(data);
					$(".percent").text(Number(jsondata.adventureXWKZ) + "%");
					$(".progress-done").attr('data-done' , Number(jsondata.adventureXWKZ) + "%");
					$(".progress-done").css('width' , Number(jsondata.adventureXWKZ) + "%");
				}
			},
			error: function() {
				alert("数据库错误");
			}
		});
		setTimeout(function() {
			$(".textWrapper").css("visibility", "hidden");
		}, 10000)
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

	const progressDone = document.querySelectorAll('.progress-done');

	$.ajax({
		type: "POST",
		url: "php/index/read.php",
		async: false,
		dataType: "json",
		success: function(data){
			console.log(data);
			if(data!=''){
				var jsondata = data;
				$telephone = jsondata.telephone;
				$.ajax({
					type: "POST",
					url: "php/personalCenter/personalCenter.php",
					// dataType: "json",
					data: {telephone: $telephone},
					success: function(data){
						if(data!=''){
							var jsondata = $.parseJSON(data);
							$(".percent").text(Number(jsondata.adventureXWKZ) + "%");
							$(".progress-done").attr('data-done' , Number(jsondata.adventureXWKZ) + "%");
							$(".progress-done").css('width' , Number(jsondata.adventureXWKZ) + "%");
						}
					},
					error: function() {
						alert("数据库错误");
					}
				});
			}
		},
		error: function() {
			alert("会话错误");
		}
	});
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