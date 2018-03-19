var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.getElementById("p2Display");
var reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");
var limit = document.querySelector("#limit");

numInput.addEventListener("change",function(){
   limit.textContent = numInput.value;
   winningScore = Number(numInput.value);
   resetFunc();
});

p1Button.addEventListener("click",function()
{
	if(!gameOver){
      p1Score++;
      if(p1Score === winningScore)
      {
      	p1Display.classList.add("winner");
      	gameOver = true;
      }
      p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click",function()
{
   if(!gameOver){
      p2Score++;
      if(p2Score === winningScore)
      {
      	p2Display.classList.add("winner");
      	gameOver = true;
      }
      p2Display.textContent = p2Score;
    }
});

reset.addEventListener("click",function()
{
    resetFunc();
});

function resetFunc()
{
	p1Score = p2Score = 0;
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
}