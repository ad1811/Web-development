var firstName = prompt("what is your first name");
var lastName = prompt("What is your last name");
var age = prompt("Enter your age");
console.log("your full name is "+firstName+" "+lastName);
console.log("you are "+age+" years old");
if(age<0)
{
	console.log("Error");
}
else if(age==21)
{
	console.log("Happy 21st birthday");
}
if(age%2!=0)
{
	console.log("your age is odd");
}
if(age % Math.sqrt(age) == 0)
{
	console.log("perfect square!");
}