var prompt = require('prompt');

var Question = function(question,answer){
	this.id = 0;
	this.question = question;
	this.answer = answer;

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


var question1 = new Question('my real name?','virgi');
var question2 = new Question('my real surname?','fernandez');
var question3 = new Question('where were you born?','madrid');
var theGame = [];
theGame.push(question1);
theGame.push(question2);
theGame.push(question3);


function questionAll(numQ,points){
	console.log(theGame[numQ].makeQuestion()); //the question
	prompt.start();
	prompt.get(['answer'], function (err, result) {
  	console.log(' your answer: ' + result.answer);

  	if ((result.answer === theGame[numQ].getAnswer()) && numQ < theGame.length -1  ) {
  		console.log('CORRECT -- NEXT');
  		points= points + 1;
  		numQ++;
  		console.log("\nyou got " + points + " points")
  		questionAll(numQ,points);
  	}else if( (result.answer === theGame[numQ].getAnswer()) && numQ === theGame.length -1 ){
			console.log('CORRECT -- GAME ENDED');
			points+= 1;
			console.log("\nyou got " + points + " points")
  	}else{
  		console.log('INCORRECT -- TRY AGAIN');
  		points-= 1;
  		console.log("\nyou got " + points + " points")
  		questionAll(numQ,points);
  	};

  	// if (points < 0) {
  	// 	points = 0;
  	// };
  	
	});

}

questionAll(0,0); // we begin the game with the first position of the array


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










