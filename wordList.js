var Word = require('./word.js');


//function to pick nd return random word from list
module.exports.newWord = function (){
	//word list
	var wordOptions = ["dog","cat","elephant","rhinoceros","ferret","hamster","pig","aardvark","armadillo","jellyfish","tardigrade","ameoba","pangolin","octopus"];
	// pick rabdom one
	var randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	// create as object
	var word = new Word(randomWord);
	// return object
	return word;

};
