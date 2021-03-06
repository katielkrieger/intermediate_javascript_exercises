// square

function Square(id) {
	this.state = ""; // can be "X", "O", or ""
	this.color = {
		"X": "blue",
		"O": "yellow"
	} // object with keys of this.state and values of the color
	this.id = id;
	this.div = document.getElementById(this.id); // ex: square_0_0
	this.row = this.id.split("_")[1]; 
	this.column = this.id.split("_")[2]; 
}

// function to change the state of a square (from blank to an X or O)
Square.prototype.changeState = function (newState) {
	this.state = newState;
	this.div.innerText = newState;
	this.div.style.color = this.color[this.state];
}

