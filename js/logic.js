//Global Variables
var wordOptions = ["space","moon","SevenOfNine","universe","stars"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters =[];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Functions
function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length

	//Reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	// Populate blanks and successes with right number of blanks
	for (var i = 0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}	

	//Change HTML to reflect round conditions
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;
	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}
function checkLetters() {
	//check if letter exists in word
	var isLetterInWord = false;
	for (var i=0; i<numBlanks; i++) {
		if(selected[i] == letter) {
			isLetterInWord = true;
		}
	}
}
//Main Process

startGame();

document.onkeyup = function(event) {
	var letterGuessed = string.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	console.log(letterGuessed);
	
}
