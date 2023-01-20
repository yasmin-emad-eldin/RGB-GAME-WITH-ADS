var numSquares = 6;
var colors = [];//array
var pickedColor;
var squares = document.querySelectorAll(".square");// mskna al class
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var clickedColor;
var game= {}//obj

game.init = function(){
setupModeButtons();
setupSquares();
reset();
}

game.init();// function is called automatically every time the class is being used to create a new object.

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}




//The classList property is read-only, but you can use add() and remove() methods to add or remove CSS classes.



function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	
		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "play again";
				changeColors(pickedColor);
				h1.style.background = pickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}




function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Color"
	messageDisplay.textContent = "";
	//change colors of squares  34n homa 6 fa ana h3rdhom ezy
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){    //3/6
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "black";
}
resetButton.addEventListener("click", function(){
	reset();
})





function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);0-5
	return colors[random];
}

function generateRandomColors(numSquares){
	var arr = [];
	for(var i = 0; i < numSquares; i++)
		arr.push(randomColor());
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);0-255
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}