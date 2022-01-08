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
	
	$(".material").hover(function() {
		var hover = document.getElementById("hover");
		hover.play();
	})

	$("#wood1").hover(function() {
		$(".tipsTittle").html("1号木材-简介");
		$(".tipsContent").html("&emsp;&emsp;木头有的松软、有的粗硬，一般木头松软的易雕，粗硬沉重的难雕。<br>&emsp;&emsp;该木头高28厘米，直径14厘米。秋季采伐，阴干两年。木头形体平圆而直，树皮细匀，并无节疤或肿瘤突出。<br>&emsp;&emsp;注意：本次所选木雕成品高度约20厘米，直径约6厘米。");
		$(".tipsWrapper").css("visibility", "visible");
	},function(){$(".tipsWrapper").css("visibility", "hidden");})
	
	$("#wood2").hover(function() {
		$(".tipsTittle").html("2号木材-简介");
		$(".tipsContent").html("&emsp;&emsp;木头有的松软、有的粗硬，一般木头松软的易雕，粗硬沉重的难雕。<br>&emsp;&emsp;高28厘米，直径14厘米。夏季采伐，阴干一年。木头形体平圆而直，树皮细匀，有节疤突出。<br>&emsp;&emsp;注意：本次所选木雕成品高度约20厘米，直径约6厘米。");
		$(".tipsWrapper").css("visibility", "visible");
	},function(){$(".tipsWrapper").css("visibility", "hidden");})
	
	$("#wood3").hover(function() {
		$(".tipsTittle").html("3号木材-简介");
		$(".tipsContent").html("&emsp;&emsp;木头有的松软、有的粗硬，一般木头松软的易雕，粗硬沉重的难雕。<br>&emsp;&emsp;高24厘米，直径8厘米。冬季采伐，阴干一年。木头形体平圆而直，树皮细匀，并无节疤或肿瘤突出。<br>&emsp;&emsp;注意：本次所选木雕成品高度约20厘米，直径约6厘米。");
		$(".tipsWrapper").css("visibility", "visible");
	},function(){$(".tipsWrapper").css("visibility", "hidden");})
	
	$("#wood4").hover(function() {
		$(".tipsTittle").html("4号木材-简介");
		$(".tipsContent").html("&emsp;&emsp;木头有的松软、有的粗硬，一般木头松软的易雕，粗硬沉重的难雕。<br>&emsp;&emsp;高24厘米，直径8厘米。春季采伐，阴干半年。木头形体平圆而直，树皮细匀，有节疤突出。<br>&emsp;&emsp;注意：本次所选木雕成品高度约20厘米，直径约6厘米。");
		$(".tipsWrapper").css("visibility", "visible");
	},function(){$(".tipsWrapper").css("visibility", "hidden");})

	var wrong = document.getElementById("wrong");
	var correct = document.getElementById("correct");

	$("#wood1").click(function() {
		wrong.play();
		$(".tipsWrapper").css("visibility", "hidden");
		$(".warnWrapper").css("border", "10px #CC4D4D solid");
		$(".warnTittle").html("很遗憾！选择错误");
		$(".warnContent").html("错误原因：太大啦，要节约资源呀！");
		$(".fullScreen").css("visibility", "visible");
		setTimeout(function() {
			$(".fullScreen").css("visibility", "hidden");
		}, 1000);
	})

	$("#wood2").click(function() {
		wrong.play();
		$(".tipsWrapper").css("visibility", "hidden");
		$(".warnWrapper").css("border", "10px #CC4D4D solid");
		$(".warnTittle").html("很遗憾！选择错误");
		$(".warnContent").html("错误原因：春夏采伐的木料因为水分含量高而材质不稳，容易蓝变和干裂，不宜选择。木料要无节疤或肿瘤突出。");
		$(".fullScreen").css("visibility", "visible");
		setTimeout(function() {
			$(".fullScreen").css("visibility", "hidden");
		}, 1000);
	})

	$("#wood3").click(function() {
		correct.play();
		$(".tipsWrapper").css("visibility", "hidden");
		$(".warnWrapper").css("border", "10px #2E967C solid");
		$(".warnTittle").html("恭喜您！选择正确");
		$(".warnContent").html("请耐心等待粗胚操作");
		$(".fullScreen").css("visibility", "visible");
		setTimeout(function() {
			$(".fullScreen").css("visibility", "hidden");
		}, 1000);
		setTimeout(function() {
			$("#operateTitle").css("visibility", "visible");
			var newBG = "url(images/manufactureHYMD/operateBG.png)";
			$("body").css("background-image", newBG);
			$(".materialWrapper").remove();
			var newItem = "<img id='operateGIF' src='images/manufactureHYMD/operate1.gif' alt=''>";
			$("body").append(newItem);
			var knocking = document.getElementById("knocking");
			knocking.play();
		}, 1500);
		setTimeout(function() {
			$("#operateGIF").remove();
			$("#operateTitle").css("visibility", "hidden");
			var newBG = "url(images/manufactureHYMD/finishBG1.png)";
			$("body").css("background-image", newBG);
			var finish = document.getElementById("finish");
			finish.play();
			$(".finish").css("visibility", "visible");
		}, 5000);
	})

	$("#wood4").click(function() {
		wrong.play();
		$(".tipsWrapper").css("visibility", "hidden");
		$(".warnWrapper").css("border", "10px #CC4D4D solid");
		$(".warnTittle").html("很遗憾！选择错误");
		$(".warnContent").html("错误原因：春夏采伐的木料因为水分含量高而材质不稳，容易蓝变和干裂，不宜选择。木料要无节疤或肿瘤突出。");
		$(".fullScreen").css("visibility", "visible");
		setTimeout(function() {
			$(".fullScreen").css("visibility", "hidden");
		}, 1000);
	})

	$(".finish").click(function() {
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
			data: {telephone: $telephone, id: "manufactureHYMD", progress: 50.00, addScore: 10},  
			error: function() {
				alert("saveError");
			}
		});
		window.location.href = "manufactureHYMD.html";
	})
})