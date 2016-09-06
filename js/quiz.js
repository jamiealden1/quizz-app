var score = 0;
var i=0;
var count=1;

futuramaQuiz = {
	"questions": [
		{
			"question":"When Fry discovers that he's a billionaire, what does he buy?",
			"a":"A Lucy Liu robot",
			"b":"A lifetime supply of Slurm",
			"c":"The last tin of sardines on Earth",
			"d":"The Planet Express",
			"answer":"The last tin of sardines on Earth",
			"correct":"c"
		},

		{
			"question":"Finish this phrase: 'Morbo is pleased, but ____'",
			"a":"Angry",
			"b":"Sticky",
			"c":"Smelly",
			"d":"Confused",
			"answer":"Sticky",
			"correct":"b"
		},

		{
			"question":"What is the only creature on Earth that Bender is sympathetic to?",
			"a":"Turtles",
			"b":"Goats",
			"c":"Cats",
			"d":"Butterflies",
			"answer":"Turtles",
			"correct":"a"
		},

		{
			"question":"What is missing from Zapp Brannigan's uniform?",
			"a":"Boots",
			"b":"Gloves",
			"c":"Pants",
			"d":"Belt",
			"answer":"Pants",
			"correct":"c"
		},

		{
			"question":"How is Professor Farnsworth related to Fry?",
			"a":"Great (x30) grandson",
			"b":"Great (x30) nephew",
			"c":"2nd cousin 20 times removed",
			"d":"He isn't",
			"answer":"Great (x30) nephew",
			"correct":"b"
		},

		{
			"question":"Who is Bender's evil twin?",
			"a":"Calculon",
			"b":"Roberto",
			"c":"Flexo",
			"d":"Coilette",
			"answer":"Flexo",
			"correct":"c"
		},

		{
			"question":"What is Zoidberg's first name?",
			"a":"John",
			"b":"Phillip",
			"c":"Kevin",
			"d":"James",
			"answer":"John",
			"correct":"a"
		},

		{
			"question":"How does the Femputer sentence Fry, Zapp, and Kif to die?",
			"a":"By firing squad",
			"b":"By snu snu",
			"c":"By dinosaur attack",
			"d":"By suicide booth",
			"answer":"By snu snu",
			"correct":"b"
		},

		{
			"question":"What sport does Hermes compete in during the 2980 Olympics?",
			"a":"Octopus Wrestling",
			"b":"Blernsball",
			"c":"Swurling",
			"d":"Limbo",
			"answer":"Limbo",
			"correct":"d"
		},	

		{
			"question":"What is Zoidberg a doctor of?",
			"a":"Art History",
			"b":"General Medicine",
			"c":"Podiatry",
			"d":"Physics",
			"answer":"Art History",
			"correct":"a"
		}
	]	
};
function checkAnswer(){
var currentAnswer=futuramaQuiz.questions[i].correct;
	if ($('input[name="option"]:checked').val() == currentAnswer){
		$("#result").text("Correct!");
		score++;
		$("#score").text(score);
	}
	else {
		$("#result").text("Wrong");
	};
};

	
function start(){
	$("#playArea").show();
	$("#question").text(futuramaQuiz.questions[0].question);
	$("#answer").text(futuramaQuiz.questions[0].answer);
	$("#answerA").text(futuramaQuiz.questions[0].a);
	$("#answerB").text(futuramaQuiz.questions[0].b);
	$("#answerC").text(futuramaQuiz.questions[0].c);
	$("#answerD").text(futuramaQuiz.questions[0].d);
	$("#count").text(1);
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
				
	}
	else {
		$("#playArea").hide();
		$("#finalScore").show();
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

	//Show final score
	$("#final").click(function(){
		$("#feedback").hide();
		$("#finalScore").show();
	});

	//Start new game
	$("#new").click(function(){
		//
	});



});
//Quiz Object


