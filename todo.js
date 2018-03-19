window.setTimeout(function()
{
	var todos = [];
	var goku;
	while(goku!="quit")
	{
		goku = prompt("what would you like to do");
		if(goku=="new")
		{
			goku = prompt("what would you like to add");
			todos.push(goku);
		}
		else if(goku=="list")
		{
			console.log("**********");
			todos.forEach(function(todo,index)
			{
				console.log(index + ": " + todo);
			});
			console.log("**********");

		}
		else if(goku=="delete")
		{
			var index = prompt("enter index number of element");
			todos.splice(index,1);
		}
	}
	console.log("YOU QUIT THE APP");

}, 500);
