function narcissisticNumber(number) {
	let digits = toDigits(number);
    // Callback function gives back an array
	let power = digits.length;
    // console.log(power)
	let sum = digits.map((mult) => Math.pow(mult, power)).reduce((a, b) => a + b);
    // Math.pow()=[1,125,27] with reduce(accumalator, current value) = 153
	return sum === number;
    // Finally compare original input with the sum
}

function toDigits(myNumber) {
    // let show = myNumber.toString().split('').map(Number);
    // console.log(typeof show[1]);
    // console.log(myNumber.toString());
    // console.log(myNumber.toString().split(''));
    // console.log(myNumber.toString().split('').map(Number));
	return myNumber.toString().split('').map(Number);
}

console.log(narcissisticNumber(153))
console.log(narcissisticNumber(370))
console.log(narcissisticNumber(12))
console.log(narcissisticNumber(123))
console.log(narcissisticNumber(1634))



