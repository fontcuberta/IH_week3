module.exports.myApp = myApp;  //modulo que queremos exportar

// y lo que importamos
//podemos traer todo
var anApp = require('.pruebas.js').myApp; 
// or...
var pruebas = require('.pruebas.js') //traemos todo el modulo

// y ahora apuntamos a lo que qeramos en concreto de ese modulo

var myApp = pruebas.myApp;
var func = pruebas.my_otherr_function;




