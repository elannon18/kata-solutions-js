//set a string variable equal to a value with a prompt
var flavor =prompt("Enter an ice cream flavor");
if(flavor=="chocolate" || flavor=="vanilla"){
alert("Here's your "+flavor+"!");
}
else if(flavor=="strawberry"){
	alert("We don't have "+flavor+".")
}
else{
	alert("That is not a flavor.")
}