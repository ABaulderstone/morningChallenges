// Multiplies the sum of the numbers in the array by some number
function multiplySum(num,arr) {
	sum = 0;
	for(let num of arr) {
		sum += num;
	}
	return sum*num;
}

let factor = 3;
let numArray = [3,2,1];
answer = multiplySum(factor,numArray);
console.log("Expect 3 * 6(18) and got: " + answer);