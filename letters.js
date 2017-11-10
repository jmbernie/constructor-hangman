// letter constructor
function Letter(letterGuessed){

// name is a string containing any one single alphabet 
this.name = letterGuessed;
// default = false, correct guess toggles to true
this.guessed = false;

}

// displays vs blank
Letter.prototype.display = function(){
		if(this.guessed === false){
			// hide the letter
			return '-';
		}else{
			return this.name;
		}
	}

module.exports = Letter;