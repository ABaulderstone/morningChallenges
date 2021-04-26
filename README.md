# Morning Challenges


## About:
Weekly morning challenge review code will be uploaded here on a weekly basis.

## Methods and Expressions used:
Following are list of methods, expressions and their explanations that were used in the challenges:

## .split() Method
The split() method will divide a given String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  

## Example usage:

```js

const string = 'The cat ran very fast till it was bored';

const words = string.split(' ');
console.log(words[3]);
// expected output: "very"

const chars = string.split('');
console.log(chars[8]);
// expected output: "r"

const strCopy = string.split();
console.log(strCopy);
// expected output: Array ["The cat ran very fast till it was bored"]

```
Referred from: [MDN docs String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

## .Object.is() Method
Object.is() method compares two values to determine whether they are the same.

## Example usage:
```js
Object.is('cat', 'cat');          // true
Object.is('less', 'more');          // false
Object.is(77, 77);                // true
```
Referred from: [MDN docs Object.is()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

## .slice() method
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

## Example usage:
```js
const animals = ['cat', 'dog', 'donkey', 'owl', 'penguin'];

console.log(animals.slice(2));
// expected output: Array ["donkey", "owl", "penguin"]

console.log(animals.slice(2, 4));
// expected output: Array ["donkey", "owl"]

console.log(animals.slice(1, 5));
// expected output: Array ["dog", "donkey", "owl", "penguin"]
```
Referred from: [MDN docs Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## Arrow functions expression:
Arrow function expressions are compact alternatives to traditional function expressions, but is limited and can't be used in all situations.

## Example usage:
```js
const stringer = (myStr) => {

console.log(myStr); 
// expected output: Hello World

}
stringer("Hello World");
```
Referred from: [MDN docs Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Math.pow() method:
The Math.pow() function returns the base to the exponent power, as in baseexponent.

## Example usage:
```js
console.log(Math.pow(5, 3));
// expected output: 125

console.log(Math.pow(12, 0.5));
// expected output: 3.4641016151377544

console.log(Math.pow(5, -2));
// expected output: 0.04

console.log(Math.pow(-7, 0.5));
// expected output: NaN

```
Referred from: [MDN docs Math.pow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)

## Regex (Regular Expressions) and .match() method:
Regular expressions is used for pattern matching the character combinations in strings.Regular expressions are also objects in javascript. Regex can be used with other string methods too like split() and replace() but in this example we shall use it with the .match 
method and similar can be found in Week-3's vowels.js.

The match() method will retrieve the result of matching a string against a regular expression.

## Example usage:
```js
const sentence = 'The Quick brown Fox jumps Over the lazy dog. It barked.';
const reg = /[A-Z]/g;
/* Finds the capital letters only specified between A to Z 
The g identifier stands for global and finds the letters globally present in the sentence.
*/
const result = sentence.match(reg);

console.log(result);
// expected output: Array ["T", "Q", "F", "O", "I"]
```
Referred from: [MDN docs Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
Referred from: [MDN docs .match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

## reduce() method:
The reduce() method will execute a reducer function provided by the user on each element of an array, which results in a single output value.

The reducer function takes four arguments:

- Accumulator
- Current Value
- Current Index
- Source Array

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.

## Example usage:
```js
const arr = [20,30,40,50];
const result = (accumulator, currentValue) => accumulator + currentValue;

// 20+30+40+50
console.log(arr.reduce(result));
// expected output: 140

// 15+20+30+40+504
console.log(arr.reduce(result, 15));
// expected output: 155
```
Referred from: [MDN docs .reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## .includes() method:
The includes() method will determine if an array has a certain value among its entries and will then return true or false as needed.

## Example usage:
```js
const arr = [13, 7, 9, 11];

console.log(arr.includes(9));
// expected output: true

const animals = ['cat', 'possum', 'eagle'];

console.log(animals.includes('eagle'));
// expected output: true

console.log(animals.includes('um'));
// expected output: false
```
Referred from: [MDN docs .includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)