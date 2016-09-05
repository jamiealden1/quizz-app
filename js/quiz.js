/*futuramaQuiz = {
	question:"When Fry discovers that he's a billionaire, what does he buy?",
	a:"A Lucy Liu robot",
	b:"A lifetime supply of Slurm",
	c:"The last tin of sardines on Earth",
	d:"The Planet Express",
	answer:"The last tin of sardines on Earth"
	*/

futuramaQuiz = {
	"questions": [
		{
			"question":"When Fry discovers that he's a billionaire, what does he buy?",
			"a":"A Lucy Liu robot",
			"b":"A lifetime supply of Slurm",
			"c":"The last tin of sardines on Earth",
			"d":"The Planet Express",
			"answer":"The last tin of sardines on Earth"
		},

		{
			"question":"Finish this phrase: 'Morbo is pleased, but ____'",
			"a":"Angry",
			"b":"Sticky",
			"c":"Smelly",
			"d":"Confused",
			"answer":"Sticky"
		},

		{
			"question":"What is the only creature on Earth that Bender is sympathetic to?",
			"a":"Turtles",
			"b":"Goats",
			"c":"Cats",
			"d":"Butterflies",
			"answer":"Turtles"
		},

		{
			"question":"What is missing from Zapp Brannigan's uniform?",
			"a":"Boots",
			"b":"Gloves",
			"c":"Pants",
			"d":"Belt",
			"answer":"Pants"
		},

		{
			"question":"How is Professor Farnsworth related to Fry?",
			"a":"Great (x30) grandson",
			"b":"Great (x30) nephew",
			"c":"2nd cousin 20 times removed",
			"d":"He isn't",
			"answer":"Great (x30) nephew"
		},

		{
			"question":"Who is Bender's evil twin?",
			"a":"Calculon",
			"b":"Roberto",
			"c":"Flexo",
			"d":"Coilette",
			"answer":"Flexo"
		},

		{
			"question":"What is Zoidberg's first name?",
			"a":"John",
			"b":"Phillip",
			"c":"Kevin",
			"d":"James",
			"answer":"John"
		},

		{
			"question":"How does the Femputer sentence Fry, Zapp, and Kif to die?",
			"a":"By firing squad",
			"b":"By snu snu",
			"c":"By dinosaur attack",
			"d":"By suicide booth",
			"answer":"By snu snu"
		},

		{
			"question":"What sport does Hermes compete in during the 2980 Olympics?",
			"a":"Octopus Wrestling",
			"b":"Blernsball",
			"c":"Swurling",
			"d":"Limbo",
			"answer":"Limbo"
		},	

		{
			"question":"What is Zoidberg a doctor of?",
			"a":"Art History",
			"b":"General Medicine",
			"c":"Podiatry",
			"d":"Physics",
			"answer":"Art History"
		}
	]
};

$(document).ready(function(){

	//Initial launch, start game
	$("#start").click(function(){
		$("#intro").hide();
		$("#playArea").show();
		$("#question").text(futuramaQuiz.questions[0].question);
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
		for (i=1; i<(futuramaQuiz.questions.length); i.next) {
			console.log(futuramaQuiz.questions[i].question);
			//$("#question").text(futuramaQuiz.questions[i].question);
		};

	});

	//Show final score
	$("#final").click(function(){
		$("#feedback").hide();
		$("#finalScore").show();
	});



});
//Quiz Object


