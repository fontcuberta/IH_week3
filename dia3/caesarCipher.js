function caesarCipher (message) {
	var message_a = message.split("");
	
	var string_ciphered = [];

	message_a.forEach(function(letter){
		var my_ascii = letter.charCodeAt(0);

		if((my_ascii >= 65 && my_ascii <= 90) || (my_ascii >= 97 && my_ascii <= 122)){
			my_ascii-= 3;
		}

		var my_char = String.fromCharCode(my_ascii);
		string_ciphered.push(my_char);

	});

	string_ciphered.join("");
	return string_ciphered;
}

function string_to_char(string){
	var string_a = string.split("");
	var string_char = string_a.map(function(letter){
		return letter.charCodeAt(0);
	});
	return string_char;
}


var encrypted = caesarCipher("Et tu, brute?");
console.log(encrypted);





	