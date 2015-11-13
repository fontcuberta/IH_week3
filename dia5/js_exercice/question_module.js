var Question = function(question,answer,points){
	this.id = 0;
	this.question = question;
	this.answer = answer;
	this.points = points;
	this.bonus = false;
}

Question.prototype.getId = function(){
	return this.id+= 1;
}
Question.prototype.getPoints = function(){
	return this.points;
}
Question.prototype.makeQuestion = function(){
	return this.question;
}
Question.prototype.getAnswer = function(){
	return this.answer;
}

// module.exports.theGame = theGame;
// module.exports.makeRandom = makeRandom;
module.exports.Question = Question;

