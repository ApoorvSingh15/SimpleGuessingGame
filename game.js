const secNum = 6;
var guessNum = Number(prompt("Enter a guess number between 1-10"));
if (guessNum < secNum) {
	alert("Number is too low");
}if(guessNum > secNum){
	alert("Number is too high");
}if(guessNum === secNum){
	alert("You got it right");
}
