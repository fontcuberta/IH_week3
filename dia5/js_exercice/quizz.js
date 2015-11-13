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


var question1 = new Question('my real name','virgi');
var question2 = new Question('my real surname','fernandez');
var theGame = [];
theGame.push(question1);
theGame.push(question2);

function questionAll(numQ){
	console.log(theGame[numQ].makeQuestion()); //the question
	prompt.start();
	prompt.get(['answer'], function (err, result) {
  	console.log(' your answer: ' + result.answer);

  	if ((result.answer === theGame[numQ].getAnswer()) && numQ < theGame.length -1  ) {
  		console.log('CORRECT -- NEXT');
  		numQ++;
  		questionAll(numQ);
  	}else if( (result.answer === theGame[numQ].getAnswer()) && numQ === theGame.length -1 ){
			console.log('CORRECT -- GAME ENDED');
			return;
  	}else{
  		console.log('INCORRECT -- TRY AGAIN');
  		questionAll(numQ);
  	};


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










