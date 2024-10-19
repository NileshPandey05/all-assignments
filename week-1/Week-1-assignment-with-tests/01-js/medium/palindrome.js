/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if(str == "" || str == null) return true
	var originalSrtring = str.toLowerCase().replace(/,/g,"").replace(/[ !?.]/g,"")
	console.log(originalSrtring)
	var splitString = str.split("")
	// console.log(splitString)
	var lengthSplitString = splitString.length
	// console.log(lengthSplitString)
	var palidrome = []
	for(let i=0;i<splitString.length;i++){
		// console.log(splitString[lengthSplitString-i-1])
		palidrome.push(splitString[lengthSplitString-i-1])
	}
	// console.log(palidrome)
	var finalAns = palidrome.join().toLowerCase().replace(/,/g,"").replace(/[ !?.]/g,"")
	console.log(finalAns)
	if(finalAns == originalSrtring){
		return true
	}else{
		return 	false
	}
}

module.exports = isPalindrome;
