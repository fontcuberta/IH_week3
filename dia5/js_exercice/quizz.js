var prompt = require('prompt');

var Question = function(question,answer,points){
	this.id = 0;
	this.question = question;
	this.answer = answer;
	this.points = points;
	this.bonus = false;

	this.makeQuestion = function(){
		return this.question;
	}
	this.getAnswer = function(){
		return this.answer;
	}
}

Question.prototype.getId = function(){
	return this.id+= 1;
}
Question.prototype.getPoints = function(){
	return this.points;
}


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


function questionAll(numQ){

makeRandom();

	console.log(theGame[numQ].makeQuestion()); //the question
	prompt.start();
	prompt.get(['answer'], function (err, result) {
  	console.log(' your answer: ' + result.answer);

  	if ((result.answer === theGame[numQ].getAnswer()) && numQ < theGame.length -1  ) {
  		console.log('CORRECT -- NEXT');

	  		if (theGame[numQ].bonus === true) {
	  			totalPoints+= theGame[numQ].getPoints()*2;
	  		console.log("\nyou got " + totalPoints + " BONUS points!!!!!!");
	  		}else{
	  			totalPoints+= theGame[numQ].getPoints();
	  		};

  		numQ++;
  		console.log("\nyou got " + totalPoints + " points")
  		questionAll(numQ);
  	}else if( (result.answer === theGame[numQ].getAnswer()) && numQ === theGame.length -1 ){
			console.log('CORRECT -- GAME ENDED');

				if (theGame[numQ].bonus === true) {
	  			totalPoints+= theGame[numQ].getPoints()*2;
	  			console.log("\nyou got " + totalPoints + " BONUS points!!!!!!");

	  		}else{
	  			totalPoints+= theGame[numQ].getPoints();
	  		};

			console.log("\nyou got " + totalPoints + " points")
  	}else{
  		console.log('INCORRECT -- TRY AGAIN');
  		totalPoints-= theGame[numQ].getPoints();
  		console.log("\nyou got " + totalPoints + " points")
  		questionAll(numQ);
  	};

  	// if (points < 0) {
  	// 	points = 0;
  	// };
  	
	});

}

questionAll(0); // we begin the game with the first position of the array


	// console.log(theGame[1].makeQuestion()); //the question

	// prompt.get(['answer2'], function (err, result) {
 //  	console.log('let´s find out the correct answer');
 //  	console.log(' your answer: ' + result.answer);

 //  	// if (result.answer === theGame[0].getAnswer()) {
 //  	// 	console.log('CORRECT');
 //  	// }else if(i === 0){
 //  	// 	i = 0;
 //  	// }else{
 //  	// 	i--;
 //  	// };
 //  	// console.log('the correct answer is: ' + theGame[i].getAnswer());

	// });










