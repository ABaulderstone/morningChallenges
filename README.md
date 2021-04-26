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
The Math.pow() function returns the base to the exponent power, as in baseexponent

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
