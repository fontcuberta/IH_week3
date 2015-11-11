// console.log("hello world")

// function eat(food) {
// 	if(food === "Pizza") {
// 		console.log("Yay Pizza");
// 	}else if(food === "Cookies") {
// 		console.log("Cookies are good too!");

// 	}else if(food === "Brussel Sprouts") {
// 		console.log("Ok, enjoy eating Brussel Sprouts");
// 	}else {
// 		console.log("that´s not food dude");
// 	}
// }


// eat("Pizza");
// eat("Cookies");
// eat("Brussel Sprouts");
// eat("whatever");

var numbers = '80:70:90:100';


function averageColon(nums) {
	var nums_a = nums.split(':');

	//function map!!!!!!!!!!!!!!
	// var nums_tointeger = nums_a.map(function(elem){
	// 	return parseInt(elem);
	// })
	// console.log(nums_tointeger);

	// solucion fer forEach === map !!!!!!!
	// var sum = 0;
	// nums_a.forEach(function(number){
	// 	sum = sum + parseInt(number);
	// });
	// return sum/num+.length;

	var sum = nums_a.reduce(function(pre,tot){
		return parseInt(pre) + parseInt(tot)
	});

	var result = sum / nums_a.length;
	return(result);
}

console.log(averageColon(numbers));

// CLOSURES !!!!!!

function ticketBuilder(transport){
    return function(name){
        console.log("welcome " + name + " ,her is your ticket for the transport " + transport);
    }
}
/*var getPlaneTicket = ticketBuilder("plane");
getPlaneTicket("virgilio");*/

var getPlaneTicket = ticketBuilder("plane")("virgilio");

//------------------
var myApp = {};
var myApp.module1 = (function(){
	var num = 0;
	var my_interfaz = {};
	my_interfaz.increment = function(){
		return num++;
	}
	return my_interfaz;
})();



