var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function()
{
      easyBtn.classList.add("selected");
      hardBtn.classList.remove("selected");
})

hardBtn.addEventListener("click",function()
{
	easyBtn.classList.remove("selected");
      hardBtn.classList.add("selected");

})

resetButton.addEventListener("click",function()
{
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "#232323";
})


colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor)
      {
      	messageDisplay.textContent = "Correct";
      	changeColors(clickedColor);
      	h1.style.backgroundColor = clickedColor;
      	resetButton.textContent = "Play Again?";
      }
      else
      {
      	this.style.backgroundColor = "#232323";
      	messageDisplay.textContent = "Try Again";
      }
	});
}

function changeColors(color)
{
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

function generateRandomColors(num)
{
	var arr = [];
	for(var i=0;i<num;i++)
	{
        arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}




