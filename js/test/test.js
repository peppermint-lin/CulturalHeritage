
////OPTIONCHOOSEN
var i = 0;
var HYMDhistoryChoosen = new Array();
var HYMDcharacterChoosen = new Array();
var HYMDmakeChoosen = new Array();
var XWKZhistoryChoosen = new Array();
var XWKZnowadaysChoosen = new Array();
var XWKZmakeChoosen = new Array();
var YDWhistoryChoosen = new Array();
var YDWnowadaysChoosen = new Array();
var YDWmakeChoosen = new Array();
var correctNum = new Array();
var HYMDhistoryAnswer = [3, 4, 4, 2, 2, 3, 1, 4, 2, 1, 4, 4];
var HYMDcharacterAnswer = [1, 3, 2, 4, 3, 1, 1, 4, 2, 3];
var HYMDmakeAnswer = [1, 2, 3, 2, 1, 3, 4];
var XWKZhistoryAnswer = [1, 3, 1, 3, 2, 4, 4, 4, 2];
var XWKZnowadaysAnswer = [1, 1, 2, 3, 3, 2, 4, 2, 3];
var XWKZmakeAnswer = [2, 2, 3, 1, 4, 4];
var YDWhistoryAnswer = [1, 2, 4, 4, 1, 2, 3, 3];
var YDWnowadaysAnswer = [2, 4, 4, 3, 1];
var YDWmakeAnswer = [4, 3, 3, 1, 2];
var questionNum = [12, 10, 7, 9, 9, 6, 8, 5, 5];
var $answer;
for(i = 0; i < 20; i++){
	HYMDhistoryChoosen[i] = 0;
	HYMDcharacterChoosen[i] = 0;
	HYMDmakeChoosen[i] = 0;
	XWKZhistoryChoosen[i] = 0;
	XWKZnowadaysChoosen[i] = 0;
	XWKZmakeChoosen[i] = 0;
	YDWhistoryChoosen[i] = 0;
	YDWnowadaysChoosen[i] = 0;
	YDWmakeChoosen[i] = 0;
	correctNum[i] = 0;
}
/*
var HYMDhistoryChoosen1 = false;
var HYMDhistoryChoosen2 = false;
var HYMDhistoryChoosen3 = false;
var HYMDhistoryChoosen4 = false;
var HYMDhistoryChoosen5 = false;
var HYMDhistoryChoosen6 = false;
var HYMDhistoryChoosen7 = false;
var HYMDhistoryChoosen8 = false;
var HYMDhistoryChoosen9 = false;
var HYMDhistoryChoosen10 = false;
var HYMDhistoryChoosen11 = false;
var HYMDhistoryChoosen12 = false;

var HYMDcharacterChoosen1 = false;
var HYMDcharacterChoosen2 = false;
var HYMDcharacterChoosen3 = false;
var HYMDcharacterChoosen4 = false;
var HYMDcharacterChoosen5 = false;
var HYMDcharacterChoosen6 = false;
var HYMDcharacterChoosen7 = false;
var HYMDcharacterChoosen8 = false;
var HYMDcharacterChoosen9 = false;
var HYMDcharacterChoosen10 = false;

var HYMDmakeChoosen1 = false;
var HYMDmakeChoosen2 = false;
var HYMDmakeChoosen3 = false;
var HYMDmakeChoosen4 = false;
var HYMDmakeChoosen5 = false;
var HYMDmakeChoosen6 = false;
var HYMDmakeChoosen7 = false;

var XWKZhistoryChoosen1 = false;
var XWKZhistoryChoosen2 = false;
var XWKZhistoryChoosen3 = false;
var XWKZhistoryChoosen4 = false;
var XWKZhistoryChoosen5 = false;
var XWKZhistoryChoosen6 = false;
var XWKZhistoryChoosen7 = false;
var XWKZhistoryChoosen8 = false;
var XWKZhistoryChoosen9 = false;

var XWKZnowadaysChoosen1 = false;
var XWKZnowadaysChoosen2 = false;
var XWKZnowadaysChoosen3 = false;
var XWKZnowadaysChoosen4 = false;
var XWKZnowadaysChoosen5 = false;
var XWKZnowadaysChoosen6 = false;
var XWKZnowadaysChoosen7 = false;
var XWKZnowadaysChoosen8 = false;
var XWKZnowadaysChoosen9 = false;

var XWKZmakeChoosen1 = false;
var XWKZmakeChoosen2 = false;
var XWKZmakeChoosen3 = false;
var XWKZmakeChoosen4 = false;
var XWKZmakeChoosen5 = false;
var XWKZmakeChoosen6 = false;
var XWKZmakeChoosen7 = false;

var YDWhistoryChoosen1 = false;
var YDWhistoryChoosen2 = false;
var YDWhistoryChoosen3 = false;
var YDWhistoryChoosen4 = false;
var YDWhistoryChoosen5 = false;
var YDWhistoryChoosen6 = false;
var YDWhistoryChoosen7 = false;
var YDWhistoryChoosen8 = false;

var YDWnowadaysChoosen1 = false;
var YDWnowadaysChoosen2 = false;
var YDWnowadaysChoosen3 = false;
var YDWnowadaysChoosen4 = false;
var YDWnowadaysChoosen5 = false;

var YDWmakeChoosen1 = false;
var YDWmakeChoosen2 = false;
var YDWmakeChoosen3 = false;
var YDWmakeChoosen4 = false;
var YDWmakeChoosen5 = false;
*/

