function choose(){

	var q1 = document.quiz.q1.value;
	var q2 = document.quiz.q2.value;
	var q3 = document.quiz.q3.value;
	var q4 = document.quiz.q4.value;
	var q5 = document.quiz.q5.value;
	
	var correct = 0;

	if (q1 == "correct_1") {
		correct++;
}
	if (q2 == "correct_2") {
		correct++;
}	
	if (q3 == "correct_3") {
		correct++;
	}
	if (q4 == "correct_4") {
		correct++;
}	
	if (q5 == "correct_5") {
		correct++;
	}
	
	var score;

	if (correct == 0) {
		score = 4;
	}
	if (correct > 0 && correct < 3) {
		score = 3;
	}
	if (correct > 0 && correct < 4) {
		score = 2;
	}
	if (correct > 0 && correct < 5) {
		score = 1;
	}

	if (correct == 5) {
		score = 0;
	}
	
	document.getElementById("correct_number").innerHTML = correct + " correct answer";
	document.getElementById("submit").style.visibility = "visible";
	}
	
