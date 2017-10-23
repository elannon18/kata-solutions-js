//initialization
inarray=false;
var flavors = ["chocolate", "vanilla", "strawberry", "pistachio", "coffee", "banana"];
flavorlist=flavors.length;
var cone= [];
//create array with all regualr flavors
alert("These are the flavors to choose from: "+flavors);
//set a string variable equal to a value with a prompt
for(scoop=1;scoop<4;scoop++){
	do{
		var flavor =prompt("Enter an ice cream flavor");
		//check if that flavor is in our list
	
		for(index=0;index<flavorlist;index++){
			if (flavor==flavors[index]){
			inarray=true;
			}
		}
			if (inarray==false){
				alert(flavor+" does not exsist.");
			}
			if(flavor=="strawberry"){
			alert("All out of "+flavor);
			inarray=false;
			}
	}
	while (inarray==false)
		alert("Here is your "+flavor+"!");
	cone[scoop - 1]=flavor;
}
coneString = cone.join(' ');
alert("Enjoy your cone with "+coneString.toString()+"!");