function flush(){
	// console.log("flush");
	var is_Edge = navigator.userAgent.indexOf("Edg");
	if(is_Edge > -1) {
		$(".bookWrapper").css({
			"width": "1260px",
			"height": "825px"
		});
	}
	else {
		$(".bookWrapper").css({
			"width": "80%",
			"height": "92.1%"
		});
	}

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

	$("#saveButton").click(function() {
		window.location.reload();
	})

	$("#submitButton").click(function() {
		window.location.reload();
	})
	//选中效果
	for(var index = 1; index < 13; index++){
		HYMDhistory(index);
		function HYMDhistory(i){
			$("#HYMDhistoryA"+i+">li").click(function() {
				var answer = String.fromCharCode($(this).index() + 65);
				if(HYMDhistoryChoosen[i] == 0) {
					// console.log("if");
					var newItem = "<span id='HYMDhistoryAnswer"+i+"' class='answerOption'>【" + answer + "】</span>";
					$("#HYMDhistoryQ"+i).append(newItem);
					HYMDhistoryChoosen[i] = $(this).index() + 1;
				}
				else {
					// console.log("else");
					$("#HYMDhistoryAnswer"+i).html("【" + answer + "】");
					HYMDhistoryChoosen[i] = $(this).index() + 1;
				}
			});
		};
	}
	for(var index = 1; index < 11; index++){
		HYMDcharacter(index);
		function HYMDcharacter(i){
			$("#HYMDcharacterA"+i+">li").click(function() {
				var answer = String.fromCharCode($(this).index() + 65);
				if(HYMDcharacterChoosen[i] == 0) {
					// console.log("if");
					var newItem = "<span id='HYMDcharacterAnswer"+i+"' class='answerOption'>【" + answer + "】</span>";
					$("#HYMDcharacterQ"+i).append(newItem);
					HYMDcharacterChoosen[i] = $(this).index() + 1;
				}
				else {
					// console.log("else");
					$("#HYMDcharacterAnswer"+i).html("【" + answer + "】");
					HYMDcharacterChoosen[i] = $(this).index() + 1;
				}
			});
		};
	}
	for(var index = 1; index < 8; index++){
		HYMDmake(index);
		function HYMDmake(i){
			$("#HYMDmakeA"+i+">li").click(function() {
				var answer = String.fromCharCode($(this).index() + 65);
				if(HYMDmakeChoosen[i] == 0) {
					// console.log("if");
					var newItem = "<span id='HYMDmakeAnswer"+i+"' class='answerOption'>【" + answer + "】</span>";
					$("#HYMDmakeQ"+i).append(newItem);
					HYMDmakeChoosen[i] = $(this).index() + 1;
				}
				else {
					// console.log("else");
					$("#HYMDmakeAnswer"+i).html("【" + answer + "】");
					HYMDmakeChoosen[i] = $(this).index() + 1;
				}
			});
		};
	}
	for(var index = 1; index < 10; index++){
		XWKZhistory(index);
		function XWKZhistory(i){
			$("#XWKZhistoryA"+i+">li").click(function() {
				var answer = String.fromCharCode($(this).index() + 65);
				if(XWKZhistoryChoosen[i] == 0) {
					// console.log("if");
					var newItem = "<span id='XWKZhistoryAnswer"+i+"' class='answerOption'>【" + answer + "】</span>";
					$("#XWKZhistoryQ"+i).append(newItem);
					XWKZhistoryChoosen[i] = $(this).index() + 1;
				}
				else {
					// console.log("else");
					$("#XWKZhistoryAnswer"+i).html("【" + answer + "】");
					XWKZhistoryChoosen[i] = $(this).index() + 1;
				}
			});
		};
	}
	for(var index = 1; index < 10; index++){
		XWKZnowadays(index);
		function XWKZnowadays(i){
			$("#XWKZnowadaysA"+i+">li").click(function() {
				var answer = String.fromCharCode($(this).index() + 65);
				if(XWKZnowadaysChoosen[i] == 0) {
					// console.log("if");
					var newItem = "<span id='XWKZnowadaysAnswer"+i+"' class='answerOption'>【" + answer + "】</span>";
					$("#XWKZnowadaysQ"+i).append(newItem);
					XWKZnowadaysChoosen[i] = $(this).index() + 1;
				}
				else {
					// console.log("else");
					$("#XWKZnowadaysAnswer"+i).html("【" + answer + "】");
					XWKZnowadaysChoosen[i] = $(this).index() + 1;
				}
			});
		};
	}
	for(var index = 1; index < 7; index++){
		XWKZmake(index);
		function XWKZmake(i){
			$("#XWKZmakeA"+i+">li").click(function() {
				var answer = String.fromCharCode($(this).index() + 65);
				if(XWKZmakeChoosen[i] == 0) {
					// console.log("if");
					var newItem = "<span id='XWKZmakeAnswer"+i+"' class='answerOption'>【" + answer + "】</span>";
					$("#XWKZmakeQ"+i).append(newItem);
					XWKZmakeChoosen[i] = $(this).index() + 1;
				}
				else {
					// console.log("else");
					$("#XWKZmakeAnswer"+i).html("【" + answer + "】");
					XWKZmakeChoosen[i] = $(this).index() + 1;
				}
			});
		};
	}
	for(var index = 1; index < 9; index++){
		YDWhistory(index);
		function YDWhistory(i){
			$("#YDWhistoryA"+i+">li").click(function() {
				var answer = String.fromCharCode($(this).index() + 65);
				if(YDWhistoryChoosen[i] == 0) {
					// console.log("if");
					var newItem = "<span id='YDWhistoryAnswer"+i+"' class='answerOption'>【" + answer + "】</span>";
					$("#YDWhistoryQ"+i).append(newItem);
					YDWhistoryChoosen[i] = $(this).index() + 1;
				}
				else {
					// console.log("else");
					$("#YDWhistoryAnswer"+i).html("【" + answer + "】");
					YDWhistoryChoosen[i] = $(this).index() + 1;
				}
			});
		};
	}
	for(var index = 1; index < 6; index++){
		YDWnowadays(index);
		function YDWnowadays(i){
			$("#YDWnowadaysA"+i+">li").click(function() {
				var answer = String.fromCharCode($(this).index() + 65);
				if(YDWnowadaysChoosen[i] == 0) {
					// console.log("if");
					var newItem = "<span id='YDWnowadaysAnswer"+i+"' class='answerOption'>【" + answer + "】</span>";
					$("#YDWnowadaysQ"+i).append(newItem);
					YDWnowadaysChoosen[i] = $(this).index() + 1;
				}
				else {
					// console.log("else");
					$("#YDWnowadaysAnswer"+i).html("【" + answer + "】");
					YDWnowadaysChoosen[i] = $(this).index() + 1;
				}
			});
		};
	}
	for(var index = 1; index < 6; index++){
		YDWmake(index);
		function YDWmake(i){
			$("#YDWmakeA"+i+">li").click(function() {
				var answer = String.fromCharCode($(this).index() + 65);
				if(YDWmakeChoosen[i] == 0) {
					// console.log("if");
					var newItem = "<span id='YDWmakeAnswer"+i+"' class='answerOption'>【" + answer + "】</span>";
					$("#YDWmakeQ"+i).append(newItem);
					YDWmakeChoosen[i] = $(this).index() + 1;
				}
				else {
					// console.log("else");
					$("#YDWmakeAnswer"+i).html("【" + answer + "】");
					YDWmakeChoosen[i] = $(this).index() + 1;
				}
			});
		};
	}
	//暂时保存
	$.ajax({
		type: "POST",
		url: "php/index/read.php",
		// dataType: "json",
		success: function(data){
			if(data!=''){
				var jsondata = $.parseJSON(data);
				$telephone = jsondata.telephone;
			}
		},
		error: function(){
			alert("会话错误");
		}
	});
	var isSave = false;
	for(var index = 1; index < 10; index++){
		saveButton(index);
		function saveButton(i){
			$("#saveButton"+i).unbind('click').click(function() {
				alert("保存成功");
				if(i == 1){
					for(var j = 1; j < 13; j++){
						$question = "HYMDhistoryQ" + j;
						$answer = HYMDhistoryChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 2){
					for(var j = 1; j < 11; j++){
						$question = "HYMDcharacterQ" + j;
						$answer = HYMDcharacterChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 3){
					for(var j = 1; j < 8; j++){
						$question = "HYMDmakeQ" + j;
						$answer = HYMDmakeChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 4){
					for(var j = 1; j < 10; j++){
						$question = "XWKZhistoryQ" + j;
						$answer = XWKZhistoryChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 5){
					for(var j = 1; j < 10; j++){
						$question = "XWKZnowadaysQ" + j;
						$answer = XWKZnowadaysChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 6){
					for(var j = 1; j < 7; j++){
						$question = "XWKZmakeQ" + j;
						$answer = XWKZmakeChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 7){
					for(var j = 1; j < 9; j++){
						$question = "YDWhistoryQ" + j;
						$answer = YDWhistoryChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 8){
					for(var j = 1; j < 6; j++){
						$question = "YDWnowadaysQ" + j;
						$answer = YDWnowadaysChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 9){
					for(var j = 1; j < 6; j++){
						$question = "YDWmakeQ" + j;
						$answer = YDWmakeChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
			});
		};
	}
	
	for(var index = 1; index < 10; index++){
		submitButton(index);
		function submitButton(i){
			$("#submitButton"+i).unbind('click').click(function() {
				alert("提交成功");
				if(i == 1){
					for(var j = 1; j < 13; j++){
						$question = "HYMDhistoryQ" + j;
						$answer = HYMDhistoryChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
					for(var j = 1; j < 13; j++){
						$question = "HYMDhistoryQ" + j;
						$answer = HYMDhistoryAnswer[j - 1];
						var newItem = "<span class = 'correctAnswer'>正确答案：【" + String.fromCharCode(HYMDhistoryAnswer[j - 1] + 64) + "】</span>";
						$("#HYMDhistoryQ" + j).append(newItem);
						$(".correctAnswer").css("color","red");
						$.ajax({
							type: "POST",
							url: "php/test/submitButton.php",
							dataType: "json",
							async: false,
							data: {answer: $answer, telephone: $telephone, question: $question, accuracy: "testHYMDhistory"},
							success: function(data) {
								if(data == "1") correctNum[1]++;
							},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 2){
					for(var j = 1; j < 11; j++){
						$question = "HYMDcharacterQ" + j;
						$answer = HYMDcharacterChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
					for(var j = 1; j < 11; j++){
						$question = "HYMDcharacterQ" + j;
						$answer = HYMDcharacterAnswer[j - 1];
						var newItem = "<span class = 'correctAnswer'>正确答案：【" + String.fromCharCode(HYMDcharacterAnswer[j - 1] + 64) + "】</span>";
						$("#HYMDcharacterQ" + j).append(newItem);
						$(".correctAnswer").css("color","red");
						$.ajax({
							type: "POST",
							url: "php/test/submitButton.php",
							dataType: "json",
							async: false,
							data: {answer: $answer, telephone: $telephone, question: $question, accuracy: "testHYMDcharacter"},
							success: function(data) {
								if(data == "1") correctNum[2]++;
							},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 3){
					for(var j = 1; j < 8; j++){
						$question = "HYMDmakeQ" + j;
						$answer = HYMDmakeChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
					for(var j = 1; j < 8; j++){
						$question = "HYMDmakeQ" + j;
						$answer = HYMDmakeAnswer[j - 1];
						var newItem = "<span class = 'correctAnswer'>正确答案：【" + String.fromCharCode(HYMDmakeAnswer[j - 1] + 64) + "】</span>";
						$("#HYMDmakeQ" + j).append(newItem);
						$(".correctAnswer").css("color","red");
						$.ajax({
							type: "POST",
							url: "php/test/submitButton.php",
							dataType: "json",
							async: false,
							data: {answer: $answer, telephone: $telephone, question: $question, accuracy: "testHYMDmake"},
							success: function(data) {
								if(data == "1") correctNum[3]++;
							},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 4){
					for(var j = 1; j < 10; j++){
						$question = "XWKZhistoryQ" + j;
						$answer = XWKZhistoryChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
					for(var j = 1; j < 10; j++){
						$question = "XWKZhistoryQ" + j;
						$answer = XWKZhistoryAnswer[j - 1];
						var newItem = "<span class = 'correctAnswer'>正确答案：【" + String.fromCharCode(XWKZhistoryAnswer[j - 1] + 64) + "】</span>";
						$("#XWKZhistoryQ" + j).append(newItem);
						$(".correctAnswer").css("color","red");
						$.ajax({
							type: "POST",
							url: "php/test/submitButton.php",
							dataType: "json",
							async: false,
							data: {answer: $answer, telephone: $telephone, question: $question, accuracy: "testXWKZhistory"},
							success: function(data) {
								if(data == "1") correctNum[4]++;
							},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 5){
					for(var j = 1; j < 10; j++){
						$question = "XWKZnowadaysQ" + j;
						$answer = XWKZnowadaysChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
					for(var j = 1; j < 10; j++){
						$question = "XWKZnowadaysQ" + j;
						$answer = XWKZnowadaysAnswer[j - 1];
						var newItem = "<span class = 'correctAnswer'>正确答案：【" + String.fromCharCode(XWKZnowadaysAnswer[j - 1] + 64) + "】</span>";
						$("#XWKZnowadaysQ" + j).append(newItem);
						$(".correctAnswer").css("color","red");
						$.ajax({
							type: "POST",
							url: "php/test/submitButton.php",
							dataType: "json",
							async: false,
							data: {answer: $answer, telephone: $telephone, question: $question, accuracy: "testXWKZnowadays"},
							success: function(data) {
								if(data == "1") correctNum[5]++;
							},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 6){
					for(var j = 1; j < 7; j++){
						$question = "XWKZmakeQ" + j;
						$answer = XWKZmakeChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
					for(var j = 1; j < 7; j++){
						$question = "XWKZmakeQ" + j;
						$answer = XWKZmakeAnswer[j - 1];
						var newItem = "<span class = 'correctAnswer'>正确答案：【" + String.fromCharCode(XWKZmakeAnswer[j - 1] + 64) + "】</span>";
						$("#XWKZmakeQ" + j).append(newItem);
						$(".correctAnswer").css("color","red");
						$.ajax({
							type: "POST",
							url: "php/test/submitButton.php",
							dataType: "json",
							async: false,
							data: {answer: $answer, telephone: $telephone, question: $question, accuracy: "testXWKZmake"},
							success: function(data) {
								if(data == "1") correctNum[6]++;
							},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 7){
					for(var j = 1; j < 9; j++){
						$question = "YDWhistoryQ" + j;
						$answer = YDWhistoryChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
					for(var j = 1; j < 9; j++){
						$question = "YDWhistoryQ" + j;
						$answer = YDWhistoryAnswer[j - 1];
						var newItem = "<span class = 'correctAnswer'>正确答案：【" + String.fromCharCode(YDWhistoryAnswer[j - 1] + 64) + "】</span>";
						$("#YDWhistoryQ" + j).append(newItem);
						$(".correctAnswer").css("color","red");
						$.ajax({
							type: "POST",
							url: "php/test/submitButton.php",
							dataType: "json",
							async: false,
							data: {answer: $answer, telephone: $telephone, question: $question, accuracy: "testYDWhistory"},
							success: function(data) {
								if(data == "1") correctNum[7]++;
							},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 8){
					for(var j = 1; j < 6; j++){
						$question = "YDWnowadaysQ" + j;
						$answer = YDWnowadaysChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
					for(var j = 1; j < 6; j++){
						$question = "YDWnowadaysQ" + j;
						$answer = YDWnowadaysAnswer[j - 1];
						var newItem = "<span class = 'correctAnswer'>正确答案：【" + String.fromCharCode(YDWnowadaysAnswer[j - 1] + 64) + "】</span>";
						$("#YDWnowadaysQ" + j).append(newItem);
						$(".correctAnswer").css("color","red");
						$.ajax({
							type: "POST",
							url: "php/test/submitButton.php",
							dataType: "json",
							async: false,
							data: {answer: $answer, telephone: $telephone, question: $question, accuracy: "testYDWnowadays"},
							success: function(data) {
								if(data == "1") correctNum[8]++;
							},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				else if(i == 9){
					for(var j = 1; j < 6; j++){
						$question = "YDWmakeQ" + j;
						$answer = YDWmakeChoosen[j];
						$.ajax({
							type: "POST",
							url: "php/test/saveButton.php",
							// dataType: "json",
							data: {telephone: $telephone, question: $question, answer: $answer},
							error: function() {
								alert("数据库错误");
							}
						});
					}
					for(var j = 1; j < 6; j++){
						$question = "YDWmakeQ" + j;
						$answer = YDWmakeAnswer[j - 1];
						var newItem = "<span class = 'correctAnswer'>正确答案：【" + String.fromCharCode(YDWmakeAnswer[j - 1] + 64) + "】</span>";
						$("#YDWmakeQ" + j).append(newItem);
						$(".correctAnswer").css("color","red");
						$.ajax({
							type: "POST",
							url: "php/test/submitButton.php",
							dataType: "json",
							async: false,
							data: {answer: $answer, telephone: $telephone, question: $question, accuracy: "testYDWmake"},
							success: function(data) {
								if(data == "1") correctNum[9]++;
							},
							error: function() {
								alert("数据库错误");
							}
						});
					}
				}
				$accuracy = parseInt(correctNum[i] / questionNum[i - 1] * 10000) / 100
				$.ajax({
					type: "POST",
					url: "php/test/test.php",
					// dataType: "json",
					async: false,
					data: {accuracy: $accuracy, telephone: $telephone, id: i},
					success: function(data) {
						alert("本模块准确率为" + $accuracy + "%");
					},
					error: function() {
						alert("数据库错误");
					}
				});
			});
		};
	}
	
	// 乐清黄杨木雕的历史与沿革
	
	/*
	$("#HYMDhistoryA1>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDhistoryChoosen1) {
			var newItem = "<span id='HYMDhistoryAnswer1' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDhistoryQ1").append(newItem);
			HYMDhistoryChoosen1 = true;
		}
		else {
			$("#HYMDhistoryAnswer1").html("【" + answer + "】");
		}
	})

	$("#HYMDhistoryA2>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDhistoryChoosen2) {
			var newItem = "<span id='HYMDhistoryAnswer2' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDhistoryQ2").append(newItem);
			HYMDhistoryChoosen2 = true;
		}
		else {
			$("#HYMDhistoryAnswer2").html("【" + answer + "】");
		}
	})

	$("#HYMDhistoryA3>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDhistoryChoosen3) {
			var newItem = "<span id='HYMDhistoryAnswer3' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDhistoryQ3").append(newItem);
			HYMDhistoryChoosen3 = true;
		}
		else {
			$("#HYMDhistoryAnswer3").html("【" + answer + "】");
		}
	})

	$("#HYMDhistoryA4>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDhistoryChoosen4) {
			var newItem = "<span id='HYMDhistoryAnswer4' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDhistoryQ4").append(newItem);
			HYMDhistoryChoosen4 = true;
		}
		else {
			$("#HYMDhistoryAnswer4").html("【" + answer + "】");
		}
	})

	$("#HYMDhistoryA5>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDhistoryChoosen5) {
			var newItem = "<span id='HYMDhistoryAnswer5' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDhistoryQ5").append(newItem);
			HYMDhistoryChoosen5 = true;
		}
		else {
			$("#HYMDhistoryAnswer5").html("【" + answer + "】");
		}
	})

	$("#HYMDhistoryA6>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDhistoryChoosen6) {
			var newItem = "<span id='HYMDhistoryAnswer6' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDhistoryQ6").append(newItem);
			HYMDhistoryChoosen6 = true;
		}
		else {
			$("#HYMDhistoryAnswer6").html("【" + answer + "】");
		}
	})

	$("#HYMDhistoryA7>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDhistoryChoosen7) {
			var newItem = "<span id='HYMDhistoryAnswer7' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDhistoryQ7").append(newItem);
			HYMDhistoryChoosen7 = true;
		}
		else {
			$("#HYMDhistoryAnswer7").html("【" + answer + "】");
		}
	})

	$("#HYMDhistoryA8>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDhistoryChoosen8) {
			var newItem = "<span id='HYMDhistoryAnswer8' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDhistoryQ8").append(newItem);
			HYMDhistoryChoosen8 = true;
		}
		else {
			$("#HYMDhistoryAnswer8").html("【" + answer + "】");
		}
	})

	$("#HYMDhistoryA9>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDhistoryChoosen9) {
			var newItem = "<span id='HYMDhistoryAnswer9' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDhistoryQ9").append(newItem);
			HYMDhistoryChoosen9 = true;
		}
		else {
			$("#HYMDhistoryAnswer9").html("【" + answer + "】");
		}
	})

	$("#HYMDhistoryA10>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDhistoryChoosen10) {
			var newItem = "<span id='HYMDhistoryAnswer10' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDhistoryQ10").append(newItem);
			HYMDhistoryChoosen10 = true;
		}
		else {
			$("#HYMDhistoryAnswer10").html("【" + answer + "】");
		}
	})

	$("#HYMDhistoryA11>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDhistoryChoosen11) {
			var newItem = "<span id='HYMDhistoryAnswer11' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDhistoryQ11").append(newItem);
			HYMDhistoryChoosen11 = true;
		}
		else {
			$("#HYMDhistoryAnswer11").html("【" + answer + "】");
		}
	})

	$("#HYMDhistoryA12>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDhistoryChoosen12) {
			var newItem = "<span id='HYMDhistoryAnswer12' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDhistoryQ12").append(newItem);
			HYMDhistoryChoosen12 = true;
		}
		else {
			$("#HYMDhistoryAnswer12").html("【" + answer + "】");
		}
	})

	// 乐清黄杨木雕的艺术人物
	$("#HYMDcharacterA1>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDcharacterChoosen1) {
			var newItem = "<span id='HYMDcharacterAnswer1' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDcharacterQ1").append(newItem);
			HYMDcharacterChoosen1 = true;
		}
		else {
			$("#HYMDcharacterAnswer1").html("【" + answer + "】");
		}
	})

	$("#HYMDcharacterA2>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDcharacterChoosen2) {
			var newItem = "<span id='HYMDcharacterAnswer2' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDcharacterQ2").append(newItem);
			HYMDcharacterChoosen2 = true;
		}
		else {
			$("#HYMDcharacterAnswer2").html("【" + answer + "】");
		}
	})

	$("#HYMDcharacterA3>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDcharacterChoosen3) {
			var newItem = "<span id='HYMDcharacterAnswer3' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDcharacterQ3").append(newItem);
			HYMDcharacterChoosen3 = true;
		}
		else {
			$("#HYMDcharacterAnswer3").html("【" + answer + "】");
		}
	})

	$("#HYMDcharacterA4 li").click(function() {
		var answer = String.fromCharCode($(this).index() + ($(this).parent()).index() * 2 + 65);
		if(!HYMDcharacterChoosen4) {
			var newItem = "<span id='HYMDcharacterAnswer4' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDcharacterQ4").append(newItem);
			HYMDcharacterChoosen4 = true;
		}
		else {
			$("#HYMDcharacterAnswer4").html("【" + answer + "】");
		}
	})

	$("#HYMDcharacterA5>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDcharacterChoosen5) {
			var newItem = "<span id='HYMDcharacterAnswer5' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDcharacterQ5").append(newItem);
			HYMDcharacterChoosen5 = true;
		}
		else {
			$("#HYMDcharacterAnswer5").html("【" + answer + "】");
		}
	})

	$("#HYMDcharacterA6>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDcharacterChoosen6) {
			var newItem = "<span id='HYMDcharacterAnswer6' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDcharacterQ6").append(newItem);
			HYMDcharacterChoosen6 = true;
		}
		else {
			$("#HYMDcharacterAnswer6").html("【" + answer + "】");
		}
	})

	$("#HYMDcharacterA7>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDcharacterChoosen7) {
			var newItem = "<span id='HYMDcharacterAnswer7' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDcharacterQ7").append(newItem);
			HYMDcharacterChoosen7 = true;
		}
		else {
			$("#HYMDcharacterAnswer7").html("【" + answer + "】");
		}
	})

	$("#HYMDcharacterA8>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDcharacterChoosen8) {
			var newItem = "<span id='HYMDcharacterAnswer8' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDcharacterQ8").append(newItem);
			HYMDcharacterChoosen8 = true;
		}
		else {
			$("#HYMDcharacterAnswer8").html("【" + answer + "】");
		}
	})

	$("#HYMDcharacterA9>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDcharacterChoosen9) {
			var newItem = "<span id='HYMDcharacterAnswer9' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDcharacterQ9").append(newItem);
			HYMDcharacterChoosen9 = true;
		}
		else {
			$("#HYMDcharacterAnswer9").html("【" + answer + "】");
		}
	})

	$("#HYMDcharacterA10>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDcharacterChoosen10) {
			var newItem = "<span id='HYMDcharacterAnswer10' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDcharacterQ10").append(newItem);
			HYMDcharacterChoosen10 = true;
		}
		else {
			$("#HYMDcharacterAnswer10").html("【" + answer + "】");
		}
	})

	// 乐清黄杨木雕的制作流程
	$("#HYMDmakeA1>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDmakeChoosen1) {
			var newItem = "<span id='HYMDmakeAnswer1' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDmakeQ1").append(newItem);
			HYMDmakeChoosen1 = true;
		}
		else {
			$("#HYMDmakeAnswer1").html("【" + answer + "】");
		}
	})

	$("#HYMDmakeA2 li").click(function() {
		var answer = String.fromCharCode($(this).index() + ($(this).parent()).index() * 2 + 65);
		if(!HYMDmakeChoosen2) {
			var newItem = "<span id='HYMDmakeAnswer2' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDmakeQ2").append(newItem);
			HYMDmakeChoosen2 = true;
		}
		else {
			$("#HYMDmakeAnswer2").html("【" + answer + "】");
		}
	})

	$("#HYMDmakeA3>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDmakeChoosen3) {
			var newItem = "<span id='HYMDmakeAnswer3' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDmakeQ3").append(newItem);
			HYMDmakeChoosen3 = true;
		}
		else {
			$("#HYMDmakeAnswer3").html("【" + answer + "】");
		}
	})

	$("#HYMDmakeA4>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDmakeChoosen4) {
			var newItem = "<span id='HYMDmakeAnswer4' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDmakeQ4").append(newItem);
			HYMDmakeChoosen4 = true;
		}
		else {
			$("#HYMDmakeAnswer4").html("【" + answer + "】");
		}
	})

	$("#HYMDmakeA5>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDmakeChoosen5) {
			var newItem = "<span id='HYMDmakeAnswer5' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDmakeQ5").append(newItem);
			HYMDmakeChoosen5 = true;
		}
		else {
			$("#HYMDmakeAnswer5").html("【" + answer + "】");
		}
	})

	$("#HYMDmakeA6>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDmakeChoosen6) {
			var newItem = "<span id='HYMDmakeAnswer6' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDmakeQ6").append(newItem);
			HYMDmakeChoosen6 = true;
		}
		else {
			$("#HYMDmakeAnswer6").html("【" + answer + "】");
		}
	})

	$("#HYMDmakeA7>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!HYMDmakeChoosen7) {
			var newItem = "<span id='HYMDmakeAnswer7' class='answerOption'>【" + answer + "】</span>";
			$("#HYMDmakeQ7").append(newItem);
			HYMDmakeChoosen7 = true;
		}
		else {
			$("#HYMDmakeAnswer7").html("【" + answer + "】");
		}
	})

	// 乐清细纹刻纸的历史传承
	$("#XWKZhistoryA1>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZhistoryChoosen1) {
			var newItem = "<span id='XWKZhistoryAnswer1' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZhistoryQ1").append(newItem);
			XWKZhistoryChoosen1 = true;
		}
		else {
			$("#XWKZhistoryAnswer1").html("【" + answer + "】");
		}
	})

	$("#XWKZhistoryA2>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZhistoryChoosen2) {
			var newItem = "<span id='XWKZhistoryAnswer2' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZhistoryQ2").append(newItem);
			XWKZhistoryChoosen2 = true;
		}
		else {
			$("#XWKZhistoryAnswer2").html("【" + answer + "】");
		}
	})

	$("#XWKZhistoryA3 li").click(function() {
		var answer = String.fromCharCode($(this).index() + ($(this).parent()).index() * 2 + 65);
		if(!XWKZhistoryChoosen3) {
			var newItem = "<span id='XWKZhistoryAnswer3' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZhistoryQ3").append(newItem);
			XWKZhistoryChoosen3 = true;
		}
		else {
			$("#XWKZhistoryAnswer3").html("【" + answer + "】");
		}
	})

	$("#XWKZhistoryA4>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZhistoryChoosen4) {
			var newItem = "<span id='XWKZhistoryAnswer4' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZhistoryQ4").append(newItem);
			XWKZhistoryChoosen4 = true;
		}
		else {
			$("#XWKZhistoryAnswer4").html("【" + answer + "】");
		}
	})

	$("#XWKZhistoryA5>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZhistoryChoosen5) {
			var newItem = "<span id='XWKZhistoryAnswer5' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZhistoryQ5").append(newItem);
			XWKZhistoryChoosen5 = true;
		}
		else {
			$("#XWKZhistoryAnswer5").html("【" + answer + "】");
		}
	})

	$("#XWKZhistoryA6 li").click(function() {
		var answer = String.fromCharCode($(this).index() + ($(this).parent()).index() * 2 + 65);
		if(!XWKZhistoryChoosen6) {
			var newItem = "<span id='XWKZhistoryAnswer6' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZhistoryQ6").append(newItem);
			XWKZhistoryChoosen6 = true;
		}
		else {
			$("#XWKZhistoryAnswer6").html("【" + answer + "】");
		}
	})

	$("#XWKZhistoryA7>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZhistoryChoosen7) {
			var newItem = "<span id='XWKZhistoryAnswer7' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZhistoryQ7").append(newItem);
			XWKZhistoryChoosen7 = true;
		}
		else {
			$("#XWKZhistoryAnswer7").html("【" + answer + "】");
		}
	})

	$("#XWKZhistoryA8>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZhistoryChoosen8) {
			var newItem = "<span id='XWKZhistoryAnswer8' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZhistoryQ8").append(newItem);
			XWKZhistoryChoosen8 = true;
		}
		else {
			$("#XWKZhistoryAnswer8").html("【" + answer + "】");
		}
	})

	// $("#XWKZhistoryA9>li").click(function() {
	// 	var answer = String.fromCharCode($(this).index() + 65);
	// 	if(!XWKZhistoryChoosen9) {
	// 		var newItem = "<span id='XWKZhistoryAnswer9' class='answerOption'>【" + answer + "】</span>";
	// 		$("#XWKZhistoryQ9").append(newItem);
	// 		XWKZhistoryChoosen9 = true;
	// 	}
	// 	else {
	// 		$("#XWKZhistoryAnswer9").html("【" + answer + "】");
	// 	}
	// })

	// 乐清细纹刻纸的现状
	$("#XWKZnowadaysA1>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZnowadaysChoosen1) {
			var newItem = "<span id='XWKZnowadaysAnswer1' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZnowadaysQ1").append(newItem);
			XWKZnowadaysChoosen1 = true;
		}
		else {
			$("#XWKZnowadaysAnswer1").html("【" + answer + "】");
		}
	})

	$("#XWKZnowadaysA2>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZnowadaysChoosen2) {
			var newItem = "<span id='XWKZnowadaysAnswer2' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZnowadaysQ2").append(newItem);
			XWKZnowadaysChoosen2 = true;
		}
		else {
			$("#XWKZnowadaysAnswer2").html("【" + answer + "】");
		}
	})

	$("#XWKZnowadaysA3 li").click(function() {
		var answer = String.fromCharCode($(this).index() + ($(this).parent()).index() * 2 + 65);
		if(!XWKZnowadaysChoosen3) {
			var newItem = "<span id='XWKZnowadaysAnswer3' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZnowadaysQ3").append(newItem);
			XWKZnowadaysChoosen3 = true;
		}
		else {
			$("#XWKZnowadaysAnswer3").html("【" + answer + "】");
		}
	})

	$("#XWKZnowadaysA4>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZnowadaysChoosen4) {
			var newItem = "<span id='XWKZnowadaysAnswer4' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZnowadaysQ4").append(newItem);
			XWKZnowadaysChoosen4 = true;
		}
		else {
			$("#XWKZnowadaysAnswer4").html("【" + answer + "】");
		}
	})

	$("#XWKZnowadaysA5>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZnowadaysChoosen5) {
			var newItem = "<span id='XWKZnowadaysAnswer5' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZnowadaysQ5").append(newItem);
			XWKZnowadaysChoosen5 = true;
		}
		else {
			$("#XWKZnowadaysAnswer5").html("【" + answer + "】");
		}
	})

	$("#XWKZnowadaysA6 li").click(function() {
		var answer = String.fromCharCode($(this).index() + ($(this).parent()).index() * 2 + 65);
		if(!XWKZnowadaysChoosen6) {
			var newItem = "<span id='XWKZnowadaysAnswer6' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZnowadaysQ6").append(newItem);
			XWKZnowadaysChoosen6 = true;
		}
		else {
			$("#XWKZnowadaysAnswer6").html("【" + answer + "】");
		}
	})

	$("#XWKZnowadaysA7>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZnowadaysChoosen7) {
			var newItem = "<span id='XWKZnowadaysAnswer7' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZnowadaysQ7").append(newItem);
			XWKZnowadaysChoosen7 = true;
		}
		else {
			$("#XWKZnowadaysAnswer7").html("【" + answer + "】");
		}
	})

	$("#XWKZnowadaysA8>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZnowadaysChoosen8) {
			var newItem = "<span id='XWKZnowadaysAnswer8' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZnowadaysQ8").append(newItem);
			XWKZnowadaysChoosen8 = true;
		}
		else {
			$("#XWKZnowadaysAnswer8").html("【" + answer + "】");
		}
	})

	// $("#XWKZnowadaysA9 li").click(function() {
	// 	var answer = String.fromCharCode($(this).index() + ($(this).parent()).index() * 2 + 65);
	// 	if(!XWKZnowadaysChoosen9) {
	// 		var newItem = "<span id='XWKZnowadaysAnswer9' class='answerOption'>【" + answer + "】</span>";
	// 		$("#XWKZnowadaysQ9").append(newItem);
	// 		XWKZnowadaysChoosen9 = true;
	// 	}
	// 	else {
	// 		$("#XWKZnowadaysAnswer9").html("【" + answer + "】");
	// 	}
	// })

	// 乐清细纹刻纸的制作流程
	$("#XWKZmakeA1>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZmakeChoosen1) {
			var newItem = "<span id='XWKZmakeAnswer1' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZmakeQ1").append(newItem);
			XWKZmakeChoosen1 = true;
		}
		else {
			$("#XWKZmakeAnswer1").html("【" + answer + "】");
		}
	})

	$("#XWKZmakeA2>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZmakeChoosen2) {
			var newItem = "<span id='XWKZmakeAnswer2' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZmakeQ2").append(newItem);
			XWKZmakeChoosen2 = true;
		}
		else {
			$("#XWKZmakeAnswer2").html("【" + answer + "】");
		}
	})
	
	$("#XWKZmakeA3>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZmakeChoosen3) {
			var newItem = "<span id='XWKZmakeAnswer3' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZmakeQ3").append(newItem);
			XWKZmakeChoosen3 = true;
		}
		else {
			$("#XWKZmakeAnswer3").html("【" + answer + "】");
		}
	})
	
	$("#XWKZmakeA4>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZmakeChoosen4) {
			var newItem = "<span id='XWKZmakeAnswer4' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZmakeQ4").append(newItem);
			XWKZmakeChoosen4 = true;
		}
		else {
			$("#XWKZmakeAnswer4").html("【" + answer + "】");
		}
	})
	
	$("#XWKZmakeA5 li").click(function() {
		var answer = String.fromCharCode($(this).index() + ($(this).parent()).index() * 2 + 65);
		if(!XWKZmakeChoosen5) {
			var newItem = "<span id='XWKZmakeAnswer5' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZmakeQ5").append(newItem);
			XWKZmakeChoosen5 = true;
		}
		else {
			$("#XWKZmakeAnswer5").html("【" + answer + "】");
		}
	})
	
	$("#XWKZmakeA6>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!XWKZmakeChoosen6) {
			var newItem = "<span id='XWKZmakeAnswer6' class='answerOption'>【" + answer + "】</span>";
			$("#XWKZmakeQ6").append(newItem);
			XWKZmakeChoosen6 = true;
		}
		else {
			$("#XWKZmakeAnswer6").html("【" + answer + "】");
		}
	})
	
	// $("#XWKZmakeA7>li").click(function() {
	// 	var answer = String.fromCharCode($(this).index() + 65);
	// 	if(!XWKZmakeChoosen7) {
	// 		var newItem = "<span id='XWKZmakeAnswer7' class='answerOption'>【" + answer + "】</span>";
	// 		$("#XWKZmakeQ7").append(newItem);
	// 		XWKZmakeChoosen7 = true;
	// 	}
	// 	else {
	// 		$("#XWKZmakeAnswer7").html("【" + answer + "】");
	// 	}
	// })

	// 乐清鱼灯舞历史发展
	$("#YDWhistoryA1>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWhistoryChoosen1) {
			var newItem = "<span id='YDWhistoryAnswer1' class='answerOption'>【" + answer + "】</span>";
			$("#YDWhistoryQ1").append(newItem);
			YDWhistoryChoosen1 = true;
		}
		else {
			$("#YDWhistoryAnswer1").html("【" + answer + "】");
		}
	})

	$("#YDWhistoryA2>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWhistoryChoosen2) {
			var newItem = "<span id='YDWhistoryAnswer2' class='answerOption'>【" + answer + "】</span>";
			$("#YDWhistoryQ2").append(newItem);
			YDWhistoryChoosen2 = true;
		}
		else {
			$("#YDWhistoryAnswer2").html("【" + answer + "】");
		}
	})
	
	$("#YDWhistoryA3>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWhistoryChoosen3) {
			var newItem = "<span id='YDWhistoryAnswer3' class='answerOption'>【" + answer + "】</span>";
			$("#YDWhistoryQ3").append(newItem);
			YDWhistoryChoosen3 = true;
		}
		else {
			$("#YDWhistoryAnswer3").html("【" + answer + "】");
		}
	})
	
	$("#YDWhistoryA4>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWhistoryChoosen4) {
			var newItem = "<span id='YDWhistoryAnswer4' class='answerOption'>【" + answer + "】</span>";
			$("#YDWhistoryQ4").append(newItem);
			YDWhistoryChoosen4 = true;
		}
		else {
			$("#YDWhistoryAnswer4").html("【" + answer + "】");
		}
	})
	
	$("#YDWhistoryA5>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWhistoryChoosen5) {
			var newItem = "<span id='YDWhistoryAnswer5' class='answerOption'>【" + answer + "】</span>";
			$("#YDWhistoryQ5").append(newItem);
			YDWhistoryChoosen5 = true;
		}
		else {
			$("#YDWhistoryAnswer5").html("【" + answer + "】");
		}
	})
	
	$("#YDWhistoryA6>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWhistoryChoosen6) {
			var newItem = "<span id='YDWhistoryAnswer6' class='answerOption'>【" + answer + "】</span>";
			$("#YDWhistoryQ6").append(newItem);
			YDWhistoryChoosen6 = true;
		}
		else {
			$("#YDWhistoryAnswer6").html("【" + answer + "】");
		}
	})
	
	$("#YDWhistoryA7>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWhistoryChoosen7) {
			var newItem = "<span id='YDWhistoryAnswer7' class='answerOption'>【" + answer + "】</span>";
			$("#YDWhistoryQ7").append(newItem);
			YDWhistoryChoosen7 = true;
		}
		else {
			$("#YDWhistoryAnswer7").html("【" + answer + "】");
		}
	})
	
	$("#YDWhistoryA8>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWhistoryChoosen8) {
			var newItem = "<span id='YDWhistoryAnswer8' class='answerOption'>【" + answer + "】</span>";
			$("#YDWhistoryQ8").append(newItem);
			YDWhistoryChoosen8 = true;
		}
		else {
			$("#YDWhistoryAnswer8").html("【" + answer + "】");
		}
	})

	// 乐清鱼灯舞的现状
	$("#YDWnowadaysA1>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWnowadaysChoosen1) {
			var newItem = "<span id='YDWnowadaysAnswer1' class='answerOption'>【" + answer + "】</span>";
			$("#YDWnowadaysQ1").append(newItem);
			YDWnowadaysChoosen1 = true;
		}
		else {
			$("#YDWnowadaysAnswer1").html("【" + answer + "】");
		}
	})

	$("#YDWnowadaysA2>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWnowadaysChoosen2) {
			var newItem = "<span id='YDWnowadaysAnswer2' class='answerOption'>【" + answer + "】</span>";
			$("#YDWnowadaysQ2").append(newItem);
			YDWnowadaysChoosen2 = true;
		}
		else {
			$("#YDWnowadaysAnswer2").html("【" + answer + "】");
		}
	})

	$("#YDWnowadaysA3 li").click(function() {
		var answer = String.fromCharCode($(this).index() + ($(this).parent()).index() * 2 + 65);
		if(!YDWnowadaysChoosen3) {
			var newItem = "<span id='YDWnowadaysAnswer3' class='answerOption'>【" + answer + "】</span>";
			$("#YDWnowadaysQ3").append(newItem);
			YDWnowadaysChoosen3 = true;
		}
		else {
			$("#YDWnowadaysAnswer3").html("【" + answer + "】");
		}
	})

	$("#YDWnowadaysA4>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWnowadaysChoosen4) {
			var newItem = "<span id='YDWnowadaysAnswer4' class='answerOption'>【" + answer + "】</span>";
			$("#YDWnowadaysQ4").append(newItem);
			YDWnowadaysChoosen4 = true;
		}
		else {
			$("#YDWnowadaysAnswer4").html("【" + answer + "】");
		}
	})

	$("#YDWnowadaysA5>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWnowadaysChoosen5) {
			var newItem = "<span id='YDWnowadaysAnswer5' class='answerOption'>【" + answer + "】</span>";
			$("#YDWnowadaysQ5").append(newItem);
			YDWnowadaysChoosen5 = true;
		}
		else {
			$("#YDWnowadaysAnswer5").html("【" + answer + "】");
		}
	})

	// 乐清鱼灯舞的制作流程
	$("#YDWmakeA1>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWmakeChoosen1) {
			var newItem = "<span id='YDWmakeAnswer1' class='answerOption'>【" + answer + "】</span>";
			$("#YDWmakeQ1").append(newItem);
			YDWmakeChoosen1 = true;
		}
		else {
			$("#YDWmakeAnswer1").html("【" + answer + "】");
		}
	})

	$("#YDWmakeA2>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWmakeChoosen2) {
			var newItem = "<span id='YDWmakeAnswer2' class='answerOption'>【" + answer + "】</span>";
			$("#YDWmakeQ2").append(newItem);
			YDWmakeChoosen2 = true;
		}
		else {
			$("#YDWmakeAnswer2").html("【" + answer + "】");
		}
	})

	$("#YDWmakeA3 li").click(function() {
		var answer = String.fromCharCode($(this).index() + ($(this).parent()).index() * 2 + 65);
		if(!YDWmakeChoosen3) {
			var newItem = "<span id='YDWmakeAnswer3' class='answerOption'>【" + answer + "】</span>";
			$("#YDWmakeQ3").append(newItem);
			YDWmakeChoosen3 = true;
		}
		else {
			$("#YDWmakeAnswer3").html("【" + answer + "】");
		}
	})

	$("#YDWmakeA4 li").click(function() {
		var answer = String.fromCharCode($(this).index() + ($(this).parent()).index() * 2 + 65);
		if(!YDWmakeChoosen4) {
			var newItem = "<span id='YDWmakeAnswer4' class='answerOption'>【" + answer + "】</span>";
			$("#YDWmakeQ4").append(newItem);
			YDWmakeChoosen4 = true;
		}
		else {
			$("#YDWmakeAnswer4").html("【" + answer + "】");
		}
	})

	$("#YDWmakeA5>li").click(function() {
		var answer = String.fromCharCode($(this).index() + 65);
		if(!YDWmakeChoosen5) {
			var newItem = "<span id='YDWmakeAnswer5' class='answerOption'>【" + answer + "】</span>";
			$("#YDWmakeQ5").append(newItem);
			YDWmakeChoosen5 = true;
		}
		else {
			$("#YDWmakeAnswer5").html("【" + answer + "】");
		}
	})
*/
}
$(window).load(function(e) {
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
	Book_v7.load();
	flush();
});