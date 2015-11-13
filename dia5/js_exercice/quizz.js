var prompt = require('prompt');
var my_module = require('./question_module.js');
var Question = my_module.Question;
// var theGame = my_module.theGame;
// var makeRandom = my_module.makeRandom;

var question1 = new Question('my real name?','virgi',2);
var question2 = new Question('my real surname?','fernandez',3);
var question3 = new Question('where were you born?','madrid',5);
var theGame = [];
theGame.push(question1);
theGame.push(question2);
theGame.push(question3);

var totalPoints = 0;


function makeRandom(){
	var randomnumber = Math.floor(Math.random()*theGame.length);
	theGame[randomnumber].bonus = true;
}

function checkBonus(numQ){
	if (theGame[numQ].bonus === true) {
		totalPoints+= theGame[numQ].getPoints()*2;
		console.log("\nyou got " + totalPoints + " BONUS points!!!!!!");
	}else{
		totalPoints+= theGame[numQ].getPoints();
	};
	return totalPoints;
}

function questionAll(numQ){

makeRandom();

	console.log(theGame[numQ].makeQuestion()); //the question
	prompt.start();
	prompt.get(['answer'], function (err, result) {
  	console.log(' your answer: ' + result.answer);

  	if ((result.answer === theGame[numQ].getAnswer()) && numQ < theGame.length -1  ) {
  		console.log('CORRECT -- NEXT');

	  	totalPoints = checkBonus(numQ);

  		numQ++;
  		console.log("\nyou got " + totalPoints + " points")
  		questionAll(numQ);
  	}else if( (result.answer === theGame[numQ].getAnswer()) && numQ === theGame.length -1 ){
			console.log('CORRECT -- GAME ENDED');

			totalPoints = checkBonus(numQ);

			console.log("\nyou got " + totalPoints + " points")
  	}else{
  		console.log('INCORRECT -- TRY AGAIN');
  		totalPoints-= theGame[numQ].getPoints();
  		console.log("\nyou got " + totalPoints + " points")
  		questionAll(numQ);
  	};
  	
	});

}

questionAll(0); // we begin the game with the first position of the array







