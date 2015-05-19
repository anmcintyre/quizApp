$(document).ready(function(){

	$("#tabs").tabs({
		disabled: [1, 2, 3, 4, 5]
	}); 
	
	$("button" ).button().click(function(){
		if (showingQuestion)
			showAnswer(tabIndex+1);
		else
			nextQuestion();
		showingQuestion = !showingQuestion;		
	});

});

var tabIndex = 0;
var showingQuestion = true;
var answers = ["d", "a", "c", "b", "d"];
var correctAnswers = 0;

function showAnswer(questionNum){
	var answer = $("input[name=questionRadio" + questionNum + "]:checked").val();
	if (answer == undefined){
		alert("Please select an answer");
		return;
	}

	if (answer === answers[questionNum-1]){
		$("h2", "#answer" + questionNum).text("Correct!");
		correctAnswers++;
	} else {
		$("h2", "#answer" + questionNum).text("Incorrect");
	}
	
	$("#query" + questionNum).hide();
	$("#answer" + questionNum).show();
}

function nextQuestion(){
	if (tabIndex == 4){
		$("#correctNum").text(correctAnswers);	
		$("button").remove();
	}
	$("#tabs").tabs("enable", tabIndex+1)
		.tabs("disable", tabIndex)
		.tabs("option", "active", tabIndex+1);
	tabIndex++;
}



