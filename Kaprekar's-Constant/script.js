var div1 = document.getElementById("div1");
//input
var inputField = document.createElement("input");
inputField.id = "input";
inputField.setAttribute("type", "text");
inputField.setAttribute("pattern", "[0-9]{4}");
div1.appendChild(inputField);
//span
var span = document.createElement("span");
div1.appendChild(span);
//button
var button = document.createElement("input");
button.setAttribute("type", "button");
button.value = "Check";
button.id = "check";
span.appendChild(button);
//error div
var error = document.createElement("div");
error.id = "error";
div1.appendChild(error);
//eventlistner on check button
var c = document.querySelector('#check');
c.addEventListener('click', kaprekar);

//function executed on check button
function kaprekar() {
	//console.log(c);
	var array = [];
	n = document.getElementById('input').value;
	var validInput = /^[0-9]{4}$/;
	var validate = validInput.test(n);
	//console.log(validate);
	//Validating the input for 4-digit
	if (!validate) {
		document.getElementById('result').innerHTML = '';
		return document.getElementById('error').innerHTML = "Enter a valid 4-digit number";
	}
	//validating the input for Uniqueness 
	if (!unique(n)) {
		//console.log(unique(n));
		document.getElementById('result').innerHTML = '';
		return document.getElementById('error').innerHTML = "The number entered does not meet the Kaprekar's Constant uniqueness requirement";
	}
	//kaprekar's constant validation
	document.getElementById('error').innerHTML = '';
	document.getElementById('result').innerHTML = '';
	for (var c = 1; ; c++) {
		var nAscending = Number(n.toString().split("").sort(function (a, b) { return a - b }).join(""));
		var nDescending = Number(n.toString().split("").sort(function (a, b) { return b - a }).join(""));
		document.getElementById('result').append(nDescending + " - " + nAscending + " = " + (nDescending - nAscending));
		//break
		var breakline = document.createElement("br");
		document.getElementById("result").appendChild(breakline);
		n = nDescending - nAscending;
		if (array.includes(n)) {
			break;		//break to end the loop
		}
		array = array.concat(n);
	}
	//console.log(c);   count for kaprekar constant
}
//function for uniqueness
function unique(n) {
	n = n.toString();
	n = n.split('');
	for (var i = 0; i < n.length; i++) {
		var count = 0;
		for (var j = 0; j < n.length; j++) {
			if (n[i] === n[j]) {
				count += 1;
			}
		}
		if (count > 2) {
			return false;
		}
	}
	return true;
}
