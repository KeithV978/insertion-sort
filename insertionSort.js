const insertionSort = (ArrayOfNumbers)=>{
	// Number of times the passes should be made
	for(let i=1; i<ArrayOfNumbers.length; i++){
		
		// This second loop defines the passes through the Array
		// Also this for loop combines an if statement within its definition.
		 
		for(let j = i; j > 0 && ArrayOfNumbers[j] < ArrayOfNumbers[j-1]; j--){
			[ArrayOfNumbers[j], ArrayOfNumbers[j-1]] = [ArrayOfNumbers[j-1], ArrayOfNumbers[j]];
		}
	}
	return ArrayOfNumbers;
}

		
// console.log(insertionSort([9,4,3,1,8,2,7,6]));