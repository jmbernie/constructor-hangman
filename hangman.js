var inquirer = require('inquirer');


var Word = require('./wordList.js');

//var game = require ('./game.js');
var inquirer = require('inquirer');

// Game header
console.log('==========================================================================');
console.log('                              Animal Hangman                              ');
console.log('==========================================================================');
console.log('');
console.log('');


//get a random word to guess to start the game


startGame();

function startGame(){
	
	var word = Word.newWord();

	// call display
	word.display();

	// get letter
	getUserGuess(word);
}

// get the user guess
function getUserGuess(word){

	inquirer.prompt([{
					 name: "letter",
					 message: "Guess a letter: ",
					 validate : function(input){
					 		// regular expression to check for lower case letters only
					 		return /[a-z]/.test(input.trim().toLowerCase());
						}
					}])

	.then(function(guess){
		// calls the method which does the processing after checking if the letter is in the word
		word.letterInWord(guess.letter.toLowerCase());
		word.display();

		if( !word.guessed){
			if(word.guessesRemaining > 0){
				getUserGuess(word);
			}else{
				
				console.log("\n"+"                   No more guesses! You lost!\n\n");
				startGame();
			}
			
		}else if(word.guessed){
		
			console.log("\n"+"                   You figured it out! \n\n");
			startGame();
		}
	});
}