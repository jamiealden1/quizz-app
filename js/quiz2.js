var count=1;

var questions = [
	{
		question:"When Fry discovers that he's a billionaire, what does he buy?",
		choices:["A Lucy Liu robot", "A lifetime supply of Slurm", "The last tin of sardines on Earth", "The Planet Express"],
		correctIndex:2,
		answer: "The last tin of sardines on Earth"
	},

	{
		question:"Finish this phrase: 'Morbo is pleased, but ____'",
		choices:["Angry", "Sticky", "Smelly", "Confused"],
		correctIndex:1,
		answer:"Sticky"
	},

	{
		question:"What is the only creature on Earth that Bender is sympathetic to?",
		choices:["Turtles", "Goats", "Cats", "Butterflies"],
		correctIndex:0,
		answer:"Turtles"
	},

	{
		question:"What is missing from Zapp Brannigan's uniform?",
		choices:["Boots", "Gloves", "Pants", "Belt"],
		correctIndex:2,
		answer:"Pants"
	},

	{
		question:"How is Professor Farnsworth related to Fry?",
		choices:["Great (x30) grandson", "Great (x30) nephew", "2nd cousin 20 times removed", "He isn't"],
		correctIndex:1,
		answer:"Great (x30) nephew"
	},

	{
		question:"Who is Bender's evil twin?",
		choices:["Calculon", "Roberto", "Flexo", "Coilette"],
		correctIndex:2,
		answer:"Flexo"
	},

	{
		question:"What is Zoidberg's first name?",
		choices:["John", "Phillip", "Kevin", "James"],
		correctIndex:0,
		answer:"John"
	},

	{
		question:"How does the Femputer sentence Fry, Zapp, and Kif to die?",
		choices:["By firing squad", "By snu snu", "By dinosaur attack", "By suicide booth"],
		correctIndex:1,
		answer:"By snu snu"
	},

	{
		question:"What sport does Hermes compete in during the 2980 Olympics?",
		choices:["Octopus Wrestling", "Blernsball", "Swurling", "Limbo"],
		correctIndex:3,
		answer:"Limbo"
	},	

	{
		question:"What is Zoidberg a doctor of?",
		choices:["Art History", "General Medicine", "Podiatry", "Physics"],
		correctIndex:0,
		answer:"Art History"
	}
]

var quiz = {
	questions[],
	currentQuestionIndex:0,
	score:0,

	//show current question
	currentQuestion: function() {
		$("#question").text(this.questions[currentQuestionIndex].question);
		$("#answer").text(this.questions[currentQuestionIndex].answer);
		$("#answerA").text(this.questions[currentQuestionIndex].choices[0]);
		$("#answerB").text(this.questions[currentQuestionIndex].choices[1]);
		$("#answerC").text(this.questions[currentQuestionIndex].choices[2]);
		$("#answerD").text(this.questions[currentQuestionIndex].choices[3];
	},

	//check if answer is correct, adjust score
	checkAnswer: function() {
		var userAnswer = $('input[name="option"]:checked').val();
		var correctAnswer = this.currentQuestion().choices[this.currentQuestion().correctIndex];
		if (userAnswer===correctAnswer) {
			this.score++;
			$("#result").text("Correct!");
		}
		else {
			("#result").text("Wrong")
		}
	},
}


function finalScore(){
	$("#final").text(score);
}

function reset(){
	i=0;
	score=0;
	count=1;
	$("input:checked").removeAttr("checked");
}

function start(){
	reset();
	$("#playArea").show();
	$("#question").text(futuramaQuiz.questions[0].question);
	$("#answer").text(futuramaQuiz.questions[0].answer);
	$("#answerA").text(futuramaQuiz.questions[0].a);
	$("#answerB").text(futuramaQuiz.questions[0].b);
	$("#answerC").text(futuramaQuiz.questions[0].c);
	$("#answerD").text(futuramaQuiz.questions[0].d);
	$("#quizImage").html(imgArray[0].src);
	$("#count").text(1);
	$("#score").text(0);
}

function next(){
	i++;
	if (i<10) {
		$("#question").text(futuramaQuiz.questions[i].question);
		$("#answer").text(futuramaQuiz.questions[i].answer);
		$("#answerA").text(futuramaQuiz.questions[i].a);
		$("#answerB").text(futuramaQuiz.questions[i].b);
		$("#answerC").text(futuramaQuiz.questions[i].c);
		$("#answerD").text(futuramaQuiz.questions[i].d);
		$("input:checked").removeAttr("checked");		
	}
	else {
		$("#playArea").hide();
		$("#finalScore").show();
		finalScore();
	}
};

function quizCounter() {
	count++;
	$("#count").text(count);
}


$(document).ready(function(){

	//Initial launch, start game
	$("#start").click(function(){
		$("#intro").hide();
		start();
	});

	//Submit answer, get feedback
	$("#submit").click(function(){
		event.preventDefault();
		$("#quiz").hide();
		$("#feedback").show();
		checkAnswer();
	});

	//Show next question
	$("#next").click(function(){
		$("#feedback").hide();
		$("#quiz").show();
		next();
		quizCounter();
	});

	//Start new game
	$("#new").click(function(){
		$("#finalScore").hide();
		start();
	});

});


