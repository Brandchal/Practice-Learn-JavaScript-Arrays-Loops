function generateRandomArray()
{
	var auxArray = [];
	var randomLength = Math.floor(Math.random()*100);
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
var myStupidArray = generateRandomArray();

//Your code here
//var totalItems = myStupidArray.length;

let theLastOne = myStupidArray[myStupidArray.length-1];
//console.log(myStupidArray);
//console.log(totalItems);
console.log(theLastOne);