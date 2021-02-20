var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
function generateRandomArray()
{
	let auxArray = [];
	let randomLength = 2;
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}

let ale = generateRandomArray();
arr.push(ale);

console.log(arr);
