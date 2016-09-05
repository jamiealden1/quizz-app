futuramaQuiz = {
	"questions": [
		{
			"question":"When Fry discovers that he's a billionaire, what does he buy?",
			"a":"A Lucy Liu robot",
			"b":"A lifetime supply of Slurm",
			"c":"The last tin of sardines on Earth",
			"d":"The Planet Express",
			"answer":"The last tin of sardines on Earth",
			"explanation":"He buys the last tin of sardines on Earth."
		},

		{
			"question":"Finish this phrase: 'Morbo is pleased, but ____'",
			"a":"Angry",
			"b":"Sticky",
			"c":"Smelly",
			"d":"Confused",
			"answer":"Sticky",
			"explanation":"Sticky, obviously."
		},

		{
			"question":"What is the only creature on Earth that Bender is sympathetic to?",
			"a":"Turtles",
			"b":"Goats",
			"c":"Cats",
			"d":"Butterflies",
			"answer":"Turtles",
			"explanation":"Turtles, stupid."
		},

		{
			"question":"What is missing from Zapp Brannigan's uniform?",
			"a":"Boots",
			"b":"Gloves",
			"c":"Pants",
			"d":"Belt",
			"answer":"Pants",
			"explanation":"Pants. Always pants."
		},

		{
			"question":"How is Professor Farnsworth related to Fry?",
			"a":"Great (x30) grandson",
			"b":"Great (x30) nephew",
			"c":"2nd cousin 20 times removed",
			"d":"He isn't",
			"answer":"Great (x30) nephew",
			"explanation":"Fry is also his own grandpa."
		},

		{
			"question":"Who is Bender's evil twin?",
			"a":"Calculon",
			"b":"Roberto",
			"c":"Flexo",
			"d":"Coilette",
			"answer":"Flexo",
			"explanation":"Flexo, obvi."
		},

		{
			"question":"What is Zoidberg's first name?",
			"a":"John",
			"b":"Phillip",
			"c":"Kevin",
			"d":"James",
			"answer":"John",
			"explanation":"John"
		},

		{
			"question":"How does the Femputer sentence Fry, Zapp, and Kif to die?",
			"a":"By firing squad",
			"b":"By snu snu",
			"c":"By dinosaur attack",
			"d":"By suicide booth",
			"answer":"By snu snu",
			"explanation":"The spirit is willing, but the flesh is spongy and bruised."
		},

		{
			"question":"What sport does Hermes compete in during the 2980 Olympics?",
			"a":"Octopus Wrestling",
			"b":"Blernsball",
			"c":"Swurling",
			"d":"Limbo",
			"answer":"Limbo",
			"explanation":"He's Jamaican, what did you expect?"
		},	

		{
			"question":"What is Zoidberg a doctor of?",
			"a":"Art History",
			"b":"General Medicine",
			"c":"Podiatry",
			"d":"Physics",
			"answer":"Art History",
			"explanation":"Clearly, he knows nothing about medicine."
		}
	]
};

var i=0;
var count=1;

function next(){
	i++;
	if (i<10) {
		$("#question").text(futuramaQuiz.questions[i].question);
		$("#explanation").text(futuramaQuiz.questions[i].explanation);

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
		$("#playArea").show();
		$("#question").text(futuramaQuiz.questions[0].question);
		$("#explanation").text(futuramaQuiz.questions[0].explanation);
	});

	//Submit answer, get feedback
	$("#submit").click(function(){
		event.preventDefault();
		$("#quiz").hide();
		$("#feedback").show();

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



});
//Quiz Object


