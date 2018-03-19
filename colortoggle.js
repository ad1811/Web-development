var button = document.querySelector("button");
var ispurple = false;

button.addEventListener("click",function()
{
	if(ispurple)
	{
		document.body.style.background = "white";
			}
	else{
	document.body.style.background = "purple";
	   }
	   ispurple = !ispurple;
});